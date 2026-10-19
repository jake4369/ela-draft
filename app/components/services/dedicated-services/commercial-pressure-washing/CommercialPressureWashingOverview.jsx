import { IconCar, IconWalk, IconBuilding } from "@tabler/icons-react";

const commercialAreas = [
  {
    number: "01",
    title: "Forecourts & Parking Areas",
    description:
      "Frequent vehicle movement and everyday use can leave car parks, forecourts and hardstanding affected by dirt, staining and organic growth. We consider the surface material, its condition and the type of contamination before recommending a suitable cleaning method.",
    icon: IconCar,
  },
  {
    number: "02",
    title: "Business Entrances & Walkways",
    description:
      "Entrances, paved approaches and pedestrian routes are often among the first parts of a property that customers and visitors see. Professional cleaning can help improve the appearance of suitable surfaces, with site access and day-to-day use considered when planning the work.",
    icon: IconWalk,
  },
  {
    number: "03",
    title: "Building Exteriors & Masonry",
    description:
      "Commercial walls, brickwork, cladding and other exterior surfaces can accumulate grime and weather staining. The material and its condition determine whether pressure washing, steam cleaning or a gentler specialist approach may be appropriate.",
    icon: IconBuilding,
  },
];

export default function CommercialPressureWashingOverview() {
  return (
    <section
      id="commercial-overview"
      aria-labelledby="commercial-overview-heading"
      className="border-b border-[#dce6f2] bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 sm:gap-12 lg:items-center lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          {/* Editorial introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Commercial Exterior Cleaning
              </p>
            </div>

            <h2
              id="commercial-overview-heading"
              className="mt-5 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Exterior cleaning shaped around{" "}
              <span className="text-[#086bd4]">your business.</span>
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Commercial premises are exposed to everyday footfall, vehicle
                traffic, changing weather and accumulated surface contamination.
                Over time, these can affect the appearance of entrances, outdoor
                spaces and building exteriors.
              </p>

              <p>
                At ELA Pressure Washing, we recognise that different properties
                and surfaces need different cleaning approaches. We consider the
                material, its condition and the work required before
                recommending suitable methods.
              </p>

              <p>
                We also take account of how a site is used, including access for
                staff, customers and vehicles, when discussing commercial
                cleaning requirements.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Individual commercial cleaning cards */}
          <ol className="grid min-w-0 gap-4 sm:gap-5">
            {commercialAreas.map((area) => {
              const Icon = area.icon;

              return (
                <li
                  key={area.number}
                  className="min-w-0 rounded-2xl border border-[#dce6f2] bg-white p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Commercial area icon */}
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#086bd4] sm:h-12 sm:w-12"
                    >
                      <Icon size={24} stroke={1.7} />
                    </div>

                    {/* Commercial area information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span
                          aria-hidden="true"
                          className="text-xs font-bold tracking-[0.14em] text-[#086bd4]"
                        >
                          {area.number}
                        </span>

                        <h3 className="text-lg font-bold leading-snug tracking-tight text-[#06152c] sm:text-xl">
                          {area.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
