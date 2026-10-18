import {
  ContactPreferencesProvider,
  PhoneField,
  ContactMethodField,
} from "./ContactPreferences";

import {
  NameField,
  EmailField,
  PostcodeField,
  MessageField,
} from "./RequiredFields";

import EnquiryForm from "./EnquiryForm";

import {
  IconArrowUpRight,
  IconPhone,
  IconMapPin,
  IconMessageCircle,
  IconCheck,
} from "@tabler/icons-react";

const inputClasses =
  "mt-2 block min-h-12 w-full rounded-lg border border-slate-300 " +
  "bg-white px-4 py-3 text-base text-[#06152c] " +
  "placeholder:text-slate-400 " +
  "focus-visible:border-[#086bd4] focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-[#086bd4]";

const labelClasses = "block text-sm font-semibold text-[#06152c]";

export default function ContactEnquiry() {
  return (
    <section
      aria-labelledby="contact-enquiry-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">
          {/* Main enquiry form */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(6,21,44,0.035)] sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
              Request a Free Quote
            </p>

            <h2
              id="contact-enquiry-heading"
              className="mt-4 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl"
            >
              Tell us about{" "}
              <span className="text-[#086bd4]">your project.</span>
            </h2>

            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600">
              Complete the details below and let us know what cleaning work you
              need. We'll be happy to discuss your requirements.
            </p>

            <p className="mt-6 text-xs text-slate-500">
              Fields marked <span aria-hidden="true">*</span> are required.
            </p>

            {/* Layout prototype — not connected to submission */}
            {/* Enquiry form — submission will be connected later */}
            {/* Enquiry form — submission will be connected later */}
            <EnquiryForm>
              <ContactPreferencesProvider>
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <NameField
                    inputClasses={inputClasses}
                    labelClasses={labelClasses}
                  />

                  {/* Email */}
                  <EmailField
                    inputClasses={inputClasses}
                    labelClasses={labelClasses}
                  />

                  {/* Phone */}
                  <PhoneField
                    inputClasses={inputClasses}
                    labelClasses={labelClasses}
                  />

                  {/* Property postcode */}
                  <PostcodeField
                    inputClasses={inputClasses}
                    labelClasses={labelClasses}
                  />
                </div>

                {/* Preferred contact method */}
                <ContactMethodField labelClasses={labelClasses} />

                {/* Project details */}
                <MessageField
                  inputClasses={inputClasses}
                  labelClasses={labelClasses}
                />

                {/* Privacy information */}
                <p className="border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
                  Your enquiry details will be used to respond to your request.
                  Full privacy information will be linked here before launch.
                </p>

                {/* Preview-only submit button */}

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#086bd4] px-6 py-3.5 text-sm font-semibold text-white sm:w-auto"
                >
                  Send Your Enquiry
                  <IconArrowUpRight size={19} stroke={1.8} aria-hidden="true" />
                </button>
              </ContactPreferencesProvider>
            </EnquiryForm>
          </div>

          {/* Contact information */}
          <aside
            aria-labelledby="contact-options-heading"
            className="min-w-0 space-y-6 lg:self-center"
          >
            <div className="relative isolate overflow-hidden rounded-2xl bg-[#06152c] p-6 text-white sm:p-8 lg:p-9">
              {/* Subtle background detailing */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-36 size-80 rounded-full border border-[#1a3b63]"
              />

              <div className="relative z-10">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-[#335475] bg-white/10 text-[#93c5fd]">
                  <IconMessageCircle
                    size={25}
                    stroke={1.6}
                    aria-hidden="true"
                  />
                </span>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#93c5fd]">
                  Speak to ELA
                </p>

                <h3
                  id="contact-options-heading"
                  className="mt-3 text-pretty text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
                >
                  Prefer to talk it through?
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  Have a question about your property or the cleaning services
                  available? You're welcome to give us a call.
                </p>

                <a
                  href="tel:+447852435168"
                  className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-lg text-lg font-semibold text-white underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#93c5fd]"
                >
                  <IconPhone
                    size={22}
                    stroke={1.8}
                    aria-hidden="true"
                    className="text-[#93c5fd]"
                  />
                  07852 435168
                  <IconArrowUpRight
                    size={18}
                    stroke={1.7}
                    aria-hidden="true"
                    className="text-[#93c5fd]"
                  />
                </a>

                <div className="mt-8 border-t border-white/15 pt-6">
                  <div className="flex items-start gap-3">
                    <IconMapPin
                      size={22}
                      stroke={1.7}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#93c5fd]"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        Based in Wolverhampton
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Providing exterior cleaning across the wider West
                        Midlands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Helpful enquiry guidance */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#06152c]">
                Helpful details to include
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                The more we know about your project, the easier it is to
                understand what you need.
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "The surface or area requiring cleaning",
                  "An approximate size, if known",
                  "Any particular concerns or requirements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCheck
                      size={19}
                      stroke={2}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#086bd4]"
                    />

                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
