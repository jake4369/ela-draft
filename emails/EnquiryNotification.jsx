import React, { Fragment } from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "react-email";

/*
 * ELA Pressure Washing — owner-facing website enquiry notification.
 *
 * Template only: no Resend calls, no access to environment variables,
 * and no integration with the production or controlled-test senders.
 *
 * The values passed to this template will eventually come from the
 * enquiry API after its existing server-side validation.
 */

const CONTACT_METHOD_LABELS = {
  email: "Email",
  phone: "Phone call",
  text: "Text message",
};

function asDisplayText(value, fallback = "Not provided") {
  if (typeof value !== "string") return fallback;
  return value.trim() || fallback;
}

function safeEmailHref(value) {
  if (typeof value !== "string") return null;
  const email = value.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? `mailto:${email}` : null;
}

function safePhoneHref(value) {
  if (typeof value !== "string") return null;
  const phone = value.trim();
  if (!/^\+?[0-9() .-]{9,25}$/.test(phone)) return null;
  const dialable = phone.replace(/[^+\d]/g, "");
  return dialable.length >= 10 ? `tel:${dialable}` : null;
}

function postcodeMapsHref(value) {
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  const location = `${value.trim()}, UK`;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
}

function Detail({ label, value, href }) {
  return (
    <Section style={styles.detail}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {href ? (
        <Link href={href} style={styles.fieldLink}>
          {value}
        </Link>
      ) : (
        <Text style={styles.fieldValue}>{value}</Text>
      )}
    </Section>
  );
}

function ProjectMessage({ message }) {
  // Render plain text and explicit line breaks. React escapes submitted text;
  // do not use dangerouslySetInnerHTML for customer-provided content.
  const lines = asDisplayText(message, "No project details provided").split(
    /\r\n|\r|\n/,
  );

  return (
    <Text style={styles.messageText}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {index > 0 ? <br /> : null}
          {line || "\u00a0"}
        </Fragment>
      ))}
    </Text>
  );
}

export default function EnquiryNotification({
  name = "",
  email = "",
  phone = "",
  postcode = "",
  contactMethod = "email",
  message = "",
}) {
  const customerName = asDisplayText(name, "New customer");
  const emailAddress = asDisplayText(email);
  const phoneNumber = asDisplayText(phone);
  const postcodeText = asDisplayText(postcode);
  const preferredContact =
    CONTACT_METHOD_LABELS[contactMethod] ?? "Not specified";

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        New website enquiry from {customerName} — ELA Pressure Washing
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* A text-only brand mark avoids blocked remote images. */}
          <Section style={styles.header}>
            <Text style={styles.brand}>ELA PRESSURE WASHING</Text>
            <Heading as="h1" style={styles.title}>
              New website enquiry.
            </Heading>
            <Text style={styles.headerText}>
              A customer has contacted you through the ELA website.
            </Text>
          </Section>

          <Section style={styles.content}>
            <Text style={styles.eyebrow}>CUSTOMER DETAILS</Text>
            <Heading as="h2" style={styles.customerName}>
              {customerName}
            </Heading>
            <Hr style={styles.rule} />

            <Detail
              label="Email address"
              value={emailAddress}
              href={safeEmailHref(email)}
            />
            <Detail
              label="Telephone"
              value={phoneNumber}
              href={safePhoneHref(phone)}
            />

            <Detail
              label="Property postcode"
              value={postcodeText}
              href={postcodeMapsHref(postcode)}
            />

            <Detail label="Preferred contact" value={preferredContact} />

            <Hr style={styles.rule} />
            <Text style={styles.eyebrow}>PROJECT DETAILS</Text>
            <Section style={styles.messageBox}>
              <ProjectMessage message={message} />
            </Section>

            <Section style={styles.responseBox}>
              <Text style={styles.responseTitle}>Ready to respond?</Text>
              <Text style={styles.responseText}>
                Reply to this email to contact the customer directly, or use
                their preferred contact method shown above.
              </Text>
            </Section>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerMain}>
              ELA Pressure Washing · Website Enquiry Notification
            </Text>
            <Text style={styles.footerSub}>
              Automatically generated from the website contact form. Please
              handle customer details confidentially.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Fictional details for React Email's local preview server only.
// Nothing here is sent to a real inbox.
EnquiryNotification.PreviewProps = {
  name: "Alex Morgan",
  email: "alex.morgan@example.com",
  phone: "07700 900123",
  postcode: "WV1 1AA",
  contactMethod: "phone",
  message:
    "Hello, I'd like a quote for cleaning my block-paved driveway and the patio at the rear of my house.\n\nThere is quite a bit of moss and staining. I'd appreciate a call to discuss the options.",
};

const styles = {
  body: {
    margin: "0",
    padding: "28px 12px",
    backgroundColor: "#edf2f8",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#06152c",
  },
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    border: "1px solid #dfe7f0",
    borderRadius: "12px",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#06152c",
    padding: "34px 30px 36px",
  },
  brand: {
    margin: "0 0 20px",
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#94caff",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "29px",
    lineHeight: "36px",
    fontWeight: "700",
    color: "#ffffff",
  },
  headerText: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#d5e3f4",
  },
  content: {
    padding: "30px",
    backgroundColor: "#ffffff",
  },
  eyebrow: {
    margin: "0 0 12px",
    color: "#086bd4",
    fontSize: "11px",
    lineHeight: "17px",
    fontWeight: "700",
    letterSpacing: "1.6px",
  },
  customerName: {
    margin: "0",
    fontSize: "24px",
    lineHeight: "31px",
    color: "#06152c",
    fontWeight: "700",
  },
  rule: {
    borderColor: "#e2e8f0",
    borderWidth: "1px 0 0",
    margin: "22px 0",
  },
  detail: {
    padding: "0 0 15px",
  },
  fieldLabel: {
    margin: "0 0 5px",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#64748b",
    fontWeight: "400",
  },
  fieldValue: {
    margin: "0",
    fontSize: "15px",
    lineHeight: "23px",
    color: "#06152c",
    fontWeight: "600",
    wordBreak: "break-word",
  },
  fieldLink: {
    display: "inline-block",
    margin: "0",
    fontSize: "15px",
    lineHeight: "23px",
    color: "#086bd4",
    fontWeight: "600",
    textDecoration: "underline",
    wordBreak: "break-word",
  },
  messageBox: {
    margin: "0 0 22px",
    padding: "18px 20px",
    backgroundColor: "#f3f7fb",
    border: "1px solid #e4ebf3",
    borderRadius: "8px",
  },
  messageText: {
    margin: "0",
    fontSize: "15px",
    lineHeight: "25px",
    color: "#334155",
    wordBreak: "break-word",
  },
  responseBox: {
    backgroundColor: "#eaf3ff",
    borderLeft: "4px solid #086bd4",
    padding: "16px 20px",
    borderRadius: "6px",
  },
  responseTitle: {
    margin: "0 0 5px",
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: "700",
    color: "#06152c",
  },
  responseText: {
    margin: "0",
    fontSize: "13px",
    lineHeight: "21px",
    color: "#475569",
  },
  footer: {
    padding: "20px 28px 24px",
    backgroundColor: "#f8fafc",
    borderTop: "1px solid #e2e8f0",
  },
  footerMain: {
    margin: "0 0 6px",
    textAlign: "center",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#64748b",
  },
  footerSub: {
    margin: "0",
    textAlign: "center",
    fontSize: "11px",
    lineHeight: "17px",
    color: "#94a3b8",
  },
};
