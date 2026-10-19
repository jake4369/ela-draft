const cleaningSteps = [
  {
    number: "01",
    title: "Assess the patio",
    description:
      "We consider the paving material, its condition, the joints and the type of buildup present. We also take account of surrounding areas, including planting, walls and drainage, before choosing an appropriate approach.",
  },
  {
    number: "02",
    title: "Clean with care",
    description:
      "Using professional equipment and cleaning methods suited to the surface, we work to remove accumulated dirt, moss, algae and surface grime while taking care around paving joints and adjacent features.",
  },
  {
    number: "03",
    title: "Consider the finishing details",
    description:
      "After cleaning, we can discuss any areas requiring further attention, including pointing, suitable treatments or protective sealing where appropriate. Recommendations depend on the material and condition of the patio.",
  },
];

export default function PatioCleaningProcess() {
  return (
    <section
      aria-labelledby="patio-process-heading"
      className="
        border-b border-[#dce6f2]
        bg-white
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
                Our Cleaning Process
              </p>
            </div>

            {/* Section heading */}
            <h2
              id="patio-process-heading"
              className="
                mt-5 max-w-xl text-pretty
                text-3xl font-bold leading-tight
                tracking-tight text-[#06152c]
                sm:text-4xl
                lg:text-[2.75rem]
              "
            >
              Thoughtful cleaning,{" "}
              <span className="text-[#086bd4]">from start to finish.</span>
            </h2>

            {/* Introduction */}
            <p
              className="
                mt-6 max-w-xl text-pretty
                text-base leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              Professional patio cleaning is about more than improving the
              appearance of paving. Understanding the surface, selecting a
              suitable cleaning method and taking care around surrounding
              features all contribute to a well-planned result.
            </p>

            <p
              className="
                mt-5 max-w-xl text-pretty
                text-base leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              We tailor our approach to the material and condition of each
              patio, rather than using the same treatment for every surface.
            </p>

            {/* Signature accent */}
            <div
              aria-hidden="true"
              className="
                mt-9 h-[3px] w-16
                rounded-full bg-[#086bd4]
              "
            />
          </div>

          {/* Right: Numbered cleaning timeline */}
          <ol className="min-w-0">
            {cleaningSteps.map((step, index) => (
              <li
                key={step.number}
                className="
                  relative flex min-w-0
                  items-start gap-4 pb-9
                  last:pb-0
                  sm:gap-6 sm:pb-11
                "
              >
                {/* Timeline connector */}
                {index < cleaningSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute bottom-0 left-[23px]
                      top-12 w-px bg-[#dce6f2]
                    "
                  />
                )}

                {/* Step number */}
                <span
                  aria-hidden="true"
                  className="
                    relative z-10 flex h-12 w-12
                    shrink-0 items-center justify-center
                    rounded-xl border border-[#dce6f2]
                    bg-[#eaf3ff]
                    text-base font-bold
                    tracking-tight text-[#086bd4]
                  "
                >
                  {step.number}
                </span>

                {/* Step content */}
                <div className="min-w-0 flex-1 pt-1">
                  <h3
                    className="
                      text-lg font-bold leading-snug
                      tracking-tight text-[#06152c]
                      sm:text-xl
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3 text-pretty
                      text-sm leading-7 text-slate-600
                      sm:text-base sm:leading-8
                    "
                  >
                    {step.description}
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
