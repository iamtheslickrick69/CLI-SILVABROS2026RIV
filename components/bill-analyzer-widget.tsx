"use client";

import React from "react"

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Sparkles, X, Upload, Loader2, Zap, DollarSign, Leaf, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BillAnalysis {
  utilityProvider: string;
  ratePlan: string | null;
  billingPeriod: string | null;
  totalKwh: number;
  totalAmount: number;
  ratePerKwh: number;
  accountNumber: string | null;
  serviceAddress: string | null;
  peakUsage: number | null;
  offPeakUsage: number | null;
  estimatedAnnualUsage: number;
  estimatedAnnualCost: number;
  solarRecommendation: {
    systemSizeKw: number;
    estimatedMonthlySavings: number;
    estimatedAnnualSavings: number;
    paybackYears: number;
    co2OffsetLbs: number;
  };
  insights: {
    usage: string[];
    financial: string[];
    solar: string[];
    environmental: string[];
  };
}

export function BillAnalyzerWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<BillAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  }, []);

  const handleFileUpload = async (file: File) => {
    if (!file.type.includes('pdf') && !file.type.includes('image')) {
      setError('Please upload a PDF or image file');
      return;
    }

    setFileName(file.name);
    setIsAnalyzing(true);
    setError(null);
    setAnalysis(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/analyze-bill', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze bill');
      }

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (err) {
      setError('Failed to analyze bill. Please try again.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setAnalysis(null);
    setFileName(null);
    setError(null);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-4 md:px-5 py-2.5 md:py-3 rounded-lg shadow-lg shadow-violet-500/25 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-semibold uppercase tracking-wide text-sm">Analyze My Bill</span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-4 bottom-4 top-auto z-50 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl"
            >
              <div className="bg-zinc-900 border border-zinc-700 overflow-hidden max-h-[85vh] overflow-y-auto">
                {/* Violet accent bar */}
                <div className="h-1 w-full bg-violet-500" />

                {/* Header */}
                <div className="p-6 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-violet-500/20 border border-violet-500/30">
                      <FileText className="w-6 h-6 text-violet-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">AI Bill Analyzer</h2>
                      <p className="text-sm text-zinc-400">98% accuracy</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  {!analysis && !isAnalyzing && (
                    <>
                      <p className="text-zinc-300 mb-6">
                        Upload your utility bill and get personalized recommendations based on YOUR bill, rate plan, and usage patterns. See exactly what you'll save.
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="p-4 border border-zinc-700 text-center">
                          <span className="text-2xl font-semibold text-white">98%</span>
                          <p className="text-sm text-zinc-400">Accuracy</p>
                        </div>
                        <div className="p-4 border border-zinc-700 text-center">
                          <span className="text-2xl font-semibold text-white">30s</span>
                          <p className="text-sm text-zinc-400">Analysis Time</p>
                        </div>
                        <div className="p-4 border border-zinc-700 text-center">
                          <span className="text-2xl font-semibold text-white">$0</span>
                          <p className="text-sm text-zinc-400">Cost to Use</p>
                        </div>
                      </div>

                      {/* Upload Zone */}
                      <label
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={cn(
                          "flex flex-col items-center justify-center p-8 border-2 border-dashed cursor-pointer transition-all",
                          isDragging
                            ? "border-violet-500 bg-violet-500/10"
                            : "border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
                        )}
                      >
                        <Upload className="w-10 h-10 text-zinc-500 mb-3" />
                        <p className="text-white font-medium mb-1">Drop your bill here</p>
                        <p className="text-sm text-zinc-400">or click to browse</p>
                        <p className="text-xs text-zinc-500 mt-2">Supports PDF, PNG, JPG</p>
                        <input
                          type="file"
                          accept=".pdf,image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                      </label>

                      {error && (
                        <p className="mt-4 text-red-400 text-sm">{error}</p>
                      )}
                    </>
                  )}

                  {/* Loading State */}
                  {isAnalyzing && (
                    <div className="py-12 flex flex-col items-center">
                      <Loader2 className="w-12 h-12 text-violet-500 animate-spin mb-4" />
                      <p className="text-white font-medium mb-1">Analyzing {fileName}...</p>
                      <p className="text-sm text-zinc-400">This usually takes about 30 seconds</p>
                    </div>
                  )}

                  {/* Results */}
                  {analysis && (
                    <div className="space-y-6">
                      {/* Bill Summary */}
                      <div className="p-4 bg-zinc-800/50 border border-zinc-700">
                        <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-3">Bill Summary</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-zinc-400">Utility</p>
                            <p className="text-white font-medium">{analysis.utilityProvider}</p>
                          </div>
                          <div>
                            <p className="text-sm text-zinc-400">Rate Plan</p>
                            <p className="text-white font-medium">{analysis.ratePlan || 'Standard'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-zinc-400">Monthly Usage</p>
                            <p className="text-white font-medium">{analysis.totalKwh.toLocaleString()} kWh</p>
                          </div>
                          <div>
                            <p className="text-sm text-zinc-400">Monthly Cost</p>
                            <p className="text-white font-medium">${analysis.totalAmount.toFixed(2)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-zinc-400">Rate per kWh</p>
                            <p className="text-white font-medium">{analysis.ratePerKwh.toFixed(1)}¢</p>
                          </div>
                          <div>
                            <p className="text-sm text-zinc-400">Annual Estimate</p>
                            <p className="text-white font-medium">${analysis.estimatedAnnualCost.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>

                      {/* Solar Recommendation */}
                      <div className="p-4 bg-violet-500/10 border border-violet-500/30">
                        <h3 className="text-sm font-medium text-violet-400 uppercase tracking-wide mb-3">Solar Recommendation</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-violet-500 mt-0.5" />
                            <div>
                              <p className="text-xl font-semibold text-white">{analysis.solarRecommendation.systemSizeKw} kW</p>
                              <p className="text-sm text-zinc-400">System Size</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="text-xl font-semibold text-white">${analysis.solarRecommendation.estimatedMonthlySavings}</p>
                              <p className="text-sm text-zinc-400">Monthly Savings</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-amber-500 mt-0.5" />
                            <div>
                              <p className="text-xl font-semibold text-white">{analysis.solarRecommendation.paybackYears} yrs</p>
                              <p className="text-sm text-zinc-400">Payback Period</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Leaf className="w-5 h-5 text-emerald-500 mt-0.5" />
                            <div>
                              <p className="text-xl font-semibold text-white">{(analysis.solarRecommendation.co2OffsetLbs / 1000).toFixed(1)}k</p>
                              <p className="text-sm text-zinc-400">lbs CO2/year</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-violet-500/30">
                          <p className="text-2xl font-bold text-white">
                            ${analysis.solarRecommendation.estimatedAnnualSavings.toLocaleString()}
                            <span className="text-base font-normal text-zinc-400"> saved per year</span>
                          </p>
                        </div>
                      </div>

                      {/* Categorized Insights */}
                      {analysis.insights && (
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide">Key Insights</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Usage Insights */}
                            {analysis.insights.usage && analysis.insights.usage.length > 0 && (
                              <div className="p-4 bg-zinc-800/50 border border-zinc-700">
                                <div className="flex items-center gap-2 mb-3">
                                  <Zap className="w-4 h-4 text-amber-500" />
                                  <span className="text-sm font-medium text-white">Your Usage</span>
                                </div>
                                <ul className="space-y-2">
                                  {analysis.insights.usage.map((insight, i) => (
                                    <li key={i} className="text-sm text-zinc-400 leading-relaxed">
                                      {insight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Financial Insights */}
                            {analysis.insights.financial && analysis.insights.financial.length > 0 && (
                              <div className="p-4 bg-zinc-800/50 border border-zinc-700">
                                <div className="flex items-center gap-2 mb-3">
                                  <DollarSign className="w-4 h-4 text-green-500" />
                                  <span className="text-sm font-medium text-white">Financial Impact</span>
                                </div>
                                <ul className="space-y-2">
                                  {analysis.insights.financial.map((insight, i) => (
                                    <li key={i} className="text-sm text-zinc-400 leading-relaxed">
                                      {insight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Solar Insights */}
                            {analysis.insights.solar && analysis.insights.solar.length > 0 && (
                              <div className="p-4 bg-zinc-800/50 border border-zinc-700">
                                <div className="flex items-center gap-2 mb-3">
                                  <Sparkles className="w-4 h-4 text-violet-500" />
                                  <span className="text-sm font-medium text-white">Solar Potential</span>
                                </div>
                                <ul className="space-y-2">
                                  {analysis.insights.solar.map((insight, i) => (
                                    <li key={i} className="text-sm text-zinc-400 leading-relaxed">
                                      {insight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Environmental Insights */}
                            {analysis.insights.environmental && analysis.insights.environmental.length > 0 && (
                              <div className="p-4 bg-zinc-800/50 border border-zinc-700">
                                <div className="flex items-center gap-2 mb-3">
                                  <Leaf className="w-4 h-4 text-emerald-500" />
                                  <span className="text-sm font-medium text-white">Environmental Impact</span>
                                </div>
                                <ul className="space-y-2">
                                  {analysis.insights.environmental.map((insight, i) => (
                                    <li key={i} className="text-sm text-zinc-400 leading-relaxed">
                                      {insight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Disclaimer */}
                          <p className="text-xs text-zinc-500 text-center pt-2">
                            Estimates based on regional averages and current utility rates. Actual results may vary based on roof orientation, shading, and local conditions.
                          </p>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                          onClick={resetAnalysis}
                          className="flex-1 px-4 py-3 border border-zinc-700 text-white font-semibold uppercase tracking-wide text-sm hover:bg-zinc-800 transition-colors"
                        >
                          Analyze Another Bill
                        </button>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="flex-1 px-4 py-3 bg-violet-500 text-white font-semibold uppercase tracking-wide text-sm hover:bg-violet-600 transition-colors"
                        >
                          Get Free Consultation
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
