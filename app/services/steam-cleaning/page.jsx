import SteamCleaningHero from "@/app/components/services/dedicated-services/steam-cleaning/SteamCleaningHero";
import SteamCleaningOverview from "@/app/components/services/dedicated-services/steam-cleaning/SteamCleaningOverview";
import SteamCleaningProcess from "@/app/components/services/dedicated-services/steam-cleaning/SteanCleaningProcess";
import SteamProjectShowcase from "@/app/components/services/dedicated-services/steam-cleaning/SteamCleaningShowcase";

const pageTitle = "Steam Cleaning in Wolverhampton | ELA Pressure Washing";

const pageDescription =
  "Professional exterior steam cleaning in Wolverhampton and the West Midlands. Van-mounted equipment for paving, commercial areas and stubborn grime. Request a quote.";

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
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing exterior steam cleaning services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/assets/opengraph.png"],
  },
};

export default function SteamCleaningPage() {
  return (
    <main>
      <SteamCleaningHero />
      <SteamCleaningOverview />
      <SteamCleaningProcess />
      <SteamProjectShowcase />
    </main>
  );
}
