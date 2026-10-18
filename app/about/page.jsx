import AboutHero from "../components/about/AboutHero";
import EquipmentExpertise from "../components/about/EquipmentExpertise";
import OurApproach from "../components/about/OurApproach";
import OurWork from "../components/about/OurWork";
import WhereWeWork from "../components/about/WhereWeWork";
import AboutClosingCTA from "../components/about/AboutClosingCTA";

export const metadata = {
  title: "About ELA | ELA Pressure Washing",

  description:
    "Learn about ELA Pressure Washing, providing professional exterior cleaning, specialist equipment and surface care across Wolverhampton and the West Midlands.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <EquipmentExpertise />
      <OurApproach />
      <OurWork />
      <WhereWeWork />
      <AboutClosingCTA />
    </main>
  );
}
