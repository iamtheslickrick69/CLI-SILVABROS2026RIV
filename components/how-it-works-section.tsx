"use client";

import { motion } from "framer-motion";
import { Calculator, Ruler, Wrench, Sun } from "lucide-react";
import { staggerContainer, lineGrow, viewportSettings } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "AI-powered bill analysis + expert call. See your exact savings in minutes.",
    icon: Calculator,
  },
  {
    number: "02",
    title: "Custom Design",
    description: "Satellite imagery + optimized system design tailored to your home and usage.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Professional Install",
    description: "In-house crews, no subcontractors. Typically completed in 1-2 days.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Start Saving",
    description: "Monitor your production and savings in real-time. Welcome to energy freedom.",
    icon: Sun,
  },
];

export function HowItWorksSection() {
  return (
    <section className="w-full bg-zinc-950 py-24 md:py-32 border-b border-zinc-700/30 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6"
          >
            <div className="w-2.5 h-2.5 bg-violet-500" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">
              The Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] font-condensed"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-balance text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl"
          >
            From first call to energy independence in 4 simple steps. We handle everything.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                  transition: { 
                    duration: 0.7, 
                    delay: index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1] 
                  }
                }
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <motion.div 
                  variants={lineGrow}
                  className="hidden lg:block absolute top-10 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gradient-to-r from-violet-500/50 to-transparent origin-left" 
                />
              )}

              {/* Card */}
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl h-full transition-all duration-300 hover:bg-zinc-900/80 hover:border-violet-500/30">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-violet-500/20 font-condensed">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/30 group-hover:bg-violet-500/20 transition-colors">
                    <step.icon className="w-6 h-6 text-violet-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 font-sans">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
