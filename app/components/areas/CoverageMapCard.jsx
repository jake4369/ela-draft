import Image from "next/image";
import { IconBuilding, IconHome, IconShieldCheck } from "@tabler/icons-react";

/**
 * Static, responsive coverage illustration.
 *
 * Mobile: full available width.
 * Tablet: centred with a maximum width of 560px.
 * Desktop: fills its existing FAQ grid column.
 *
 * No client JavaScript, animations or map libraries.
 */
export default function CoverageMapCard() {
  return (
    <aside
      aria-label="Our regional coverage"
      className="
        mt-8 w-full min-w-0
        md:mx-auto md:max-w-[560px]
        lg:mx-0 lg:mt-10 lg:max-w-none
      "
    >
      <div
        className="
          isolate overflow-hidden rounded-2xl
          bg-[#06152c] text-white
          ring-1 ring-[#264263]
        "
      >
        {/* Card heading */}
        <div className="relative z-10 px-5 pt-6 sm:px-7 sm:pt-7">
          <p
            className="
              text-xs font-semibold uppercase
              tracking-[0.18em] text-[#65beff]
            "
          >
            Our Coverage
          </p>

          <h3
            className="
              mt-3 text-pretty text-xl
              font-bold leading-tight tracking-tight
              sm:text-2xl
            "
          >
            Based in Wolverhampton.
          </h3>

          <p
            className="
              mt-1 text-sm font-medium leading-6
              text-[#93c5fd]
              sm:text-base sm:leading-normal
            "
          >
            Covering the wider West Midlands.
          </p>
        </div>

        {/* Static illustration */}
        <div className="relative mt-2">
          <Image
            src="/assets/images/areas/ela-west-midlands-coverage-map.webp"
            alt="Stylised West Midlands map highlighting Wolverhampton and marking Walsall, Dudley, West Bromwich, Birmingham, Solihull and Coventry."
            width={504}
            height={375}
            sizes="
              (max-width: 639px) calc(100vw - 40px),
              (max-width: 767px) calc(100vw - 64px),
              (max-width: 1023px) 560px,
              (max-width: 1279px) 42vw,
              510px
            "
            loading="lazy"
            className="block h-auto w-full"
          />

          {/* Subtle integration with card background */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              inset-x-0 top-0 h-7
              bg-linear-to-b
              from-[#06152c] to-transparent
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              inset-x-0 bottom-0 h-9
              bg-linear-to-t
              from-[#06152c] to-transparent
            "
          />
        </div>

        {/* Responsive coverage legend */}
        <div
          className="
            relative z-10 mx-5
            grid grid-cols-2
            gap-x-3 gap-y-3
            border-t border-white/15
            py-4
            text-xs font-medium leading-5 text-slate-200
            sm:mx-6 sm:grid-cols-3 sm:gap-3 sm:py-5
            xl:mx-7
          "
        >
          <span className="flex min-w-0 items-start gap-1.5">
            <IconHome
              size={18}
              stroke={1.7}
              aria-hidden="true"
              className="shrink-0 text-[#65beff]"
            />
            Residential
          </span>

          <span className="flex min-w-0 items-start gap-1.5">
            <IconBuilding
              size={18}
              stroke={1.7}
              aria-hidden="true"
              className="shrink-0 text-[#65beff]"
            />
            Commercial
          </span>

          <span
            className="
              col-span-2 flex min-w-0
              items-start gap-1.5
              sm:col-span-1
            "
          >
            <IconShieldCheck
              size={18}
              stroke={1.7}
              aria-hidden="true"
              className="shrink-0 text-[#65beff]"
            />
            Specialist exterior care
          </span>
        </div>
      </div>

      {/* Important coverage clarification */}
      <p className="mt-3 text-xs leading-5 text-slate-600">
        Illustrative coverage graphic. Contact ELA to confirm availability for
        your location and project.
      </p>
    </aside>
  );
}
