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
      className="border-b border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          {/* Section introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Our Cleaning Process
              </p>
            </div>

            <h2
              id="patio-process-heading"
              className="mt-5 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Thoughtful cleaning,{" "}
              <span className="text-[#086bd4]">from start to finish.</span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              Professional patio cleaning is about more than improving the
              appearance of paving. Understanding the surface, selecting a
              suitable cleaning method and taking care around surrounding
              features all contribute to a well-planned result.
            </p>

            <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              We tailor our approach to the material and condition of each
              patio, rather than using the same treatment for every surface.
            </p>

            {/* Signature section rule */}
            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Cleaning process steps */}
          <div className="min-w-0">
            <ol className="border-t border-[#dce6f2]">
              {cleaningSteps.map((step) => (
                <li
                  key={step.number}
                  className="border-b border-[#dce6f2] py-8 sm:py-9"
                >
                  <div className="grid grid-cols-[32px_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-6">
                    {/* Step number */}
                    <span
                      aria-hidden="true"
                      className="pt-0.5 text-xl font-bold tracking-tight text-[#086bd4] sm:text-2xl"
                    >
                      {step.number}
                    </span>

                    {/* Step content */}
                    <div className="min-w-0">
                      <h3 className="text-pretty text-xl font-bold leading-snug tracking-tight text-[#06152c] sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
