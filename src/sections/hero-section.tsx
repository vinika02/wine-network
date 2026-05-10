import { Button } from "@/components/button";
import { HeroBottles } from "@/components/hero-bottles";

/**
 * Figma: Hero artboard 1440×673, content frame 954×447, row gap 60px, items center.
 * Headline = Black 80/-2.5%, eyebrow = 12/40%, body = 18, button = Medium 14/-4%.
 */
export function HeroSection() {
  return (
    <section className="section-shell hero-layout-bg relative overflow-hidden pb-14 pt-20 sm:pb-20 sm:pt-24 lg:flex lg:min-h-[673px] lg:flex-col lg:justify-center lg:pb-24 lg:pt-32">
      <div className="relative mx-auto flex w-full max-w-[1004px] flex-col gap-7 px-5 sm:gap-10 sm:px-8 lg:flex-row lg:items-center lg:justify-start lg:gap-[60px] lg:px-0">
        <div className="hero-bottles-motion flex w-full shrink-0 justify-center lg:w-auto lg:justify-start">
          <HeroBottles className="max-w-[320px] sm:max-w-[400px] lg:w-[464px] lg:max-w-none" />
        </div>

        <div className="w-full min-w-0 lg:max-w-[480px]">
          <p className="hero-copy-in text-[10px] font-black uppercase tracking-[0.32em] text-white/80 sm:text-[11px] lg:text-[12px]">
            Since 2000
          </p>

          <div className="mt-3 max-w-full font-display leading-[0.88] sm:mt-4 lg:mt-3 lg:leading-[0.86]">
            <div className="hero-copy-in text-[clamp(2.35rem,12.4vw,3.2rem)] font-black uppercase tracking-[0] text-[#8e8e8e] sm:text-[62px] lg:text-[72px] xl:text-[84px]">
              Impressive
            </div>
            <div className="hero-copy-in hero-copy-in-2 text-[clamp(2.35rem,12.4vw,3.2rem)] font-black uppercase tracking-[0] text-white sm:text-[62px] lg:text-[72px] xl:text-[84px]">
              Wines
            </div>
            <div className="hero-copy-in hero-copy-in-3 text-[clamp(2.35rem,12.4vw,3.2rem)] font-black uppercase tracking-[0] text-[#8e8e8e] sm:text-[62px] lg:text-[72px] xl:text-[84px]">
              Impeccable
            </div>
            <div className="hero-copy-in hero-copy-in-4 text-[clamp(2.35rem,12.4vw,3.2rem)] font-black uppercase tracking-[0] text-white sm:text-[62px] lg:text-[72px] xl:text-[84px]">
              Margins
            </div>
          </div>

          <p className="hero-copy-in hero-copy-in-5 mt-5 max-w-[330px] text-[13px] leading-6 text-white/72 sm:mt-6 sm:max-w-[380px] sm:text-[15px] sm:leading-relaxed lg:mt-5 lg:text-[16px] lg:leading-6">
            We source the world&apos;s finest unlabelled wines that consistently outperform the
            icons.
          </p>

          <Button href="#" className="hero-copy-in hero-copy-in-6 motion-button mt-5 min-w-[122px] px-5 py-2.5 text-[11px] sm:mt-6 sm:min-w-[148px] sm:px-6 sm:py-3 sm:text-[14px] lg:mt-7">
            Find Out More
          </Button>
        </div>
      </div>
    </section>
  );
}
