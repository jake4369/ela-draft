import Image from "next/image";

const galleryProjects = [
  {
    number: 5,
    category: "Driveway Cleaning",
    title: "Block-Paved Driveway",
    alt: "Block-paved residential driveway outside a property.",
  },
  {
    number: 13,
    category: "Patio Cleaning",
    title: "Garden Patio",
    alt: "Paved garden patio at a residential property.",
  },
  {
    number: 34,
    category: "Roof Cleaning",
    title: "Roof Cleaning in Progress",
    alt: "Aerial view of a tiled roof showing a lighter cleaned section alongside darker roof tiles.",
  },
  {
    number: 31,
    category: "Commercial Cleaning",
    title: "Commercial Exterior Surface Care",
    alt: "Paved exterior access area beside a large commercial building.",
  },
  {
    number: 32,
    category: "Residential Roof Care",
    title: "Residential Roof Care from Above",
    alt: "Aerial view of tiled roofs on residential properties.",
  },
  {
    number: 33,
    category: "Roof Cleaning",
    title: "Roof Cleaning — Aerial View",
    alt: "Aerial photograph of a large tiled residential roof and surrounding property.",
  },
  {
    number: 3,
    category: "Commercial Cleaning",
    title: "Shopfront Walkway",
    alt: "Paved pedestrian walkway outside commercial shopfronts.",
  },
  {
    number: 1,
    category: "Roof Cleaning",
    title: "Residential Roof Tile Cleaning",
    alt: "Tiled residential roof during exterior cleaning work.",
  },
  {
    number: 6,
    category: "Driveway Cleaning",
    title: "Patterned Concrete Driveway",
    alt: "Residential driveway with red patterned concrete paving.",
  },
  {
    number: 24,
    category: "Heritage Care",
    title: "Historic Brickwork",
    alt: "Large historic red-brick building with traditional architectural features.",
  },
  {
    number: 7,
    category: "Driveway Cleaning",
    title: "Residential Block Paving",
    alt: "Block-paved driveway at a residential property.",
  },
  {
    number: 8,
    category: "Commercial Cleaning",
    title: "Retail Pedestrian Area",
    alt: "Paved pedestrian area outside retail premises.",
  },
  {
    number: 11,
    category: "Roof Cleaning",
    title: "Roof Tile Detail",
    alt: "Close-up view of tiled roofing during a roof care project.",
  },
  {
    number: 16,
    category: "Driveway Cleaning",
    title: "Decorative Driveway",
    alt: "Decorative paved driveway at a residential property.",
  },
  {
    number: 21,
    category: "Commercial Cleaning",
    title: "Commercial Entrance",
    alt: "Exterior paved entrance area at commercial premises.",
  },
  {
    number: 2,
    category: "Roof Cleaning",
    title: "Roof Surface Comparison",
    alt: "Contrasting sections of a tiled roof showing differences in surface appearance.",
  },
  {
    number: 9,
    category: "Commercial Cleaning",
    title: "Covered Shopping Walkway",
    alt: "ELA Pressure Washing operative cleaning paving outside shops beneath a covered walkway.",
  },
  {
    number: 18,
    category: "Driveway Cleaning",
    title: "Brick-Paved Driveway",
    alt: "Residential driveway finished with brick paving.",
  },
  {
    number: 17,
    category: "Driveway Cleaning",
    title: "Residential Side Passage",
    alt: "Block-paved passage alongside a residential property.",
  },
  {
    number: 25,
    category: "Patio Cleaning",
    title: "Garden Walkway",
    alt: "Paved garden walkway surrounded by outdoor landscaping.",
  },
  {
    number: 26,
    category: "Commercial Cleaning",
    title: "Industrial Exterior Paving",
    alt: "Paved outdoor walkway at industrial or commercial premises.",
  },
  {
    number: 15,
    category: "Driveway Cleaning",
    title: "Multi-Coloured Block Paving",
    alt: "Residential driveway with multicoloured block paving.",
  },
  {
    number: 23,
    category: "Roof Cleaning",
    title: "Roof Care and Access Equipment",
    alt: "Roof cleaning project showing a property and specialist access equipment.",
  },
  {
    number: 4,
    category: "Commercial Cleaning",
    title: "Retail Forecourt",
    alt: "Hardstanding and paved forecourt outside retail premises.",
  },
  {
    number: 29,
    category: "Driveway Cleaning",
    title: "Patterned Residential Driveway",
    alt: "Patterned driveway paving at a residential property.",
  },
  {
    number: 27,
    category: "Heritage Care",
    title: "High-Level Brickwork Care",
    alt: "Exterior brickwork and high-level masonry on a building.",
  },
  {
    number: 10,
    category: "Driveway Cleaning",
    title: "Dark Paved Driveway",
    alt: "Dark-coloured paved driveway at a residential property.",
  },
  {
    number: 12,
    category: "Roof Cleaning",
    title: "Residential Roof — Aerial Perspective",
    alt: "Elevated aerial view of a tiled residential roof.",
  },
  {
    number: 14,
    category: "Driveway Cleaning",
    title: "Driveway Surface Care",
    alt: "Dark block-paved driveway at a residential property.",
  },
  {
    number: 22,
    category: "Commercial Cleaning",
    title: "Shopfront Exterior Paving",
    alt: "Paved pedestrian surface outside a commercial shopfront.",
  },
  {
    number: 19,
    category: "Driveway Cleaning",
    title: "Residential Driveway Project",
    alt: "Paved driveway with an ELA Pressure Washing vehicle nearby.",
  },
  {
    number: 28,
    category: "Roof Cleaning",
    title: "Roof Cleaning Comparison",
    alt: "Sections of a tiled roof showing different levels of surface contamination.",
  },
  {
    number: 20,
    category: "Driveway Cleaning",
    title: "Large Residential Driveway",
    alt: "Wide paved driveway outside a residential property.",
  },
  {
    number: 30,
    category: "Driveway Cleaning",
    title: "Black Patterned Driveway",
    alt: "Residential driveway with dark patterned paving.",
  },
];

