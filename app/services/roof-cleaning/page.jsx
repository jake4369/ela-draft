import RoofCleaningHero from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningHero";
import RoofCleaningOverview from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningOverview";
import RoofCleaningProcess from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningProcess";
import RoofProjectShowcase from "@/app/components/services/dedicated-services/roof-cleaning/RoofProjectShowcase";
import RoofCleaningFAQ from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningFAQs";

const pageTitle = "Roof Cleaning & Moss Removal in Wolverhampton | ELA";

const pageDescription =
  "Roof cleaning and moss removal in Wolverhampton and the West Midlands. Careful roof scraping and suitable biocide treatments. Contact ELA for a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services/roof-cleaning",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/roof-cleaning",
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

export default function RoofCleaningPage() {
  return (
    <main>
      <RoofCleaningHero />
      <RoofCleaningOverview />
      <RoofCleaningProcess />
      <RoofProjectShowcase />
      <RoofCleaningFAQ />
    </main>
  );
}
