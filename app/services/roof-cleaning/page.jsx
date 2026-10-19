import RoofCleaningHero from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningHero";
import RoofCleaningOverview from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningOverview";
import RoofCleaningProcess from "@/app/components/services/dedicated-services/roof-cleaning/RoofCleaningProcess";

const pageTitle = "Roof Cleaning & Moss Removal in Wolverhampton | ELA";

const pageDescription =
  "Roof cleaning and moss removal in Wolverhampton and the West Midlands. Careful roof scraping and suitable biocide treatments. Contact ELA for a quote.";

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
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing exterior cleaning services",
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

const roofConcerns = [
  {
    title: "Moss & Organic Growth",
    description:
      "Moss, algae and lichen can become established on roof surfaces, especially in shaded or damp conditions. Suitable cleaning can help remove accumulated growth and improve the appearance of the roof.",
  },
  {
    title: "Roof Tile Condition",
    description:
      "Different roofing materials respond differently to cleaning. Concrete, clay and other roof tiles may require different techniques, particularly where surfaces are weathered, fragile or already damaged.",
  },
  {
    title: "Debris & Drainage",
    description:
      "Loose moss and organic debris can be carried towards gutters and drainage channels during rainfall. Removing accumulated growth may help reduce the amount of material entering these areas.",
  },
];

const cleaningSteps = [
  {
    number: "01",
    title: "Assess the Roof",
    description:
      "The roofing material, condition, amount of moss and available access all need to be considered before deciding which cleaning method is appropriate.",
  },
  {
    number: "02",
    title: "Remove Moss & Debris",
    description:
      "Where suitable, careful roof scraping can be used to remove accumulated moss and loose organic material. The method should be selected according to the roof's condition and construction.",
  },
  {
    number: "03",
    title: "Consider Further Treatment",
    description:
      "Following moss removal, an appropriate biocide treatment may be recommended to help control remaining organic growth and discourage its return over time.",
  },
];

const faqs = [
  {
    question: "What is the best way to remove moss from a roof?",
    answer:
      "There is no single method suitable for every roof. Careful manual scraping can be appropriate for certain tiled roofs, while other surfaces may require different approaches. The roofing material, its condition and safe access arrangements should be assessed before work begins.",
  },
  {
    question: "Do you pressure wash roofs?",
    answer:
      "High-pressure washing is not appropriate for every roof and may damage certain tiles, coatings or other roofing materials. ELA offers roof scraping and specialist exterior cleaning methods. The most suitable approach depends on an assessment of the particular roof.",
  },
  {
    question: "Can roof cleaning damage tiles?",
    answer:
      "Roof tiles can be damaged by unsuitable cleaning techniques, excessive pressure or inappropriate access methods. Existing wear and deterioration also affect what work is suitable. Cleaning cannot be guaranteed to be risk-free, which is why the condition of the roof needs careful consideration.",
  },
  {
    question: "What is a roof biocide treatment?",
    answer:
      "A biocide is a specialist treatment designed to control particular forms of biological growth. Where appropriate, a roof treatment may be used after moss removal to help address remaining organic contamination. Its suitability and effectiveness depend on the product, roof material and site conditions.",
  },
  {
    question: "Will moss grow back after roof cleaning?",
    answer:
      "Moss can return over time, particularly on roofs exposed to persistent moisture or shade. Suitable cleaning and follow-up treatments may help manage regrowth, but no treatment can guarantee that moss will never return.",
  },
  {
    question: "Can you clean concrete and clay roof tiles?",
    answer:
      "The suitability of roof cleaning depends on the specific tile material, its age, condition and construction. Some concrete and clay tiled roofs may be suitable for careful moss removal, while others may require a different approach or may not be suitable for cleaning.",
  },
  {
    question: "Does every moss-covered roof need cleaning?",
    answer:
      "Not necessarily. A small amount of moss does not automatically mean that a roof requires cleaning or repair. Whether removal is worthwhile depends on the extent of the growth, the roofing material and the condition of the roof.",
  },
  {
    question: "Is gutter cleaning included?",
    answer:
      "The work included in a roof cleaning quotation should be confirmed before booking. If you are concerned about moss or debris entering your gutters, mention this when contacting ELA so that the required work can be discussed.",
  },
  {
    question: "How much does roof moss removal cost?",
    answer:
      "Pricing depends on factors such as roof size, pitch, access, material, condition, the amount of moss and any additional treatment required. Contact ELA Pressure Washing with details of your property to request a quotation.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "ELA Pressure Washing provides exterior cleaning services in Wolverhampton and across the West Midlands. Contact us with your location and details of your roof to discuss availability.",
  },
];

export default function RoofCleaningPage() {
  return (
    <main>
      <RoofCleaningHero />
      <RoofCleaningOverview />
      <RoofCleaningProcess />
    </main>
  );
}
