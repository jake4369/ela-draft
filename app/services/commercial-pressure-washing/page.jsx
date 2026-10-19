import CommercialPressureWashingHero from "@/app/components/services/dedicated-services/commercial-pressure-washing/CommercialPressureWashingHero";

const pageTitle = "Commercial Pressure Washing in Wolverhampton | ELA";

const pageDescription =
  "Commercial pressure washing and exterior cleaning in Wolverhampton and the West Midlands. Forecourts, paving, entrances and more. Request a quote.";

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
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing commercial exterior cleaning",
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

export default function CommercialPressureWashingPage() {
  return (
    <main>
      <CommercialPressureWashingHero />
    </main>
  );
}
