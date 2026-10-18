export default function ContactIntro() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          {/* Section label */}
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
            Contact ELA
          </p>

          {/* Main page heading */}
          <h1
            id="contact-heading"
            className="text-pretty text-4xl font-bold leading-[1.12] tracking-tight text-[#06152c] sm:text-5xl lg:text-[3.65rem]"
          >
            Let&apos;s talk about{" "}
            <span className="text-[#086bd4]">your project.</span>
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
            Whether you&apos;re planning residential exterior cleaning or need
            specialist care for commercial premises, we&apos;re happy to discuss
            your requirements. Tell us a little about the work you have in mind.
          </p>
        </div>
      </div>
    </section>
  );
}
