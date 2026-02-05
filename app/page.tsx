import { Hero } from "@/components/hero";
import { LogoSection } from "@/components/logo-section";
import { ProblemSection } from "@/components/problem-section";
import { AiToolsSection } from "@/components/ai-tools-section";
import { SolutionSection } from "@/components/solution-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { MissionSection } from "@/components/mission-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Vertical margin lines */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="mx-auto h-full max-w-7xl">
          <div className="relative h-full">
            <div className="absolute left-0 top-0 h-full w-px bg-zinc-700/30" />
            <div className="absolute right-0 top-0 h-full w-px bg-zinc-700/30" />
          </div>
        </div>
      </div>

      <main>
        {/* 1. Hook */}
        <Hero />
        
        {/* 2. Credibility */}
        <LogoSection />
        
        {/* 3. Agitate the problem */}
        <ProblemSection />
        
        {/* 4. Your #1 Differentiator */}
        <AiToolsSection />
        
        {/* 5. Full solution */}
        <SolutionSection />
        
        {/* 6. Why RIV beats competitors */}
        <ComparisonSection />
        
        {/* 7. Benefits of choosing RIV */}
        <FeaturesSection />
        
        {/* 8. Simple process */}
        <HowItWorksSection />
        
        {/* 9. Social proof before pricing */}
        <TestimonialsSection />
        
        {/* 10. Pricing options */}
        <PricingSection />
        
        {/* 11. Handle objections */}
        <FaqSection />
        
        {/* 12. Emotional connection */}
        <MissionSection />
        
        {/* 13. Final conversion */}
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
