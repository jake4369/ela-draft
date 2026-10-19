import Image from "next/image";
import Link from "next/link";

import {
  DesktopServicesDropdown,
  MobileServicesDropdown,
} from "./ServicesDropdown";

import MobileMenuShell from "./MobileMenuShell";

import { IconArrowUpRight } from "@tabler/icons-react";

const navigation = [
  {
    label: "About ELA",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Our Work",
    href: "/gallery",
  },
  {
    label: "Areas We Cover",
    href: "/areas-we-cover",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const quoteHref = "/contact";

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
        {/* Brand logo */}
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

        {/* Desktop navigation */}
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

        {/* Header actions */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Desktop and tablet quote button */}
          <div className="hidden sm:block">
            <QuoteButton />
          </div>

          {/* Mobile and tablet navigation */}
          <MobileMenuShell>
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
                <div className="mt-5 border-t border-slate-200 pt-5 sm:hidden">
                  <QuoteButton mobile />
                </div>
              </nav>
            </div>
          </MobileMenuShell>
        </div>
      </div>
    </header>
  );
}
