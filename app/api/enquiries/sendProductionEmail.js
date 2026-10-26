/**
 * ELA Pressure Washing — Production Enquiry Email Sender
 *
 * Server-side only.
 *
 * Safety requirements:
 * - Production runtime only
 * - Explicit production email mode required
 * - Fixed, approved business recipient
 * - Resend API key required
 * - Valid UUID v4 submission identifier
 * - Resend idempotency protection
 *
 * This module must only be called after the API has
 * completed validation, origin and spam checks.
 */

import { createElement } from "react";
import { render } from "react-email";
import EmailTemplateImport from "../../../emails/EnquiryNotification.jsx";

const EnquiryNotification =
  typeof EmailTemplateImport === "function"
    ? EmailTemplateImport
    : EmailTemplateImport?.default;

const APPROVED_PRODUCTION_RECIPIENT = "elapressurewashing@gmail.com";

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

function formatProductionEnquiry(values) {
  return [
    "ELA PRESSURE WASHING",
    "NEW WEBSITE ENQUIRY",
    "",
    "A new enquiry has been submitted through",
    "the ELA Pressure Washing website.",
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
    "END OF ENQUIRY",
  ].join("\n");
}

export async function sendProductionEnquiryEmail(values, submissionId) {
  // Production runtime is mandatory.
  if (process.env.NODE_ENV !== "production") {
    throw new Error("Production email delivery is unavailable in development.");
  }

  // Production sending must be explicitly enabled.
  if (process.env.ENQUIRY_EMAIL_MODE !== "production") {
    throw new Error("Production email delivery is not enabled.");
  }

  // Require the exact approved ELA business inbox.
  const recipient = process.env.ELA_ENQUIRY_RECIPIENT?.trim().toLowerCase();

  if (recipient !== APPROVED_PRODUCTION_RECIPIENT) {
    throw new Error("The production enquiry recipient is not approved.");
  }

  // The Resend key remains server-side only.
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("Resend API key is not configured.");
  }

  // Every intended email must have a valid identifier.
  if (typeof submissionId !== "string" || !UUID_PATTERN.test(submissionId)) {
    throw new Error("A valid submission identifier is required.");
  }

  if (typeof EnquiryNotification !== "function") {
    throw new Error("The enquiry email template could not be loaded.");
  }

  const html = await render(createElement(EnquiryNotification, values));

  const emailPayload = {
    from: FROM_ADDRESS,

    to: [APPROVED_PRODUCTION_RECIPIENT],

    // Replies go to the validated customer email.
    reply_to: values.email.trim(),

    subject: `New website enquiry — ${safeSubjectText(values.name)}`,

    text: formatProductionEnquiry(values),
    html,
  };

  // Retrying an unchanged enquiry must reuse this key.
  // Production and testing have separate key namespaces.
  const idempotencyKey = `ela-contact-production/${submissionId}`;

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
    // Never expose credentials or customer information.
    throw new Error(
      "Resend did not confirm acceptance of the production enquiry.",
    );
  }

  return {
    accepted: true,
    emailId: data.id,
  };
}
