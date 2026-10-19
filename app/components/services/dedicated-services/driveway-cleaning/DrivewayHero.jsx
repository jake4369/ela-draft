import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconArrowRight } from "@tabler/icons-react";

export default function DrivewayHero() {
  return (
    <section
      aria-labelledby="driveway-hero-heading"
      className="relative isolate overflow-hidden border-b border-[#dce6f2] bg-white"
    >
      {/* Subtle editorial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f7fb] lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 py-16 sm:gap-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          {/* Left: Hero content */}
          <div className="min-w-0">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 text-sm text-slate-600"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="rounded-sm underline-offset-4 hover:text-[#086bd4] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li>
                  <Link
                    href="/services"
                    className="rounded-sm underline-offset-4 hover:text-[#086bd4] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
                  >
                    Services
                  </Link>
                </li>

                <li aria-hidden="true">/</li>

                <li
                  aria-current="page"
                  className="font-semibold text-[#06152c]"
                >
                  Driveway Cleaning
                </li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Driveway Cleaning
              </p>
            </div>

            {/* Primary heading */}
            <h1
              id="driveway-hero-heading"
              className="mt-6 max-w-2xl text-pretty text-[clamp(2.5rem,4.3vw,4rem)] font-bold leading-[1.09] tracking-[-0.045em] text-[#06152c]"
            >
              Professional driveway cleaning
            </h1>

            {/* Supporting introduction */}
            <p className="mt-7 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              Bring new life to your driveway with professional exterior
              cleaning from ELA Pressure Washing. We help homeowners and
              businesses across Wolverhampton and the West Midlands tackle
              built-up dirt, algae, moss and stubborn surface grime.
            </p>

            {/* Calls to action */}
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#086bd4] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0757ac] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
              >
                Request a Free Quote
                <IconArrowUpRight size={18} stroke={1.8} aria-hidden="true" />
              </Link>

              <Link
                href="/gallery"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#bdcddd] bg-white px-6 py-3 text-sm font-semibold text-[#06152c] transition-colors hover:border-[#086bd4] hover:text-[#086bd4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
              >
                View Our Work
                <IconArrowRight size={18} stroke={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right: Authentic project photograph */}
          <div className="relative min-w-0 lg:pl-3">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-2xl bg-[#d9eafd] sm:-right-5 sm:-top-5 lg:-right-6 lg:-top-6"
            />

            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-[#dce6f2] sm:aspect-[6/5] lg:aspect-square">
                <Image
                  src="/assets/images/services/cleaned-block-paved-driveway.webp"
                  alt="Cleaned grey block-paved driveway outside a residential property"
                  fill
                  loading="eager"
                  quality={75}
                  sizes="(min-width: 1280px) 550px, (min-width: 1024px) 44vw, (min-width: 640px) 85vw, 100vw"
                  className="object-cover"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06152c]/55 via-transparent to-transparent"
                />

                {/* Image caption */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">
                    Residential Driveway Care
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white sm:text-sm">
                    Real work. Professional exterior cleaning.
                  </p>
                </div>
              </div>

              {/* Signature blue accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 right-6 h-1.5 w-20 rounded-full bg-[#086bd4] sm:right-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
