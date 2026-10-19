import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const projects = [
  {
    id: "building",
    title: "A large-scale commercial exterior transformation",
    description:
      "A wide-angle comparison showing the appearance of a substantial commercial building before and after exterior wall cleaning.",
    layout: "panoramic",
    images: [
      {
        id: "building-before",
        label: "Before Cleaning",
        description: "Commercial building before cleaning",
        src: "/assets/images/services/commercial-warehouse-facade-before.webp",
        alt: "Wide view of a large commercial building with visible dirt and weather staining across its white exterior facade before cleaning.",
        position: "object-center",
      },
      {
        id: "building-after",
        label: "After Cleaning",
        description: "Building exterior following cleaning",
        src: "/assets/images/services/commercial-warehouse-facade-after.webp",
        alt: "Wide view of the same commercial building after exterior cleaning, showing a brighter and cleaner-looking white facade.",
        position: "object-center",
      },
    ],
    note: "These photographs show the same large commercial building before and after exterior cleaning.",
  },
  {
    id: "venue",
    title: "Commercial access area cleaning",
    description:
      "A closer comparison of a paved external area beside a building displaying the Wolverhampton Wanderers crest, showing the surface before and following professional cleaning.",
    layout: "portrait",
    images: [
      {
        id: "venue-before",
        label: "Before Cleaning",
        description: "Paved access area before cleaning",
        src: "/assets/images/services/commercial-venue-access-before.webp",
        alt: "Paved access area outside a commercial building displaying the Wolverhampton Wanderers crest, with visible surface staining before cleaning.",
        position: "object-center",
      },
      {
        id: "venue-after",
        label: "After Cleaning",
        description: "Access area following pressure washing",
        src: "/assets/images/services/commercial-venue-access-after.webp",
        alt: "The same commercial access area after pressure washing, showing cleaned wet paving beside a building displaying the Wolverhampton Wanderers crest.",
        position: "object-center",
      },
    ],
    note: "Both photographs show the same access area before and after cleaning. The surface is still wet in the after photograph.",
  },
];

const imageSizes = `
  (min-width: 1280px) 580px,
  (min-width: 1024px) 45vw,
  (min-width: 640px) calc(100vw - 64px),
  calc(100vw - 40px)
`;

function CommercialProjectImage({ image, layout }) {
  const aspectRatio =
    layout === "panoramic" ? "aspect-[16/9] sm:aspect-[8/3]" : "aspect-[4/5]";

  return (
    <figure className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-white">
      {/* Project photograph */}
      <div
        className={`
          relative overflow-hidden bg-slate-100
          ${aspectRatio}
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

export default function CommercialProjectShowcase() {
  return (
    <section
      aria-labelledby="commercial-showcase-heading"
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
                Real Commercial Cleaning Results
              </p>
            </div>

            <h2
              id="commercial-showcase-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Real projects.{" "}
              <span className="text-[#086bd4]">Real results.</span>
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore genuine commercial exterior cleaning projects completed by
              ELA Pressure Washing. From large building exteriors to frequently
              used access areas, these photographs show the difference
              professional cleaning can make.
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

              {/* Before-and-after photographs */}
              <div
                className={`
                  grid grid-cols-1 gap-4
                  sm:gap-5 lg:gap-6
                  ${
                    project.layout === "panoramic"
                      ? "lg:grid-cols-2"
                      : "sm:grid-cols-2"
                  }
                `}
              >
                {project.images.map((image) => (
                  <CommercialProjectImage
                    key={image.id}
                    image={image}
                    layout={project.layout}
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
