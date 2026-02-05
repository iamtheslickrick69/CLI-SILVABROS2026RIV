"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useLanguage } from "@/lib/i18n";

export function StickyMobileCta() {
  const { direction, isAtTop, scrollY } = useScrollDirection({ threshold: 10, topOffset: 100 });
  const [heroHeight, setHeroHeight] = useState(0);
  const { t } = useLanguage();
  
  // Get hero height on mount (client-side only)
  useEffect(() => {
    setHeroHeight(window.innerHeight * 0.6);
  }, []);
  
  // Show when: past hero AND (at top OR scrolling up)
  const pastHero = heroHeight > 0 && scrollY > heroHeight;
  const shouldShow = pastHero && (isAtTop || direction === "up" || direction === null);

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0, filter: "blur(4px)" }}
          animate={{ 
            y: 0, 
            opacity: 1, 
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
              filter: { duration: 0.2 }
            }
          }}
          exit={{ 
            y: 100, 
            opacity: 0,
            filter: "blur(4px)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 40,
              opacity: { duration: 0.15 }
            }
          }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Gradient fade above the bar */}
          <div className="h-6 bg-gradient-to-t from-zinc-900/95 to-transparent pointer-events-none" />
          
          <div className="bg-zinc-900/98 backdrop-blur-xl border-t border-violet-500/20 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <div className="flex items-center gap-3">
              {/* Call button - 48px touch target */}
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center min-w-[52px] min-h-[52px] bg-zinc-800 border border-zinc-700 rounded-xl transition-all hover:bg-zinc-700 active:scale-95"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5 text-white" />
              </Link>

              {/* Main CTA - large touch target */}
              <Link
                href="/#savings"
                className="flex-1 flex items-center justify-center gap-2 min-h-[52px] bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white font-semibold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-violet-500/25"
              >
                <Sparkles className="w-4 h-4" />
                {t.mobileCta.getQuote}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
