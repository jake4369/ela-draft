import Image from "next/image";
import Link from "next/link";

const pageTitle = "Steam Cleaning in Wolverhampton | ELA Pressure Washing";

const pageDescription =
  "Professional exterior steam cleaning in Wolverhampton and the West Midlands. Van-mounted equipment for paving, commercial areas and stubborn grime. Request a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services/steam-cleaning",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/steam-cleaning",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing exterior steam cleaning services",
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

const applications = [
  {
    title: "Patios, Paving & Hard Surfaces",
    description:
      "Heat-assisted cleaning can help loosen accumulated dirt, grime and certain stubborn deposits on suitable outdoor paving. We assess the surface before deciding whether steam cleaning is appropriate.",
  },
  {
    title: "Commercial Entrances & Walkways",
    description:
      "Busy entrances, forecourts and pedestrian areas can become affected by everyday grime and surface contamination. Professional steam cleaning may provide an effective approach for suitable commercial surfaces.",
  },
  {
    title: "Grease & Stubborn Contamination",
    description:
      "Some oily or greasy deposits are difficult to address using cold water alone. High-temperature cleaning can help loosen certain deposits, although results depend on the material and type of contamination.",
  },
  {
    title: "Chewing Gum Removal",
    description:
      "Discarded chewing gum can become firmly attached to pavements and other hard surfaces. Specialist heat-assisted cleaning techniques may help remove gum from appropriate exterior areas.",
  },
];

const advantages = [
  {
    title: "Heat-Assisted Cleaning",
    description:
      "High-temperature water or steam can help soften and loosen certain deposits that are difficult to remove with cold-water cleaning.",
  },
  {
    title: "Adaptable Cleaning Pressure",
    description:
      "Pressure must be selected according to the material and condition of the surface. Heat alone does not make a cleaning method suitable for every surface.",
  },
  {
    title: "Specialist Van-Mounted Equipment",
    description:
      "ELA uses van-mounted cleaning systems that can operate at high or low pressure and are equipped to work without an external water or electricity supply.",
  },
  {
    title: "Residential & Commercial Work",
    description:
      "Steam cleaning may be appropriate for selected surfaces at homes, business premises and other exterior locations throughout the service area.",
  },
];

const cleaningSteps = [
  {
    number: "01",
    title: "Discuss the Work",
    description:
      "Tell us which surfaces need cleaning, the type of contamination and where the property is located. Photographs can help with an initial assessment.",
  },
  {
    number: "02",
    title: "Choose the Method",
    description:
      "We consider the material, surface condition, access and cleaning requirements before recommending steam cleaning or another suitable technique.",
  },
  {
    number: "03",
    title: "Carry Out the Cleaning",
    description:
      "The agreed cleaning method is used to address the contamination, with equipment settings and any additional treatment selected for the particular job.",
  },
];

const faqs = [
  {
    question:
      "What is the difference between steam cleaning and pressure washing?",
    answer:
      "Conventional pressure washing primarily uses water pressure to remove surface dirt and deposits. Steam or high-temperature cleaning also uses heat to help loosen certain types of contamination. The appropriate method depends on the surface material and the work required.",
  },
  {
    question: "Is steam cleaning suitable for patios and driveways?",
    answer:
      "Some patio and driveway surfaces may be suitable for heat-assisted cleaning, but suitability depends on the material, condition, jointing and any existing coatings or sealants. Not every paved surface should be cleaned using high temperatures.",
  },
  {
    question: "Can steam cleaning remove chewing gum?",
    answer:
      "Specialist heat-assisted cleaning may help soften and remove chewing gum from suitable hard surfaces. The results depend on the surface and how firmly the gum has become embedded.",
  },
  {
    question: "Can steam cleaning remove oil and grease stains?",
    answer:
      "Heat can help loosen certain oily or greasy deposits, sometimes alongside additional cleaning treatments. Complete stain removal cannot always be guaranteed, particularly where contamination has penetrated porous materials.",
  },
  {
    question: "Does steam cleaning always work without chemicals?",
    answer:
      "Not necessarily. Some cleaning jobs can be completed using heated water without additional chemical treatments, while others may benefit from an appropriate cleaning product. This depends on the contamination and surface involved.",
  },
  {
    question: "Does steam cleaning disinfect exterior surfaces?",
    answer:
      "Steam cleaning can expose surfaces to high temperatures, but this does not automatically establish that a particular cleaning process achieves disinfection. We do not guarantee sterilisation or a specified level of microbial reduction without an appropriately validated process.",
  },
  {
    question: "Do you need access to our water or electricity?",
    answer:
      "ELA's van-mounted equipment is designed to operate without relying on an external water or electricity supply. Any site-specific access or operational requirements can be confirmed when arranging a quotation.",
  },
  {
    question: "Can steam cleaning damage exterior surfaces?",
    answer:
      "Unsuitable temperatures, pressure settings or cleaning techniques can damage certain surfaces, coatings and jointing materials. We consider the material and its condition before deciding whether heat-assisted cleaning is appropriate.",
  },
  {
    question: "How much does professional steam cleaning cost?",
    answer:
      "Pricing depends on the surface area, material, type of contamination, access arrangements and any additional treatment required. Contact ELA Pressure Washing with details of the work to request a quotation.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "ELA Pressure Washing provides exterior steam cleaning services in Wolverhampton and across the West Midlands. Contact us with your location and project details to discuss availability.",
  },
];

