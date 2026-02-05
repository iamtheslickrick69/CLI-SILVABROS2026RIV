import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { ProblemPageContent } from "./content";

export const metadata = {
  title: "The California Energy Crisis | RIV Solar",
  description: "California utilities have increased rates by 114% since 2014. Learn why electricity bills are skyrocketing and how solar can protect your family.",
};

export default function ProblemPage() {
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
        <PageHeader
          title="The California Energy Crisis Explained"
          subtitle="California has the highest electricity rates in the continental United States. Here's why your bills keep climbing — and what you can do about it."
          backgroundImage="/images/problem-hero.jpg"
          breadcrumb="The Problem"
          ctaText="Calculate Your Savings"
          secondaryCtaText="See the Solution"
        />
        <ProblemPageContent />
        <PageCta
          title="Ready to escape the utility trap?"
          subtitle="Get a free, no-pressure consultation and see exactly how much you could save with solar."
          primaryCta="Schedule a Call"
          secondaryCta="Try AI Calculator"
        />
      </main>

      <Footer />
    </>
  );
}
