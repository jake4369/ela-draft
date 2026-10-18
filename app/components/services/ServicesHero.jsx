import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Subtle background split on larger screens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-[#f3f7fb] lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 py-16 sm:gap-14 sm:py-20 lg:min-h-162.5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          {/* Left: Editorial introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#086bd4]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#086bd4] sm:text-sm">
                Our Services
              </p>
            </div>

            <h1
              id="services-hero-heading"
              className="mt-6 max-w-2xl text-pretty text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.09] tracking-[-0.045em] text-[#06152c]"
            >
              Exterior cleaning services,{" "}
              <span className="text-[#086bd4]">tailored to the job.</span>
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              From driveways and patios to commercial premises and specialist
              exterior surfaces, ELA delivers professional cleaning solutions
              across Wolverhampton and the wider West Midlands.
            </p>

            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600">
              Explore our services and discover the right approach for your
              property or project.
            </p>

            {/* Simple service categories */}
            <div className="mt-9 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Expertise across
              </p>

              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-3 text-sm font-semibold text-[#06152c] sm:gap-x-7">
                <li>Residential</li>
                <li className="border-l border-slate-300 pl-3 sm:pl-7">
                  Commercial
                </li>
                <li className="border-l border-slate-300 pl-3 sm:pl-7">
                  Heritage
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Image feature */}
          <div className="relative min-w-0 lg:pl-3">
            {/* Offset decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-2xl bg-[#d9eafd] sm:-right-5 sm:-top-5 lg:-right-6 lg:-top-6"
            />

            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-[#dce6f2] sm:aspect-[6/5] lg:aspect-square">
                <Image
                  src="/assets/images/services/services-hero.webp"
                  alt="ELA Pressure Washing operative professionally cleaning a street sign"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 85vw, 44vw"
                  className="object-cover"
                />

                {/* Gentle contrast for the image caption */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#06152c]/65 via-transparent to-transparent"
                />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">
                    Professional Exterior Care
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/85 sm:text-sm">
                    The right method. The right result.
                  </p>
                </div>
              </div>

              {/* Small signature detail */}
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
