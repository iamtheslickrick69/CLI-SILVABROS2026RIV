import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { CareersPageContent } from "./content";

export const metadata = {
  title: "Careers | Join the RIV Solar Team",
  description: "Join RIV Solar and help families across California, Florida & Puerto Rico go solar. We're hiring passionate, motivated individuals who want to make a difference. View open positions.",
};

// JobPosting Schema for open positions
const jobPostingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Solar Sales Representative (D2D)",
    "description": "Join RIV Solar as a Door-to-Door Solar Sales Representative. Help homeowners discover how solar can save them money while earning uncapped commissions. Top performers earn $150K+. No experience required - we provide full training.",
    "datePosted": "2026-01-01",
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "RIV Solar",
      "sameAs": "https://rivsolar.com",
      "logo": "https://rivsolar.com/logo.png"
    },
    "jobLocation": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Diego",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Riverside",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tampa",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Juan",
          "addressRegion": "PR",
          "addressCountry": "US"
        }
      }
    ],
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 60000,
        "maxValue": 200000,
        "unitText": "YEAR"
      }
    },
    "jobBenefits": "Uncapped commission, full training provided, career advancement opportunities, supportive team culture"
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Solar Installer",
    "description": "Join our professional installation team. Install residential solar systems across California, Florida, and Puerto Rico. Competitive hourly pay plus benefits. Experience preferred but will train the right candidate.",
    "datePosted": "2026-01-01",
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "RIV Solar",
      "sameAs": "https://rivsolar.com",
      "logo": "https://rivsolar.com/logo.png"
    },
    "jobLocation": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Diego",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tampa",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      }
    ],
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 45000,
        "maxValue": 75000,
        "unitText": "YEAR"
      }
    },
    "jobBenefits": "Health insurance, paid time off, 401k, tool allowance, career advancement"
  }
];

export default function CareersPage() {
  return (
    <>
      {/* JobPosting Schema */}
      {jobPostingSchema.map((job, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(job) }}
        />
      ))}

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
          title="Join the Solar Revolution"
          subtitle="We're not just installing solar panels. We're helping California families take control of their energy future."
          backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          breadcrumb="Careers"
          ctaText="View Open Positions"
          ctaHref="#positions"
          secondaryCtaText="Learn About Us"
          secondaryCtaHref="#why-riv"
        />
        <CareersPageContent />
        <PageCta
          title="Ready to Make a Difference?"
          subtitle="Join a team that's changing how California goes solar. No experience required - just passion, drive, and integrity."
          primaryCta="Apply Now"
          secondaryCta="Contact Us"
        />
      </main>

      <Footer />
    </>
  );
}
