"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

import { validateEnquiry } from "./enquiryValidation";

const ValidationAttemptsContext = createContext(0);
const SubmissionStateContext = createContext(false);

const isDevelopment = process.env.NODE_ENV === "development";

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

/**
 * Development-only simulation.
 *
 * This function does not make a network request
 * and does not send an email.
 *
 * It will be replaced by the real submission
 * operation during the backend integration.
 */
async function simulateSubmission(outcome) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1200);
  });

  if (outcome === "failure") {
    throw new Error("Simulated submission failure.");
  }

  return {
    success: true,
    simulated: true,
  };
}

export function EnquirySubmitButton({ children }) {
  const [isReady, setIsReady] = useState(false);
  const isSubmitting = useContext(SubmissionStateContext);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <button
      type="submit"
      disabled={!isReady || isSubmitting}
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
          Processing...
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
  const [testOutcome, setTestOutcome] = useState("success");

  // Used to remount and reset all form fields after success.
  const [resetKey, setResetKey] = useState(0);

  const [focusRequest, setFocusRequest] = useState(0);
  const [feedbackRequest, setFeedbackRequest] = useState(0);

  const errorEntries = Object.entries(errors);
  const hasErrors = errorEntries.length > 0;

  // Focus the error summary after it is rendered.
  useEffect(() => {
    if (focusRequest > 0) {
      errorSummaryRef.current?.focus();
    }
  }, [focusRequest]);

  // Focus submission feedback after an outcome.
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

    // Keep existing errors in sync after a submission attempt.
    if (attempts > 0) {
      setErrors(validateEnquiry(getEnquiryValues(form)));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Guard against duplicate submissions.
    if (pendingRef.current) return;

    const form = event.currentTarget;
    const values = getEnquiryValues(form);

    const validationErrors = validateEnquiry(values);
    const invalidFields = Object.keys(validationErrors);

    setAttempts((previous) => previous + 1);
    setErrors(validationErrors);
    setResult(null);

    if (invalidFields.length > 0) {
      setFocusRequest((previous) => previous + 1);
      return;
    }

    // Outside local development, keep the form in
    // explicit validation-only mode.
    if (!isDevelopment) {
      setResult({
        type: "information",
        message:
          "Your details passed validation, but this enquiry form " +
          "is not yet connected to email. No enquiry has been sent. " +
          "Please contact ELA by telephone in the meantime.",
      });

      setFeedbackRequest((previous) => previous + 1);
      return;
    }

    pendingRef.current = true;
    setIsSubmitting(true);

    try {
      const response = await simulateSubmission(testOutcome);

      if (!response.success || !response.simulated) {
        throw new Error("Unexpected simulation response.");
      }

      // Only reset after the simulated successful result.
      // The real integration will use a confirmed API response.
      setResetKey((previous) => previous + 1);

      // Clear form-level validation state.
      setAttempts(0);
      setErrors({});

      setResult({
        type: "success",
        message:
          "Simulation completed successfully. No email has been sent. " +
          "All form fields have been reset for testing.",
      });

      setFeedbackRequest((previous) => previous + 1);
    } catch {
      // Preserve all entered values on failure.
      setResult({
        type: "error",
        message:
          "The simulated submission failed. " +
          "Your enquiry details have been preserved. " +
          "No email has been sent.",
      });

      setFeedbackRequest((previous) => previous + 1);
    } finally {
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

          {/* Existing form fields and controls.
              Changing resetKey remounts the complete subtree,
              resetting controlled and uncontrolled fields. */}
          <div key={resetKey} className="space-y-6">
            {children}
          </div>

          {/* Local development testing controls */}
          {isDevelopment && (
            <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4">
              <label
                htmlFor="enquiry-test-outcome"
                className="block text-sm font-semibold text-[#06152c]"
              >
                Development test outcome
              </label>

              <select
                id="enquiry-test-outcome"
                value={testOutcome}
                onChange={(event) => {
                  setTestOutcome(event.target.value);
                }}
                disabled={isSubmitting}
                className="
                  mt-2 min-h-11 w-full rounded-lg
                  border border-slate-300 bg-white
                  px-3 py-2 text-sm text-[#06152c]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#086bd4]
                  sm:max-w-xs
                "
              >
                <option value="success">Simulate successful submission</option>

                <option value="failure">Simulate failed submission</option>
              </select>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Local testing only. No email or network request will be made.
              </p>
            </div>
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
