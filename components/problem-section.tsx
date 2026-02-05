"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, DollarSign, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const problemImages = [
  { src: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/transformer.jpg", alt: "Electrical transformer infrastructure" },
  { src: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/pexels-8335592-19170608.jpg", alt: "Power grid at sunset" },
  { src: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/pexels-amar-12017103.jpg", alt: "Energy infrastructure" },
  { src: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/rooftop.jpg", alt: "Rooftop view" },
];

export function ProblemSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "114%", label: t.problem.stats.rateIncrease, icon: <TrendingUp className="w-5 h-5" /> },
    { value: "3M+", label: t.problem.stats.blackouts, icon: <Zap className="w-5 h-5" /> },
    { value: "$600", label: t.problem.stats.projectedBill, icon: <DollarSign className="w-5 h-5" /> },
    { value: "#1", label: t.problem.stats.highestRates, icon: <AlertTriangle className="w-5 h-5" /> },
  ];

  const utilityRates = [
    { utility: "SDG&E", rate: "55¢", bill: "$385", note: t.problem.highestInUSA },
    { utility: "PG&E", rate: "45¢", bill: "$315", note: "" },
    { utility: "SCE", rate: "42¢", bill: "$294", note: "" },
    { utility: t.problem.withSolar, rate: "20¢", bill: "$140", note: t.problem.yourNewRate, highlight: true },
  ];

  return (
    <>
      {/* Section 1: The Problem - Dark */}
      <section id="problem" className="relative w-full bg-zinc-900 py-24 md:py-32">
        {/* Grain texture overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22 /></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22 fill=%22%23ffffff%22/></svg>'\")",
        }} />
        
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 md:px-12 lg:px-16">
          <div className="space-y-8 text-center flex flex-col items-center w-full">
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit">
              <div className="w-2.5 h-2.5 bg-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">
                {t.problem.badge}
              </span>
            </div>
            <h2 className="text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-5xl font-[family-name:var(--font-barlow-condensed)] uppercase">
              {t.problem.headline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <p className="text-balance text-lg leading-relaxed text-gray-300 md:text-xl max-w-3xl">
              {t.problem.description}
            </p>

            {/* Image Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full pt-4">
              {problemImages.map((img, index) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-zinc-800/50 border border-zinc-700/50"
                >
                  <div className="mb-3 p-2 bg-red-500/10 text-red-400">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-medium text-white">{stat.value}</span>
                  <span className="text-sm text-zinc-400 text-center">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Utility Rates - White */}
      <section className="relative w-full bg-white py-24 md:py-32 border-b border-zinc-200">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 md:px-12 lg:px-16">
          <div className="space-y-8 text-center flex flex-col items-center w-full">
            {/* Utility Comparison Table */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-8">{t.problem.tableTitle}</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="text-left py-4 px-4 text-zinc-500 font-medium">{t.problem.tableHeaders.utility}</th>
                      <th className="text-left py-4 px-4 text-zinc-500 font-medium">{t.problem.tableHeaders.ratePerKwh}</th>
                      <th className="text-left py-4 px-4 text-zinc-500 font-medium">{t.problem.tableHeaders.avgBill}</th>
                      <th className="text-left py-4 px-4 text-zinc-500 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {utilityRates.map((row) => (
                      <tr 
                        key={row.utility} 
                        className={`border-b border-zinc-100 ${row.highlight ? 'bg-violet-500 text-white' : ''}`}
                      >
                        <td className={`py-5 px-4 font-medium ${row.highlight ? 'text-white' : 'text-zinc-900'}`}>
                          {row.utility}
                        </td>
                        <td className={`py-5 px-4 ${row.highlight ? 'text-white' : 'text-zinc-600'}`}>
                          {row.rate}
                        </td>
                        <td className={`py-5 px-4 ${row.highlight ? 'text-white' : 'text-zinc-600'}`}>
                          {row.bill}
                        </td>
                        <td className={`py-5 px-4 text-sm ${row.highlight ? 'text-white' : 'text-red-500'}`}>
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
            
            <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:justify-center">
              <button className="bg-zinc-900 px-8 py-3 font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95 uppercase tracking-wide">
                {t.problem.cta.calculateSavings}
              </button>
              <button className="border border-zinc-300 bg-transparent px-8 py-3 font-semibold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95 uppercase tracking-wide">
                {t.problem.cta.seeSolution}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
