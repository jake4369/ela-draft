import Image from "next/image";
import Link from "next/link";

const pageTitle = "Heritage Brickwork Cleaning in Wolverhampton | ELA";

const pageDescription =
  "Specialist heritage brickwork cleaning in Wolverhampton and the West Midlands. Sensitive cleaning approaches for older masonry and historic brickwork. Request a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services/heritage-brickwork-cleaning",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/heritage-brickwork-cleaning",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing heritage brickwork cleaning",
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

const masonryConsiderations = [
  {
    title: "Traditional Brickwork",
    description:
      "Older bricks can vary considerably in hardness, porosity and condition. Some historic bricks are softer or more vulnerable to aggressive cleaning than modern alternatives. The characteristics of the masonry should be understood before selecting a method.",
  },
  {
    title: "Historic Mortar & Joints",
    description:
      "Traditional buildings may use lime-based mortar and other historic jointing materials. Inappropriate pressure, excessive water or unsuitable treatments can damage weakened joints and affect the surrounding masonry.",
  },
  {
    title: "Weathering & Surface Finishes",
    description:
      "Ageing, previous repairs, historic coatings and natural weathering all affect how brickwork responds to cleaning. Not every stain or alteration in colour should necessarily be removed.",
  },
  {
    title: "Biological Growth & Staining",
    description:
      "Algae, moss, lichen and environmental deposits can accumulate on older walls. Cleaning may be appropriate in some circumstances, but the potential benefits should be balanced against the condition and significance of the surface.",
  },
];

const principles = [
  {
    title: "Understanding the Surface",
    description:
      "Brick type, mortar condition, historic finishes and existing deterioration should be considered before any cleaning method is selected.",
  },
  {
    title: "Selecting Suitable Methods",
    description:
      "Gentler techniques may be more appropriate than conventional high-pressure washing. The lowest-impact effective method should be considered for the particular material.",
  },
  {
    title: "Avoiding Unnecessary Intervention",
    description:
      "Cleaning is not always needed or desirable. Some surface weathering forms part of a building's historic appearance and does not automatically indicate a problem.",
  },
  {
    title: "Recognising Specialist Requirements",
    description:
      "Protected buildings, fragile masonry and significant historic finishes may require advice from a suitably qualified conservation professional before work proceeds.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the Building",
    description:
      "We discuss the property, brickwork condition, areas of concern and cleaning objectives. Any known listing or conservation restrictions should be identified at an early stage.",
  },
  {
    number: "02",
    title: "Consider the Cleaning Approach",
    description:
      "The material, existing condition and type of contamination influence which methods may be suitable. Where appropriate, specialist assessment or a carefully controlled trial may be needed before wider cleaning.",
  },
  {
    number: "03",
    title: "Agree Suitable Work",
    description:
      "Any cleaning proposal should reflect the property's requirements and necessary permissions. Work should proceed only where an appropriate method and scope have been established.",
  },
];

