import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "@tabler/icons-react";

export default function ServicesClosingCTA() {
  return (
    <section
      aria-labelledby="services-closing-heading"
      className="border-t border-[#dce6f2] bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative isolate overflow-hidden rounded-2xl bg-[#06152c] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute -right-32 -top-48 h-96 w-96 rounded-full border border-[#2b5279]/50 sm:-right-20" />
            <div className="absolute -right-20 -top-36 h-80 w-80 rounded-full border border-[#2b5279]/40 sm:-right-8" />
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#93c5fd]"
              />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#93c5fd] sm:text-sm">
                Let's Get Started
              </p>
            </div>

            {/* Heading */}
            <h2
              id="services-closing-heading"
              className="mt-6 max-w-3xl text-pretty text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Every property is different.{" "}
              <span className="text-[#93c5fd]">Let's discuss yours.</span>
            </h2>

            {/* Supporting text */}
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              Not sure which cleaning service is right for your property? Tell
              us what you need, and we'll be happy to discuss a suitable
              approach.
            </p>

            {/* Contact actions */}
            <div className="mt-9 flex flex-col items-start gap-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <Link
                href="/contact"
                className="
                  inline-flex min-h-12 items-center justify-center
                  gap-3 rounded-lg bg-[#086bd4] px-6 py-3
                  text-sm font-semibold text-white
                  transition-colors duration-200
                  hover:bg-[#005ab8]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#93c5fd]
                  sm:text-base
                "
              >
                Request a Free Quote
                <IconArrowUpRight size={20} stroke={1.9} aria-hidden="true" />
              </Link>

              <a
                href="tel:+447852435168"
                className="
                  inline-flex min-h-11 items-center gap-3
                  text-sm font-semibold text-white
                  transition-colors duration-200
                  hover:text-[#93c5fd]
                  focus-visible:rounded-sm
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#93c5fd]
                  sm:text-base
                "
              >
                <IconPhone
                  size={21}
                  stroke={1.8}
                  className="shrink-0 text-[#93c5fd]"
                  aria-hidden="true"
                />

                <span>07852 435168</span>
              </a>
            </div>
          </div>

          {/* Signature accent */}
          <div
            aria-hidden="true"
            className="relative z-10 mt-12 h-1 w-16 rounded-full bg-[#086bd4] sm:mt-14"
          />
        </div>
      </div>
    </section>
  );
}
