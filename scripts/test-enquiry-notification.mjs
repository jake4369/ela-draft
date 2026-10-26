import assert from "node:assert/strict";
import { createElement } from "react";
import { render } from "react-email";

import EmailTemplateImport from "../emails/EnquiryNotification.jsx";

const EnquiryNotification =
  typeof EmailTemplateImport === "function"
    ? EmailTemplateImport
    : EmailTemplateImport?.default;

assert.equal(
  typeof EnquiryNotification,
  "function",
  "EnquiryNotification must resolve to a React component function.",
);

// Standalone render tests. No API endpoint or Resend sender is called.
const originalFetch = globalThis.fetch;
globalThis.fetch = async () => {
  throw new Error("Unexpected network request during email render test.");
};

try {
  const enquiry = {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "07700 900123",
    postcode: "WV1 1AA",
    contactMethod: "phone",
    message: "Driveway cleaning quote.\n\nPlease call me.",
  };

  const html = await render(createElement(EnquiryNotification, enquiry));

  const mapsHref = html.match(
    /href="(https:\/\/www\.google\.com\/maps\/search\/\?[^"]+)"/,
  )?.[1];

  assert.ok(mapsHref, "The postcode should link to Google Maps.");

  assert.ok(
    mapsHref.includes(`query=${encodeURIComponent(`${enquiry.postcode}, UK`)}`),
    "The Maps link should contain the correctly encoded postcode.",
  );

  console.log("PASS: Postcode links correctly to Google Maps.");

  assert.match(html, /<html\b/i);
  assert.match(html, /ELA PRESSURE WASHING/);
  assert.match(html, /New website enquiry/);
  assert.match(html, /Alex Morgan/);
  assert.match(html, /mailto:alex\.morgan@example\.com/);
  assert.match(html, /tel:07700900123/);
  assert.match(html, /WV1 1AA/);
  assert.match(html, /Phone call/);
  assert.match(
    html,
    /Driveway cleaning quote\.[\s\S]*?<br\s*\/?\s*>[\s\S]*?<br\s*\/?\s*>[\s\S]*?Please call me\./,
  );
  console.log("PASS: HTML contains enquiry details, links and line breaks.");

  const hostileHtml = await render(
    createElement(EnquiryNotification, {
      ...enquiry,
      name: "Taylor <img src=x onerror=alert(1)>",
      email: "not-an-email",
      phone: "not-a-phone-number",
      message: "Please quote <script>alert(1)</script>.",
    }),
  );

  assert.match(hostileHtml, /&lt;script&gt;/);
  assert.match(hostileHtml, /&lt;img /);
  assert.doesNotMatch(hostileHtml, /<script\b/i);
  assert.doesNotMatch(hostileHtml, /<img\s+src=x/i);
  assert.doesNotMatch(hostileHtml, /mailto:not-an-email/);
  assert.doesNotMatch(hostileHtml, /tel:not-a-phone-number/);
  console.log(
    "PASS: Customer-provided HTML is escaped; invalid links are omitted.",
  );

  const withoutPhone = await render(
    createElement(EnquiryNotification, { ...enquiry, phone: "" }),
  );
  assert.match(withoutPhone, /Not provided/);
  console.log("PASS: Missing optional telephone displays a fallback.");

  console.log("ALL ENQUIRY TEMPLATE RENDER TESTS PASSED.");
  console.log("No email was sent and no network request was made.");
} finally {
  globalThis.fetch = originalFetch;
}
