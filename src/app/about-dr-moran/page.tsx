import Image from "next/image";

import { ClosingCta } from "@/components/closing-cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";

const moranImages = {
  pattern: "/images/moran/pattern.png",
  container: "/images/moran/Container.png",
  grapes: "/images/moran/grapes-hands.png",
  vines: "/images/moran/moran-vines.png",
  bbq: "/images/moran/moran-bbq.png",
  table: "/images/moran/moran-table.png",
};

const introCopyLines = [
  "Martin Moran is an Argentinian-born winemaker and research scientist",
  "based in Hahndorf in the Adelaide Hills, where Mordrelle Wines - a family",
  "project co-founded with his wife Michelle and her parents - has been",
  "making wine since 2010. The range spans blanc de blancs sparkling",
  "wine, chardonnay, pinot noir, syrah, barbera, tempranillo, cabernet",
  "sauvignon and rose, all from Adelaide Hills fruit and all defined by one",
  "overriding philosophy: extended time on lees. Where most producers",
  "move wines to bottle as quickly as commercially viable, Moran waits -",
  "sometimes years - believing that the complexity, texture and natural",
  "antioxidant protection that comes from lees contact is irreplaceable. The",
  "label's labels carry the artwork of his father, Argentine artist Jose Luis",
  "Moran.",
];

const weddingCopyLines = [
  "The story of Mordrelle begins with a wedding. Moran had always dreamed of making high-end sparkling wine, and when he married Michelle -",
  "whose family is from the Adelaide Hills - he found both his collaborators and his canvas. \"I always dreamed to make high end sparkling wines,",
  "and lucky enough I married someone from the Adelaide Hills,\" he says. \"I invited her extended family to make a blanc de blancs for our wedding,",
  "and that's how Mordrelle Wines was born.\" The first wine, a blanc de blancs made from Adelaide Hills chardonnay, has since become the anchor",
  "of the range - a traditional-method sparkling wine, meaning it undergoes its second fermentation in the bottle to develop bubbles in the same",
  "manner as champagne, that now spends six to seven years on lees before releas",
];

const scientistCopyLines = [
  "Moran studied winemaking and viticulture in Argentina, worked vintages in the United States, then moved to Australia where he completed a",
  "PhD in viticulture and oenology at the University of Adelaide while simultaneously working full time as a research scientist at SARDI - the South",
  "Australian Research and Development Institute - and making wine for Mordrelle on the side. The research scientist and the winemaker are not",
  "separate people. Moran approaches the cellar with the same systematic rigour he brings to a laboratory, and his conclusions about lees ageing",
  "come from both empirical observation and lived experience. \"All our wines have low sulphite additions given the extended time on lees,\" he",
  "explains. \"This adds mannoproteins - compounds produced by yeast cells during ageing that act as natural antioxidants - and we notice our",
  "wines can handle oxidation much better than those made commercially with higher sulphites.\" The logic is elegant: the longer you age on lees,",
  "the less you need to add.",
];

const vineyardCopyLines = [
  "The chardonnay and pinot noir are both sourced from the ex-Lenswood Research",
  "Station - a vineyard planted in randomised experimental blocks with three clones across",
  "three different rootstocks, originally designed for scientific trials. It is an unusual site,",
  "and an unusually instructive one. \"I found this wine to be so unique, that I love the",
  "flavours we get from the site,\" says Moran. \"I have never tasted something similar.\" The",
  "vineyard maintains excellent canopy balance with minimal irrigation and permanent",
  "green cover - conditions that produce naturally well-balanced fruit without requiring",
  "heavy intervention. The chardonnay averages 15 months on lees before release; the",
  "pinot noir between 14 and 24 months, depending on the vintage.",
];

const timeCopyLines = [
  "His golden rule, applied across every wine in the range, is a single word: time. \"You need",
  "to wait to get that balance right,\" he says. \"You cannot make these wines otherwise if",
  "you don't have the patience. Forget about the cashflow, and focus on the time and",
  "understanding of the magnificent changes they manifest through that extended time",
  "of ageing, shaping the wines to a point you can smile and share that excitement with",
  "wine lovers.\" The decision to work this way is a deliberate departure from commercial",
  "logic. \"You have to let go of textbooks, industry styles, and do what your experience has",
  "told you in the last ten to fifteen years of winemaking - believing in what is the best",
  "approach, taking out the economics and the politics.\"",
];

