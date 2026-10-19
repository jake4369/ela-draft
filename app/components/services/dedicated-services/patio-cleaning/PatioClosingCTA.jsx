import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "@tabler/icons-react";

export default function PatioClosingCTA() {
  return (
    <section
      aria-labelledby="patio-closing-heading"
      className="border-t border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative isolate overflow-hidden rounded-2xl bg-[#06152c] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          {/* Subtle circular decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-64 h-[28rem] w-[28rem] rounded-full border border-[#19466f] sm:-right-20 sm:-top-56"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-30 -top-62 h-[28rem] w-[28rem] rounded-full border border-[#19466f]/70 sm:-right-18 sm:-top-54"
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#93c5fd]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#93c5fd] sm:text-sm">
                Let&apos;s talk about your patio
              </p>
            </div>

            {/* Heading */}
            <h2
              id="patio-closing-heading"
              className="mt-7 max-w-2xl text-pretty text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
            >
              Ready to refresh{" "}
              <span className="text-[#93c5fd]">your patio?</span>
            </h2>

            {/* Supporting copy */}
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg sm:leading-8">
              Whether your patio needs a thorough clean or you&apos;re
              considering repointing, specialist treatments or protective
              sealing, ELA Pressure Washing can help you explore the right
              approach for your outdoor space.
            </p>

            {/* Contact actions */}
            <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#086bd4] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#075bb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#93c5fd] sm:text-base"
              >
                Request a Free Quote
                <IconArrowUpRight size={19} stroke={1.8} aria-hidden="true" />
              </Link>

              <a
                href="tel:+447852435168"
                aria-label="Call ELA Pressure Washing on 07852 435168"
                className="inline-flex min-h-11 items-center gap-3 rounded-md text-sm font-semibold text-white transition-colors duration-200 hover:text-[#93c5fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#93c5fd] sm:text-base"
              >
                <IconPhone
                  size={20}
                  stroke={1.8}
                  className="text-[#93c5fd]"
                  aria-hidden="true"
                />
                07852 435168
              </a>
            </div>

            {/* Signature decorative rule */}
            <div
              aria-hidden="true"
              className="mt-12 h-[3px] w-16 rounded-full bg-[#086bd4] sm:mt-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
