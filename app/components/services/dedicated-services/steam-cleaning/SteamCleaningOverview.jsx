import { IconWalk, IconSparkles, IconBuilding } from "@tabler/icons-react";

const steamCleaningAreas = [
  {
    number: "01",
    title: "Paved & High-Traffic Areas",
    description:
      "Professional steam cleaning can help address accumulated grime and suitable surface contamination on paved walkways, commercial entrances and frequently used outdoor spaces. The cleaning method depends on the paving material and its condition.",
    icon: IconWalk,
  },
  {
    number: "02",
    title: "Stubborn Grime & Deposits",
    description:
      "Heat-assisted cleaning can be useful when dealing with certain stubborn deposits, including chewing gum, grease and ingrained surface grime. Results depend on the type of contamination, the affected material and the cleaning method selected.",
    icon: IconSparkles,
  },
  {
    number: "03",
    title: "Masonry & Exterior Surfaces",
    description:
      "Some brickwork, stone and other exterior materials may benefit from carefully controlled high-temperature cleaning. We consider the surface and its condition before deciding whether steam cleaning is appropriate and what level of pressure should be used.",
    icon: IconBuilding,
  },
];

export default function SteamCleaningOverview() {
  return (
    <section
      id="steam-overview"
      aria-labelledby="steam-overview-heading"
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
                Steam Cleaning Overview
              </p>
            </div>

            <h2
              id="steam-overview-heading"
              className="mt-5 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Specialist cleaning with{" "}
              <span className="text-[#086bd4]">the added power of heat.</span>
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Some exterior cleaning challenges require a different approach
                from conventional pressure washing. Accumulated grime, stubborn
                deposits and certain types of surface contamination can be
                difficult to address using water pressure alone.
              </p>

              <p>
                Professional steam cleaning introduces high-temperature water or
                steam into the cleaning process. Where suitable, heat can help
                loosen contamination and allow effective cleaning without
                automatically relying on higher water pressure.
              </p>

              <p>
                At ELA Pressure Washing, we consider the surface material, its
                condition and the type of buildup before recommending a suitable
                cleaning method. Both temperature and pressure must be
                appropriate for the surface being treated.
              </p>
            </div>

            {/* Signature accent */}
            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Individual steam cleaning cards */}
          <ol className="grid min-w-0 gap-4 sm:gap-5">
            {steamCleaningAreas.map((area) => {
              const Icon = area.icon;

              return (
                <li
                  key={area.number}
                  className="min-w-0 rounded-2xl border border-[#dce6f2] bg-white p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Area icon */}
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#086bd4] sm:h-12 sm:w-12"
                    >
                      <Icon size={24} stroke={1.7} />
                    </div>

                    {/* Area information */}
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
