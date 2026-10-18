const approachSteps = [
  {
    number: "01",
    title: "Assess the surface",
    description:
      "Consider the material, its condition and the type of contamination before recommending a suitable approach.",
  },
  {
    number: "02",
    title: "Choose the appropriate method",
    description:
      "Select from pressure washing, steam cleaning, soft washing and specialist treatments according to the work required.",
  },
  {
    number: "03",
    title: "Work with care",
    description:
      "Apply the selected cleaning method with consideration for the surface and its condition.",
  },
];

export default function ServicesApproach() {
  return (
    <section
      aria-labelledby="services-approach-heading"
      className="border-t border-[#dce6f2] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-stretch gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          {/* Left — Signature navy statement */}
          <div className="relative isolate flex min-w-0 flex-col justify-center overflow-hidden rounded-2xl bg-[#06152c] px-7 py-11 sm:px-10 sm:py-14 lg:px-11 lg:py-16">
            {/* Subtle decorative geometry */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full border border-[#33577f]/60"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-[#33577f]/35"
            />

            <div className="relative z-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-[#93c5fd]" />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#93c5fd] sm:text-sm">
                  The ELA Approach
                </p>
              </div>

              {/* Main section heading */}
              <h2
                id="services-approach-heading"
                className="mt-7 max-w-xl text-pretty text-[2rem] font-bold leading-[1.13] tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.65rem] xl:text-[3rem]"
              >
                The right method makes the{" "}
                <span className="text-[#93c5fd]">difference.</span>
              </h2>

              {/* Supporting explanation */}
              <p className="mt-6 max-w-lg text-pretty text-base leading-8 text-slate-300 sm:text-lg sm:leading-8">
                From hard-wearing paving to delicate masonry, every surface has
                its own cleaning requirements. We take those differences into
                account when deciding how to approach the work.
              </p>

              {/* Restrained signature detail */}
              <div
                aria-hidden="true"
                className="mt-10 h-1 w-16 rounded-full bg-[#086bd4]"
              />
            </div>
          </div>

          {/* Right — Three editorial principles */}
          <div className="flex min-w-0 flex-col justify-center">
            <ol className="divide-y divide-[#dce6f2] border-y border-[#dce6f2]">
              {approachSteps.map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-4 py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-9 lg:py-10"
                >
                  {/* Editorial number */}
                  <span
                    aria-hidden="true"
                    className="pt-0.5 text-2xl font-bold leading-none tracking-tight tabular-nums text-[#086bd4] sm:text-3xl"
                  >
                    {step.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-pretty text-xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-[1.45rem]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-pretty text-[0.975rem] leading-7 text-slate-600 sm:text-base sm:leading-8">
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
