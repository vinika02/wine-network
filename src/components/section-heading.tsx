type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-burgundy)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
