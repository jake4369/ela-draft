const patioSurfaces = [
  {
    number: "01",
    title: "Concrete Paving Slabs",
    description:
      "Professional cleaning for suitable concrete patios affected by dirt, moss and algae.",
  },
  {
    number: "02",
    title: "Natural Stone",
    description:
      "Careful consideration of sandstone, limestone and other natural stone surfaces.",
  },
  {
    number: "03",
    title: "Block Paving",
    description:
      "Cleaning that takes account of the paving, jointing material and surrounding areas.",
  },
];

export default function PatioOverview() {
  return (
    <section
      aria-labelledby="patio-overview-heading"
      className="border-b border-[#dce6f2] bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          {/* Editorial introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Patio Cleaning Explained
              </p>
            </div>

            <h2
              id="patio-overview-heading"
              className="mt-6 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              The right approach for{" "}
              <span className="text-[#086bd4]">every patio surface.</span>
            </h2>

            <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                Patios are exposed to changing weather, organic growth and
                everyday use. Over time, accumulated dirt, moss and algae can
                leave paving looking tired and neglected.
              </p>

              <p>
                Different materials need different cleaning methods. What works
                for hard-wearing concrete slabs may not be suitable for natural
                stone or more delicate surfaces.
              </p>

              <p>
                At ELA Pressure Washing, we consider the paving material, its
                condition, the joints and surrounding areas before selecting an
                appropriate cleaning approach.
              </p>
            </div>

            {/* Signature section rule */}
            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Common patio surfaces */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-[#dce6f2] bg-white">
            {/* Card introduction */}
            <div className="border-b border-[#dce6f2] px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#086bd4]">
                Common Patio Materials
              </p>

              <h3 className="mt-4 text-pretty text-xl font-bold leading-snug tracking-tight text-[#06152c] sm:text-2xl">
                Different surfaces. Different approaches.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Cleaning methods are selected with the characteristics and
                condition of each surface in mind.
              </p>
            </div>

            {/* Surface list */}
            <ol className="divide-y divide-[#dce6f2] px-6 sm:px-8">
              {patioSurfaces.map((surface) => (
                <li
                  key={surface.number}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 py-6 sm:grid-cols-[2.25rem_minmax(0,1fr)] sm:gap-4 sm:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 text-xs font-bold tracking-[0.08em] text-[#086bd4]"
                  >
                    {surface.number}
                  </span>

                  <div className="min-w-0">
                    <h4 className="text-base font-bold leading-snug tracking-tight text-[#06152c] sm:text-lg">
                      {surface.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {surface.description}
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
