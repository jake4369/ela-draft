import Link from "next/link";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    question: "Is pressure washing suitable for heritage brickwork?",
    answer: (
      <>
        Not automatically. Excessive pressure, unsuitable chemicals or abrasive
        techniques can damage older bricks and mortar. The starting point is
        deciding whether cleaning is necessary and appropriate. At ELA Pressure
        Washing, we consider the brickwork, mortar joints and existing condition
        before recommending a suitable approach, rather than treating every
        building in the same way.
      </>
    ),
  },
  {
    question: "Can cleaning remove dirt, algae and staining?",
    answer: (
      <>
        Appropriate cleaning may reduce accumulated dirt, algae and some
        staining on suitable brickwork. Results depend on the material, its
        condition and the type of deposit. Not all discolouration is removable
        surface dirt, and complete stain removal cannot be guaranteed. Existing
        deterioration or moisture-related problems may need attention before
        cleaning is considered.
      </>
    ),
  },
  {
    question: "Why is a small cleaning trial important?",
    answer: (
      <>
        A small, agreed trial area helps assess how a proposed cleaning method
        affects the bricks, mortar and surface finish. It also helps establish a
        realistic expectation of the result. The trial should be assessed before
        cleaning a wider area, with its location and method agreed as part of
        planning the work.
      </>
    ),
  },
  {
    question: "Will cleaning make old brickwork look like new?",
    answer: (
      <>
        Not necessarily, and a new-looking finish is not always an appropriate
        aim for traditional masonry. Natural colour variation, weathering and
        signs of age can contribute to a building&apos;s character. Where
        cleaning is justified, the aim should be to address suitable deposits
        without unnecessarily removing historic surface character or
        architectural detail.
      </>
    ),
  },
  {
    question: "Do I need permission to clean a listed building?",
    answer: (
      <>
        You may need listed building consent. In England, cleaning works that
        would affect a listed building&apos;s character as a building of special
        architectural or historic interest require consent. Contact your local
        planning authority&apos;s conservation officer before arranging work to
        establish what is required. Any necessary consent must be obtained
        before the relevant work begins.
      </>
    ),
  },
  {
    question: "How much does heritage brickwork cleaning cost?",
    answer: (
      <>
        The cost depends on the area requiring attention, the condition of the
        bricks and mortar, the type of contamination, access arrangements and
        the cleaning method required. Each property needs individual
        consideration, so we recommend{" "}
        <Link
          href="/contact"
          className="font-semibold text-[#0757ad] underline underline-offset-4 hover:text-[#06152c] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
        >
          contacting ELA for a free, no-obligation quotation
        </Link>
        . Photographs and details of the property can help with the initial
        discussion.
      </>
    ),
  },
];

function FAQItem({ question, answer, index }) {
  return (
    <details className="group border-b border-[#dce6f2] last:border-b-0">
      <summary
        className={`
          flex cursor-pointer list-none items-start justify-between
          gap-4 rounded-lg px-5 py-5
          text-left transition-colors duration-150
          hover:bg-[#eaf3ff]
          group-open:bg-[#eaf3ff]
          focus-visible:outline-2 focus-visible:outline-offset-[-3px]
          focus-visible:outline-[#086bd4]
          sm:gap-6 sm:px-7 sm:py-6
          [&::-webkit-details-marker]:hidden
          ${index === 0 ? "bg-[#eaf3ff]" : "bg-[#f7faff]"}
        `}
      >
        <span className="text-pretty text-base font-bold leading-7 tracking-tight text-[#06152c] sm:text-lg">
          {question}
        </span>

        <span
          aria-hidden="true"
          className="
            mt-0.5 flex size-8 shrink-0 items-center justify-center
            rounded-lg border border-[#c9dff5] bg-white text-[#086bd4]
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

      <div className="px-5 pb-6 sm:px-7 sm:pb-7">
        <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {answer}
        </p>
      </div>
    </details>
  );
}

export default function HeritageBrickworkFAQ() {
  return (
    <section
      aria-labelledby="heritage-faq-heading"
      className="border-t border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 lg:items-center lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          {/* Editorial introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Heritage Brickwork FAQs
              </p>
            </div>

            <h2
              id="heritage-faq-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Common questions.{" "}
              <span className="text-[#086bd4]">Clear answers.</span>
            </h2>

            <p className="mt-5 max-w-lg text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From caring for older bricks and mortar to choosing suitable
              cleaning methods and understanding permissions, find answers to
              common questions about heritage brickwork cleaning.
            </p>

            {/* Signature section rule */}
            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Native HTML FAQ accordion */}
          <div className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-[#f7faff]">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
