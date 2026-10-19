import {
  IconGridDots,
  IconLayersIntersect,
  IconMountain,
} from "@tabler/icons-react";

const patioSurfaces = [
  {
    number: "01",
    title: "Concrete Paving Slabs",
    description:
      "Professional cleaning for suitable concrete patios affected by dirt, moss and algae.",
    icon: IconLayersIntersect,
  },
  {
    number: "02",
    title: "Natural Stone",
    description:
      "Careful consideration of sandstone, limestone and other natural stone surfaces.",
    icon: IconMountain,
  },
  {
    number: "03",
    title: "Block Paving",
    description:
      "Cleaning that takes account of the paving, jointing material and surrounding areas.",
    icon: IconGridDots,
  },
];

export default function PatioOverview() {
  return (
    <section
      aria-labelledby="patio-overview-heading"
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
                Patio Cleaning Overview
              </p>
            </div>

            <h2
              id="patio-overview-heading"
              className="mt-5 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              The right approach for{" "}
              <span className="text-[#086bd4]">every patio surface.</span>
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Patios are exposed to changing weather, organic growth and
                everyday use. Over time, accumulated dirt, moss and algae can
                leave paving looking tired and neglected.
              </p>

              <p>
                Different materials need different cleaning methods. What works
                for hard-wearing concrete slabs may not be suitable for natural
                stone or more delicate surfaces.
              </p>

              <p>
                At ELA Pressure Washing, we consider the paving material, its
                condition, the joints and surrounding areas before selecting an
                appropriate cleaning approach.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Individual surface cards */}
          <ol className="grid min-w-0 gap-4 sm:gap-5 lg:self-center">
            {patioSurfaces.map((surface) => {
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
