import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { ReviewsPageContent } from "./content";

export const metadata = {
  title: "Customer Reviews | RIV Solar",
  description: "See what 2,500+ families across California, Florida & Puerto Rico say about RIV Solar. Real reviews, real savings from SDG&E, PG&E, SCE, FPL & LUMA customers.",
};

// AggregateRating Schema for Google Rich Results
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RIV Solar",
  "image": "https://rivsolar.com/logo.png",
  "url": "https://rivsolar.com",
  "telephone": "(888) RIV-SOLAR",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "2583",
    "reviewCount": "2583"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria G."
      },
      "datePublished": "2026-01-15",
      "reviewBody": "Our SDG&E bill went from $340 to $11. I still can't believe it. RIV Solar changed our lives.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Carlos M."
      },
      "datePublished": "2026-01-10",
      "reviewBody": "Hurricane season used to terrify us. Now with solar and battery backup, we have peace of mind.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Elena R."
      },
      "datePublished": "2026-01-05",
      "reviewBody": "LUMA rates kept climbing and the blackouts were constant. Solar with battery changed everything.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
};

export default function ReviewsPage() {
  return (
    <>
      {/* AggregateRating Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
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
          title="Real Families, Real Savings"
          subtitle="Don't take our word for it. See what 2,500+ homeowners across California, Florida & Puerto Rico say about their experience with RIV Solar."
          backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
          breadcrumb="Reviews"
          ctaText="Get Your Free Quote"
          secondaryCtaText="Calculate Savings"
        />
        <ReviewsPageContent />
        <PageCta
          title="Ready to join 2,500+ happy families?"
          subtitle="Get a free, no-pressure consultation and see what solar can do for your home."
          primaryCta="Schedule a Call"
          secondaryCta="Try AI Calculator"
        />
      </main>

      <Footer />
    </>
  );
}
