import { IconDroplets, IconTools } from "@tabler/icons-react";

const serviceGroups = [
  {
    id: "specialist-cleaning",
    number: "01",
    title: "Specialist Cleaning & Treatments",
    description:
      "Targeted cleaning methods and treatments for surfaces requiring a more considered approach.",
    services: [
      {
        title: "Gutter Cleaning",
        description:
          "Removal of accumulated leaves, moss and debris from suitable gutters using specialist gutter vacuum equipment, helping maintain rainwater flow and reduce the risk of blockages.",
      },
      {
        title: "Soft Washing",
        description:
          "A lower-pressure cleaning approach using appropriate treatments for more delicate surfaces, including selected roofs, rendered walls and painted exteriors.",
      },
      {
        title: "Biocide Treatments",
        description:
          "Specialist treatments used where suitable to address moss, algae, lichen and other organic growth, helping to discourage regrowth over time.",
      },
      {
        title: "Chemical Treatments",
        description:
          "Targeted cleaning treatments for stubborn staining and contamination, with products selected according to the material, its condition and the work required.",
      },
      {
        title: "New-Build Brickwork & Acid Cleaning",
        description:
          "Cleaning for mortar residue, cement staining and construction-related marks on suitable new-build surfaces, including specialist acid treatments where appropriate.",
      },
      {
        title: "Graffiti Removal",
        description:
          "Specialist removal of unwanted markings from suitable walls, shutters, masonry and other exterior surfaces, using methods appropriate for the underlying material.",
      },
      {
        title: "Chewing Gum Removal",
        description:
          "Removal of stubborn chewing gum from suitable pavements, entrances, walkways and other high-footfall areas using professional cleaning equipment.",
      },
    ],
  },
  {
    id: "surface-protection",
    number: "02",
    title: "Surface Protection & Repairs",
    description:
      "Additional services to help maintain the appearance, condition and usability of outdoor paving and hard surfaces.",
    services: [
      {
        title: "Driveway & Patio Sealing",
        description:
          "Protective sealing for suitable driveways, patios and paved areas following cleaning, with options selected according to the surface and desired finish.",
      },
      {
        title: "Water-Based Surface Sealing",
        description:
          "An alternative to solvent-based sealers for certain outdoor surfaces, with products chosen to suit the material and required appearance.",
      },
      {
        title: "Patio Repointing",
        description:
          "Removal and replacement of damaged or deteriorating jointing material between suitable patio slabs and paving, helping restore a tidy, maintained finish.",
      },
      {
        title: "Driveway Sinkage Lifting",
        description:
          "Assessment and lifting of suitable sunken or uneven driveway paving to help restore a more level, usable surface where reinstatement is appropriate.",
      },
    ],
  },
];

function ServiceGroup({ group }) {
  const isCleaning = group.id === "specialist-cleaning";

  const GroupIcon = isCleaning ? IconDroplets : IconTools;

  return (
    <section
      aria-labelledby={`${group.id}-heading`}
      className={`border-t border-[#dce6f2] py-12 sm:py-14 lg:py-16 ${
        isCleaning ? "bg-[#f6faff]" : "bg-[#eaf3fb]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Group introduction */}
        <div className="relative border-b border-[#cbddeb] pb-7 sm:pb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              {/* Decorative group icon */}
              <div
                aria-hidden="true"
                className="
                  flex size-12 shrink-0 items-center
                  justify-center rounded-xl
                  border border-[#d5e4f3]
                  bg-white text-[#086bd4]
                  sm:size-14
                "
              >
                <GroupIcon size={27} stroke={1.65} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#086bd4]">
                  Service Group {group.number}
                </p>

                <h3
                  id={`${group.id}-heading`}
                  className="
                    mt-2 text-pretty text-2xl
                    font-bold leading-tight tracking-tight
                    text-[#06152c] sm:text-3xl
                  "
                >
                  {group.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  {group.description}
                </p>
              </div>
            </div>

            {/* Group service count */}
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
              {String(group.services.length).padStart(2, "0")} Services
            </p>
          </div>

          {/* Signature blue rule */}
          <span
            aria-hidden="true"
            className="absolute -bottom-px left-0 h-[2px] w-16 bg-[#086bd4]"
          />
        </div>

        {/* Service listings */}
        <ul className="grid gap-x-10 md:grid-cols-2 lg:gap-x-16">
          {group.services.map((service, index) => (
            <li
              key={service.title}
              className="min-w-0 border-b border-[#dbe7f2] py-6 sm:py-7"
            >
              <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-3 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-4">
                <span
                  aria-hidden="true"
                  className="pt-1 text-xs font-bold tabular-nums tracking-[0.08em] text-[#086bd4]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h4 className="text-pretty text-lg font-bold leading-snug tracking-tight text-[#06152c] sm:text-xl">
                    {service.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-[0.975rem]">
                    {service.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function AdditionalServices() {
  return (
    <section
      aria-labelledby="additional-services-heading"
      className="border-t border-[#dce6f2] bg-white"
    >
      {/* Main section introduction */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pb-14 sm:pt-20 lg:px-12 lg:pb-16 lg:pt-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#086bd4]" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#086bd4] sm:text-sm">
              More Ways We Can Help
            </p>
          </div>

          <h2
            id="additional-services-heading"
            className="mt-5 text-pretty text-3xl font-bold leading-tight tracking-tight text-[#06152c] sm:text-4xl lg:text-[2.75rem]"
          >
            Additional{" "}
            <span className="text-[#086bd4]">specialist services.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Beyond our core cleaning services, ELA provides specialist
            treatments, surface protection and maintenance solutions for a wide
            range of exterior surfaces and projects.
          </p>
        </div>
      </div>

      {/* Full-width editorial service groups */}
      {serviceGroups.map((group) => (
        <ServiceGroup key={group.id} group={group} />
      ))}
    </section>
  );
}
