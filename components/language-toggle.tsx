"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
  variant?: "default" | "mobile";
}

export function LanguageToggle({ className, variant = "default" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "relative flex items-center rounded-full p-0.5 transition-colors",
        variant === "default"
          ? "bg-white/10 border border-white/20"
          : "bg-zinc-800 border border-zinc-700",
        className
      )}
    >
      {/* Sliding background indicator */}
      <motion.div
        className="absolute h-[calc(100%-4px)] rounded-full bg-violet-600"
        initial={false}
        animate={{
          x: language === "en" ? 2 : "calc(100% + 2px)",
          width: language === "en" ? "calc(50% - 2px)" : "calc(50% - 2px)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* EN Button */}
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "relative z-10 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors min-w-[40px]",
          language === "en" ? "text-white" : "text-white/60 hover:text-white/80"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>

      {/* ES Button */}
      <button
        onClick={() => setLanguage("es")}
        className={cn(
          "relative z-10 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors min-w-[40px]",
          language === "es" ? "text-white" : "text-white/60 hover:text-white/80"
        )}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
