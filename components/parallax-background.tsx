"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxBackgroundProps {
  imageUrl: string;
  speed?: number; // 0.1 = subtle, 0.5 = dramatic
  className?: string;
  overlayClassName?: string;
}

export function ParallaxBackground({
  imageUrl,
  speed = 0.3,
  className = "",
  overlayClassName = "",
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to Y movement
  // Negative speed means image moves up as you scroll down (natural parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y }}
        className={cn(
          "absolute inset-0 bg-cover bg-center scale-110",
          className
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </motion.div>
      {overlayClassName && (
        <div className={cn("absolute inset-0", overlayClassName)} />
      )}
    </div>
  );
}
