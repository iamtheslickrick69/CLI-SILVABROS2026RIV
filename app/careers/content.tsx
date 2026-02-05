"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  Zap, 
  Clock, 
  CheckCircle2,
  Shield,
  GraduationCap,
  MapPin,
  Briefcase,
  ArrowRight,
  Calendar,
  Phone,
  UserCheck,
  Rocket,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp, staggerItem } from "@/lib/animations";

const whyRivValues = [
  {
    icon: Heart,
    title: "Mission-Driven Work",
    description: "Every installation means a family saves money and reduces their carbon footprint. Your work matters."
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunity",
    description: "Solar is the fastest-growing industry in America. Grow your career with us as we scale across California."
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "We reward performance. Top performers are compensated accordingly."
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "We're a family-owned company that treats employees like family. No corporate red tape."
  }
];

const traits = [
  {
    icon: Heart,
    title: "People-First Mindset",
    description: "You genuinely care about helping homeowners make the best decision for their family - even if it's not solar."
  },
  {
    icon: Target,
    title: "Self-Motivated",
    description: "You don't need a manager hovering. You set goals, crush them, and then set bigger ones."
  },
  {
    icon: Clock,
    title: "Consistent & Reliable",
    description: "You show up every day ready to work. Your team can count on you."
  },
  {
    icon: GraduationCap,
    title: "Coachable",
    description: "You're hungry to learn. You take feedback and turn it into growth."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "You do the right thing even when no one is watching. No high-pressure tactics. Ever."
  }
];

const openPositions = [
  {
    id: "sales-consultant",
    title: "Solar Sales Consultant",
    type: "Full-Time",
    location: "Riverside, CA",
    description: "Meet with homeowners, present solar solutions, and help families go solar. No cold calling - we provide warm leads.",
    responsibilities: [
      "Conduct in-home consultations with pre-qualified homeowners",
      "Present customized solar solutions based on energy needs",
      "Build relationships and guide families through the solar decision",
      "Maintain accurate records in our CRM system",
      "Achieve monthly and quarterly sales goals"
    ],
    requirements: [
      "Strong communication and interpersonal skills",
      "Self-motivated with a positive attitude",
      "Valid driver's license and reliable transportation",
      "Ability to work flexible hours including evenings",
      "No solar experience required - we train you"
    ]
  },
  {
    id: "sales-closer",
    title: "Solar Sales Closer",
    type: "Full-Time",
    location: "Riverside, CA",
    description: "Close deals with pre-qualified homeowners. High performers thrive here.",
    responsibilities: [
      "Close sales with homeowners who have received initial consultations",
      "Handle objections and negotiate final terms",
      "Ensure smooth handoff to project coordination team",
      "Meet and exceed monthly closing targets",
      "Mentor junior sales consultants"
    ],
    requirements: [
      "Proven track record in sales (any industry)",
      "Excellent negotiation and closing skills",
      "Ability to handle high-pressure situations with grace",
      "Strong follow-up and organizational skills",
      "Solar experience preferred but not required"
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Performance-Based Pay",
    description: "Your effort directly impacts your earnings. No ceiling on what you can achieve."
  },
  {
    icon: Shield,
    title: "Health Insurance",
    description: "Medical, dental, and vision coverage for you and your family."
  },
  {
    icon: Calendar,
    title: "Paid Time Off",
    description: "PTO + paid holidays to recharge and spend time with loved ones."
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Comprehensive onboarding + ongoing training programs to help you succeed."
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Clear path from rep to team lead to management. We promote from within."
  },
  {
    icon: Users,
    title: "Company Events",
    description: "Team outings, quarterly celebrations, and annual retreats to build connections."
  },
  {
    icon: Briefcase,
    title: "Equipment Provided",
    description: "iPad, company phone, marketing materials - everything you need to succeed."
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Set your own appointments. Work-life balance matters to us."
  }
];

const teamTestimonials = [
  {
    name: "Marcus T.",
    role: "Solar Sales Consultant",
    quote: "I left a corporate sales job and never looked back. At RIV, I actually feel like I'm making a difference.",
    tenure: "2 years"
  },
  {
    name: "Jennifer R.",
    role: "Sales Team Lead",
    quote: "The team here is like family. Leadership actually listens and cares about our growth. Best decision I ever made.",
    tenure: "3 years"
  },
  {
    name: "David L.",
    role: "Solar Sales Closer",
    quote: "I've worked for 3 solar companies. RIV is different - they invest in their people and don't cut corners.",
    tenure: "1.5 years"
  }
];

const applicationSteps = [
  {
    number: "01",
    icon: Briefcase,
    title: "Apply Online",
    description: "Submit your application and resume through our careers portal."
  },
  {
    number: "02",
    icon: Phone,
    title: "Phone Screen",
    description: "Quick 15-minute call to learn about you and answer your questions."
  },
  {
    number: "03",
    icon: UserCheck,
    title: "In-Person Interview",
    description: "Meet the team, see our office, and show us what you've got."
  },
  {
    number: "04",
    icon: Rocket,
    title: "Offer & Onboarding",
    description: "If it's a fit, we move fast. Start your new career within 2 weeks."
  }
];

const faqs = [
  {
    question: "Do I need solar experience?",
    answer: "No! We have a comprehensive training program. We hire for attitude and train for skill. If you're motivated and coachable, we'll teach you everything you need to know."
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve Riverside County and surrounding areas in Southern California. As we grow, we'll be expanding to new territories."
  },
  {
    question: "How quickly can I start?",
    answer: "Most new hires start within 1-2 weeks of accepting an offer. We move fast because we know you're eager to begin your new career."
  }
];

export function CareersPageContent() {
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="bg-zinc-950">
      {/* Why RIV Solar Section */}
      <section id="why-riv" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              Why Join Us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              Why Work With Us?
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyRivValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }
                  }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-violet-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="py-20 md:py-28 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              Ideal Candidate
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              Who Thrives at RIV Solar?
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }
                  }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-center hover:border-violet-500/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                  <trait.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{trait.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{trait.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              Join Our Team
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              Open Positions
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }
                  }
                }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-colors"
              >
                <button
                  onClick={() => setExpandedPosition(expandedPosition === position.id ? null : position.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs font-medium rounded-full">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                    </div>
                    <p className="mt-3 text-white/70 text-sm">{position.description}</p>
                  </div>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-white/60 transition-transform ml-4 flex-shrink-0",
                    expandedPosition === position.id && "rotate-180"
                  )} />
                </button>

                {expandedPosition === position.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-zinc-800"
                  >
                    <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-violet-600 hover:bg-violet-500 text-white">
                        Apply for this Position
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              Perks & Benefits
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              What We Offer
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.06, ease: [0.25, 0.4, 0.25, 1] }
                  }
                }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-violet-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              Our Team
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              Hear From Our Team
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {teamTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }
                  }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-violet-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-base leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                  <span className="text-violet-400 text-sm">{testimonial.tenure}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 md:py-28 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              Simple Process
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              How to Join Us
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }
                  }
                }}
                className="relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
              >
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-6 h-px bg-violet-500/30 -translate-y-1/2 z-10" />
                )}
                <span className="text-5xl font-bold text-violet-500/20 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              Questions
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }
                  }
                }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-white/60 transition-transform flex-shrink-0",
                    expandedFaq === index && "rotate-180"
                  )} />
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
