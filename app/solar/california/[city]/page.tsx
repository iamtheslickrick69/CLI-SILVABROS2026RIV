import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { Sun, DollarSign, Shield, Zap, CheckCircle, MapPin, TrendingUp } from "lucide-react";

// California city data
const cityData: Record<string, {
  name: string;
  utility: string;
  utilityRate: string;
  avgSavings: string;
  sunHours: string;
  population: string;
  avgBill: string;
  paybackYears: string;
  lifetimeSavings: string;
  description: string;
  neighborhoods: string[];
  relatedArticles: { title: string; slug: string; category: string }[];
}> = {
  "san-diego": {
    name: "San Diego",
    utility: "SDG&E",
    utilityRate: "$0.55/kWh",
    avgSavings: "$320/mo",
    sunHours: "5.7",
    population: "1.4M",
    avgBill: "$340",
    paybackYears: "4-6",
    lifetimeSavings: "$85,000",
    description: "San Diego has the highest electricity rates in America through SDG&E. With 266 sunny days per year and peak rates over $0.55/kWh, San Diego homeowners see the fastest solar payback in California.",
    neighborhoods: ["La Jolla", "Chula Vista", "Escondido", "Carlsbad", "Oceanside", "El Cajon", "Poway", "Encinitas"],
    relatedArticles: [
      { title: "SDG&E: Highest Rates in America", slug: "sdge-highest-rates-america-how-to-fight-back", category: "SDG&E" },
      { title: "Is Solar Worth It in California 2026?", slug: "is-solar-worth-it-california-2026", category: "SOLAR ROI" },
      { title: "Do I Need Battery Storage?", slug: "do-i-need-battery-storage-with-solar", category: "BATTERIES" },
    ]
  },
  "riverside": {
    name: "Riverside",
    utility: "SCE",
    utilityRate: "$0.42/kWh",
    avgSavings: "$280/mo",
    sunHours: "5.8",
    population: "320K",
    avgBill: "$300",
    paybackYears: "5-7",
    lifetimeSavings: "$75,000",
    description: "Riverside and the Inland Empire enjoy some of California's best solar conditions with 287 sunny days annually and intense summer sun. SCE rates make solar highly profitable for IE homeowners.",
    neighborhoods: ["Corona", "Moreno Valley", "Murrieta", "Temecula", "Hemet", "Perris", "Lake Elsinore", "Menifee"],
    relatedArticles: [
      { title: "Is Solar Worth It in the Inland Empire?", slug: "is-solar-worth-it-inland-empire", category: "LOCAL" },
      { title: "How Much Can I Save on SCE?", slug: "how-much-can-i-save-solar-sce-bill", category: "SCE" },
      { title: "Tesla Powerwall vs Enphase", slug: "tesla-powerwall-vs-enphase-battery", category: "BATTERIES" },
    ]
  },
  "temecula": {
    name: "Temecula",
    utility: "SCE",
    utilityRate: "$0.42/kWh",
    avgSavings: "$290/mo",
    sunHours: "5.9",
    population: "115K",
    avgBill: "$320",
    paybackYears: "5-7",
    lifetimeSavings: "$78,000",
    description: "Temecula's wine country climate with hot summers and 290+ sunny days makes it ideal for solar. SCE rates continue rising, making battery storage essential for maximizing savings.",
    neighborhoods: ["French Valley", "Redhawk", "Harveston", "Roripaugh Ranch", "Wolf Creek", "Crowne Hill"],
    relatedArticles: [
      { title: "Is Solar Worth It in the Inland Empire?", slug: "is-solar-worth-it-inland-empire", category: "LOCAL" },
      { title: "What Is NEM 3.0?", slug: "what-is-nem-3-how-affect-solar-savings", category: "NEM 3.0" },
      { title: "Solar Before or After EV?", slug: "should-i-get-solar-before-or-after-ev", category: "EV" },
    ]
  },
  "corona": {
    name: "Corona",
    utility: "SCE",
    utilityRate: "$0.42/kWh",
    avgSavings: "$275/mo",
    sunHours: "5.7",
    population: "160K",
    avgBill: "$295",
    paybackYears: "5-7",
    lifetimeSavings: "$72,000",
    description: "Corona's Circle City location in the Inland Empire receives excellent solar exposure. With SCE's rising rates and summer heat driving AC costs, solar provides significant savings.",
    neighborhoods: ["South Corona", "North Corona", "Dos Lagos", "Eagle Glen", "Sierra Del Oro"],
    relatedArticles: [
      { title: "Is Solar Worth It in the Inland Empire?", slug: "is-solar-worth-it-inland-empire", category: "LOCAL" },
      { title: "How Many Panels Do I Need?", slug: "how-many-solar-panels-do-i-need-home", category: "SIZING" },
      { title: "Solar Lease vs Buy", slug: "solar-lease-vs-buy-california", category: "FINANCING" },
    ]
  },
  "escondido": {
    name: "Escondido",
    utility: "SDG&E",
    utilityRate: "$0.55/kWh",
    avgSavings: "$310/mo",
    sunHours: "5.6",
    population: "155K",
    avgBill: "$330",
    paybackYears: "4-6",
    lifetimeSavings: "$82,000",
    description: "Escondido benefits from San Diego County's abundant sunshine and unfortunately also SDG&E's nation-leading rates. Solar provides exceptional ROI for Escondido homeowners.",
    neighborhoods: ["East Escondido", "West Escondido", "San Pasqual Valley", "Valley Center"],
    relatedArticles: [
      { title: "SDG&E: Highest Rates in America", slug: "sdge-highest-rates-america-how-to-fight-back", category: "SDG&E" },
      { title: "How Much Does Solar Cost in CA?", slug: "how-much-does-solar-cost-california-2026", category: "COST" },
      { title: "Battery Storage with Solar", slug: "do-i-need-battery-storage-with-solar", category: "BATTERIES" },
    ]
  },
};

