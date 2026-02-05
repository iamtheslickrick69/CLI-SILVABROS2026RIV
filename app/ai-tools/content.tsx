"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Sparkles, Upload, BarChart3, Clock, Shield, Zap, Brain, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AiToolsPageContent() {
  const chatbotFeatures = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Availability",
      description: "Get answers any time — nights, weekends, holidays. Our AI never sleeps.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Zero Sales Pressure",
      description: "Ask anything without worrying about a follow-up call. Pure information.",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "California Expert",
      description: "Trained on PG&E, SDG&E, and SCE rate structures, NEM policies, and incentives.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Responses",
      description: "No waiting on hold. Get accurate answers in seconds.",
    },
  ];

  const chatbotTopics = [
    "How much can I save with solar?",
    "What is NEM 3.0?",
    "Do I qualify for the 30% tax credit?",
    "Should I get battery storage?",
    "How does financing work?",
    "What's the installation process like?",
    "How long do solar panels last?",
    "What happens during a blackout?",
  ];

  const analyzerSteps = [
    {
      number: "01",
      title: "Upload Your Bill",
      description: "Take a photo or upload a PDF of your utility bill. We accept PG&E, SDG&E, and SCE bills.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI extracts your usage patterns, rate plan, and identifies your peak consumption times.",
    },
    {
      number: "03",
      title: "Personalized Report",
      description: "Get a detailed breakdown showing exactly what you're paying and what you could save with solar.",
    },
  ];

  const analyzerMetrics = [
    { value: "98%", label: "Accuracy Rate" },
    { value: "30sec", label: "Analysis Time" },
    { value: "$0", label: "Cost to Use" },
    { value: "5,000+", label: "Bills Analyzed" },
  ];

  const sampleReport = [
    { label: "Current Monthly Bill", value: "$342", type: "current" },
    { label: "Your Rate Plan", value: "TOU-C", type: "info" },
    { label: "Monthly Usage", value: "892 kWh", type: "info" },
    { label: "Peak Usage %", value: "43%", type: "warning" },
    { label: "Projected Solar Bill", value: "$18", type: "savings" },
    { label: "Monthly Savings", value: "$324", type: "highlight" },
    { label: "Annual Savings", value: "$3,888", type: "highlight" },
    { label: "25-Year Savings", value: "$97,200+", type: "highlight" },
  ];

  const competitors = [
    { company: "Most Solar Companies", hasAI: false, hasBillAnalyzer: false, has247: false, noPressure: false },
    { company: "RIV Solar", hasAI: true, hasBillAnalyzer: true, has247: true, noPressure: true },
  ];

  return (
    <>
      {/* Why AI Section */}
      <section className="w-full bg-zinc-900 py-20 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
                <Sparkles className="w-4 h-4 text-violet-500" />
                <span className="text-sm font-medium text-zinc-400 tracking-wide">Why AI?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
                No Other Solar Company Has This
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Most solar companies rely on high-pressure sales tactics and keep you in the dark until you're on the phone with a rep. We built AI tools that give you complete transparency before you ever talk to anyone.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Get instant, accurate information about your specific situation — your utility, your usage, your potential savings. No games, no gimmicks, no pressure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-800 border border-zinc-700"
            >
              <h3 className="text-xl font-medium text-white mb-6">What Makes Us Different</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-3 text-zinc-400 font-medium">Feature</th>
                      <th className="text-center py-3 text-zinc-400 font-medium">Others</th>
                      <th className="text-center py-3 text-violet-500 font-medium">RIV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-700/50">
                      <td className="py-3 text-zinc-300">AI Chatbot</td>
                      <td className="py-3 text-center text-red-400">No</td>
                      <td className="py-3 text-center text-green-400">Yes</td>
                    </tr>
                    <tr className="border-b border-zinc-700/50">
                      <td className="py-3 text-zinc-300">AI Bill Analyzer</td>
                      <td className="py-3 text-center text-red-400">No</td>
                      <td className="py-3 text-center text-green-400">Yes</td>
                    </tr>
                    <tr className="border-b border-zinc-700/50">
                      <td className="py-3 text-zinc-300">24/7 Availability</td>
                      <td className="py-3 text-center text-red-400">No</td>
                      <td className="py-3 text-center text-green-400">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-zinc-300">No Pressure</td>
                      <td className="py-3 text-center text-red-400">No</td>
                      <td className="py-3 text-center text-green-400">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="w-full bg-zinc-800 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
              <MessageCircle className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Tool #1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              RIV AI Chatbot
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Your personal solar expert, available 24/7. Ask anything about solar, utility rates, financing, or the installation process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {chatbotFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-zinc-900 border border-zinc-700"
                >
                  <div className="p-2 bg-violet-500/10 text-violet-500 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Chat Demo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-zinc-900 border border-zinc-700"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-700">
                <div className="p-2 bg-violet-500/10">
                  <MessageCircle className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">RIV AI</h4>
                  <span className="text-green-400 text-xs">Online now</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-zinc-800 p-4 max-w-[80%]">
                  <p className="text-zinc-300 text-sm">Hi! I'm the RIV AI assistant. Ask me anything about solar in California.</p>
                </div>
                <div className="bg-violet-500/10 p-4 max-w-[80%] ml-auto border border-violet-500/20">
                  <p className="text-zinc-300 text-sm">How much can I save with my SDG&E bill?</p>
                </div>
                <div className="bg-zinc-800 p-4 max-w-[80%]">
                  <p className="text-zinc-300 text-sm">SDG&E has the highest rates in the USA at ~55¢/kWh. Most SDG&E customers save 70-90% on their bills. Can you tell me your average monthly bill so I can give you a more specific estimate?</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-zinc-500 text-xs mb-3">Popular questions:</p>
                <div className="flex flex-wrap gap-2">
                  {chatbotTopics.slice(0, 4).map((topic) => (
                    <button
                      key={topic}
                      className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs hover:bg-zinc-700 transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-6 bg-white text-zinc-900 hover:bg-zinc-200">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Chatting
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Bill Analyzer Section */}
      <section className="w-full bg-zinc-900 py-24 border-b border-zinc-700/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 px-4 py-2 border border-zinc-700 w-fit mb-6">
              <FileText className="w-4 h-4 text-violet-500" />
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Tool #2</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              AI Bill Analyzer
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Upload your utility bill and get personalized savings estimates based on YOUR actual usage, rate plan, and consumption patterns.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {analyzerMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 bg-zinc-800/50 border border-zinc-700/50"
              >
                <span className="text-3xl font-medium text-violet-500">{metric.value}</span>
                <p className="text-zinc-400 text-sm mt-1">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Steps */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white mb-8">How It Works</h3>
              {analyzerSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <span className="text-4xl font-light text-violet-500">{step.number}</span>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">{step.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}

              <Button className="mt-8 bg-white text-zinc-900 hover:bg-zinc-200">
                <Upload className="w-4 h-4 mr-2" />
                Upload Your Bill
              </Button>
            </div>

            {/* Sample Report */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-zinc-800 border border-zinc-700"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-700">
                <div className="p-2 bg-violet-500/10">
                  <BarChart3 className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Sample Analysis Report</h4>
                  <span className="text-zinc-500 text-xs">Based on PG&E bill</span>
                </div>
              </div>

              <div className="space-y-3">
                {sampleReport.map((item) => (
                  <div
                    key={item.label}
                    className={`flex justify-between items-center p-3 ${
                      item.type === "current" ? "bg-red-500/10 border border-red-500/30" :
                      item.type === "savings" ? "bg-green-500/10 border border-green-500/30" :
                      item.type === "highlight" ? "bg-violet-500/10 border border-violet-500/30" :
                      item.type === "warning" ? "bg-yellow-500/10 border border-yellow-500/30" :
                      "bg-zinc-900/50 border border-zinc-700/50"
                    }`}
                  >
                    <span className="text-zinc-300 text-sm">{item.label}</span>
                    <span className={`font-medium ${
                      item.type === "current" ? "text-red-400" :
                      item.type === "savings" ? "text-green-400" :
                      item.type === "highlight" ? "text-violet-500" :
                      item.type === "warning" ? "text-yellow-400" :
                      "text-white"
                    }`}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">Solar Recommended</span>
                </div>
                <p className="text-zinc-300 text-sm">Based on your usage patterns and current rates, solar would save you an estimated $97,200+ over 25 years.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
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
                <span className="text-sm font-medium text-zinc-400 tracking-wide">Privacy First</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
                Your Data Stays Yours
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">No signup required</span>
                    <p className="text-zinc-400 text-sm">Use our AI tools without creating an account</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Bills auto-deleted</span>
                    <p className="text-zinc-400 text-sm">Uploaded bills are processed and deleted within 24 hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">No spam, ever</span>
                    <p className="text-zinc-400 text-sm">We don't sell your data or send unsolicited emails</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">You control the conversation</span>
                    <p className="text-zinc-400 text-sm">Talk to a human only when you're ready</p>
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
              <Sparkles className="w-12 h-12 text-violet-500 mx-auto mb-6" />
              <h3 className="text-2xl font-medium text-white mb-4">Ready to Try?</h3>
              <p className="text-zinc-400 mb-8">
                Our AI tools are completely free. No credit card, no signup, no obligation.
              </p>
              <div className="flex flex-col gap-4">
                <Button className="w-full bg-white text-zinc-900 hover:bg-zinc-200">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with RIV AI
                </Button>
                <Button variant="outline" className="w-full border-zinc-600 text-white hover:bg-zinc-800 bg-transparent">
                  <Upload className="w-4 h-4 mr-2" />
                  Analyze My Bill
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
