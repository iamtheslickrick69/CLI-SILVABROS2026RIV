import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { Sun, DollarSign, Shield, Zap, CheckCircle, MapPin, TrendingUp, CloudLightning } from "lucide-react";

// Florida city data
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
  hurricaneNote: string;
  relatedArticles: { title: string; slug: string; category: string }[];
}> = {
  "tampa": {
    name: "Tampa",
    utility: "Tampa Electric (TECO)",
    utilityRate: "$0.14/kWh",
    avgSavings: "$180/mo",
    sunHours: "5.6",
    population: "400K",
    avgBill: "$200",
    paybackYears: "6-8",
    lifetimeSavings: "$55,000",
    description: "Tampa Bay's abundant sunshine and growing population make it a solar hotspot. With hurricane season threats, battery backup provides essential resilience alongside significant utility savings.",
    neighborhoods: ["South Tampa", "Westshore", "Carrollwood", "Temple Terrace", "Brandon", "Riverview", "Wesley Chapel", "New Tampa"],
    hurricaneNote: "Battery backup keeps power on during Tampa's hurricane season",
    relatedArticles: [
      { title: "Tampa Bay Solar Guide", slug: "solar-energy-tampa-bay-guide", category: "TAMPA" },
      { title: "Hurricane-Proof Solar Panels", slug: "can-solar-panels-survive-florida-hurricane", category: "HURRICANE" },
      { title: "Battery Backup for Storms", slug: "solar-battery-ac-running-florida-storms", category: "BATTERY" },
    ]
  },
  "miami": {
    name: "Miami",
    utility: "FPL",
    utilityRate: "$0.16/kWh",
    avgSavings: "$200/mo",
    sunHours: "5.7",
    population: "450K",
    avgBill: "$220",
    paybackYears: "6-7",
    lifetimeSavings: "$60,000",
    description: "Miami's year-round sunshine and FPL's rising rates make solar highly attractive. Hurricane resilience through battery backup is essential for South Florida homeowners.",
    neighborhoods: ["Coral Gables", "Coconut Grove", "Brickell", "Kendall", "Homestead", "Miami Beach", "Doral", "Hialeah"],
    hurricaneNote: "Essential backup power for Miami's intense hurricane season",
    relatedArticles: [
      { title: "Miami Solar Guide", slug: "solar-energy-miami-homeowner-guide", category: "MIAMI" },
      { title: "FPL Net Metering", slug: "net-metering-florida-fpl-duke", category: "FPL" },
      { title: "Solar Survives Hurricanes", slug: "can-solar-panels-survive-florida-hurricane", category: "HURRICANE" },
    ]
  },
  "orlando": {
    name: "Orlando",
    utility: "Duke Energy / OUC",
    utilityRate: "$0.13/kWh",
    avgSavings: "$160/mo",
    sunHours: "5.5",
    population: "310K",
    avgBill: "$180",
    paybackYears: "7-8",
    lifetimeSavings: "$50,000",
    description: "Central Florida's sunny climate and tourist-driven economy make Orlando ideal for solar. Afternoon thunderstorms don't significantly impact annual production.",
    neighborhoods: ["Dr. Phillips", "Winter Park", "Lake Nona", "Celebration", "Windermere", "Kissimmee", "Clermont", "Altamonte Springs"],
    hurricaneNote: "Battery backup for Central Florida storms and outages",
    relatedArticles: [
      { title: "Orlando Solar Guide", slug: "solar-energy-orlando-central-florida", category: "ORLANDO" },
      { title: "Duke Energy Solar", slug: "duke-energy-florida-solar-savings", category: "DUKE" },
      { title: "Florida Solar Tax Exemptions", slug: "florida-solar-tax-exemptions", category: "INCENTIVES" },
    ]
  },
  "jacksonville": {
    name: "Jacksonville",
    utility: "JEA",
    utilityRate: "$0.12/kWh",
    avgSavings: "$140/mo",
    sunHours: "5.4",
    population: "950K",
    avgBill: "$160",
    paybackYears: "7-9",
    lifetimeSavings: "$45,000",
    description: "Jacksonville's massive footprint and JEA's supportive net metering make it great for solar. Slightly cooler temps actually improve panel efficiency year-round.",
    neighborhoods: ["Riverside", "San Marco", "Mandarin", "Orange Park", "Ponte Vedra", "St. Augustine", "Fleming Island", "Nocatee"],
    hurricaneNote: "North Florida sees fewer direct hits but backup power still valuable",
    relatedArticles: [
      { title: "Jacksonville Solar Guide", slug: "solar-energy-jacksonville-north-florida", category: "JAX" },
      { title: "Florida Solar Incentives", slug: "florida-solar-incentives-tax-credits-2026", category: "INCENTIVES" },
      { title: "How to Go Solar in Florida", slug: "how-to-go-solar-florida", category: "GUIDE" },
    ]
  },
};

