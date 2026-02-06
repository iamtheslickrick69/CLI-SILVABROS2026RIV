"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, Zap, DollarSign, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
      quote: "Hurricane season used to terrify us. Now with solar and battery backup, we have peace of mind. During Ian, we were the only house with power for 3 days. Best investment we ever made.",
      author: "Carlos M.",
      location: "Tampa, FL",
      utility: "FPL",
      before: "$285/mo",
      after: "$18/mo",
      savings: "$3,204/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&backgroundColor=10B981",
      systemSize: "9.8 kW + Battery",
      featured: true,
    },
    {
      id: 3,
      quote: "LUMA rates kept climbing and the blackouts were constant. Solar with battery changed everything. My family finally has reliable power and our bill dropped from $380 to $25.",
      author: "Elena R.",
      location: "San Juan, PR",
      utility: "LUMA",
      before: "$380/mo",
      after: "$25/mo",
      savings: "$4,260/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=EC4899",
      systemSize: "10.2 kW + Powerwall",
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
      quote: "Florida summers are brutal on electric bills. Now I run my AC all day and barely pay anything. RIV sized my system perfectly.",
      author: "Mike & Sarah T.",
      location: "Orlando, FL",
      utility: "FPL",
      before: "$320/mo",
      after: "$22/mo",
      savings: "$3,576/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike&backgroundColor=6B7280",
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
      quote: "Living in Puerto Rico means dealing with constant LUMA outages. My battery kicks in automatically now. No more losing food in the freezer.",
      author: "Jorge L.",
      location: "Bayamón, PR",
      utility: "LUMA",
      before: "$365/mo",
      after: "$28/mo",
      savings: "$4,044/year",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jorge&backgroundColor=F59E0B",
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
      quote: "Miami humidity means AC runs 24/7. Solar cut my FPL bill by 90%. The installation was quick and the team was super professional.",
      author: "Jennifer S.",
      location: "Miami, FL",
      utility: "FPL",
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
      title: "The Rodriguez Family",
      location: "Tampa, FL",
      utility: "FPL",
      situation: "Hurricane-prone area with frequent outages. Needed backup power and bill relief.",
      solution: "11.4 kW system with battery backup for storm resilience.",
      results: {
        before: "$395/mo",
        after: "$19/mo",
        annualSavings: "$4,512",
        paybackPeriod: "5.8 years",
        lifetime: "$112,800+",
      },
    },
    {
      title: "The Ortiz Household",
      location: "Ponce, PR",
      utility: "LUMA",
      situation: "Constant blackouts disrupting work-from-home and medical equipment needs.",
      solution: "12.8 kW system with dual Powerwall for 24-hour backup.",
      results: {
        before: "$420/mo",
        after: "$22/mo",
        annualSavings: "$4,776",
        paybackPeriod: "5.4 years",
        lifetime: "$119,400+",
      },
    },
  ];

  const utilityBreakdown = [
    { utility: "SDG&E", region: "California", customers: "847", avgSavings: "$3,840/year", avgBefore: "$342", avgAfter: "$22" },
    { utility: "PG&E", region: "California", customers: "523", avgSavings: "$3,156/year", avgBefore: "$298", avgAfter: "$35" },
    { utility: "SCE", region: "California", customers: "412", avgSavings: "$2,892/year", avgBefore: "$276", avgAfter: "$35" },
    { utility: "FPL", region: "Florida", customers: "489", avgSavings: "$3,420/year", avgBefore: "$305", avgAfter: "$20" },
    { utility: "LUMA", region: "Puerto Rico", customers: "312", avgSavings: "$4,104/year", avgBefore: "$378", avgAfter: "$36" },
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

      {/* Visual Break - Solar Home */}
      <section className="w-full bg-zinc-900 relative overflow-hidden">
        <div className="relative h-48 md:h-64">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80"
            alt="Beautiful home with solar panels"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900/70 to-zinc-900" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light text-white text-center px-6"
            >
              Every story starts with a simple question: <span className="text-violet-400">"What if I stopped renting my power?"</span>
            </motion.p>
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

      {/* Visual Break - Installation */}
      <section className="w-full bg-zinc-800 relative overflow-hidden">
        <div className="relative h-48 md:h-56">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
            alt="Solar panel installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-800/80 to-zinc-800" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <p className="text-lg md:text-xl text-white">
                  <span className="text-violet-400 font-medium">$12M+ saved</span> for families just like yours.
                </p>
              </motion.div>
            </div>
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
              Dive deeper into how real families across all our service areas are saving with solar.
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
              Savings Across All Regions
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Here's how our customers are saving across California, Florida & Puerto Rico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {utilityBreakdown.map((utility, index) => (
              <motion.div
                key={utility.utility}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-zinc-800/50 border border-zinc-700/50 text-center"
              >
                <span className="text-xs text-violet-400 uppercase tracking-wider">{utility.region}</span>
                <h3 className="text-2xl font-medium text-white mb-1">{utility.utility}</h3>
                <p className="text-zinc-500 text-sm mb-4">{utility.customers} customers</p>
                
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
                    <span className="text-white font-medium">Local utility experts</span>
                    <p className="text-zinc-400 text-sm">We know SDG&E, PG&E, SCE, FPL, and LUMA inside out. Local teams in every region.</p>
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
              <p className="text-zinc-400 mb-6">And counting. Join the fastest-growing solar community in CA, FL & PR.</p>
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
