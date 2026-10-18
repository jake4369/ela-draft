import { IconQuote, IconExternalLink } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Noble Lofts ltd",
    quote:
      "Fantastic results. We have recently had our drive and roof steam cleaned and the results are amazing!! It's completely transformed our house. Tom offers a very unique service with the equipment he uses and the knowledge he has. The team at ELA were professional and courteous of our neighbours. We will definitely be using this company again in the future. Thanks, guys.",
    platform: "Google",
    url: "https://www.google.com/search?q=ela+pressure+washing#lrd=0xa6c635d2f92547ed:0x75a4a18b2732ada8,1,,,,",
  },
  {
    name: "AndrewG-1288",
    quote:
      "Can’t speak highly enough of Tom. Completely changed the look of our drive from terracotta red to slate grey. Nothing was too much trouble, and he bent over backwards to make sure we were happy with everything. We’ll be using Tom for all our cleaning of patio, etc. Lovely man would 100% recommend.",
    platform: "Yell",
    url: "https://www.yell.com/reviews/user/AndrewG-1288",
  },
  {
    name: "AnnM-665",
    quote:
      "Tom has done a fantastic job cleaning my rear patio and then cleaning and resealing/painting my drive. He’s a lovely young man and worked hard doing a great job. Highly recommend.",
    platform: "Yell",
    url: "https://www.yell.com/reviews/user/AnnM-665",
  },
];

function ReviewSourceLink({ review, featured = false }) {
  return (
    <a
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View review on ${review.platform} by ${review.name} (opens in a new tab)`}
      className={`inline-flex w-fit items-center gap-1.5 text-sm font-medium transition-colors focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 ${
        featured
          ? "text-blue-200 hover:text-white"
          : "text-[#006bd6] hover:text-[#06152c]"
      }`}
    >
      <span>View review on {review.platform}</span>
      <IconExternalLink size={15} stroke={1.8} aria-hidden="true" />
    </a>
  );
}

function FeaturedReview({ review }) {
  return (
    <figure className="flex h-full min-w-0 flex-col rounded-2xl border border-[#18365a] border-t-[3px] border-t-[#0074e4] bg-[#06152c] p-6 text-white shadow-[0_12px_28px_rgba(6,21,44,0.08)] sm:p-8">
      <IconQuote
        size={36}
        stroke={1.7}
        className="mb-6 text-[#78baff]"
        aria-hidden="true"
      />

      <blockquote>
        <p className="text-pretty text-base leading-8 text-slate-100">
          {review.quote}
        </p>
      </blockquote>

      <figcaption className="mt-auto pt-8">
        <div className="border-t border-white/15 pt-5">
          <p className="font-semibold text-white">{review.name}</p>

          <div className="mt-2">
            <ReviewSourceLink review={review} featured />
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function SupportingReview({ review }) {
  return (
    <figure className="flex min-w-0 flex-col rounded-2xl border border-[#dce6f1] bg-white p-6 sm:p-7">
      <IconQuote
        size={28}
        stroke={1.7}
        className="mb-4 text-[#0074e4]"
        aria-hidden="true"
      />

      <blockquote>
        <p className="text-pretty text-[15px] leading-7 text-[#405371]">
          {review.quote}
        </p>
      </blockquote>

      <figcaption className="mt-auto pt-5">
        <div className="border-t border-[#e2e9f2] pt-4">
          <p className="font-semibold text-[#06152c]">{review.name}</p>

          <div className="mt-2">
            <ReviewSourceLink review={review} />
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#f3f7fb] py-16 sm:py-20 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#006bd6]">
            Customer Testimonials
          </p>

          <h2
            id="testimonials-heading"
            className="mt-5 text-pretty text-3xl font-bold tracking-tight text-[#06152c] sm:text-4xl lg:text-5xl"
          >
            Don't just take our word for it.
          </h2>

          <p className="mt-6 text-pretty text-base leading-7 text-[#405371] sm:text-lg sm:leading-8">
            Hear from customers who have experienced ELA's work first-hand.
          </p>
        </div>

        {/* Featured + supporting reviews */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FeaturedReview review={testimonials[0]} />

          <div className="grid min-w-0 gap-6">
            {testimonials.slice(1).map((review) => (
              <SupportingReview key={review.name} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
