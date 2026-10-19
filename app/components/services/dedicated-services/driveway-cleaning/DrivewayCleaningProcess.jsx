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
              id="driveway-process-heading"
              className="
                mt-5 max-w-xl text-pretty
                text-3xl font-bold leading-tight
                tracking-tight text-[#06152c]
                sm:text-4xl
                lg:text-[2.75rem]
              "
            >
              A considered approach{" "}
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
              Professional driveway cleaning is about more than removing visible
              dirt. Understanding the surface, selecting the right method and
              considering the finishing details all contribute to a carefully
              planned cleaning service.
            </p>

            <p
              className="
                mt-5 max-w-xl text-pretty
                text-base leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              Our approach is tailored to the requirements of each driveway
              rather than applying the same treatment to every surface.
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
            {processSteps.map((step, index) => (
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
                {index < processSteps.length - 1 && (
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
