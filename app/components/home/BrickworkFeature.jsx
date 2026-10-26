import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function BrickworkFeature() {
  return (
    <section
      aria-labelledby="brickwork-feature-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Section content */}
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
              New-Build Brickwork & Exterior Cleaning
            </p>

            <h2
              id="brickwork-feature-heading"
              className="text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-5xl"
            >
              A cleaner finish for every new build.
            </h2>

            <div className="mt-5 space-y-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                Specialist new-build brickwork and exterior cleaning for
                housebuilders, developers and bricklaying contractors across
                Wolverhampton and the West Midlands.
              </p>

              <p>
                From individual plots to larger developments, our work can
                extend beyond brickwork to driveways, pathways and other
                exterior surfaces. We take a considered approach to every
                project, selecting cleaning methods suited to the materials and
                condition of each surface.
              </p>
            </div>

            {/* Link to the existing Contact page until the dedicated service page is built. */}
            <Link
              href="/contact"
              className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#086bd4] px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#075db5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4] sm:w-auto sm:px-7"
            >
              Discuss Your Project
              <IconArrowUpRight
                size={18}
                stroke={1.8}
                className="shrink-0 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Temporary illustrative photograph; replace with authentic ELA imagery. */}
          <figure className="min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg shadow-[#06152c]/10 ring-1 ring-[#06152c]/10">
              <Image
                src="/assets/images/home/ew-build-brickwork-cleaning-feature.webp"
                alt="Illustrative image of a worker cleaning brickwork at a new-build housing development"
                fill
                sizes="(min-width: 1280px) 540px, (min-width: 1024px) 45vw, (min-width: 640px) 90vw, calc(100vw - 40px)"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-5 text-slate-500">
              Illustrative placeholder image — ELA project photography to
              follow.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
