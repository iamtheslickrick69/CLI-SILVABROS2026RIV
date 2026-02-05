import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { Sun, DollarSign, Shield, Zap, CloudLightning, Battery, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";

// AEO-Optimized Metadata for Puerto Rico
export const metadata: Metadata = {
  title: "Puerto Rico Solar Installation | Solar Panels PR 2026 | RIV Solar",
  description: "Puerto Rico solar installation experts. Escape LUMA blackouts with solar + battery. 30% tax credit, net metering until 2030, hurricane-rated panels. Serving San Juan, Ponce, Mayagüez & all of PR.",
  keywords: ["Puerto Rico solar", "solar panels Puerto Rico", "LUMA Energy solar", "San Juan solar", "PR solar incentives", "hurricane proof solar", "Act 60 solar", "solar Puerto Rico 2026"],
  openGraph: {
    title: "Puerto Rico Solar Installation | RIV Solar",
    description: "Escape LUMA blackouts and rising rates. Solar + battery gives you energy independence in Puerto Rico.",
    type: "website",
    url: "https://rivsolar.com/solar/puerto-rico",
    images: [{ url: "https://rivsolar.com/images/puerto-rico-solar-og.jpg", width: 1200, height: 630, alt: "Puerto Rico Solar Installation" }],
  },
  alternates: {
    canonical: "https://rivsolar.com/solar/puerto-rico",
  },
};

// Puerto Rico-specific schema
const prSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rivsolar.com/solar/puerto-rico/#localbusiness",
  "name": "RIV Solar Puerto Rico",
  "image": "https://rivsolar.com/images/riv-logo.png",
  "url": "https://rivsolar.com/solar/puerto-rico",
  "description": "Professional solar panel installation in Puerto Rico. Escape LUMA blackouts with hurricane-rated panels and battery backup. Net metering guaranteed until 2030.",
  "areaServed": [
    { "@type": "City", "name": "San Juan", "containedInPlace": { "@type": "AdministrativeArea", "name": "Puerto Rico" } },
    { "@type": "City", "name": "Ponce", "containedInPlace": { "@type": "AdministrativeArea", "name": "Puerto Rico" } },
    { "@type": "City", "name": "Mayagüez", "containedInPlace": { "@type": "AdministrativeArea", "name": "Puerto Rico" } },
    { "@type": "City", "name": "Carolina", "containedInPlace": { "@type": "AdministrativeArea", "name": "Puerto Rico" } },
    { "@type": "City", "name": "Bayamón", "containedInPlace": { "@type": "AdministrativeArea", "name": "Puerto Rico" } },
  ],
  "priceRange": "$$",
  "availableLanguage": ["English", "Spanish"],
  "serviceType": ["Solar Panel Installation", "Battery Storage Installation", "Solar Financing"],
};

const prFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is solar worth it in Puerto Rico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Puerto Rico has some of the highest electricity rates in the US ($0.27-0.35/kWh with LUMA), frequent blackouts, and year-round sunshine. Solar + battery provides energy independence, protection from rate hikes, and backup power during outages. Most PR homeowners see 60-90% savings."
      }
    },
    {
      "@type": "Question",
      "name": "What incentives are available for solar in Puerto Rico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puerto Rico offers excellent solar incentives: 30% Federal Tax Credit, 100% property tax exemption, sales tax exemption on equipment, net metering extended through 2030 (1:1 credits), and potential grants up to $15,000 through the Solar Incentive Program for qualifying households."
      }
    },
    {
      "@type": "Question",
      "name": "How long does net metering last in Puerto Rico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Governor Pierluisi signed legislation extending Puerto Rico's net metering program through at least 2030. This guarantees 1:1 bill credits for excess solar energy sent to the grid — one of the most generous policies in the US while other states are cutting back."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a battery with solar in Puerto Rico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We strongly recommend battery storage in PR. LUMA's grid experiences frequent outages, and hurricanes can cause extended blackouts. A battery backup keeps your lights on, refrigerator running, and medical equipment powered when the grid fails. It's not just savings — it's security."
      }
    },
    {
      "@type": "Question",
      "name": "Can solar panels survive Puerto Rico hurricanes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We install hurricane-rated panels certified for 160+ mph winds with reinforced mounting systems that exceed Puerto Rico building codes. After Hurricane Maria, many solar homes with proper installations remained powered while the grid was down for months."
      }
    }
  ]
};

const incentives = [
  { title: "30% Federal Tax Credit", value: "$8,000-$15,000", description: "Same federal ITC available to all US citizens" },
  { title: "Property Tax Exemption", value: "100%", description: "Solar value excluded from property taxes" },
  { title: "Sales Tax Exemption", value: "Full Exemption", description: "No sales tax on solar equipment" },
  { title: "Net Metering", value: "Until 2030", description: "Guaranteed 1:1 credits for excess energy" },
  { title: "Solar Incentive Grant", value: "Up to $15,000", description: "For qualifying low-income households" },
];

const lumaProblems = [
  { stat: "$0.32/kWh", label: "Average LUMA rate (vs $0.12 US avg)" },
  { stat: "2,800+", label: "Outages reported monthly" },
  { stat: "58%", label: "Rate increase since 2019" },
  { stat: "11 months", label: "Some areas without power post-Maria" },
];

