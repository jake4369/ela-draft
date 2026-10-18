import ServicesHero from "../components/services/ServicesHero";
import FeaturedServices from "../components/services/FeaturedServices";
import AdditionalServices from "../components/services/AdditionalServices";
import ServicesApproach from "../components/services/ServicesApproach";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <FeaturedServices />
      <AdditionalServices />
      <ServicesApproach />
    </main>
  );
}
