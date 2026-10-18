import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
const services = [
  {
    number: "01",
    category: "Residential Cleaning",
    title: "Driveway Cleaning",
    description:
      "Restore the appearance of your driveway with professional cleaning designed to remove accumulated dirt, moss, algae and surface grime. We select suitable methods for the paving material and its condition.",
    image: "/assets/images/services/cleaned-block-paved-driveway.webp",
    alt: "Freshly cleaned grey block-paved driveway outside a residential property",
    href: "/services/driveway-cleaning",
  },
  {
    number: "02",
    category: "Residential Cleaning",
    title: "Patio Cleaning",
    description:
      "Refresh your outdoor living spaces with professional patio cleaning. From paving slabs to natural stone, we assess each surface before selecting an appropriate cleaning method.",
    image: "/assets/images/services/cleaned-natural-stone-patio.webp",
    alt: "Cleaned natural stone patio with beige and grey paving slabs beside a house",
    href: "/services/patio-cleaning",
  },
  {
    number: "03",
    category: "Roof Care",
    title: "Roof Cleaning & Moss Removal",
    description:
      "Careful removal of moss, organic debris and loose buildup from suitable roof surfaces. Our approach considers the roofing material and its condition, with additional treatments where appropriate.",
    image: "/assets/images/services/roof-cleaning-equipment-on-tiles.webp",
    alt: "Specialist roof cleaning equipment positioned on a pitched tiled roof",
    href: "/services/roof-cleaning",
  },
  {
    number: "04",
    category: "Commercial Cleaning",
    title: "Commercial Pressure Washing",
    description:
      "Professional exterior cleaning for commercial premises, pedestrian areas, entrances and hard-wearing outdoor surfaces. We use specialist equipment and methods appropriate for each project.",
    image:
      "/assets/images/services/commercial-exterior-cleaning-equipment.webp",
    alt: "Professional surface cleaning equipment and specialist vehicle outside a building entrance",
    href: "/services/commercial-pressure-washing",
  },
  {
    number: "05",
    category: "Specialist Cleaning",
    title: "Professional Steam Cleaning",
    description:
      "High-temperature exterior cleaning for suitable surfaces affected by stubborn dirt, grease and contamination. Our specialist equipment provides an additional cleaning option where heat-assisted methods are appropriate.",
    image: "/assets/images/services/nighttime-exterior-steam-cleaning.webp",
    alt: "ELA Pressure Washing operative cleaning an outdoor paved area at night with visible spray",
    href: "/services/steam-cleaning",
  },
  {
    number: "06",
    category: "Heritage Care",
    title: "Heritage Brickwork Care",
    description:
      "A considered approach to cleaning older and sensitive masonry. We select techniques with regard to the condition and characteristics of historic brickwork, prioritising the preservation of the original material.",
    image: "/assets/images/services/historic-red-brick-building.webp",
    alt: "Historic red-brick building featuring traditional masonry, stone detailing and period architecture",
    href: "/services/heritage-brickwork-cleaning",
  },
];

function ServiceCard({ service }) {
  const titleId = `featured-service-${service.number}`;

  return (
    <article className="h-full min-w-0">
      <Link
        href={service.href}
        aria-labelledby={titleId}
        className="
          group flex h-full flex-col overflow-hidden
          rounded-2xl border border-[#dce6f2] bg-white
          transition-colors duration-200
          hover:border-[#93c5fd]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#086bd4]
        "
      >
        {/* Service image */}
        <div className="relative aspect-[5/3] overflow-hidden bg-[#e5edf5]">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            quality={75}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 560px"
            className="
              object-cover
              motion-safe:transition-transform
              motion-safe:duration-500
              motion-safe:group-hover:scale-[1.035]
            "
          />

          {/* Editorial image numbering */}
          <div className="absolute left-5 top-5 rounded-md bg-[#06152c]/90 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-white sm:left-6 sm:top-6">
            {service.number} / 06
          </div>
        </div>

        {/* Service content */}
        <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#086bd4]">
            {service.category}
          </p>

          <h3
            id={titleId}
            className="mt-3 text-pretty text-2xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-[1.7rem]"
          >
            {service.title}
          </h3>

          <p className="mt-4 flex-1 text-[0.975rem] leading-7 text-slate-600">
            {service.description}
          </p>

          {/* Service link treatment */}
          <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
            <span className="text-sm font-semibold text-[#086bd4]">
              Explore this service
            </span>

            <span
              aria-hidden="true"
              className="
                flex size-10 items-center justify-center
                rounded-full bg-[#edf5ff] text-[#086bd4]
                motion-safe:transition-transform
                motion-safe:duration-200
                motion-safe:group-hover:-translate-y-0.5
                motion-safe:group-hover:translate-x-0.5
              "
            >
              <IconArrowUpRight size={20} stroke={1.8} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function FeaturedServices() {
  return (
    <section
      aria-labelledby="featured-services-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#086bd4]" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
              Explore Our Services
            </p>
          </div>

          <h2
            id="featured-services-heading"
            className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
          >
            Professional care for{" "}
            <span className="text-[#086bd4]">every project.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From residential driveways and patios to commercial premises and
            sensitive heritage surfaces, explore our specialist cleaning
            services and find the right approach for your property.
          </p>
        </div>

        {/* Featured services grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-7 lg:mt-14 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
