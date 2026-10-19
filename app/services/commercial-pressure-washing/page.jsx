import Image from "next/image";
import Link from "next/link";

const pageTitle = "Commercial Pressure Washing in Wolverhampton | ELA";

const pageDescription =
  "Commercial pressure washing and exterior cleaning in Wolverhampton and the West Midlands. Forecourts, paving, entrances and more. Request a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services/commercial-pressure-washing",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/commercial-pressure-washing",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing commercial exterior cleaning",
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

const commercialAreas = [
  {
    title: "Commercial Forecourts & Car Parks",
    description:
      "Vehicle traffic and everyday use can leave forecourts, parking areas and other hardstanding surfaces affected by dirt, staining and organic growth. Professional cleaning may help improve the appearance of suitable areas, depending on the material, condition and access requirements.",
  },
  {
    title: "Business Entrances & Walkways",
    description:
      "Entrances, pedestrian routes and paved areas are often among the first things visitors notice. We can assess suitable cleaning methods for external approaches, walkways and other frequently used hard surfaces.",
  },
  {
    title: "Commercial Paving & Outdoor Areas",
    description:
      "Paved outdoor spaces can accumulate moss, algae, grime and other surface contamination. Cleaning methods should be selected according to the paving material, its condition and how the area is used.",
  },
  {
    title: "Exterior Walls & Masonry",
    description:
      "Brickwork, concrete and other exterior building surfaces can become discoloured by weathering and accumulated contamination. Some materials require gentler cleaning methods or specialist treatments rather than conventional high-pressure washing.",
  },
];

const specialistServices = [
  {
    title: "Pressure Washing",
    description:
      "Professional pressure washing can remove accumulated dirt and grime from suitable hard-wearing commercial surfaces. The appropriate pressure and cleaning method depend on the material and its condition.",
  },
  {
    title: "Steam Cleaning",
    description:
      "High-temperature cleaning methods may be useful for certain stubborn deposits, including grease and surface contamination. Suitability depends on the material, access and nature of the work.",
  },
  {
    title: "Graffiti Removal",
    description:
      "Unwanted graffiti can affect the appearance of exterior walls and business premises. Specialist removal methods may help address markings while taking account of the underlying surface.",
  },
  {
    title: "Chewing Gum Removal",
    description:
      "Discarded chewing gum is a common problem around busy entrances, pavements and pedestrian areas. Specialist cleaning techniques can help remove gum from suitable hard surfaces.",
  },
];

const workingProcess = [
  {
    number: "01",
    title: "Discuss Your Requirements",
    description:
      "Tell us about the commercial premises, the areas requiring cleaning and any operational or access considerations. Photographs and site details can help establish the initial scope.",
  },
  {
    number: "02",
    title: "Assess the Work",
    description:
      "We consider the surface materials, condition, contamination, accessibility and site requirements before discussing suitable cleaning methods and a quotation.",
  },
  {
    number: "03",
    title: "Plan the Cleaning",
    description:
      "Cleaning arrangements should take account of how the premises are used, including access for staff, customers, vehicles and other site users. The agreed scope and timing depend on the individual project.",
  },
];

const faqs = [
  {
    question: "What types of commercial premises can you clean?",
    answer:
      "ELA Pressure Washing can discuss exterior cleaning requirements for a range of commercial properties, including retail premises, business entrances, car parks, forecourts and other suitable outdoor areas. Whether a particular project can be undertaken depends on its location, surfaces, accessibility and scope.",
  },
  {
    question: "Can commercial pressure washing remove oil and grease?",
    answer:
      "Certain oil and grease deposits may respond to professional pressure washing, steam cleaning or specialist treatments. Results depend on the surface material, the nature of the contamination and how deeply it has penetrated. Complete stain removal cannot always be guaranteed.",
  },
  {
    question: "Can you clean business entrances and pedestrian areas?",
    answer:
      "Suitable external entrances, paved walkways and pedestrian areas can benefit from professional cleaning. The method and work arrangements depend on the surface, level of foot traffic and whether access can be managed appropriately during the work.",
  },
  {
    question: "Can cleaning take place outside normal business hours?",
    answer:
      "If your premises have particular operational or access requirements, please mention these when requesting a quotation. Scheduling options can be discussed, subject to availability and the requirements of the work.",
  },
  {
    question: "Can you provide regular commercial cleaning?",
    answer:
      "If you are interested in repeat cleaning or ongoing exterior maintenance, contact ELA with details of the premises and your requirements. Any recurring arrangements would need to be discussed and agreed.",
  },
  {
    question: "Do you offer graffiti and chewing gum removal?",
    answer:
      "ELA Pressure Washing also offers specialist graffiti and chewing gum removal services for suitable surfaces. The cleaning method depends on the type of contamination, surface material and condition.",
  },
  {
    question: "Is pressure washing suitable for every exterior surface?",
    answer:
      "No. Some masonry, paving and other exterior materials can be damaged by excessive pressure or unsuitable cleaning techniques. We consider the type and condition of the surface before recommending a suitable method.",
  },
  {
    question: "How much does commercial pressure washing cost?",
    answer:
      "The cost varies according to the size of the area, surface material, type of contamination, access arrangements and any additional treatments required. Contact ELA Pressure Washing with details of your premises to request a quotation.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "ELA Pressure Washing provides exterior cleaning services in Wolverhampton and across the West Midlands. Contact us with your business location and the work required to discuss availability.",
  },
];

