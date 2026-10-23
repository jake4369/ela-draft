"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

import { validateEnquiry } from "./enquiryValidation";

const ValidationAttemptsContext = createContext(0);
const SubmissionStateContext = createContext(false);

const isDevelopment = process.env.NODE_ENV === "development";

// This public, build-time flag controls the form interface only.
// The API independently requires server-side production activation.
const isProductionFormEnabled =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_ENQUIRY_FORM_ENABLED === "true";

// Development tests stay available; production remains disabled by default.
const canSubmitEnquiries = isDevelopment || isProductionFormEnabled;

const REQUEST_TIMEOUT_MS = 15000;

const fieldLabels = {
  name: "Full name",
  email: "Email address",
  phone: "Phone number",
  postcode: "Property postcode",
  contactMethod: "Preferred contact method",
  message: "Project details",
};

const fieldIds = {
  name: "enquiry-name",
  email: "enquiry-email",
  phone: "enquiry-phone",
  postcode: "enquiry-postcode",
  message: "enquiry-message",
};

export function useValidationAttempts() {
  return useContext(ValidationAttemptsContext);
}

function getEnquiryValues(form) {
  const formData = new FormData(form);

  return {
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    phone: formData.get("phone") ?? "",
    postcode: formData.get("postcode") ?? "",
    contactMethod: formData.get("contactMethod") ?? "",
    message: formData.get("message") ?? "",
    website: formData.get("website") ?? "",
  };
}

