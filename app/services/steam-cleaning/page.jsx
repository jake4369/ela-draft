import SteamCleaningHero from "@/app/components/services/dedicated-services/steam-cleaning/SteamCleaningHero";

import SteamCleaningOverview from "@/app/components/services/dedicated-services/steam-cleaning/SteamCleaningOverview";

import SteamCleaningProcess from "@/app/components/services/dedicated-services/steam-cleaning/SteamCleaningProcess";

import SteamProjectShowcase from "@/app/components/services/dedicated-services/steam-cleaning/SteamProjectShowcase";

import SteamCleaningFAQ from "@/app/components/services/dedicated-services/steam-cleaning/SteamCleaningFAQs";

import SteamClosingCTA from "@/app/components/services/dedicated-services/steam-cleaning/SteamClosingCTA";

const pageTitle = "Steam Cleaning in Wolverhampton | ELA Pressure Washing";

const pageDescription =
  "Professional exterior steam cleaning in Wolverhampton and the West Midlands. Van-mounted equipment for paving, commercial areas and stubborn grime. Request a quote.";

const socialImage = "/assets/images/services/steam-cleaning-hero-night.webp";

export const metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: "/services/steam-cleaning",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/steam-cleaning",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "ELA Pressure Washing operative carrying out professional exterior steam cleaning on a paved walkway at night",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [socialImage],
  },
};

export default function SteamCleaningPage() {
  return (
    <main>
      <SteamCleaningHero />
      <SteamCleaningOverview />
      <SteamCleaningProcess />
      <SteamProjectShowcase />
      <SteamCleaningFAQ />
      <SteamClosingCTA />
    </main>
  );
}