// Generate static params for all cities
export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

// Generate metadata for each city
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    return { title: "City Not Found" };
  }

  return {
    title: `${data.name} Solar Installation | ${data.utility} Solar Savings | RIV Solar`,
    description: `${data.name} solar installation experts. Save ${data.avgSavings}/mo on your ${data.utility} bill. ${data.sunHours} peak sun hours, ${data.paybackYears} year payback. Free quote & 30% tax credit.`,
    keywords: [`${data.name} solar`, `${data.name} solar panels`, `${data.utility} solar`, `solar installation ${data.name}`, `${data.name} solar cost`],
    openGraph: {
      title: `${data.name} Solar Installation | RIV Solar`,
      description: `${data.name} homeowners save ${data.avgSavings}/mo with solar. ${data.utility} rates at ${data.utilityRate}.`,
      type: "website",
      url: `https://rivsolar.com/solar/california/${city}`,
    },
    alternates: {
      canonical: `https://rivsolar.com/solar/california/${city}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    notFound();
  }

  // LocalBusiness Schema for city
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `RIV Solar ${data.name}`,
    "description": data.description,
    "url": `https://rivsolar.com/solar/california/${city}`,
    "areaServed": {
      "@type": "City",
      "name": data.name,
      "containedInPlace": { "@type": "State", "name": "California" }
    },
    "priceRange": "$$",
    "serviceType": ["Solar Panel Installation", "Battery Storage", "NEM 3.0 System Design"]
  };

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
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
          title={`${data.name} Solar Installation`}
          subtitle={`${data.name} homeowners save ${data.avgSavings}/month on ${data.utility}. With ${data.sunHours} peak sun hours and ${data.paybackYears} year payback, solar is a no-brainer.`}
          backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          breadcrumb={`California / ${data.name}`}
          ctaText={`Get ${data.name} Quote`}
          secondaryCtaText="AI Bill Analyzer"
        />

        {/* Quick Answer Box */}
        <section className="w-full bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-violet-50 border-l-4 border-violet-500 rounded-r-lg">
                <Sun className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2">Is Solar Worth It in {data.name}?</h2>
                  <p className="text-zinc-700 leading-relaxed">
                    <strong>Absolutely.</strong> {data.description} The average {data.name} homeowner saves {data.lifetimeSavings}+ over 25 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* City Stats */}
        <section className="w-full bg-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-white mb-4">{data.name} Solar by the Numbers</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <Zap className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{data.utilityRate}</div>
                <p className="text-sm text-zinc-400">{data.utility} Peak Rate</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-400 mb-1">{data.avgSavings}</div>
                <p className="text-sm text-zinc-400">Avg Monthly Savings</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <Sun className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{data.sunHours} hrs</div>
                <p className="text-sm text-zinc-400">Peak Sun Hours/Day</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{data.paybackYears} yrs</div>
                <p className="text-sm text-zinc-400">Payback Period</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-zinc-900 mb-4">Areas We Serve in {data.name}</h2>
              <p className="text-zinc-600">Expert solar installation throughout {data.name} and surrounding communities.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {data.neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full">
                  <MapPin className="w-4 h-4 text-violet-600" />
                  <span className="text-zinc-700">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Solar in This City */}
        <section className="w-full bg-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-6">Why Go Solar in {data.name}?</h2>
                <ul className="space-y-4">
                  {[
                    `${data.utility} charges ${data.utilityRate} during peak hours`,
                    `${data.sunHours} peak sun hours daily = maximum production`,
                    `30% federal tax credit reduces cost by ~$8,000`,
                    `California property tax exemption for solar`,
                    `${data.paybackYears} year payback with ${data.lifetimeSavings}+ lifetime savings`,
                    `Battery backup for PSPS outages and grid failures`,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">{data.name} Solar Investment</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-3 border-b border-zinc-700">
                    <span className="text-zinc-400">Current Avg Bill:</span>
                    <span className="text-red-400 font-semibold">{data.avgBill}/mo</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-700">
                    <span className="text-zinc-400">With Solar:</span>
                    <span className="text-green-400 font-semibold">$10-25/mo</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-700">
                    <span className="text-zinc-400">Monthly Savings:</span>
                    <span className="text-violet-400 font-semibold">{data.avgSavings}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-700">
                    <span className="text-zinc-400">Payback Period:</span>
                    <span className="text-white font-semibold">{data.paybackYears} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">25-Year Savings:</span>
                    <span className="text-green-400 font-bold text-xl">{data.lifetimeSavings}+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-zinc-900 mb-4">{data.name} Solar Resources</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {data.relatedArticles.map((article) => (
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

        {/* Back to California */}
        <section className="w-full bg-zinc-100 py-8">
          <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
            <Link href="/solar/california" className="text-violet-600 hover:text-violet-700 font-medium">
              ← Back to California Solar
            </Link>
          </div>
        </section>

        <PageCta
          title={`Ready to Go Solar in ${data.name}?`}
          subtitle={`Join thousands of ${data.name} families saving ${data.avgSavings}/month on electricity. Free quote in 60 seconds.`}
          primaryCta={`Get ${data.name} Quote`}
          secondaryCta="Try AI Bill Analyzer"
        />
      </main>

      <Footer />
    </>
  );
}
