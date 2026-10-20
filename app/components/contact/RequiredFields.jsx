"use client";

import { useEffect, useRef, useState } from "react";

import { useValidationAttempts } from "./EnquiryForm";

import {
  ENQUIRY_LIMITS,
  normalizePostcode,
  validateName,
  validateEmail,
  validatePostcode,
  validateMessage,
} from "./enquiryValidation";

function useFieldValidation(validate) {
  const submissionAttempts = useValidationAttempts();

  const inputRef = useRef(null);

  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (submissionAttempts > 0 && inputRef.current) {
      setError(validate(inputRef.current.value));
    }
  }, [submissionAttempts, validate]);

  function handleBlur(event) {
    setTouched(true);
    setError(validate(event.currentTarget.value));
  }

  function handleChange(event) {
    if (touched || submissionAttempts > 0) {
      setError(validate(event.currentTarget.value));
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

// Full name

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
        maxLength={ENQUIRY_LIMITS.name}
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

export function EmailField({ inputClasses, labelClasses }) {
  const { inputRef, error, handleBlur, handleChange } =
    useFieldValidation(validateEmail);

  return (
    <div>
      <label htmlFor="enquiry-email" className={labelClasses}>
        Email address <span className="text-[#086bd4]">*</span>
      </label>

      <input
        ref={inputRef}
        id="enquiry-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
        maxLength={ENQUIRY_LIMITS.email}
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

export function PostcodeField({ inputClasses, labelClasses }) {
  const { inputRef, error, handleBlur, handleChange } =
    useFieldValidation(validatePostcode);

  function handlePostcodeBlur(event) {
    const input = event.currentTarget;

    if (!validatePostcode(input.value)) {
      input.value = normalizePostcode(input.value);
    }

    handleBlur(event);
  }

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
        maxLength={ENQUIRY_LIMITS.postcode}
        title="Enter a valid UK postcode, for example WV1 1AA."
        onBlur={handlePostcodeBlur}
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
        maxLength={ENQUIRY_LIMITS.message}
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
