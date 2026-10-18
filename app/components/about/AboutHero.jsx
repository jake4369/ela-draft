import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="overflow-hidden bg-[#f3f7fb]"
    >
      <div
        className="
          mx-auto grid max-w-7xl
          items-center gap-10
          px-5 py-16
          sm:px-8 sm:py-20
          lg:grid-cols-[minmax(0,1.07fr)_minmax(0,0.93fr)]
          lg:gap-14 lg:px-12 lg:py-24
        "
      >
        {/* INTRODUCTION */}
        <div className="max-w-2xl">
          <p
            className="
              mb-5 text-xs font-semibold
              uppercase tracking-[0.18em]
              text-[#086bd4]
              sm:text-sm
            "
          >
            About ELA Pressure Washing
          </p>

          <h1
            id="about-heading"
            className="
              text-pretty text-3xl
              font-bold leading-tight
              tracking-tight text-[#06152c]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Experience, expertise and a commitment to{" "}
            <span className="text-[#086bd4]">doing things properly.</span>
          </h1>

          <div
            className="
              mt-6 max-w-xl space-y-4
              text-pretty text-base
              leading-8 text-slate-600
              sm:mt-7 sm:text-lg
            "
          >
            <p>
              Based in Wolverhampton, ELA Pressure Washing provides professional
              exterior cleaning and specialist surface care for residential and
              commercial properties across the West Midlands.
            </p>

            <p>
              Combining practical experience with specialist equipment and
              surface-appropriate cleaning methods, we approach each project
              with care for the property and the work involved.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#086bd4]" aria-hidden="true" />

            <p
              className="
                text-xs font-semibold
                uppercase tracking-[0.12em]
                text-[#086bd4]
              "
            >
              Wolverhampton · West Midlands
            </p>
          </div>
        </div>

        {/* AUTHENTIC WORK PHOTOGRAPH */}
        <div
          className="
            relative aspect-[4/3]
            overflow-hidden rounded-2xl
            bg-slate-200
            shadow-[0_18px_45px_rgba(6,21,44,0.08)]
            lg:aspect-[5/4]
          "
        >
          <Image
            src="/assets/images/about/ela-commercial-paving-pressure-washing.webp"
            alt="Operative pressure washing a block-paved walkway outside commercial premises"
            fill
            priority
            fetchPriority="high"
            sizes="
              (min-width: 1280px) 520px,
              (min-width: 1024px) 42vw,
              (min-width: 640px) calc(100vw - 64px),
              calc(100vw - 40px)
            "
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
