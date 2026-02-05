"use client";

import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/lib/blog-data';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { useLanguage } from '@/lib/i18n';
import { LanguageToggle } from '@/components/language-toggle';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrambleTextPlugin);
}

interface Config {
  timeZone?: string;
  timeUpdateInterval?: number;
  idleDelay?: number;
}

const TimeDisplay = ({ config = {} }: { config: Config }) => {
  const [time, setTime] = useState({ hours: '', minutes: '', dayPeriod: '' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: config.timeZone || 'America/Los_Angeles',
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const parts = formatter.formatToParts(now);

      setTime({
        hours: parts.find(part => part.type === "hour")?.value || '',
        minutes: parts.find(part => part.type === "minute")?.value || '',
        dayPeriod: parts.find(part => part.type === "dayPeriod")?.value || ''
      });
    };

    updateTime();
    const interval = setInterval(updateTime, config.timeUpdateInterval || 1000);
    return () => clearInterval(interval);
  }, [config.timeZone, config.timeUpdateInterval]);

  if (!mounted) return null;

  return (
    <time className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 font-mono">
      {time.hours}<span className="animate-pulse">:</span>{time.minutes} {time.dayPeriod}
    </time>
  );
};

interface BlogItemProps {
  blog: BlogPost;
  index: number;
  onMouseEnter: (index: number, imageUrl: string) => void;
  onMouseLeave: () => void;
  isActive: boolean;
  isIdle: boolean;
  hasActiveItem: boolean;
}

