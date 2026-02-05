import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { CareersPageContent } from "./content";

export const metadata = {
  title: "Careers | Join the RIV Solar Team",
  description: "Join RIV Solar and help California families go solar. We're hiring passionate, motivated individuals who want to make a difference. View open positions.",
};

export default function CareersPage() {
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
