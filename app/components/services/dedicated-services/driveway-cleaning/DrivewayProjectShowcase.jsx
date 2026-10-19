import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const beforeAfterImages = [
  {
    id: "before",
    label: "Before Cleaning",
    description: "Weed-affected block paving",
    src: "/assets/images/services/driveway-cleaning-before-weeds.webp",
    alt: "Residential block-paved driveway with weeds and grass growing between the paving joints before cleaning",
  },
  {
    id: "after",
    label: "After Cleaning",
    description: "Cleaned block paving",
    src: "/assets/images/services/driveway-cleaning-after-weeds-removed.webp",
    alt: "The same residential block-paved driveway after cleaning, with weeds removed and the paving more clearly visible",
  },
];

const additionalProject = {
  src: "/assets/images/services/driveway-cleaning-grey-block-paving.webp",
  alt: "Clean grey block-paved residential driveway outside a modern housing development",
  category: "RESIDENTIAL DRIVEWAY CLEANING",
  title: "Another residential project",
  description:
    "A clean, well-presented block-paved driveway at a residential property.",
};

function BeforeAfterImage({ image }) {
  return (
    <figure className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-white">
      {/* Individual before or after photograph */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <Image
          src={image.src}
          alt={image.alt}
          width={1024}
          height={1536}
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 28vw, (min-width: 640px) 45vw, 42vw"
          loading="lazy"
          className="block h-full w-full object-cover object-center"
        />
      </div>

      <figcaption className="px-3 py-4 sm:px-5 sm:py-5">
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

export default function DrivewayProjectShowcase() {
  return (
    <section
      aria-labelledby="driveway-showcase-heading"
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
                Real Driveway Cleaning Results
              </p>
            </div>

            <h2
              id="driveway-showcase-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Real driveways.{" "}
              <span className="text-[#086bd4]">Real results.</span>
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Take a closer look at genuine driveway cleaning projects by ELA
              Pressure Washing, including a before-and-after transformation and
              another residential example.
            </p>
          </div>

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
          {/* Main before-and-after feature */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-[#086bd4]" />

              <h3 className="text-sm font-bold tracking-tight text-[#06152c] sm:text-base">
                A genuine before-and-after transformation
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {beforeAfterImages.map((image) => (
                <BeforeAfterImage key={image.id} image={image} />
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              The photographs show the driveway before and after cleaning, with
              accumulated weed growth removed from the block paving.
            </p>
          </div>

          {/* Supporting residential project */}
          <figure className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-white">
            {/* Single responsive aspect-ratio container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 sm:aspect-[16/10] lg:aspect-[3/4]">
              <Image
                src={additionalProject.src}
                alt={additionalProject.alt}
                width={1024}
                height={1536}
                sizes="(min-width: 1280px) 410px, (min-width: 1024px) 33vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                loading="lazy"
                className="block h-full w-full object-cover object-center"
              />
            </div>

            <figcaption className="px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#086bd4] sm:text-xs">
                {additionalProject.category}
              </p>

              <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#06152c] sm:text-xl">
                {additionalProject.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {additionalProject.description}
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Signature section rule */}
        <div
          aria-hidden="true"
          className="mt-12 h-0.75 w-16 rounded-full bg-[#086bd4] sm:mt-14"
        />
      </div>
    </section>
  );
}
