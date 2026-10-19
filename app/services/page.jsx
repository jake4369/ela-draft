import ServicesHero from "../components/services/ServicesHero";
import FeaturedServices from "../components/services/FeaturedServices";
import AdditionalServices from "../components/services/AdditionalServices";
import ServicesApproach from "../components/services/ServicesApproach";
import ServicesClosingCTA from "../components/services/ServicesClosingCTA";

export const metadata = {
  title: {
    absolute:
      "Exterior Cleaning Services in Wolverhampton | ELA Pressure Washing",
  },

  description:
    "Explore driveway, patio, roof, commercial, steam and heritage cleaning, plus specialist exterior services across Wolverhampton and the West Midlands.",

  alternates: {
    canonical: "https://ela-draft.vercel.app/services",
  },

  openGraph: {
    title: "Exterior Cleaning Services | ELA Pressure Washing",
    description:
      "Explore professional exterior cleaning, pressure washing, roof care, steam cleaning and specialist treatments across Wolverhampton and the West Midlands.",
    url: "https://ela-draft.vercel.app/services",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://ela-draft.vercel.app/assets/images/services/services-hero.webp",
        alt: "ELA Pressure Washing operative carrying out professional exterior cleaning",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Exterior Cleaning Services | ELA Pressure Washing",
    description:
      "Professional residential, commercial and specialist exterior cleaning across Wolverhampton and the West Midlands.",
    images: [
      "https://ela-draft.vercel.app/assets/images/services/services-hero.webp",
    ],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <FeaturedServices />
      <AdditionalServices />
      <ServicesApproach />
      <ServicesClosingCTA />
    </main>
  );
}
