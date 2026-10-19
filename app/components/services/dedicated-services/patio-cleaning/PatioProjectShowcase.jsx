import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const beforeAfterImages = [
  {
    id: "before",
    label: "Before Cleaning",
    description: "Patio paving before cleaning",
    src: "/assets/images/services/patio-before.webp",
    alt: "Residential paved patio before cleaning, showing surface discolouration and accumulated dirt across the paving slabs.",
  },
  {
    id: "after",
    label: "After Cleaning",
    description: "Freshly cleaned patio paving",
    src: "/assets/images/services/patio-after.webp",
    alt: "The same residential patio after cleaning, showing wet, freshly cleaned paving slabs in varying natural tones.",
  },
];

const supportingImage = {
  src: "/assets/images/services/patio-cleaned.webp",
  alt: "Another view of the same freshly cleaned residential patio, showing the wet paving slabs alongside the house and patio doors.",
  category: "FINISHED PATIO",
  title: "A closer look at the finished patio",
  description:
    "Another perspective on the same project, showing the cleaned paving and its natural variation in colour.",
};

function BeforeAfterImage({ image }) {
  return (
    <figure className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-white">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 sm:aspect-[4/5] lg:aspect-[3/4]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1536}
          height={2048}
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 44vw"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
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

export default function PatioProjectShowcase() {
  return (
    <section
      aria-labelledby="patio-showcase-heading"
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
                Real Patio Cleaning Results
              </p>
            </div>

            <h2
              id="patio-showcase-heading"
              className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
            >
              Real patios. <span className="text-[#086bd4]">Real results.</span>
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Take a closer look at a genuine patio cleaning project completed
              by ELA Pressure Washing, including before-and-after photographs
              and another view of the finished paving.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-[#bfd4ea] bg-white px-5 py-3.5 text-sm font-semibold text-[#0757ad] transition-colors duration-200 hover:border-[#086bd4] hover:bg-[#eaf3ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#086bd4]"
          >
            Explore Our Gallery
            <IconArrowUpRight size={18} stroke={1.8} aria-hidden="true" />
          </Link>
        </div>

        {/* Project photographs */}
        <div className="mt-10 grid items-start gap-6 lg:mt-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,0.9fr)] lg:gap-8">
          {/* Before-and-after feature */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-6 shrink-0 bg-[#086bd4]"
              />

              <h3 className="text-sm font-bold tracking-tight text-[#06152c] sm:text-base">
                One patio. Before and after cleaning.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {beforeAfterImages.map((image) => (
                <BeforeAfterImage key={image.id} image={image} />
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              The photographs show the same residential patio before and after
              cleaning. The finished paving was photographed while wet.
            </p>
          </div>

          {/* Additional view of the same completed project */}
          <figure className="min-w-0 overflow-hidden rounded-xl border border-[#dce6f2] bg-white sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:block">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-auto sm:min-h-[260px] lg:aspect-[3/4] lg:min-h-0">
              <Image
                src={supportingImage.src}
                alt={supportingImage.alt}
                width={1536}
                height={2048}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, calc(100vw - 40px)"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <figcaption className="flex min-w-0 flex-col justify-center px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#086bd4] sm:text-xs">
                {supportingImage.category}
              </p>

              <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#06152c] sm:text-xl">
                {supportingImage.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {supportingImage.description}
              </p>
            </figcaption>
          </figure>
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
