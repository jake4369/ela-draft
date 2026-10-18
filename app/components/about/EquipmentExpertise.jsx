import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Professional Van-Mounted Systems",
    description:
      "ELA uses specialist van-mounted equipment for pressure washing and steam cleaning. The choice of equipment and settings depends on the surface, working environment and requirements of each project.",
  },
  {
    number: "02",
    title: "A Range of Specialist Cleaning Methods",
    description:
      "From high-pressure washing to soft washing, steam cleaning and specialist treatments, different methods can be used for different surfaces and conditions. There's no one-size-fits-all solution.",
  },
  {
    number: "03",
    title: "Residential, Commercial & Heritage Applications",
    description:
      "ELA's work ranges from domestic driveways and patios to commercial exteriors and older brickwork. Some projects also require access at height, with the approach planned around the property and the work involved.",
  },
];

export default function EquipmentExpertise() {
  return (
    <section
      aria-labelledby="equipment-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
            Our Equipment & Expertise
          </p>

          <h2
            id="equipment-heading"
            className="text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-5xl"
          >
            Specialist equipment. The right methods.{" "}
            <span className="text-[#086bd4]">Better results.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Cleaning different properties requires more than a one-size-fits-all
            approach. ELA combines professional cleaning equipment with methods
            suited to different surfaces, conditions and project requirements.
          </p>
        </div>

        {/* Photographic feature and capabilities */}
        <div className="mt-10 grid items-start gap-10 sm:mt-12 lg:mt-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <figure className="min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/assets/images/about/ela-commercial-exterior-access-platform.webp"
                alt="Operative working from an elevated access platform beside a brick building"
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 45vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                className="object-cover object-[50%_23%]"
              />
            </div>

            <figcaption className="mt-3 text-sm leading-6 text-slate-500">
              Commercial exterior work using elevated access equipment.
            </figcaption>
          </figure>

          <ol className="divide-y divide-slate-200 border-y border-slate-200">
            {capabilities.map((capability) => (
              <li
                key={capability.number}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5 sm:py-8 lg:first:pt-5 lg:last:pb-5"
              >
                <span
                  aria-hidden="true"
                  className="pt-0.5 text-xl font-bold tabular-nums text-[#086bd4] sm:text-2xl"
                >
                  {capability.number}
                </span>

                <div className="min-w-0">
                  <h3 className="text-pretty text-lg font-bold leading-snug text-[#06152c] sm:text-xl">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-pretty text-base leading-7 text-slate-600">
                    {capability.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
