"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "@/components/parallax-background";

export function MissionSection() {
  return (
    <section className="relative w-full bg-zinc-900 py-24 md:py-32 border-b border-zinc-700/30 overflow-hidden">
      {/* Parallax Background - Black & White */}
      <ParallaxBackground
        imageUrl="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/IMG_7383.JPG"
        speed={0.2}
        className="grayscale"
        overlayClassName="bg-zinc-900/80"
      />
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-balance text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/90 font-normal"
          >
            At RIV SOLAR, our mission is to empower all homeowners with clarity and understanding when it comes to their utility bill. Nearly 1/4 families struggle to pay the utility bill — and that's not okay with us. We are here to set the standard of the energy sector by empowering homeowners with clarity, and access to the best solutions for their family.{" "}
            <span className="text-violet-500">Solar isn{"'"}t for everyone</span> — but then again, being stuck with one option isn{"'"}t either.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