const faqs = [
  {
    question: "Can old brickwork be professionally cleaned?",
    answer:
      "Some older brickwork can be cleaned, but its age, condition, porosity, mortar and historic significance all need consideration. The safest approach may be gentler cleaning, specialist assessment or, in some cases, leaving the surface undisturbed.",
  },
  {
    question: "Is pressure washing safe for heritage brickwork?",
    answer:
      "High-pressure washing can damage soft or weathered bricks and historic mortar. It is not automatically suitable for older masonry. Cleaning methods should be selected after assessing the particular surface, and specialist conservation advice may be necessary.",
  },
  {
    question: "What is the best way to clean Victorian brickwork?",
    answer:
      "There is no single method suitable for all Victorian brickwork. The original materials, condition, previous repairs and type of staining all influence the appropriate approach. A careful assessment is important before deciding whether and how to clean.",
  },
  {
    question: "Can you clean brickwork on a listed building?",
    answer:
      "Cleaning a listed building requires particular care. Listed building consent may be necessary if proposed works would affect its special architectural or historic character. The owner should check with the local planning authority's conservation officer before proceeding. Specialist advice may also be required, and ELA would need to assess whether the proposed work is within its capabilities.",
  },
  {
    question: "Can steam cleaning be used on historic bricks?",
    answer:
      "Heat-assisted cleaning may be suitable for some masonry, but temperature, pressure, moisture exposure and the condition of the material all matter. Steam cleaning should not automatically be assumed safe for historic brickwork.",
  },
  {
    question: "Can you remove algae, moss and lichen?",
    answer:
      "Some biological growth can be addressed using appropriate cleaning methods or treatments. However, removal is not always necessary or desirable, particularly where cleaning could damage fragile historic surfaces.",
  },
  {
    question: "Can you remove staining from old brick walls?",
    answer:
      "Some surface staining may respond to carefully selected cleaning techniques. Results depend on the source of the stain, the brick material and how deeply the contamination has penetrated. Complete removal cannot always be guaranteed.",
  },
  {
    question: "Will cleaning make old brickwork look new?",
    answer:
      "Not necessarily, and making historic brickwork look new is not always an appropriate objective. Natural ageing, variations in colour and historic surface characteristics can contribute to the building's appearance and significance.",
  },
  {
    question: "Do I need permission to clean a historic building?",
    answer:
      "Permission requirements depend on the building's status and the proposed work. Listed building consent may be required for cleaning that affects a listed building's special character. Other restrictions may also apply. Contact the local planning authority or conservation officer before undertaking work where heritage controls may be relevant.",
  },
  {
    question: "How much does heritage brickwork cleaning cost?",
    answer:
      "Costs depend on the building, masonry type, condition, accessibility, contamination, specialist assessments and the proposed cleaning method. Contact ELA Pressure Washing with photographs and details of your property to discuss the requirements.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "ELA Pressure Washing provides exterior cleaning services in Wolverhampton and across the West Midlands. Contact us with your location and property details to discuss whether the proposed work is suitable.",
  },
];

