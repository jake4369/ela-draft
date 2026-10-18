import Image from "next/image";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconChevronRight,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

// These service pages are live on the existing website.
// Switch the URLs to local paths when you migrate those pages.
const LIVE_SITE = "https://www.elapressurewashing.co.uk";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Why Choose ELA", href: "/#why-choose-heading" },
  { label: "All Services", href: `${LIVE_SITE}/services` },
  { label: "Our Work", href: `${LIVE_SITE}/gallery` },
  { label: "Customer Reviews", href: "/#testimonials-heading" },
  { label: "Areas We Cover", href: "/#areas-heading" },
  { label: "FAQs", href: "/#faq-heading" },
];

const serviceLinks = [
  {
    label: "Driveway Cleaning",
    href: `${LIVE_SITE}/services/driveway-cleaning`,
  },
  { label: "Patio Cleaning", href: `${LIVE_SITE}/services/patio-cleaning` },
  { label: "Roof Cleaning", href: `${LIVE_SITE}/services/roof-cleaning` },
  {
    label: "Commercial Pressure Washing",
    href: `${LIVE_SITE}/services/commercial-pressure-washing`,
  },
  { label: "Steam Cleaning", href: `${LIVE_SITE}/services/steam-cleaning` },
  {
    label: "Heritage Brickwork Cleaning",
    href: `${LIVE_SITE}/services/heritage-brickwork-cleaning`,
  },
];

function FooterNavigation({ heading, id, links }) {
  return (
    <nav aria-labelledby={id} className="min-w-0">
      <h2
        id={id}
        className="text-base font-bold tracking-tight text-[#06152c] sm:text-lg"
      >
        {heading}
      </h2>
      <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="group flex min-w-0 items-start justify-between gap-2 rounded-sm text-[13px] leading-6 text-slate-600 transition-colors hover:text-[#086bd4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4] sm:text-sm"
            >
              <span className="min-w-0">{label}</span>
              <IconChevronRight
                size={16}
                stroke={1.8}
                aria-hidden="true"
                className="mt-1 hidden shrink-0 text-[#086bd4] transition-transform motion-safe:group-hover:translate-x-0.5 lg:block"
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
    <footer className="border-t border-[#dce6f1] bg-[#f3f7fb] text-[#06152c]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-11 py-14 sm:gap-x-10 sm:gap-y-12 sm:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)_minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-x-10 lg:py-20 xl:gap-x-14">
          {/* Brand: horizontal artwork made from the approved ELA logo */}
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Link
              href="/"
              className="inline-block max-w-full rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
              aria-label="ELA Pressure Washing — home"
            >
              <Image
                src="/assets/images/ela-logo-horizontal.webp"
                alt="ELA Pressure Washing"
                width={602}
                height={203}
                sizes="(max-width: 639px) 260px, 280px"
                className="h-auto w-[260px] max-w-full object-contain sm:w-[280px]"
              />
            </Link>

            <p className="mt-5 max-w-xs text-pretty text-sm leading-7 text-slate-600">
              Professional exterior cleaning and specialist surface care for
              homes and businesses across Wolverhampton and the West Midlands.
            </p>

            <div
              aria-hidden="true"
              className="mt-5 h-[2px] w-12 bg-[#086bd4]"
            />
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#086bd4]">
              Residential &amp; Commercial
            </p>
          </div>

          {/* On mobile these two columns share a row. */}
          <FooterNavigation
            heading="Explore"
            id="footer-explore-heading"
            links={exploreLinks}
          />
          <FooterNavigation
            heading="Our Services"
            id="footer-services-heading"
            links={serviceLinks}
          />

          {/* Contact is full width below nav on mobile/tablet. */}
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <h2 className="text-base font-bold tracking-tight text-[#06152c] sm:text-lg">
              Get in Touch
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 sm:mt-6">
              Have a project in mind? We're happy to discuss your exterior
              cleaning requirements.
            </p>

            <a
              href="tel:+447852435168"
              className="group mt-6 inline-flex items-center gap-3 rounded-sm font-semibold text-[#06152c] transition-colors hover:text-[#086bd4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#086bd4] text-white">
                <IconPhone size={19} stroke={1.8} aria-hidden="true" />
              </span>
              <span className="text-sm sm:text-base">07852 435168</span>
            </a>

            <div className="mt-5 flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#086bd4] text-white">
                <IconMapPin size={19} stroke={1.8} aria-hidden="true" />
              </span>
              <p className="pt-0.5 text-sm leading-6 text-slate-600">
                Based in Wolverhampton
                <span className="block">Serving the West Midlands</span>
              </p>
            </div>

            <Link
              href={`${LIVE_SITE}/contact`}
              className="
    group inline-flex min-h-12 max-w-full mt-7
    items-center justify-center gap-2
    rounded-lg bg-[#086bd4]
    px-4 py-3 text-sm font-semibold text-white
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
                className="
      shrink-0 transition-transform
      motion-safe:group-hover:translate-x-0.5
      motion-safe:group-hover:-translate-y-0.5
    "
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Legal links can be added here once their real destinations exist. */}
        <div className="flex flex-col gap-2 border-t border-[#cedae7] py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
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
