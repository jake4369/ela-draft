"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { IconMenu2, IconX } from "@tabler/icons-react";

export default function MobileMenuShell({ children }) {
  const menuRef = useRef(null);
  const summaryRef = useRef(null);
  const pathname = usePathname();

  // Close the menu after navigation, including browser history changes.
  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }, [pathname]);

  // Close the menu whenever a link inside it is activated.
  // Event delegation also covers nested service links.
  function handleLinkClick(event) {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest("a[href]");

    if (link && menuRef.current) {
      menuRef.current.open = false;
    }
  }

  // Support Escape to dismiss the expanded navigation.
  function handleKeyDown(event) {
    if (event.key !== "Escape") {
      return;
    }

    if (!menuRef.current?.open) {
      return;
    }

    event.preventDefault();
    menuRef.current.open = false;
    summaryRef.current?.focus();
  }

  return (
    <details
      ref={menuRef}
      className="group xl:hidden"
      onClickCapture={handleLinkClick}
      onKeyDownCapture={handleKeyDown}
    >
      <summary
        ref={summaryRef}
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

      {children}
    </details>
  );
}
