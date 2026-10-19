const processSteps = [
  {
    number: "01",
    title: "Assess the driveway",
    description:
      "We consider the paving material, its condition and the type of buildup present. This helps us identify a suitable cleaning approach for the surface and the work required.",
  },
  {
    number: "02",
    title: "Clean with care",
    description:
      "Using professional equipment and appropriate cleaning methods, we work to remove accumulated dirt, moss, algae and surface grime while taking account of the driveway material, joints and surrounding areas.",
  },
  {
    number: "03",
    title: "Consider the finishing details",
    description:
      "Where appropriate, we can discuss additional treatments or protective sealing to help maintain the appearance of the cleaned surface. Any recommended finishing work depends on the driveway and its condition.",
  },
];

export default function DrivewayCleaningProcess() {
  return (
    <section
      aria-labelledby="driveway-process-heading"
      className="border-b border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          {/* Section introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#086bd4] sm:text-sm">
                Our Cleaning Process
              </p>
            </div>

            <h2
              id="driveway-process-heading"
              className="mt-5 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              A considered approach{" "}
              <span className="text-[#086bd4]">from start to finish.</span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              Professional driveway cleaning is about more than removing visible
              dirt. Understanding the surface, selecting the right method and
              considering the finishing details all contribute to a carefully
              planned cleaning service.
            </p>

            <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              Our approach is tailored to the requirements of each driveway
              rather than applying the same treatment to every surface.
            </p>

            {/* Signature blue rule */}
            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Process stages */}
          <div className="min-w-0">
            <ol className="border-t border-[#dce6f2]">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-4 border-b border-[#dce6f2] py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5 sm:py-8"
                >
                  <span
                    aria-hidden="true"
                    className="pt-0.5 text-xl font-bold leading-snug tracking-tight text-[#086bd4] sm:text-2xl"
                  >
                    {step.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-pretty text-xl font-bold leading-snug tracking-tight text-[#06152c] sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-pretty text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {step.description}
                    </p>
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
