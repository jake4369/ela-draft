const cleaningSteps = [
  {
    number: "01",
    title: "Assess the Roof",
    description:
      "We consider the roofing material, tile condition, extent of moss and organic growth, and access requirements before determining which cleaning methods may be suitable. Existing wear or damage can influence whether cleaning is advisable and how the work should be approached.",
  },
  {
    number: "02",
    title: "Remove Moss with Care",
    description:
      "Where appropriate, careful roof scraping can help remove accumulated moss and loose organic debris without relying on high-pressure washing. The tools and techniques used should be suited to the roofing material and its condition, with attention given to surrounding surfaces and drainage.",
  },
  {
    number: "03",
    title: "Consider Treatments & Aftercare",
    description:
      "Following moss removal, a suitable biocide treatment may be recommended to help manage remaining organic growth. Any further treatment depends on the roofing material and site conditions. Moss can return over time, so we can also discuss appropriate aftercare and ongoing maintenance.",
  },
];

export default function RoofCleaningProcess() {
  return (
    <section
      id="roof-approach"
      aria-labelledby="roof-process-heading"
      className="
        scroll-mt-24
        border-b border-[#dce6f2]
        bg-white
        py-16 sm:scroll-mt-28 sm:py-20
        lg:py-24 xl:scroll-mt-32
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
                Our Approach
              </p>
            </div>

            {/* Section heading */}
            <h2
              id="roof-process-heading"
              className="
                mt-5 max-w-xl text-pretty
                text-3xl font-bold leading-tight
                tracking-tight text-[#06152c]
                sm:text-4xl
                lg:text-[2.75rem]
              "
            >
              Careful roof cleaning,{" "}
              <span className="text-[#086bd4]">
                from assessment to aftercare.
              </span>
            </h2>

            {/* Supporting introduction */}
            <p
              className="
                mt-6 max-w-xl text-pretty
                text-base leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              Every roof presents different considerations. From the condition
              of its tiles to the extent of moss growth, choosing an appropriate
              cleaning method is an important part of caring for the property.
            </p>

            <p
              className="
                mt-5 max-w-xl text-pretty
                text-base leading-8 text-slate-600
                sm:text-lg sm:leading-8
              "
            >
              Our approach focuses on understanding the roof, carrying out
              suitable cleaning work and considering whether further treatment
              may be beneficial.
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
