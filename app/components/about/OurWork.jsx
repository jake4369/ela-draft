import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

const projects = {
  featured: {
    title: "Commercial Paving",
    category: "Commercial Exterior Cleaning",
    description: "Paved pedestrian areas outside retail premises.",
    image: "/assets/images/about/commercial-retail-paving-cleaning.webp",
    alt: "Block-paved pedestrian walkway outside a row of retail shops",
    position: "object-center",
  },

  supporting: [
    {
      title: "Roof Cleaning",
      category: "Specialist Roof Care",
      description:
        "Visible contrast between cleaned and moss-covered roof tiles.",
      image: "/assets/images/about/residential-roof-cleaning-before-after.webp",
      alt: "Aerial view of a tiled roof showing lighter cleaned tiles beside darker moss-covered tiles",
      position: "object-top",
    },
    {
      title: "Residential Driveway",
      category: "Residential Exterior Care",
      description: "A residential driveway with a dark surface finish.",
      image: "/assets/images/about/residential-driveway-surface-treatment.webp",
      alt: "Dark-finished block-paved driveway outside a residential property, with safety tape in the foreground",
      position: "object-center",
    },
  ],
};

function ProjectFigure({ project, featured = false }) {
  return (
    <figure className="flex min-w-0 flex-col">
      {/* PROJECT PHOTOGRAPH */}
      <div
        className={
          featured
            ? `
              relative aspect-[4/3]
              overflow-hidden rounded-2xl
              bg-slate-100
              sm:aspect-[16/10]
              lg:aspect-auto lg:min-h-[520px] lg:flex-1
            `
            : `
              relative aspect-[16/10]
              overflow-hidden rounded-2xl
              bg-slate-100
              sm:aspect-[4/3]
              lg:aspect-auto lg:min-h-0 lg:flex-1
            `
        }
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          loading="lazy"
          quality={65}
          sizes={
            featured
              ? "(min-width: 1280px) 650px, (min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              : "(min-width: 1280px) 450px, (min-width: 1024px) 40vw, (min-width: 640px) calc((100vw - 88px) / 2), calc(100vw - 40px)"
          }
          className={`object-cover ${project.position}`}
        />
      </div>

      {/* PROJECT CAPTION */}
      <figcaption className="mt-4">
        <p
          className="
            text-xs font-semibold uppercase
            tracking-[0.12em] text-[#086bd4]
          "
        >
          {project.category}
        </p>

        <h3
          className="
            mt-1.5 text-lg font-bold
            tracking-tight text-[#06152c]
            sm:text-xl
          "
        >
          {project.title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {project.description}
        </p>
      </figcaption>
    </figure>
  );
}

export default function OurWork() {
  return (
    <section
      aria-labelledby="about-work-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION INTRODUCTION */}
        <div className="max-w-3xl">
          <p
            className="
              mb-4 text-xs font-semibold uppercase
              tracking-[0.18em] text-[#086bd4]
              sm:text-sm
            "
          >
            Our Work
          </p>

          <h2
            id="about-work-heading"
            className="
              text-pretty text-3xl font-bold
              leading-tight tracking-tight
              text-[#06152c]
              sm:text-4xl lg:text-5xl
            "
          >
            A closer look at <span className="text-[#086bd4]">our work.</span>
          </h2>

          <p
            className="
              mt-5 max-w-2xl text-pretty
              text-base leading-7 text-slate-600
              sm:text-lg sm:leading-8
            "
          >
            From commercial pedestrian areas to residential roofs and driveways,
            these projects offer a glimpse of the different properties and
            surfaces ELA works with.
          </p>
        </div>

        {/* ASYMMETRIC PROJECT SHOWCASE */}
        <div
          className="
            mt-10 grid items-stretch gap-8
            sm:mt-12 lg:mt-14
            lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
          "
        >
          {/* LARGE FEATURED PROJECT */}
          <ProjectFigure project={projects.featured} featured />

          {/* TWO SUPPORTING PROJECTS */}
          <div
            className="
              grid min-w-0 gap-8
              sm:grid-cols-2
              lg:grid-cols-1 lg:grid-rows-2
            "
          >
            {projects.supporting.map((project) => (
              <ProjectFigure key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* GALLERY LINK */}
        <div
          className="
            mt-12 flex flex-col gap-5
            border-t border-slate-200 pt-7
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <p className="text-sm leading-6 text-slate-600">
            Discover more examples of ELA's exterior cleaning work.
          </p>

          <Link
            href="https://ela-draft.vercel.app/gallery"
            className="
              group inline-flex min-h-11
              w-fit items-center gap-2
              rounded-sm text-sm font-semibold
              text-[#086bd4]
              transition-colors
              hover:text-[#054d99]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#086bd4]
            "
          >
            Explore Our Gallery
            <IconArrowUpRight
              size={19}
              stroke={1.8}
              className="
                shrink-0 transition-transform
                motion-safe:group-hover:translate-x-0.5
                motion-safe:group-hover:-translate-y-0.5
              "
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
