import Link from "next/link";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    id: "steam-vs-pressure",
    question:
      "What is the difference between steam cleaning and pressure washing?",
    answer: (
      <>
        Conventional pressure washing primarily relies on water pressure to
        remove surface contamination. Professional steam cleaning uses
        high-temperature water or steam to help loosen certain types of dirt and
        stubborn deposits. Depending on the equipment and surface, heat-assisted
        cleaning may be carried out using controlled water pressure. The most
        suitable method depends on the material, its condition and the cleaning
        required.
      </>
    ),
  },
  {
    id: "suitable-surfaces",
    question: "Which exterior surfaces can be steam cleaned?",
    answer: (
      <>
        Steam cleaning may be suitable for certain types of paving, concrete,
        brickwork, stone and other exterior surfaces. However, not every
        material can safely withstand elevated temperatures or water pressure.
        At ELA Pressure Washing, we consider the surface material, its condition
        and any existing deterioration before recommending a suitable cleaning
        approach.
      </>
    ),
  },
  {
    id: "stubborn-contamination",
    question: "Can steam cleaning remove chewing gum, oil and grease?",
    answer: (
      <>
        High-temperature cleaning can be effective at loosening certain stubborn
        deposits, including chewing gum, grease and some forms of ingrained
        grime. However, the results depend on the contamination, the affected
        material and how deeply any staining has penetrated. Additional
        specialist treatments may sometimes be required, and complete removal
        cannot always be guaranteed.
      </>
    ),
  },
  {
    id: "chemicals",
    question: "Does steam cleaning require cleaning chemicals?",
    answer: (
      <>
        Heat can help loosen some types of surface contamination, which may
        reduce the need for certain chemical treatments in suitable
        circumstances. However, steam cleaning is not necessarily chemical-free.
        Some deposits may require additional cleaning products or specialist
        treatments. The approach depends on the surface and the type of
        contamination being addressed.
      </>
    ),
  },
  {
    id: "surface-safety",
    question: "Can high-temperature steam cleaning damage surfaces?",
    answer: (
      <>
        Unsuitable temperatures, excessive pressure or incorrect cleaning
        techniques can damage certain materials, particularly delicate,
        weathered or deteriorating surfaces. Steam cleaning is not automatically
        a safer alternative for every material. We consider the surface
        condition and cleaning requirements before selecting an appropriate
        combination of heat and pressure.
      </>
    ),
  },
  {
    id: "cost",
    question: "How much does professional steam cleaning cost?",
    answer: (
      <>
        Steam cleaning costs depend on several factors, including the size of
        the area, surface material, type of contamination, accessibility and
        whether specialist treatments are required. Each project has different
        requirements, so we recommend{" "}
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

export default function SteamCleaningFAQ() {
  return (
    <section
      aria-labelledby="steam-faq-heading"
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
                Steam Cleaning FAQs
              </p>
            </div>

            {/* Section heading */}
            <h2
              id="steam-faq-heading"
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
              From understanding how high-temperature cleaning works to choosing
              suitable methods for different surfaces, find answers to common
              questions about professional exterior steam cleaning.
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
                name="steam-cleaning-faq"
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
