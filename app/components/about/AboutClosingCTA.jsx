import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function AboutClosingCTA() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="
        relative isolate overflow-hidden
        bg-[#06152c] py-16 text-white
        sm:py-20 lg:py-20
      "
    >
      {/* SUBTLE DECORATIVE ACCENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 -top-48 hidden
          size-[420px] rounded-full
          border border-[#3975ad]/20
          lg:block
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid items-center gap-9
            lg:grid-cols-[minmax(0,1fr)_auto]
            lg:gap-12
          "
        >
          {/* EDITORIAL CONTENT */}
          <div className="max-w-3xl">
            <p
              className="
                mb-4 text-xs font-semibold
                uppercase tracking-[0.18em]
                text-[#94caff]
                sm:text-sm
              "
            >
              Let's Talk About Your Project
            </p>

            <h2
              id="about-cta-heading"
              className="
                max-w-2xl text-pretty
                text-3xl font-bold leading-tight
                tracking-tight text-white
                sm:text-4xl
                lg:text-[2.65rem]
              "
            >
              Professional exterior care starts with{" "}
              <span className="text-[#78baff]">a conversation.</span>
            </h2>

            <p
              className="
                mt-5 max-w-2xl text-pretty
                text-base leading-7 text-slate-300
                sm:mt-6 sm:text-lg sm:leading-8
              "
            >
              Whether you're planning a residential cleaning project or need
              specialist exterior care for commercial premises, get in touch to
              discuss your requirements.
            </p>
          </div>

          {/* PRIMARY CALL TO ACTION */}
          <div className="flex items-start lg:justify-end">
            <Link
              href="https://ela-draft.vercel.app/"
              className="
                group inline-flex min-h-12
                w-full items-center justify-center
                gap-3 rounded-lg
                bg-[#086bd4] px-7 py-3.5
                text-center text-sm font-semibold
                text-white
                transition-colors duration-200
                hover:bg-[#0059b8]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
                sm:w-auto sm:text-base
              "
            >
              Request a Free Quote
              <IconArrowUpRight
                size={19}
                stroke={1.8}
                className="
                  shrink-0
                  transition-transform
                  duration-200
                  motion-safe:group-hover:translate-x-0.5
                  motion-safe:group-hover:-translate-y-0.5
                "
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
