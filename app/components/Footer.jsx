import Image from "next/image";
import Link from "next/link";

import {
  IconArrowUpRight,
  IconChevronRight,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

// All links use internal Next.js routes.
// No Vercel or production domain is required.

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About ELA", href: "/about" },
  {
    label: "Why Choose ELA",
    href: "/#why-choose-heading",
  },
  { label: "All Services", href: "/services" },
  { label: "Our Work", href: "/gallery" },
  {
    label: "Customer Reviews",
    href: "/#testimonials-heading",
  },
  {
    label: "Areas We Cover",
    href: "/areas-we-cover",
  },
  { label: "FAQs", href: "/#faq-heading" },
  { label: "Contact", href: "/contact" },
];

// Set ready to true as each dedicated service page
// is completed and approved.

const serviceLinks = [
  {
    label: "Driveway Cleaning",
    href: "/services/driveway-cleaning",
    ready: true,
  },
  {
    label: "Patio Cleaning",
    href: "/services/patio-cleaning",
    ready: true,
  },
  {
    label: "Roof Cleaning",
    href: "/services/roof-cleaning",
    ready: false,
  },
  {
    label: "Commercial Pressure Washing",
    href: "/services/commercial-pressure-washing",
    ready: false,
  },
  {
    label: "Steam Cleaning",
    href: "/services/steam-cleaning",
    ready: false,
  },
  {
    label: "Heritage Brickwork Cleaning",
    href: "/services/heritage-brickwork-cleaning",
    ready: false,
  },
];

const availableServiceLinks = serviceLinks.filter((service) => service.ready);

function FooterNavigation({ heading, id, links }) {
  return (
    <nav aria-labelledby={id} className="min-w-0">
      <h2
        id={id}
        className="
          text-base font-bold tracking-tight
          text-[#06152c] sm:text-lg
        "
      >
        {heading}
      </h2>

      <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="
                group flex min-w-0 items-start
                justify-between gap-2 rounded-sm
                text-[13px] leading-6 text-slate-600
                transition-colors hover:text-[#086bd4]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#086bd4]
                sm:text-sm
              "
            >
              <span className="min-w-0">{label}</span>

              <IconChevronRight
                size={16}
                stroke={1.8}
                aria-hidden="true"
                className="
                  mt-1 hidden shrink-0
                  text-[#086bd4]
                  transition-transform
                  motion-safe:group-hover:translate-x-0.5
                  lg:block
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer
      className="
        border-t border-[#dce6f1]
        bg-[#f3f7fb] text-[#06152c]
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          className="
            grid grid-cols-2
            gap-x-6 gap-y-11 py-14
            sm:gap-x-10 sm:gap-y-12 sm:py-16
            lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)_minmax(0,1.2fr)_minmax(0,1fr)]
            lg:gap-x-10 lg:py-20
            xl:gap-x-14
          "
        >
          {/* BRAND */}
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Link
              href="/"
              aria-label="ELA Pressure Washing — home"
              className="
                inline-block max-w-full rounded-sm
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#086bd4]
              "
            >
              <Image
                src="/assets/images/ela-logo-horizontal.webp"
                alt="ELA Pressure Washing"
                width={602}
                height={203}
                sizes="(max-width: 639px) 260px, 280px"
                className="
                  h-auto w-[260px] max-w-full
                  object-contain sm:w-[280px]
                "
              />
            </Link>

            <p
              className="
                mt-5 max-w-xs text-pretty
                text-sm leading-7 text-slate-600
              "
            >
              Professional exterior cleaning and specialist surface care for
              homes and businesses across Wolverhampton and the West Midlands.
            </p>

            <div
              aria-hidden="true"
              className="mt-5 h-[2px] w-12 bg-[#086bd4]"
            />

            <p
              className="
                mt-4 text-[11px] font-bold
                uppercase tracking-[0.18em]
                text-[#086bd4]
              "
            >
              Residential &amp; Commercial
            </p>
          </div>

          {/* EXPLORE */}
          <FooterNavigation
            heading="Explore"
            id="footer-explore-heading"
            links={exploreLinks}
          />

          {/* OUR SERVICES */}
          <FooterNavigation
            heading="Our Services"
            id="footer-services-heading"
            links={availableServiceLinks}
          />

          {/* GET IN TOUCH */}
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <h2
              className="
                text-base font-bold tracking-tight
                text-[#06152c] sm:text-lg
              "
            >
              Get in Touch
            </h2>

            <p
              className="
                mt-5 max-w-sm text-sm
                leading-7 text-slate-600
                sm:mt-6
              "
            >
              Have a project in mind? We're happy to discuss your exterior
              cleaning requirements.
            </p>

            {/* PHONE NUMBER */}
            <a
              href="tel:+447852435168"
              className="
                group mt-6 inline-flex items-center
                gap-3 rounded-sm font-semibold
                text-[#06152c] transition-colors
                hover:text-[#086bd4]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#086bd4]
              "
            >
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-full bg-[#086bd4]
                  text-white
                "
              >
                <IconPhone size={19} stroke={1.8} aria-hidden="true" />
              </span>

              <span className="text-sm sm:text-base">07852 435168</span>
            </a>

            {/* SERVICE AREA */}
            <div className="mt-5 flex items-start gap-3">
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-full bg-[#086bd4]
                  text-white
                "
              >
                <IconMapPin size={19} stroke={1.8} aria-hidden="true" />
              </span>

              <p
                className="
                  pt-0.5 text-sm leading-6
                  text-slate-600
                "
              >
                Based in Wolverhampton
                <span className="block">Serving the West Midlands</span>
              </p>
            </div>

            {/* QUOTE CTA */}
            <Link
              href="/contact"
              className="
                group mt-7 inline-flex min-h-12
                max-w-full items-center
                justify-center gap-2
                rounded-lg bg-[#086bd4]
                px-4 py-3
                text-sm font-semibold text-white
                transition-colors duration-200
                hover:bg-[#075db5]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#086bd4]
              "
            >
              <span className="whitespace-nowrap">Request a Free Quote</span>

              <IconArrowUpRight
                size={18}
                stroke={1.8}
                aria-hidden="true"
                className="
                  shrink-0 transition-transform
                  motion-safe:group-hover:translate-x-0.5
                  motion-safe:group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div
          className="
            flex flex-col gap-2
            border-t border-[#cedae7]
            py-6
            sm:flex-row sm:items-center
            sm:justify-between sm:gap-6
          "
        >
          <p className="text-xs leading-6 text-slate-600">
            © {new Date().getFullYear()} ELA Pressure Washing. All rights
            reserved.
          </p>

          <p className="text-xs leading-6 text-slate-600">
            Website by{" "}
            <span className="font-semibold text-[#06152c]">DevXDesign</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
