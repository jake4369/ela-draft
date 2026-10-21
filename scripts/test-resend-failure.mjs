import { randomUUID } from "node:crypto";

/**
 * ELA — Resend Provider Failure Test
 *
 * Simulates an HTTP 503 response from Resend.
 * No real network request to Resend is made.
 */

const originalFetch = globalThis.fetch;

let interceptedRequests = 0;

// Intercept all fetch calls during this test.
globalThis.fetch = async (url) => {
  if (String(url) !== "https://api.resend.com/emails") {
    throw new Error("Unexpected network request blocked.");
  }

  interceptedRequests += 1;

  return new Response(
    JSON.stringify({
      message: "Simulated provider failure",
    }),
    {
      status: 503,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};

const testEnquiry = {
  name: "Provider Failure Test",
  email: "test@example.com",
  phone: "",
  postcode: "WV1 1AA",
  contactMethod: "email",
  message: "Testing how ELA handles an email provider failure.",
};

try {
  const { sendControlledTestEmail } =
    await import("../app/api/enquiries/sendTestEmail.js");

  console.log("Simulating Resend HTTP 503...");

  let caughtError = null;

  try {
    await sendControlledTestEmail(testEnquiry, randomUUID());
  } catch (error) {
    caughtError = error;
  }

  if (
    interceptedRequests === 1 &&
    caughtError?.message ===
      "Resend did not confirm acceptance of the test enquiry."
  ) {
    console.log("PASS: Provider failure was correctly rejected.");
    console.log("PASS: No email was sent.");
    console.log("PASS: The error contains no customer details.");
  } else {
    console.error("FAIL: Unexpected failure-handling result.");
    console.error("Intercepted requests:", interceptedRequests);
    process.exitCode = 1;
  }
} catch (error) {
  console.error("Test setup failed:", error.message);
  process.exitCode = 1;
} finally {
  globalThis.fetch = originalFetch;
}
