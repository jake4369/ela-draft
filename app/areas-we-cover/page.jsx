import AreasHero from "../components/areas/AreasHero";
import LocationsWeCover from "../components/areas/LocationsWeCover";
import RegionalServices from "../components/areas/RegionalServices";
import CoverageFAQs from "../components/areas/CoverageFAQs";
import CoverageClosingCTA from "../components/areas/CoverageClosingCTA";

export const metadata = {
  title:
    "Areas We Cover | ELA Pressure Washing | Wolverhampton & West Midlands",
  description:
    "Based in Wolverhampton, ELA Pressure Washing provides professional exterior cleaning for homes and businesses across the wider West Midlands. Enquire about coverage in your area.",
};

export default function AreasWeCoverPage() {
  return (
    <main>
      <AreasHero />
      <LocationsWeCover />
      <RegionalServices />
      <CoverageFAQs />
      <CoverageClosingCTA />
    </main>
  );
}
