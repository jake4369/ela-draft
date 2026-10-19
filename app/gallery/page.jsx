import GalleryHero from "../components/gallery/GalleryHero";
import GalleryProjectGrid from "../components/gallery/GalleryProjectGrid";
import GalleryStayConnected from "../components/gallery/GalleryStayConnected";
import GalleryClosingCTA from "../components/gallery/GalleryClosingCTA";

export const metadata = {
  title: {
    absolute: "Exterior Cleaning Gallery | ELA Pressure Washing",
  },

  description:
    "Explore real exterior cleaning projects by ELA Pressure Washing across Wolverhampton and the West Midlands, including driveways, patios, roofs and commercial properties.",

  alternates: {
    canonical: "https://elapressurewashing.co.uk/gallery",
  },

  openGraph: {
    title: "Our Work | ELA Pressure Washing",
    description:
      "See genuine exterior cleaning projects completed by ELA Pressure Washing. Explore residential, commercial and specialist cleaning work across the West Midlands.",
    url: "https://elapressurewashing.co.uk/gallery",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Exterior Cleaning Gallery | ELA Pressure Washing",
    description:
      "Discover real driveway, patio, roof and commercial exterior cleaning projects across Wolverhampton and the West Midlands.",
  },
};

export default function Page() {
  return (
    <main>
      <GalleryHero />
      <GalleryProjectGrid />
      <GalleryStayConnected />
      <GalleryClosingCTA />
    </main>
  );
}
