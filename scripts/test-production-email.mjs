import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";

/**
 * ELA Production Email Sender Test
 *
 * All Resend requests are intercepted.
 * No real emails can be sent by this script.
 */

const originalFetch = globalThis.fetch;

const environmentKeys = [
  "NODE_ENV",
  "ENQUIRY_EMAIL_MODE",
  "ELA_ENQUIRY_RECIPIENT",
  "RESEND_API_KEY",
];

const originalEnvironment = Object.fromEntries(
  environmentKeys.map((key) => [key, process.env[key]]),
);

const requests = [];
let simulatedStatus = 200;

// Intercept every network request.
// Never forward anything to the real network.
globalThis.fetch = async (url, options = {}) => {
  assert.equal(
    String(url),
    "https://api.resend.com/emails",
    "Unexpected network destination",
  );

  requests.push({ url: String(url), options });

  return new Response(
    JSON.stringify(
      simulatedStatus === 200
        ? { id: "mock-production-email-id" }
        : { message: "Simulated provider failure" },
    ),
    {
      status: simulatedStatus,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};

try {
  // Use fictional configuration only.
  process.env.NODE_ENV = "production";
  process.env.ENQUIRY_EMAIL_MODE = "production";
  process.env.ELA_ENQUIRY_RECIPIENT = "elapressurewashing@gmail.com";
  process.env.RESEND_API_KEY = "mock-key-not-real";

  const { sendProductionEnquiryEmail } =
    await import("../app/api/enquiries/sendProductionEmail.js");

  const submissionId = randomUUID();

  const enquiry = {
    name: "Production Sender Test",
    email: "test@example.com",
    phone: "",
    postcode: "WV1 1AA",
    contactMethod: "email",
    message: "Controlled production sender test.",
  };

  console.log("ELA PRODUCTION EMAIL SENDER TEST");
  console.log("--------------------------------");

  // TEST 1: Successful provider acceptance.
  const result = await sendProductionEnquiryEmail(enquiry, submissionId);

  assert.equal(result.accepted, true);
  assert.equal(result.emailId, "mock-production-email-id");
  assert.equal(requests.length, 1);

  const request = requests[0].options;
  const payload = JSON.parse(request.body);

  assert.equal(request.method, "POST");

  assert.deepEqual(payload.to, ["elapressurewashing@gmail.com"]);

  assert.equal(
    payload.from,
    "ELA Pressure Washing <enquiries@elapressurewashing.co.uk>",
  );

  assert.equal(payload.reply_to, "test@example.com");

  assert.equal(payload.subject, "New website enquiry — Production Sender Test");

  assert.ok(payload.text.includes("WV1 1AA"));

  assert.ok(payload.text.includes("Controlled production sender test."));

  assert.equal(
    request.headers["Idempotency-Key"],
    `ela-contact-production/${submissionId}`,
  );

  console.log("PASS: Correct production recipient.");
  console.log("PASS: Correct sender and Reply-To.");
  console.log("PASS: Correct subject and email content.");
  console.log("PASS: UUID idempotency key.");

  // TEST 2: Production mode must be explicitly enabled.
  process.env.ENQUIRY_EMAIL_MODE = "test";

  await assert.rejects(
    () => sendProductionEnquiryEmail(enquiry, randomUUID()),
    /Production email delivery is not enabled/,
  );

  assert.equal(requests.length, 1);

  console.log("PASS: Incorrect email mode rejected.");

  // TEST 3: Reject an unapproved recipient.
  process.env.ENQUIRY_EMAIL_MODE = "production";
  process.env.ELA_ENQUIRY_RECIPIENT = "unapproved@example.com";

  await assert.rejects(
    () => sendProductionEnquiryEmail(enquiry, randomUUID()),
    /production enquiry recipient is not approved/,
  );

  assert.equal(requests.length, 1);

  console.log("PASS: Unapproved recipient rejected.");

  // TEST 4: Reject development runtime.
  process.env.ELA_ENQUIRY_RECIPIENT = "elapressurewashing@gmail.com";
  process.env.NODE_ENV = "development";

  await assert.rejects(
    () => sendProductionEnquiryEmail(enquiry, randomUUID()),
    /unavailable in development/,
  );

  assert.equal(requests.length, 1);

  console.log("PASS: Development runtime rejected.");

  // TEST 5: Reject an invalid submission identifier.
  process.env.NODE_ENV = "production";

  await assert.rejects(
    () => sendProductionEnquiryEmail(enquiry, "invalid-submission-id"),
    /valid submission identifier is required/,
  );

  assert.equal(requests.length, 1);

  console.log("PASS: Invalid submission ID rejected.");

  // TEST 6: Simulate Resend rejecting the request.
  simulatedStatus = 503;

  await assert.rejects(
    () => sendProductionEnquiryEmail(enquiry, randomUUID()),
    /Resend did not confirm acceptance/,
  );

  assert.equal(requests.length, 2);

  console.log("PASS: Provider failure handled safely.");

  console.log("--------------------------------");
  console.log("ALL PRODUCTION SENDER TESTS PASSED.");
  console.log("No real network requests were made.");
  console.log("No emails were sent.");
} catch (error) {
  console.error("TEST FAILED:", error.message);
  process.exitCode = 1;
} finally {
  // Restore the original fetch function.
  globalThis.fetch = originalFetch;

  // Restore the previous environment.
  for (const key of environmentKeys) {
    const original = originalEnvironment[key];

    if (original === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = original;
    }
  }
}
