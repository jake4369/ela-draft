import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Driveway Cleaning",
    description:
      "Refresh the appearance of your driveway with professional cleaning designed to tackle built-up dirt, moss and algae.",
    image: "/assets/images/services/driveway.webp",
    imageAlt: "Block-paved driveway outside residential brick properties",
    href: "https://ela-draft.vercel.app/services/driveway-cleaning",
  },
  {
    title: "Patio Cleaning",
    description:
      "Bring new life to patios and paved outdoor spaces with professional cleaning tailored to the surface and its condition.",
    image: "/assets/images/services/patio.webp",
    imageAlt: "Residential stone-paved garden patio with cleaning equipment",
    href: "https://ela-draft.vercel.app/services/patio-cleaning",
  },
  {
    title: "Roof Cleaning",
    description:
      "Improve the appearance of your roof by addressing moss and organic buildup using methods suited to the roofing material.",
    image: "/assets/images/services/roof-after.webp",
    imageAlt:
      "Aerial view of a tiled roof with contrasting lighter and darker areas",
    href: "https://ela-draft.vercel.app/services/roof-cleaning",
  },
  {
    title: "Commercial Pressure Washing",
    description:
      "Maintain cleaner, more presentable business premises with professional exterior cleaning for entrances, forecourts and paved areas.",
    image: "/assets/images/services/retail-park-alt.webp",
    imageAlt:
      "Commercial pedestrian paving beside a retail building during cleaning work",
    href: "https://ela-draft.vercel.app/services/commercial-pressure-washing",
  },
  {
    title: "Steam Cleaning",
    description:
      "Tackle stubborn dirt and surface grime with specialist heat-assisted cleaning methods for suitable exterior surfaces.",
    image: "/assets/images/services/council.webp",
    imageAlt:
      "Public pedestrian walkway with professional surface-cleaning equipment and safety barriers",
    href: "https://ela-draft.vercel.app/services/steam-cleaning",
  },
  {
    title: "Heritage Brickwork Cleaning",
    description:
      "Care for older brickwork with specialist cleaning approaches that consider the condition and character of historic masonry.",
    image: "/assets/images/services/heritage-alt.webp",
    imageAlt:
      "Traditional red-brick building with historic architectural detailing",
    href: "https://ela-draft.vercel.app/services/heritage-brickwork-cleaning",
  },
];

export default function ServicesOverview() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
            Our Services
          </p>

          <h2
            id="services-heading"
            className="text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-5xl"
          >
            Exterior cleaning, tailored to your property.
          </h2>

          <div className="mt-5 max-w-2xl space-y-3 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              ELA Pressure Washing provides professional exterior cleaning
              across Wolverhampton and the West Midlands, from residential
              driveways, patios and roofs to commercial premises, new-builds and
              heritage brickwork.
            </p>

            <p>
              Our services include pressure washing, steam cleaning, soft
              washing, roof moss removal, specialist chemical and biocide
              treatments, graffiti and chewing gum removal. We also offer
              surface sealing, patio repointing and driveway sinkage lifting,
              using methods suited to each surface and its condition.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <ul
          className="
            mt-10 grid gap-6
            sm:mt-12 sm:grid-cols-2
            lg:grid-cols-3 lg:gap-8
          "
        >
          {services.map((service) => (
            <li key={service.title} className="min-w-0">
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
