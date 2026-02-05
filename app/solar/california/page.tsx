import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { Sun, DollarSign, Shield, Zap, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";

// AEO-Optimized Metadata for California
export const metadata: Metadata = {
  title: "California Solar Installation | Solar Panels CA 2026 | RIV Solar",
  description: "California solar installation experts. Save 50-90% on PG&E, SDG&E & SCE bills. Navigate NEM 3.0 with battery storage. 30% tax credit, $0 down financing, 25-year warranty.",
  keywords: ["California solar", "solar panels California", "PG&E solar", "SDG&E solar", "SCE solar", "NEM 3.0", "Los Angeles solar", "San Diego solar", "Bay Area solar", "California solar incentives 2026"],
  openGraph: {
    title: "California Solar Installation | RIV Solar",
    description: "California's highest utility rates demand solar. Save 50-90% on PG&E, SDG&E, or SCE with expert NEM 3.0 system design.",
    type: "website",
    url: "https://rivsolar.com/solar/california",
    images: [{ url: "https://rivsolar.com/images/california-solar-og.jpg", width: 1200, height: 630, alt: "California Solar Installation" }],
  },
  alternates: {
    canonical: "https://rivsolar.com/solar/california",
  },
};

// California-specific schema
const californiaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rivsolar.com/solar/california/#localbusiness",
  "name": "RIV Solar California",
  "image": "https://rivsolar.com/images/riv-logo.png",
  "url": "https://rivsolar.com/solar/california",
  "description": "Professional solar panel installation in California. NEM 3.0 experts serving PG&E, SDG&E, and SCE customers with battery storage solutions.",
  "areaServed": [
    { "@type": "City", "name": "Los Angeles", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "San Diego", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "San Francisco", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "Riverside", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "City", "name": "Sacramento", "containedInPlace": { "@type": "State", "name": "California" } },
  ],
  "priceRange": "$$",
  "serviceType": ["Solar Panel Installation", "Battery Storage Installation", "NEM 3.0 System Design", "Solar Financing"],
};

const californiaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is solar worth it in California under NEM 3.0?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! While NEM 3.0 reduced export credits by ~75%, California still has the highest utility rates in the mainland US. Most homeowners save 50-90% on electricity with properly designed systems. Battery storage is now essential to maximize savings by storing solar for evening peak hours."
      }
    },
    {
      "@type": "Question",
      "name": "How much do solar panels cost in California in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average California solar system costs $22,000-$35,000 before incentives. After the 30% federal tax credit, most systems cost $15,400-$24,500. With $0 down financing, monthly payments are typically less than your current PG&E, SDG&E, or SCE bill."
      }
    },
    {
      "@type": "Question",
      "name": "Which California utility has the highest rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SDG&E has the highest rates in America at $0.45-0.55/kWh during peak hours. PG&E follows at $0.40-0.50/kWh peak, and SCE at $0.38-0.48/kWh peak. All three have increased rates 100%+ over the past decade. Solar locks in your rate and protects against future increases."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a battery with solar in California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under NEM 3.0, batteries are highly recommended. Export credits dropped ~75%, so storing solar for evening use (4-9pm peak hours) maximizes savings. Batteries also provide backup during PSPS outages and grid failures. Most California solar installations now include battery storage."
      }
    }
  ]
};

const utilities = [
  { name: "SDG&E", rate: "55¢/kWh", note: "Highest in USA", customers: "3.7M", color: "red" },
  { name: "PG&E", rate: "45¢/kWh", note: "Bay Area & NorCal", customers: "5.5M", color: "orange" },
  { name: "SCE", rate: "42¢/kWh", note: "SoCal & LA", customers: "5M", color: "yellow" },
];

const incentives = [
  { title: "30% Federal Tax Credit", value: "$8,000-$15,000", description: "Dollar-for-dollar reduction on federal taxes" },
  { title: "Property Tax Exemption", value: "100%", description: "Solar excluded from property assessment" },
  { title: "NEM 3.0 Net Billing", value: "Export Credits", description: "Still earn credits for excess production" },
  { title: "SGIP Battery Rebate", value: "Up to $1,000/kWh", description: "For qualifying storage systems" },
];

const cities = [
  { name: "Los Angeles", utility: "SCE", savings: "$250/mo", sunHours: "5.6" },
  { name: "San Diego", utility: "SDG&E", savings: "$320/mo", sunHours: "5.7" },
  { name: "San Francisco", utility: "PG&E", savings: "$220/mo", sunHours: "5.1" },
  { name: "Riverside", utility: "SCE", savings: "$280/mo", sunHours: "5.8" },
  { name: "Sacramento", utility: "SMUD", savings: "$180/mo", sunHours: "5.5" },
  { name: "San Jose", utility: "PG&E", savings: "$240/mo", sunHours: "5.4" },
];

