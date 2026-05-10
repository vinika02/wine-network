import Image from "next/image";

import { ClosingCtaV2 } from "@/components/closing-cta-v2";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";
import { aboutStats, transformationCards } from "@/lib/about-data";

const aboutImages = {
  founder: "/images/about/container-thomas.png",
  vineyard: "/images/about/frame-2085665953.png",
  sentosa: "/images/about/image-40.svg",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#151515] text-white">
      <div className="relative isolate">
        <Navbar />
        <main className="relative z-10 pt-[105px]">
          <VintageSection />
          <ScrollReveal>
            <WorldSection />
          </ScrollReveal>
          <ScrollReveal delay={80} variant="scale">
            <SentosaSection />
          </ScrollReveal>
          <ScrollReveal>
            <TransformationSection />
          </ScrollReveal>
          <ScrollReveal variant="fade">
            <CtaSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function VintageSection() {
  return (
    <section className="relative px-6 pb-20 pt-8 sm:px-10 lg:h-[623px] lg:px-0 lg:pb-0 lg:pt-[21px]">
      <div className="relative mx-auto flex max-w-[1283px] flex-col gap-12 lg:h-[543px] lg:block">
        <div className="about-vintage-image lg:absolute lg:left-[32px] lg:top-[-15px] lg:w-[585px]">
          <FigureCard src={aboutImages.founder} name="Thomas Teo" priority />
        </div>
        <div className="about-vintage-copy max-w-[620px] lg:absolute lg:left-[579px] lg:top-[82px] lg:h-[313px] lg:w-[620px]">
          <AboutIntroHeading />
          <div className="about-vintage-body mt-[22px] space-y-[20px] font-display text-[13px] leading-[1.42] tracking-[-0.04em] text-white/60 lg:text-[14px]">
            <p className="about-vintage-paragraph">
              The Wine Network story began around a table shared by friends. Founded in 2001 by our
              Chairman Emeritus, Mr. Thomas Teo, we started as a humble community of enthusiasts
              bound by a singular passion for the vine.
            </p>
            <p className="about-vintage-paragraph about-vintage-paragraph-2">
              As a true pioneer of the Singapore hospitality scene, Mr. Teo saw potential where
              others saw a smattering of rug and antique shops, establishing our first wine bar in
              the then-rustic enclave of Dempsey. That first pour sparked a movement, transforming a
              quiet corner of Singapore into a premier destination for epicureans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutIntroHeading() {
  return (
    <div className="font-display tracking-[-0.04em]">
      <div className="flex flex-wrap items-baseline gap-x-6 uppercase">
        <span className="text-[42px] font-light leading-none text-[#616161] lg:text-[56px]">
          Our
        </span>
        <h1 className="text-[38px] font-bold leading-none text-white lg:text-[56px]">Vintage</h1>
      </div>
      <p className="mt-[18px] text-[18px] font-medium leading-none text-white lg:text-[24px]">
        Where Heritage Meets Hospitality
      </p>
    </div>
  );
}

function WorldSection() {
  return (
    <section className="about-world-bg relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:h-[671px] lg:px-[78px] lg:py-[80px]">
      <div className="relative z-10 mx-auto grid max-w-[1286px] gap-12 lg:grid-cols-[560px_460px] lg:items-center lg:justify-between lg:gap-12">
        <div>
          <SplitHeading muted="From" strong="Across The World" />
          <div className="mt-7 max-w-[560px] space-y-6 font-display text-[13px] leading-[1.45] tracking-[-0.04em] text-white/60 sm:text-[14px]">
            <p>
              Recognizing a gap in the market for both quality and accessibility, we expanded into
              the importing and distribution in 2005.
            </p>
            <p>
              Starting with the bold, sun-drenched profiles of Stellenbosch wines, we later expanded
              to the prestigious hills of Piedmont and riding the wave of the Super Tuscan movement,
              bringing the avant-garde spirit of Italian winemaking to Singapore wine lovers.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-16">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="font-display uppercase">
                <p className="text-[40px] font-bold leading-none tracking-[-0.04em] text-white sm:text-[42px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] font-medium leading-none tracking-[-0.04em] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[460/511] w-full max-w-[460px] justify-self-center lg:translate-x-[-28px]">
          <div
            aria-hidden
            className="absolute left-[5%] top-0 h-[91%] w-[95%] border border-white/55"
          />
          <div className="absolute left-0 top-[4%] h-[89%] w-[92%] overflow-hidden">
            <Image
              src={aboutImages.vineyard}
              alt="Wine bottles from Wine Network estates"
              fill
              sizes="(max-width: 1024px) 90vw, 460px"
              className="scale-[1.095] object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SentosaSection() {
  return (
    <section className="bg-[#151515] px-6 py-20 text-center sm:px-10 lg:h-[819px] lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-[1282px] flex-col items-center gap-14">
        <SentosaHeading />
        <Image
          src={aboutImages.sentosa}
          alt="Suburbia dining room"
          width={1102}
          height={369}
          sizes="(max-width: 1200px) 92vw, 1102px"
          className="h-auto w-full max-w-[1102px]"
          unoptimized
        />
        <p className="mx-auto max-w-[928px] font-display text-[14px] leading-[1.45] tracking-[-0.04em] text-white/60 sm:text-[16px]">
          In 2022, we took our expertise to the shores of Sentosa with the launch of Suburbia, a
          full-scale, wine-themed culinary experience. Suburbia was a masterclass in atmospheric
          dining, serving as a vibrant hub and event space.
          <br />
          <br />
          The closure of Suburbia wasn&apos;t an end, but a catalyst for evolution.
        </p>
      </div>
    </section>
  );
}

function SentosaHeading() {
  return (
    <div className="flex min-h-[80px] w-full flex-col items-center justify-center font-display uppercase tracking-[-0.04em]">
      <p className="text-[42px] font-light leading-none text-[#616161] sm:text-[56px]">The</p>
      <h2 className="text-[36px] font-bold leading-none text-white sm:text-[56px]">
        Sentosa Chapter
      </h2>
    </div>
  );
}

function TransformationSection() {
  return (
    <section className="mt-10 bg-[#151515] px-6 py-20 sm:px-10 lg:h-[472px] lg:px-20 lg:py-20">
      <div className="mx-auto max-w-[1282px]">
        <div className="grid gap-8 lg:h-[80px] lg:grid-cols-[613px_613px] lg:items-start lg:justify-between lg:gap-0">
          <TransformationHeading />
          <p className="font-display text-[13px] leading-[1.35] tracking-[-0.04em] text-white/60 sm:text-[14px]">
            Today, the leadership reigns have been passed to our current CEO, Mr. Keith Tan, who
            bring relationships from the South Australian winemaking industry. Under Keith&apos;s
            leadership, Wine Network has pivoted to empowering host restaurants through:
          </p>
        </div>
        <div className="mt-[56px] grid gap-3 lg:grid-cols-2">
          {transformationCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[176px] border border-white/10 bg-transparent px-6 py-8 sm:px-8 lg:h-[176px] lg:px-8 lg:py-8"
            >
              <div className="flex max-w-[502px] flex-col gap-3">
                <Image src={card.iconSrc} alt="" width={32} height={32} className="h-7 w-7" />
                <h3 className="font-display text-[14px] font-bold uppercase leading-[1.5] tracking-[-0.04em] text-white sm:text-[15px]">
                  {card.title}
                </h3>
                <p className="font-display text-[12px] leading-[1.35] tracking-[-0.04em] text-white/60 sm:text-[13px]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationHeading() {
  return (
    <div className="font-display uppercase tracking-[-0.04em]">
      <p className="text-[32px] font-light leading-[0.86] text-[#616161] sm:text-[38px]">Our</p>
      <h2 className="mt-[10px] text-[32px] font-bold leading-[0.86] text-white sm:text-[38px]">
        Transformation
      </h2>
    </div>
  );
}

function CtaSection() {
  return <ClosingCtaV2 />;
}

function FigureCard({
  src,
  name,
  priority,
}: {
  src: string;
  name: string;
  priority?: boolean;
}) {
  return (
    <figure className="about-vintage-figure relative mx-auto aspect-[617/573] w-full max-w-[585px]">
      <Image
        src={src}
        alt={name}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 90vw, 421px"
        className="object-contain"
        unoptimized
      />
    </figure>
  );
}

function SplitHeading({
  muted,
  strong,
  centered,
}: {
  muted: string;
  strong: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`font-display uppercase tracking-[-0.04em] ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <p className="text-[36px] font-light leading-[1.02] text-[#616161] sm:text-[48px]">
        {muted}
      </p>
      <h1 className="text-[34px] font-bold leading-[1.08] text-white sm:text-[42px]">{strong}</h1>
    </div>
  );
}