export function EnquirySubmitButton({ children }) {
  const [isReady, setIsReady] = useState(false);
  const isSubmitting = useContext(SubmissionStateContext);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const isDisabled = !isReady || isSubmitting || !canSubmitEnquiries;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="
        inline-flex min-h-12 w-full items-center
        justify-center gap-3 rounded-lg
        bg-[#086bd4] px-6 py-3.5
        text-sm font-semibold text-white
        transition-colors duration-200
        hover:bg-[#0757ad]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#086bd4]
        disabled:cursor-not-allowed
        disabled:opacity-60
        sm:w-auto
      "
    >
      {isSubmitting ? (
        <>
          <span
            aria-hidden="true"
            className="
              h-4 w-4 animate-spin rounded-full
              border-2 border-white/40 border-t-white
            "
          />
          {isDevelopment
            ? "Sending test enquiry..."
            : "Sending your enquiry..."}
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default function EnquiryForm({ children }) {
  const formRef = useRef(null);
  const errorSummaryRef = useRef(null);
  const feedbackRef = useRef(null);
  const pendingRef = useRef(false);

  // Preserve the same ID and payload when retrying
  // an unchanged enquiry.
  const submissionRef = useRef(null);

  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Remount form fields after confirmed email acceptance.
  const [resetKey, setResetKey] = useState(0);

  const [focusRequest, setFocusRequest] = useState(0);
  const [feedbackRequest, setFeedbackRequest] = useState(0);

  const errorEntries = Object.entries(errors);
  const hasErrors = errorEntries.length > 0;

  useEffect(() => {
    if (focusRequest > 0) {
      errorSummaryRef.current?.focus();
    }
  }, [focusRequest]);

  useEffect(() => {
    if (feedbackRequest > 0) {
      feedbackRef.current?.focus();
    }
  }, [feedbackRequest]);

  function focusField(fieldName) {
    const form = formRef.current;

    if (!form) return;

    let field;

    if (fieldName === "contactMethod") {
      field = form.querySelector('input[name="contactMethod"]:checked');
    } else {
      const fieldId = fieldIds[fieldName];

      if (fieldId) {
        field = form.querySelector(`#${fieldId}`);
      }
    }

    field?.focus();
  }

  function handleFormChange(event) {
    if (pendingRef.current) return;

    const form = event.currentTarget;

    // Editing the enquiry creates a new submission.
    // An unchanged retry retains its previous UUID.
    submissionRef.current = null;

    if (result) {
      setResult(null);
    }

    if (attempts > 0) {
      setErrors(validateEnquiry(getEnquiryValues(form)));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (pendingRef.current) return;

    const form = event.currentTarget;
    const values = getEnquiryValues(form);

    // Always validate locally first.
    const validationErrors = validateEnquiry(values);

    setAttempts((previous) => previous + 1);
    setErrors(validationErrors);
    setResult(null);

    if (Object.keys(validationErrors).length > 0) {
      setFocusRequest((previous) => previous + 1);
      return;
    }

    // Keep public deployments disabled until explicitly activated.
    if (!canSubmitEnquiries) {
      setResult({
        type: "information",
        message:
          "Online enquiries are not yet available. " +
          "Please call ELA Pressure Washing on 07852 435168.",
      });

      setFeedbackRequest((previous) => previous + 1);
      return;
    }

    // Generate a new UUID for a new or changed enquiry.
    // Reuse the same UUID when retrying unchanged details.
    const fingerprint = JSON.stringify(values);

    if (
      !submissionRef.current ||
      submissionRef.current.fingerprint !== fingerprint
    ) {
      submissionRef.current = {
        id: crypto.randomUUID(),
        fingerprint,
      };
    }

    const requestValues = {
      ...values,
      submissionId: submissionRef.current.id,
    };

    pendingRef.current = true;
    setIsSubmitting(true);

    const controller = new AbortController();

    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestValues),
        cache: "no-store",
        signal: controller.signal,
      });

      // Firewall responses may not contain JSON.
      const data = await response.json().catch(() => null);

      // Handle server-side validation errors.
      if (response.status === 422 && data?.code === "VALIDATION_FAILED") {
        const serverErrors = {};

        if (
          data.errors &&
          typeof data.errors === "object" &&
          !Array.isArray(data.errors)
        ) {
          for (const [fieldName, message] of Object.entries(data.errors)) {
            if (
              Object.hasOwn(fieldLabels, fieldName) &&
              typeof message === "string"
            ) {
              serverErrors[fieldName] = message;
            }
          }
        }

        if (Object.keys(serverErrors).length > 0) {
          setErrors(serverErrors);
          setFocusRequest((previous) => previous + 1);
          return;
        }

        throw new Error("Unexpected validation response.");
      }

      // Handle Vercel Firewall rate limiting.
      if (response.status === 429) {
        setResult({
          type: "error",
          message:
            "Too many enquiry attempts have been made recently. " +
            "Please wait a few minutes before trying again, " +
            "or call ELA Pressure Washing on 07852 435168. " +
            "Your entered details have been preserved.",
        });

        setFeedbackRequest((previous) => previous + 1);
        return;
      }

      // The API can independently remain locked even if the browser
      // interface was accidentally enabled in a deployment.
      if (response.status === 503 && data?.code === "SERVICE_NOT_AVAILABLE") {
        setResult({
          type: "information",
          message:
            "Online enquiries are not yet available. " +
            "Please call ELA Pressure Washing on 07852 435168.",
        });

        setFeedbackRequest((previous) => previous + 1);
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      // Validation-only response: no email was sent.
      const isValidationOnly =
        data?.success === true &&
        data?.validated === true &&
        data?.simulated === true &&
        data?.emailSent === false;

      if (isValidationOnly) {
        setErrors({});

        setResult({
          type: "information",
          message:
            "Server-side validation passed. " +
            "No enquiry has been sent. " +
            "Your details have been retained.",
        });

        setFeedbackRequest((previous) => previous + 1);
        return;
      }

      // Genuine Resend test acceptance.
      // Delivery to Gmail still needs to be verified.
      const isAcceptedTestEmail =
        data?.success === true &&
        data?.testMode === true &&
        data?.emailAccepted === true &&
        data?.deliveryConfirmed === false;

      // Production acceptance: the provider accepted the email,
      // but final inbox delivery has not yet been confirmed.
      const isAcceptedProductionEmail =
        data?.success === true &&
        data?.productionMode === true &&
        data?.emailAccepted === true &&
        data?.deliveryConfirmed === false;

      const isExpectedAcceptance = isDevelopment
        ? isAcceptedTestEmail
        : isAcceptedProductionEmail;

      if (!isExpectedAcceptance) {
        throw new Error("Unexpected server response.");
      }

      // Only reset after confirmed Resend acceptance.
      // This remounts both uncontrolled fields and the
      // controlled phone/contact-preference components.
      setResetKey((previous) => previous + 1);

      setAttempts(0);
      setErrors({});

      // Clear the identifier so the next enquiry is new.
      submissionRef.current = null;

      setResult({
        type: "information",
        message: isDevelopment
          ? "Resend accepted your test enquiry for delivery " +
            "to the approved test inbox. " +
            "Email delivery is not yet confirmed. " +
            "The form has been reset. " +
            "This is a controlled test, not ELA's live enquiry service."
          : "Thank you. Your enquiry has been accepted for delivery " +
            "to ELA Pressure Washing. " +
            "We aim to respond as soon as possible. " +
            "For urgent enquiries, please call 07852 435168.",
      });

      setFeedbackRequest((previous) => previous + 1);
    } catch (error) {
      const timedOut = error?.name === "AbortError";

      // Do not claim that an email was not sent.
      // A timeout can occur after Resend has accepted it.
      let message;

      if (isDevelopment) {
        message = timedOut
          ? "The test request timed out. " +
            "We cannot confirm whether Resend accepted the email. " +
            "Your details have been preserved. " +
            "Retrying without editing will reuse the same submission identifier."
          : "The test email request could not be confirmed. " +
            "Your details have been preserved. " +
            "Retrying without editing will reuse the same submission identifier.";
      } else {
        message = timedOut
          ? "The enquiry request timed out, and we cannot confirm " +
            "whether it was accepted. " +
            "Your details have been preserved. " +
            "You can retry without editing, using the same enquiry reference, " +
            "or call ELA Pressure Washing on 07852 435168."
          : "We could not confirm whether your enquiry was accepted. " +
            "Your details have been preserved. " +
            "You can retry without editing, using the same enquiry reference, " +
            "or call ELA Pressure Washing on 07852 435168.";
      }

      setResult({ type: "error", message });

      setFeedbackRequest((previous) => previous + 1);
    } finally {
      window.clearTimeout(timeoutId);

      pendingRef.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <ValidationAttemptsContext.Provider value={attempts}>
      <SubmissionStateContext.Provider value={isSubmitting}>
        <form
          ref={formRef}
          method="post"
          action="/contact"
          aria-labelledby="contact-enquiry-heading"
          aria-busy={isSubmitting}
          noValidate
          onSubmit={handleSubmit}
          onChangeCapture={handleFormChange}
          className="mt-7 space-y-6"
        >
          {/* Accessible error summary */}
          {hasErrors && (
            <div
              ref={errorSummaryRef}
              tabIndex={-1}
              aria-labelledby="enquiry-error-heading"
              className="
                rounded-lg border border-red-200
                bg-red-50 p-4 text-red-900
                focus:outline-2
                focus:outline-offset-2
                focus:outline-red-700
              "
            >
              <p
                id="enquiry-error-heading"
                className="text-sm font-bold leading-6"
              >
                There is a problem with your enquiry
              </p>

              <p className="mt-2 text-sm leading-6">
                Please correct the following before submitting:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                {errorEntries.map(([fieldName, message]) => (
                  <li key={fieldName} className="text-sm leading-6">
                    <a
                      href={
                        fieldName === "contactMethod"
                          ? "#enquiry-contact-method"
                          : `#${fieldIds[fieldName]}`
                      }
                      onClick={(event) => {
                        event.preventDefault();
                        focusField(fieldName);
                      }}
                      className="
                        font-semibold underline
                        underline-offset-4
                        hover:text-red-700
                        focus-visible:rounded-sm
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-red-700
                      "
                    >
                      {fieldLabels[fieldName] ?? fieldName}
                    </a>

                    {`: ${message}`}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Submission feedback */}
          {result && (
            <div
              ref={feedbackRef}
              tabIndex={-1}
              role={result.type === "error" ? "alert" : "status"}
              className={`rounded-lg border p-4 text-sm leading-6 focus:outline-2 focus:outline-offset-2 ${
                result.type === "error"
                  ? "border-red-200 bg-red-50 text-red-800 focus:outline-red-700"
                  : "border-blue-200 bg-blue-50 text-[#06152c] focus:outline-[#086bd4]"
              }`}
            >
              {result.message}
            </div>
          )}

          {/* Existing enquiry fields and honeypot */}
          <fieldset
            key={resetKey}
            disabled={isSubmitting}
            aria-label="Enquiry details"
            className="m-0 min-w-0 space-y-6 border-0 p-0"
          >
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="enquiry-website">
                Website URL — leave this field blank
              </label>

              <input
                id="enquiry-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
                maxLength={200}
              />
            </div>

            {children}
          </fieldset>

          {/* Pending-state announcement */}
          {isSubmitting && (
            <p role="status" className="text-sm leading-6 text-slate-600">
              {isDevelopment
                ? "Sending your controlled test enquiry..."
                : "Sending your enquiry..."}
            </p>
          )}

          {/* Fallback while the public enquiry form is disabled */}
          {!canSubmitEnquiries && (
            <p className="text-sm leading-6 text-slate-600">
              Online enquiries are not yet available. Please call{" "}
              <a
                href="tel:+447852435168"
                className="
                  font-semibold text-[#0757ad]
                  underline underline-offset-4
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#086bd4]
                "
              >
                07852 435168
              </a>{" "}
              to discuss your project.
            </p>
          )}

          {/* JavaScript-disabled fallback */}
          <noscript>
            <p className="text-sm leading-6 text-red-700">
              This enquiry form requires JavaScript to work. Please call ELA
              Pressure Washing on 07852 435168 to discuss your requirements.
            </p>
          </noscript>
        </form>
      </SubmissionStateContext.Provider>
    </ValidationAttemptsContext.Provider>
  );
}
