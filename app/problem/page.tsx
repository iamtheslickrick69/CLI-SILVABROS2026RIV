import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { ProblemPageContent } from "./content";

export const metadata = {
  title: "The Energy Crisis Explained | Rising Utility Rates | RIV Solar",
  description: "Electricity rates in California, Florida & Puerto Rico are skyrocketing. Learn why your bills keep climbing and how solar can protect your family from rising utility costs.",
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
          title="The Energy Crisis Explained"
          subtitle="Electricity rates across California, Florida, and Puerto Rico are among the highest in the nation. Here's why your bills keep climbing — and what you can do about it."
          backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
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
