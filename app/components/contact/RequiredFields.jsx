"use client";

import { useEffect, useRef, useState } from "react";

import { useValidationAttempts } from "./EnquiryForm";

function useFieldValidation(validate) {
  const submissionAttempts = useValidationAttempts();

  const inputRef = useRef(null);

  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  // Revalidate when the user attempts submission.
  useEffect(() => {
    if (submissionAttempts > 0 && inputRef.current) {
      setError(validate(inputRef.current));
    }
  }, [submissionAttempts, validate]);

  function handleBlur(event) {
    setTouched(true);
    setError(validate(event.currentTarget));
  }

  function handleChange(event) {
    if (touched || submissionAttempts > 0) {
      setError(validate(event.currentTarget));
    }
  }

  return {
    inputRef,
    error,
    handleBlur,
    handleChange,
  };
}

function FieldError({ id, error }) {
  if (!error) return null;

  return (
    <p id={id} role="alert" className="mt-2 text-sm leading-6 text-red-700">
      {error}
    </p>
  );
}

function getErrorClasses(error) {
  return error ? "!border-red-600 focus-visible:!outline-red-600" : "";
}

// Name
// Name validation

function validateName(input) {
  if (!input.value.trim()) {
    return "Please enter your full name.";
  }

  return "";
}

export function NameField({ inputClasses, labelClasses }) {
  const { inputRef, error, handleBlur, handleChange } =
    useFieldValidation(validateName);

  return (
    <div>
      <label htmlFor="enquiry-name" className={labelClasses}>
        Full name <span className="text-[#086bd4]">*</span>
      </label>

      <input
        ref={inputRef}
        id="enquiry-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Your full name"
        required
        maxLength={100}
        onBlur={handleBlur}
        onChange={handleChange}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? "enquiry-name-error" : undefined}
        className={`${inputClasses} ${getErrorClasses(error)}`}
      />

      <FieldError id="enquiry-name-error" error={error} />
    </div>
  );
}

// Email address

function validateEmail(input) {
  if (!input.value.trim()) {
    return "Please enter your email address.";
  }

  if (input.validity.typeMismatch) {
    return "Please enter a valid email address.";
  }

  return "";
}

export function EmailField({ inputClasses, labelClasses }) {
  const { inputRef, error, handleBlur, handleChange } =
    useFieldValidation(validateEmail);

  return (
    <div>
      <label htmlFor="enquiry-email" className={labelClasses}>
        Email address <span className="text-[#086bd4]">*</span>
      </label>

      <input
        id="enquiry-email"
        name="email"
        type="email"
        ref={inputRef}
        autoComplete="email"
        placeholder="you@example.com"
        required
        maxLength={254}
        onBlur={handleBlur}
        onChange={handleChange}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? "enquiry-email-error" : undefined}
        className={`${inputClasses} ${getErrorClasses(error)}`}
      />

      <FieldError id="enquiry-email-error" error={error} />
    </div>
  );
}

// UK property postcode

function validatePostcode(input) {
  if (!input.value.trim()) {
    return "Please enter the property's postcode.";
  }

  if (input.validity.patternMismatch) {
    return "Please enter a valid UK postcode, such as WV1 1AA.";
  }

  return "";
}

export function PostcodeField({ inputClasses, labelClasses }) {
  const { inputRef, error, handleBlur, handleChange } =
    useFieldValidation(validatePostcode);

  return (
    <div>
      <label htmlFor="enquiry-postcode" className={labelClasses}>
        Property postcode <span className="text-[#086bd4]">*</span>
      </label>

      <input
        id="enquiry-postcode"
        name="postcode"
        type="text"
        ref={inputRef}
        autoComplete="postal-code"
        autoCapitalize="characters"
        spellCheck={false}
        placeholder="e.g. WV1 1AA"
        required
        pattern="[ ]*(?:[A-Za-z]{1,2}[0-9][A-Za-z0-9]?[ ]*[0-9][A-Za-z]{2}|[Gg][Ii][Rr][ ]*0[Aa][Aa])[ ]*"
        title="Enter a valid UK postcode, for example WV1 1AA."
        onBlur={handleBlur}
        onChange={handleChange}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={
          error ? "postcode-help enquiry-postcode-error" : "postcode-help"
        }
        className={`${inputClasses} ${getErrorClasses(error)}`}
      />

      <p id="postcode-help" className="mt-2 text-xs leading-5 text-slate-500">
        Enter your property's postcode, e.g. WV1 1AA. This helps us check
        coverage for your area.
      </p>

      <FieldError id="enquiry-postcode-error" error={error} />
    </div>
  );
}

// Project details

function validateMessage(input) {
  const message = input.value.trim();

  if (!message) {
    return "Please tell us about the work you need.";
  }

  if (message.length < 10) {
    return "Please enter at least 10 characters describing the work.";
  }

  return "";
}

export function MessageField({ inputClasses, labelClasses }) {
  const { inputRef, error, handleBlur, handleChange } =
    useFieldValidation(validateMessage);

  return (
    <div>
      <label htmlFor="enquiry-message" className={labelClasses}>
        Tell us about the work you need{" "}
        <span className="text-[#086bd4]">*</span>
      </label>

      <textarea
        id="enquiry-message"
        name="message"
        ref={inputRef}
        rows={6}
        required
        minLength={10}
        maxLength={3000}
        placeholder="Tell us what you'd like cleaned, the approximate size of the area, and anything else you think would be helpful..."
        onBlur={handleBlur}
        onChange={handleChange}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? "enquiry-message-error" : undefined}
        className={`${inputClasses} resize-y ${getErrorClasses(error)}`}
      />

      <FieldError id="enquiry-message-error" error={error} />
    </div>
  );
}
