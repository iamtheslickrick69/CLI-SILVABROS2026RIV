import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { PageCta } from "@/components/page-cta";
import { Footer } from "@/components/footer";
import { Sun, DollarSign, Shield, Zap, CheckCircle, MapPin, TrendingUp, CloudLightning, Battery } from "lucide-react";

// Puerto Rico city data
const cityData: Record<string, {
  name: string;
  nameEs: string;
  utility: string;
  utilityRate: string;
  avgSavings: string;
  sunHours: string;
  population: string;
  avgBill: string;
  paybackYears: string;
  lifetimeSavings: string;
  description: string;
  descriptionEs: string;
  neighborhoods: string[];
  gridNote: string;
  relatedArticles: { title: string; slug: string; category: string }[];
}> = {
  "san-juan": {
    name: "San Juan",
    nameEs: "San Juan",
    utility: "LUMA Energy",
    utilityRate: "$0.32/kWh",
    avgSavings: "$350/mo",
    sunHours: "5.8",
    population: "320K",
    avgBill: "$380",
    paybackYears: "4-5",
    lifetimeSavings: "$95,000",
    description: "San Juan, Puerto Rico's capital, faces constant LUMA outages and the highest electricity rates in the US. Solar with battery storage is essential for San Juan homeowners seeking reliable power and significant savings.",
    descriptionEs: "San Juan enfrenta apagones constantes de LUMA y las tarifas de electricidad más altas de EE.UU. Solar con batería es esencial para hogares en San Juan.",
    neighborhoods: ["Condado", "Santurce", "Río Piedras", "Hato Rey", "Miramar", "Ocean Park", "Isla Verde", "Guaynabo"],
    gridNote: "Battery backup essential for daily LUMA outages in metro San Juan",
    relatedArticles: [
      { title: "San Juan Solar Guide", slug: "solar-energy-san-juan-guide", category: "SAN JUAN" },
      { title: "Survive LUMA Outages", slug: "survive-luma-power-outages-solar", category: "LUMA" },
      { title: "PR Solar Incentives", slug: "solar-incentives-puerto-rico-2026", category: "INCENTIVES" },
    ]
  },
  "ponce": {
    name: "Ponce",
    nameEs: "Ponce",
    utility: "LUMA Energy",
    utilityRate: "$0.32/kWh",
    avgSavings: "$320/mo",
    sunHours: "5.9",
    population: "130K",
    avgBill: "$350",
    paybackYears: "4-5",
    lifetimeSavings: "$90,000",
    description: "Ponce on Puerto Rico's southern coast enjoys excellent solar conditions with slightly more sun than the north. LUMA's unreliable service makes battery backup critical for La Perla del Sur.",
    descriptionEs: "Ponce disfruta excelentes condiciones solares. El servicio poco confiable de LUMA hace que la batería sea crítica para La Perla del Sur.",
    neighborhoods: ["Ponce Centro", "La Playa", "El Tuque", "Sabanetas", "Bucaná", "Coto Laurel"],
    gridNote: "Southern coast sees slightly better sun and fewer storms than north",
    relatedArticles: [
      { title: "How to Go Solar in PR", slug: "how-to-go-solar-puerto-rico", category: "GUIDE" },
      { title: "LUMA vs Solar Cost", slug: "solar-panels-vs-luma-cost-25-years", category: "COST" },
      { title: "Hurricane-Proof Solar", slug: "can-solar-panels-survive-hurricane-puerto-rico", category: "HURRICANE" },
    ]
  },
  "bayamon": {
    name: "Bayamón",
    nameEs: "Bayamón",
    utility: "LUMA Energy",
    utilityRate: "$0.32/kWh",
    avgSavings: "$340/mo",
    sunHours: "5.7",
    population: "170K",
    avgBill: "$365",
    paybackYears: "4-5",
    lifetimeSavings: "$92,000",
    description: "Bayamón, part of the San Juan metro area, suffers from LUMA's frequent outages affecting hospitals, businesses, and homes. Solar with battery provides energy independence for Puerto Rico's second-largest city.",
    descriptionEs: "Bayamón sufre apagones frecuentes de LUMA. Solar con batería proporciona independencia energética para la segunda ciudad más grande de PR.",
    neighborhoods: ["Bayamón Centro", "Santa Rosa", "Buena Vista", "Hato Tejas", "Villa Rica", "Minillas"],
    gridNote: "Critical infrastructure in metro Bayamón needs reliable backup power",
    relatedArticles: [
      { title: "PR Grid Failures", slug: "puerto-rico-grid-failures-energy-independence", category: "GRID" },
      { title: "Finance Solar $0 Down", slug: "finance-solar-zero-down-puerto-rico", category: "FINANCING" },
      { title: "Battery Options", slug: "tesla-powerwall-vs-enphase-vs-franklin-puerto-rico", category: "BATTERY" },
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
    title: `${data.name} Solar Installation | LUMA Alternative | RIV Solar`,
    description: `${data.name}, Puerto Rico solar installation. Escape LUMA with solar + battery. Save ${data.avgSavings}/mo, reliable backup power, 30% tax credit.`,
    keywords: [`${data.name} solar`, `solar panels ${data.name}`, `LUMA alternative ${data.name}`, `Puerto Rico solar`, `${data.nameEs} energía solar`],
    openGraph: {
      title: `${data.name} Solar Installation | RIV Solar`,
      description: `${data.name} PR homeowners escape LUMA with solar + battery. Save ${data.avgSavings}/mo.`,
      type: "website",
      url: `https://rivsolar.com/solar/puerto-rico/${city}`,
    },
    alternates: {
      canonical: `https://rivsolar.com/solar/puerto-rico/${city}`,
    },
  };
}

export default async function PRCityPage({ params }: { params: Promise<{ city: string }> }) {
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
    "url": `https://rivsolar.com/solar/puerto-rico/${city}`,
    "areaServed": {
      "@type": "City",
      "name": data.name,
      "containedInPlace": { "@type": "AdministrativeArea", "name": "Puerto Rico" }
    },
    "priceRange": "$$",
    "serviceType": ["Solar Panel Installation", "Battery Storage", "LUMA Alternative", "Hurricane-Resistant Solar"]
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
          subtitle={`Escape LUMA in ${data.name}. Solar + battery saves ${data.avgSavings}/month and keeps your power on during blackouts. ${data.paybackYears} year payback.`}
          backgroundImage="https://images.unsplash.com/photo-1548515997-0b8d044ff7fa?w=1920&q=80"
          breadcrumb={`Puerto Rico / ${data.name}`}
          ctaText={`Get ${data.name} Quote`}
          secondaryCtaText="AI Bill Analyzer"
        />

        {/* Quick Answer - Bilingual */}
        <section className="w-full bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-start gap-4 p-6 bg-violet-50 border-l-4 border-violet-500 rounded-r-lg">
                <Sun className="w-8 h-8 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2">Is Solar Worth It in {data.name}, Puerto Rico?</h2>
                  <p className="text-zinc-700 leading-relaxed">
                    <strong>Absolutely essential.</strong> {data.description} The average {data.name} homeowner saves {data.lifetimeSavings}+ over 25 years while gaining independence from LUMA's failing grid.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <span className="text-2xl">🇵🇷</span>
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2">¿Vale la pena el solar en {data.nameEs}?</h2>
                  <p className="text-zinc-700 leading-relaxed">
                    <strong>Absolutamente esencial.</strong> {data.descriptionEs} Ahorro promedio: {data.lifetimeSavings}+ en 25 años. Servicio bilingüe disponible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl font-semibold text-white mb-12 text-center">{data.name} Solar Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <Zap className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400 mb-1">{data.utilityRate}</div>
                <p className="text-sm text-zinc-400">LUMA Rate (Highest in US)</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-400 mb-1">{data.avgSavings}</div>
                <p className="text-sm text-zinc-400">Monthly Savings</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <Battery className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <p className="text-sm text-zinc-400">Battery Backup Power</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{data.paybackYears} yrs</div>
                <p className="text-sm text-zinc-400">Fastest Payback in US</p>
              </div>
            </div>
          </div>
        </section>

        {/* LUMA Independence */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 px-4 py-2 border border-red-200 bg-red-50 w-fit mb-6 rounded-lg">
                  <CloudLightning className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-red-700">Escape LUMA / Escapa de LUMA</span>
                </div>
                <h2 className="text-3xl font-semibold text-zinc-900 mb-6">{data.gridNote}</h2>
                <ul className="space-y-4">
                  {[
                    "End dependence on LUMA's unreliable grid",
                    "Battery keeps power on during daily outages",
                    "Hurricane-rated panels (150+ mph)",
                    "Run AC, refrigeration, medical equipment",
                    "Solar recharges battery each day automatically",
                    "30% federal tax credit + PR exemptions",
                    "Bilingual support / Soporte bilingüe",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">{data.name} vs LUMA: 25 Years</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-3 border-b border-zinc-200">
                    <span className="text-zinc-600">LUMA Monthly Bill:</span>
                    <span className="text-red-600 font-semibold">{data.avgBill}/mo</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-200">
                    <span className="text-zinc-600">25-Year LUMA Cost:</span>
                    <span className="text-red-600 font-bold">$140,000+</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-200">
                    <span className="text-zinc-600">Solar Net Cost:</span>
                    <span className="text-green-600 font-semibold">$18,000-25,000</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-zinc-200">
                    <span className="text-zinc-600">Monthly Savings:</span>
                    <span className="text-violet-600 font-semibold">{data.avgSavings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600">25-Year Savings:</span>
                    <span className="text-green-600 font-bold text-xl">{data.lifetimeSavings}+</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mt-4">Plus: Reliable power during every blackout</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="w-full bg-zinc-900 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">Áreas que servimos en {data.name}</h2>
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
            <Link href="/solar/puerto-rico" className="text-violet-600 hover:text-violet-700 font-medium">
              ← Back to Puerto Rico Solar
            </Link>
          </div>
        </section>

        <PageCta
          title={`¿Listo para solar en ${data.name}?`}
          subtitle={`Únete a miles de familias en ${data.name} con energía solar confiable. Cotización gratis en 60 segundos. Servicio bilingüe.`}
          primaryCta={`Get ${data.name} Quote`}
          secondaryCta="Try AI Bill Analyzer"
        />
      </main>

      <Footer />
    </>
  );
}
