import Link from "next/link";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    id: "pressure-washing",
    question: "Is pressure washing suitable for every roof?",
    answer: (
      <>
        No. High-pressure washing is not appropriate for every roofing material
        and can cause damage if unsuitable methods are used. Concrete tiles,
        clay tiles and other roof coverings have different cleaning
        requirements. At ELA Pressure Washing, we consider the roofing material,
        its condition and the extent of organic growth before recommending a
        suitable cleaning approach.
      </>
    ),
  },
  {
    id: "moss-removal",
    question: "How do you remove moss from roof tiles?",
    answer: (
      <>
        Where appropriate, accumulated moss can be carefully removed using
        specialist roof scraping tools suited to the tile profile. This allows
        loose moss and organic debris to be removed without automatically
        relying on high-pressure washing. The method used depends on the roof
        material, its condition and safe access requirements.
      </>
    ),
  },
  {
    id: "biocide",
    question: "Will a biocide treatment stop moss from returning?",
    answer: (
      <>
        A suitable biocide treatment may help manage remaining organic growth
        and slow its return, but it cannot guarantee that moss, algae or lichen
        will never reappear. The suitability of a treatment depends on the
        roofing material and site conditions. We can discuss appropriate
        treatments and ongoing maintenance as part of your roof cleaning
        requirements.
      </>
    ),
  },
  {
    id: "tile-safety",
    question: "Can roof cleaning damage tiles?",
    answer: (
      <>
        Unsuitable cleaning techniques can damage roof tiles, particularly where
        the surface is already weathered, cracked or fragile. Existing defects
        and the condition of the roof are important considerations before work
        begins. Our approach focuses on assessing the roof and selecting methods
        suited to its condition, rather than treating every roof in the same
        way.
      </>
    ),
  },
  {
    id: "cost",
    question: "How much does professional roof cleaning cost?",
    answer: (
      <>
        Roof cleaning costs depend on several factors, including the size of the
        roof, roofing material, extent of moss growth, access requirements and
        whether additional treatments are appropriate. Every property is
        different, so we recommend{" "}
        <Link
          href="/contact"
          className="
            font-semibold text-[#0757ad]
            underline underline-offset-4
            hover:text-[#086bd4]
            focus-visible:rounded-sm
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#086bd4]
          "
        >
          contacting ELA for a free, no-obligation quotation
        </Link>
        .
      </>
    ),
  },
];

export default function RoofCleaningFAQ() {
  return (
    <section
      aria-labelledby="roof-faq-heading"
      className="
        border-t border-[#dce6f2]
        bg-white
        py-16 sm:py-20 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid items-start gap-10
            lg:items-center
            lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
            lg:gap-16 xl:gap-20
          "
        >
          {/* Left: Editorial introduction */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.18em] text-[#086bd4]
                  sm:text-sm
                "
              >
                Roof Cleaning FAQs
              </p>
            </div>

            {/* Section heading */}
            <h2
              id="roof-faq-heading"
              className="
                mt-5 text-pretty text-3xl
                font-bold leading-tight
                tracking-tight text-[#06152c]
                sm:text-4xl lg:text-[2.75rem]
              "
            >
              Common questions.{" "}
              <span className="text-[#086bd4]">Clear answers.</span>
            </h2>

            {/* Introduction */}
            <p
              className="
                mt-6 max-w-xl text-pretty
                text-base leading-7 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              From choosing suitable roof cleaning methods to understanding moss
              removal, tile care and specialist treatments, find answers to
              common questions about professional roof cleaning.
            </p>

            {/* Signature accent */}
            <div
              aria-hidden="true"
              className="
                mt-9 h-[3px] w-16
                rounded-full bg-[#086bd4]
              "
            />
          </div>

          {/* Right: Accessible FAQ accordion */}
          <div
            className="
              min-w-0 overflow-hidden
              rounded-xl border border-[#dce6f2]
              bg-[#f7faff]
            "
          >
            {faqs.map((faq, index) => (
              <details
                key={faq.id}
                name="roof-cleaning-faq"
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
                  {/* Question */}
                  <span
                    className="
                      min-w-0 text-sm font-semibold
                      leading-7 tracking-tight
                      text-[#06152c]
                      sm:text-base
                    "
                  >
                    {faq.question}
                  </span>

                  {/* Expand / collapse icon */}
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

                {/* Answer */}
                <div
                  className="
                    bg-[#f7faff]
                    px-5 pb-6 pt-1
                    sm:px-7 sm:pb-7
                  "
                >
                  <p
                    className="
                      text-sm leading-7 text-slate-600
                      sm:text-base sm:leading-8
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
