"use client";

import { motion } from "framer-motion";
import { Phone, Pencil, Wrench, CheckCircle, DollarSign, Clock, Shield, Users, Zap, Sun, Battery, FileCheck } from "lucide-react";
import Image from "next/image";

export function SolutionPageContent() {
  const processSteps = [
    {
      number: "01",
      title: "Free Consultation",
      duration: "30-60 minutes",
      icon: <Phone className="w-6 h-6" />,
      description: "We start with an honest conversation about your energy needs. No sales pitch — just a side-by-side comparison of your options.",
      details: [
        "Review your current utility bills",
        "Analyze your energy usage patterns",
        "Discuss your goals and timeline",
        "Provide transparent pricing options",
        "Answer all your questions — no pressure",
      ],
    },
    {
      number: "02",
      title: "Custom System Design",
      duration: "3-5 days",
      icon: <Pencil className="w-6 h-6" />,
      description: "Our engineers design a system tailored specifically to your home, roof layout, and energy consumption.",
      details: [
        "Satellite and on-site roof analysis",
        "Panel placement optimization",
        "Shade analysis and production estimates",
        "Battery sizing (if applicable)",
        "Final system proposal and pricing",
      ],
    },
    {
      number: "03",
      title: "Professional Installation",
      duration: "1-2 days",
      icon: <Wrench className="w-6 h-6" />,
      description: "Our in-house certified installers handle everything. No subcontractors, no compromises on quality.",
      details: [
        "Permit acquisition (we handle it all)",
        "Professional roof prep and mounting",
        "Panel and inverter installation",
        "Electrical work and connections",
        "Full site cleanup",
      ],
    },
    {
      number: "04",
      title: "System Activation",
      duration: "2-4 weeks",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "We coordinate with your utility company and handle all inspections. Once approved, your system goes live.",
      details: [
        "City/county inspection coordination",
        "Utility interconnection application",
        "Net metering setup",
        "System commissioning",
        "Customer app setup and training",
      ],
    },
    {
      number: "05",
      title: "Start Saving",
      duration: "Day 1",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Watch your savings grow in real-time. Most homeowners see their first reduced bill within 30 days.",
      details: [
        "Real-time production monitoring",
        "Savings tracking dashboard",
        "24/7 system monitoring",
        "Ongoing performance optimization",
        "25-year warranty protection",
      ],
    },
  ];

  const equipment = [
    {
      category: "Solar Panels",
      brands: ["QCells", "REC", "Silfab"],
      description: "Tier-1 panels with industry-leading efficiency and 25-year warranties",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      category: "Inverters",
      brands: ["Enphase", "SolarEdge"],
      description: "Premium microinverters and optimizers for maximum energy harvest",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      category: "Battery Storage",
      brands: ["Tesla Powerwall", "Enphase", "Franklin"],
      description: "Home battery systems for backup power and NEM 3.0 optimization",
      icon: <Battery className="w-6 h-6" />,
    },
  ];

  const differentiators = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "In-House Installation Crews",
      description: "We never use subcontractors. Every installer is RIV-trained and certified. Our reputation is on the line with every install.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "25-Year Full Warranty",
      description: "Panels, inverters, workmanship, and production — all covered. One company, one warranty, no finger-pointing.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Permit-to-Power Handling",
      description: "We manage every permit, inspection, and utility form. You sign once and we handle the rest.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Transparent Timeline",
      description: "We tell you exactly what to expect and when. No surprises, no delays without communication.",
    },
  ];

  const timeline = {
    total: "4-8 weeks",
    phases: [
      { name: "Consultation & Design", duration: "1 week" },
      { name: "Permitting", duration: "2-4 weeks" },
      { name: "Installation", duration: "1-2 days" },
      { name: "Inspection & Activation", duration: "1-2 weeks" },
    ],
  };

  return (
    <>
      {/* Process Overview */}
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
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              5 Steps to Solar
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We've refined our process over thousands of installations to make going solar as simple as possible.
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 bg-zinc-800/50 border border-zinc-700/50"
              >
                {/* Left: Number and Icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                  <span className="text-5xl font-light text-violet-500">{step.number}</span>
                  <div className="p-3 bg-violet-500/10 text-violet-500">
                    {step.icon}
                  </div>
                </div>

                {/* Middle: Title and Description */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-medium text-white">{step.title}</h3>
                    <span className="px-3 py-1 bg-zinc-700 text-zinc-300 text-sm">{step.duration}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-5">
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Timeline</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              What to Expect
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              From signing to solar in <span className="text-violet-500 font-medium">{timeline.total}</span>. Here's the typical timeline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 bg-zinc-900 border border-zinc-700 h-full">
                  <span className="text-3xl font-medium text-violet-500 mb-2 block">{phase.duration}</span>
                  <h3 className="text-white font-medium">{phase.name}</h3>
                </div>
                {index < timeline.phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-violet-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break - Installation Image */}
      <section className="w-full bg-zinc-900 relative overflow-hidden">
        <div className="relative h-64 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80"
            alt="Professional solar panel installation on residential roof"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900/60 to-zinc-900" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center px-6"
            >
              <p className="text-2xl md:text-3xl font-light text-white max-w-3xl">
                "Quality equipment. Expert installation. <span className="text-violet-400">Real results.</span>"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
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
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Equipment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Tier-1 Equipment Only
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              We only install premium, proven equipment from manufacturers with track records of reliability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-zinc-800/50 border border-zinc-700/50"
              >
                <div className="p-3 bg-violet-500/10 text-violet-500 w-fit mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{item.category}</h3>
                <p className="text-zinc-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.brands.map((brand) => (
                    <span key={brand} className="px-3 py-1 bg-zinc-700 text-zinc-300 text-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break - Happy Homeowner */}
      <section className="w-full bg-zinc-800 relative overflow-hidden">
        <div className="relative h-48 md:h-64">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Happy homeowner with solar panels"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-800/80 to-zinc-800" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-light text-white max-w-xl"
              >
                Join <span className="text-violet-400 font-medium">2,500+ families</span> who've made the switch to solar.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="w-full bg-zinc-800 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6 mx-auto">
              <div className="w-2.5 h-2.5 bg-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">The RIV Difference</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Why Our Process Works
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We've built our process around one principle: treat every customer's home like it's our own.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-zinc-900 border border-zinc-700"
              >
                <div className="p-3 bg-violet-500/10 text-violet-500 h-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEM 3.0 Explanation */}
      <section className="w-full bg-zinc-900 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
                <div className="w-2.5 h-2.5 bg-violet-500" />
                <span className="text-sm font-medium text-zinc-400 tracking-wide">NEM 3.0</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
                Designed for the New Rules
              </h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                California's NEM 3.0 policy changed the game for solar. Export rates dropped ~75%, making self-consumption critical. Our systems are designed from the ground up for this new reality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Battery-optimized designs</span>
                    <p className="text-zinc-400 text-sm">Store your excess energy instead of selling it back cheaply</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Load-shifting strategies</span>
                    <p className="text-zinc-400 text-sm">Use your solar power when rates are highest</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Right-sized systems</span>
                    <p className="text-zinc-400 text-sm">Maximize ROI by matching production to consumption</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-zinc-800 border border-zinc-700 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80"
                alt="Tesla Powerwall battery storage system with solar panels"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
