/**
 * ELA Pressure Washing — Controlled Enquiry Email Sender
 *
 * Server-side only.
 *
 * Safety restrictions:
 * - Local development only
 * - Explicit email test mode required
 * - Recipient fixed to the approved Gmail address
 * - Resend idempotency protection
 *
 * Must only be called after server-side validation
 * and spam checks have passed.
 */

import { createElement } from "react";
import { render } from "react-email";
import EmailTemplateImport from "../../../emails/EnquiryNotification.jsx";

const EnquiryNotification =
  typeof EmailTemplateImport === "function"
    ? EmailTemplateImport
    : EmailTemplateImport?.default;

const APPROVED_TEST_RECIPIENT = "jsamuelsdev@gmail.com";

const FROM_ADDRESS =
  "ELA Pressure Washing <enquiries@elapressurewashing.co.uk>";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function safeSubjectText(value) {
  return String(value)
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .slice(0, 80);
}

function formatEnquiry(values) {
  return [
    "ELA PRESSURE WASHING",
    "WEBSITE ENQUIRY — CONTROLLED TEST",
    "",
    "This email was generated during testing.",
    "No genuine customer enquiry should be submitted.",
    "",
    "CUSTOMER DETAILS",
    "----------------",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || "Not provided"}`,
    `Property postcode: ${values.postcode.trim()}`,
    `Preferred contact method: ${values.contactMethod}`,
    "",
    "PROJECT DETAILS",
    "---------------",
    values.message.trim(),
    "",
    "END OF TEST ENQUIRY",
  ].join("\n");
}

export async function sendControlledTestEmail(values, submissionId) {
  // Never permit email testing in production builds.
  if (process.env.NODE_ENV !== "development") {
    throw new Error(
      "Controlled email testing is unavailable outside development.",
    );
  }

  // Require explicit local opt-in.
  if (process.env.ENQUIRY_EMAIL_MODE !== "test") {
    throw new Error("Controlled email testing is not enabled.");
  }

  const recipient = process.env.ELA_TEST_RECIPIENT?.trim().toLowerCase();

  // Never permit arbitrary customer-supplied recipients.
  if (recipient !== APPROVED_TEST_RECIPIENT) {
    throw new Error("The configured test recipient is not approved.");
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("Resend API key is not configured.");
  }

  // Each genuine submission attempt will receive a UUID.
  // Retries of the same enquiry must reuse that UUID.
  if (typeof submissionId !== "string" || !UUID_PATTERN.test(submissionId)) {
    throw new Error("A valid submission identifier is required.");
  }

  if (typeof EnquiryNotification !== "function") {
    throw new Error("The enquiry email template could not be loaded.");
  }

  const html = await render(createElement(EnquiryNotification, values));

  const emailPayload = {
    from: FROM_ADDRESS,

    to: [APPROVED_TEST_RECIPIENT],

    // A reply addresses the validated enquiry sender.
    reply_to: values.email.trim(),

    subject: `[ELA TEST] New enquiry — ${safeSubjectText(values.name)}`,

    text: formatEnquiry(values),
    html,
  };

  // The key identifies one specific email.
  // Repeated requests for that email reuse the same key.
  const idempotencyKey = `ela-contact-test/${submissionId}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },

    body: JSON.stringify(emailPayload),

    signal: AbortSignal.timeout(15000),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.id) {
    // Do not expose credentials or enquiry contents.
    throw new Error("Resend did not confirm acceptance of the test enquiry.");
  }

  return {
    accepted: true,
    emailId: data.id,
  };
}
