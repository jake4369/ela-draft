import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconChevronRight } from "@tabler/icons-react";

export default function SteamCleaningHero() {
  return (
    <section
      aria-labelledby="steam-hero-heading"
      className="border-b border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
          {/* Left: Content */}
          <div className="min-w-0">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-[#086bd4] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
              >
                Home
              </Link>

              <IconChevronRight
                size={16}
                stroke={1.8}
                aria-hidden="true"
                className="text-slate-400"
              />

              <Link
                href="/services"
                className="transition-colors duration-200 hover:text-[#086bd4] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
              >
                Services
              </Link>

              <IconChevronRight
                size={16}
                stroke={1.8}
                aria-hidden="true"
                className="text-slate-400"
              />

              <span
                aria-current="page"
                className="font-semibold text-[#06152c]"
              >
                Steam Cleaning
              </span>
            </nav>

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Professional Steam Cleaning
              </p>
            </div>

            {/* Heading */}
            <h1
              id="steam-hero-heading"
              className="mt-5 max-w-3xl text-pretty text-4xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-5xl lg:text-[4rem] lg:leading-[1.05]"
            >
              Specialist steam cleaning{" "}
              <span className="text-[#086bd4]">for sensitive surfaces.</span>
            </h1>

            {/* Supporting text */}
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Professional steam cleaning for exterior surfaces across
              Wolverhampton and the West Midlands. From paved public areas and
              entrances to more delicate masonry and hard surfaces, ELA Pressure
              Washing provides a heat-based cleaning approach where lower
              pressure may be more suitable.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#086bd4] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0757ad] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4] sm:text-base"
              >
                Request a Free Quote
                <IconArrowRight size={18} stroke={1.8} aria-hidden="true" />
              </Link>

              <Link
                href="/gallery"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#bfd4ea] bg-white px-6 py-3 text-sm font-semibold text-[#0757ad] transition-colors duration-200 hover:border-[#086bd4] hover:bg-[#eaf3ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4] sm:text-base"
              >
                View Our Work
                <IconArrowRight size={18} stroke={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right: Hero image card */}
          <div className="min-w-0">
            <div className="mx-auto overflow-hidden rounded-[1.75rem] bg-[#eaf1f8] p-3 sm:max-w-[600px] sm:p-4 lg:mx-0 lg:max-w-none">
              <figure className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(6,21,44,0.06)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 sm:aspect-[6/5] lg:aspect-[4/5]">
                  <Image
                    src="/assets/images/services/steam-cleaning-hero-night.webp"
                    alt="ELA Pressure Washing operative carrying out professional steam cleaning on an exterior paved walkway at night."
                    fill
                    priority
                    sizes="(min-width: 1280px) 560px, (min-width: 1024px) 44vw, (min-width: 640px) 70vw, 100vw"
                    className="object-cover object-[74%_center] sm:object-[76%_20%] lg:object-[76%_center] xl:object-[78%_center]"
                  />
                </div>

                <figcaption className="flex items-center justify-between gap-4 bg-[#06152c] px-5 py-5 text-white sm:px-6">
                  <p className="max-w-sm text-sm leading-7 text-slate-200 sm:text-base">
                    Professional exterior steam cleaning by ELA Pressure
                    Washing.
                  </p>

                  <span
                    aria-hidden="true"
                    className="hidden h-[3px] w-12 shrink-0 rounded-full bg-[#086bd4] sm:block"
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
