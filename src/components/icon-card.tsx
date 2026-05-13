import Image from "next/image";

type IconCardProps = {
  title: string;
  description: string | string[];
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
};

/**
 * Figma advantage card: vertical left border 2px @ #424242,
 * background #201F1F, desktop frame 384x247, padding ~32px.
 */
export function IconCard({
  title,
  description,
  iconSrc,
  iconWidth,
  iconHeight,
}: IconCardProps) {
  const descriptionLines = Array.isArray(description) ? description : [description];

  return (
    <article className="motion-card w-full border-l-2 border-white/12 bg-[#201F1F] px-7 py-7 text-left lg:h-[247px] lg:w-[384px] lg:px-8 lg:py-8">
      <Image
        src={iconSrc}
        alt=""
        width={iconWidth}
        height={iconHeight}
        unoptimized
        className="mb-6 h-10 w-10 object-contain opacity-90"
      />
      <h3 className="font-display text-[24px] font-bold uppercase leading-[1.5] tracking-[-0.04em] text-white sm:text-[28px] lg:text-[24px]">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-6 font-light text-white/55 lg:text-[12px] lg:leading-[17px]">
        {descriptionLines.map((line) => (
          <span key={line} className="block lg:whitespace-nowrap">
            {line}
          </span>
        ))}
      </p>
    </article>
  );
}
