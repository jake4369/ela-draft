import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function CoverageClosingCTA() {
  return (
    <section
      aria-labelledby="coverage-cta-heading"
      className="relative isolate overflow-hidden bg-[#06152c] py-16 text-white sm:py-20"
    >
      {/* Subtle decorative detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 size-80 rounded-full border border-[#1a3b63] sm:size-[28rem]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full border border-[#15345a] sm:size-80"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          {/* Section content */}
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#93c5fd] sm:text-sm">
              Let's Talk About Your Location
            </p>

            <h2
              id="coverage-cta-heading"
              className="max-w-2xl text-pretty text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
            >
              Not sure if we cover your area?{" "}
              <span className="text-[#7bbcff]">Let's find out.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Tell us your postcode, the type of property and the cleaning work
              you have in mind. We'll be happy to discuss your requirements and
              confirm availability.
            </p>
          </div>

          {/* Primary enquiry action */}
          <div className="flex lg:justify-end">
            <Link
              href="https://elapressurewashing.co.uk/contact"
              className="
                group inline-flex min-h-12 w-full items-center
                justify-center gap-3 rounded-lg
                bg-[#086bd4] px-7 py-3.5
                text-center text-sm font-semibold text-white
                transition-colors duration-200
                hover:bg-[#0059b8]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
                sm:w-auto
              "
            >
              Enquire About Your Area
              <IconArrowUpRight
                size={18}
                stroke={1.8}
                aria-hidden="true"
                className="shrink-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
