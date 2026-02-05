"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Battery, CreditCard, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const services = [
  {
    id: "solar",
    icon: <Sun className="w-6 h-6" />,
    title: "Residential Solar",
    description: "Custom-designed for each home with premium Tier-1 equipment.",
    image: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/house3.jpg",
    features: [
      "QCells, REC, Silfab panels",
      "In-house installation crews",
      "25-year warranty on everything",
      "Optimized for roof layout",
    ],
  },
  {
    id: "battery",
    icon: <Battery className="w-6 h-6" />,
    title: "Battery Storage",
    description: "Tesla Powerwall certified installer with backup protection.",
    image: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/house2.jpg",
    features: [
      "Tesla Powerwall certified",
      "Enphase & Franklin options",
      "Blackout protection included",
      "Maximize NEM 3.0 savings",
    ],
  },
  {
    id: "financing",
    icon: <CreditCard className="w-6 h-6" />,
    title: "Flexible Financing",
    description: "$0 down options with 30% federal tax credit eligible.",
    image: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/coolaihomesavings.jpg",
    features: [
      "$0 down options available",
      "Loans, leases, or cash purchase",
      "30% federal tax credit",
      "5-8 year typical payback",
    ],
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      
      // Calculate which card should be active based on scroll position
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const cardTop = card.getBoundingClientRect().top;
          const cardCenter = cardTop + card.offsetHeight / 2;
          
          // If card center is in upper half of viewport, make it active
          if (cardCenter < viewportHeight * 0.6 && cardCenter > 0) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-zinc-900 py-24 border-b border-zinc-700/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
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
              Our Services
            </span>
          </div>
          <h2 className="text-balance text-white text-4xl md:text-5xl font-semibold leading-[1.1] max-w-[700px] tracking-tight font-[family-name:var(--font-barlow-condensed)] uppercase">
            {"Everything you need to go solar".split(" ").map((word, i) => (
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

        {/* Services - Sticky Scroll Stacking Layout */}
        <div ref={containerRef} className="relative">
          {/* Desktop: Sticky Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12">
            {/* Left: Sticky Image */}
            <div className="relative">
              <div className="sticky top-24 h-[500px] overflow-hidden">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-out",
                      activeIndex === index 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-105"
                    )}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stacking Cards */}
            <div className="flex flex-col gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className={cn(
                    "sticky bg-zinc-900 p-8 border border-zinc-700/50 transition-all duration-500",
                    activeIndex === index 
                      ? "border-violet-500/50 shadow-lg shadow-violet-500/10" 
                      : "border-zinc-700/50"
                  )}
                  style={{ 
                    top: `${96 + index * 20}px`,
                    zIndex: index + 1,
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Icon */}
                    <div className={cn(
                      "w-14 h-14 flex items-center justify-center text-white transition-all duration-500",
                      activeIndex === index 
                        ? "bg-gradient-to-b from-violet-500 to-violet-700" 
                        : "bg-zinc-800"
                    )}>
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-base text-zinc-300">
                          <div className={cn(
                            "w-2 h-2 shrink-0 transition-colors duration-500",
                            activeIndex === index ? "bg-violet-500" : "bg-zinc-600"
                          )} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className="flex items-center gap-2 text-violet-500 text-base font-semibold hover:gap-3 transition-all w-fit uppercase tracking-wide">
                      Learn More
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Standard Stacked Layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-6 p-6 bg-zinc-800/50 border border-zinc-700/50"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-violet-500 to-violet-700 text-white">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-violet-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="flex items-center gap-2 text-violet-500 text-sm font-semibold hover:gap-3 transition-all w-fit uppercase tracking-wide">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
