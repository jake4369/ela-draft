"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

import { validateEnquiry } from "./enquiryValidation";

const ValidationAttemptsContext = createContext(0);
const SubmissionStateContext = createContext(false);

const isDevelopment = process.env.NODE_ENV === "development";

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
  };
}

export function EnquirySubmitButton({ children }) {
  const [isReady, setIsReady] = useState(false);
  const isSubmitting = useContext(SubmissionStateContext);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const isDisabled = !isReady || isSubmitting || !isDevelopment;

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
              border-2 border-white/40
              border-t-white
            "
          />
          Checking...
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

  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [focusRequest, setFocusRequest] = useState(0);
  const [feedbackRequest, setFeedbackRequest] = useState(0);

  const errorEntries = Object.entries(errors);
  const hasErrors = errorEntries.length > 0;

  // Focus the error summary after React renders it.
  useEffect(() => {
    if (focusRequest > 0) {
      errorSummaryRef.current?.focus();
    }
  }, [focusRequest]);

  // Focus the result after the request completes.
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

    if (result) {
      setResult(null);
    }

    if (attempts > 0) {
      setErrors(validateEnquiry(getEnquiryValues(form)));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Prevent duplicate submissions.
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

    // Explicitly prevent production submission while
    // the backend and email integration are unfinished.
    if (!isDevelopment) {
      setResult({
        type: "information",
        message:
          "Online enquiries are not yet available. " +
          "Please call ELA Pressure Washing on 07852 435168.",
      });

      setFeedbackRequest((previous) => previous + 1);
      return;
    }

    pendingRef.current = true;
    setIsSubmitting(true);

    const controller = new AbortController();

    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, REQUEST_TIMEOUT_MS);

    try {
      // Real local API request.
      // The endpoint currently validates data only.
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        cache: "no-store",
        signal: controller.signal,
      });

      const data = await response.json().catch(() => null);

      // Server-side validation errors.
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

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      // Accept only the expected validation-only
      // response from our development endpoint.
      const isExpectedTestResult =
        data?.success === true &&
        data?.validated === true &&
        data?.simulated === true &&
        data?.emailSent === false;

      if (!isExpectedTestResult) {
        throw new Error("Unexpected server response.");
      }

      // Validation succeeded, but no email was sent.
      // Deliberately preserve every field value.
      setErrors({});

      setResult({
        type: "information",
        message:
          "Server-side validation passed successfully. " +
          "This is a development test only. " +
          "No enquiry has been sent and your details " +
          "have been retained in the form.",
      });

      setFeedbackRequest((previous) => previous + 1);
    } catch (error) {
      const timedOut = error?.name === "AbortError";

      setResult({
        type: "error",
        message: timedOut
          ? "The validation request timed out. " +
            "Your details have been preserved. " +
            "No email has been sent."
          : "The validation request could not be completed. " +
            "Your details have been preserved. " +
            "No email has been sent.",
      });

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

          {/* Server response feedback */}
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

          {/* Existing form fields */}
          {/* Disable all fields during the API request. */}
          <fieldset
            disabled={isSubmitting}
            aria-label="Enquiry details"
            className="m-0 min-w-0 space-y-6 border-0 p-0"
          >
            {children}
          </fieldset>

          {/* Accessible pending-state announcement */}
          {isSubmitting && (
            <p role="status" className="text-sm leading-6 text-slate-600">
              Checking your enquiry details...
            </p>
          )}

          {/* Production fallback */}
          {!isDevelopment && (
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
