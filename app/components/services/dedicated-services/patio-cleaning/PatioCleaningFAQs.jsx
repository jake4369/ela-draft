import Link from "next/link";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    id: "suitable",
    question: "Is pressure washing suitable for every patio?",
    answer:
      "Not every patio should be cleaned using the same pressure or technique. Concrete slabs, sandstone, limestone and other paving materials have different cleaning requirements. At ELA Pressure Washing, we consider the material, its condition and the joints before recommending a suitable approach.",
  },
  {
    id: "moss-algae",
    question: "Can patio cleaning remove moss, algae and black spots?",
    answer:
      "Professional patio cleaning can help remove accumulated dirt, moss, algae and other organic growth. More stubborn deposits, including black spot lichen, may require specialist treatments. The most suitable method and achievable results depend on the paving material and its condition.",
  },
  {
    id: "repointing-sealing",
    question: "Can my patio be repointed or sealed after cleaning?",
    answer:
      "Yes. Where appropriate, ELA Pressure Washing can discuss patio repointing, additional treatments and protective sealing. Any recommendations will depend on the paving material, the condition of the joints and the requirements of your patio.",
  },
  {
    id: "coverage",
    question: "Do you clean patios outside Wolverhampton?",
  },
];

export default function PatioCleaningFAQ() {
  return (
    <section
      aria-labelledby="patio-faq-heading"
      className="border-t border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          {/* Section introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Patio Cleaning FAQs
              </p>
            </div>

            <h2
              id="patio-faq-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Common questions.{" "}
              <span className="text-[#086bd4]">Clear answers.</span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From caring for different paving materials to understanding
              treatments and aftercare, find answers to common questions about
              professional patio cleaning.
            </p>

            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* FAQ accordion */}
          <div className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-[#f7faff]">
            {faqs.map((faq, index) => (
              <details
                key={faq.id}
                name="patio-cleaning-faq"
                className={`group ${
                  index !== 0 ? "border-t border-[#dce6f2]" : ""
                }`}
              >
                <summary
                  className={`
                    flex min-h-[82px] cursor-pointer
                    list-none items-center justify-between
                    gap-4 px-5 py-5
                    text-left
                    transition-colors duration-150
                    sm:px-7 sm:py-6
                    hover:bg-[#eaf3ff]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-inset
                    focus-visible:ring-[#086bd4]
                    group-open:bg-[#eaf3ff]
                    [&::-webkit-details-marker]:hidden
                    ${index === 0 ? "bg-[#eaf3ff]" : "bg-[#f7faff]"}
                  `}
                >
                  <span className="min-w-0 text-sm font-semibold leading-7 tracking-tight text-[#06152c] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-lg border border-[#c8def5]
                      bg-white text-[#086bd4]
                    "
                  >
                    <IconPlus
                      size={19}
                      stroke={1.8}
                      className="block group-open:hidden"
                    />

                    <IconMinus
                      size={19}
                      stroke={1.8}
                      className="hidden group-open:block"
                    />
                  </span>
                </summary>

                <div className="bg-[#f7faff] px-5 pb-6 pt-1 sm:px-7 sm:pb-7">
                  {faq.id === "coverage" ? (
                    <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      Yes. ELA Pressure Washing provides patio cleaning services
                      across Wolverhampton and the wider West Midlands. You can
                      view our{" "}
                      <Link
                        href="/areas-we-cover"
                        className="
                          font-semibold text-[#0757ad] underline
                          underline-offset-4
                          hover:text-[#086bd4]
                          focus-visible:rounded-sm
                          focus-visible:outline-2
                          focus-visible:outline-offset-2
                          focus-visible:outline-[#086bd4]
                        "
                      >
                        areas covered
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="/contact"
                        className="
                          font-semibold text-[#0757ad] underline
                          underline-offset-4
                          hover:text-[#086bd4]
                          focus-visible:rounded-sm
                          focus-visible:outline-2
                          focus-visible:outline-offset-2
                          focus-visible:outline-[#086bd4]
                        "
                      >
                        contact us
                      </Link>{" "}
                      with your location to discuss availability.
                    </p>
                  ) : (
                    <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
