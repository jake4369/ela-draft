"use client";

import { createContext, useContext, useState } from "react";

const ValidationAttemptsContext = createContext(0);

export function useValidationAttempts() {
  return useContext(ValidationAttemptsContext);
}

export default function EnquiryForm({ children }) {
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const fields = Array.from(form.elements).filter(
      (field) =>
        (field instanceof HTMLInputElement ||
          field instanceof HTMLTextAreaElement) &&
        field.willValidate,
    );

    const invalidFields = fields.filter((field) => {
      if (!field.checkValidity()) {
        return true;
      }

      const trimmed = field.value.trim();

      // Extra checks beyond native HTML validity.
      if (["name", "email", "postcode"].includes(field.name) && !trimmed) {
        return true;
      }

      if (field.name === "message" && trimmed.length < 10) {
        return true;
      }

      if (field.name === "phone" && field.value && !trimmed) {
        return true;
      }

      return false;
    });

    // Tell all the field components to display errors.
    setAttempts((previous) => previous + 1);

    if (invalidFields.length > 0) {
      const count = invalidFields.length;

      setResult({
        error: true,
        message: `Please correct ${count} ${
          count === 1 ? "field" : "fields"
        } before sending your enquiry.`,
      });

      const firstInvalidField = invalidFields[0];

      // Allow React to render the errors before moving focus.
      requestAnimationFrame(() => {
        if (firstInvalidField.isConnected) {
          firstInvalidField.focus();
        }
      });

      return;
    }

    // Test-only success. No network request is made.
    setResult({
      error: false,
      message:
        "All fields have passed this validation test. " +
        "No enquiry has been sent.",
    });
  }

  return (
    <ValidationAttemptsContext.Provider value={attempts}>
      <form
        aria-labelledby="contact-enquiry-heading"
        noValidate
        onSubmit={handleSubmit}
        onChangeCapture={() => setResult(null)}
        className="mt-7 space-y-6"
      >
        {result && (
          <div
            key={attempts}
            role={result.error ? "alert" : "status"}
            className={`rounded-lg border p-4 text-sm leading-6 ${
              result.error
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-blue-200 bg-blue-50 text-[#06152c]"
            }`}
          >
            {result.message}
          </div>
        )}

        {children}
      </form>
    </ValidationAttemptsContext.Provider>
  );
}
