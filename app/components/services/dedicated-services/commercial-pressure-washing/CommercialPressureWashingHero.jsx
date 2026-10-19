import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconChevronRight,
} from "@tabler/icons-react";

export default function CommercialPressureWashingHero() {
  return (
    <section
      aria-labelledby="commercial-hero-heading"
      className="
        border-b border-[#dce6f2]
        bg-white
        py-16 sm:py-20 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid min-w-0 items-center gap-12
            lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
            lg:gap-14 xl:gap-20
          "
        >
          {/* Left: Content */}
          <div className="min-w-0">
            {/* Breadcrumb navigation */}
            <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
              <ol
                className="
                  flex flex-wrap items-center
                  gap-x-2 gap-y-1
                  text-xs font-medium text-slate-500
                  sm:text-sm
                "
              >
                <li>
                  <Link
                    href="/"
                    className="
                      transition-colors hover:text-[#086bd4]
                      focus-visible:rounded-sm
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#086bd4]
                    "
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">
                  <IconChevronRight size={14} stroke={1.8} />
                </li>

                <li>
                  <Link
                    href="/services"
                    className="
                      transition-colors hover:text-[#086bd4]
                      focus-visible:rounded-sm
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#086bd4]
                    "
                  >
                    Services
                  </Link>
                </li>

                <li aria-hidden="true">
                  <IconChevronRight size={14} stroke={1.8} />
                </li>

                <li
                  aria-current="page"
                  className="font-semibold text-[#06152c]"
                >
                  Commercial Pressure Washing
                </li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.17em] text-[#086bd4]
                  sm:text-sm
                "
              >
                Commercial Pressure Washing
              </p>
            </div>

            {/* Main heading */}
            <h1
              id="commercial-hero-heading"
              className="
                mt-6 max-w-2xl text-pretty
                text-4xl font-bold leading-[1.12]
                tracking-tight text-[#06152c]
                sm:text-5xl
                xl:text-[3.45rem]
              "
            >
              Professional commercial pressure washing.
            </h1>

            {/* Supporting copy */}
            <p
              className="
                mt-6 max-w-xl text-pretty
                text-base leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              Professional exterior cleaning for businesses and commercial
              properties across Wolverhampton and the West Midlands. From
              forecourts and pedestrian areas to entrances and building
              exteriors, ELA Pressure Washing delivers cleaning methods suited
              to the surface, its condition and the requirements of each site.
            </p>

            {/* Calls to action */}
            <div
              className="
                mt-9 flex flex-col items-start gap-3
                sm:flex-row sm:flex-wrap sm:items-center
                sm:gap-4
              "
            >
              <Link
                href="/contact"
                className="
                  inline-flex min-h-12 items-center
                  justify-center gap-3
                  rounded-lg bg-[#086bd4]
                  px-6 py-3
                  text-sm font-semibold text-white
                  transition-colors duration-200
                  hover:bg-[#0757ad]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#086bd4]
                  sm:text-base
                "
              >
                Request a Free Quote
                <IconArrowUpRight size={19} stroke={1.8} aria-hidden="true" />
              </Link>

              <Link
                href="/gallery"
                className="
                  inline-flex min-h-12 items-center
                  justify-center gap-3
                  rounded-lg border border-[#bfd4ea]
                  bg-white px-6 py-3
                  text-sm font-semibold text-[#0757ad]
                  transition-colors duration-200
                  hover:border-[#086bd4]
                  hover:bg-[#eaf3ff]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#086bd4]
                  sm:text-base
                "
              >
                View Our Work
                <IconArrowRight size={19} stroke={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right: Authentic ELA project photograph */}
          <div className="min-w-0">
            <div className="relative mx-auto w-full pb-4 pr-4 sm:max-w-[600px] sm:pb-5 sm:pr-5 lg:mx-0 lg:max-w-none">
              {/* Pale blue backing panel */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0 rounded-2xl
                  bg-[#eaf3ff]
                "
              />

              {/* Photograph and caption */}
              <figure
                className="
                  relative overflow-hidden
                  rounded-2xl bg-[#06152c]
                  shadow-[0_16px_45px_-28px_rgba(6,21,44,0.35)]
                  ring-1 ring-[#dce6f2]
                "
              >
                <div
                  className="
                    relative aspect-[5/4]
                    overflow-hidden bg-slate-200
                    sm:aspect-[6/5]
                    lg:aspect-[5/6]
                  "
                >
                  <Image
                    src="/assets/images/hero/hero.webp"
                    alt="ELA Pressure Washing operative wearing a branded high-visibility vest using a pressure-washing lance to clean metal cladding above a commercial roller shutter."
                    fill
                    priority
                    quality={75}
                    sizes="
                      (min-width: 1280px) 520px,
                      (min-width: 1024px) 45vw,
                      (min-width: 640px) calc(100vw - 64px),
                      calc(100vw - 40px)
                    "
                    className="
                      object-cover
                      object-[center_42%]
                      sm:object-[center_45%]
                      lg:object-center
                    "
                  />
                </div>

                {/* Image caption */}
                <figcaption
                  className="
                    flex items-center justify-between
                    gap-4 bg-[#06152c]
                    px-5 py-4 text-white
                    sm:px-6 sm:py-5
                  "
                >
                  <p
                    className="
                      text-xs font-medium leading-5
                      text-slate-200
                      sm:text-sm sm:leading-6
                    "
                  >
                    Professional commercial exterior cleaning by ELA Pressure
                    Washing.
                  </p>

                  <span
                    aria-hidden="true"
                    className="
                      h-[3px] w-9 shrink-0
                      rounded-full bg-[#086bd4]
                      sm:w-12
                    "
                  />
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
