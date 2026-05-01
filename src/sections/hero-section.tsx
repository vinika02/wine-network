import { Button } from "@/components/button";
import { HeroBottles } from "@/components/hero-bottles";

/**
 * Figma: Hero artboard 1440×673, content frame 954×447, row gap 60px, items center.
 * Headline = Black 80/-2.5%, eyebrow = 12/40%, body = 18, button = Medium 14/-4%.
 */
export function HeroSection() {
  return (
    <section className="section-shell hero-layout-bg relative overflow-hidden pb-20 pt-24 lg:flex lg:min-h-[673px] lg:flex-col lg:justify-center lg:pb-24 lg:pt-32">
      <div className="relative mx-auto flex w-full max-w-[954px] flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-start lg:gap-[60px] lg:px-0">
        <div className="hero-bottles-motion flex w-full shrink-0 justify-center lg:w-auto lg:justify-start">
          <HeroBottles className="max-h-[min(78vw,420px)] w-full max-w-[416px] lg:max-h-[479px] lg:w-[416px] lg:max-w-none" />
        </div>

        <div className="w-full min-w-0 lg:max-w-[480px]">
          <p className="hero-copy-in text-[11px] font-black uppercase tracking-[0.34em] text-white/80 lg:text-[12px]">
            Since 2000
          </p>

          <div className="mt-4 font-display leading-[0.86] lg:mt-3">
            <div className="hero-copy-in text-[47px] font-black uppercase tracking-[0] text-[#8e8e8e] sm:text-[62px] lg:text-[72px] xl:text-[84px]">
              Impressive
            </div>
            <div className="hero-copy-in hero-copy-in-2 text-[47px] font-black uppercase tracking-[0] text-white sm:text-[62px] lg:text-[72px] xl:text-[84px]">
              Wines
            </div>
            <div className="hero-copy-in hero-copy-in-3 text-[47px] font-black uppercase tracking-[0] text-[#8e8e8e] sm:text-[62px] lg:text-[72px] xl:text-[84px]">
              Impeccable
            </div>
            <div className="hero-copy-in hero-copy-in-4 text-[47px] font-black uppercase tracking-[0] text-white sm:text-[62px] lg:text-[72px] xl:text-[84px]">
              Margins
            </div>
          </div>

          <p className="hero-copy-in hero-copy-in-5 mt-6 max-w-[380px] text-[15px] leading-relaxed text-white/72 lg:mt-5 lg:text-[16px] lg:leading-6">
            We source the world&apos;s finest unlabelled wines that consistently outperform the
            icons.
          </p>

          <Button href="#" className="hero-copy-in hero-copy-in-6 motion-button mt-6 min-w-[148px] px-6 py-3 lg:mt-7">
            Find Out More
          </Button>
        </div>
      </div>
    </section>
  );
}
