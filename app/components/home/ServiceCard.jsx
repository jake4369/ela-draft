import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  href,
}) {
  return (
    <Link
      href={href}
      className="
        group flex h-full min-w-0 flex-col
        overflow-hidden rounded-2xl
        border border-slate-200 bg-white
        transition-colors duration-200
        hover:border-[#086bd4]/50
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#086bd4]
      "
    >
      {/* Service photograph */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading="lazy"
          quality={65}
          sizes="
    (max-width: 639px) calc(100vw - 40px),
    (max-width: 1023px) calc((100vw - 88px) / 2),
    (max-width: 1279px) calc((100vw - 144px) / 3),
    379px
  "
          className="object-cover object-center"
        />
      </div>

      {/* Service information */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-[#06152c]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

        {/* Service link */}
        <span
          className="
            mt-auto inline-flex items-center gap-2 pt-5
            text-sm font-semibold text-[#086bd4]
          "
        >
          Explore {title}
          <IconArrowUpRight
            size={18}
            stroke={1.8}
            className="shrink-0"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
