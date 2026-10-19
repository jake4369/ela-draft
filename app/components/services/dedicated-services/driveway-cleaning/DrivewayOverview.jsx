const drivewaySurfaces = [
  {
    number: "01",
    title: "Block Paving",
    description:
      "Professional cleaning for suitable block-paved driveways, helping address accumulated dirt, moss, algae and surface grime.",
  },
  {
    number: "02",
    title: "Concrete Driveways",
    description:
      "A considered approach to removing everyday dirt and surface buildup from suitable concrete driveways.",
  },
  {
    number: "03",
    title: "Natural Stone",
    description:
      "Individual assessment of the stone type and its condition before choosing an appropriate cleaning method.",
  },
];

export default function DrivewayOverview() {
  return (
    <section
      aria-labelledby="driveway-overview-heading"
      className="border-b border-[#dce6f2] bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16 xl:gap-20">
          {/* Left column: Editorial introduction */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#086bd4] sm:text-sm">
                Driveway Cleaning Explained
              </p>
            </div>

            <h2
              id="driveway-overview-heading"
              className="mt-5 max-w-xl text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              The right care for{" "}
              <span className="text-[#086bd4]">every driveway surface.</span>
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                Driveways are exposed to everyday traffic, changing weather and
                organic growth. Over time, accumulated dirt, moss and algae can
                leave even well-maintained surfaces looking tired.
              </p>

              <p>
                Different paving materials have different cleaning requirements.
                What works well for hard-wearing block paving may not be
                suitable for more sensitive stone or surfaces showing signs of
                deterioration.
              </p>

              <p>
                At ELA Pressure Washing, we consider the material, its condition
                and the type of buildup before selecting an appropriate cleaning
                method. Our aim is to achieve a thorough clean while taking
                proper care of the surface being treated.
              </p>
            </div>

            {/* Signature blue detail */}
            <div
              aria-hidden="true"
              className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4]"
            />
          </div>

          {/* Right column: Surface information panel */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-[#d7e5f2] bg-white">
              {/* Panel introduction */}
              <div className="border-b border-[#e2ebf4] px-6 pb-6 pt-7 sm:px-8 sm:pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#086bd4]">
                  Common Driveway Surfaces
                </p>

                <h3 className="mt-3 text-pretty text-xl font-bold leading-snug tracking-tight text-[#06152c] sm:text-2xl">
                  Different surfaces. Different approaches.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  Our cleaning approach is selected to suit the characteristics
                  and condition of each surface.
                </p>
              </div>

              {/* Surface types */}
              <ul className="px-6 sm:px-8">
                {drivewaySurfaces.map((surface) => (
                  <li
                    key={surface.number}
                    className="border-b border-[#e2ebf4] py-6 last:border-b-0 sm:py-7"
                  >
                    <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-3 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-4">
                      <span
                        aria-hidden="true"
                        className="pt-1 text-xs font-bold tabular-nums tracking-[0.08em] text-[#086bd4]"
                      >
                        {surface.number}
                      </span>

                      <div className="min-w-0">
                        <h4 className="text-lg font-bold leading-snug tracking-tight text-[#06152c]">
                          {surface.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-[0.975rem]">
                          {surface.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Restrained panel footer */}
              <div className="border-t border-[#e2ebf4] bg-[#f8fbff] px-6 py-5 sm:px-8">
                <p className="text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-[#06152c]">
                    Not sure about your driveway material?
                  </span>{" "}
                  We can discuss its condition and the most suitable approach
                  for your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
