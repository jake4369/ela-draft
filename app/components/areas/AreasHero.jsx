import Link from "next/link";
import { IconArrowUpRight, IconMapPin } from "@tabler/icons-react";

export default function AreasHero() {
  return (
    <section
      aria-labelledby="areas-hero-heading"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="max-w-5xl">
          {/* SECTION LABEL */}
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
            Areas We Cover
          </p>

          {/* MAIN HEADING */}
          <h1
            id="areas-hero-heading"
            className="max-w-5xl text-pretty text-4xl font-bold leading-[1.12] tracking-tight text-[#06152c] sm:text-5xl lg:text-[3.65rem]"
          >
            Exterior cleaning across{" "}
            <span className="text-[#086bd4]">Wolverhampton</span> and the West
            Midlands.
          </h1>

          {/* INTRODUCTION */}
          <div className="mt-7 max-w-3xl space-y-4 text-pretty text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            <p>
              Based in Wolverhampton, ELA Pressure Washing provides professional
              exterior cleaning and specialist surface care for residential and
              commercial properties across the wider West Midlands.
            </p>

            <p>
              From individual homes to larger commercial premises, we're happy
              to discuss your requirements and confirm whether our services are
              available in your area.
            </p>
          </div>

          {/* PRIMARY ACTION */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="https://ela-draft.vercel.app/contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#086bd4] transition-colors duration-200 hover:text-[#054d99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
            >
              Enquire About Coverage
              <IconArrowUpRight
                size={19}
                stroke={1.8}
                className="shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* REGIONAL SIGNATURE */}
          <div className="mt-12 border-t border-slate-200 pt-6 sm:mt-14 sm:pt-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="flex items-center gap-2 text-[#086bd4]">
                <IconMapPin size={19} stroke={1.8} aria-hidden="true" />

                <span className="text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm">
                  Based in Wolverhampton
                </span>
              </span>

              <span
                aria-hidden="true"
                className="hidden h-4 w-px bg-slate-300 sm:block"
              />

              <span className="text-sm text-slate-600">
                Serving the wider West Midlands
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
