import HeritageBrickworkHero from "@/app/components/services/dedicated-services/heritage-brickwork-cleaning/HeritageBrickworkHero";
import HeritageBrickworkOverview from "@/app/components/services/dedicated-services/heritage-brickwork-cleaning/HeritageBrickworkOverview";
import HeritageBrickworkProcess from "@/app/components/services/dedicated-services/heritage-brickwork-cleaning/HeritageBrickworkProcess";
import HeritageBrickworkShowcase from "@/app/components/services/dedicated-services/heritage-brickwork-cleaning/HeritageBrickworkShowcase";
import HeritageBrickworkFAQ from "@/app/components/services/dedicated-services/heritage-brickwork-cleaning/HeritageBrickworkFAQs";
import HeritageClosingCTA from "@/app/components/services/dedicated-services/heritage-brickwork-cleaning/HeritageClosingCTA";

const pageTitle = "Heritage Brickwork Cleaning in Wolverhampton | ELA";

const pageDescription =
  "Specialist heritage brickwork cleaning in Wolverhampton and the West Midlands. Sensitive cleaning approaches for older masonry and historic brickwork. Request a quote.";

const socialImage =
  "/assets/images/services/heritage-brickwork-building-exterior.webp";

const socialImageAlt =
  "Wide street-level view of a large traditional red-brick building with stone window surrounds, architectural detailing and iron railings.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: "/services/heritage-brickwork-cleaning",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/heritage-brickwork-cleaning",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: socialImage,
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

export default function HeritageBrickworkCleaningPage() {
  return (
    <main>
      <HeritageBrickworkHero />
      <HeritageBrickworkOverview />
      <HeritageBrickworkProcess />
      <HeritageBrickworkShowcase />
      <HeritageBrickworkFAQ />
      <HeritageClosingCTA />
    </main>
  );
}
