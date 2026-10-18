const stages = [
  {
    number: "01",
    title: "Understanding the Project",
    description:
      "Different materials, surface conditions, contamination and access requirements call for different considerations before cleaning begins.",
  },
  {
    number: "02",
    title: "Selecting the Right Method",
    description:
      "From controlled pressure and steam cleaning to soft washing and specialist treatments, the cleaning approach should suit the surface and the task.",
  },
  {
    number: "03",
    title: "Carrying Out the Work",
    description:
      "The chosen approach is applied with attention to the property, its surroundings and any appropriate finishing or aftercare requirements.",
  },
];

export default function OurApproach() {
  return (
    <section
      aria-labelledby="approach-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION INTRODUCTION */}
        <div className="max-w-4xl">
          <p
            className="
              mb-4 text-xs font-semibold
              uppercase tracking-[0.18em]
              text-[#086bd4] sm:text-sm
            "
          >
            Our Approach
          </p>

          <h2
            id="approach-heading"
            className="
              max-w-3xl text-pretty
              text-3xl font-bold leading-tight
              tracking-tight text-[#06152c]
              sm:text-4xl lg:text-5xl
            "
          >
            Good results start with{" "}
            <span className="text-[#086bd4]">the right decisions.</span>
          </h2>

          <div
            className="
              mt-5 max-w-2xl space-y-3
              text-pretty text-base leading-7
              text-slate-600
              sm:mt-6 sm:text-lg sm:leading-8
            "
          >
            <p>
              No two exterior cleaning projects are exactly alike. The material,
              its condition, the type of contamination and the surrounding
              environment all influence how the work should be approached.
            </p>

            <p>
              By considering these factors, ELA can select suitable cleaning
              techniques for the property and the work required.
            </p>
          </div>
        </div>

        {/* THREE-STAGE PROCESS */}
        <ol
          className="
            mt-12 grid
            lg:mt-16 lg:grid-cols-3 lg:gap-10
          "
        >
          {stages.map((stage, index) => (
            <li
              key={stage.number}
              className="
                relative grid min-w-0
                grid-cols-[3.5rem_minmax(0,1fr)]
                gap-4 pb-10
                last:pb-0
                sm:grid-cols-[4rem_minmax(0,1fr)]
                sm:gap-5
                lg:block lg:pb-0
              "
            >
              {/* MOBILE VERTICAL CONNECTOR */}
              {index < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-0 left-[27px]
                    top-14 w-px bg-[#bfd3e8]
                    sm:left-[31px] sm:top-16
                    lg:hidden
                  "
                />
              )}

              {/* NUMBERED STAGE MARKER */}
              <div className="relative z-10">
                <span
                  aria-hidden="true"
                  className="
                    flex size-14 items-center
                    justify-center rounded-full
                    border border-[#c9dbee]
                    bg-white text-xl font-bold
                    tabular-nums text-[#086bd4]
                    shadow-[0_3px_12px_rgba(6,21,44,0.04)]
                    sm:size-16 sm:text-2xl
                  "
                >
                  {stage.number}
                </span>

                {/* DESKTOP HORIZONTAL CONNECTOR */}
                {index < stages.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute left-16 right-[-2.5rem]
                      top-8 hidden h-px
                      bg-[#bfd3e8] lg:block
                    "
                  />
                )}
              </div>

              {/* STAGE CONTENT */}
              <div className="min-w-0 lg:mt-7">
                <h3
                  className="
                    text-pretty text-lg
                    font-bold leading-snug
                    tracking-tight text-[#06152c]
                    sm:text-xl
                  "
                >
                  {stage.title}
                </h3>

                <p
                  className="
                    mt-3 max-w-sm text-pretty
                    text-base leading-7
                    text-slate-600
                  "
                >
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
