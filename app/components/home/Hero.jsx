import Image from "next/image";
import Link from "next/link";

import { IconMessageCircle, IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#06152c] text-white lg:min-h-[680px]"
    >
      {/* Background photograph */}

      <Image
        src="/assets/images/hero/hero.webp"
        alt="ELA operative pressure washing a commercial roller shutter"
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        className="object-cover object-[65%_center] sm:object-[60%_center] lg:object-center"
      />

      {/* Temporary overlay — to refine separately */}
      <div
        aria-hidden="true"
        className="
  absolute inset-0
  bg-[#06152c]/75
  sm:bg-linear-to-r
  sm:from-[#06152c]/90
  sm:via-[#06152c]/75
  sm:to-[#06152c]/40
  lg:from-[#06152c]/95
  lg:via-[#06152c]/65
  lg:to-[#06152c]/10
"
      />

      {/* Hero content — provisional for layout testing */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#94caff] sm:text-sm">
            ELA PRESSURE WASHING
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Exterior cleaning that makes a{" "}
            <span className="text-[#5ab2ff]">difference.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-white/90 sm:text-lg">
            Professional pressure washing, steam cleaning and specialist
            exterior care for homes and businesses across Wolverhampton and the
            West Midlands.
          </p>

          {/* Hero CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {/* Primary CTA */}
            <Link
              href="https://elapressurewashing.co.uk/contact"
              className="
      inline-flex min-h-12 items-center justify-center gap-3
      rounded-lg bg-[#086bd4] px-7 py-3
      text-sm font-semibold text-white
      transition-colors duration-200
      hover:bg-[#0068dc]
      focus-visible:outline-2
      focus-visible:outline-offset-4
      focus-visible:outline-white
    "
            >
              Request a Free Quote
              <IconMessageCircle
                size={18}
                stroke={1.8}
                className="shrink-0"
                aria-hidden="true"
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="https://elapressurewashing.co.uk/services"
              className="
      inline-flex min-h-12 items-center justify-center gap-3
      rounded-lg border border-white/60
      bg-[#06152c]/30 px-7 py-3
      text-sm font-semibold text-white
      transition-colors duration-200
      hover:border-white hover:bg-white/15
      focus-visible:outline-2
      focus-visible:outline-offset-4
      focus-visible:outline-white
    "
            >
              Explore Our Services
              <IconArrowRight
                size={18}
                stroke={1.8}
                className="shrink-0"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
