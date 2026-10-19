import Image from "next/image";
import Link from "next/link";

const pageTitle = "Roof Cleaning & Moss Removal in Wolverhampton | ELA";

const pageDescription =
  "Roof cleaning and moss removal in Wolverhampton and the West Midlands. Careful roof scraping and suitable biocide treatments. Contact ELA for a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services/roof-cleaning",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/roof-cleaning",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing exterior cleaning services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/assets/opengraph.png"],
  },
};

const roofConcerns = [
  {
    title: "Moss & Organic Growth",
    description:
      "Moss, algae and lichen can become established on roof surfaces, especially in shaded or damp conditions. Suitable cleaning can help remove accumulated growth and improve the appearance of the roof.",
  },
  {
    title: "Roof Tile Condition",
    description:
      "Different roofing materials respond differently to cleaning. Concrete, clay and other roof tiles may require different techniques, particularly where surfaces are weathered, fragile or already damaged.",
  },
  {
    title: "Debris & Drainage",
    description:
      "Loose moss and organic debris can be carried towards gutters and drainage channels during rainfall. Removing accumulated growth may help reduce the amount of material entering these areas.",
  },
];

const cleaningSteps = [
  {
    number: "01",
    title: "Assess the Roof",
    description:
      "The roofing material, condition, amount of moss and available access all need to be considered before deciding which cleaning method is appropriate.",
  },
  {
    number: "02",
    title: "Remove Moss & Debris",
    description:
      "Where suitable, careful roof scraping can be used to remove accumulated moss and loose organic material. The method should be selected according to the roof's condition and construction.",
  },
  {
    number: "03",
    title: "Consider Further Treatment",
    description:
      "Following moss removal, an appropriate biocide treatment may be recommended to help control remaining organic growth and discourage its return over time.",
  },
];

const faqs = [
  {
    question: "What is the best way to remove moss from a roof?",
    answer:
      "There is no single method suitable for every roof. Careful manual scraping can be appropriate for certain tiled roofs, while other surfaces may require different approaches. The roofing material, its condition and safe access arrangements should be assessed before work begins.",
  },
  {
    question: "Do you pressure wash roofs?",
    answer:
      "High-pressure washing is not appropriate for every roof and may damage certain tiles, coatings or other roofing materials. ELA offers roof scraping and specialist exterior cleaning methods. The most suitable approach depends on an assessment of the particular roof.",
  },
  {
    question: "Can roof cleaning damage tiles?",
    answer:
      "Roof tiles can be damaged by unsuitable cleaning techniques, excessive pressure or inappropriate access methods. Existing wear and deterioration also affect what work is suitable. Cleaning cannot be guaranteed to be risk-free, which is why the condition of the roof needs careful consideration.",
  },
  {
    question: "What is a roof biocide treatment?",
    answer:
      "A biocide is a specialist treatment designed to control particular forms of biological growth. Where appropriate, a roof treatment may be used after moss removal to help address remaining organic contamination. Its suitability and effectiveness depend on the product, roof material and site conditions.",
  },
  {
    question: "Will moss grow back after roof cleaning?",
    answer:
      "Moss can return over time, particularly on roofs exposed to persistent moisture or shade. Suitable cleaning and follow-up treatments may help manage regrowth, but no treatment can guarantee that moss will never return.",
  },
  {
    question: "Can you clean concrete and clay roof tiles?",
    answer:
      "The suitability of roof cleaning depends on the specific tile material, its age, condition and construction. Some concrete and clay tiled roofs may be suitable for careful moss removal, while others may require a different approach or may not be suitable for cleaning.",
  },
  {
    question: "Does every moss-covered roof need cleaning?",
    answer:
      "Not necessarily. A small amount of moss does not automatically mean that a roof requires cleaning or repair. Whether removal is worthwhile depends on the extent of the growth, the roofing material and the condition of the roof.",
  },
  {
    question: "Is gutter cleaning included?",
    answer:
      "The work included in a roof cleaning quotation should be confirmed before booking. If you are concerned about moss or debris entering your gutters, mention this when contacting ELA so that the required work can be discussed.",
  },
  {
    question: "How much does roof moss removal cost?",
    answer:
      "Pricing depends on factors such as roof size, pitch, access, material, condition, the amount of moss and any additional treatment required. Contact ELA Pressure Washing with details of your property to request a quotation.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "ELA Pressure Washing provides exterior cleaning services in Wolverhampton and across the West Midlands. Contact us with your location and details of your roof to discuss availability.",
  },
];

