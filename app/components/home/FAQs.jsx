import Link from "next/link";
import { IconArrowUpRight, IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    question: "How much does professional exterior cleaning cost?",
    answer:
      "The cost depends on the size and condition of the area, the surface material, access arrangements and any specialist treatments required. Contact ELA with your project details for a free, no-obligation quotation.",
  },
  {
    question: "Can pressure washing damage my driveway, patio or brickwork?",
    answer:
      "Unsuitable cleaning pressure can damage some surfaces. ELA considers the material and its condition before recommending an appropriate cleaning method, which may involve a gentler approach rather than high-pressure washing.",
  },
  {
    question:
      "What's the difference between pressure washing, soft washing and steam cleaning?",
    answer:
      "Pressure washing uses water pressure to remove dirt and deposits. Soft washing uses lower pressure and suitable cleaning treatments, while steam cleaning introduces heat to help tackle certain stubborn deposits. The right method depends on the surface and contamination.",
  },
  {
    question: "Can you remove moss, algae and stubborn stains?",
    answer:
      "Professional cleaning can help remove moss, algae and many types of surface contamination. Stubborn stains may require specialist treatments, and complete removal cannot always be guaranteed.",
  },
  {
    question: "Do you offer sealing and surface repairs?",
    answer:
      "Yes. ELA also provides services including surface sealing, patio repointing and driveway sinkage lifting for suitable surfaces. Additional work can be discussed alongside your cleaning requirements.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Get in touch with your property location, the surfaces requiring attention and the type of work you're considering. Approximate measurements and photographs can help ELA understand your project and discuss a quotation.",
  },
];

function FAQItem({ question, answer, index }) {
  return (
    <details name="ela-home-faq" className="group" open={index === 0}>
      <summary
        className="
          flex cursor-pointer list-none
          items-start justify-between gap-5
          rounded-sm py-5
          text-left
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#086bd4]
          [&::-webkit-details-marker]:hidden
          sm:py-6
        "
      >
        <span
          className="
            min-w-0 flex-1
            text-base font-semibold leading-7
            text-[#06152c]
            sm:text-lg sm:leading-8
          "
        >
          {question}
        </span>

        <span
          className="
            mt-0.5 flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-full bg-[#e5effa]
            text-[#086bd4]
            transition-colors
            group-hover:bg-[#d5e7f9]
            group-open:bg-[#086bd4]
            group-open:text-white
          "
          aria-hidden="true"
        >
          <IconPlus size={17} stroke={1.8} className="group-open:hidden" />

          <IconMinus
            size={17}
            stroke={1.8}
            className="hidden group-open:block"
          />
        </span>
      </summary>

      <div className="pb-6 pr-10 sm:pr-14">
        <p
          className="
            text-pretty text-sm leading-7
            text-slate-600
            sm:text-base sm:leading-8
          "
        >
          {answer}
        </p>
      </div>
    </details>
  );
}

export default function FAQs() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid items-start gap-10
            lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
            lg:gap-16 xl:gap-20
          "
        >
          {/* EDITORIAL INTRODUCTION */}
          <div className="min-w-0">
            <p
              className="
                mb-4 text-xs font-semibold
                uppercase tracking-[0.18em]
                text-[#086bd4] sm:text-sm
              "
            >
              Frequently Asked Questions
            </p>

            <h2
              id="faq-heading"
              className="
                text-pretty text-3xl
                font-bold leading-tight
                tracking-tight text-[#06152c]
                sm:text-4xl lg:text-5xl
              "
            >
              Good questions.
              <span className="block">Clear answers.</span>
            </h2>

            <p
              className="
                mt-6 max-w-md text-pretty
                text-base leading-7
                text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              Everything you need to know about our exterior cleaning services,
              from choosing the right method to requesting a quotation.
            </p>

            {/* CONTACT LINK */}
            <Link
              href="/contact"
              className="
                group mt-8 inline-flex items-center
                gap-2 rounded-sm
                text-sm font-semibold
                text-[#086bd4]
                underline-offset-4
                transition-colors
                hover:text-[#054d99]
                hover:underline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#086bd4]
                sm:text-base
              "
            >
              Still have a question? Get in touch
              <IconArrowUpRight
                size={19}
                stroke={1.8}
                className="
                  shrink-0
                  transition-transform
                  motion-safe:group-hover:translate-x-0.5
                  motion-safe:group-hover:-translate-y-0.5
                "
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* FAQ ACCORDION */}
          <div className="min-w-0">
            <div
              className="
                divide-y divide-[#d5e0ed]
                border-y border-[#d5e0ed]
              "
            >
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
      </div>
    </section>
  );
}
