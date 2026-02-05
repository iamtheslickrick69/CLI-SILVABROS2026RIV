"use client";

import React from "react"
import { motion } from "framer-motion";
import { Sparkles, Shield, HandshakeIcon, DollarSign, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

const featureIcons = [
  <Sparkles key="1" className="w-5 h-5 text-white" />,
  <Shield key="2" className="w-5 h-5 text-white" />,
  <HandshakeIcon key="3" className="w-5 h-5 text-white" />,
  <DollarSign key="4" className="w-5 h-5 text-white" />,
  <Users key="5" className="w-5 h-5 text-white" />,
  <MapPin key="6" className="w-5 h-5 text-white" />,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

interface FeaturesSectionProps {
  className?: string;
}

export function FeaturesSection({
  className,
}: FeaturesSectionProps) {
  const { t } = useLanguage();

  const features = t.features.items.map((item, index) => ({
    id: String(index + 1),
    icon: featureIcons[index],
    title: item.title,
    description: item.description,
  }));

  return (
    <section
      className={cn(
        "w-full py-24 border-b border-zinc-700/30 relative overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/IMG_7384.JPG')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 via-zinc-900/90 to-zinc-900/95" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 mb-16"
        >
          <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit">
            <div className="w-2.5 h-2.5 bg-violet-500" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">
              {t.features.badge}
            </span>
          </div>
          <h2 className="text-balance text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] max-w-[700px] tracking-tight font-condensed">
            {t.features.headline.split(" ").map((word, i) => (
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

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col group p-6 rounded-xl transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-violet-500 to-violet-700 shadow-lg shadow-violet-500/25 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/40">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-xl font-semibold tracking-tight font-sans">
                  {feature.title}
                </h4>
                <p className="text-balance text-zinc-400 text-base leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-zinc-900 hover:bg-zinc-200 px-8"
          >
            {t.features.cta.getQuote}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent px-8"
          >
            {t.features.cta.chatWithAI}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
