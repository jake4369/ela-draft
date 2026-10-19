import Image from "next/image";
import Link from "next/link";

import {
  DesktopServicesDropdown,
  MobileServicesDropdown,
} from "./ServicesDropdown";

import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";

const LIVE_SITE = "https://ela-draft.vercel.app/";

// Temporary destinations until the new pages are built.
const navigation = [
  {
    label: "About ELA",
    href: "/#why-choose-heading",
  },
  {
    label: "Services",
    href: `${LIVE_SITE}/services`,
  },
  {
    label: "Our Work",
    href: `${LIVE_SITE}/gallery`,
  },
  {
    label: "Areas We Cover",
    href: "/#areas-heading",
  },
  {
    label: "Contact",
    href: `${LIVE_SITE}/contact`,
  },
];

const quoteHref = `${LIVE_SITE}/contact`;

function QuoteButton({ mobile = false }) {
  return (
    <Link
      href={quoteHref}
      className={`
        group inline-flex min-h-12
        items-center justify-center gap-2.5
        rounded-lg bg-[#086bd4]
        px-5 py-3
        text-sm font-semibold text-white
        transition-colors duration-200
        hover:bg-[#075db5]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#086bd4]
        ${mobile ? "w-full" : "whitespace-nowrap"}
      `}
    >
      <span>Request a Free Quote</span>

      <IconArrowUpRight
        size={18}
        stroke={1.8}
        className="shrink-0"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function Header() {
  return (
    <header
      className="
    sticky top-0 z-50
    border-b border-slate-200
    bg-white text-[#06152c]
    shadow-[0_2px_12px_rgba(6,21,44,0.04)]
  "
    >
      <div
        className="
          mx-auto flex min-h-[72px]
          max-w-7xl items-center
          justify-between gap-4
          px-5
          sm:min-h-[80px] sm:px-8
          lg:px-12
          xl:min-h-[86px]
        "
      >
        {/* BRAND LOGO */}
        <Link
          href="/"
          aria-label="ELA Pressure Washing homepage"
          className="
            inline-flex shrink-0 items-center
            rounded-sm
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#086bd4]
          "
        >
          <Image
            src="/assets/images/ela-logo-horizontal.webp"
            alt="ELA Pressure Washing"
            width={450}
            height={150}
            priority
            sizes="(min-width: 1280px) 230px, (min-width: 640px) 215px, 184px"
            className="
              h-auto w-[184px] object-contain
              sm:w-[215px] xl:w-[230px]
            "
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 xl:block"
        >
          <ul className="flex items-center gap-5 2xl:gap-7">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.label === "Services" ? (
                  <DesktopServicesDropdown />
                ) : (
                  <Link
                    href={item.href}
                    className="
            inline-flex min-h-11 items-center
            rounded-sm text-sm font-semibold
            whitespace-nowrap text-[#06152c]
            transition-colors
            hover:text-[#086bd4]
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#086bd4]
          "
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* HEADER ACTIONS */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Desktop and tablet CTA */}
          <div className="hidden sm:block">
            <QuoteButton />
          </div>

          {/* MOBILE AND TABLET NAVIGATION */}
          <details className="group xl:hidden">
            <summary
              className="
                flex h-11 w-11 cursor-pointer
                list-none items-center justify-center
                rounded-lg border border-slate-200
                text-[#06152c]
                transition-colors
                hover:border-[#086bd4]/40
                hover:bg-[#f3f7fb]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#086bd4]
                [&::-webkit-details-marker]:hidden
              "
            >
              <span className="sr-only">Navigation menu</span>

              <IconMenu2
                size={23}
                stroke={1.8}
                className="group-open:hidden"
                aria-hidden="true"
              />

              <IconX
                size={23}
                stroke={1.8}
                className="hidden group-open:block"
                aria-hidden="true"
              />
            </summary>

            {/* EXPANDED MOBILE MENU */}
            <div
              className="
    absolute inset-x-0 top-full
    max-h-[calc(100dvh-72px)]
    overflow-y-auto overscroll-contain
    border-b border-slate-200
    bg-white shadow-lg
    sm:max-h-[calc(100dvh-80px)]
  "
            >
              <nav
                aria-label="Mobile navigation"
                className="
                  mx-auto max-w-7xl
                  px-5 py-5
                  sm:px-8 lg:px-12
                "
              >
                <ul className="divide-y divide-slate-100">
                  {navigation.map((item) => (
                    <li key={item.label}>
                      {item.label === "Services" ? (
                        <MobileServicesDropdown />
                      ) : (
                        <Link
                          href={item.href}
                          className="
            flex min-h-12 items-center
            justify-between gap-3
            rounded-sm py-3
            text-base font-semibold
            text-[#06152c]
            transition-colors
            hover:text-[#086bd4]
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#086bd4]
          "
                        >
                          <span>{item.label}</span>

                          <IconArrowUpRight
                            size={17}
                            stroke={1.8}
                            className="shrink-0 text-[#086bd4]"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Quote action on smaller phones */}
                <div
                  className="
                    mt-5 border-t border-slate-200
                    pt-5 sm:hidden
                  "
                >
                  <QuoteButton mobile />
                </div>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
