import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const services = [
  {
    title: "Driveway Cleaning",
    href: "/services/driveway-cleaning",
  },
  {
    title: "Patio Cleaning",
    href: "/services/patio-cleaning",
  },
  {
    title: "Roof Cleaning",
    href: "/services/roof-cleaning",
  },
  {
    title: "Commercial Pressure Washing",
    href: "/services/commercial-pressure-washing",
  },
  {
    title: "Steam Cleaning",
    href: "/services/steam-cleaning",
  },
  {
    title: "Heritage Brickwork Cleaning",
    href: "/services/heritage-brickwork-cleaning",
  },
];

export default function RegionalServices() {
  return (
    <section
      aria-labelledby="regional-services-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid items-start gap-10
            lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]
            lg:gap-14 xl:gap-20
          "
        >
          {/* Section introduction */}
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
              Services Across the Region
            </p>

            <h2
              id="regional-services-heading"
              className="
                text-pretty text-3xl font-bold leading-tight
                tracking-tight text-[#06152c]
                sm:text-4xl lg:text-[2.75rem]
              "
            >
              The right service for{" "}
              <span className="text-[#086bd4]">your property.</span>
            </h2>

            <p className="mt-6 max-w-lg text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              From residential driveways, patios and roofs to commercial
              premises and specialist exterior care, ELA provides a range of
              professional cleaning services for properties across Wolverhampton
              and the wider West Midlands.
            </p>

            <p className="mt-5 max-w-lg text-pretty text-sm leading-7 text-slate-500">
              Explore our services to learn more about the cleaning methods
              available. We can confirm suitability and availability for your
              location when discussing your project.
            </p>
          </div>

          {/* Services directory */}
          <nav
            aria-label="Exterior cleaning services"
            className="lg:self-center"
          >
            <ul
              className="
                grid grid-cols-1 gap-x-8
                sm:grid-cols-2
                lg:grid-cols-1
                xl:grid-cols-2
              "
            >
              {services.map((service) => (
                <li
                  key={service.href}
                  className="min-w-0 border-b border-slate-200"
                >
                  <Link
                    href={service.href}
                    className="
                      group flex min-h-16 items-center
                      justify-between gap-4 py-4
                      text-base font-semibold leading-6
                      text-[#06152c]
                      transition-colors duration-200
                      hover:text-[#086bd4]
                      focus-visible:rounded-sm
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-[#086bd4]
                    "
                  >
                    <span>{service.title}</span>

                    <IconArrowUpRight
                      size={19}
                      stroke={1.8}
                      aria-hidden="true"
                      className="
                        shrink-0 text-[#086bd4]
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
