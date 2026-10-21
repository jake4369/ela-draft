import { NextResponse } from "next/server";

import { validateEnquiry } from "@/app/components/contact/enquiryValidation";

import { sendControlledTestEmail } from "./sendTestEmail";

const MAX_REQUEST_BYTES = 12_000;

const isDevelopment = process.env.NODE_ENV === "development";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const expectedFields = [
  "name",
  "email",
  "phone",
  "postcode",
  "contactMethod",
  "message",
  "website",
  "submissionId",
];

const validationOnlyResponse = {
  success: true,
  validated: true,
  simulated: true,
  emailSent: false,
  message: "Server-side validation passed. No enquiry has been sent.",
};

function jsonResponse(data, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function getAllowedOrigins() {
  return new Set(
    (process.env.ENQUIRY_ALLOWED_ORIGINS ?? "")
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean),
  );
}

function isTrustedOrigin(request) {
  const origin = request.headers.get("origin");

  // Retain support for command-line validation tests
  // without an Origin header during development.
  if (!origin) {
    return isDevelopment;
  }

  return getAllowedOrigins().has(origin);
}

// Read the request incrementally, enforcing its byte limit.
async function readLimitedBody(request) {
  if (!request.body) {
    return {
      error: "INVALID_REQUEST",
      status: 400,
    };
  }

  const reader = request.body.getReader();

  const chunks = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      totalBytes += value.byteLength;

      if (totalBytes > MAX_REQUEST_BYTES) {
        try {
          await reader.cancel();
        } catch {
          // The request will still be rejected.
        }

        return {
          error: "REQUEST_TOO_LARGE",
          status: 413,
        };
      }

      chunks.push(value);
    }
  } catch {
    return {
      error: "INVALID_REQUEST",
      status: 400,
    };
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(totalBytes);

  let offset = 0;

  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return {
      text: new TextDecoder("utf-8", {
        fatal: true,
      }).decode(bytes),
    };
  } catch {
    return {
      error: "INVALID_REQUEST",
      status: 400,
    };
  }
}

