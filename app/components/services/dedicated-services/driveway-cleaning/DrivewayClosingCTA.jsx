import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "@tabler/icons-react";

export default function DrivewayClosingCTA() {
  return (
    <section
      aria-labelledby="driveway-closing-heading"
      className="border-t border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            relative isolate overflow-hidden rounded-2xl
            bg-[#06152c] px-6 py-12 text-white
            sm:px-10 sm:py-14
            lg:px-16 lg:py-20
          "
        >
          {/* Subtle decorative rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="
                absolute -right-36 -top-52
                size-80 rounded-full border border-[#173656]
                sm:-right-24 sm:-top-64 sm:size-[440px]
              "
            />

            <div
              className="
                absolute -right-28 -top-48
                size-72 rounded-full border border-[#173656]
                sm:-right-16 sm:-top-56 sm:size-[400px]
              "
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#93c5fd]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#93c5fd] sm:text-sm">
                Let&apos;s Talk About Your Driveway
              </p>
            </div>

            {/* Heading */}
            <h2
              id="driveway-closing-heading"
              className="
                mt-6 max-w-3xl text-pretty text-3xl
                font-bold leading-tight tracking-tight
                text-white sm:text-4xl lg:text-5xl
              "
            >
              Ready to give your driveway{" "}
              <span className="text-[#93c5fd]">some attention?</span>
            </h2>

            {/* Supporting text */}
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              Whether your driveway needs a thorough clean or you&apos;re
              considering additional treatments, ELA Pressure Washing can help
              you explore the right approach for your surface.
            </p>

            {/* Contact options */}
            <div
              className="
                mt-9 flex flex-col items-start gap-6
                sm:mt-10 sm:flex-row sm:flex-wrap
                sm:items-center sm:gap-8
              "
            >
              <Link
                href="/contact"
                className="
                  inline-flex min-h-12 items-center
                  justify-center gap-3 rounded-lg
                  bg-[#086bd4] px-6 py-3
                  text-sm font-semibold text-white
                  transition-colors duration-200
                  hover:bg-[#0757ad]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#93c5fd]
                  sm:text-base
                "
              >
                Request a Free Quote
                <IconArrowUpRight size={18} stroke={1.8} aria-hidden="true" />
              </Link>

              <a
                href="tel:+447852435168"
                aria-label="Call ELA Pressure Washing on 07852 435168"
                className="
                  inline-flex min-h-11 items-center
                  gap-3 rounded-md text-sm font-semibold
                  text-white transition-colors duration-200
                  hover:text-[#93c5fd]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#93c5fd]
                  sm:text-base
                "
              >
                <IconPhone
                  size={20}
                  stroke={1.8}
                  className="shrink-0 text-[#93c5fd]"
                  aria-hidden="true"
                />

                <span>07852 435168</span>
              </a>
            </div>

            {/* Signature blue rule */}
            <div
              aria-hidden="true"
              className="mt-14 h-[3px] w-16 rounded-full bg-[#086bd4] sm:mt-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
