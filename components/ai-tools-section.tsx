"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileText, Sparkles, Zap, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";
import { BillAnalyzerModal } from "@/components/ui/bill-analyzer-modal";

export function AiToolsSection() {
  const { t } = useLanguage();
  const [isBillAnalyzerOpen, setIsBillAnalyzerOpen] = useState(false);

  const openRivChat = () => {
    window.dispatchEvent(new CustomEvent('open-riv-chat'));
  };

  return (
    <section id="ai-tools" className="w-full bg-zinc-900 py-24 border-b border-zinc-700/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 mb-16 text-center items-center"
        >
          <div className="flex items-center gap-3 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300 tracking-wide">
              {t.aiTools.badge}
            </span>
          </div>
          <h2 className="text-balance text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] max-w-[700px] tracking-tight font-[family-name:var(--font-barlow-condensed)] uppercase">
            {t.aiTools.headline.split(" ").map((word, i) => (
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
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
            {t.aiTools.description}
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {/* RIV AI Chatbot */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -60, rotateY: -5 },
              visible: { 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
              }
            }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)",
              transition: { duration: 0.3 } 
            }}
            className="group relative p-6 md:p-8 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-600/0 group-hover:from-violet-500/5 group-hover:to-violet-600/10 transition-all duration-500 rounded-2xl" />
            
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-600 rounded-t-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                {/* Icon with glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full" />
                  <div className="relative p-4 bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-violet-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{t.aiTools.chatbot.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-green-400 text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      {t.aiTools.chatbot.online}
                    </span>
                    <span className="text-zinc-500">|</span>
                    <span className="text-zinc-400 text-sm">{t.aiTools.chatbot.availability}</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 text-sm md:text-base">
                {t.aiTools.chatbot.description}
              </p>

              <ul className="space-y-3 mb-8">
                {t.aiTools.chatbot.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={openRivChat}
                className="w-full md:w-auto bg-white text-zinc-900 hover:bg-zinc-100 font-semibold rounded-xl px-6 py-3 h-auto transition-all hover:shadow-lg hover:shadow-white/10"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.aiTools.chatbot.cta}
              </Button>
            </div>
          </motion.div>

          {/* AI Bill Analyzer */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60, rotateY: 5 },
              visible: { 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                transition: { duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }
              }
            }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)",
              transition: { duration: 0.3 } 
            }}
            className="group relative p-6 md:p-8 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-600/0 group-hover:from-violet-500/5 group-hover:to-violet-600/10 transition-all duration-500 rounded-2xl" />
            
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-violet-400 to-violet-500 rounded-t-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                {/* Icon with glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full" />
                  <div className="relative p-4 bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 rounded-xl">
                    <FileText className="w-6 h-6 text-violet-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{t.aiTools.analyzer.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-violet-400 text-sm">
                      <Sparkles className="w-3 h-3" />
                      {t.aiTools.analyzer.aiPowered}
                    </span>
                    <span className="text-zinc-500">|</span>
                    <span className="text-zinc-400 text-sm">{t.aiTools.analyzer.accuracy}</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 text-sm md:text-base">
                {t.aiTools.analyzer.description}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 rounded-xl group-hover:border-violet-500/20 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Zap className="w-4 h-4 text-violet-400" />
                    <span className="text-2xl font-bold text-white">98%</span>
                  </div>
                  <p className="text-xs text-zinc-500">{t.aiTools.analyzer.stats.accuracy}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 rounded-xl group-hover:border-violet-500/20 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Clock className="w-4 h-4 text-violet-400" />
                    <span className="text-2xl font-bold text-white">30s</span>
                  </div>
                  <p className="text-xs text-zinc-500">{t.aiTools.analyzer.stats.analysis}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 rounded-xl group-hover:border-violet-500/20 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-2xl font-bold text-white">$0</span>
                  </div>
                  <p className="text-xs text-zinc-500">{t.aiTools.analyzer.stats.free}</p>
                </div>
              </div>

              <Button
                onClick={() => setIsBillAnalyzerOpen(true)}
                className="w-full md:w-auto bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold rounded-xl px-6 py-3 h-auto transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {t.aiTools.analyzer.cta}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Popup Widget */}
      <BillAnalyzerModal isOpen={isBillAnalyzerOpen} onClose={() => setIsBillAnalyzerOpen(false)} />
    </section>
  );
}
