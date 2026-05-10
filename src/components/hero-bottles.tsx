import Image from "next/image";

type HeroBottlesProps = {
  className?: string;
};

export function HeroBottles({ className = "" }: HeroBottlesProps) {
  return (
    <Image
      src="/images/hero/newwinesc.png"
      alt="Curated selection of three private-label wines."
      width={464}
      height={518}
      priority
      sizes="(max-width: 640px) min(86vw, 320px), (max-width: 1024px) 400px, 464px"
      className={`h-auto w-full object-contain object-center ${className}`.trim()}
    />
  );
}
