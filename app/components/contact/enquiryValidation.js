export const ENQUIRY_LIMITS = {
  name: 100,
  email: 254,
  phone: 25,
  postcode: 16,
  message: 3000,
};

export const CONTACT_METHODS = ["email", "phone", "text"];

export function validateName(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "Please enter your full name.";
  }

  if (value.length > ENQUIRY_LIMITS.name) {
    return "Your name is too long.";
  }

  return "";
}

export function validateEmail(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "Please enter your email address.";
  }

  const email = value.trim();

  if (
    email.length > ENQUIRY_LIMITS.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return "Please enter a valid email address.";
  }

  return "";
}

export function normalizePostcode(value) {
  if (typeof value !== "string") {
    return "";
  }

  const compact = value.toUpperCase().replace(/\s+/g, "");

  if (!compact) {
    return "";
  }

  return `${compact.slice(0, -3)} ${compact.slice(-3)}`;
}

export function validatePostcode(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "Please enter the property's postcode.";
  }

  if (value.length > ENQUIRY_LIMITS.postcode) {
    return "Please enter a valid UK postcode, such as WV1 1AA.";
  }

  const compact = value.toUpperCase().replace(/\s+/g, "");

  const postcodePattern = /^(?:[A-Z]{1,2}[0-9][A-Z0-9]?[0-9][A-Z]{2}|GIR0AA)$/;

  if (!postcodePattern.test(compact)) {
    return "Please enter a valid UK postcode, such as WV1 1AA.";
  }

  return "";
}

export function normalizePhoneNumber(value) {
  if (typeof value !== "string") {
    return "";
  }

  let phone = value.trim().replace(/[\s().-]/g, "");

  if (phone.startsWith("+44")) {
    phone = `0${phone.slice(3)}`;
  } else if (phone.startsWith("0044")) {
    phone = `0${phone.slice(4)}`;
  }

  return phone;
}

export function validateContactMethod(value) {
  if (!CONTACT_METHODS.includes(value)) {
    return "Please choose how you would prefer to be contacted.";
  }

  return "";
}

export function validatePhone(value, contactMethod = "email") {
  const phoneRequired = contactMethod === "phone" || contactMethod === "text";

  if (typeof value !== "string") {
    return "Please enter a valid UK telephone number.";
  }

  if (!value.trim()) {
    if (phoneRequired) {
      return "Please enter a phone number for your selected contact method.";
    }

    if (value.length > 0) {
      return "Please enter a valid phone number or leave this field empty.";
    }

    return "";
  }

  if (value.length > ENQUIRY_LIMITS.phone) {
    return "Please enter a valid UK telephone number.";
  }

  const phone = normalizePhoneNumber(value);

  // Text messages require a standard UK mobile number.
  // Excludes 070 personal numbering and 076 paging ranges.
  if (contactMethod === "text") {
    if (!/^07[1-57-9][0-9]{8}$/.test(phone)) {
      return "Please enter a valid UK mobile number for text messages.";
    }

    return "";
  }

  // General UK contact numbers, including common landline
  // and mobile formats.
  if (!/^0[0-9]{9,10}$/.test(phone)) {
    return "Please enter a valid UK telephone number.";
  }

  return "";
}

export function validateMessage(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "Please tell us about the work you need.";
  }

  const message = value.trim();

  if (message.length < 10) {
    return "Please enter at least 10 characters describing the work.";
  }

  if (value.length > ENQUIRY_LIMITS.message) {
    return "Your message is too long.";
  }

  return "";
}

export function validateEnquiry(values) {
  const errors = {
    name: validateName(values.name),
    email: validateEmail(values.email),
    phone: validatePhone(values.phone, values.contactMethod),
    postcode: validatePostcode(values.postcode),
    contactMethod: validateContactMethod(values.contactMethod),
    message: validateMessage(values.message),
  };

  return Object.fromEntries(
    Object.entries(errors).filter(([, error]) => Boolean(error)),
  );
}
