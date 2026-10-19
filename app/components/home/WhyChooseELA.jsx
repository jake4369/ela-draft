import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const features = [
  {
    number: "01",
    title: "Surface-Appropriate Cleaning",
    description:
      "More pressure isn't always the right answer. We consider the material, its condition and the type of contamination before selecting an appropriate cleaning method.",
  },
  {
    number: "02",
    title: "Specialist Equipment & Techniques",
    description:
      "From high-pressure washing and steam cleaning to soft washing and specialist treatments, we use equipment and methods suited to the surface and the work required.",
  },
  {
    number: "03",
    title: "10+ Years of Experience",
    description:
      "With over a decade of experience, ELA provides exterior cleaning services for homeowners, businesses and specialist properties across Wolverhampton and the West Midlands.",
  },
  {
    number: "04",
    title: "More Than Just Cleaning",
    description:
      "Our expertise extends beyond cleaning to include surface sealing, patio repointing, driveway sinkage lifting and specialist aftercare treatments for suitable exterior surfaces.",
  },
];

export default function WhyChooseELA() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION INTRODUCTION */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
            Why Choose ELA
          </p>

          <h2
            id="why-choose-heading"
            className="text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-5xl"
          >
            The right approach for every property.
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Exterior cleaning isn't one-size-fits-all. Different materials,
            surfaces and levels of contamination require different techniques.
            At ELA Pressure Washing, we take a considered approach to each
            project, selecting suitable cleaning methods for everything from
            residential paving and commercial premises to more sensitive
            heritage brickwork.
          </p>
        </div>

        {/* EDITORIAL CONTENT */}
        <div className="mt-12 grid items-start gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT — PHOTOGRAPH */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[16/10] lg:aspect-[3/4]">
            <Image
              src="/assets/images/whyela/civic.webp"
              alt="Partially cleaned exterior surface of Wolverhampton Civic Centre, overlooking buildings in Wolverhampton."
              fill
              loading="lazy"
              sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 42vw, 520px"
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT — SELLING POINTS */}
          <div className="min-w-0">
            <ol className="divide-y divide-slate-200">
              {features.map((feature) => (
                <li key={feature.number} className="py-6 first:pt-0 last:pb-6">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <span
                      aria-hidden="true"
                      className="shrink-0 pt-0.5 text-xl font-semibold tracking-tight text-[#086bd4] sm:text-2xl"
                    >
                      {feature.number}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-lg font-bold leading-snug text-[#06152c] sm:text-xl">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            {/* SUBTLE CONTACT LINK */}
            <Link
              href="https://ela-draft.vercel.app/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#086bd4] underline-offset-4 transition-colors hover:text-[#054d99] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4] sm:text-base"
            >
              Discuss Your Project
              <IconArrowUpRight
                size={19}
                stroke={1.8}
                aria-hidden="true"
                className="shrink-0 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
