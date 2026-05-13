import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AdvantageSection } from "@/sections/advantage-section";
import { ClosingSection } from "@/sections/closing-section";
import { EcosystemSection } from "@/sections/ecosystem-section";
import { HeroSection } from "@/sections/hero-section";
import { RevenueSection } from "@/sections/revenue-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-white">
      <main>
        <div className="relative">
          <Navbar />
          <HeroSection />
        </div>
        <ScrollReveal>
          <AdvantageSection />
        </ScrollReveal>
        {/* <ScrollReveal delay={80}>
          <RevenueSection />
        </ScrollReveal> */}
        <ScrollReveal delay={80} variant="scale">
          <EcosystemSection />
        </ScrollReveal>
        <ScrollReveal variant="fade">
          <ClosingSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
