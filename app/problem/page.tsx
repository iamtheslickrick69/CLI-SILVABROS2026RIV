import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { ProblemPageContent } from "./content";

export const metadata = {
  title: "The Energy Crisis Explained | Rising Utility Rates | RIV Solar",
  description: "Electricity rates in California, Florida & Puerto Rico are skyrocketing. Learn why your bills keep climbing and how solar can protect your family from rising utility costs.",
};

// FAQPage Schema for Problem Page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are electricity rates so high in California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "California has among the highest electricity rates in the nation due to infrastructure costs, wildfire mitigation expenses, and renewable energy mandates. SDG&E, PG&E, and SCE rates have increased 7-9% annually, with SDG&E customers paying the highest rates in America."
      }
    },
    {
      "@type": "Question",
      "name": "Why are Florida electricity bills increasing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida electricity rates are rising due to fuel costs, grid infrastructure upgrades, and hurricane hardening expenses. FPL and Duke Energy rates have increased significantly, with summer bills often exceeding $300-400 for average homes running AC."
      }
    },
    {
      "@type": "Question",
      "name": "Why is electricity so expensive in Puerto Rico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puerto Rico has some of the highest electricity rates in the US due to LUMA Energy's aging infrastructure, fuel import costs, and ongoing grid repairs after hurricanes. Rates exceed $0.30/kWh with frequent blackouts lasting hours or days."
      }
    },
    {
      "@type": "Question",
      "name": "How much have utility rates increased in the last 10 years?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Utility rates in California, Florida, and Puerto Rico have increased 50-100% over the last decade. SDG&E rates alone have risen over 100% since 2014, making solar increasingly attractive as a hedge against future rate hikes."
      }
    },
    {
      "@type": "Question",
      "name": "Will electricity rates continue to rise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, electricity rates are projected to continue rising 5-9% annually due to infrastructure investments, renewable energy transitions, and grid modernization costs. Going solar locks in your energy costs and protects against future rate increases."
      }
    }
  ]
};

export default function ProblemPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
