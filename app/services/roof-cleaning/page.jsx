import RoofCleaningHero from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningHero";
import RoofCleaningOverview from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningOverview";
import RoofCleaningProcess from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningProcess";
import RoofProjectShowcase from "@/app/components/services/dedicated-services/roof-cleaning/RoofProjectShowcase";
import RoofCleaningFAQ from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningFAQs";
import RoofClosingCTA from "@/app/components/services/dedicated-services/roof-cleaning/RoofClosingCTA";

const pageTitle = "Roof Cleaning & Moss Removal in Wolverhampton | ELA";

const pageDescription =
  "Professional roof cleaning and moss removal in Wolverhampton and the West Midlands. Careful roof scraping and specialist treatments where appropriate. Request a free quote.";

const socialImage = "/assets/images/services/roof-page-hero.webp";

const socialImageAlt =
  "Residential roof cleaning project with ELA Pressure Washing equipment on site";

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
        url: socialImage,
        width: 2048,
        height: 1152,
        alt: socialImageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: socialImage,
        alt: socialImageAlt,
      },
    ],
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
      <RoofClosingCTA />
    </main>
  );
}