const disgorgingCopyLines = [
  "One practical measure of that commitment is Moran's mastery of disgorging a la",
  "volee - a technique where the lees plug is expelled from a sparkling wine bottle by",
  "hand without first freezing the neck, relying entirely on timing, pressure and skill.",
  "Standard commercial disgorgement freezes the bottle neck to collect the lees in a",
  "solid plug, then pops it cleanly. A la volee requires years of practice to execute",
  "without losing wine. \"This took me several years of practice to get it right to near",
  "perfection,\" he says. \"These days we disgorge everything a la volee - so we don't",
  "need to freeze the bottle necks anymore, which saves us energy and time. This can",
  "be called a really sustainable approach.\" It is also a point of pride, and a fitting",
  "emblem of a project that has chosen the harder, more demanding path at every",
  "turn.",
];

const heritageCopyLines = [
  "The label's connection to Argentina runs deeper than biography. The artwork on",
  "every Mordrelle bottle is by Moran's father, Jose Luis Moran, an Argentine painter",
  "whose equestrian and landscape works now feature not just on labels but are",
  "available for purchase through the winery's art gallery. It gives Mordrelle an identity",
  "that is genuinely its own - part research scientist's precision, part family",
  "inheritance, part stubborn patience. Italian varieties are the next frontier Moran",
  "wants to explore further - barbera is already in the range, fiano on his mind. The",
  "Adelaide Hills small-producer community, he says, shares his minimalist sensibility,",
  "which makes it the right home. \"Minimalistic winemaking seems to be a common",
  "ground in the Adelaide Hills - small-batch, soulful wines with great character.",
  "Perhaps our main difference is the amount of time those wines age on lees.\"",
];

export default function AboutDrMoranPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#151515] text-white">
      <Navbar />
      <main className="relative z-10 pt-[105px]">
        <HeroSection />
        <ScrollReveal stagger>
          <IntroSection />
        </ScrollReveal>
        <ScrollReveal delay={40} stagger>
          <StorySection />
        </ScrollReveal>
        <ScrollReveal delay={60} stagger variant="scale">
          <VineyardSection />
        </ScrollReveal>
        <ScrollReveal delay={40} stagger>
          <ClosingImageSection />
        </ScrollReveal>
        <ScrollReveal variant="fade">
          <ClosingCta />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative px-6 pb-20 pt-8 sm:px-10 lg:h-[623px] lg:px-0 lg:pb-0 lg:pt-[21px]">
      <div className="relative mx-auto flex max-w-[1283px] flex-col gap-12 lg:h-[543px] lg:block">
        <div className="about-vintage-image lg:absolute lg:left-[32px] lg:top-[-15px] lg:w-[585px]">
          <FigureCard src={moranImages.container} name="Martin Moran, Mordrelle Wines" priority />
        </div>

        <div className="about-vintage-copy flex max-w-[620px] flex-col items-start gap-[32px] lg:absolute lg:left-[579px] lg:top-[82px] lg:h-[313px] lg:w-[620px]">
          <MoranIntroHeading />
          <ResponsiveLockedParagraph
            lines={[
              "A journey shaped by heritage, experience, and a deep commitment",
              "to craftsmanship - expressed through every bottle.",
            ]}
            mobileText="A journey shaped by heritage, experience, and a deep commitment to craftsmanship - expressed through every bottle."
            mobileClassName="w-full max-w-[320px] font-display text-[12px] leading-[1.45] tracking-[-0.04em] text-white/60 sm:max-w-[360px] sm:text-[14px]"
            desktopClassName="w-full font-display text-[16px] leading-[1.45] tracking-[-0.04em] text-white/60"
          />
          <a
            href="#story"
            className="motion-button inline-flex rounded-full bg-[#7c7c7c] px-5 py-[13px] font-display text-[14px] font-medium uppercase leading-none tracking-[-0.56px] text-white"
          >
            Read the Story
          </a>
        </div>
      </div>
    </section>
  );
}

function MoranIntroHeading() {
  return (
    <div className="flex flex-col items-start justify-center gap-[8px] font-display text-white lg:whitespace-nowrap">
      <h1 className="font-noyh text-[26px] font-bold uppercase leading-[0.98] text-white sm:text-[36px] lg:text-[72px]">
        Martin Moran
      </h1>
      <p className="max-w-[320px] text-[14px] leading-[1.2] tracking-[-0.04em] text-white sm:max-w-none sm:text-[22px] lg:text-[32px] lg:leading-normal lg:tracking-[-1.28px]">
        Winemaker behind Mordrelle Wines
      </p>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-[78px]">
      <PatternBackground opacity="opacity-[0.045]" />
      <div className="mx-auto grid max-w-[1182px] gap-14 lg:grid-cols-[1fr_460px] lg:items-center lg:gap-[112px]">
        <ResponsiveLockedParagraph
          lines={introCopyLines}
          mobileText={introCopyLines.join(" ")}
          mobileClassName="w-full font-display text-[12px] font-medium leading-[1.45] tracking-[-0.04em] text-white/80 sm:text-[14px]"
          desktopClassName="w-full max-w-[610px] font-display text-[20px] font-medium leading-[1.3] tracking-[-0.96px] text-white/80"
        />
        <OffsetImage src={moranImages.grapes} alt="Grapes held in hands" />
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="px-6 py-20 sm:px-10 lg:px-[78px]">
      <div className="mx-auto flex max-w-[1182px] flex-col gap-[40px]">
        <FigmaParagraph lines={weddingCopyLines} />
        <div className="relative mx-auto aspect-[1102/369] w-full max-w-[1102px] overflow-hidden">
          <Image
            src={moranImages.vines}
            alt="Martin Moran in the vineyard"
            fill
            sizes="(max-width: 1200px) 92vw, 1102px"
            className="object-cover object-center"
          />
        </div>
        <FigmaParagraph lines={scientistCopyLines} />
      </div>
    </section>
  );
}

function VineyardSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-[78px]">
      <div className="mx-auto grid max-w-[1182px] gap-14 lg:grid-cols-[1fr_460px] lg:items-center lg:gap-[112px]">
        <div className="flex flex-col gap-10">
          <VineyardParagraph lines={vineyardCopyLines} />
          <VineyardParagraph lines={timeCopyLines} />
        </div>
        <OffsetImage src={moranImages.bbq} alt="Martin Moran cooking outdoors" />
      </div>
    </section>
  );
}

function ClosingImageSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-[78px]">
      <div className="mx-auto flex max-w-[1182px] flex-col gap-[50px]">
        <div className="relative mx-auto aspect-[1102/369] w-full max-w-[1102px] overflow-hidden">
          <Image
            src={moranImages.table}
            alt="Martin Moran hosting guests"
            fill
            sizes="(max-width: 1200px) 92vw, 1102px"
            className="object-cover object-center"
          />
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-[40px]">
          <ClosingColumnsParagraph lines={disgorgingCopyLines} />
          <ClosingColumnsParagraph lines={heritageCopyLines} />
        </div>
      </div>
    </section>
  );
}

function OffsetImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative mx-auto h-[511px] w-full max-w-[460px]">
      <span className="absolute left-[22px] top-0 h-[481px] w-[calc(100%-22px)] border border-white/75" />
      <div className="absolute left-0 top-[22px] h-[481px] w-[calc(100%-22px)] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 90vw, 438px"
          className="object-cover object-center"
        />
      </div>
    </figure>
  );
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
        sizes="(max-width: 1024px) 90vw, 585px"
        className="object-contain"
      />
    </figure>
  );
}

function FigmaParagraph({ lines }: { lines: string[] }) {
  return (
    <ResponsiveLockedParagraph
      lines={lines}
      mobileText={lines.join(" ")}
      mobileClassName="w-full font-display text-[12px] leading-[1.45] tracking-[-0.04em] text-white/60 sm:text-[13px]"
      desktopClassName="w-full font-display text-[18px] leading-[1.28] tracking-[-0.72px] text-white/60"
    />
  );
}

function VineyardParagraph({ lines }: { lines: string[] }) {
  return (
    <ResponsiveLockedParagraph
      lines={lines}
      mobileText={lines.join(" ")}
      mobileClassName="w-full font-display text-[12px] leading-[1.45] tracking-[-0.04em] text-white/60 sm:text-[13px]"
      desktopClassName="w-full font-display text-[18px] leading-[1.28] tracking-[-0.72px] text-white/60"
    />
  );
}

function ClosingColumnsParagraph({ lines }: { lines: string[] }) {
  return (
    <ResponsiveLockedParagraph
      lines={lines}
      mobileText={lines.join(" ")}
      mobileClassName="w-full font-display text-[12px] leading-[1.45] tracking-[-0.04em] text-white/60 sm:text-[13px]"
      desktopClassName="w-full font-display text-[14px] leading-[1.34] tracking-[-0.04em] text-white/60"
    />
  );
}

function ResponsiveLockedParagraph({
  lines,
  mobileText,
  mobileClassName,
  desktopClassName,
}: {
  lines: string[];
  mobileText: string;
  mobileClassName: string;
  desktopClassName: string;
}) {
  return (
    <>
      <p className={`${mobileClassName} lg:hidden`}>{mobileText}</p>
      <div className={`hidden lg:block ${desktopClassName}`}>
        {lines.map((line) => (
          <span key={line} className="block whitespace-nowrap">
            {line}
          </span>
        ))}
      </div>
    </>
  );
}

function PatternBackground({ opacity }: { opacity: string }) {
  return (
    <Image
      src={moranImages.pattern}
      alt=""
      fill
      sizes="100vw"
      className={`-z-10 object-cover ${opacity}`}
      unoptimized
    />
  );
}