function GalleryImage({ project, variant = "standard" }) {
  const isFeatured = variant === "featured";

  const aspectClass =
    variant === "featured"
      ? "aspect-[16/10] sm:aspect-[16/9]"
      : variant === "portrait"
        ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]"
        : variant === "wide"
          ? "aspect-[16/10] sm:aspect-[16/9]"
          : "aspect-[4/3]";

  const imageSizes = isFeatured
    ? "(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1152px"
    : variant === "portrait"
      ? "(max-width: 1024px) 90vw, 450px"
      : "(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 560px";

  return (
    <figure className="group min-w-0">
      {/* Photograph */}
      <div
        className={`
          relative overflow-hidden rounded-xl
          border border-[#dce6f2] bg-[#e5edf5]
          ${aspectClass}
        `}
      >
        <Image
          src={`/assets/images/gallery/${project.number}.webp`}
          alt={project.alt}
          fill
          sizes={imageSizes}
          loading="lazy"
          className="object-cover"
        />
      </div>

      {/* Permanently visible editorial caption */}
      <figcaption
        className="
          mt-4 border-b border-[#dce6f2]
          pb-5 sm:mt-5 sm:pb-6
        "
      >
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="
              mt-2 h-px w-5 shrink-0
              bg-[#086bd4]
            "
          />

          <div className="min-w-0">
            <p
              className="
                text-[0.7rem] font-bold uppercase
                tracking-[0.15em] text-[#086bd4]
              "
            >
              {isFeatured
                ? "Featured Project · Roof Cleaning"
                : project.category}
            </p>

            <h3
              className={`
                mt-2 text-pretty font-bold
                leading-snug tracking-tight
                text-[#06152c]
                ${isFeatured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}
              `}
            >
              {project.title}
            </h3>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function GalleryProjectGrid() {
  const featuredProject = galleryProjects[0];
  const portraitProject = galleryProjects[1];
  const supportingProjects = galleryProjects.slice(2, 4);
  const remainingProjects = galleryProjects.slice(4);

  return (
    <section
      aria-labelledby="gallery-projects-heading"
      className="
        border-t border-[#dce6f2]
        bg-[#f3f7fb]
        py-16 sm:py-20 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-14">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#086bd4]" />

            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.18em] text-[#086bd4]
                sm:text-sm
              "
            >
              Project Gallery
            </p>
          </div>

          <h2
            id="gallery-projects-heading"
            className="
              mt-5 text-pretty text-3xl
              font-bold leading-tight tracking-tight
              text-[#06152c]
              sm:text-4xl lg:text-[2.75rem]
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
            Explore genuine project photographs from ELA Pressure Washing,
            including residential exterior cleaning, commercial work and
            specialist surface care.
          </p>
        </div>

        {/* Main featured project */}
        <div>
          <GalleryImage project={featuredProject} variant="featured" />
        </div>

        {/* Asymmetric secondary project arrangement */}
        <div
          className="
            mt-10 grid items-start gap-8
            lg:mt-12 lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
          "
        >
          <GalleryImage project={portraitProject} variant="portrait" />

          <div
            className="
              grid min-w-0 gap-8
              sm:grid-cols-2
              lg:grid-cols-1 lg:gap-8
            "
          >
            {supportingProjects.map((project) => (
              <GalleryImage
                key={project.number}
                project={project}
                variant="wide"
              />
            ))}
          </div>
        </div>

        {/* Remaining photographs */}
        <div
          className="
            mt-10 grid gap-x-8 gap-y-10
            sm:grid-cols-2
            sm:gap-y-12
            lg:mt-14 lg:gap-x-10
          "
        >
          {remainingProjects.map((project) => (
            <GalleryImage key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
