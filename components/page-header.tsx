"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronDown, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumb: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

function PageHeader({
  title,
  subtitle,
  backgroundImage,
  breadcrumb,
  ctaText = "Get Free Quote",
  ctaHref = "#",
  secondaryCtaText,
  secondaryCtaHref,
}: PageHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  const [mobileServiceAreasOpen, setMobileServiceAreasOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Helper to check if a link is active
  const isActive = (path: string) => pathname === path;

  // Smart header - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
        setMobileMenuOpen(false);
      } else {
        setHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[70vh] flex-col">
        {/* Navigation */}
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 transition-transform duration-300 ${
            headerVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl px-4 md:px-6 py-3">
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
                <Link href="/problem" className={`px-4 py-2 text-sm rounded-lg transition-all ${isActive('/problem') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                  Problem
                </Link>
                <Link href="/ai-tools" className={`px-4 py-2 text-sm rounded-lg transition-all ${isActive('/ai-tools') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                  AI Tools
                </Link>
                <Link href="/solution" className={`px-4 py-2 text-sm rounded-lg transition-all ${isActive('/solution') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                  Solution
                </Link>
                <Link href="/reviews" className={`px-4 py-2 text-sm rounded-lg transition-all ${isActive('/reviews') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                  Reviews
                </Link>
                <Link href="/#faq" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                  FAQ
                </Link>
                <Link href="/insights" className={`px-4 py-2 text-sm rounded-lg transition-all ${isActive('/insights') || pathname.startsWith('/insights/') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                  Insights
                </Link>
                {/* Service Areas Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setServiceAreasOpen(true)}
                  onMouseLeave={() => setServiceAreasOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    <MapPin className="w-4 h-4" />
                    Service Areas
                    <ChevronDown className={`w-3 h-3 transition-transform ${serviceAreasOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {serviceAreasOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl"
                    >
                      <Link
                        href="/solar/california"
                        className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                      >
                        California
                      </Link>
                      <Link
                        href="/solar/florida"
                        className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                      >
                        Florida
                      </Link>
                      <Link
                        href="/solar/puerto-rico"
                        className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                      >
                        Puerto Rico
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Connect CTA */}
                <Link
                  href="/ai-tools"
                  className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/20"
                >
                  Get Quote
                </Link>

                {/* Hamburger Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                <Link href="/problem" className={`py-3 px-4 rounded-xl transition-all ${isActive('/problem') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`} onClick={() => setMobileMenuOpen(false)}>
                  Problem
                </Link>
                <Link href="/ai-tools" className={`py-3 px-4 rounded-xl transition-all ${isActive('/ai-tools') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`} onClick={() => setMobileMenuOpen(false)}>
                  AI Tools
                </Link>
                <Link href="/solution" className={`py-3 px-4 rounded-xl transition-all ${isActive('/solution') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`} onClick={() => setMobileMenuOpen(false)}>
                  Solution
                </Link>
                <Link href="/reviews" className={`py-3 px-4 rounded-xl transition-all ${isActive('/reviews') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`} onClick={() => setMobileMenuOpen(false)}>
                  Reviews
                </Link>
                <Link href="/#faq" className="text-white/70 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </Link>
                <Link href="/insights" className={`py-3 px-4 rounded-xl transition-all ${isActive('/insights') || pathname.startsWith('/insights/') ? 'text-violet-400 bg-violet-500/10 font-medium' : 'text-white/70 hover:text-white hover:bg-white/10'}`} onClick={() => setMobileMenuOpen(false)}>
                  Insights
                </Link>
                {/* Mobile Service Areas */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileServiceAreasOpen(!mobileServiceAreasOpen)}
                    className="text-white/70 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Service Areas
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServiceAreasOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServiceAreasOpen && (
                    <div className="flex flex-col ml-4 border-l border-white/10">
                      <Link
                        href="/solar/california"
                        className="text-white/60 hover:text-white py-2 px-4 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        California
                      </Link>
                      <Link
                        href="/solar/florida"
                        className="text-white/60 hover:text-white py-2 px-4 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Florida
                      </Link>
                      <Link
                        href="/solar/puerto-rico"
                        className="text-white/60 hover:text-white py-2 px-4 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Puerto Rico
                      </Link>
                    </div>
                  )}
                </div>
                <div className="mt-2 pt-3 border-t border-white/10">
                  <Link
                    href="/ai-tools"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{breadcrumb}</span>
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl font-[family-name:var(--font-barlow-condensed)] uppercase">
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-center text-base leading-relaxed text-white/70 md:text-lg">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white px-8 text-slate-900 hover:bg-white/90 uppercase font-semibold tracking-wide">
              {ctaText}
            </Button>
            {secondaryCtaText && (
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white uppercase font-semibold tracking-wide"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { PageHeader };
export default PageHeader;
