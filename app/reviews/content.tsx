"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, Zap, DollarSign, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReviewsPageContent() {
  const ratings = [
    { platform: "Google", rating: "5.0", reviews: "247", logo: "G" },
    { platform: "Yelp", rating: "5.0", reviews: "189", logo: "Y" },
    { platform: "BBB", rating: "A+", reviews: "Accredited", logo: "BBB" },
    { platform: "SolarReviews", rating: "4.9", reviews: "156", logo: "SR" },
  ];

  const featuredTestimonials = [
    {
      id: 1,
      quote: "Our SDG&E bill went from $340 to $11. I still can't believe it. RIV Solar changed our lives. The whole process was smooth, the team was professional, and they did exactly what they promised.",
      author: "Maria G.",
      location: "Temecula, CA",
      utility: "SDG&E",
      before: "$340/mo",
      after: "$11/mo",
      savings: "$3,948/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria&backgroundColor=6B5B95",
      systemSize: "8.4 kW",
      featured: true,
    },
    {
      id: 2,
      quote: "After getting quotes from 5 companies, RIV was the only one who didn't pressure us. They laid out all the options, explained the pros and cons, and let us decide on our timeline. The install was flawless.",
      author: "James T.",
      location: "San Diego, CA",
      utility: "SDG&E",
      before: "$280/mo",
      after: "$12/mo",
      savings: "$3,216/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=88498F",
      systemSize: "7.2 kW",
      featured: true,
    },
    {
      id: 3,
      quote: "The battery storage was a game-changer. During the last outage, we were the only house on the block with power. My neighbors are all calling RIV now.",
      author: "Angela R.",
      location: "Riverside, CA",
      utility: "SCE",
      before: "$295/mo",
      after: "$22/mo",
      savings: "$3,276/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Angela&backgroundColor=C55A7B",
      systemSize: "9.1 kW + Powerwall",
      featured: true,
    },
  ];

  const allTestimonials = [
    {
      id: 4,
      quote: "They explained NEM 3.0 in a way that actually made sense. System was designed perfectly for the new rules. Very impressed with their knowledge.",
      author: "Marcus W.",
      location: "Corona, CA",
      utility: "SCE",
      before: "$380/mo",
      after: "$15/mo",
      savings: "$4,380/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=4A5899",
    },
    {
      id: 5,
      quote: "Two kids, pool, AC blasting all summer — and our bill is now $15. Should've done this years ago. The ROI is incredible.",
      author: "Lisa & Tom P.",
      location: "Murrieta, CA",
      utility: "SCE",
      before: "$420/mo",
      after: "$15/mo",
      savings: "$4,860/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa&backgroundColor=6B7280",
    },
    {
      id: 6,
      quote: "The AI bill analyzer showed me exactly what I was paying and what I could save. No other company had anything like it. Made the decision easy.",
      author: "David K.",
      location: "Escondido, CA",
      utility: "SDG&E",
      before: "$310/mo",
      after: "$18/mo",
      savings: "$3,504/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=7C3AED",
    },
    {
      id: 7,
      quote: "From consultation to install, everything was handled professionally. No surprises, no hidden fees. They even helped us maximize the tax credit.",
      author: "Patricia M.",
      location: "Oceanside, CA",
      utility: "SDG&E",
      before: "$365/mo",
      after: "$20/mo",
      savings: "$4,140/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Patricia&backgroundColor=F59E0B",
    },
    {
      id: 8,
      quote: "I was skeptical about the savings estimates. Turns out they were conservative — we're saving even more than they projected. Very happy.",
      author: "Robert L.",
      location: "Chula Vista, CA",
      utility: "SDG&E",
      before: "$290/mo",
      after: "$8/mo",
      savings: "$3,384/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert&backgroundColor=10B981",
    },
    {
      id: 9,
      quote: "The installation crew was incredible. Clean, professional, and they finished in one day. System looks great and works even better.",
      author: "Jennifer S.",
      location: "Carlsbad, CA",
      utility: "SDG&E",
      before: "$355/mo",
      after: "$16/mo",
      savings: "$4,068/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer&backgroundColor=EC4899",
    },
  ];

  const caseStudies = [
    {
      title: "The Martinez Family",
      location: "Temecula, CA",
      utility: "SDG&E",
      situation: "Family of 5 with pool and home office. Summer bills were crushing them.",
      solution: "10.2 kW system with Tesla Powerwall for backup and peak shaving.",
      results: {
        before: "$485/mo",
        after: "$24/mo",
        annualSavings: "$5,532",
        paybackPeriod: "5.2 years",
        lifetime: "$138,000+",
      },
    },
    {
      title: "The Chen Household",
      location: "Irvine, CA",
      utility: "SCE",
      situation: "Retired couple concerned about rising rates and fixed income.",
      solution: "6.8 kW system with $0 down financing.",
      results: {
        before: "$245/mo",
        after: "$12/mo",
        annualSavings: "$2,796",
        paybackPeriod: "6.1 years",
        lifetime: "$69,900+",
      },
    },
    {
      title: "The Johnson Family",
      location: "Fresno, CA",
      utility: "PG&E",
      situation: "New EV owners worried about increased electricity usage.",
      solution: "12.4 kW system sized for home + EV charging.",
      results: {
        before: "$520/mo",
        after: "$28/mo",
        annualSavings: "$5,904",
        paybackPeriod: "4.8 years",
        lifetime: "$147,600+",
      },
    },
  ];

  const utilityBreakdown = [
    { utility: "SDG&E", customers: "1,247", avgSavings: "$3,840/year", avgBefore: "$342", avgAfter: "$22" },
    { utility: "PG&E", customers: "823", avgSavings: "$3,156/year", avgBefore: "$298", avgAfter: "$35" },
    { utility: "SCE", customers: "612", avgSavings: "$2,892/year", avgBefore: "$276", avgAfter: "$35" },
  ];

  return (
    <>
      {/* Rating Badges */}
      <section className="w-full bg-zinc-900 py-16 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ratings.map((rating, index) => (
              <motion.div
                key={rating.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-zinc-800/50 border border-zinc-700/50 text-center"
              >
                <div className="w-12 h-12 bg-violet-500/10 flex items-center justify-center text-violet-500 font-bold mb-4">
                  {rating.logo}
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-violet-500 text-violet-500" />
                  ))}
                </div>
                <span className="text-2xl font-medium text-white">{rating.rating}</span>
                <span className="text-sm text-zinc-400">{rating.reviews} {rating.platform !== "BBB" ? "reviews" : ""}</span>
                <span className="text-xs text-zinc-500 mt-1">{rating.platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="w-full bg-zinc-800 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
              <Star className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Featured Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Stories That Inspire
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              These families took the leap to solar and never looked back. Here's what they have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-zinc-900 border border-zinc-700 flex flex-col"
              >
                <Quote className="w-8 h-8 text-violet-500/30 mb-4" />
                <p className="text-zinc-300 leading-relaxed mb-6 flex-1">"{testimonial.quote}"</p>
                
                {/* Savings Box */}
                <div className="p-4 bg-zinc-800 border border-zinc-700 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-xs text-zinc-500 block">Before</span>
                      <span className="text-red-400 font-medium line-through">{testimonial.before}</span>
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 block">After</span>
                      <span className="text-green-400 font-medium">{testimonial.after}</span>
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 block">Savings</span>
                      <span className="text-violet-500 font-medium">{testimonial.savings}</span>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 bg-zinc-700"
                  />
                  <div>
                    <span className="text-white font-medium block">{testimonial.author}</span>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* System Info */}
                <div className="mt-4 pt-4 border-t border-zinc-700/50 flex items-center justify-between text-sm">
                  <span className="text-zinc-500">{testimonial.utility}</span>
                  <span className="text-zinc-400">{testimonial.systemSize}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="w-full bg-zinc-900 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
              <div className="w-2.5 h-2.5 bg-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">More Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-zinc-800/50 border border-zinc-700/50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-violet-500 text-violet-500" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">"{testimonial.quote}"</p>
                
                {testimonial.before && (
                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="text-red-400 line-through">{testimonial.before}</span>
                    <span className="text-zinc-500">→</span>
                    <span className="text-green-400">{testimonial.after}</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} className="w-10 h-10 bg-zinc-700" />
                  <div>
                    <span className="text-white text-sm font-medium block">{testimonial.author}</span>
                    <span className="text-zinc-500 text-xs">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              See All Reviews on Google
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full bg-zinc-800 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
              <DollarSign className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Detailed Success Stories
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Dive deeper into how real California families are saving with solar.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 bg-zinc-900 border border-zinc-700"
              >
                {/* Info */}
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">{study.title}</h3>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {study.location} • {study.utility}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">Situation</span>
                      <p className="text-zinc-300 text-sm">{study.situation}</p>
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">Solution</span>
                      <p className="text-zinc-300 text-sm">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 text-center">
                    <span className="text-xs text-zinc-500 block mb-1">Before</span>
                    <span className="text-xl font-medium text-red-400">{study.results.before}</span>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/30 text-center">
                    <span className="text-xs text-zinc-500 block mb-1">After</span>
                    <span className="text-xl font-medium text-green-400">{study.results.after}</span>
                  </div>
                  <div className="p-4 bg-violet-500/10 border border-violet-500/30 text-center">
                    <span className="text-xs text-zinc-500 block mb-1">Annual</span>
                    <span className="text-xl font-medium text-violet-500">{study.results.annualSavings}</span>
                  </div>
                  <div className="p-4 bg-zinc-800 border border-zinc-700 text-center">
                    <span className="text-xs text-zinc-500 block mb-1">Payback</span>
                    <span className="text-xl font-medium text-white">{study.results.paybackPeriod}</span>
                  </div>
                  <div className="p-4 bg-zinc-800 border border-zinc-700 text-center">
                    <span className="text-xs text-zinc-500 block mb-1">Lifetime</span>
                    <span className="text-xl font-medium text-white">{study.results.lifetime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings by Utility */}
      <section className="w-full bg-zinc-900 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6 mx-auto">
              <Zap className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">By Utility</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Savings Across California
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Here's how our customers are saving, broken down by their utility company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {utilityBreakdown.map((utility, index) => (
              <motion.div
                key={utility.utility}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-zinc-800/50 border border-zinc-700/50 text-center"
              >
                <h3 className="text-2xl font-medium text-white mb-2">{utility.utility}</h3>
                <p className="text-violet-500 text-sm mb-6">{utility.customers} happy customers</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-zinc-900 border border-zinc-700">
                    <span className="text-xs text-zinc-500 block mb-1">Average Annual Savings</span>
                    <span className="text-2xl font-medium text-green-400">{utility.avgSavings}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-zinc-900 border border-zinc-700">
                      <span className="text-xs text-zinc-500 block mb-1">Avg Before</span>
                      <span className="text-lg font-medium text-red-400">{utility.avgBefore}/mo</span>
                    </div>
                    <div className="p-3 bg-zinc-900 border border-zinc-700">
                      <span className="text-xs text-zinc-500 block mb-1">Avg After</span>
                      <span className="text-lg font-medium text-green-400">{utility.avgAfter}/mo</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full bg-zinc-800 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
                <Shield className="w-4 h-4 text-violet-500" />
                <span className="text-sm font-medium text-zinc-400 tracking-wide">Our Promise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
                Why Families Trust RIV
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 mt-2" />
                  <div>
                    <span className="text-white font-medium">Transparent from day one</span>
                    <p className="text-zinc-400 text-sm">No hidden fees, no bait-and-switch. What we quote is what you pay.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 mt-2" />
                  <div>
                    <span className="text-white font-medium">In-house everything</span>
                    <p className="text-zinc-400 text-sm">Our crews, our standards. No subcontractors, no finger-pointing.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 mt-2" />
                  <div>
                    <span className="text-white font-medium">25-year full warranty</span>
                    <p className="text-zinc-400 text-sm">Panels, inverters, labor — all covered. We stand behind our work.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 mt-2" />
                  <div>
                    <span className="text-white font-medium">Local California experts</span>
                    <p className="text-zinc-400 text-sm">We know PG&E, SDG&E, and SCE inside out. Californians helping Californians.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-900 border border-zinc-700 text-center"
            >
              <div className="text-6xl font-light text-violet-500 mb-4">2,500+</div>
              <h3 className="text-2xl font-medium text-white mb-2">Happy Families</h3>
              <p className="text-zinc-400 mb-6">And counting. Join California's fastest-growing solar community.</p>
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-violet-500 text-violet-500" />
                ))}
              </div>
              <Button className="bg-white text-zinc-900 hover:bg-zinc-200">
                Get Your Free Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
