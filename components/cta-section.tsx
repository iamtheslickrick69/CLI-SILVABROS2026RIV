"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

const videos = [
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/homvevid7.mp4",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/solarrooftops.mp4",
];

export function CtaSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    // Preload all videos for smooth transitions
    videos.forEach((src, index) => {
      const video = videoRefs.current[index];
      if (video) {
        video.load();
      }
    });
  }, []);

  useEffect(() => {
    const video = videoRefs.current[currentVideo];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
      
      const handleEnded = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      };
      
      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, [currentVideo]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Background with Crossfade */}
      <div className="absolute inset-0">
        {videos.map((src, index) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[index] = el; }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentVideo === index ? "opacity-100" : "opacity-0"
            }`}
            src={src}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Vignette effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40"
      >
        <div className="max-w-2xl">
          <motion.h2
            variants={fadeInUp}
            className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl font-[family-name:var(--font-barlow-condensed)] uppercase"
          >
            {t.cta.headline.split(" ").map((word, i) => (
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
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-balance mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            {t.cta.description}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-white px-8 text-black hover:bg-white/90 uppercase font-semibold tracking-wide"
            >
              {t.cta.scheduleCall}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white uppercase font-semibold tracking-wide"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {t.cta.tryCalculator}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
