import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "@tabler/icons-react";

export default function GalleryClosingCTA() {
  return (
    <section
      aria-labelledby="gallery-closing-heading"
      className="border-t border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative isolate overflow-hidden rounded-2xl bg-[#06152c] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          {/* Decorative circular detailing */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute -right-36 -top-72 size-[460px] rounded-full border border-[#93c5fd]/15 sm:-right-24 sm:-top-64" />

            <div className="absolute -right-48 -top-80 size-[550px] rounded-full border border-[#93c5fd]/10 sm:-right-36 sm:-top-72" />
          </div>

          {/* Editorial content */}
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#93c5fd]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#93c5fd] sm:text-sm">
                Let's Talk About Your Project
              </p>
            </div>

            <h2
              id="gallery-closing-heading"
              className="mt-6 max-w-3xl text-pretty text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Like what you've seen?{" "}
              <span className="text-[#93c5fd]">
                Let's discuss your property.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              From residential driveways and patios to larger commercial
              projects, we'd be happy to discuss your requirements and help you
              find a suitable approach.
            </p>

            {/* Contact actions */}
            <div className="mt-9 flex flex-col items-start gap-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#086bd4] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#075abb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#93c5fd] sm:text-base"
              >
                Request a Free Quote
                <IconArrowUpRight size={19} stroke={1.8} aria-hidden="true" />
              </Link>

              <a
                href="tel:+447852435168"
                className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#93c5fd] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#93c5fd] sm:text-base"
              >
                <IconPhone
                  size={20}
                  stroke={1.8}
                  aria-hidden="true"
                  className="text-[#93c5fd]"
                />
                07852 435168
              </a>
            </div>

            {/* Signature accent */}
            <div
              aria-hidden="true"
              className="mt-12 h-1 w-16 rounded-full bg-[#086bd4] sm:mt-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
