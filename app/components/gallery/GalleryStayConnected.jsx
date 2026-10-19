import { IconArrowUpRight, IconBrandFacebook } from "@tabler/icons-react";

export default function GalleryStayConnected() {
  return (
    <section
      aria-labelledby="gallery-social-heading"
      className="border-t border-[#dce6f2] bg-[#f3f7fb] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-[#dce6f2] bg-white px-6 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            {/* Editorial content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 shrink-0 bg-[#086bd4]"
                />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                  Stay Connected
                </p>
              </div>

              <h2
                id="gallery-social-heading"
                className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.5rem]"
              >
                See more of{" "}
                <span className="text-[#086bd4]">our latest work.</span>
              </h2>

              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Our gallery is just a selection of the work we do. Visit ELA
                Pressure Washing on Facebook to see more project photographs,
                recent results and examples of our exterior cleaning work.
              </p>
            </div>

            {/* Facebook link */}
            <div className="shrink-0">
              <a
                href="https://www.facebook.com/profile.php?id=61555129179931"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex min-h-12
                  w-full items-center justify-center
                  gap-3 rounded-xl
                  border border-[#cbdff5]
                  bg-[#eef6ff] px-5 py-3
                  text-sm font-bold text-[#0756ac]
                  transition-colors duration-200
                  hover:border-[#086bd4]
                  hover:bg-[#e0efff]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#086bd4]
                  sm:w-auto
                "
              >
                <IconBrandFacebook
                  size={21}
                  stroke={1.8}
                  aria-hidden="true"
                  className="shrink-0"
                />

                <span>Follow ELA on Facebook</span>

                <IconArrowUpRight
                  size={19}
                  stroke={1.8}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

                <span className="sr-only">Opens in a new tab</span>
              </a>
            </div>
          </div>

          {/* Signature accent */}
          <div
            aria-hidden="true"
            className="mt-9 h-[3px] w-16 rounded-full bg-[#086bd4] sm:mt-10"
          />
        </div>
      </div>
    </section>
  );
}
