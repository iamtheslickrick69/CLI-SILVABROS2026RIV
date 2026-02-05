"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, Star, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { useLanguage } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"

const videos = [
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/solarvid.mp4",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/vidhome5.mp4",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/vidhome1.mp4",
];

const VIDEO_DURATION = 12; // Play 12 seconds of each video

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  // Use scroll direction hook for smart hide/show
  const { direction, isAtTop } = useScrollDirection({ threshold: 10, topOffset: 100 });

  // Header visible when at top OR scrolling up (mobile only hides on scroll down)
  const headerVisible = isAtTop || direction === "up" || direction === null;
  
  // Close mobile menu when header hides
  useEffect(() => {
    if (!headerVisible) {
      setMobileMenuOpen(false);
    }
  }, [headerVisible]);

  useEffect(() => {
    // Preload all videos for smooth transitions
    videos.forEach((_, index) => {
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
      
      // Clear any existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      // Transition to next video after VIDEO_DURATION seconds
      timerRef.current = setTimeout(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }, VIDEO_DURATION * 1000);
      
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [currentVideo]);

  return (
    <section className="relative min-h-[85vh] md:h-screen w-full overflow-hidden">
      {/* Video Background with Crossfade */}
      <div className="absolute inset-0">
        {videos.map((src, index) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[index] = el; }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              currentVideo === index ? "opacity-100" : "opacity-0"
            }`}
            src={src}
            muted
            playsInline
            preload={index === 0 ? "auto" : "metadata"}
            aria-hidden="true"
          />
        ))}
      </div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-slate-950/30" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Navigation - World-class scroll animation */}
        <AnimatePresence>
          {headerVisible && (
            <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 }
                }
              }}
              exit={{ 
                y: -100, 
                opacity: 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  opacity: { duration: 0.15 }
                }
              }}
              className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-4"
            >
              <div className="mx-auto max-w-7xl">
                <div className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300 ${
                  isAtTop 
                    ? "bg-zinc-900/60 backdrop-blur-xl border border-white/10" 
                    : "bg-zinc-950 shadow-2xl shadow-black/50 border border-zinc-800"
                }`}>
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-3 text-white group">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1.5 transition-transform group-hover:scale-105">
                      <Image
                        src="/images/riv-logo.png"
                        alt="RIV Solar"
                        fill
                        className="object-contain invert p-0.5"
                      />
                    </div>
                    <span className="font-semibold text-lg tracking-tight">RIV Solar</span>
                  </Link>
                  
                  {/* Desktop Navigation */}
                  <div className="hidden items-center gap-1 lg:flex">
                    <Link href="/problem" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                      {t.nav.problem}
                    </Link>
                    <Link href="/ai-tools" className="px-4 py-2 text-sm text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 rounded-lg transition-all font-medium">
                      {t.nav.aiTools}
                    </Link>
                    <Link href="/solution" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                      {t.nav.solution}
                    </Link>
                    <Link href="/reviews" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                      {t.nav.reviews}
                    </Link>
                    <Link href="/#faq" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                      {t.nav.faq}
                    </Link>
                    <Link href="/insights" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                      {t.nav.insights}
                    </Link>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Language Toggle */}
                    <LanguageToggle className="hidden lg:flex" />

                    {/* Connect CTA */}
                    <Link
                      href="#"
                      className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/20"
                    >
                      {t.nav.getQuote}
                    </Link>
                    
                    {/* Hamburger Menu Button - 44px min touch target */}
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="text-white lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
                      aria-label="Toggle menu"
                    >
                      {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                      ) : (
                        <Menu className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-4 right-4 top-full mt-2 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-2xl lg:hidden overflow-hidden"
                >
                  <div className="flex flex-col p-4 gap-1">
                    <Link
                      href="/problem"
                      className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.problem}
                    </Link>
                    <Link
                      href="/ai-tools"
                      className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 py-4 px-4 rounded-xl transition-all font-medium min-h-[48px] flex items-center text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.aiTools}
                    </Link>
                    <Link
                      href="/solution"
                      className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.solution}
                    </Link>
                    <Link
                      href="/reviews"
                      className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.reviews}
                    </Link>
                    <Link
                      href="/#faq"
                      className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.faq}
                    </Link>
                    <Link
                      href="/insights"
                      className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.insights}
                    </Link>
                    {/* Mobile Language Toggle */}
                    <div className="flex items-center justify-between py-4 px-4">
                      <span className="text-white/70 text-base">Language / Idioma</span>
                      <LanguageToggle variant="mobile" />
                    </div>
                    <div className="mt-2 pt-3 border-t border-white/10">
                      <Link
                        href="#"
                        className="flex items-center justify-center gap-2 w-full py-4 min-h-[52px] bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all text-base"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.nav.getFreeQuote}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Hero Content - Positioned in upper portion */}
        <div className="flex flex-1 flex-col items-center px-4 md:px-6 pt-24 sm:pt-28 md:pt-32 text-center">
          {/* RIV Solar Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <Image
              src="/images/riv-solar-logo-transparent.jpg"
              alt="RIV Solar"
              width={320}
              height={140}
              className="w-48 md:w-64 lg:w-80 h-auto"
              priority
            />
          </motion.div>

          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-barlow-condensed)] uppercase">
            {t.hero.headline.split(" ").map((word, i) => (
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
          </h1>

          <p className="mt-6 max-w-xl text-balance text-center text-sm leading-relaxed text-white/70 md:text-base">
            {t.hero.subheadline}
          </p>

          {/* Stats Bar */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-4 md:gap-8 text-white/80">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-medium text-white">$12M+</span>
              <span className="text-[10px] md:text-xs text-white/60">{t.hero.stats.saved}</span>
            </div>
            <div className="h-6 md:h-8 w-px bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-medium text-white">2,500+</span>
              <span className="text-[10px] md:text-xs text-white/60">{t.hero.stats.families}</span>
            </div>
            <div className="h-6 md:h-8 w-px bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-medium text-white">25 Yrs</span>
              <span className="text-[10px] md:text-xs text-white/60">{t.hero.stats.warranty}</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-5 md:mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <div className="flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
              <span className="text-[10px] md:text-xs font-medium text-white">{t.hero.badges.bbbRating}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] md:text-xs font-medium text-white">{t.hero.badges.googleRating}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Award className="w-3 h-3 md:w-4 md:h-4 text-violet-400" />
              <span className="text-[10px] md:text-xs font-medium text-white">2,500+</span>
            </div>
          </div>

          {/* CTAs - Two buttons side by side - larger touch targets on mobile */}
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row w-full sm:w-auto px-4 sm:px-0">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-white px-6 py-4 min-h-[52px] w-full sm:w-auto text-slate-900 hover:bg-white/90 uppercase font-semibold tracking-wide text-base"
              >
                {t.hero.cta.talkToPro}
              </Button>
            </Link>
            <Link href="/ai-tools">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent px-6 py-4 min-h-[52px] w-full sm:w-auto text-white hover:bg-white/10 hover:text-white uppercase font-semibold tracking-wide text-base"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {t.hero.cta.tryCalculator}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - At bottom */}
        
      </div>
    </section>
  )
}
