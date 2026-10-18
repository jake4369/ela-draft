import Image from "next/image";
import Link from "next/link";

import {
  IconArrowUpRight,
  IconExternalLink,
  IconMessageCircle,
} from "@tabler/icons-react";

const socialProfiles = [
  {
    name: "Google",
    image: "/assets/images/cta/google.webp",
    href: "https://g.co/kgs/HVmAuCY",
  },
  {
    name: "Yell",
    image: "/assets/images/cta/yell.webp",
    href: "https://www.yell.com/biz/ela-pressure-washing-driveway-cleaning-and-sealing-wolverhampton-10441878/",
  },
  {
    name: "Facebook",
    image: "/assets/images/cta/facebook.webp",
    href: "https://www.facebook.com/profile.php?id=61555129179931",
  },
  {
    name: "Instagram",
    image: "/assets/images/cta/instagram.webp",
    href: "https://www.instagram.com/ela.pressurewashing/",
  },
  {
    name: "TikTok",
    image: "/assets/images/cta/tiktok.webp",
    href: "https://www.tiktok.com/@ela_pressure_washing",
  },
  {
    name: "YouTube",
    image: "/assets/images/cta/youtube.webp",
    href: "https://www.youtube.com/@elapressurewashing5332",
  },
];

function SocialProfile({ profile }) {
  return (
    <li className="min-w-0">
      <a
        href={profile.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ELA Pressure Washing on ${profile.name} (opens in a new tab)`}
        className="
          group flex min-h-[124px] flex-col
          items-center justify-center gap-3
          rounded-xl border border-white/15
          bg-white/[0.04] px-3 py-5
          text-center transition-colors
          hover:border-[#79baff]/50
          hover:bg-white/[0.08]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#79baff]
        "
      >
        {/* Original platform logo */}
        <span
          className="
            flex h-14 w-14 shrink-0
            items-center justify-center
            rounded-xl bg-white p-2
          "
          aria-hidden="true"
        >
          <Image
            src={profile.image}
            alt=""
            width={44}
            height={44}
            className="h-full w-full object-contain"
          />
        </span>

        <span className="flex items-center justify-center gap-1.5">
          <span className="text-sm font-semibold text-white">
            {profile.name}
          </span>

          <IconExternalLink
            size={13}
            stroke={1.8}
            className="shrink-0 text-[#8cbce9]"
            aria-hidden="true"
          />
        </span>
      </a>
    </li>
  );
}

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="
        relative isolate overflow-hidden
        bg-[#06152c] py-16 text-white
        sm:py-20 lg:py-24
      "
    >
      {/* Restrained decorative detail */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-64 -z-10
          h-[550px] w-[550px]
          rounded-full border border-[#3975ad]/20
        "
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* MAIN CTA */}
        <div
          className="
            grid items-end gap-9
            lg:grid-cols-[minmax(0,1fr)_auto]
            lg:gap-16
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                mb-4 text-xs font-semibold
                uppercase tracking-[0.18em]
                text-[#79baff] sm:text-sm
              "
            >
              Let's Get Started
            </p>

            <h2
              id="final-cta-heading"
              className="
                text-pretty text-3xl font-bold
                leading-tight tracking-tight
                text-white
                sm:text-4xl lg:text-5xl
              "
            >
              Let's make your property
              <span className="block text-[#79baff]">look its best.</span>
            </h2>

            <p
              className="
                mt-6 max-w-2xl text-pretty
                text-base leading-7
                text-slate-300
                sm:text-lg sm:leading-8
              "
            >
              From residential driveways and patios to specialist commercial
              exterior cleaning, tell us about your project and we'll help you
              take the next step.
            </p>
          </div>

          {/* QUOTATION BUTTON */}
          <div className="flex flex-col items-start lg:items-center">
            <Link
              href="https://www.elapressurewashing.co.uk/contact"
              className="
                group inline-flex min-h-14
                items-center justify-center gap-3
                rounded-lg bg-[#086bd4]
                px-6 py-4 text-base font-semibold
                text-white transition-colors
                hover:bg-[#075db5]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              <IconMessageCircle size={20} stroke={1.8} aria-hidden="true" />

              <span>Request a Free Quote</span>

              <IconArrowUpRight
                size={19}
                stroke={1.8}
                aria-hidden="true"
                className="
                  transition-transform
                  motion-safe:group-hover:translate-x-0.5
                  motion-safe:group-hover:-translate-y-0.5
                "
              />
            </Link>

            <p className="mt-3 text-sm text-slate-300">
              Free, no-obligation quotations
            </p>
          </div>
        </div>

        {/* SOCIAL + REVIEW LINKS */}
        <div className="mt-12 border-t border-white/15 pt-9 sm:mt-14 sm:pt-10">
          <div
            className="
              mb-7 flex flex-col gap-2
              sm:mb-8 sm:flex-row
              sm:items-end sm:justify-between
              sm:gap-6
            "
          >
            <div>
              <h3
                className="
                  text-xl font-bold
                  tracking-tight text-white
                  sm:text-2xl
                "
              >
                Find ELA online.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Explore our customer reviews and follow more of our work.
              </p>
            </div>
          </div>

          <nav aria-label="ELA social media and review profiles">
            <ul
              className="
                grid grid-cols-2 gap-3
                sm:grid-cols-3 sm:gap-4
                lg:grid-cols-6
              "
            >
              {socialProfiles.map((profile) => (
                <SocialProfile key={profile.name} profile={profile} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
