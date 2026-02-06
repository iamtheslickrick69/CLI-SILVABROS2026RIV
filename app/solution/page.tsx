import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { SolutionPageContent } from "./content";

export const metadata = {
  title: "Your Path to Energy Freedom | RIV Solar",
  description: "From your first call to your first savings — learn about RIV Solar's 5-step process, our equipment, and what makes our installation different.",
};

// FAQPage Schema for Solution Page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does solar installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The actual solar panel installation typically takes 1-2 days for most residential homes. The entire process from signing to turning on your system takes 4-8 weeks, including permitting, utility approvals, and inspections."
      }
    },
    {
      "@type": "Question",
      "name": "What solar equipment does RIV Solar use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RIV Solar uses only Tier-1 equipment including high-efficiency solar panels from leading manufacturers, Enphase microinverters or SolarEdge optimizers, and battery options including Tesla Powerwall, Enphase IQ Battery, and Franklin WholePower."
      }
    },
    {
      "@type": "Question",
      "name": "What warranty does RIV Solar offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RIV Solar provides a comprehensive 25-year warranty covering panels, inverters, and workmanship. This all-inclusive warranty means you're protected against equipment defects and installation issues for a full quarter century."
      }
    },
    {
      "@type": "Question",
      "name": "What is NEM 3.0 and how does it affect my solar savings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NEM 3.0 (Net Billing Tariff) in California reduced export rates by about 75% compared to NEM 2.0. This makes battery storage essential for maximizing savings by storing excess energy for evening use instead of exporting it to the grid at low rates."
      }
    },
    {
      "@type": "Question",
      "name": "Does RIV Solar use subcontractors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, RIV Solar uses only in-house installation crews. Our crews are fully trained, certified, and held to our quality standards. No subcontractors means consistent quality and direct accountability for every installation."
      }
    }
  ]
};

// HowTo Schema for Installation Process
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Go Solar with RIV Solar",
  "description": "The complete 5-step process to get solar panels installed on your home with RIV Solar.",
  "totalTime": "P8W",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Free Consultation",
      "text": "Schedule a free, no-pressure consultation. We'll analyze your energy usage, roof, and goals to design a custom solar solution.",
      "url": "https://rivsolar.com/solution#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Custom Design",
      "text": "Our engineers design a system optimized for your home using satellite imagery and your utility data for maximum savings.",
      "url": "https://rivsolar.com/solution#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Permits & Approvals",
      "text": "We handle all paperwork including permits, HOA approvals, and utility interconnection applications. You don't lift a finger.",
      "url": "https://rivsolar.com/solution#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Professional Installation",
      "text": "Our in-house crews install your system in 1-2 days. We treat your home with respect and clean up completely when done.",
      "url": "https://rivsolar.com/solution#step-4"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Activation & Savings",
      "text": "After final inspection and utility approval, we activate your system. Watch your meter spin backwards and savings begin!",
      "url": "https://rivsolar.com/solution#step-5"
    }
  ]
};

export default function SolutionPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
          title="Your Path to Energy Freedom"
          subtitle="From your first call to your first savings — we handle everything. No pressure, no hidden fees, just honest solar solutions designed for your home."
          backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          breadcrumb="The Solution"
          ctaText="Start Your Journey"
          secondaryCtaText="Talk to a Pro"
        />
        <SolutionPageContent />
        <PageCta
          title="Ready to start your solar journey?"
          subtitle="Get a free, no-obligation consultation. We'll show you exactly what solar can do for your home — no pressure, ever."
          primaryCta="Book Free Consultation"
          secondaryCta="Try AI Calculator"
        />
      </main>

      <Footer />
    </>
  );
}
