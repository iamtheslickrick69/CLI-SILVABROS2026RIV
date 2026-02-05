import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { AiToolsPageContent } from "./content";

export const metadata = {
  title: "AI-Powered Solar Intelligence | RIV Solar",
  description: "Get instant answers and personalized savings estimates with RIV Solar's AI chatbot and bill analyzer. No other solar company has tools like these.",
};

export default function AiToolsPage() {
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
          title="AI-Powered Solar Intelligence"
          subtitle="Get instant answers and personalized savings estimates without talking to a salesperson. Our AI tools are available 24/7 and completely free to use."
          backgroundImage="/images/ai-tools-hero.jpg"
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
