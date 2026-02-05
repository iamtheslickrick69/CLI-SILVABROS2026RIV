"use client";

import { motion } from "framer-motion";
import { X, Check, TrendingUp, Lock, Zap, Settings, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeInUp, scaleIn, viewportSettings } from "@/lib/animations";

export function ComparisonSection() {
  const comparisons = [
    { category: "Monthly Bill", without: "$350-500", with: "$0-15", icon: DollarSign, highlight: false },
    { category: "Rate Increases", without: "7-9% yearly", with: "Locked in", icon: TrendingUp, highlight: false },
    { category: "Blackouts", without: "At mercy of grid", with: "Battery backup", icon: Zap, highlight: false },
    { category: "Control", without: "None", with: "100%", icon: Settings, highlight: false },
    { category: "25-Year Cost", without: "$150,000+", with: "$0 after payoff", icon: Lock, highlight: true },
  ];

  return (
    <section className="relative w-full bg-zinc-900 py-24 border-b border-zinc-700/30 overflow-hidden">
      {/* Background Image - Bright house */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-110 saturate-110"
        style={{
          backgroundImage: "url('https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/house1.jpg')",
        }}
      />
      {/* Lighter overlay to keep brightness but ensure readability */}
      <div className="absolute inset-0 bg-zinc-900/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 mb-16 text-center items-center"
        >
          <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit">
            <div className="w-2.5 h-2.5 bg-violet-500" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">
              The Difference
            </span>
          </div>
          <h2 className="text-balance text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight font-condensed">
            {"Without Solar vs With Solar".split(" ").map((word, i) => (
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
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          {/* Header Row - Hidden on mobile, shown on md+ */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-zinc-900/80 backdrop-blur-sm" />
            <div className="p-4 bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-center">
              <X className="w-5 h-5 text-red-400 mx-auto mb-2" />
              <span className="text-red-400 font-medium">Without Solar</span>
            </div>
            <div className="p-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-center">
              <Check className="w-5 h-5 text-green-400 mx-auto mb-2" />
              <span className="text-green-400 font-medium">With Solar</span>
            </div>
          </div>

          {/* Mobile Column Headers */}
          <div className="md:hidden flex justify-center gap-8 mb-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
              <X className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Without</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">With Solar</span>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((row, index) => {
            const IconComponent = row.icon;
            return (
              <motion.div
                key={row.category}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                className={`mb-3 md:mb-0 transition-all duration-300 hover:bg-white/5 ${
                  row.highlight ? "ring-2 ring-violet-500/50 rounded-lg" : ""
                }`}
              >
                {/* Mobile Layout - Stacked */}
                <div className="md:hidden p-4 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent className={`w-4 h-4 ${row.highlight ? "text-violet-400" : "text-zinc-500"}`} />
                    <span className={`font-medium text-sm ${row.highlight ? "text-violet-300" : "text-white"}`}>{row.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <X className="w-3 h-3 text-red-400/60" />
                      <span className="text-red-400 text-sm">{row.without}</span>
                    </div>
                    <div className="text-zinc-600">vs</div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-400/60" />
                      <span className="text-green-400 text-sm font-medium">{row.with}</span>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Grid */}
                <div className={`hidden md:grid grid-cols-3 gap-4 border-b border-zinc-700/30`}>
                  <div className={`p-4 flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm ${row.highlight ? "rounded-l-lg" : ""}`}>
                    <IconComponent className={`w-4 h-4 ${row.highlight ? "text-violet-400" : "text-zinc-500"}`} />
                    <span className={`font-medium ${row.highlight ? "text-violet-300" : "text-white"}`}>{row.category}</span>
                  </div>
                  <div className="p-4 flex items-center justify-center gap-2 bg-zinc-900/80 backdrop-blur-sm">
                    <X className="w-4 h-4 text-red-400/60" />
                    <span className="text-red-400">{row.without}</span>
                  </div>
                  <div className={`p-4 flex items-center justify-center gap-2 bg-zinc-900/80 backdrop-blur-sm ${row.highlight ? "rounded-r-lg" : ""}`}>
                    <Check className="w-4 h-4 text-green-400/60" />
                    <span className="text-green-400 font-medium">{row.with}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/#savings"
            className="group flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
          >
            Calculate Your Savings
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
