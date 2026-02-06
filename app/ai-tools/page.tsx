import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { AiToolsPageContent } from "./content";

export const metadata = {
  title: "AI-Powered Solar Intelligence | RIV Solar",
  description: "Get instant answers and personalized savings estimates with RIV Solar's AI chatbot and bill analyzer. Serving California, Florida & Puerto Rico. No other solar company has tools like these.",
};

// FAQPage Schema for AI Tools
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does RIV Solar's AI bill analyzer work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply upload a photo or PDF of your utility bill. Our AI extracts your usage data, identifies your rate plan, calculates hidden fees, and shows exactly how much you could save with solar. Works with SDG&E, PG&E, SCE, FPL, Duke Energy, and LUMA bills."
      }
    },
    {
      "@type": "Question",
      "name": "Is the RIV Solar AI chatbot available 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, RIV (our AI solar assistant) is available 24/7 to answer your questions about solar panels, battery storage, financing options, tax credits, and utility rates. Get instant, accurate answers without waiting for a callback."
      }
    },
    {
      "@type": "Question",
      "name": "What utility companies does the AI bill analyzer support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI bill analyzer supports all major utilities in our service areas: SDG&E, PG&E, and SCE in California; FPL and Duke Energy in Florida; and LUMA Energy in Puerto Rico. Upload any bill from these utilities for instant analysis."
      }
    },
    {
      "@type": "Question",
      "name": "Is the AI solar calculator free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all RIV Solar AI tools are completely free with no signup required. Use the bill analyzer and chatbot as many times as you want. We believe in transparency and education before any sales conversation."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are the AI savings estimates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI uses your actual usage data from your bill combined with local solar irradiance data and current utility rates. Estimates are typically within 5-10% of actual savings. Many customers report saving even more than projected."
      }
    }
  ]
};

// HowTo Schema for Bill Analyzer
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Use RIV Solar's AI Bill Analyzer",
  "description": "Get instant solar savings estimates by analyzing your utility bill with AI.",
  "totalTime": "PT2M",
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Utility bill (PDF or photo)"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Upload Your Bill",
      "text": "Take a photo or upload a PDF of your most recent utility bill from SDG&E, PG&E, SCE, FPL, Duke Energy, or LUMA."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "AI Analysis",
      "text": "Our AI instantly extracts your kWh usage, rate plan, peak hours, and hidden fees from your bill."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "View Your Savings",
      "text": "See your personalized solar savings estimate including monthly, annual, and 25-year projections based on your actual usage."
    }
  ]
};

// SoftwareApplication Schema
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "RIV Solar AI Bill Analyzer",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1247"
  }
};

export default function AiToolsPage() {
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
      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
          title="AI-Powered Solar Intelligence"
          subtitle="Get instant answers and personalized savings estimates without talking to a salesperson. Our AI tools are available 24/7 and completely free to use."
          backgroundImage="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1920&q=80"
          breadcrumb="AI Tools"
          ctaText="Try AI Calculator"
          secondaryCtaText="Chat with RIV"
        />
        <AiToolsPageContent />
        <PageCta
          title="Ready to see what AI can do for you?"
          subtitle="Try our AI tools now — completely free, no signup required. Or talk to a human when you're ready."
          primaryCta="Launch AI Calculator"
          secondaryCta="Talk to a Pro"
        />
      </main>

      <Footer />
    </>
  );
}
