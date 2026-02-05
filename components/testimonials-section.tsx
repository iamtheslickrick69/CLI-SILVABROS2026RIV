"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

const testimonialMeta = [
  { avatar: "/images/customer-4.png", before: "$340/mo", after: "$11/mo" },
  { avatar: "/images/customer-2.png", before: "$280/mo", after: "$12/mo" },
  { avatar: "/images/customer-3.png", before: "$390/mo", after: "$22/mo" },
  { avatar: "/images/customer-1.png", before: "$380/mo", after: "$15/mo" },
  { avatar: "/images/customer-5.png", before: "$420/mo", after: "$15/mo" },
  { avatar: "/images/customer-6.png", before: "$310/mo", after: "$18/mo" },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const testimonials = t.testimonials.reviews.map((review, index) => ({
    id: index + 1,
    quote: review.quote,
    author: review.author,
    role: review.role,
    avatar: testimonialMeta[index].avatar,
    before: testimonialMeta[index].before,
    after: testimonialMeta[index].after,
    rating: 5,
  }));

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="relative w-full bg-zinc-900 py-24 md:py-32 border-b border-zinc-700/30 overflow-hidden">
      {/* Background Image - Black & White */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage: "url('https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/LA.jpg')",
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-zinc-900/85" />
      {/* Vignette effect - top and bottom */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.8) 100%)",
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-6 mb-10 md:mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit">
            <div className="w-2.5 h-2.5 bg-violet-500" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">
              {t.testimonials.badge}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              {t.testimonials.headline.split(" ").map((word, i) => (
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
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={prevTestimonial}
                className="p-2.5 md:p-4 border-2 border-violet-500/50 bg-violet-500/10 text-white hover:bg-violet-500/30 hover:border-violet-500 transition-all duration-300 rounded-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 md:p-4 border-2 border-violet-500/50 bg-violet-500/10 text-white hover:bg-violet-500/30 hover:border-violet-500 transition-all duration-300 rounded-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .concat(
                testimonials.slice(
                  0,
                  Math.max(0, currentIndex + 3 - testimonials.length)
                )
              )
              .map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
                    transition: { duration: 0.3 } 
                  }}
                  className="p-6 md:p-8 bg-zinc-800/40 backdrop-blur-sm border border-zinc-700/50 rounded-xl hover:bg-zinc-800/60 hover:border-violet-500/30 transition-colors duration-300"
                >
                  {/* Quote Icon */}
                  <div className="text-violet-500 text-6xl font-serif leading-none mb-4">"</div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-base leading-relaxed mb-6 min-h-[100px]">
                    {testimonial.quote}
                  </p>

                  {/* Before/After */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-zinc-900/60 border border-zinc-700/50 rounded-lg">
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">{t.testimonials.before}</span>
                      <span className="text-red-400 font-semibold text-lg line-through">{testimonial.before}</span>
                    </div>
                    <div className="text-violet-400 text-xl">→</div>
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">{t.testimonials.after}</span>
                      <span className="text-green-400 font-semibold text-lg">{testimonial.after}</span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-violet-500/50">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {testimonial.author}
                      </div>
                      <div className="text-zinc-400 text-xs uppercase tracking-wider">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
