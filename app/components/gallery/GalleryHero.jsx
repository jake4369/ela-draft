import Image from "next/image";

export default function GalleryHero() {
  return (
    <section
      aria-labelledby="gallery-hero-heading"
      className="relative overflow-hidden border-b border-[#dce6f2] bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
        {/* Editorial introduction */}
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 shrink-0 bg-[#086bd4]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
              Our Work
            </p>
          </div>

          {/* Main heading */}
          <h1
            id="gallery-hero-heading"
            className="
              mt-6 max-w-4xl text-pretty
              text-[clamp(2.5rem,5vw,4.75rem)]
              font-bold leading-[1.09]
              tracking-[-0.045em] text-[#06152c]
            "
          >
            Real projects.{" "}
            <span className="text-[#086bd4]">Results you can see.</span>
          </h1>

          {/* Supporting description */}
          <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
            Take a closer look at genuine exterior cleaning projects completed
            by ELA Pressure Washing. Explore our work across residential
            properties, commercial premises and specialist surfaces throughout
            Wolverhampton and the West Midlands.
          </p>
        </div>

        {/* Featured project photograph */}
        <figure className="mt-11 sm:mt-14 lg:mt-16">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-[#dce6f2] sm:aspect-16/10 sm:rounded-2xl lg:aspect-[16/9]">
            <Image
              src="/assets/images/gallery/9.webp"
              alt="ELA Pressure Washing operative cleaning paving within a covered commercial walkway"
              fill
              quality={85}
              sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1280px) calc(100vw - 96px), 1184px"
              className="object-cover object-center"
            />

            {/* Subtle image-edge treatment */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
            />
          </div>

          {/* Editorial project caption */}
          <figcaption className="flex flex-col gap-4 border-b border-[#dce6f2] py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="flex min-w-0 items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-1 h-8 w-0.5 shrink-0 bg-[#086bd4]"
              />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#086bd4]">
                  Featured Project
                </p>

                <p className="mt-2 text-base font-semibold leading-6 text-[#06152c] sm:text-lg">
                  Commercial Exterior Cleaning
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-right">
              A look at ELA carrying out professional exterior cleaning work at
              a commercial property.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
