"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, FileText, Zap, TrendingDown, DollarSign, Sun, Battery, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BillAnalyzerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "upload" | "analyzing" | "results";

interface AnalysisResults {
  currentBill: number;
  estimatedSolarBill: number;
  monthlySavings: number;
  yearlySavings: number;
  twentyFiveYearSavings: number;
  paybackPeriod: number;
  systemSize: string;
  utilityProvider: string;
  ratePlan: string;
}

export function BillAnalyzerModal({ isOpen, onClose }: BillAnalyzerModalProps) {
  const [step, setStep] = useState<Step>("upload");
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [results, setResults] = useState<AnalysisResults | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const processFile = async (file: File) => {
    setFileName(file.name);
    setStep("analyzing");

    // Simulate AI analysis with progressive steps
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Generate mock results based on typical California bills
    const currentBill = 180 + Math.floor(Math.random() * 200);
    const solarBill = 10 + Math.floor(Math.random() * 15);
    const monthlySavings = currentBill - solarBill;

    setResults({
      currentBill,
      estimatedSolarBill: solarBill,
      monthlySavings,
      yearlySavings: monthlySavings * 12,
      twentyFiveYearSavings: monthlySavings * 12 * 25,
      paybackPeriod: 5 + Math.floor(Math.random() * 3),
      systemSize: `${6 + Math.floor(Math.random() * 4)} kW`,
      utilityProvider: ["PG&E", "SDG&E", "SCE"][Math.floor(Math.random() * 3)],
      ratePlan: "TOU-C",
    });

    setStep("results");
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleReset = () => {
    setStep("upload");
    setFileName("");
    setResults(null);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[550px] md:max-h-[85vh] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl shadow-violet-500/20 z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-700 bg-gradient-to-r from-violet-600/20 to-violet-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Bill Analyzer</h3>
                  <p className="text-xs text-violet-400">98% accuracy in 30 seconds</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {/* Upload Step */}
                {step === "upload" && (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-white mb-2">Upload Your Utility Bill</h4>
                      <p className="text-sm text-zinc-400">
                        We support PG&E, SDG&E, and SCE bills (PDF or image)
                      </p>
                    </div>

                    {/* Drop Zone */}
                    <div
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-all ${
                        dragActive
                          ? "border-violet-500 bg-violet-500/10"
                          : "border-zinc-700 hover:border-zinc-600 bg-zinc-800/50"
                      }`}
                    >
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={handleFileInput}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload className={`w-12 h-12 mx-auto mb-4 ${dragActive ? "text-violet-400" : "text-zinc-500"}`} />
                      <p className="text-white font-medium mb-1">
                        {dragActive ? "Drop your bill here" : "Drag & drop your bill"}
                      </p>
                      <p className="text-sm text-zinc-500">or click to browse</p>
                    </div>

                    {/* Supported utilities */}
                    <div className="flex justify-center gap-6">
                      {["PG&E", "SDG&E", "SCE"].map((utility) => (
                        <div key={utility} className="flex items-center gap-2 text-zinc-400 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          {utility}
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-zinc-600 text-center">
                      Your data is encrypted and never shared. We only use it to calculate your savings.
                    </p>
                  </motion.div>
                )}

                {/* Analyzing Step */}
                {step === "analyzing" && (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="py-10 text-center space-y-8"
                  >
                    {/* Animated loader */}
                    <div className="relative w-24 h-24 mx-auto">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-violet-500/20 border-t-violet-500 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-violet-400" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Analyzing Your Bill...</h4>
                      <p className="text-sm text-zinc-400">{fileName}</p>
                    </div>

                    {/* Progress steps */}
                    <div className="space-y-3 text-left max-w-xs mx-auto">
                      {[
                        { text: "Extracting usage data", delay: 0 },
                        { text: "Identifying rate plan", delay: 0.5 },
                        { text: "Calculating solar potential", delay: 1 },
                        { text: "Generating savings report", delay: 1.5 },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: item.delay }}
                          className="flex items-center gap-3"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: item.delay + 0.3 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                          </motion.div>
                          <span className="text-sm text-zinc-300">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Results Step */}
                {step === "results" && results && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    {/* Header stats */}
                    <div className="text-center p-6 bg-gradient-to-br from-violet-600/20 to-violet-500/10 rounded-xl border border-violet-500/20">
                      <p className="text-sm text-violet-400 mb-2">Your Estimated Monthly Savings</p>
                      <motion.p
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        className="text-5xl font-bold text-white"
                      >
                        ${results.monthlySavings}
                        <span className="text-lg text-zinc-400">/mo</span>
                      </motion.p>
                    </div>

                    {/* Comparison */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-zinc-800 rounded-xl text-center">
                        <TrendingDown className="w-5 h-5 text-red-400 mx-auto mb-2" />
                        <p className="text-xs text-zinc-500 mb-1">Current Bill</p>
                        <p className="text-xl font-semibold text-red-400">${results.currentBill}/mo</p>
                        <p className="text-xs text-zinc-600">{results.utilityProvider}</p>
                      </div>
                      <div className="p-4 bg-zinc-800 rounded-xl text-center">
                        <Sun className="w-5 h-5 text-green-400 mx-auto mb-2" />
                        <p className="text-xs text-zinc-500 mb-1">With Solar</p>
                        <p className="text-xl font-semibold text-green-400">${results.estimatedSolarBill}/mo</p>
                        <p className="text-xs text-zinc-600">Grid connection fee only</p>
                      </div>
                    </div>

                    {/* Key metrics */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          <span className="text-sm text-zinc-300">25-Year Savings</span>
                        </div>
                        <span className="font-semibold text-white">${results.twentyFiveYearSavings.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-violet-400" />
                          <span className="text-sm text-zinc-300">Recommended System</span>
                        </div>
                        <span className="font-semibold text-white">{results.systemSize}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Battery className="w-5 h-5 text-yellow-400" />
                          <span className="text-sm text-zinc-300">Payback Period</span>
                        </div>
                        <span className="font-semibold text-white">{results.paybackPeriod} years</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold rounded-xl py-6 h-auto">
                        Get Your Free Custom Quote
                      </Button>
                      <button
                        onClick={handleReset}
                        className="w-full text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        Analyze another bill
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
