"use client";

import { createContext, useContext, useState } from "react";

import { useValidationAttempts } from "./EnquiryForm";

const ContactPreferenceContext = createContext(null);

const contactOptions = [
  { label: "Email", value: "email" },
  { label: "Phone call", value: "phone" },
  { label: "Text message", value: "text" },
];

export function ContactPreferencesProvider({ children }) {
  const [contactMethod, setContactMethod] = useState("email");

  return (
    <ContactPreferenceContext.Provider
      value={{ contactMethod, setContactMethod }}
    >
      {children}
    </ContactPreferenceContext.Provider>
  );
}

function useContactPreference() {
  const context = useContext(ContactPreferenceContext);

  if (!context) {
    throw new Error(
      "Contact preference fields must be inside ContactPreferencesProvider.",
    );
  }

  return context;
}

export function PhoneField({ inputClasses, labelClasses }) {
  const { contactMethod } = useContactPreference();
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  const submissionAttempts = useValidationAttempts();

  const phoneRequired = contactMethod !== "email";

  const phonePattern =
    contactMethod === "text"
      ? String.raw`(?:0|\+44|0044)[\s.\-]*7(?:[\s.\-]*[0-9]){9}`
      : String.raw`(?:0|\+44|0044)(?:[\s.\-]*[0-9]){9,10}`;

  const phoneHint =
    contactMethod === "text"
      ? "Enter a UK mobile number, for example 07700 900123."
      : "Enter a UK telephone number, for example 01902 123456.";

  // Use the same pattern as the HTML input.
  const phoneRegex = new RegExp(`^(?:${phonePattern})$`);

  const isEmpty = phone.trim().length === 0;
  const matchesPattern = phoneRegex.test(phone);

  // Show errors only after the field has been visited.
  let error = "";

  if (touched || submissionAttempts > 0) {
    if (isEmpty) {
      if (phoneRequired) {
        error = "Please enter a phone number for your selected contact method.";
      } else if (phone.length > 0) {
        error = "Please enter a valid phone number or leave this field empty.";
      }
    } else if (!matchesPattern) {
      error =
        contactMethod === "text"
          ? "Please enter a valid UK mobile number for text messages."
          : "Please enter a valid UK telephone number.";
    }
  }

  const showError = Boolean(error);

  return (
    <div>
      <label htmlFor="enquiry-phone" className={labelClasses}>
        Phone number{" "}
        {phoneRequired ? (
          <span className="text-[#086bd4]">*</span>
        ) : (
          <span className="ml-1 font-normal text-slate-500">(optional)</span>
        )}
      </label>

      <input
        id="enquiry-phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        placeholder="Your contact number"
        required={phoneRequired}
        pattern={phonePattern}
        title={phoneHint}
        maxLength={25}
        value={phone}
        onChange={(event) => {
          setPhone(event.target.value);
        }}
        onBlur={() => setTouched(true)}
        aria-invalid={showError ? "true" : undefined}
        aria-describedby={
          showError
            ? "enquiry-phone-help enquiry-phone-error"
            : "enquiry-phone-help"
        }
        className={`${inputClasses} ${
          showError ? "1border-red-600! focus-visible:outline-red-600!" : ""
        }`}
      />

      <span id="enquiry-phone-help" className="sr-only">
        {phoneRequired
          ? `A phone number is required. ${phoneHint}`
          : `A phone number is optional. ${phoneHint}`}
      </span>

      {showError && (
        <p
          id="enquiry-phone-error"
          role="alert"
          className="mt-2 text-sm leading-6 text-red-700"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactMethodField({ labelClasses }) {
  const { contactMethod, setContactMethod } = useContactPreference();

  return (
    <fieldset className="min-w-0">
      <legend className={labelClasses}>
        How would you prefer us to contact you?
      </legend>

      <div className="mt-3 flex flex-wrap gap-3">
        {contactOptions.map((option) => (
          <label
            key={option.value}
            className="
              inline-flex min-h-11 cursor-pointer
              items-center gap-2.5 rounded-lg
              border border-slate-300 bg-white
              px-4 py-2.5
              text-sm font-medium text-[#06152c]
              transition-colors
              hover:border-[#086bd4]
              has-checked:border-[#086bd4]
              has-checked:bg-[#edf5ff]
            "
          >
            <input
              type="radio"
              name="contactMethod"
              value={option.value}
              checked={contactMethod === option.value}
              onChange={() => setContactMethod(option.value)}
              className="
                h-4 w-4 shrink-0
                accent-[#086bd4]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#086bd4]
              "
            />

            {option.label}
          </label>
        ))}
      </div>

      {contactMethod !== "email" && (
        <p role="status" className="mt-3 text-xs leading-5 text-slate-600">
          Please provide your phone number above for your chosen contact method.
        </p>
      )}
    </fieldset>
  );
}
