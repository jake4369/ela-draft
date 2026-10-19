import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const projectImages = [
  {
    id: "walkway",
    label: "Site Overview",
    description: "Civic walkway and cleaning setup",
    src: "/assets/images/services/steam-cleaning-civic-walkway-overview.webp",
    alt: "Paved pedestrian walkway at a civic site, with a professional surface cleaning attachment, hoses and temporary barriers visible during exterior cleaning work.",
    position: "object-[center_58%]",
    featured: true,
  },
  {
    id: "paving",
    label: "Paving Detail",
    description: "Distinctive key-pattern block paving",
    src: "/assets/images/services/steam-cleaning-civic-paving-detail.webp",
    alt: "Detailed view of a large key-shaped pattern formed from dark and light block paving outside a civic building.",
    position: "object-center",
    featured: false,
  },
  {
    id: "surface",
    label: "Surface Detail",
    description: "Contrasting conditions on an exterior terrace",
    src: "/assets/images/services/steam-cleaning-civic-surface-comparison.webp",
    alt: "Elevated exterior terrace at a civic site showing dark wet surface areas alongside lighter orange sections, with neighbouring buildings in the background.",
    position: "object-[center_60%]",
    featured: false,
  },
];

const featuredImageSizes = `
  (min-width: 1280px) 540px,
  (min-width: 1024px) 42vw,
  (min-width: 640px) calc(100vw - 64px),
  calc(100vw - 40px)
`;

const supportingImageSizes = `
  (min-width: 1280px) 300px,
  (min-width: 1024px) 26vw,
  (min-width: 640px) calc((100vw - 84px) / 2),
  calc(100vw - 40px)
`;

function SteamProjectImage({ image }) {
  return (
    <figure
      className={`
        min-w-0 overflow-hidden
        rounded-xl border border-[#dce6f2]
        bg-white
        ${image.featured ? "sm:col-span-2 lg:col-span-1" : ""}
      `}
    >
      {/* Project photograph */}
      <div
        className={`
          relative overflow-hidden bg-slate-100
          ${image.featured ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[3/4]"}
          lg:aspect-auto lg:h-[390px]
          xl:h-[440px]
        `}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={75}
          sizes={image.featured ? featuredImageSizes : supportingImageSizes}
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

export default function SteamProjectShowcase() {
  return (
    <section
      aria-labelledby="steam-showcase-heading"
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
                Real Exterior Cleaning Work
              </p>
            </div>

            <h2
              id="steam-showcase-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Real work. <span className="text-[#086bd4]">Real results.</span>
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Take a closer look at genuine exterior cleaning work by ELA
              Pressure Washing. These photographs document different areas of a
              civic location, from its paved pedestrian approach to detailed
              paving and an elevated exterior surface.
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

        {/* Civic cleaning project */}
        <article className="mt-10 sm:mt-12">
          {/* Project introduction */}
          <div className="mb-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-6 shrink-0 bg-[#086bd4]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#086bd4]">
                Project 01
              </p>
            </div>

            <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-[#06152c] sm:text-2xl">
              Exterior cleaning at a civic site
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              A selection of photographs showing the scale, surfaces and
              different areas involved in a civic exterior cleaning project.
            </p>
          </div>

          {/* Project photographs */}
          <div
            className="
              grid grid-cols-1 gap-4
              sm:grid-cols-2 sm:gap-5
              lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.85fr)_minmax(0,0.85fr)]
              lg:gap-6
            "
          >
            {projectImages.map((image) => (
              <SteamProjectImage key={image.id} image={image} />
            ))}
          </div>

          {/* Project clarification */}
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            The photographs were taken at the same civic location and show
            different areas and viewpoints, rather than a matched
            before-and-after comparison.
          </p>
        </article>

        {/* Signature section rule */}
        <div
          aria-hidden="true"
          className="mt-12 h-[3px] w-16 rounded-full bg-[#086bd4] sm:mt-14"
        />
      </div>
    </section>
  );
}