export default function SteamCleaningPage() {
  return (
    <>
      {/* Hero */}
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
                Steam Cleaning
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Specialist High-Temperature Exterior Cleaning
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Professional Steam Cleaning in Wolverhampton
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Tackle stubborn exterior grime with professional steam cleaning
              from ELA Pressure Washing.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Using specialist van-mounted equipment, we provide heat-assisted
              exterior cleaning for suitable residential and commercial surfaces
              across Wolverhampton and the West Midlands.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Request a Steam Cleaning Quote
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
              Exterior Steam Cleaning
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              When conventional cleaning needs a helping hand
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Outdoor surfaces can accumulate years of dirt, grime, organic
              growth and stubborn deposits. While conventional pressure washing
              is effective for many cleaning tasks, some types of contamination
              benefit from the addition of heat.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Professional steam cleaning uses specialist equipment to deliver
              high-temperature cleaning. Heat can help loosen particular
              deposits and support their removal from suitable exterior
              surfaces.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              ELA Pressure Washing provides high- and low-pressure steam
              cleaning, selecting the approach according to the material,
              surface condition and work involved.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {applications.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-8"
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

      {/* Equipment */}
      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Specialist Cleaning Equipment
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Professional van-mounted steam cleaning
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Effective exterior cleaning requires more than simply applying as
              much pressure as possible. Equipment choice, temperature and
              cleaning technique all play important roles.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              ELA operates specialist van-mounted systems capable of high- and
              low-pressure steam cleaning. Our equipment is designed to operate
              without requiring an external water or electricity supply.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              This allows us to discuss a range of residential and commercial
              exterior cleaning requirements, including sites where access to
              utilities may be limited.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
            >
              Explore all our cleaning services
            </Link>
          </div>

          <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">
              Our Equipment & Approach
            </p>

            <h3 className="text-2xl font-bold">The right tools for the job</h3>

            <p className="mt-5 leading-8 text-slate-200">
              We consider the characteristics of each surface before deciding
              whether high-temperature cleaning is appropriate.
            </p>

            <ul className="mt-7 space-y-5 text-slate-200">
              {[
                "Specialist van-mounted equipment",
                "High- and low-pressure steam cleaning",
                "Heat-assisted removal of suitable deposits",
                "Methods selected for each surface",
                "Residential and commercial applications",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 font-bold text-sky-300"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Steam vs Pressure Washing */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Understanding the Difference
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Steam cleaning or pressure washing?
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Both methods can be valuable for exterior cleaning, but the most
              suitable choice depends on the surface and type of contamination.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
                Water Pressure
              </p>

              <h3 className="text-2xl font-bold">
                Conventional Pressure Washing
              </h3>

              <p className="mt-5 leading-8 text-slate-700">
                Pressure washing uses the force of water to remove accumulated
                dirt and surface deposits.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                It can be effective on suitable hard-wearing materials such as
                concrete and some paving, provided the pressure and technique
                are appropriate.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">
                Water Pressure & Heat
              </p>

              <h3 className="text-2xl font-bold">
                High-Temperature Steam Cleaning
              </h3>

              <p className="mt-5 leading-8 text-slate-200">
                Steam or high-temperature cleaning introduces heat as another
                factor in removing stubborn surface contamination.
              </p>

              <p className="mt-4 leading-8 text-slate-200">
                Heat can help soften particular deposits, including some greasy
                residues and chewing gum, but must be used appropriately for the
                surface.
              </p>
            </article>
          </div>

          <p className="mt-8 max-w-3xl leading-8 text-slate-700">
            Neither method is automatically better for every job. Some surfaces
            are sensitive to heat, pressure or both. We consider these factors
            when discussing the work required.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Why Choose Professional Steam Cleaning?
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A specialist approach to exterior cleaning
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              ELA combines equipment capability with consideration of the
              surfaces and contamination involved.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm sm:p-8"
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

      {/* Process */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Our Cleaning Process
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What to expect from our steam cleaning service
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Every cleaning project begins with understanding the surface and
              the results you are looking for.
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

      {/* Commercial CTA */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">
                Commercial Steam Cleaning
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Specialist cleaning for business premises
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-200">
                Busy commercial locations can develop stubborn deposits around
                entrances, forecourts, paved walkways and other frequently used
                areas.
              </p>

              <p className="mt-4 leading-8 text-slate-200">
                ELA can discuss steam cleaning and other specialist methods for
                suitable commercial exterior surfaces, taking account of site
                access and operational requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 sm:p-10">
              <h3 className="text-2xl font-bold">
                Need cleaning at your premises?
              </h3>

              <p className="mt-5 leading-8 text-slate-200">
                Let us know the location, surface type, approximate area and
                contamination requiring attention.
              </p>

              <Link
                href="/services/commercial-pressure-washing"
                className="mt-6 inline-flex font-semibold text-sky-300 underline underline-offset-4 hover:text-sky-200"
              >
                Explore commercial pressure washing
              </Link>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Request a Commercial Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-slate-100 py-16 text-slate-900 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Local Steam Cleaning Services
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Steam Cleaning Across Wolverhampton and the West Midlands
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              ELA Pressure Washing provides professional exterior steam cleaning
              for residential and commercial customers throughout Wolverhampton
              and the wider West Midlands.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Whether you need a paved area cleaned, help with stubborn exterior
              contamination or advice on specialist cleaning methods, contact us
              with details of your project.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
            >
              Request a Steam Cleaning Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Steam Cleaning FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700">
              Common questions about exterior steam cleaning, suitable surfaces,
              equipment and quotations.
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

      {/* Final CTA */}
      <section className="bg-slate-100 py-20 text-slate-900">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Need professional exterior steam cleaning?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Contact ELA Pressure Washing to discuss your property, the surface
            requiring cleaning and whether specialist steam cleaning may be
            suitable.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-7 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Request Your Steam Cleaning Quote
          </Link>

          <div className="mt-10 border-t border-slate-300 pt-8">
            <p className="mb-4 font-semibold">Explore our related services</p>

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
                href="/services/commercial-pressure-washing"
                className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
              >
                Commercial Pressure Washing
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
