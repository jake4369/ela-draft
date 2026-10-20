import {
  IconBuilding,
  IconLayersIntersect,
  IconBrush,
} from "@tabler/icons-react";

const heritageConsiderations = [
  {
    number: "01",
    title: "Brickwork & Surface Condition",
    description:
      "Older bricks can vary considerably in strength, porosity and surface condition. We consider the type of brickwork, existing weathering and signs of deterioration before recommending a suitable cleaning approach.",
    icon: IconBuilding,
  },
  {
    number: "02",
    title: "Mortar & Architectural Details",
    description:
      "Traditional mortar, decorative features and historic finishes can require particular care. Cleaning methods must take account of vulnerable joints, previous repairs and architectural details that could be affected by unsuitable techniques.",
    icon: IconLayersIntersect,
  },
  {
    number: "03",
    title: "Contamination & Cleaning Methods",
    description:
      "Weather staining, atmospheric dirt, algae and other deposits can affect traditional masonry. The type of contamination and condition of the surface help determine whether controlled cleaning methods or specialist treatments may be appropriate.",
    icon: IconBrush,
  },
];

export default function HeritageBrickworkOverview() {
  return (
    <section
      aria-labelledby="heritage-overview-heading"
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
                Heritage Brickwork Overview
              </p>
            </div>

            <h2
              id="heritage-overview-heading"
              className="mt-5 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              The right approach for{" "}
              <span className="text-[#086bd4]">traditional brickwork.</span>
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Traditional brickwork is an important part of a building's
                character. Over time, exposure to weather, atmospheric pollution
                and organic growth can leave masonry affected by staining and
                accumulated surface contamination.
              </p>

              <p>
                Older buildings often contain materials that require particular
                care. Historic bricks, traditional mortar and decorative
                architectural features may be more vulnerable to unsuitable
                cleaning pressures, chemicals or techniques.
              </p>

              <p>
                At ELA Pressure Washing, we consider the brickwork, mortar,
                existing condition and type of contamination before recommending
                a suitable cleaning method. Our approach recognises the
                importance of improving a surface's appearance while respecting
                the materials and character of the property.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Individual heritage considerations */}
          <ol className="grid min-w-0 gap-4 sm:gap-5 lg:self-center">
            {heritageConsiderations.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.number}
                  className="min-w-0 rounded-2xl border border-[#dce6f2] bg-white p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Consideration icon */}
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#086bd4] sm:h-12 sm:w-12"
                    >
                      <Icon size={24} stroke={1.7} />
                    </div>

                    {/* Consideration information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span
                          aria-hidden="true"
                          className="text-xs font-bold tracking-[0.14em] text-[#086bd4]"
                        >
                          {item.number}
                        </span>

                        <h3 className="text-lg font-bold leading-snug tracking-tight text-[#06152c] sm:text-xl">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {item.description}
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