export default function RoofCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <Image
          src="/assets/images/about/header.jpg"
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-8 md:pb-32 md:pt-36">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-slate-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="underline-offset-4 hover:underline focus-visible:underline"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href="/services"
                  className="underline-offset-4 hover:underline focus-visible:underline"
                >
                  Services
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li aria-current="page" className="text-white">
                Roof Cleaning
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Professional Roof Care & Exterior Cleaning
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Roof Cleaning & Moss Removal in Wolverhampton
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Restore the appearance of your roof with professional moss removal
              and exterior cleaning from ELA Pressure Washing. We provide roof
              scraping and specialist cleaning treatments for suitable
              properties across Wolverhampton and the West Midlands.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Every roof is different. We believe in choosing an appropriate
              cleaning method based on the roofing material, its condition and
              the work required.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Request a Roof Cleaning Quote
              </Link>

              <Link
                href="/gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Roof Cleaning Services
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Give your roof the attention it deserves
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Throughout the year, roof surfaces are exposed to rain, changing
              temperatures and airborne dirt. Shaded and damp areas can
              encourage the growth of moss, algae and lichen, gradually changing
              the appearance of roof tiles.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Professional roof cleaning can help address this buildup, but it
              is important to use methods appropriate for the roof itself.
              Unlike a driveway or patio, a roof may contain fragile materials,
              weathered surfaces and areas that are difficult to access safely.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              ELA Pressure Washing provides roof scraping and specialist
              treatments designed to address organic growth on suitable exterior
              surfaces. The appropriate approach depends on the individual
              property.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {roofConcerns.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Scraping Section */}
      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Roof Moss Removal
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Careful roof scraping and moss removal
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Moss can develop across roof tiles, particularly in areas that
              remain damp or receive limited sunlight. Heavy accumulations may
              leave a roof looking untidy and produce loose debris during
              rainfall.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Roof scraping is one method of removing accumulated moss without
              relying on high-pressure washing. Where suitable, moss can be
              removed using tools and techniques appropriate for the roof
              material and its condition.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Not every roof is suitable for manual scraping or other cleaning
              methods. Existing damage, fragile tiles and access requirements
              need to be considered before work proceeds.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
            >
              Explore all our exterior cleaning services
            </Link>
          </div>

          <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">
              The Importance of Assessment
            </p>

            <h3 className="text-2xl font-bold">
              The right approach for the right roof
            </h3>

            <p className="mt-5 leading-8 text-slate-200">
              Roof cleaning should not be treated as a one-size-fits-all
              service.
            </p>

            <ul className="mt-7 space-y-5 text-slate-200">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 font-bold text-sky-300"
                >
                  ✓
                </span>
                <span>
                  Consider the roofing material and its existing condition.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 font-bold text-sky-300"
                >
                  ✓
                </span>
                <span>
                  Select cleaning methods appropriate for the surface.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 font-bold text-sky-300"
                >
                  ✓
                </span>
                <span>Account for safe access and the work involved.</span>
              </li>

              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 font-bold text-sky-300"
                >
                  ✓
                </span>
                <span>
                  Discuss whether further treatments would be suitable.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Our Approach
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What to expect from roof moss removal
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              The appropriate cleaning process will depend on your roof's
              construction, condition and accessibility. These are the main
              stages to consider when planning the work.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cleaningSteps.map((step) => (
              <article key={step.number}>
                <span
                  aria-hidden="true"
                  className="text-4xl font-bold text-sky-700"
                >
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Biocide Treatments */}
      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
                Additional Roof Treatments
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Biocide treatments and roof aftercare
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                Removing visible moss is one part of managing organic growth on
                a roof. Depending on the surface and the contamination present,
                an additional treatment may be appropriate.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Specialist biocide treatments are designed to control specific
                forms of biological growth, including certain algae, mosses and
                lichens. Where suitable, they may be used following cleaning to
                help manage remaining contamination.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                The suitability of any treatment depends on the roofing
                material, product requirements and surrounding environment.
                Treatment results and the rate of future regrowth can vary.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <h3 className="text-2xl font-bold">
                Can moss be prevented permanently?
              </h3>

              <p className="mt-5 leading-8 text-slate-200">
                Roof moss is influenced by factors such as shade, moisture and
                local environmental conditions.
              </p>

              <p className="mt-4 leading-8 text-slate-200">
                While appropriate cleaning and treatments can help manage
                organic growth, moss may return over time. There is no universal
                treatment that guarantees a permanently moss-free roof.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discuss Roof Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Roof Cleaning Across Wolverhampton and the West Midlands
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              ELA Pressure Washing provides specialist exterior cleaning
              services for residential and commercial properties in
              Wolverhampton and the wider West Midlands.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-200">
              If your roof has accumulated moss, algae or other organic growth,
              get in touch with details of your property. We can discuss the
              cleaning requirements, the roof's condition and the work that may
              be suitable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Request a Roof Cleaning Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Roof Cleaning & Moss Removal FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700">
              Common questions about roof moss removal, cleaning methods, roof
              treatments and requesting a quotation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-slate-50"
              >
                <summary className="cursor-pointer rounded-xl px-6 py-5 font-semibold marker:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                  {faq.question}
                </summary>

                <p className="px-6 pb-6 leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-slate-100 py-20 text-slate-900">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Looking to have your roof cleaned?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Contact ELA Pressure Washing to discuss roof moss removal, suitable
            cleaning techniques and specialist treatments for your property.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-7 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Request Your Roof Cleaning Quote
          </Link>

          <div className="mt-10 border-t border-slate-300 pt-8">
            <p className="mb-4 font-semibold text-slate-900">
              Explore our other exterior cleaning services
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <Link
                href="/services/driveway-cleaning"
                className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
              >
                Driveway Cleaning
              </Link>

              <Link
                href="/services/patio-cleaning"
                className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
              >
                Patio Cleaning
              </Link>

              <Link
                href="/services"
                className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
