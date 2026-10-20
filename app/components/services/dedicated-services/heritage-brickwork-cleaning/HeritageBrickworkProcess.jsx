const cleaningSteps = [
  {
    number: "01",
    title: "Assess the brickwork",
    description:
      "We consider the type and condition of the bricks, mortar joints, architectural features and existing surface contamination. Signs of weathering, deterioration or previous repairs are important when determining whether cleaning is appropriate and what precautions may be required.",
  },
  {
    number: "02",
    title: "Select a suitable method",
    description:
      "Different types of traditional masonry require different cleaning approaches. We consider the sensitivity of the materials and whether carefully controlled cleaning methods or specialist treatments may be suitable. Where relevant, conservation requirements and any necessary permissions must also be considered before work begins.",
  },
  {
    number: "03",
    title: "Clean with care",
    description:
      "Using methods suited to the assessed surface, we work to address appropriate dirt, staining and organic buildup while taking account of vulnerable mortar, decorative details and surrounding materials. Any remaining contamination or areas requiring further attention can then be discussed.",
  },
];

export default function HeritageBrickworkProcess() {
  return (
    <section
      aria-labelledby="heritage-process-heading"
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
            lg:items-center
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
              id="heritage-process-heading"
              className="
                mt-5 max-w-xl text-pretty
                text-3xl font-bold leading-tight
                tracking-tight text-[#06152c]
                sm:text-4xl
                lg:text-[2.75rem]
              "
            >
              A considered approach{" "}
              <span className="text-[#086bd4]">to traditional masonry.</span>
            </h2>

            {/* Introduction */}
            <p
              className="
                mt-6 max-w-xl text-pretty
                text-base leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              Cleaning traditional brickwork involves more than removing visible
              dirt and staining. Understanding the materials, assessing their
              condition and selecting an appropriate method are essential
              considerations when working with older masonry.
            </p>

            <p
              className="
                mt-5 max-w-xl text-pretty
                text-base leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              At ELA Pressure Washing, we take a considered approach to each
              project, recognising that historic materials, mortar joints and
              architectural details may require particular care before any
              cleaning work is undertaken.
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
