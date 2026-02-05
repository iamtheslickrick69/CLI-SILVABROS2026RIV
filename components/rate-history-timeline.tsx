"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface RateItem {
  year: string;
  rate: string;
  event: string;
}

interface RateHistoryTimelineProps {
  rateHistory: RateItem[];
}

// Animated counter component for the rate values
function AnimatedRate({ rate, isInView }: { rate: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(rate.replace(/[^0-9]/g, ""));
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    const duration = 1000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * numericValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue]);
  
  const suffix = rate.includes("+") ? "+" : "";
  
  return (
    <span>{displayValue}{suffix}¢/kWh</span>
  );
}

// Individual timeline item with scroll-triggered animations
function TimelineItem({ item, index, totalItems }: { item: RateItem; index: number; totalItems: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;
  
  // Calculate intensity based on rate (higher rate = more red)
  const rateValue = parseInt(item.rate.replace(/[^0-9]/g, ""));
  const intensity = Math.min((rateValue - 20) / 50, 1); // Normalize between 0-1
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -80 : 80, scale: 0.9 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={`flex items-center gap-4 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Card */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div 
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            scale: 1.03, 
            boxShadow: `0 20px 40px rgba(139, 92, 246, 0.2)`,
            borderColor: "rgba(139, 92, 246, 0.5)"
          }}
          className="p-6 bg-zinc-800/50 border border-zinc-700/50 inline-block backdrop-blur-sm transition-colors duration-300"
          style={{
            background: isInView ? `linear-gradient(135deg, rgba(239, 68, 68, ${intensity * 0.1}) 0%, rgba(39, 39, 42, 0.5) 100%)` : undefined
          }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-violet-500 font-medium text-lg"
          >
            {item.year}
          </motion.span>
          <div className="text-3xl md:text-4xl font-medium text-white my-2">
            <AnimatedRate rate={item.rate} isInView={isInView} />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-zinc-400 text-sm"
          >
            {item.event}
          </motion.p>
        </motion.div>
      </div>
      
      {/* Dot with pulse animation */}
      <div className="hidden md:flex relative z-10">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 15,
            delay: 0.1
          }}
          className="w-5 h-5 bg-violet-500 rounded-full relative"
        >
          {/* Pulse ring */}
          <motion.div
            initial={{ scale: 1, opacity: 0.8 }}
            animate={isInView ? { 
              scale: [1, 2, 2.5], 
              opacity: [0.8, 0.4, 0] 
            } : {}}
            transition={{ 
              duration: 1,
              delay: 0.2,
              ease: "easeOut"
            }}
            className="absolute inset-0 bg-violet-500 rounded-full"
          />
          {/* Inner glow */}
          <div className="absolute inset-1 bg-white/30 rounded-full" />
        </motion.div>
      </div>
      
      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export function RateHistoryTimeline({ rateHistory }: RateHistoryTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress for the entire timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth spring animation for the line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Transform scroll progress to line height (0% to 100%)
  const lineHeight = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  
  // Background gradient intensity based on scroll
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.05, 0]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-zinc-900 py-24 border-b border-zinc-700/30 relative overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
          opacity: bgOpacity
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-violet-500" 
            />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">Rate History</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            How PG&E Rates Have Skyrocketed
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            A decade of relentless rate increases has more than doubled the cost of electricity for California families.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Background line (gray) */}
          <div className="absolute top-0 bottom-0 left-[50%] w-px bg-zinc-700/50 hidden md:block" />
          
          {/* Animated progress line (violet) */}
          <motion.div 
            className="absolute top-0 left-[50%] w-0.5 bg-gradient-to-b from-violet-500 via-violet-400 to-red-500 hidden md:block origin-top"
            style={{ height: lineHeight }}
          />
          
          {/* Glow effect on the line */}
          <motion.div 
            className="absolute top-0 left-[50%] w-4 -ml-1.5 bg-gradient-to-b from-violet-500/30 via-violet-400/20 to-transparent blur-sm hidden md:block origin-top"
            style={{ height: lineHeight }}
          />
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {rateHistory.map((item, index) => (
              <TimelineItem 
                key={item.year} 
                item={item} 
                index={index}
                totalItems={rateHistory.length}
              />
            ))}
          </div>
        </div>
        
        {/* End indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="flex justify-center mt-12"
        >
          <div className="px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
            Rates projected to continue climbing
          </div>
        </motion.div>
      </div>
    </section>
  );
}
