import DrivewayHero from "@/app/components/services/dedicated-services/driveway-cleaning/DrivewayHero";
import DrivewayOverview from "@/app/components/services/dedicated-services/driveway-cleaning/DrivewayOverview";
import DrivewayCleaningProcess from "@/app/components/services/dedicated-services/driveway-cleaning/DrivewayCleaningProcess";
import DrivewayProjectShowcase from "@/app/components/services/dedicated-services/driveway-cleaning/DrivewayProjectShowcase";
import DrivewayClosingCTA from "@/app/components/services/dedicated-services/driveway-cleaning/DrivewayClosingCTA";
import DrivewayFAQS from "@/app/components/services/dedicated-services/driveway-cleaning/DrivewayFAQs";

const pageTitle = "Driveway Cleaning in Wolverhampton | ELA Pressure Washing";

const pageDescription =
  "Professional driveway cleaning in Wolverhampton and the West Midlands. Cleaning for block paving, concrete and suitable stone driveways. Request a quote.";

const socialImage = "/assets/images/services/cleaned-block-paved-driveway.webp";

const socialImageAlt =
  "Cleaned grey block-paved driveway outside a residential property";

export const metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: "/services/driveway-cleaning",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/driveway-cleaning",
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

export default function Page() {
  return (
    <main>
      <DrivewayHero />
      <DrivewayOverview />
      <DrivewayCleaningProcess />
      <DrivewayProjectShowcase />
      <DrivewayFAQS />
      <DrivewayClosingCTA />
    </main>
  );
}
