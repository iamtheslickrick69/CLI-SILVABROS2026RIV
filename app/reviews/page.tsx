import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { ReviewsPageContent } from "./content";

export const metadata = {
  title: "Customer Reviews | RIV Solar",
  description: "See what 2,500+ California families say about RIV Solar. Real reviews, real savings, real results from PG&E, SDG&E, and SCE customers.",
};

export default function ReviewsPage() {
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
          title="Real California Families, Real Savings"
          subtitle="Don't take our word for it. See what 2,500+ homeowners say about their experience with RIV Solar — and the savings they're seeing every month."
          backgroundImage="/images/reviews-hero.jpg"
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
