"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { TrendingUp, Zap, DollarSign, AlertTriangle, Calendar, Flame, Car, Server } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { RateHistoryTimeline } from "@/components/rate-history-timeline";

export function ProblemPageContent() {
  const crisisStats = [
    { value: "114%", label: "Rate increase since 2014", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "3M+", label: "Californians hit by planned blackouts", icon: <Zap className="w-6 h-6" /> },
    { value: "$600", label: "Projected monthly bill by 2030", icon: <DollarSign className="w-6 h-6" /> },
    { value: "#1", label: "Highest rates in continental US", icon: <AlertTriangle className="w-6 h-6" /> },
  ];

  const rateHistory = [
    { year: "2014", rate: "21¢", event: "NEM 2.0 introduced" },
    { year: "2017", rate: "25¢", event: "First major rate hike" },
    { year: "2020", rate: "32¢", event: "Wildfire liability costs added" },
    { year: "2022", rate: "38¢", event: "Infrastructure upgrades begin" },
    { year: "2023", rate: "42¢", event: "NEM 3.0 takes effect" },
    { year: "2026", rate: "48¢", event: "Current rates" },
    { year: "2030", rate: "65¢+", event: "Projected rates" },
  ];

  const utilityRates = [
    { utility: "SDG&E", rate: "55¢", bill: "$385", region: "San Diego Region", worst: true },
    { utility: "PG&E", rate: "48¢", bill: "$336", region: "Northern California" },
    { utility: "SCE", rate: "42¢", bill: "$294", region: "Southern California" },
    { utility: "National Avg", rate: "16¢", bill: "$112", region: "Rest of USA", compare: true },
  ];

  const futureDrivers = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "All-Electric Vehicles by 2035",
      description: "California mandates all new cars be electric. That's millions of EVs charging at home, dramatically increasing household electricity demand.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "AI Data Center Boom",
      description: "Tech companies are building massive AI data centers across California, consuming electricity equivalent to entire cities.",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Wildfire Prevention Costs",
      description: "Utilities pass billions in wildfire liability and prevention costs directly to customers through rate increases.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Aging Infrastructure",
      description: "Decades of deferred maintenance now require massive upgrades, all funded by ratepayer bills.",
    },
  ];

  return (
    <>
      {/* Crisis Stats Section */}
      <section className="w-full bg-zinc-900 py-20 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {crisisStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center p-8 bg-zinc-800/50 border border-zinc-700/50 text-center"
              >
                <div className="mb-4 p-3 bg-red-500/10 text-red-400">
                  {stat.icon}
                </div>
                <span className="text-4xl font-medium text-white mb-2">{stat.value}</span>
                <span className="text-sm text-zinc-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate History Timeline */}
      <RateHistoryTimeline rateHistory={rateHistory} />

      {/* Utility Comparison */}
      <section className="w-full bg-zinc-800 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
              <div className="w-2.5 h-2.5 bg-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">2026 Rates</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              California vs. The Rest of America
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Californians pay 3-4x the national average for electricity. Here's how the major utilities compare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {utilityRates.map((utility, index) => (
              <motion.div
                key={utility.utility}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-8 border ${utility.worst ? 'bg-red-500/10 border-red-500/30' : utility.compare ? 'bg-green-500/10 border-green-500/30' : 'bg-zinc-900/50 border-zinc-700/50'}`}
              >
                {utility.worst && (
                  <span className="text-xs font-medium text-red-400 uppercase tracking-wider mb-2 block">Highest in USA</span>
                )}
                {utility.compare && (
                  <span className="text-xs font-medium text-green-400 uppercase tracking-wider mb-2 block">National Average</span>
                )}
                <h3 className="text-2xl font-medium text-white mb-1">{utility.utility}</h3>
                <p className="text-sm text-zinc-400 mb-4">{utility.region}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Rate per kWh</span>
                    <span className={`font-medium ${utility.worst ? 'text-red-400' : utility.compare ? 'text-green-400' : 'text-white'}`}>{utility.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Avg Monthly Bill</span>
                    <span className={`font-medium ${utility.worst ? 'text-red-400' : utility.compare ? 'text-green-400' : 'text-white'}`}>{utility.bill}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Getting Worse */}
      <section className="w-full bg-zinc-900 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6 mx-auto">
              <div className="w-2.5 h-2.5 bg-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Looking Ahead</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Why Bills Will Keep Climbing
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Multiple forces are converging to drive electricity demand — and prices — even higher in the coming years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureDrivers.map((driver, index) => (
              <motion.div
                key={driver.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-zinc-800/50 border border-zinc-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-500/10 text-violet-500">
                    {driver.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{driver.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{driver.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="w-full bg-zinc-800 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
                <div className="w-2.5 h-2.5 bg-violet-500" />
                <span className="text-sm font-medium text-zinc-400 tracking-wide">The Bottom Line</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
                You Have Two Choices
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-red-500/10 border border-red-500/30">
                  <h3 className="text-lg font-medium text-red-400 mb-2">Option 1: Do Nothing</h3>
                  <p className="text-zinc-300">Continue paying PG&E/SDG&E/SCE. Watch your bills climb to $600-700/month by 2030. Send $100,000+ to utility shareholders over the next 25 years.</p>
                </div>
                <div className="p-6 bg-green-500/10 border border-green-500/30">
                  <h3 className="text-lg font-medium text-green-400 mb-2">Option 2: Go Solar</h3>
                  <p className="text-zinc-300">Lock in low rates for 25+ years. Build equity in your home. Stop renting your power and start owning it. Join 2,500+ families who've already made the switch.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-900 border border-zinc-700"
            >
              <h3 className="text-2xl font-medium text-white mb-6">25-Year Cost Comparison</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-500/10 border border-red-500/30">
                  <span className="text-zinc-300">Without Solar</span>
                  <span className="text-2xl font-medium text-red-400">$156,000+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-500/10 border border-green-500/30">
                  <span className="text-zinc-300">With Solar</span>
                  <span className="text-2xl font-medium text-green-400">$35,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-violet-500/10 border border-violet-500/30">
                  <span className="text-zinc-300">Your Savings</span>
                  <span className="text-2xl font-medium text-violet-500">$121,000+</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-4">*Based on average California home, 7% annual rate increases, typical system size</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
