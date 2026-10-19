import Link from "next/link";

import { IconMapPin, IconArrowUpRight, IconRoute } from "@tabler/icons-react";

export default function WhereWeWork() {
  return (
    <section
      aria-labelledby="where-we-work-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid items-center gap-10
            lg:grid-cols-[minmax(0,1.07fr)_minmax(0,0.93fr)]
            lg:gap-16
          "
        >
          {/* EDITORIAL INTRODUCTION */}
          <div className="max-w-2xl">
            <p
              className="
                mb-4 text-xs font-semibold uppercase
                tracking-[0.18em] text-[#086bd4]
                sm:text-sm
              "
            >
              Where We Work
            </p>

            <h2
              id="where-we-work-heading"
              className="
                text-pretty text-3xl font-bold
                leading-tight tracking-tight
                text-[#06152c]
                sm:text-4xl lg:text-5xl
              "
            >
              Local roots.{" "}
              <span className="text-[#086bd4]">Regional reach.</span>
            </h2>

            <div
              className="
                mt-5 max-w-xl space-y-4
                text-pretty text-base leading-7
                text-slate-600
                sm:mt-6 sm:text-lg sm:leading-8
              "
            >
              <p>
                ELA Pressure Washing is based in Wolverhampton, providing
                professional exterior cleaning for homes, businesses and
                commercial properties throughout the wider West Midlands.
              </p>

              <p>
                From individual residential projects to larger commercial
                cleaning requirements, we're happy to discuss your property and
                confirm availability in your area.
              </p>
            </div>

            {/* COVERAGE ENQUIRY LINK */}
            <Link
              href="/contact"
              className="
                group mt-8 inline-flex min-h-11
                w-fit items-center gap-2
                rounded-sm text-sm font-semibold
                text-[#086bd4]
                transition-colors duration-200
                hover:text-[#054d99]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#086bd4]
              "
            >
              Enquire About Your Area
              <IconArrowUpRight
                size={19}
                stroke={1.8}
                className="
                  shrink-0 transition-transform
                  motion-safe:group-hover:translate-x-0.5
                  motion-safe:group-hover:-translate-y-0.5
                "
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* REGIONAL INFORMATION PANEL */}
          <div
            className="
              min-w-0 overflow-hidden rounded-2xl
              border border-slate-200 bg-white
              p-6 shadow-[0_14px_40px_rgba(6,21,44,0.04)]
              sm:p-8 lg:p-10
            "
          >
            <p
              className="
                mb-7 text-xs font-semibold
                uppercase tracking-[0.16em]
                text-[#086bd4]
              "
            >
              Our Location & Coverage
            </p>

            <dl className="mt-7">
              {/* Wolverhampton */}
              <div className="relative pl-16">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-xl bg-[#eaf4ff] text-[#086bd4]"
                  >
                    <IconMapPin size={24} stroke={1.8} />
                  </span>
                  Based In
                </dt>

                <dd className="mt-1.5">
                  <span className="block text-2xl font-bold tracking-tight text-[#06152c] sm:text-3xl">
                    Wolverhampton
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">
                    Our home base
                  </span>
                </dd>
              </div>

              {/* West Midlands */}
              <div className="relative mt-8 border-t border-slate-200 pt-8 pl-16">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-8 flex size-12 items-center justify-center rounded-xl bg-[#eaf4ff] text-[#086bd4]"
                  >
                    <IconRoute size={24} stroke={1.8} />
                  </span>
                  Serving
                </dt>

                <dd className="mt-1.5">
                  <span className="block text-2xl font-bold tracking-tight text-[#06152c] sm:text-3xl">
                    The West Midlands
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">
                    Regional exterior cleaning services
                  </span>
                </dd>
              </div>
            </dl>

            {/* SERVICE TYPES */}
            <div
              className="
                mt-8 border-t border-slate-200
                pt-6
              "
            >
              <p
                className="
                  text-sm leading-7
                  text-slate-600
                "
              >
                Residential <span aria-hidden="true">·</span> Commercial{" "}
                <span aria-hidden="true">·</span> Specialist Exterior Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
