/**
 * ELA Pressure Washing — Resend Delivery Test
 *
 * Sends one genuine email to an authorised test inbox.
 *
 * Run using:
 * node --env-file=.env.local scripts/test-resend.mjs
 *
 * No contact form or API endpoint is involved.
 */

const apiKey = process.env.RESEND_API_KEY?.trim();

const recipient = process.env.ELA_TEST_RECIPIENT?.trim().toLowerCase();

// Prevent accidental delivery to an unexpected recipient.
const expectedRecipient = "jsamuelsdev@gmail.com";

if (!apiKey) {
  console.error("Missing RESEND_API_KEY in .env.local");
  process.exit(1);
}

if (recipient !== expectedRecipient) {
  console.error(
    "Test recipient is missing or does not match the approved test address.",
  );
  process.exit(1);
}

const email = {
  from: "ELA Pressure Washing <enquiries@elapressurewashing.co.uk>",

  to: [recipient],

  reply_to: "elapressurewashing@gmail.com",

  subject: "ELA Contact Form — Delivery Test",

  text: [
    "ELA PRESSURE WASHING",
    "",
    "Resend Email Delivery Test",
    "",
    "This email confirms that the ELA website rebuild",
    "can submit an email through the Resend API.",
    "",
    "This message was sent using a standalone",
    "local development script.",
    "",
    "No customer enquiry was submitted.",
    "No real customer information was included.",
    "",
    "Test status: Email delivery verification.",
    "",
    "ELA Pressure Washing",
  ].join("\n"),
};

console.log("Starting ELA Resend delivery test...");
console.log(`Recipient: ${recipient}`);

try {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify(email),

    signal: AbortSignal.timeout(15000),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.id) {
    console.error(`Resend request failed: HTTP ${response.status}`);

    if (data?.message) {
      console.error(`Reason: ${data.message}`);
    }

    process.exitCode = 1;
  } else {
    console.log("");
    console.log("Resend accepted the test email.");
    console.log(`Email ID: ${data.id}`);
    console.log("");
    console.log("Check your Gmail inbox and Spam folder.");
    console.log("Delivery must still be confirmed.");
  }
} catch (error) {
  console.error("Unable to complete the Resend test.");
  console.error(error.message);

  process.exitCode = 1;
}