// Generate static params
export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    return { title: "City Not Found" };
  }

  return {
    title: `${data.name} Solar Installation | ${data.utility} Solar | RIV Solar`,
    description: `${data.name} solar installation. Save ${data.avgSavings}/mo on ${data.utility}. Hurricane-proof panels, battery backup, 30% tax credit. Free quote.`,
    keywords: [`${data.name} solar`, `${data.name} solar panels`, `${data.utility} solar`, `solar installation ${data.name} Florida`],
    openGraph: {
      title: `${data.name} Solar Installation | RIV Solar`,
      description: `${data.name} FL homeowners save ${data.avgSavings}/mo with solar + battery backup.`,
      type: "website",
      url: `https://rivsolar.com/solar/florida/${city}`,
    },
    alternates: {
      canonical: `https://rivsolar.com/solar/florida/${city}`,
    },
  };
}

export default async function FloridaCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    notFound();
  }

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `RIV Solar ${data.name}`,
    "description": data.description,
    "url": `https://rivsolar.com/solar/florida/${city}`,
    "areaServed": {
      "@type": "City",
      "name": data.name,
      "containedInPlace": { "@type": "State", "name": "Florida" }
    },
    "priceRange": "$$",
    "serviceType": ["Solar Panel Installation", "Battery Storage", "Hurricane-Resistant Solar"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

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
          subtitle={`${data.name} homeowners save ${data.avgSavings}/month with hurricane-proof solar + battery backup. ${data.sunHours} peak sun hours, ${data.paybackYears} year payback.`}
          backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          breadcrumb={`Florida / ${data.name}`}
          ctaText={`Get ${data.name} Quote`}
          secondaryCtaText="AI Bill Analyzer"
        />

        {/* Quick Answer */}
        <section className="w-full bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-violet-50 border-l-4 border-violet-500 rounded-r-lg">
                <Sun className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2">Is Solar Worth It in {data.name}, Florida?</h2>
                  <p className="text-zinc-700 leading-relaxed">
                    <strong>Yes!</strong> {data.description} With Florida's tax exemptions and 30% federal credit, the average {data.name} homeowner saves {data.lifetimeSavings}+ over 25 years while gaining hurricane resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl font-semibold text-white mb-12 text-center">{data.name} Solar by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <Zap className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{data.utilityRate}</div>
                <p className="text-sm text-zinc-400">{data.utility} Rate</p>
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
                <CloudLightning className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">150+ mph</div>
                <p className="text-sm text-zinc-400">Hurricane Rated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hurricane Resilience */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 px-4 py-2 border border-blue-200 bg-blue-50 w-fit mb-6 rounded-lg">
                  <CloudLightning className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Hurricane Resilience</span>
                </div>
                <h2 className="text-3xl font-semibold text-zinc-900 mb-6">{data.hurricaneNote}</h2>
                <ul className="space-y-4">
                  {[
                    "Panels rated for 150+ mph winds",
                    "Battery keeps power on when grid fails",
                    "Run AC during multi-day outages",
                    "Protect refrigerated medicine and food",
                    "Automatic backup - no generator hassle",
                    "Solar recharges battery each day",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">{data.name} Solar Investment</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-3 border-b border-zinc-200">
                    <span className="text-zinc-600">Current Avg Bill:</span>
                    <span className="text-red-600 font-semibold">{data.avgBill}/mo</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-200">
                    <span className="text-zinc-600">With Solar:</span>
                    <span className="text-green-600 font-semibold">$15-30/mo</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-200">
                    <span className="text-zinc-600">Monthly Savings:</span>
                    <span className="text-violet-600 font-semibold">{data.avgSavings}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-200">
                    <span className="text-zinc-600">Payback Period:</span>
                    <span className="text-zinc-900 font-semibold">{data.paybackYears} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600">25-Year Savings:</span>
                    <span className="text-green-600 font-bold text-xl">{data.lifetimeSavings}+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="w-full bg-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">Areas We Serve in {data.name}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.neighborhoods.map((n) => (
                <div key={n} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span className="text-zinc-300">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl font-semibold text-zinc-900 mb-12 text-center">{data.name} Solar Resources</h2>
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

        <section className="w-full bg-zinc-100 py-8">
          <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
            <Link href="/solar/florida" className="text-violet-600 hover:text-violet-700 font-medium">
              ← Back to Florida Solar
            </Link>
          </div>
        </section>

        <PageCta
          title={`Ready to Go Solar in ${data.name}?`}
          subtitle={`Join thousands of ${data.name} families with hurricane-proof solar + battery backup. Free quote in 60 seconds.`}
          primaryCta={`Get ${data.name} Quote`}
          secondaryCta="Try AI Bill Analyzer"
        />
      </main>

      <Footer />
    </>
  );
}