const rateStats = [
  { stat: "114%", label: "CA rate increase since 2014" },
  { stat: "$0.55", label: "SDG&E peak rate per kWh" },
  { stat: "7-9%", label: "Annual rate increases projected" },
  { stat: "#1", label: "Highest mainland US rates" },
];

export default function CaliforniaSolarPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(californiaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(californiaFaqSchema) }}
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
          title="California Solar Installation"
          subtitle="California has the highest utility rates in the mainland US. Fight back with solar + battery and save 50-90% on your PG&E, SDG&E, or SCE bill."
          backgroundImage="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/LA.jpg"
          breadcrumb="California Solar"
          ctaText="Get CA Quote"
          secondaryCtaText="AI Bill Analyzer"
        />

        {/* Answer Capsule Section - AEO Optimized */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-violet-50 border-l-4 border-violet-500 rounded-r-lg">
                <Sun className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2">Is Solar Worth It in California in 2026?</h2>
                  <p className="text-zinc-700 leading-relaxed">
                    <strong>Absolutely — California remains the #1 state for solar savings.</strong> Despite NEM 3.0 changes, California's sky-high utility rates (up 114% since 2014) make solar extremely profitable. With battery storage to capture peak savings, most homeowners save 50-90% on electricity and see payback in 5-7 years. The 30% federal tax credit and California's property tax exemption make 2026 an excellent time to go solar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Crisis Section */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 px-4 py-2 border border-red-700 w-fit mx-auto mb-6">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">California Rate Crisis</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                California Utility Rates Are Out of Control
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                California has the highest electricity rates in the mainland US — and they keep rising 7-9% every year.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {rateStats.map((stat) => (
                <div key={stat.label} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">{stat.stat}</div>
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* California Utilities Section */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                We Know Your California Utility
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                PG&E, SDG&E, or SCE — we're experts in every California rate structure and know how to maximize your NEM 3.0 savings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {utilities.map((utility) => (
                <div key={utility.name} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-zinc-900">{utility.name}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      utility.color === 'red' ? 'bg-red-100 text-red-600' :
                      utility.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {utility.note}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Peak Rate:</span>
                      <span className="text-zinc-900 font-semibold">{utility.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Customers:</span>
                      <span className="text-zinc-900 font-medium">{utility.customers}</span>
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

        {/* NEM 3.0 Section */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
                  <Zap className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-medium text-zinc-400">NEM 3.0 Experts</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  NEM 3.0 Changed the Game — We Adapted
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  California's NEM 3.0 policy reduced solar export credits by ~75%. But with the right system design, solar is still incredibly profitable. The key? Battery storage to shift your solar to peak evening hours.
                </p>
                <ul className="space-y-4">
                  {[
                    "Battery stores solar for 4-9pm peak hours",
                    "Avoid highest TOU rates ($0.40-0.55/kWh)",
                    "Self-consumption maximizes NEM 3.0 value",
                    "Export credits still apply for excess",
                    "System design optimized for your rate plan",
                    "AI tools analyze your exact usage patterns",
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
                  src="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/IMG_7384.JPG"
                  alt="Solar panels with battery storage in California"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* California Incentives */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                California Solar Incentives 2026
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Stack federal and state incentives to reduce your solar cost by 30-40%.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {incentives.map((incentive) => (
                <div key={incentive.title} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-violet-600 mb-2">{incentive.value}</div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">{incentive.title}</h3>
                  <p className="text-sm text-zinc-600">{incentive.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                California Cities We Serve
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                From San Diego to the Bay Area, LA to Sacramento — we install solar across the Golden State.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <div key={city.name} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-violet-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{city.name}</h3>
                    <span className="text-xs font-medium text-violet-400 bg-violet-500/10 px-2 py-1 rounded">
                      {city.utility}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Avg Monthly Savings:</span>
                      <span className="text-green-400 font-semibold">{city.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Peak Sun Hours:</span>
                      <span className="text-white font-medium">{city.sunHours} hrs/day</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* California FAQ */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                California Solar FAQ
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {californiaFaqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-3">{faq.name}</h3>
                  <p className="text-zinc-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related CA Articles */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                California Solar Resources
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Is Solar Worth It in California 2026?", slug: "is-solar-worth-it-california-2026", category: "SOLAR ROI" },
                { title: "What Is NEM 3.0?", slug: "what-is-nem-3-how-affect-solar-savings", category: "NEM 3.0" },
                { title: "SDG&E: Highest Rates in America", slug: "sdge-highest-rates-america-how-to-fight-back", category: "SDG&E" },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-violet-500/30 transition-all"
                >
                  <span className="text-xs font-medium text-violet-400 uppercase tracking-wide">{article.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-violet-400 transition-colors">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title="Ready to Go Solar in California?"
          subtitle="Join 2,500+ California families saving 50-90% on electricity. Get your free, personalized quote in 60 seconds."
          primaryCta="Get California Quote"
          secondaryCta="Try AI Bill Analyzer"
        />
      </main>

      <Footer />
    </>
  );
}
