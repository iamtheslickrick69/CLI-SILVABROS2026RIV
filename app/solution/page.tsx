import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { SolutionPageContent } from "./content";

export const metadata = {
  title: "Your Path to Energy Freedom | RIV Solar",
  description: "From your first call to your first savings — learn about RIV Solar's 5-step process, our equipment, and what makes our installation different.",
};

export default function SolutionPage() {
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
