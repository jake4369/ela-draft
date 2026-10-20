import Link from "next/link";

const pageTitle = "Privacy Policy | ELA Pressure Washing";

const pageDescription =
  "Read the ELA Pressure Washing Privacy Policy, including how we handle customer enquiries, personal information and data protection rights.";

const socialImage = "/assets/images/hero/hero.webp";

const socialImageAlt =
  "ELA Pressure Washing operative carrying out professional exterior cleaning";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/privacy",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: socialImage,
        alt: socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: socialImage,
        alt: socialImageAlt,
      },
    ],
  },
};

const policySections = [
  { id: "who-we-are", title: "Who we are" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use-information", title: "How we use your information" },
  { id: "lawful-basis", title: "Our lawful basis for processing" },
  { id: "storage-and-sharing", title: "How information is stored and shared" },
  { id: "international-transfers", title: "International data transfers" },
  { id: "retention", title: "How long we keep your information" },
  { id: "cookies", title: "Website analytics and cookies" },
  { id: "security", title: "Keeping your information secure" },
  { id: "your-rights", title: "Your data protection rights" },
  { id: "complaints", title: "Complaints" },
  { id: "changes", title: "Changes to this policy" },
];

const paragraphClasses =
  "text-sm leading-7 text-slate-600 sm:text-base sm:leading-8";

const linkClasses =
  "font-semibold text-[#0757ad] underline underline-offset-4 " +
  "hover:text-[#06152c] focus-visible:rounded-sm " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "focus-visible:outline-[#086bd4]";

function PolicySection({ id, number, title, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 border-b border-[#dce6f2] py-9 first:pt-0 last:border-b-0 last:pb-0 sm:py-10"
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-1 text-xs font-bold tracking-[0.14em] text-[#086bd4]"
        >
          {String(number).padStart(2, "0")}
        </span>

        <h2
          id={`${id}-heading`}
          className="text-xl font-bold leading-snug tracking-tight text-[#06152c] sm:text-2xl"
        >
          {title}
        </h2>
      </div>

      <div className="mt-5 space-y-4 pl-0 sm:pl-8">{children}</div>
    </section>
  );
}

function PolicyList({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-[#086bd4]">
      {items.map((item, index) => (
        <li key={index} className={paragraphClasses}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main>
      {/* Page introduction */}
      <section
        aria-labelledby="privacy-page-heading"
        className="border-b border-[#dce6f2] bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                ELA Pressure Washing
              </p>
            </div>

            <h1
              id="privacy-page-heading"
              className="mt-6 text-pretty text-4xl font-bold leading-[1.12] tracking-tight text-[#06152c] sm:text-5xl lg:text-[3.65rem]"
            >
              Our <span className="text-[#086bd4]">Privacy Policy.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              We respect your privacy and want you to understand how we collect,
              use and protect personal information when you contact ELA Pressure
              Washing or use our website.
            </p>

            <p className="mt-6 text-sm font-medium text-slate-500">
              Last updated: 20 October 2026
            </p>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <section
        aria-label="Privacy policy information"
        className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.8fr)] lg:gap-10">
            {/* Contents navigation */}
            <aside className="min-w-0 lg:sticky lg:top-28">
              <nav
                aria-label="Privacy policy contents"
                className="rounded-2xl border border-[#dce6f2] bg-white p-5 sm:p-7"
              >
                <h2 className="text-lg font-bold text-[#06152c]">
                  On this page
                </h2>

                <div
                  aria-hidden="true"
                  className="mt-4 h-[3px] w-12 rounded-full bg-[#086bd4]"
                />

                <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {policySections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="
                          flex items-start gap-3
                          rounded-md text-sm leading-6
                          text-slate-600
                          transition-colors
                          hover:text-[#086bd4]
                          focus-visible:outline-2
                          focus-visible:outline-offset-2
                          focus-visible:outline-[#086bd4]
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 font-bold text-[#086bd4]"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Main policy */}
            <article className="min-w-0 rounded-2xl border border-[#dce6f2] bg-white p-5 sm:p-8 lg:p-10">
              <PolicySection id="who-we-are" number={1} title="Who we are">
                <p className={paragraphClasses}>
                  ELA Pressure Washing &amp; Steam Cleaning Ltd, trading as ELA
                  Pressure Washing, provides residential, commercial and
                  specialist exterior cleaning services.
                </p>

                <p className={paragraphClasses}>
                  We are a private limited company registered in England and
                  Wales.
                </p>

                <div className="space-y-2 rounded-xl bg-[#f3f7fb] p-5">
                  <p className={paragraphClasses}>
                    <strong className="text-[#06152c]">Company number:</strong>{" "}
                    17137377
                  </p>

                  <p className={paragraphClasses}>
                    <strong className="text-[#06152c]">
                      Registered office:
                    </strong>{" "}
                    10 Buttermere Drive, Essington, Wolverhampton, West
                    Midlands, WV11 2SA
                  </p>

                  <p className={paragraphClasses}>
                    <strong className="text-[#06152c]">Email:</strong>{" "}
                    <a
                      href="mailto:elapressurewashing@gmail.com"
                      className={linkClasses}
                    >
                      elapressurewashing@gmail.com
                    </a>
                  </p>

                  <p className={paragraphClasses}>
                    <strong className="text-[#06152c]">Website:</strong>{" "}
                    elapressurewashing.co.uk
                  </p>
                </div>

                <p className={paragraphClasses}>
                  ELA Pressure Washing &amp; Steam Cleaning Ltd is responsible
                  for the personal information collected through our website and
                  customer enquiry process.
                </p>
              </PolicySection>

              <PolicySection
                id="information-we-collect"
                number={2}
                title="Information we collect"
              >
                <p className={paragraphClasses}>
                  When you contact us or request a quotation, we may collect:
                </p>

                <PolicyList
                  items={[
                    "Your name and email address.",
                    "Your telephone number, where provided or required for your chosen contact method.",
                    "The postcode of the property requiring cleaning.",
                    "Your preferred method of contact.",
                    "Details of your cleaning requirements and any information you choose to include in your enquiry.",
                    "Records of our correspondence with you.",
                  ]}
                />

                <p className={paragraphClasses}>
                  Our website hosting services may also process technical
                  information, such as IP addresses, browser information,
                  request details and security logs, to help deliver and protect
                  the website.
                </p>

                <p className={paragraphClasses}>
                  Please avoid including unnecessary sensitive personal
                  information in your enquiry.
                </p>
              </PolicySection>

              <PolicySection
                id="how-we-use-information"
                number={3}
                title="How we use your information"
              >
                <p className={paragraphClasses}>
                  We use personal information to respond to enquiries, discuss
                  cleaning requirements, prepare quotations and arrange or
                  provide services.
                </p>

                <p className={paragraphClasses}>
                  We may also use relevant information to manage customer
                  relationships, maintain necessary business records, protect
                  our website and comply with legal obligations.
                </p>

                <p className={paragraphClasses}>
                  We do not use information submitted through our quotation form
                  for unrelated marketing simply because you have contacted us.
                </p>
              </PolicySection>

              <PolicySection
                id="lawful-basis"
                number={4}
                title="Our lawful basis for processing"
              >
                <p className={paragraphClasses}>
                  Under UK data protection law, our lawful basis depends on why
                  we process your information.
                </p>

                <p className={paragraphClasses}>
                  <strong className="text-[#06152c]">
                    Contract and pre-contractual steps:
                  </strong>{" "}
                  When you request a quotation or arrange cleaning services as
                  an individual, we may need your information to take steps at
                  your request before entering into a contract, or to fulfil an
                  existing contract.
                </p>

                <p className={paragraphClasses}>
                  <strong className="text-[#06152c]">
                    Legitimate interests:
                  </strong>{" "}
                  We may process information where reasonably necessary to
                  respond to general business enquiries, administer our
                  business, maintain website security or manage relevant
                  correspondence, provided those interests are not overridden by
                  your rights.
                </p>

                <p className={paragraphClasses}>
                  <strong className="text-[#06152c]">Legal obligations:</strong>{" "}
                  We may need to retain certain information to meet accounting,
                  tax and other legal requirements.
                </p>

                <p className={paragraphClasses}>
                  You are not legally required to submit a website enquiry.
                  However, without the necessary contact and project
                  information, we may be unable to respond or prepare an
                  appropriate quotation.
                </p>
              </PolicySection>

              <PolicySection
                id="storage-and-sharing"
                number={5}
                title="How information is stored and shared"
              >
                <p className={paragraphClasses}>
                  Customer enquiries are received and managed through our
                  business Gmail inbox. We do not currently maintain a separate
                  customer enquiry database or CRM.
                </p>

                <p className={paragraphClasses}>
                  We use, or intend to use, the following service providers in
                  connection with our website and enquiry process:
                </p>

                <PolicyList
                  items={[
                    <>
                      <strong className="text-[#06152c]">Vercel:</strong>{" "}
                      Website hosting and related technical infrastructure.
                    </>,
                    <>
                      <strong className="text-[#06152c]">Resend:</strong>{" "}
                      Processing and sending website enquiry emails when email
                      submission is enabled.
                    </>,
                    <>
                      <strong className="text-[#06152c]">Google:</strong>{" "}
                      Providing the Gmail service used to receive and manage
                      enquiries.
                    </>,
                  ]}
                />

                <p className={paragraphClasses}>
                  These providers may process information as required to deliver
                  their respective services, including temporary message data
                  and technical logs.
                </p>

                <p className={paragraphClasses}>
                  We do not sell customer personal information. Information may
                  also need to be disclosed where legally required.
                </p>
              </PolicySection>

              <PolicySection
                id="international-transfers"
                number={6}
                title="International data transfers"
              >
                <p className={paragraphClasses}>
                  Some of our technology providers operate internationally, and
                  information may be processed or transferred outside the United
                  Kingdom.
                </p>

                <p className={paragraphClasses}>
                  Where UK data protection law requires safeguards for these
                  transfers, appropriate arrangements must be in place, such as
                  an applicable adequacy arrangement or recognised contractual
                  safeguards.
                </p>
              </PolicySection>

              <PolicySection
                id="retention"
                number={7}
                title="How long we keep your information"
              >
                <p className={paragraphClasses}>
                  For enquiries that do not result in a booking, our intended
                  retention period is 12 months after the last correspondence,
                  unless there is a legitimate reason to retain the information
                  longer.
                </p>

                <p className={paragraphClasses}>
                  Where a customer proceeds with work, we may retain relevant
                  service and correspondence records for as long as reasonably
                  necessary to manage the work, address disputes or meet legal
                  obligations.
                </p>

                <p className={paragraphClasses}>
                  Accounting and company records are retained for the periods
                  required by applicable law, which may be longer than the
                  ordinary enquiry retention period.
                </p>

                <p className={paragraphClasses}>
                  Our technology providers may retain limited technical logs or
                  email-processing information under their own applicable
                  retention arrangements.
                </p>
              </PolicySection>

              <PolicySection
                id="cookies"
                number={8}
                title="Website analytics and cookies"
              >
                <p className={paragraphClasses}>
                  We use Google Search Console to understand how our website
                  appears and performs in Google Search.
                </p>

                <p className={paragraphClasses}>
                  We do not currently use Google Analytics, Meta Pixel or
                  embedded third-party social media widgets.
                </p>

                <p className={paragraphClasses}>
                  Our website hosting infrastructure may process technical
                  information or use essential technologies necessary for
                  website operation and security.
                </p>

                <p className={paragraphClasses}>
                  If we introduce additional analytics, advertising technologies
                  or other non-essential tracking in future, we will review the
                  applicable privacy and cookie requirements and update this
                  policy.
                </p>
              </PolicySection>

              <PolicySection
                id="security"
                number={9}
                title="Keeping your information secure"
              >
                <p className={paragraphClasses}>
                  We aim to take appropriate measures to protect personal
                  information against unauthorised access, loss, misuse or
                  disclosure.
                </p>

                <p className={paragraphClasses}>
                  Access to customer information should be limited to those who
                  need it for legitimate business purposes.
                </p>

                <p className={paragraphClasses}>
                  Although reasonable precautions can reduce security risks, no
                  electronic communication or storage system can be guaranteed
                  to be completely secure.
                </p>
              </PolicySection>

              <PolicySection
                id="your-rights"
                number={10}
                title="Your data protection rights"
              >
                <p className={paragraphClasses}>
                  Depending on the circumstances, you may have the right to:
                </p>

                <PolicyList
                  items={[
                    "Request access to the personal information we hold about you.",
                    "Ask us to correct inaccurate or incomplete information.",
                    "Request deletion of information where the law allows.",
                    "Ask us to restrict certain processing.",
                    "Object to processing based on legitimate interests.",
                    "Request data portability where applicable.",
                  ]}
                />

                <p className={paragraphClasses}>
                  To exercise your rights, contact{" "}
                  <a
                    href="mailto:elapressurewashing@gmail.com"
                    className={linkClasses}
                  >
                    elapressurewashing@gmail.com
                  </a>
                  .
                </p>

                <p className={paragraphClasses}>
                  We may need to verify your identity before responding to
                  certain requests.
                </p>
              </PolicySection>

              <PolicySection id="complaints" number={11} title="Complaints">
                <p className={paragraphClasses}>
                  If you have concerns about how we handle your personal
                  information, please contact us first so that we can
                  investigate.
                </p>

                <p className={paragraphClasses}>
                  You also have the right to complain to the Information
                  Commissioner's Office (ICO), the UK's independent data
                  protection regulator.
                </p>

                <p className={paragraphClasses}>
                  ICO website:{" "}
                  <a href="https://ico.org.uk" className={linkClasses}>
                    ico.org.uk
                  </a>
                </p>
              </PolicySection>

              <PolicySection
                id="changes"
                number={12}
                title="Changes to this policy"
              >
                <p className={paragraphClasses}>
                  We may update this Privacy Policy if our services, technology
                  providers or data-handling practices change, or where
                  necessary to reflect legal requirements.
                </p>

                <p className={paragraphClasses}>
                  The latest version will be available on our website.
                </p>
              </PolicySection>
            </article>
          </div>

          {/* Return to Contact */}
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-600">
              Have a question about your enquiry?{" "}
              <Link href="/contact" className={linkClasses}>
                Contact ELA Pressure Washing
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
