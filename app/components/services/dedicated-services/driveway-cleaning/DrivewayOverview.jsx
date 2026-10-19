import {
  IconGridDots,
  IconLayersIntersect,
  IconMountain,
} from "@tabler/icons-react";

const drivewaySurfaces = [
  {
    number: "01",
    title: "Block Paving",
    description:
      "Professional cleaning for suitable block-paved driveways, helping address accumulated dirt, moss, algae and surface grime.",
    icon: IconGridDots,
  },
  {
    number: "02",
    title: "Concrete Driveways",
    description:
      "A considered approach to removing everyday dirt and surface buildup from suitable concrete driveways.",
    icon: IconLayersIntersect,
  },
  {
    number: "03",
    title: "Natural Stone",
    description:
      "Individual assessment of the stone type and its condition before choosing an appropriate cleaning method.",
    icon: IconMountain,
  },
];

export default function DrivewayOverview() {
  return (
    <section
      aria-labelledby="driveway-overview-heading"
      className="border-b border-[#dce6f2] bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          {/* Editorial introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Driveway Cleaning Overview
              </p>
            </div>

            <h2
              id="driveway-overview-heading"
              className="mt-5 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              The right care for{" "}
              <span className="text-[#086bd4]">every driveway surface.</span>
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Driveways are exposed to everyday traffic, changing weather and
                organic growth. Over time, accumulated dirt, moss and algae can
                leave even well-maintained surfaces looking tired.
              </p>

              <p>
                Different paving materials have different cleaning requirements.
                What works well for hard-wearing block paving may not be
                suitable for more sensitive stone or surfaces showing signs of
                deterioration.
              </p>

              <p>
                At ELA Pressure Washing, we consider the material, its condition
                and the type of buildup before selecting an appropriate cleaning
                method. Our aim is to achieve a thorough clean while taking
                proper care of the surface being treated.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Individual surface cards */}
          <ol className="grid min-w-0 gap-4 sm:gap-5 lg:self-center">
            {drivewaySurfaces.map((surface) => {
              const Icon = surface.icon;

              return (
                <li
                  key={surface.number}
                  className="min-w-0 rounded-2xl border border-[#dce6f2] bg-white p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Surface icon */}
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#086bd4] sm:h-12 sm:w-12"
                    >
                      <Icon size={24} stroke={1.7} />
                    </div>

                    {/* Surface information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span
                          aria-hidden="true"
                          className="text-xs font-bold tracking-[0.14em] text-[#086bd4]"
                        >
                          {surface.number}
                        </span>

                        <h3 className="text-lg font-bold leading-snug tracking-tight text-[#06152c] sm:text-xl">
                          {surface.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {surface.description}
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