const BlogItem = forwardRef<HTMLLIElement, BlogItemProps>(
  ({ blog, index, onMouseEnter, onMouseLeave, isActive, isIdle, hasActiveItem }, ref) => {
    const titleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (typeof window === 'undefined') return;

      if (isActive && titleRef.current) {
        gsap.killTweensOf(titleRef.current);
        gsap.to(titleRef.current, {
          duration: 0.6,
          scrambleText: {
            text: blog.title,
            chars: "SOLAR2026KWH$",
            revealDelay: 0.2,
            speed: 0.5
          }
        });
      } else if (titleRef.current) {
        gsap.killTweensOf(titleRef.current);
        titleRef.current.textContent = blog.title;
      }
    }, [isActive, blog.title]);

    return (
      <li
        ref={ref}
        className={`relative transition-all duration-300 ${isIdle ? 'opacity-50' : 'opacity-100'} ${hasActiveItem && !isActive ? 'opacity-20' : ''}`}
        onMouseEnter={() => onMouseEnter(index, blog.image)}
        onMouseLeave={onMouseLeave}
      >
        <Link
          href={`/insights/${blog.slug}`}
          className={`group flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 py-5 md:py-5 border-b border-zinc-800/50 hover:border-violet-500/30 transition-all duration-300 min-h-[72px] md:min-h-0 ${isActive ? 'border-violet-500/50 bg-gradient-to-r from-violet-500/5 to-transparent' : ''}`}
        >
          {/* Title - Full width on mobile */}
          <div className="flex-1 min-w-0 pr-8 md:pr-0">
            <span
              ref={titleRef}
              className={`block text-[14px] md:text-[15px] font-medium uppercase tracking-[0.02em] transition-colors duration-300 leading-snug ${isActive ? 'text-violet-400' : 'text-zinc-300 group-hover:text-white'}`}
            >
              {blog.title}
            </span>
          </div>

          {/* Meta - Row below on mobile, inline on desktop */}
          <div className="flex items-center gap-3 md:gap-6 shrink-0">
            <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${isActive ? 'text-violet-400' : 'text-violet-500/70'}`}>
              {blog.category}
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-zinc-600">
              {blog.readTime}
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-zinc-700 hidden sm:block w-12 text-right">
              {blog.date}
            </span>
          </div>

          {/* Arrow - Absolute positioned on mobile for better touch target */}
          <ArrowUpRight className={`absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 md:relative md:top-auto md:translate-y-0 md:w-4 md:h-4 transition-all duration-300 ${isActive ? 'text-violet-400 translate-x-0.5 md:-translate-y-0.5' : 'text-zinc-700 group-hover:text-zinc-400'}`} />
        </Link>
      </li>
    );
  }
);

BlogItem.displayName = 'BlogItem';

interface BlogPortfolioProps {
  blogPosts: BlogPost[];
  config?: Config;
}

type RegionFilter = 'all' | 'california' | 'florida' | 'puerto-rico';

const regionFilters: { id: RegionFilter; label: string; shortLabel: string }[] = [
  { id: 'all', label: 'All Regions', shortLabel: 'All' },
  { id: 'california', label: 'California', shortLabel: 'CA' },
  { id: 'florida', label: 'Florida', shortLabel: 'FL' },
  { id: 'puerto-rico', label: 'Puerto Rico', shortLabel: 'PR' },
];

function filterBlogsByRegion(blogs: BlogPost[], region: RegionFilter): BlogPost[] {
  if (region === 'all') return blogs;
  if (region === 'california') return blogs.filter(b => b.id >= 1 && b.id <= 30);
  if (region === 'florida') return blogs.filter(b => b.id >= 31 && b.id <= 60);
  if (region === 'puerto-rico') return blogs.filter(b => b.id >= 61 && b.id <= 90);
  return blogs;
}

export default function BlogPortfolio({ blogPosts = [], config = {} }: BlogPortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isIdle, setIsIdle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('all');
  const { t } = useLanguage();
  const { direction, isAtTop } = useScrollDirection({ threshold: 10, topOffset: 100 });
  const headerVisible = isAtTop || direction === "up" || direction === null;

  const filteredPosts = filterBlogsByRegion(blogPosts, activeRegion);

  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const projectItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!headerVisible) setMobileMenuOpen(false);
  }, [headerVisible]);

  useEffect(() => {
    blogPosts.forEach(blog => {
      if (blog.image) {
        const img = new window.Image();
        img.src = blog.image;
      }
    });
  }, [blogPosts]);

  const startIdleAnimation = useCallback(() => {
    if (idleAnimationRef.current || typeof window === 'undefined') return;

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

    projectItemsRef.current.forEach((item, index) => {
      if (!item) return;
      const hideTime = index * 0.03;
      const showTime = (filteredPosts.length * 0.03 * 0.5) + index * 0.03;

      timeline.to(item, { opacity: 0.2, duration: 0.08, ease: "power2.inOut" }, hideTime);
      timeline.to(item, { opacity: 0.5, duration: 0.08, ease: "power2.inOut" }, showTime);
    });

    idleAnimationRef.current = timeline;
  }, [filteredPosts.length]);

  const stopIdleAnimation = useCallback(() => {
    if (idleAnimationRef.current) {
      idleAnimationRef.current.kill();
      idleAnimationRef.current = null;
      projectItemsRef.current.forEach(item => {
        if (item) gsap.set(item, { opacity: 1 });
      });
    }
  }, []);

  const startIdleTimer = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

    idleTimerRef.current = setTimeout(() => {
      if (activeIndex === -1) {
        setIsIdle(true);
        startIdleAnimation();
      }
    }, config.idleDelay || 5000);
  }, [activeIndex, startIdleAnimation, config.idleDelay]);

  const stopIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  }, []);

  const handleBlogMouseEnter = useCallback((index: number, imageUrl: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    stopIdleAnimation();
    stopIdleTimer();
    setIsIdle(false);

    if (activeIndex === index) return;
    setActiveIndex(index);

    if (imageUrl && backgroundRef.current) {
      const bg = backgroundRef.current;
      bg.style.transition = "none";
      bg.style.transform = "scale(1.1)";
      bg.style.backgroundImage = `url(${imageUrl})`;
      bg.style.opacity = "1";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bg.style.transition = "opacity 0.5s ease, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          bg.style.transform = "scale(1.0)";
        });
      });
    }
  }, [activeIndex, stopIdleAnimation, stopIdleTimer]);

  const handleBlogMouseLeave = useCallback(() => {
    debounceRef.current = setTimeout(() => {}, 50);
  }, []);

  const handleContainerMouseLeave = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setActiveIndex(-1);
    if (backgroundRef.current) backgroundRef.current.style.opacity = "0";
    startIdleTimer();
  }, [startIdleTimer]);

  useEffect(() => {
    startIdleTimer();
    return () => {
      stopIdleTimer();
      stopIdleAnimation();
    };
  }, [startIdleTimer, stopIdleTimer, stopIdleAnimation]);

  return (
    <div className="relative min-h-screen w-full bg-zinc-950 overflow-hidden">
      {/* Navigation - Same as home page */}
      <AnimatePresence>
        {headerVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }
            }}
            exit={{
              y: -100,
              opacity: 0,
              transition: { type: "spring", stiffness: 400, damping: 40, opacity: { duration: 0.15 } }
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
                    <Image src="/images/riv-logo.png" alt="RIV Solar" fill className="object-contain invert p-0.5" />
                  </div>
                  <span className="font-semibold text-lg tracking-tight">RIV Solar</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 lg:flex">
                  <Link href="/problem" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">{t.nav.problem}</Link>
                  <Link href="/ai-tools" className="px-4 py-2 text-sm text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 rounded-lg transition-all font-medium">{t.nav.aiTools}</Link>
                  <Link href="/solution" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">{t.nav.solution}</Link>
                  <Link href="/reviews" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">{t.nav.reviews}</Link>
                  <Link href="/#faq" className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">{t.nav.faq}</Link>
                  <Link href="/insights" className="px-4 py-2 text-sm text-white bg-white/5 rounded-lg transition-all">{t.nav.insights}</Link>
                </div>

                <div className="flex items-center gap-3">
                  <LanguageToggle className="hidden lg:flex" />
                  <Link href="/#savings" className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/20">{t.nav.getQuote}</Link>
                  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute left-4 right-4 top-full mt-2 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-2xl lg:hidden overflow-hidden">
                <div className="flex flex-col p-4 gap-1">
                  <Link href="/problem" className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav.problem}</Link>
                  <Link href="/ai-tools" className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 py-4 px-4 rounded-xl transition-all font-medium min-h-[48px] flex items-center text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav.aiTools}</Link>
                  <Link href="/solution" className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav.solution}</Link>
                  <Link href="/reviews" className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav.reviews}</Link>
                  <Link href="/#faq" className="text-white/70 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav.faq}</Link>
                  <Link href="/insights" className="text-white bg-white/5 py-4 px-4 rounded-xl transition-all min-h-[48px] flex items-center text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav.insights}</Link>
                  <div className="flex items-center justify-between py-4 px-4">
                    <span className="text-white/70 text-base">Language / Idioma</span>
                    <LanguageToggle variant="mobile" />
                  </div>
                  <div className="mt-2 pt-3 border-t border-white/10">
                    <Link href="/#savings" className="flex items-center justify-center gap-2 w-full py-4 min-h-[52px] bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav.getFreeQuote}</Link>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Background image container - right side */}
      <div className="fixed top-0 right-0 w-1/2 h-full pointer-events-none z-0 hidden lg:block">
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            transform: 'scale(1.1)',
            filter: 'brightness(0.5) saturate(1.1)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      {/* Corner elements - bottom only now */}
      <div className="fixed inset-0 pointer-events-none z-30 p-6 md:p-8">
        {/* Bottom left - location */}
        <div className="absolute bottom-6 left-6 md:left-8 text-[11px] uppercase tracking-[0.2em] text-zinc-700 font-mono">
          Southern California
        </div>

        {/* Bottom right - time */}
        <div className="absolute bottom-6 right-6 md:right-8">
          <TimeDisplay config={config} />
        </div>
      </div>

      {/* Main content */}
      <div
        ref={containerRef}
        className="relative z-10 min-h-screen px-6 md:px-8 lg:px-12 pt-28 pb-24 lg:w-1/2"
        onMouseLeave={handleContainerMouseLeave}
      >
        {/* Page Header */}
        <header className="mb-6 pt-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2 h-2 bg-violet-500" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">{filteredPosts.length} Articles</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 font-[family-name:var(--font-barlow-condensed)] uppercase">
            Solar Insights
          </h1>
          <p className="text-sm text-zinc-500 max-w-md leading-relaxed">
            Expert guides on solar panels, NEM 3.0, battery storage, financing, and real savings across California, Florida & Puerto Rico.
          </p>
        </header>

        {/* Region Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {regionFilters.map((filter) => {
            const count = filter.id === 'all'
              ? blogPosts.length
              : filterBlogsByRegion(blogPosts, filter.id).length;
            const isActive = activeRegion === filter.id;

            return (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveRegion(filter.id);
                  setActiveIndex(-1);
                  if (backgroundRef.current) backgroundRef.current.style.opacity = "0";
                }}
                className={`group relative px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-700/50 hover:border-zinc-600'
                }`}
              >
                <span className="hidden sm:inline">{filter.label}</span>
                <span className="sm:hidden">{filter.shortLabel}</span>
                <span className={`ml-2 px-1.5 py-0.5 text-[9px] rounded ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-zinc-700/50 text-zinc-500 group-hover:bg-zinc-700 group-hover:text-zinc-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Blog list */}
        <ul className="space-y-0" role="list">
          {filteredPosts.map((blog, index) => (
            <BlogItem
              key={blog.id}
              blog={blog}
              index={index}
              onMouseEnter={handleBlogMouseEnter}
              onMouseLeave={handleBlogMouseLeave}
              isActive={activeIndex === index}
              isIdle={isIdle}
              hasActiveItem={activeIndex !== -1}
              ref={(el: HTMLLIElement | null) => { projectItemsRef.current[index] = el; }}
            />
          ))}
        </ul>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-zinc-500 text-sm">No articles found for this region.</p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-zinc-800/50">
          <p className="text-sm text-zinc-500 mb-4">Ready to see your savings potential?</p>
          <Link
            href="/#savings"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-4 md:py-3 bg-violet-600 hover:bg-violet-500 text-white text-base md:text-sm font-medium rounded-xl md:rounded-lg transition-all min-h-[52px]"
          >
            Get Your Free Quote
            <ArrowUpRight className="w-5 h-5 md:w-4 md:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
