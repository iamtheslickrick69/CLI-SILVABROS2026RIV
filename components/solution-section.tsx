"use client";

import { cn } from "@/lib/utils"
import { useState } from "react"
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const stepImages = [
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/comparison.jpg",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/blueprint.jpg",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/IMG_7384.JPG",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/lightbulb.jpg",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/IMG_7387.JPG",
];

export function SolutionSection() {
  const { t } = useLanguage();

  const steps = t.solution.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    shortTitle: step.shortTitle,
    description: step.description,
    image: stepImages[index],
  }));

  return (
    <section id="solution" className="w-full bg-zinc-900 text-white py-24 flex flex-col items-center overflow-hidden border-b border-zinc-700/30">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-16 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit">
            <div className="w-2.5 h-2.5 bg-violet-500" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">
              {t.solution.badge}
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
            {t.solution.headline.split(" ").map((word, i) => (
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
          <p className="text-balance text-zinc-400 text-base leading-relaxed max-w-2xl">
            {t.solution.description}
          </p>
        </div>

        {/* Expandable Image Gallery - Desktop */}
        <div className="hidden md:flex items-center gap-2 h-[500px] w-full mt-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative group flex-grow transition-all w-24 rounded-lg overflow-hidden h-[500px] duration-500 hover:w-full"
            >
              {/* Image */}
              <img
                className="h-full w-full object-cover object-center"
                src={step.image || "/placeholder.svg"}
                alt={step.title}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-violet-500 text-white text-sm font-bold rounded-full">
                  {step.id}
                </div>
                
                {/* Short Title (visible when collapsed) */}
                <div className="group-hover:opacity-0 transition-opacity duration-500">
                  <span className="text-white text-base font-semibold uppercase tracking-wide">
                    {step.shortTitle}
                  </span>
                </div>
                
                {/* Full Content (visible when expanded) */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bottom-6 left-6 right-6 space-y-2">
                  <h3 className="text-white text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-zinc-300 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Fallback - Stack Cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-lg overflow-hidden h-48"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={step.image || "/placeholder.svg"}
                alt={step.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center bg-violet-500 text-white text-sm font-bold rounded-full">
                  {step.id}
                </div>
                <h3 className="text-white text-lg font-semibold">{step.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed line-clamp-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer/CTA Area */}
        <div className="pt-12 flex justify-center border-t border-white/5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-semibold flex items-center gap-2 uppercase tracking-wide"
          >
            {t.solution.cta}
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
