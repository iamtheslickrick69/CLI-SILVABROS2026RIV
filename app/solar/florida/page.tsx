import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { Sun, DollarSign, Shield, Zap, CloudLightning, Home, TrendingUp, CheckCircle } from "lucide-react";

// AEO-Optimized Metadata for Florida
export const metadata: Metadata = {
  title: "Florida Solar Installation | Solar Panels Florida 2026 | RIV Solar",
  description: "Florida solar installation experts. Save 50-80% on FPL, Duke Energy & TECO bills. $0 down financing, hurricane-rated panels, 25-year warranty. Get your free Florida solar quote today.",
  keywords: ["Florida solar", "solar panels Florida", "FPL solar", "Duke Energy solar", "TECO solar", "Miami solar", "Tampa solar", "Orlando solar", "Florida solar incentives", "hurricane proof solar panels"],
  openGraph: {
    title: "Florida Solar Installation | RIV Solar",
    description: "Save 50-80% on your Florida electric bill with solar. Hurricane-rated panels, $0 down financing, 25-year warranty.",
    type: "website",
    url: "https://rivsolar.com/solar/florida",
    images: [{ url: "https://rivsolar.com/images/florida-solar-og.jpg", width: 1200, height: 630, alt: "Florida Solar Installation" }],
  },
  alternates: {
    canonical: "https://rivsolar.com/solar/florida",
  },
};

// Florida-specific schema
const floridaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rivsolar.com/solar/florida/#localbusiness",
  "name": "RIV Solar Florida",
  "image": "https://rivsolar.com/images/riv-logo.png",
  "url": "https://rivsolar.com/solar/florida",
  "description": "Professional solar panel installation in Florida. Serving FPL, Duke Energy, and TECO customers with hurricane-rated panels and $0 down financing.",
  "areaServed": [
    { "@type": "City", "name": "Miami", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Tampa", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Orlando", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Jacksonville", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Fort Lauderdale", "containedInPlace": { "@type": "State", "name": "Florida" } },
  ],
  "priceRange": "$$",
  "serviceType": ["Solar Panel Installation", "Battery Storage Installation", "Solar Financing"],
};

const floridaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is solar worth it in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Florida is the 3rd best state for solar in the US. With 230+ sunny days per year, rising utility rates (FPL increased rates 38% since 2022), and strong net metering, most Florida homeowners save 50-80% on electricity and see full ROI in 5-8 years."
      }
    },
    {
      "@type": "Question",
      "name": "Can solar panels survive Florida hurricanes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We install hurricane-rated panels certified to withstand 160+ mph winds. Our mounting systems exceed Florida Building Code requirements. Many solar homes in Florida performed well during Hurricane Ian and other major storms."
      }
    },
    {
      "@type": "Question",
      "name": "What Florida solar incentives are available in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida offers: 30% Federal Tax Credit (save $8,000-$15,000), 100% property tax exemption on solar value, 100% sales tax exemption on equipment, and net metering from FPL, Duke Energy, and TECO."
      }
    },
    {
      "@type": "Question",
      "name": "How much do solar panels cost in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average Florida solar system costs $20,000-$35,000 before incentives. After the 30% federal tax credit, most systems cost $14,000-$24,500. With $0 down financing, many homeowners pay less than their current electric bill from day one."
      }
    }
  ]
};

const utilities = [
  { name: "FPL", fullName: "Florida Power & Light", rate: "14.5¢/kWh", customers: "5.8M", coverage: "East Coast, South Florida" },
  { name: "Duke Energy", fullName: "Duke Energy Florida", rate: "13.8¢/kWh", customers: "1.9M", coverage: "Central Florida, Tampa Bay" },
  { name: "TECO", fullName: "Tampa Electric", rate: "13.2¢/kWh", customers: "800K", coverage: "Tampa Bay Area" },
];

const incentives = [
  { title: "30% Federal Tax Credit", value: "$8,000-$15,000", description: "Dollar-for-dollar reduction on federal taxes" },
  { title: "Property Tax Exemption", value: "100%", description: "Solar doesn't increase your property taxes" },
  { title: "Sales Tax Exemption", value: "6% Savings", description: "No sales tax on solar equipment" },
  { title: "Net Metering", value: "1:1 Credit", description: "Full retail credit for excess energy" },
];

const cities = [
  { name: "Miami", savings: "$180/mo", sunHours: "5.6" },
  { name: "Tampa", savings: "$165/mo", sunHours: "5.5" },
  { name: "Orlando", savings: "$170/mo", sunHours: "5.4" },
  { name: "Jacksonville", savings: "$155/mo", sunHours: "5.3" },
  { name: "Fort Lauderdale", savings: "$185/mo", sunHours: "5.7" },
  { name: "West Palm Beach", savings: "$175/mo", sunHours: "5.6" },
];