const cities = [
  { name: "San Juan", savings: "$220/mo", note: "Metro area" },
  { name: "Ponce", savings: "$195/mo", note: "South coast" },
  { name: "Mayagüez", savings: "$185/mo", note: "West coast" },
  { name: "Carolina", savings: "$210/mo", note: "Metro area" },
  { name: "Bayamón", savings: "$205/mo", note: "Metro area" },
  { name: "Caguas", savings: "$190/mo", note: "Central region" },
];

export default function PuertoRicoSolarPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prFaqSchema) }}
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
          title="Puerto Rico Solar Installation"
          subtitle="Escape LUMA blackouts and rising rates. Solar + battery gives you energy independence, hurricane protection, and 60-90% savings on electricity."
          backgroundImage="https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1920&q=80"
          breadcrumb="Puerto Rico Solar"
          ctaText="Get PR Quote"
          secondaryCtaText="Calculate Savings"
        />

        {/* Answer Capsule Section - AEO Optimized */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-violet-50 border-l-4 border-violet-500 rounded-r-lg">
                <Sun className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2">Is Solar Worth It in Puerto Rico?</h2>
                  <p className="text-zinc-700 leading-relaxed">
                    <strong>Yes — Puerto Rico is one of the best places for solar in the entire US.</strong> With LUMA rates averaging $0.32/kWh (nearly 3x the US average), frequent blackouts, and year-round tropical sunshine, solar + battery is essential for Puerto Rican families. Most homeowners save 60-90% on electricity and gain energy independence from an unreliable grid. Net metering is guaranteed until 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LUMA Problem Section */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 px-4 py-2 border border-red-700 w-fit mx-auto mb-6">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">The LUMA Problem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Puerto Rico Deserves Better Than LUMA
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                High rates, constant outages, and broken promises. It's time to take control of your power.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lumaProblems.map((problem) => (
                <div key={problem.label} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">{problem.stat}</div>
                  <p className="text-sm text-zinc-400">{problem.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-zinc-300 text-lg mb-6">
                Solar + battery = freedom from LUMA. Keep your lights on when the grid fails.
              </p>
              <Link
                href="/#savings"
                className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-colors"
              >
                <Battery className="w-5 h-5" />
                Get Solar + Battery Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Puerto Rico Incentives */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                Puerto Rico Solar Incentives 2026
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Puerto Rico protected its solar incentives while mainland states cut back. Net metering guaranteed through 2030.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {incentives.map((incentive) => (
                <div key={incentive.title} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
                  <div className="text-2xl font-bold text-violet-600 mb-2">{incentive.value}</div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">{incentive.title}</h3>
                  <p className="text-sm text-zinc-600">{incentive.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hurricane + Battery Section */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
                  <CloudLightning className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-medium text-zinc-400">Hurricane Ready</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  Never Lose Power Again
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  After Hurricane Maria left parts of Puerto Rico without power for nearly a year, energy resilience isn't optional — it's essential. Our solar + battery systems are designed for Puerto Rico's unique challenges.
                </p>
                <ul className="space-y-4">
                  {[
                    "Hurricane-rated panels (160+ mph winds)",
                    "Battery backup powers essentials for 24-48+ hours",
                    "Automatic transfer when grid fails",
                    "Keep refrigerators, medical equipment, and AC running",
                    "Reinforced mounting exceeds PR building codes",
                    "25-year warranty includes storm damage",
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
                  src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80"
                  alt="Solar panels with battery backup in Puerto Rico"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-medium">
                    "After Maria, we were without power for 8 months. Never again." — Carlos R., Bayamón
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                Serving All of Puerto Rico
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                From San Juan to Ponce, Mayagüez to Caguas — we install solar across the entire island.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <div key={city.name} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-violet-300 transition-colors">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-1">{city.name}</h3>
                  <p className="text-sm text-zinc-500 mb-4">{city.note}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-600">Avg Monthly Savings:</span>
                    <span className="text-violet-600 font-semibold text-lg">{city.savings}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bilingual Note */}
            <div className="mt-12 text-center p-6 bg-violet-50 rounded-xl">
              <p className="text-zinc-700">
                <strong>Hablamos Español.</strong> Nuestro equipo está listo para ayudarte en español o inglés.
                <br className="hidden md:block" />
                Our team is ready to help you in Spanish or English.
              </p>
            </div>
          </div>
        </section>

        {/* Puerto Rico FAQ */}
        <section className="w-full bg-zinc-900 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Puerto Rico Solar FAQ
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {prFaqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.name}</h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related PR Articles */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
                Puerto Rico Solar Resources
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Solar Incentives Puerto Rico 2026", slug: "solar-incentives-puerto-rico-2026", category: "INCENTIVES" },
                { title: "LUMA vs Solar: Take Control", slug: "luma-vs-solar-puerto-rico", category: "LUMA" },
                { title: "Hurricane-Proof Solar for PR", slug: "hurricane-proof-solar-puerto-rico", category: "SAFETY" },
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
          title="Ready to Go Solar in Puerto Rico?"
          subtitle="Escape LUMA. Gain energy independence. Get your free quote and see how much you can save — hablamos español."
          primaryCta="Get PR Quote"
          secondaryCta="Calculadora de Ahorro"
        />
      </main>

      <Footer />
    </>
  );
}
