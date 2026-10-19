import Link from "next/link";
import { IconMapPin, IconArrowUpRight } from "@tabler/icons-react";

// Provisional locations — awaiting owner confirmation.
const locations = [
  "Wolverhampton",
  "Birmingham",
  "Dudley",
  "Walsall",
  "West Bromwich",
  "Solihull",
  "Coventry",
];

export default function AreasWeCover() {
  return (
    <section
      aria-labelledby="areas-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid items-center gap-12
            lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
            lg:gap-14 xl:gap-20
          "
        >
          {/* EDITORIAL CONTENT */}
          <div className="min-w-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
              Areas We Cover
            </p>

            <h2
              id="areas-heading"
              className="text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-5xl"
            >
              Based in Wolverhampton. Working across the West Midlands.
            </h2>

            <div className="mt-6 max-w-2xl space-y-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                ELA Pressure Washing provides professional exterior cleaning
                services for homes, businesses and commercial properties
                throughout Wolverhampton and the wider West Midlands.
              </p>

              <p>
                From driveway and patio cleaning to commercial pressure washing,
                roof cleaning and specialist heritage brickwork care, we bring
                the right equipment and cleaning methods to properties across
                the region.
              </p>

              <p>
                Whether you're planning a residential cleaning project or
                require specialist exterior care for commercial premises, we're
                happy to discuss your requirements and confirm coverage in your
                area.
              </p>
            </div>

            {/* AREAS WE COVER LINK */}
            <Link
              href="/areas-we-cover"
              className="
                group mt-7 inline-flex items-center gap-2
                rounded-sm text-sm font-semibold
                text-[#086bd4] underline-offset-4
                transition-colors
                hover:text-[#054d99] hover:underline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#086bd4]
                sm:text-base
              "
            >
              Explore Areas We Cover
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

          {/* REGIONAL COVERAGE PANEL */}
          <div
            className="
              relative isolate min-w-0 overflow-hidden
              rounded-2xl bg-[#071d39]
              p-6 text-white
              shadow-[0_16px_40px_-25px_rgba(6,21,44,0.45)]
              sm:p-8 lg:p-8
            "
          >
            {/* Subtle decorative detail */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-20 -top-20 -z-10
                h-64 w-64 rounded-full
                border border-[#3975ad]/30
              "
            />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#79baff]">
              Regional Coverage
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Where we work.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Serving locations throughout the metropolitan West Midlands.
            </p>

            {/* LOCATIONS */}
            <ul className="mt-6 grid grid-cols-2 gap-x-3 sm:gap-x-6">
              {locations.map((location) => (
                <li
                  key={location}
                  className="
                    flex min-w-0 items-center gap-2
                    border-b border-white/15
                    py-3.5 text-[13px] font-medium
                    leading-5 text-slate-100
                    sm:text-sm
                  "
                >
                  <IconMapPin
                    size={17}
                    stroke={1.8}
                    className="shrink-0 text-[#79baff]"
                    aria-hidden="true"
                  />

                  <span>{location}</span>
                </li>
              ))}
            </ul>

            {/* COVERAGE ENQUIRY LINK */}
            <p className="mt-6 text-sm leading-6 text-slate-300">
              Don&apos;t see your location?{" "}
              <Link
                href="/contact"
                className="
                  rounded-sm font-semibold text-[#93c5fd]
                  underline underline-offset-4
                  transition-colors
                  hover:text-white
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#93c5fd]
                "
              >
                Contact us
              </Link>{" "}
              to confirm coverage in your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
