import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const featuredProject = {
  src: "/assets/images/services/heritage-brickwork-building-exterior.webp",
  alt: "Wide street-level view of a large traditional red-brick building with stone window surrounds, architectural detailing and iron railings.",
  label: "BUILDING OVERVIEW",
  title: "Traditional brickwork at scale",
  description:
    "A substantial red-brick property featuring traditional masonry, stone detailing and distinctive architectural features.",
  position: "object-[center_60%]",
};

// Additional photographs can be added here as they become available.
const supportingPhotos = [
  {
    id: "access",
    src: "/assets/images/services/heritage-brickwork-operative-lift.webp",
    alt: "Operative wearing a hard hat in an elevated work platform beside the upper brickwork of a traditional red-brick building.",
    label: "PROJECT IN PROGRESS",
    title: "Specialist access at height",
    description:
      "An elevated work platform providing access to upper-level brickwork and architectural details during an ELA project.",
    position: "object-[center_18%]",
  },
];

function SupportingProjectImage({ image }) {
  return (
    <figure className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-white">
      {/* Supporting project photograph */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 sm:aspect-[16/10] lg:aspect-[3/4]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={75}
          sizes="(min-width: 1280px) 410px, (min-width: 1024px) 33vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
          loading="lazy"
          className={`object-cover ${image.position}`}
        />
      </div>

      {/* Photograph caption */}
      <figcaption className="px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#086bd4] sm:text-xs">
          {image.label}
        </p>

        <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#06152c] sm:text-xl">
          {image.title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {image.description}
        </p>
      </figcaption>
    </figure>
  );
}

export default function HeritageBrickworkShowcase() {
  return (
    <section
      aria-labelledby="heritage-showcase-heading"
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
                Real Heritage Brickwork Project
              </p>
            </div>

            <h2
              id="heritage-showcase-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Traditional brickwork.{" "}
              <span className="text-[#086bd4]">Real ELA work.</span>
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Take a closer look at genuine ELA project photographs featuring
              traditional brickwork and architectural detailing. These images
              highlight the scale of the property and the access arrangements
              involved in working around its exterior masonry.
            </p>
          </div>

          {/* Gallery link */}
          <Link
            href="/gallery"
            className="
              inline-flex w-fit shrink-0 items-center gap-2
              rounded-lg border border-[#bfd4ea] bg-white
              px-5 py-3.5 text-sm font-semibold text-[#0757ad]
              transition-colors duration-200
              hover:border-[#086bd4] hover:bg-[#eaf3ff]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#086bd4]
            "
          >
            Explore Our Gallery
            <IconArrowUpRight size={18} stroke={1.8} aria-hidden="true" />
          </Link>
        </div>

        {/* Project photographs */}
        <div className="mt-10 grid items-start gap-6 lg:mt-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,0.9fr)] lg:gap-8">
          {/* Main featured project */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-[#086bd4]" />

              <h3 className="text-sm font-bold tracking-tight text-[#06152c] sm:text-base">
                A genuine traditional brickwork project
              </h3>
            </div>

            {/* Featured building photograph */}
            <figure className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src={featuredProject.src}
                  alt={featuredProject.alt}
                  fill
                  quality={75}
                  sizes="(min-width: 1280px) 730px, (min-width: 1024px) 60vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                  loading="lazy"
                  className={`object-cover ${featuredProject.position}`}
                />
              </div>

              <figcaption className="px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#086bd4] sm:text-xs">
                  {featuredProject.label}
                </p>

                <h4 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#06152c] sm:text-xl">
                  {featuredProject.title}
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {featuredProject.description}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Supporting project photography */}
          <div
            className={`grid min-w-0 gap-6 ${
              supportingPhotos.length > 1 ? "sm:grid-cols-2 lg:grid-cols-1" : ""
            }`}
          >
            {supportingPhotos.map((image) => (
              <SupportingProjectImage key={image.id} image={image} />
            ))}
          </div>
        </div>

        {/* Project clarification — follows all photographs at every viewport */}
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
          The photographs show different views of the same traditional brickwork
          project, rather than a matched before-and-after cleaning comparison.
        </p>

        {/* Signature section rule */}
        <div
          aria-hidden="true"
          className="mt-12 h-[3px] w-16 rounded-full bg-[#086bd4] sm:mt-14"
        />
      </div>
    </section>
  );
}
