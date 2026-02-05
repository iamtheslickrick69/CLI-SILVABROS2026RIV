"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Sunrun", logo: "/images/1.png" },
  { name: "Better Earth", logo: "/images/2.png" },
  { name: "Solaria", logo: "/images/3.png" },
  { name: "EnFin by Qcells", logo: "/images/5.png" },
  { name: "LightReach", logo: "/images/6.png" },
  { name: "Freedom Forever", logo: "/images/7.png" },
];

export function LogoSection() {
  return (
    <section className="relative w-full bg-zinc-900 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
      
      {/* CSS Keyframes for smooth infinite scroll */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee 45s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 px-6"
        >
          <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            Industry Leaders
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Trusted by Top Solar Partners
          </h3>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Left fade gradient - smaller on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 lg:w-48 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent z-10 pointer-events-none" />

          {/* Right fade gradient - smaller on mobile */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 lg:w-48 bg-gradient-to-l from-zinc-900 via-zinc-900/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track - two identical sets for seamless loop */}
          <div className="flex overflow-hidden">
            <div className="marquee-track flex shrink-0">
              {/* First set of logos */}
              {partners.map((partner, idx) => (
                <div
                  key={`first-${partner.name}-${idx}`}
                  className="group flex-shrink-0 flex items-center justify-center mx-4 md:mx-12 lg:mx-14"
                >
                  <div className="relative w-28 h-16 md:w-52 md:h-26 lg:w-60 lg:h-28 transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-60 md:opacity-50 group-hover:opacity-100 transition-all duration-300"
                      sizes="(max-width: 768px) 112px, (max-width: 1024px) 208px, 240px"
                    />
                  </div>
                </div>
              ))}
              {/* Second set of logos (duplicate for seamless loop) */}
              {partners.map((partner, idx) => (
                <div
                  key={`second-${partner.name}-${idx}`}
                  className="group flex-shrink-0 flex items-center justify-center mx-4 md:mx-12 lg:mx-14"
                >
                  <div className="relative w-28 h-16 md:w-52 md:h-26 lg:w-60 lg:h-28 transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-60 md:opacity-50 group-hover:opacity-100 transition-all duration-300"
                      sizes="(max-width: 768px) 112px, (max-width: 1024px) 208px, 240px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-zinc-500 text-sm mt-10 md:mt-12 px-6"
        >
          Partnered with America&apos;s most trusted solar providers
        </motion.p>
      </div>
    </section>
  );
}
