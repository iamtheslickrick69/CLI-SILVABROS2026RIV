"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface PageCtaProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function PageCta({
  title,
  subtitle,
  primaryCta,
  primaryHref = "#",
  secondaryCta,
  secondaryHref = "#",
}: PageCtaProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2074&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-balance text-3xl font-normal tracking-tight text-white md:text-4xl lg:text-5xl max-w-3xl">
            {title.split(" ").map((word, i) => (
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
          <p className="text-balance mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-white px-8 text-black hover:bg-white/90">
              {primaryCta}
            </Button>
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
