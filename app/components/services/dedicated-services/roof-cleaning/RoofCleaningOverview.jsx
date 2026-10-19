import {
  IconLeaf,
  IconLayersIntersect,
  IconCloudRain,
} from "@tabler/icons-react";

const considerations = [
  {
    number: "01",
    title: "Moss & Organic Growth",
    description:
      "Moss, algae and lichen can build up on roof surfaces, particularly where moisture and shade encourage growth. Suitable cleaning can help remove accumulated deposits and refresh the roof's appearance.",
    icon: IconLeaf,
  },
  {
    number: "02",
    title: "Roof Materials & Condition",
    description:
      "Concrete tiles, clay tiles and other roofing materials have different characteristics. Age, weathering and existing damage can influence which cleaning methods are appropriate, or whether cleaning is advisable at all.",
    icon: IconLayersIntersect,
  },
  {
    number: "03",
    title: "Debris & Drainage",
    description:
      "Accumulated moss can loosen over time and be carried towards gutters and drainage channels during rainfall. Considering debris and the surrounding property is an important part of planning suitable roof cleaning work.",
    icon: IconCloudRain,
  },
];

export default function RoofCleaningOverview() {
  return (
    <section
      aria-labelledby="roof-overview-heading"
      className="
        border-b border-[#dce6f2]
        bg-[#f3f7fb]
        py-16 sm:py-20 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid items-start gap-10
            sm:gap-12
            lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
            lg:gap-16 xl:gap-20
          "
        >
          {/* Left: Editorial introduction */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.18em] text-[#086bd4]
                  sm:text-sm
                "
              >
                Roof Cleaning Overview
              </p>
            </div>

            {/* Section heading */}
            <h2
              id="roof-overview-heading"
              className="
                mt-5 max-w-xl text-pretty
                text-3xl font-bold leading-tight
                tracking-tight text-[#06152c]
                sm:text-4xl
                lg:text-[2.75rem]
              "
            >
              The right approach starts with{" "}
              <span className="text-[#086bd4]">understanding your roof.</span>
            </h2>

            {/* Introduction */}
            <div
              className="
                mt-6 max-w-xl space-y-5
                text-pretty text-base
                leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              <p>
                Roofs are exposed to the elements throughout the year, and moss,
                algae and lichen can gradually accumulate, particularly in
                shaded or damp conditions.
              </p>

              <p>
                Professional roof cleaning can help improve the appearance of
                suitable roofs, but the method matters. Different roofing
                materials, existing wear and levels of organic growth all need
                to be considered before deciding how best to proceed.
              </p>
            </div>

            {/* Signature accent */}
            <div
              aria-hidden="true"
              className="
                mt-9 h-[3px] w-16
                rounded-full bg-[#086bd4]
              "
            />
          </div>

          {/* Right: Three key considerations */}
          <ol className="grid min-w-0 gap-4 sm:gap-5 lg:self-center">
            {considerations.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.number}
                  className="
                    min-w-0 rounded-2xl
                    border border-[#dce6f2]
                    bg-white
                    p-5 sm:p-6
                  "
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div
                      aria-hidden="true"
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl bg-[#eaf3ff]
                        text-[#086bd4]
                        sm:h-12 sm:w-12
                      "
                    >
                      <Icon size={24} stroke={1.7} />
                    </div>

                    {/* Card content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span
                          aria-hidden="true"
                          className="
                            text-xs font-bold
                            tracking-[0.14em]
                            text-[#086bd4]
                          "
                        >
                          {item.number}
                        </span>

                        <h3
                          className="
                            text-lg font-bold leading-snug
                            tracking-tight text-[#06152c]
                            sm:text-xl
                          "
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-3 text-sm leading-7
                          text-slate-600
                          sm:text-base sm:leading-7
                        "
                      >
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
