import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";

/**
 * Mock-only regression checks for ELA's controlled test sender.
 * Never sends an email or performs a real network request.
 */
const originalFetch = globalThis.fetch;
const envKeys = [
  "NODE_ENV",
  "ENQUIRY_EMAIL_MODE",
  "ELA_TEST_RECIPIENT",
  "RESEND_API_KEY",
];
const originalEnv = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));
const requests = [];
let providerStatus = 200;

globalThis.fetch = async (url, options = {}) => {
  assert.equal(String(url), "https://api.resend.com/emails", "Unexpected request URL");
  requests.push(options);
  return new Response(
    JSON.stringify(
      providerStatus === 200
        ? { id: "mock-controlled-email-id" }
        : { message: "Simulated Resend failure" },
    ),
    { status: providerStatus, headers: { "Content-Type": "application/json" } },
  );
};

try {
  process.env.NODE_ENV = "development";
  process.env.ENQUIRY_EMAIL_MODE = "test";
  process.env.ELA_TEST_RECIPIENT = "jsamuelsdev@gmail.com";
  process.env.RESEND_API_KEY = "fictional-test-key";

  const { sendControlledTestEmail } = await import(
    "../app/api/enquiries/sendTestEmail.js"
  );

  const values = {
    name: "Controlled Sender Test",
    email: "test@example.com",
    phone: "",
    postcode: "WV1 1AA",
    contactMethod: "email",
    message: "New-build brickwork and driveway cleaning.\nPlease contact me by email.",
  };
  const submissionId = randomUUID();

  console.log("ELA CONTROLLED EMAIL SENDER TEST");
  console.log("--------------------------------");

  const result = await sendControlledTestEmail(values, submissionId);
  assert.deepEqual(result, { accepted: true, emailId: "mock-controlled-email-id" });
  assert.equal(requests.length, 1);

  const request = requests[0];
  const payload = JSON.parse(request.body);
  assert.equal(request.method, "POST");
  assert.deepEqual(payload.to, ["jsamuelsdev@gmail.com"]);
  assert.equal(payload.from, "ELA Pressure Washing <enquiries@elapressurewashing.co.uk>");
  assert.equal(payload.reply_to, values.email);
  assert.equal(payload.subject, "[ELA TEST] New enquiry — Controlled Sender Test");
  assert.match(payload.text, /WEBSITE ENQUIRY — CONTROLLED TEST/);
  assert.match(payload.text, /WV1 1AA/);
  assert.match(payload.text, /New-build brickwork and driveway cleaning/);
  assert.equal(typeof payload.html, "string");
  assert.match(payload.html, /ELA PRESSURE WASHING/);
  assert.match(payload.html, /New website enquiry/);
  assert.match(payload.html, /Controlled Sender Test/);
  assert.match(payload.html, /WV1 1AA/);
  assert.match(payload.html, /New-build brickwork and driveway cleaning/);
  assert.match(payload.html, /mailto:test@example.com/);
  assert.equal(request.headers["Idempotency-Key"], `ela-contact-test/${submissionId}`);
  console.log("PASS: Branded HTML and plain-text fallback included.");
  console.log("PASS: Test recipient, sender, Reply-To and subject correct.");
  console.log("PASS: UUID idempotency key preserved.");

  process.env.ENQUIRY_EMAIL_MODE = "production";
  await assert.rejects(() => sendControlledTestEmail(values, randomUUID()), /not enabled/i);
  assert.equal(requests.length, 1);
  process.env.ENQUIRY_EMAIL_MODE = "test";
  console.log("PASS: Incorrect email mode rejected.");

  process.env.ELA_TEST_RECIPIENT = "unapproved@example.com";
  await assert.rejects(() => sendControlledTestEmail(values, randomUUID()), /not approved/i);
  assert.equal(requests.length, 1);
  process.env.ELA_TEST_RECIPIENT = "jsamuelsdev@gmail.com";
  console.log("PASS: Unapproved recipient rejected.");

  process.env.NODE_ENV = "production";
  await assert.rejects(() => sendControlledTestEmail(values, randomUUID()), /outside development/i);
  assert.equal(requests.length, 1);
  process.env.NODE_ENV = "development";
  console.log("PASS: Production runtime rejected.");

  await assert.rejects(() => sendControlledTestEmail(values, "not-a-uuid"), /valid submission identifier/i);
  assert.equal(requests.length, 1);
  console.log("PASS: Invalid submission ID rejected.");

  process.env.RESEND_API_KEY = "";
  await assert.rejects(() => sendControlledTestEmail(values, randomUUID()), /not configured/i);
  assert.equal(requests.length, 1);
  process.env.RESEND_API_KEY = "fictional-test-key";
  console.log("PASS: Missing API key rejected.");

  providerStatus = 503;
  await assert.rejects(() => sendControlledTestEmail(values, randomUUID()), /Resend did not confirm acceptance/i);
  assert.equal(requests.length, 2);
  console.log("PASS: Provider failure handled safely.");

  console.log("--------------------------------");
  console.log("ALL CONTROLLED SENDER TESTS PASSED.");
  console.log("No real network requests were made. No emails were sent.");
} catch (error) {
  console.error("TEST FAILED:", error.message);
  process.exitCode = 1;
} finally {
  globalThis.fetch = originalFetch;
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
}
