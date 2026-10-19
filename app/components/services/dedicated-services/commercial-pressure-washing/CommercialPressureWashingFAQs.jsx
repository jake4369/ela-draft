import Link from "next/link";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    id: "commercial-premises",
    question: "What types of commercial premises can you clean?",
    answer: (
      <>
        ELA Pressure Washing provides exterior cleaning services for a range of
        commercial properties, including business premises, retail areas,
        forecourts, car parks, paved walkways and building exteriors. The
        suitability of each project depends on the surfaces involved, their
        condition, accessibility and the work required.
      </>
    ),
  },
  {
    id: "surface-suitability",
    question: "Is pressure washing suitable for every commercial surface?",
    answer: (
      <>
        No. Different surfaces require different cleaning methods. Hard-wearing
        concrete, block paving, brickwork and more delicate exterior materials
        do not necessarily respond well to the same pressure or treatment. We
        consider the material, its condition and the type of contamination
        before recommending a suitable approach.
      </>
    ),
  },
  {
    id: "oil-grease",
    question: "Can commercial pressure washing remove oil and grease?",
    answer: (
      <>
        Certain oil, grease and other stubborn deposits may respond to
        professional pressure washing, steam cleaning or specialist treatments.
        Results depend on the surface material, the nature of the contamination
        and how deeply it has penetrated. Complete removal cannot always be
        guaranteed, particularly where staining has become embedded in a porous
        surface.
      </>
    ),
  },
  {
    id: "specialist-cleaning",
    question: "Do you offer graffiti and chewing gum removal?",
    answer: (
      <>
        Yes. Alongside commercial pressure washing, ELA offers specialist
        graffiti and chewing gum removal for suitable exterior surfaces.
        Different types of contamination may require different equipment,
        cleaning methods or treatments. We consider the affected material and
        its condition before discussing an appropriate approach.
      </>
    ),
  },
  {
    id: "business-hours",
    question: "Can cleaning be arranged around business opening hours?",
    answer: (
      <>
        Commercial cleaning often requires consideration of staff, customer and
        vehicle access, deliveries and other day-to-day activities. If your
        premises have particular opening hours or scheduling requirements,
        please mention these when requesting a quotation. Suitable working
        arrangements, including possible out-of-hours cleaning, can be discussed
        subject to availability and site requirements.
      </>
    ),
  },
  {
    id: "regular-cleaning",
    question: "Do you provide regular commercial exterior cleaning?",
    answer: (
      <>
        If your business requires repeat cleaning or ongoing exterior
        maintenance, we can discuss your requirements. The frequency and scope
        of any recurring work would depend on the property, its surfaces, how
        the areas are used and the cleaning required. Any ongoing arrangements
        would need to be agreed individually.
      </>
    ),
  },
  {
    id: "cost",
    question: "How much does commercial pressure washing cost?",
    answer: (
      <>
        Commercial pressure washing costs depend on several factors, including
        the size of the area, surface materials, type of contamination,
        accessibility and any specialist treatments required. Site-specific
        working arrangements may also affect the quotation. For an estimate
        tailored to your premises, we recommend{" "}
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

export default function CommercialPressureWashingFAQ() {
  return (
    <section
      aria-labelledby="commercial-faq-heading"
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
                Commercial Cleaning FAQs
              </p>
            </div>

            {/* Section heading */}
            <h2
              id="commercial-faq-heading"
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
              From suitable cleaning methods and stubborn surface contamination
              to business access, scheduling and quotations, find answers to
              common questions about professional commercial exterior cleaning.
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
                name="commercial-pressure-washing-faq"
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
