import Link from "next/link";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    question: "Is pressure washing suitable for every driveway?",
    answer: (
      <>
        Not every driveway should be cleaned using the same pressure or
        technique. Different materials, including block paving, concrete and
        natural stone, have different cleaning requirements. At ELA Pressure
        Washing, we consider the surface material and its condition before
        recommending a suitable approach.
      </>
    ),
  },
  {
    question: "Can driveway cleaning remove moss, algae and weeds?",
    answer: (
      <>
        Professional driveway cleaning can help remove accumulated dirt, moss,
        algae and weed growth from suitable surfaces. Depending on the condition
        of the paving, additional treatments or maintenance may be appropriate.
        Organic growth can return over time, particularly in damp or shaded
        areas.
      </>
    ),
  },
  {
    question: "Can my driveway be sealed after cleaning?",
    answer: (
      <>
        Yes, protective sealing is an option for certain driveway materials.
        Where suitable, we can discuss sealing following cleaning and
        appropriate surface preparation. The product and application method
        depend on the paving material, its condition and the finish required.
      </>
    ),
  },
  {
    question: "Do you clean driveways outside Wolverhampton?",
    answer: (
      <>
        Yes. ELA Pressure Washing provides exterior cleaning services throughout
        Wolverhampton and the wider West Midlands. Availability depends on the
        location and requirements of each project. You can explore our{" "}
        <Link
          href="/areas-we-cover"
          className="font-semibold text-[#0757ad] underline underline-offset-4 hover:text-[#06152c] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
        >
          areas we cover
        </Link>{" "}
        or contact us to discuss your property.
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

export default function DrivewayCleaningFAQ() {
  return (
    <section
      aria-labelledby="driveway-faq-heading"
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
                Driveway Cleaning FAQs
              </p>
            </div>

            <h2
              id="driveway-faq-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Common questions.{" "}
              <span className="text-[#086bd4]">Clear answers.</span>
            </h2>

            <p className="mt-5 max-w-lg text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From choosing the right cleaning method to understanding
              treatments and aftercare, find answers to some common questions
              about professional driveway cleaning.
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
