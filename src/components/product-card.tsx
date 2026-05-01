import Image from "next/image";

type ProductCardProps = {
  title: string;
  region: string;
  price: string;
  image: string;
  highlight: string;
};

export function ProductCard({
  title,
  region,
  price,
  image,
  highlight,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-[rgba(44,33,28,0.08)] bg-white/90 shadow-[0_18px_40px_rgba(77,54,44,0.08)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#eadccf]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
          {highlight}
        </span>
      </div>
      <div className="space-y-3 p-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
            {region}
          </p>
          <h3 className="font-display text-2xl font-semibold">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">{price}</p>
          <a
            href="#"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-burgundy)]"
          >
            View Details
          </a>
        </div>
      </div>
    </article>
  );
}
