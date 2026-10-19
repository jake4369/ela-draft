import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const projects = [
  {
    id: "aerial",
    title: "A residential roof transformation",
    description:
      "Aerial photographs showing the appearance of a residential tiled roof before and after professional cleaning.",
    images: [
      {
        id: "aerial-before",
        label: "Before Cleaning",
        description: "Roof before cleaning",
        src: "/assets/images/services/roof-project-aerial-before.webp",
        alt: "Aerial view of a residential tiled roof before cleaning, showing darker roof tiles and visible surface buildup.",
        position: "object-center",
      },
      {
        id: "aerial-after",
        label: "After Cleaning",
        description: "Roof following cleaning",
        src: "/assets/images/services/roof-project-aerial-after.webp",
        alt: "Aerial view of the same residential property after roof cleaning, showing lighter and cleaner-looking roof tiles.",
        position: "object-center",
      },
    ],
    note: "The photographs show the same residential roof before and after cleaning, captured from different aerial viewpoints.",
  },
  {
    id: "moss",
    title: "A closer look at moss removal",
    description:
      "A detailed comparison showing accumulated moss across concrete roof tiles and the appearance of the surface following cleaning.",
    images: [
      {
        id: "moss-before",
        label: "Before Cleaning",
        description: "Moss-affected roof tiles",
        src: "/assets/images/services/roof-project-moss-before.webp",
        alt: "Concrete roof tiles before cleaning, with patches of moss and organic debris accumulated across the surface and tile joints.",
        position: "object-[center_70%]",
      },
      {
        id: "moss-after",
        label: "After Cleaning",
        description: "Roof tiles after moss removal",
        src: "/assets/images/services/roof-project-moss-after.webp",
        alt: "The same concrete tiled roof following moss removal, with the roof tiles and joints visibly clearer of accumulated growth.",
        position: "object-center",
      },
    ],
    note: "Both photographs show the same tiled roof from different positions, highlighting the removal of accumulated moss.",
  },
];

const imageSizes = `
  (min-width: 1280px) 580px,
  (min-width: 1024px) 45vw,
  (min-width: 640px) calc((100vw - 84px) / 2),
  calc(100vw - 40px)
`;

function RoofProjectImage({ image, aerial = false }) {
  return (
    <figure className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-white">
      {/* Project photograph */}
      <div
        className={`
          relative overflow-hidden bg-slate-100
          ${aerial ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/3]"}
        `}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={75}
          sizes={imageSizes}
          loading="lazy"
          className={`object-cover ${image.position}`}
        />
      </div>

      {/* Photograph caption */}
      <figcaption className="px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#086bd4] sm:text-xs">
          {image.label}
        </p>

        <p className="mt-1.5 text-sm font-semibold leading-snug text-[#06152c] sm:text-base">
          {image.description}
        </p>
      </figcaption>
    </figure>
  );
}

export default function RoofProjectShowcase() {
  return (
    <section
      aria-labelledby="roof-showcase-heading"
      className="border-t border-[#dce6f2] bg-[#f3f7fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
                Real Roof Cleaning Results
              </p>
            </div>

            <h2
              id="roof-showcase-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Real roofs. <span className="text-[#086bd4]">Real results.</span>
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Take a closer look at genuine roof cleaning and moss removal
              projects by ELA Pressure Washing, with photographs showing the
              condition of roofs before and after cleaning.
            </p>
          </div>

          {/* Gallery link */}
          <Link
            href="/gallery"
            className="
              inline-flex w-fit shrink-0 items-center
              gap-2 rounded-lg border border-[#bfd4ea]
              bg-white px-5 py-3.5
              text-sm font-semibold text-[#0757ad]
              transition-colors duration-200
              hover:border-[#086bd4]
              hover:bg-[#eaf3ff]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#086bd4]
            "
          >
            Explore Our Gallery
            <IconArrowUpRight size={18} stroke={1.8} aria-hidden="true" />
          </Link>
        </div>

        {/* Project comparisons */}
        <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-14">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={
                index > 0 ? "border-t border-[#dce6f2] pt-10 sm:pt-12" : ""
              }
            >
              {/* Project heading */}
              <div className="mb-6 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-px w-6 shrink-0 bg-[#086bd4]"
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#086bd4]">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-[#06152c] sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Before-and-after images */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                {project.images.map((image) => (
                  <RoofProjectImage
                    key={image.id}
                    image={image}
                    aerial={project.id === "aerial"}
                  />
                ))}
              </div>

              {/* Comparison clarification */}
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
                {project.note}
              </p>
            </article>
          ))}
        </div>

        {/* Signature section rule */}
        <div
          aria-hidden="true"
          className="mt-12 h-[3px] w-16 rounded-full bg-[#086bd4] sm:mt-14"
        />
      </div>
    </section>
  );
}
