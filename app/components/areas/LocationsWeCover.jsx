import Link from "next/link";
import { IconArrowUpRight, IconMapPin } from "@tabler/icons-react";

// PROVISIONAL: Confirm all listed service areas
// with the business owner before publication.
const regionalLocations = [
  "Birmingham",
  "Dudley",
  "Walsall",
  "West Bromwich",
  "Solihull",
  "Coventry",
];

export default function LocationsWeCover() {
  return (
    <section
      aria-labelledby="locations-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION INTRODUCTION */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
            Our Service Area
          </p>

          <h2
            id="locations-heading"
            className="text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-5xl"
          >
            Local roots. <span className="text-[#086bd4]">Regional reach.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From our home base in Wolverhampton, we provide professional
            exterior cleaning across the wider West Midlands, serving
            residential and commercial properties throughout the region.
          </p>
        </div>

        {/* REGIONAL LAYOUT */}
        <div className="mt-10 grid items-stretch gap-6 sm:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
          {/* WOLVERHAMPTON FEATURE */}
          <div className="relative isolate flex min-w-0 flex-col overflow-hidden rounded-2xl bg-[#071a36] p-7 text-white sm:p-9 lg:p-10">
            {/* DECORATIVE DETAIL */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-36 -top-40 -z-10 h-[390px] w-[390px] rounded-full border border-[#71baff]/20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 -z-10 h-[270px] w-[270px] rounded-full border border-[#71baff]/10"
            />

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#71baff]/25 bg-white/10">
              <IconMapPin
                size={25}
                stroke={1.7}
                className="text-[#80bdff]"
                aria-hidden="true"
              />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#80bdff] sm:text-sm">
              Our Home Base
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Wolverhampton.
            </h3>

            <p className="mt-5 max-w-md text-pretty text-base leading-8 text-slate-300">
              Proudly based in Wolverhampton, providing professional pressure
              washing, exterior cleaning and specialist surface care for
              residential and commercial properties.
            </p>

            <div className="mt-auto pt-10">
              <div className="border-t border-white/15 pt-5">
                <p className="text-sm font-medium text-[#9acaff]">
                  Based locally. Working regionally.
                </p>
              </div>
            </div>
          </div>

          {/* REGIONAL DIRECTORY */}
          <div className="flex min-w-0 flex-col py-1 lg:py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Across the Region
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#06152c] sm:text-3xl">
                Where else do we work?
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-600">
                We welcome enquiries from customers across the following areas.
                Availability will depend on your location and project
                requirements.
              </p>
            </div>

            {/* LOCATION LIST */}
            <ul className="mt-7 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {regionalLocations.map((location) => (
                <li
                  key={location}
                  className="flex min-h-16 min-w-0 items-center gap-3 border-b border-slate-200 py-4"
                >
                  <IconMapPin
                    size={19}
                    stroke={1.7}
                    className="shrink-0 text-[#086bd4]"
                    aria-hidden="true"
                  />

                  <span className="text-base font-semibold text-[#06152c]">
                    {location}
                  </span>
                </li>
              ))}
            </ul>

            {/* COVERAGE ENQUIRY */}
            <div className="mt-auto pt-8">
              <p className="text-sm leading-7 text-slate-600">
                Don't see your location listed? We may still be able to help.
              </p>

              <Link
                href="/contact"
                className="group mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#086bd4] transition-colors duration-200 hover:text-[#054d99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
              >
                Enquire About Your Area
                <IconArrowUpRight
                  size={19}
                  stroke={1.8}
                  className="shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
