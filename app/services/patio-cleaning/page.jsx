import PatioHero from "@/app/components/services/dedicated-services/patio-cleaning/PatioHero";
import PatioOverview from "@/app/components/services/dedicated-services/patio-cleaning/PatioOverview";
import PatioCleaningProcess from "@/app/components/services/dedicated-services/patio-cleaning/PatioCleaningProcess";
import PatioProjectShowcase from "@/app/components/services/dedicated-services/patio-cleaning/PatioProjectShowcase";
import PatioCleaningFAQ from "@/app/components/services/dedicated-services/patio-cleaning/PatioCleaningFAQs";

const pageTitle = "Patio Cleaning in Wolverhampton | ELA Pressure Washing";

const pageDescription =
  "Professional patio cleaning in Wolverhampton and the West Midlands. Remove dirt, moss and algae from suitable paved surfaces. Contact ELA for a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services/patio-cleaning",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/patio-cleaning",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing exterior cleaning services",
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

export default function PatioCleaningPage() {
  return (
    <main>
      <PatioHero />
      <PatioOverview />
      <PatioCleaningProcess />
      <PatioProjectShowcase />
      <PatioCleaningFAQ />
    </main>
  );
}
