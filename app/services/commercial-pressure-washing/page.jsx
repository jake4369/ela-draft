import CommercialPressureWashingHero from "@/app/components/services/dedicated-services/commercial-pressure-washing/CommercialPressureWashingHero";
import CommercialPressureWashingOverview from "@/app/components/services/dedicated-services/commercial-pressure-washing/CommercialPressureWashingOverview";
import CommercialPressureWashingProcess from "@/app/components/services/dedicated-services/commercial-pressure-washing/CommercialPressureWashingProcess";
import CommercialProjectShowcase from "@/app/components/services/dedicated-services/commercial-pressure-washing/CommercialProjectShowcase";
import CommercialPressureWashingFAQ from "@/app/components/services/dedicated-services/commercial-pressure-washing/CommercialPressureWashingFAQs";
import CommercialClosingCTA from "@/app/components/services/dedicated-services/commercial-pressure-washing/CommercialClosingCTA";

const pageTitle = "Commercial Pressure Washing in Wolverhampton | ELA";

const pageDescription =
  "Commercial pressure washing and exterior cleaning in Wolverhampton and the West Midlands. Forecourts, paving, entrances and more. Request a quote.";

const socialImage = "/assets/images/hero/hero.webp";

const socialImageAlt =
  "ELA Pressure Washing operative using professional cleaning equipment on a commercial building exterior";

export const metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: "/services/commercial-pressure-washing",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/commercial-pressure-washing",
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

export default function CommercialPressureWashingPage() {
  return (
    <main>
      <CommercialPressureWashingHero />
      <CommercialPressureWashingOverview />
      <CommercialPressureWashingProcess />
      <CommercialProjectShowcase />
      <CommercialPressureWashingFAQ />
      <CommercialClosingCTA />
    </main>
  );
}
