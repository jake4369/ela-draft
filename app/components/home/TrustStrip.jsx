import { IconBuildings, IconDroplets, IconTools } from "@tabler/icons-react";

const trustItems = [
  {
    title: "Residential & Commercial",
    icon: IconBuildings,
  },
  {
    title: "Specialist Cleaning Methods",
    icon: IconDroplets,
  },
  {
    title: "Sealing & Surface Repairs",
    icon: IconTools,
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Key business highlights"
      className="border-t border-white/10 bg-[#071a36] text-white"
    >
      <div
        className="
          mx-auto max-w-7xl
          px-5 py-4
          sm:px-8 sm:py-4
          lg:px-12 lg:py-5
        "
      >
        <ul
          className="
            mx-auto grid max-w-[340px] gap-y-1
            sm:max-w-none sm:grid-cols-3
            sm:gap-x-0 sm:gap-y-0
          "
        >
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="
                  flex items-center gap-4 py-2
                  text-base font-semibold text-blue-50

                  sm:flex-col sm:justify-start
                  sm:gap-2 sm:border-l sm:border-white/15
                  sm:px-3 sm:py-0 sm:text-center
                  sm:text-sm sm:first:border-l-0

                  lg:text-base
                "
              >
                {/* Icon container */}
                <span
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-xl bg-[#14385d]

                    sm:h-8 sm:w-8
                    sm:rounded-none sm:bg-transparent
                  "
                >
                  <Icon
                    size={28}
                    stroke={1.8}
                    className="
                      text-[#79baff]
                      sm:h-8 sm:w-8
                    "
                    aria-hidden="true"
                  />
                </span>

                {/* Trust indicator label */}
                <span className="leading-6">{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
