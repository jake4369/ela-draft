import CoverageMapCard from "./CoverageMapCard";

const faqs = [
  {
    question: "Do you provide exterior cleaning outside Wolverhampton?",
    answer:
      "Yes, ELA Pressure Washing is based in Wolverhampton and considers residential and commercial exterior cleaning projects across the wider West Midlands. Availability depends on the location and nature of the work.",
  },
  {
    question: "What if my town or area isn't listed?",
    answer:
      "The locations shown above are not intended to be an exhaustive list. If your town isn't listed, contact us with your location and the work you need carried out, and we'll confirm whether we can help.",
  },
  {
    question:
      "Do you undertake commercial cleaning projects across the region?",
    answer:
      "ELA provides commercial exterior cleaning services alongside residential work. If you have business premises, a forecourt or another commercial area requiring cleaning, get in touch to discuss the property, location and requirements.",
  },
  {
    question: "How can I check whether ELA covers my property?",
    answer:
      "You can contact us with your postcode, the type of property and a brief description of the cleaning required. Photographs can also help us understand the project. We'll then be able to discuss suitability and availability.",
  },
];

export default function CoverageFAQs() {
  return (
    <section
      aria-labelledby="coverage-faq-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid items-start gap-10
            lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
            lg:gap-16
          "
        >
          {/* Introduction and coverage illustration */}
          <div className="min-w-0">
            {/* Constrain only the editorial text, not the map */}
            <div className="max-w-lg">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Coverage Questions
              </p>

              <h2
                id="coverage-faq-heading"
                className="
                  text-pretty text-3xl font-bold leading-tight
                  tracking-tight text-[#06152c]
                  sm:text-4xl lg:text-5xl
                "
              >
                A little more about{" "}
                <span className="text-[#086bd4]">where we work.</span>
              </h2>

              <p
                className="
                  mt-5 max-w-md text-pretty text-base
                  leading-7 text-slate-600
                  sm:text-lg sm:leading-8
                "
              >
                Helpful answers about our service area, the types of projects we
                undertake and how to check availability for your property.
              </p>
            </div>

            {/* Independent responsive width and alignment */}
            <CoverageMapCard />
          </div>

          {/* Questions and answers */}
          <div className="min-w-0 lg:self-center">
            <dl className="border-b border-slate-200">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="
                    border-t border-slate-200
                    py-6 first:pt-5 sm:py-7
                  "
                >
                  <dt
                    className="
                      text-pretty text-lg font-semibold
                      leading-7 tracking-tight text-[#06152c]
                    "
                  >
                    {faq.question}
                  </dt>

                  <dd
                    className="
                      mt-3 max-w-2xl text-pretty
                      text-base leading-7 text-slate-600
                    "
                  >
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
