import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";

export default function PatioHero() {
  return (
    <section
      aria-labelledby="patio-hero-heading"
      className="relative isolate overflow-hidden border-b border-[#dce6f2] bg-white"
    >
      {/* Subtle desktop background panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f7fb] lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 py-16 sm:gap-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          {/* Text content */}
          <div className="min-w-0">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="rounded-sm hover:text-[#086bd4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li>
                  <Link
                    href="/services"
                    className="rounded-sm hover:text-[#086bd4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
                  >
                    Services
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li
                  aria-current="page"
                  className="font-semibold text-[#06152c]"
                >
                  Patio Cleaning
                </li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <div className="mt-10 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Patio Cleaning
              </p>
            </div>

            {/* Main heading */}
            <h1
              id="patio-hero-heading"
              className="mt-6 max-w-2xl text-pretty text-[clamp(2.5rem,4.3vw,4rem)] font-bold leading-[1.09] tracking-[-0.045em] text-[#06152c]"
            >
              Professional patio cleaning
            </h1>

            {/* Supporting text */}
            <p className="mt-7 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              Refresh your outdoor space with professional patio cleaning from
              ELA Pressure Washing. We help homeowners and businesses across
              Wolverhampton and the West Midlands tackle built-up dirt, moss,
              algae and stubborn grime on suitable paved surfaces.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#086bd4] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0757ad] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
              >
                Request a Free Quote
                <IconArrowUpRight size={18} stroke={1.8} aria-hidden="true" />
              </Link>

              <Link
                href="/gallery"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#bfd4ea] bg-white px-6 py-3 text-sm font-semibold text-[#06152c] transition-colors duration-200 hover:border-[#086bd4] hover:bg-[#eaf3ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
              >
                View Our Work
                <IconArrowRight size={18} stroke={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Hero photograph */}
          <div className="relative min-w-0 lg:pl-3">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-[96%] w-[96%] rounded-2xl bg-[#d8eaff] sm:-right-6 sm:-top-6"
            />

            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#eaf3fb] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/assets/images/services/patio-hero.webp"
                  alt="Residential garden patio with yellow, terracotta and grey paving slabs, outdoor furniture, colourful flowers and cleaning equipment"
                  fill
                  priority
                  quality={85}
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                  className="object-cover object-[center_55%]"
                />

                {/* Caption contrast gradient */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#06152c]/75 to-transparent"
                />

                <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 text-white sm:px-7 sm:pb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.14em]">
                    Residential Patio Care
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Real work. Professional exterior cleaning.
                  </p>
                </figcaption>
              </div>
            </figure>

            {/* Signature accent */}
            <div
              aria-hidden="true"
              className="ml-auto mt-2 h-1 w-20 rounded-full bg-[#086bd4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
