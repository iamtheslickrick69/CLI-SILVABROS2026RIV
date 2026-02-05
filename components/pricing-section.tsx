"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp, cardHover, viewportSettings } from "@/lib/animations";
import { ParallaxBackground } from "@/components/parallax-background";

interface FinancingOption {
  id: string;
  name: string;
  headline: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  priceMonthly?: number | string;
  priceYearly?: number | string;
  type?: string;
}

const plans: FinancingOption[] = [
  {
    id: "purchase",
    name: "Purchase",
    headline: "Own It",
    description:
      "Own your system outright. Maximize savings with 30% federal tax credit. Best long-term ROI.",
    features: [
      "30% federal tax credit",
      "Highest long-term savings",
      "Increase home value",
      "Full system ownership",
    ],
    cta: "Get Quote",
    priceMonthly: 500,
    priceYearly: 6000,
    type: "subscription",
  },
  {
    id: "lease",
    name: "Lease",
    headline: "$0 Down",
    description:
      "$0 down, fixed monthly payments. No maintenance worries. Start saving from day one.",
    features: [
      "$0 down payment",
      "Fixed monthly payments",
      "Maintenance included",
      "Immediate savings",
    ],
    cta: "Learn More",
    priceMonthly: 300,
    priceYearly: 3600,
    type: "subscription",
  },
  {
    id: "ppa",
    name: "PPA",
    headline: "Pay Per Use",
    description:
      "Power Purchase Agreement. Pay only for the energy you use. Zero upfront cost.",
    features: [
      "Zero upfront cost",
      "Pay for energy used",
      "No maintenance fees",
      "Predictable rates",
    ],
    cta: "Learn More",
    priceMonthly: "Contact Us",
    type: "one-time",
    popular: true,
  },
  {
    id: "battery",
    name: "Battery",
    headline: "Power Backup",
    description:
      "Tesla Powerwall & Enphase. Backup power during outages. True energy independence.",
    features: [
      "Tesla Powerwall certified",
      "Enphase & Franklin options",
      "Blackout protection",
      "Maximize NEM 3.0 savings",
    ],
    cta: "Add Battery",
    priceMonthly: "Contact Us",
    type: "one-time",
  },
];

export function PricingSection() {
  const options = plans; // Declare the options variable here

  return (
    <section
      id="financing"
      className="relative w-full bg-zinc-900 py-24 md:py-32 border-b border-zinc-700/30 overflow-hidden"
    >
      {/* Parallax Background */}
      <ParallaxBackground
        imageUrl="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/coolaihomesavings.jpg"
        speed={0.2}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit">
            <div className="w-2.5 h-2.5 bg-violet-500" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">Financing</span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl tracking-tight leading-tight font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
            <span className="block">
              {"Flexible options".split(" ").map((word, i) => (
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
            </span>
            <span className="block text-zinc-500">
              {"for every budget".split(" ").map((word, i) => (
                <motion.span
                  key={i + 2}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i + 2) * 0.05 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
        </div>

        {/* Options Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.4, 0.25, 1] 
                  }
                }
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
              className={cn(
                "relative flex flex-col gap-6 p-6 transition-all duration-300 rounded-xl",
                option.popular
                  ? "bg-white border-2 border-violet-500 shadow-xl shadow-violet-500/20 ring-4 ring-violet-500/10 mt-4"
                  : "bg-white border border-zinc-200 shadow-lg"
              )}
            >
              {/* Best Value Badge - Positioned at top */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 px-4 py-1.5 rounded-full shadow-lg shadow-violet-500/30">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Best Value
                  </span>
                </div>
              )}

              {/* Card Head */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-normal text-zinc-900">
                    {option.name}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <h3 className="text-2xl font-normal text-zinc-900 tracking-tighter">
                    {option.headline}
                  </h3>
                </div>

                <p className="text-balance text-sm leading-relaxed text-zinc-600 min-h-[60px]">
                  {option.description}
                </p>
              </div>

              {/* CTA Button */}
              <button
                className={cn(
                  "w-full py-3 px-4 text-sm font-semibold transition-all duration-200 cursor-pointer uppercase tracking-wide",
                  option.popular
                    ? "bg-violet-500 text-white hover:bg-violet-600"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                )}
              >
                {option.cta}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-[1px] bg-zinc-200" />
                <span className="text-xs text-zinc-500 shrink-0">
                  Benefits
                </span>
                <div className="flex-1 h-[1px] bg-zinc-200" />
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 group">
                    <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0" />
                    <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