export default function CommercialPressureWashingPage() {
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
                Commercial Pressure Washing
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Commercial & Professional Exterior Cleaning
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Commercial Pressure Washing in Wolverhampton
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Professional exterior cleaning for business premises, commercial
              surfaces and outdoor spaces across Wolverhampton and the West
              Midlands.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              From commercial paving and forecourts to entrances, walkways and
              exterior masonry, ELA Pressure Washing helps businesses tackle
              accumulated dirt, grime and unwanted surface contamination.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Request a Commercial Quote
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
              Commercial Exterior Cleaning
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A cleaner exterior for your business premises
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Exterior areas are an important part of how a commercial property
              looks and functions. Entrances, pathways, paved areas and
              forecourts are exposed to everyday use, changing weather
              conditions and accumulated dirt.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Over time, these surfaces can become affected by algae, moss,
              staining and other contamination. Professional cleaning can help
              improve their appearance and support ongoing property maintenance.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              ELA Pressure Washing provides commercial exterior cleaning using
              methods selected according to the surface, its condition and the
              work required.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {commercialAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-8"
              >
                <h3 className="text-xl font-bold">{area.title}</h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Surface Assessment */}
      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Professional Cleaning Methods
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The right approach for commercial surfaces
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Commercial exterior cleaning can involve a wide range of surfaces,
              from concrete hardstanding and block paving to brickwork and more
              delicate materials.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Not every surface is suitable for the same cleaning pressure or
              treatment. The material, its condition and the type of
              contamination all need to be considered before selecting an
              appropriate approach.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              ELA provides high-pressure washing, steam cleaning, soft washing
              and specialist treatments for suitable exterior surfaces.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
            >
              Explore all exterior cleaning services
            </Link>
          </div>

          <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">
              Commercial Cleaning Considerations
            </p>

            <h3 className="text-2xl font-bold">
              More than just cleaning the surface
            </h3>

            <p className="mt-5 leading-8 text-slate-200">
              Cleaning commercial premises often requires additional planning
              around the site itself.
            </p>

            <ul className="mt-7 space-y-5 text-slate-200">
              {[
                "Surface materials and existing condition",
                "Access for staff, visitors and vehicles",
                "The type and extent of contamination",
                "Appropriate cleaning techniques and treatments",
                "Working arrangements and site requirements",
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

      {/* Specialist Services */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Specialist Commercial Cleaning
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Commercial cleaning for different requirements
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Different types of contamination require different cleaning
              techniques. Alongside conventional pressure washing, ELA offers
              specialist exterior cleaning services that may be suitable for
              commercial properties.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {specialistServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 p-7 sm:p-8"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 p-8 text-white sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold">
                  Have a specialist cleaning requirement?
                </h3>

                <p className="mt-3 leading-7 text-slate-200">
                  Tell us about the surface, type of contamination and the work
                  required. We can discuss whether a suitable cleaning service
                  is available.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Planning Commercial Cleaning
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              From enquiry to cleaning
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Commercial premises vary considerably in size, layout and
              day-to-day use. Understanding the site and the work required helps
              establish a suitable approach before cleaning begins.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {workingProcess.map((step) => (
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

      {/* Business Operations */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Business & Property Maintenance
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Cleaning around your business requirements
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              For many businesses, exterior areas need to remain accessible to
              staff, customers, deliveries or vehicles throughout the working
              day.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Commercial cleaning arrangements should therefore take account of
              access, pedestrian movements and any site-specific restrictions.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              When requesting a quotation, let us know about opening hours,
              accessibility and any scheduling requirements. These can be
              discussed alongside the cleaning work, subject to availability and
              suitable site arrangements.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold">
              Managing a commercial property?
            </h3>

            <p className="mt-5 leading-8 text-slate-200">
              Whether you are responsible for business premises, retail space or
              shared outdoor areas, we can discuss exterior cleaning needs for
              suitable surfaces.
            </p>

            <p className="mt-4 leading-8 text-slate-200">
              For an initial enquiry, it helps to provide the property location,
              areas requiring cleaning, approximate surface sizes and any access
              restrictions.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Request a Commercial Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Commercial Pressure Washing Across Wolverhampton & the West
              Midlands
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              ELA Pressure Washing provides professional exterior cleaning
              services in Wolverhampton and across the wider West Midlands.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-200">
              If you manage a commercial property and need help with dirty
              paving, forecourts, entrances or other exterior surfaces, contact
              us with the details of your project.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get in Touch
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
              Commercial Pressure Washing FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700">
              Common questions about commercial exterior cleaning, suitable
              surfaces, scheduling and quotations.
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
            Need professional commercial exterior cleaning?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Contact ELA Pressure Washing to discuss your premises, the surfaces
            requiring attention and the cleaning work needed. Request a
            quotation for your commercial property.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-7 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Request Your Commercial Cleaning Quote
          </Link>

          <div className="mt-10 border-t border-slate-300 pt-8">
            <p className="mb-4 font-semibold text-slate-900">
              Explore our other cleaning services
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
                href="/services/roof-cleaning"
                className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
              >
                Roof Cleaning
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
