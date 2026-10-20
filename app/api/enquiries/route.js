import { NextResponse } from "next/server";

import { validateEnquiry } from "@/app/components/contact/enquiryValidation";

const MAX_REQUEST_BYTES = 12_000;

const expectedFields = [
  "name",
  "email",
  "phone",
  "postcode",
  "contactMethod",
  "message",
];

function jsonResponse(data, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

// Read the request incrementally rather than buffering
// an unlimited body into memory.
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
        // Stop consuming an oversized request.
        try {
          await reader.cancel();
        } catch {
          // The response will still reject the request.
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
  // Keep production submissions disabled until
  // real email delivery and abuse protection are ready.
  if (process.env.NODE_ENV !== "development") {
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

  // Reject browser requests from another origin.
  // This is defence-in-depth, not authentication
  // or a replacement for rate limiting.
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return jsonResponse(
      {
        success: false,
        code: "FORBIDDEN_ORIGIN",
        message: "This request origin is not permitted.",
      },
      403,
    );
  }

  // Accept JSON requests only.
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

  // Early rejection when Content-Length is supplied.
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

  // Enforce the actual byte limit during reading,
  // including requests without Content-Length.
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

  // The payload must be a JSON object.
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

  // Reject unsupported fields.
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

  // All supplied values must be strings.
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

  // Server-side validation is mandatory.
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

  // Validation-only success.
  // No email is sent, and no enquiry is stored.
  return jsonResponse({
    success: true,
    validated: true,
    simulated: true,
    emailSent: false,
    message: "Server-side validation passed. No enquiry has been sent.",
  });
}