export async function POST(request) {
  // Reject origins that are not explicitly trusted.
  if (!isTrustedOrigin(request)) {
    return jsonResponse(
      {
        success: false,
        code: "FORBIDDEN_ORIGIN",
        message: "This request origin is not permitted.",
      },
      403,
    );
  }

  // Never enable email delivery on the deployed website yet.
  if (!isDevelopment) {
    return jsonResponse(
      {
        success: false,
        code: "SERVICE_NOT_AVAILABLE",
        message:
          "Online enquiries are not available yet. Please contact ELA by telephone.",
      },
      503,
    );
  }

  const contentType = request.headers
    .get("content-type")
    ?.split(";")[0]
    .trim()
    .toLowerCase();

  if (contentType !== "application/json") {
    return jsonResponse(
      {
        success: false,
        code: "UNSUPPORTED_CONTENT_TYPE",
        message: "The request must contain JSON data.",
      },
      415,
    );
  }

  // Reject invalid or oversized Content-Length values.
  const contentLength = request.headers.get("content-length");

  if (contentLength !== null) {
    const declaredBytes = Number(contentLength);

    if (!/^\d+$/.test(contentLength) || !Number.isSafeInteger(declaredBytes)) {
      return jsonResponse(
        {
          success: false,
          code: "INVALID_REQUEST",
          message: "The request is invalid.",
        },
        400,
      );
    }

    if (declaredBytes > MAX_REQUEST_BYTES) {
      return jsonResponse(
        {
          success: false,
          code: "REQUEST_TOO_LARGE",
          message: "The enquiry exceeds the permitted size.",
        },
        413,
      );
    }
  }

  // Check the actual body size while reading.
  const bodyResult = await readLimitedBody(request);

  if (bodyResult.error) {
    return jsonResponse(
      {
        success: false,
        code: bodyResult.error,
        message:
          bodyResult.error === "REQUEST_TOO_LARGE"
            ? "The enquiry exceeds the permitted size."
            : "Unable to read the enquiry.",
      },
      bodyResult.status,
    );
  }

  let payload;

  try {
    payload = JSON.parse(bodyResult.text);
  } catch {
    return jsonResponse(
      {
        success: false,
        code: "INVALID_JSON",
        message: "The enquiry contains invalid JSON.",
      },
      400,
    );
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return jsonResponse(
      {
        success: false,
        code: "INVALID_REQUEST",
        message: "The enquiry data is invalid.",
      },
      400,
    );
  }

  // Reject fields we did not explicitly permit.
  const unexpectedFields = Object.keys(payload).filter(
    (field) => !expectedFields.includes(field),
  );

  if (unexpectedFields.length > 0) {
    return jsonResponse(
      {
        success: false,
        code: "UNEXPECTED_FIELDS",
        message: "The enquiry contains unsupported fields.",
      },
      400,
    );
  }

  // Every supplied field must be a string.
  for (const field of expectedFields) {
    if (payload[field] !== undefined && typeof payload[field] !== "string") {
      return jsonResponse(
        {
          success: false,
          code: "INVALID_FIELD_TYPE",
          message: "The enquiry contains an invalid field type.",
        },
        400,
      );
    }
  }

  const values = Object.fromEntries(
    expectedFields.map((field) => [field, payload[field] ?? ""]),
  );

  // Honeypot must be checked before email delivery.
  if (values.website.trim()) {
    console.info("[ELA enquiries] Honeypot submission discarded.");

    // Keep the trap private by returning the same
    // public shape as a validation-only success.
    return jsonResponse(validationOnlyResponse);
  }

  // Independently validate the customer information.
  const errors = validateEnquiry(values);

  if (Object.keys(errors).length > 0) {
    return jsonResponse(
      {
        success: false,
        code: "VALIDATION_FAILED",
        message: "Please correct the highlighted fields.",
        errors,
      },
      422,
    );
  }

  // Until explicitly enabled, preserve validation-only mode.
  if (process.env.ENQUIRY_EMAIL_MODE !== "test") {
    return jsonResponse(validationOnlyResponse);
  }

  // When sending actual test emails, require an Origin
  // header that matches an explicitly configured origin.
  // This is defence-in-depth, not authentication.
  const origin = request.headers.get("origin");

  if (!origin || !getAllowedOrigins().has(origin)) {
    return jsonResponse(
      {
        success: false,
        code: "FORBIDDEN_ORIGIN",
        message: "A trusted browser origin is required.",
      },
      403,
    );
  }

  // Each email must have a UUID so retries can reuse
  // the same Resend idempotency key.
  if (!UUID_PATTERN.test(values.submissionId)) {
    return jsonResponse(
      {
        success: false,
        code: "INVALID_SUBMISSION_ID",
        message: "The enquiry identifier is invalid.",
      },
      400,
    );
  }

  try {
    const delivery = await sendControlledTestEmail(values, values.submissionId);

    if (!delivery.accepted || !delivery.emailId) {
      throw new Error("Email acceptance was not confirmed.");
    }

    // Resend has accepted the email request.
    // Delivery to Gmail is not yet confirmed.
    return jsonResponse({
      success: true,
      testMode: true,
      emailAccepted: true,
      deliveryConfirmed: false,
      message: "Resend accepted the test enquiry for delivery.",
    });
  } catch {
    // An unsuccessful or interrupted request may have
    // an uncertain outcome. Do not claim no email was sent.
    console.error(
      "[ELA enquiries] Test email acceptance could not be confirmed.",
    );

    return jsonResponse(
      {
        success: false,
        code: "EMAIL_ACCEPTANCE_UNCONFIRMED",
        message: "The test email request could not be confirmed.",
      },
      502,
    );
  }
}
