"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconArrowUpRight, IconChevronDown } from "@tabler/icons-react";

// Change ready to true when each service page is completed.
const services = [
  {
    title: "Driveway Cleaning",
    description: "Driveways and block paving",
    href: "/services/driveway-cleaning",
    ready: true,
  },
  {
    title: "Patio Cleaning",
    description: "Patios and outdoor spaces",
    href: "/services/patio-cleaning",
    ready: true,
  },
  {
    title: "Roof Cleaning",
    description: "Roof moss removal and surface care",
    href: "/services/roof-cleaning",
    ready: false,
  },
  {
    title: "Commercial Pressure Washing",
    description: "Business exterior cleaning",
    href: "/services/commercial-pressure-washing",
    ready: false,
  },
  {
    title: "Steam Cleaning",
    description: "Specialist heat-assisted cleaning",
    href: "/services/steam-cleaning",
    ready: false,
  },
  {
    title: "Heritage Brickwork Cleaning",
    description: "Care for traditional masonry",
    href: "/services/heritage-brickwork-cleaning",
    ready: false,
  },
];

const availableServices = services.filter((service) => service.ready);

const allServicesHref = "/services";

// DESKTOP DROPDOWN

export function DesktopServicesDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = useId();
  const pathname = usePathname();

  // Close the menu after route changes, including browser history.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle outside interactions and Escape.
  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleFocus(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("focusin", handleFocus);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeDropdown() {
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="
          inline-flex min-h-11 items-center gap-1.5
          rounded-sm text-sm font-semibold
          whitespace-nowrap text-[#06152c]
          transition-colors
          hover:text-[#086bd4]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#086bd4]
        "
      >
        Services
        <IconChevronDown
          size={15}
          stroke={2}
          className={`
            shrink-0 transition-transform duration-200
            motion-reduce:transition-none
            ${open ? "rotate-180" : ""}
          `}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="
          absolute left-1/2 top-full z-50
          mt-4 w-[620px]
          max-w-[calc(100vw-2.5rem)]
          -translate-x-1/2
          rounded-2xl border border-slate-200
          bg-white p-5
          shadow-[0_20px_50px_rgba(6,21,44,0.16)]
        "
      >
        {/* Menu heading */}
        <div
          className="
            mb-4 flex items-center
            justify-between gap-4
            border-b border-slate-200
            px-2 pb-4
          "
        >
          <div>
            <p
              className="
                text-xs font-semibold
                uppercase tracking-[0.16em]
                text-[#086bd4]
              "
            >
              Our Services
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Exterior cleaning for every property.
            </p>
          </div>

          <Link
            href={allServicesHref}
            onClick={closeDropdown}
            className="
              inline-flex shrink-0 items-center
              gap-1.5 rounded-sm
              text-sm font-semibold text-[#086bd4]
              hover:text-[#054d99]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#086bd4]
            "
          >
            All Services
            <IconArrowUpRight size={16} stroke={1.8} aria-hidden="true" />
          </Link>
        </div>

        {/* Available service links */}
        <ul className="grid grid-cols-2 gap-2">
          {availableServices.map((service) => (
            <li key={service.href} className="min-w-0">
              <Link
                href={service.href}
                onClick={closeDropdown}
                className="
                  group/item flex h-full
                  min-h-[82px] flex-col
                  justify-center rounded-xl
                  px-4 py-3
                  transition-colors
                  hover:bg-[#f3f7fb]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#086bd4]
                "
              >
                <span
                  className="
                    flex items-start justify-between
                    gap-2 text-sm font-semibold
                    leading-5 text-[#06152c]
                    group-hover/item:text-[#086bd4]
                  "
                >
                  <span>{service.title}</span>

                  <IconArrowUpRight
                    size={16}
                    stroke={1.8}
                    className="
                      shrink-0 text-[#086bd4]
                    "
                    aria-hidden="true"
                  />
                </span>

                <span
                  className="
                    mt-1.5 text-xs leading-5
                    text-slate-500
                  "
                >
                  {service.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// MOBILE / TABLET SUBMENU

export function MobileServicesDropdown() {
  return (
    <details className="group/services">
      <summary
        className="
          flex min-h-12 cursor-pointer
          list-none items-center justify-between
          gap-3 rounded-sm py-3
          text-base font-semibold text-[#06152c]
          hover:text-[#086bd4]
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-[#086bd4]
          [&::-webkit-details-marker]:hidden
        "
      >
        <span>Services</span>

        <IconChevronDown
          size={19}
          stroke={1.8}
          className="
            shrink-0 text-[#086bd4]
            transition-transform duration-200
            group-open/services:rotate-180
            motion-reduce:transition-none
          "
          aria-hidden="true"
        />
      </summary>

      <div
        className="
          mb-3 rounded-xl bg-[#f3f7fb]
          px-4 py-2
        "
      >
        <Link
          href={allServicesHref}
          className="
            flex min-h-11 items-center
            justify-between gap-2 py-2
            text-sm font-semibold text-[#086bd4]
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#086bd4]
          "
        >
          All Services
          <IconArrowUpRight size={17} stroke={1.8} aria-hidden="true" />
        </Link>

        <ul className="border-t border-slate-200">
          {availableServices.map((service) => (
            <li
              key={service.href}
              className="
                border-b border-slate-200/70
                last:border-b-0
              "
            >
              <Link
                href={service.href}
                className="
                  flex min-h-11 items-center
                  justify-between gap-3
                  rounded-sm py-2.5
                  text-sm font-medium
                  leading-6 text-[#06152c]
                  hover:text-[#086bd4]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#086bd4]
                "
              >
                <span>{service.title}</span>

                <IconArrowUpRight
                  size={16}
                  stroke={1.8}
                  className="
                    shrink-0 text-[#086bd4]
                  "
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