export default function HeritageBrickworkCleaningPage() {
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
                Heritage Brickwork Cleaning
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Specialist Exterior Masonry Care
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Heritage Brickwork Cleaning in Wolverhampton
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Older buildings deserve a thoughtful approach to exterior
              cleaning. ELA Pressure Washing provides heritage brickwork care
              for suitable properties across Wolverhampton and the West
              Midlands.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              From weathered brickwork and accumulated surface grime to organic
              growth, we consider the material and its condition before
              discussing appropriate cleaning options.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discuss Your Brickwork
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
              Heritage Brickwork Care
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Older brickwork needs a different approach
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Historic brickwork is an important part of the character of many
              older buildings throughout Wolverhampton and the West Midlands.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Over time, masonry can develop staining, biological growth and
              changes in appearance caused by weathering and environmental
              exposure. However, not every discolouration needs removing, and
              some cleaning techniques may cause more harm than good.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Unlike many modern hard surfaces, older brickwork may contain
              softer bricks, traditional mortar or historic finishes that
              require additional care. Choosing a suitable cleaning approach
              begins with understanding the materials and their existing
              condition.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {masonryConsiderations.map((item) => (
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

      {/* Cleaning Methods */}
      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Sensitive Cleaning Methods
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Cleaning with the building in mind
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Heritage brickwork should not automatically be treated in the same
              way as modern paving or other hard-wearing surfaces.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Excessive water pressure, inappropriate chemical treatments and
              abrasive techniques can damage vulnerable bricks, mortar joints
              and historic surface finishes.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              A suitable method depends on the condition and characteristics of
              the masonry. Some projects may call for gentle cleaning techniques
              or a controlled trial before wider work is considered.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Where the building is particularly fragile or historically
              significant, advice from a conservation professional may be
              appropriate before any cleaning begins.
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
              Responsible Masonry Care
            </p>

            <h3 className="text-2xl font-bold">
              Preservation comes before appearance
            </h3>

            <p className="mt-5 leading-8 text-slate-200">
              The objective should be to identify suitable cleaning work without
              unnecessarily removing or damaging historic material.
            </p>

            <ul className="mt-7 space-y-5 text-slate-200">
              {[
                "Understand the original masonry materials",
                "Consider existing wear and deterioration",
                "Assess whether cleaning is necessary",
                "Avoid unsuitable pressure and treatments",
                "Recognise when conservation advice is needed",
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

      {/* Principles */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Understanding Historic Masonry
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Important considerations before cleaning
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              The purpose of heritage brickwork cleaning is not simply to make
              an old building look new. The characteristics that give masonry
              its historic appearance also influence how it should be
              maintained.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7 sm:p-8"
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
      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Planning the Work
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What to consider when planning heritage cleaning
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Older properties can present different challenges depending on the
              materials, condition, history and significance of the building.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {process.map((step) => (
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

      {/* Historic England Guidance */}
      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Historic & Listed Buildings
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Understanding heritage responsibilities
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Some older buildings are listed because of their architectural or
              historic importance. Others may be located within conservation
              areas or subject to additional planning restrictions.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Where cleaning would affect a listed building's special character,
              listed building consent may be required before work can begin.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Property owners should check with their local planning authority
              or conservation officer where permissions or restrictions may
              apply.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Particularly sensitive work may also require an independent
              assessment or a contractor with specific conservation expertise.
            </p>
          </div>

          <aside className="rounded-2xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">
              Further Information
            </p>

            <h3 className="text-2xl font-bold">Historic England Guidance</h3>

            <p className="mt-5 leading-8 text-slate-200">
              Historic England provides advice on looking after older masonry
              and the permissions that may apply to protected buildings.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5">
              <Link
                href="https://historicengland.org.uk/advice/your-home/maintain-repair/walls/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-300 underline underline-offset-4 hover:text-sky-200"
              >
                Caring for walls in older buildings
                <span aria-hidden="true"> ↗</span>
              </Link>

              <Link
                href="https://historicengland.org.uk/advice/planning/consents/lbc/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-300 underline underline-offset-4 hover:text-sky-200"
              >
                Listed building consent guidance
                <span aria-hidden="true"> ↗</span>
              </Link>
            </div>

            <p className="mt-8 border-t border-slate-700 pt-6 text-sm leading-6 text-slate-300">
              These resources provide general guidance. The requirements for an
              individual property should be confirmed with the appropriate
              authority or specialist.
            </p>
          </aside>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">
              Local Heritage Brickwork Care
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Heritage Brickwork Cleaning Across Wolverhampton & the West
              Midlands
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              ELA Pressure Washing provides exterior cleaning and specialist
              brickwork care services in Wolverhampton and the wider West
              Midlands.
            </p>

            <p className="mt-4 leading-8 text-slate-200">
              If you are concerned about staining, organic growth or accumulated
              dirt on older brickwork, contact us with details of your property.
            </p>

            <p className="mt-4 leading-8 text-slate-200">
              Please mention if the building is listed, has historic finishes or
              is subject to known conservation requirements.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Enquire About Brickwork Cleaning
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
              Heritage Brickwork Cleaning FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700">
              Common questions about cleaning older brickwork, historic
              materials, suitable methods and conservation considerations.
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
            Looking after an older brickwork property?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Contact ELA Pressure Washing to discuss the building, condition of
            the brickwork and whether an appropriate cleaning approach may be
            available.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-7 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Request a Heritage Brickwork Quote
          </Link>

          <div className="mt-10 border-t border-slate-300 pt-8">
            <p className="mb-4 font-semibold">Explore our related services</p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <Link
                href="/services/steam-cleaning"
                className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
              >
                Professional Steam Cleaning
              </Link>

              <Link
                href="/services/commercial-pressure-washing"
                className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
              >
                Commercial Exterior Cleaning
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