export default function FloridaSolarPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floridaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floridaFaqSchema) }}
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
          title="Florida Solar Installation"
          subtitle="The Sunshine State deserves sunshine savings. Save 50-80% on your FPL, Duke, or TECO bill with hurricane-rated solar panels and $0 down financing."
          backgroundImage="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/house3.jpg"
          breadcrumb="Florida Solar"
          ctaText="Get Florida Quote"
          secondaryCtaText="FL Savings Calculator"
        />

        {/* Answer Capsule Section - AEO Optimized */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-violet-50 border-l-4 border-violet-500 rounded-r-lg">
                <Sun className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2">Is Solar Worth It in Florida?</h2>
                  <p className="text-zinc-700 leading-relaxed">
                    <strong>Yes — Florida ranks #3 in the US for solar.</strong> With 230+ sunny days annually, some of the fastest-rising utility rates in the nation, and generous net metering policies, most Florida homeowners save 50-80% on electricity bills. The average payback period is just 5-8 years, with 25+ years of free electricity afterward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Florida Utilities Section */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 px-4 py-2 border border-zinc-700 w-fit mx-auto mb-6">
                <div className="w-2.5 h-2.5 bg-violet-500" />
                <span className="text-sm font-medium text-zinc-400">Florida Utilities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                We Serve All Major Florida Utilities
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Whether you're with FPL, Duke Energy, or TECO — we know your rate structure and can maximize your savings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {utilities.map((utility) => (
                <div key={utility.name} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">{utility.name}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{utility.fullName}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Avg Rate:</span>
                      <span className="text-white font-medium">{utility.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Customers:</span>
                      <span className="text-white font-medium">{utility.customers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Coverage:</span>
                      <span className="text-white font-medium text-right text-sm">{utility.coverage}</span>
                    </div>
                  </div>
                  <Link
                    href="/#savings"
                    className="mt-6 block w-full text-center py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition-colors"
                  >
                    Calculate {utility.name} Savings
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Florida Incentives */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                Florida Solar Incentives 2026
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Florida offers some of the best solar incentives in the nation — no state income tax means you keep more savings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {incentives.map((incentive) => (
                <div key={incentive.title} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-violet-600 mb-2">{incentive.value}</div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">{incentive.title}</h3>
                  <p className="text-sm text-zinc-600">{incentive.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hurricane Safety Section */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
                  <CloudLightning className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-medium text-zinc-400">Hurricane Ready</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  Solar Panels Built for Florida Storms
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Living in Florida means preparing for hurricane season. Our solar installations are designed specifically for Florida's climate with hurricane-rated panels and reinforced mounting systems.
                </p>
                <ul className="space-y-4">
                  {[
                    "Panels rated for 160+ mph winds",
                    "Exceeds Florida Building Code requirements",
                    "Reinforced mounting with additional anchor points",
                    "Battery backup for power during outages",
                    "25-year warranty covers storm damage",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/rooftop.jpg"
                  alt="Hurricane-rated solar panels in Florida"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                Florida Cities We Serve
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                From Miami to Jacksonville, we install solar across the Sunshine State.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <div key={city.name} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-4">{city.name}, FL</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Avg Monthly Savings:</span>
                      <span className="text-violet-600 font-semibold">{city.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Peak Sun Hours:</span>
                      <span className="text-zinc-900 font-medium">{city.sunHours} hrs/day</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Florida FAQ */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Florida Solar FAQ
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {floridaFaqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.name}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Florida Articles */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                Florida Solar Resources
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Is Solar Worth It in Florida 2026?", slug: "is-solar-worth-it-florida-2026", category: "FLORIDA" },
                { title: "FPL Net Metering Explained", slug: "fpl-net-metering-explained-florida", category: "FPL" },
                { title: "Hurricane-Proof Solar Panels", slug: "hurricane-proof-solar-panels-florida", category: "SAFETY" },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-violet-300 transition-all"
                >
                  <span className="text-xs font-medium text-violet-600 uppercase tracking-wide">{article.category}</span>
                  <h3 className="text-lg font-semibold text-zinc-900 mt-2 group-hover:text-violet-600 transition-colors">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title="Ready to Go Solar in Florida?"
          subtitle="Join thousands of Florida homeowners saving 50-80% on electricity. Get your free, personalized quote in 60 seconds."
          primaryCta="Get Florida Quote"
          secondaryCta="Try AI Calculator"
        />
      </main>

      <Footer />
    </>
  );
}
