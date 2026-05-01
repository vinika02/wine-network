import Image from "next/image";

type HeroBottlesProps = {
  className?: string;
};

export function HeroBottles({ className = "" }: HeroBottlesProps) {
  return (
    <Image
      src="/images/hero/Container.png"
      alt="Curated selection of three private-label wines: Lubanzi, Tignanello, and rosé."
      width={464}
      height={518}
      priority
      sizes="(max-width: 1024px) min(92vw, 464px), 400px"
      className={`h-auto w-full object-contain object-center lg:object-left ${className}`.trim()}
    />
  );
}
