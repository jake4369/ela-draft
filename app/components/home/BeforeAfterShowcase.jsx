import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfterShowcase() {
  return (
    <section
      aria-labelledby="before-after-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              mb-4 text-xs font-semibold uppercase
              tracking-[0.18em] text-[#086bd4]
              sm:text-sm
            "
          >
            Before & After
          </p>

          <h2
            id="before-after-heading"
            className="
              text-pretty text-3xl font-bold
              leading-tight tracking-tight text-[#06152c]
              sm:text-4xl lg:text-5xl
            "
          >
            See the results for yourself.
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-pretty text-base leading-7
              text-slate-600
              sm:text-lg sm:leading-8
            "
          >
            Explore the transformation with an interactive before-and-after
            comparison of ELA's exterior cleaning work.
          </p>
        </div>

        {/* Image comparison */}

        <div className="mx-auto mt-10 max-w-5xl sm:mt-12 lg:max-w-[820px]">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
}
