"use client";

import React from "react"
import { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, MessageCircle, FileText, Upload, Loader2, Zap, DollarSign, Leaf, Clock, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useLanguage } from "@/lib/i18n";

// Component to render message with hyperlinks
function MessageContent({ text }: { text: string }) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  
  return (
    <>
      {parts.map((part, i) => {
        const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          const [, linkText, href] = linkMatch;
          return (
            <a
              key={i}
              href={href}
              className="text-violet-600 hover:text-violet-700 underline font-medium"
            >
              {linkText}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

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

export function RivUnifiedWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "analyze">("chat");
  const [input, setInput] = useState("");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, language } = useLanguage();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle keyboard on mobile using visualViewport API
  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const handleResize = () => {
      if (!isOpen || !isMobile) return;

      const viewport = window.visualViewport;
      if (!viewport) return;

      // Calculate keyboard height
      const keyboardH = window.innerHeight - viewport.height;
      setKeyboardHeight(keyboardH > 100 ? keyboardH : 0);

      // Scroll to keep input visible
      if (keyboardH > 100 && inputRef.current) {
        setTimeout(() => {
          inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);
      }
    };

    window.visualViewport.addEventListener('resize', handleResize);
    window.visualViewport.addEventListener('scroll', handleResize);

    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
      window.visualViewport?.removeEventListener('scroll', handleResize);
    };
  }, [isOpen, isMobile]);

  // Lock body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen, isMobile]);

  // Listen for custom event to open chat from anywhere
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-riv-chat', handleOpenChat);
    return () => window.removeEventListener('open-riv-chat', handleOpenChat);
  }, []);

  // Scroll direction for mobile hide/show (only when widget is closed)
  const { direction, isAtTop } = useScrollDirection({ threshold: 10, topOffset: 100 });
  const showFloatingButton = isAtTop || direction === "up" || direction === null;

  // Chat state - pass language to API
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: `/api/riv-chat?lang=${language}` }),
  });
  const isLoading = status === "streaming" || status === "submitted";

  // Bill Analyzer state
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<BillAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && activeTab === "chat") {
      inputRef.current?.focus();
    }
  }, [isOpen, activeTab]);

  const handleSend = (text: string) => {
    if (!text.trim() || isLoading) return;
    sendMessage({ text });
    setInput("");
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  const getMessageText = (message: { parts?: Array<{ type: string; text?: string }> }) => {
    if (!message.parts) return "";
    return message.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("");
  };

  // Bill Analyzer handlers
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
    if (file) handleFileUpload(file);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
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

      if (!response.ok) throw new Error('Failed to analyze bill');
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
      {/* Floating Button - Styled like header logo, hides on scroll down (mobile) */}
      <AnimatePresence>
        {!isOpen && showFloatingButton && (
          <motion.button
            initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
            animate={{ 
              x: 0, 
              opacity: 1, 
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
                filter: { duration: 0.2 }
              }
            }}
            exit={{ 
              x: 100, 
              opacity: 0,
              filter: "blur(4px)",
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                opacity: { duration: 0.15 }
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-[88px] md:bottom-6 right-4 md:right-6 z-40 flex items-center gap-3 px-4 py-3 min-h-[56px] bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/20 group"
          >
            {/* Logo container - matching header style */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1.5 transition-transform group-hover:scale-105">
              <Image
                src="/images/riv-logo.png"
                alt="RIV Solar"
                fill
                className="object-contain invert p-0.5"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-white text-sm">{t.chat.title}</span>
              <span className="text-xs text-white/60">{t.chat.subtitle}</span>
            </div>
            {/* Online indicator */}
            <div className="absolute top-2 right-2 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-zinc-900">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Widget Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 350,
                damping: 30
              }
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.9,
              transition: { duration: 0.2 }
            }}
            className="fixed z-50 bg-white border border-zinc-200 shadow-2xl shadow-black/20 overflow-hidden flex flex-col inset-0 md:inset-auto md:bottom-6 md:right-6 md:w-[420px] md:rounded-2xl md:max-h-[min(600px,80vh)]"
            style={{
              paddingBottom: keyboardHeight > 0 ? `${keyboardHeight}px` : undefined
            }}
          >
            {/* Header - with online indicator and iOS safe area */}
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 px-3 md:px-4 py-4 pt-safe md:py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1 ring-2 ring-violet-500/30">
                  <Image
                    src="/images/riv-logo.png"
                    alt="RIV"
                    fill
                    className="object-contain invert p-0.5"
                  />
                  {/* Online pulse indicator */}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-zinc-900">
                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-white text-base">{t.chat.title}</span>
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Sparkles className="h-4 w-4 text-violet-400" />
                    </motion.div>
                  </div>
                  <span className="text-xs text-green-400 font-medium">{t.chat.onlineNow}</span>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.9 }}
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl transition-colors hover:bg-white/10"
              >
                <ChevronDown className="h-5 w-5 text-white" />
              </motion.button>
            </div>

            {/* Tab Switcher - with animated indicator */}
            <div className="relative flex border-b border-zinc-200 bg-zinc-50 shrink-0">
              {/* Animated background pill */}
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 h-0.5 bg-violet-600"
                animate={{
                  left: activeTab === "chat" ? "0%" : "50%",
                  width: "50%"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
              <motion.button
                onClick={() => setActiveTab("chat")}
                whileHover={{ backgroundColor: activeTab === "chat" ? "white" : "rgba(0,0,0,0.03)" }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors min-h-[52px] md:min-h-[44px] relative z-10",
                  activeTab === "chat"
                    ? "text-violet-600 bg-white"
                    : "text-zinc-500"
                )}
              >
                <MessageCircle className="w-4 h-4" />
                {t.chat.chatTab}
              </motion.button>
              <motion.button
                onClick={() => setActiveTab("analyze")}
                whileHover={{ backgroundColor: activeTab === "analyze" ? "white" : "rgba(0,0,0,0.03)" }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors min-h-[52px] md:min-h-[44px] relative z-10",
                  activeTab === "analyze"
                    ? "text-violet-600 bg-white"
                    : "text-zinc-500"
                )}
              >
                <FileText className="w-4 h-4" />
                {t.chat.analyzeTab}
              </motion.button>
            </div>

            {/* Chat Tab */}
            {activeTab === "chat" && (
              <>
                {/* Messages */}
                <div
                  ref={messagesContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-zinc-50 to-white overscroll-contain min-h-0 md:min-h-[300px]"
                >
                  {/* Welcome Message - Animated */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3"
                  >
                    <div className="h-9 w-9 md:h-8 md:w-8 rounded-xl bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Image src="/images/riv-logo.png" alt="RIV" width={18} height={18} />
                    </div>
                    <div className="flex flex-col gap-3 max-w-[85%]">
                      <div className="bg-white text-zinc-800 px-4 py-3 rounded-2xl rounded-bl-md text-sm leading-relaxed shadow-md border border-zinc-100/80">
                        {t.chat.welcomeMessage}
                      </div>
                      {messages.length === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="flex flex-wrap gap-2 mt-1"
                        >
                          {t.chat.quickReplies.map((reply, idx) => (
                            <motion.button
                              key={reply}
                              initial={{ opacity: 0, scale: 0.9, y: 5 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ delay: 0.3 + idx * 0.08, type: "spring", stiffness: 400, damping: 25 }}
                              whileHover={{ scale: 1.05, backgroundColor: "rgb(221 214 254)" }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleQuickReply(reply)}
                              className="px-4 py-2.5 md:px-3 md:py-2 bg-violet-100 text-violet-700 text-sm md:text-xs font-medium rounded-full transition-shadow border border-violet-200/60 shadow-sm hover:shadow-md hover:border-violet-300 min-h-[44px] md:min-h-0"
                            >
                              {reply}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Conversation Messages - Animated */}
                  <AnimatePresence mode="popLayout">
                    {messages.map((message, idx) => (
                      <motion.div
                        key={message.id}
                        initial={{ 
                          opacity: 0, 
                          y: 15, 
                          x: message.role === "user" ? 20 : -20,
                          scale: 0.95
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0, 
                          x: 0,
                          scale: 1
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 350, 
                          damping: 30,
                          delay: idx === messages.length - 1 ? 0 : 0
                        }}
                        className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                      >
                        {message.role === "assistant" && (
                          <div className="h-9 w-9 md:h-8 md:w-8 rounded-xl bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Image src="/images/riv-logo.png" alt="RIV" width={18} height={18} />
                          </div>
                        )}
                        <div
                          className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-violet-600 to-violet-700 text-white rounded-br-md shadow-lg shadow-violet-500/20"
                              : "bg-white text-zinc-800 rounded-bl-md shadow-md border border-zinc-100/80"
                          }`}
                        >
                          <MessageContent text={getMessageText(message)} />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator - Animated */}
                  <AnimatePresence>
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex gap-3"
                      >
                        <div className="h-9 w-9 md:h-8 md:w-8 rounded-xl bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Image src="/images/riv-logo.png" alt="RIV" width={18} height={18} />
                        </div>
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-md border border-zinc-100/80">
                          <div className="flex gap-1.5 items-center h-4">
                            <motion.span 
                              animate={{ y: [0, -6, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              className="h-2 w-2 bg-violet-500 rounded-full" 
                            />
                            <motion.span 
                              animate={{ y: [0, -6, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                              className="h-2 w-2 bg-violet-500 rounded-full" 
                            />
                            <motion.span 
                              animate={{ y: [0, -6, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                              className="h-2 w-2 bg-violet-500 rounded-full" 
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area - Enhanced with iOS safe area */}
                <div className="shrink-0 p-4 pb-safe md:pb-4 border-t border-zinc-200 bg-white">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend(input);
                    }}
                    className="flex gap-2 items-center"
                  >
                    <div className="relative flex-1">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={t.chat.inputPlaceholder}
                        disabled={isLoading}
                        enterKeyHint="send"
                        className="w-full bg-zinc-100 text-zinc-900 placeholder:text-zinc-400 px-4 py-4 md:py-3 rounded-xl text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:bg-white focus:border-violet-300 disabled:opacity-50 border border-zinc-200 transition-all duration-200"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      whileHover={{ scale: input.trim() ? 1.05 : 1 }}
                      whileTap={{ scale: input.trim() ? 0.92 : 1 }}
                      animate={{
                        backgroundColor: input.trim() ? "rgb(124 58 237)" : "rgb(212 212 216)",
                        boxShadow: input.trim() ? "0 4px 14px rgba(124, 58, 237, 0.35)" : "none"
                      }}
                      transition={{ duration: 0.2 }}
                      className="px-5 py-4 md:px-4 md:py-3 min-w-[56px] min-h-[56px] md:min-w-[48px] md:min-h-[48px] text-white rounded-xl flex items-center justify-center disabled:cursor-not-allowed"
                    >
                      <motion.div
                        animate={{ rotate: isLoading ? 360 : 0 }}
                        transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
                      >
                        {isLoading ? (
                          <Loader2 className="h-5 w-5" />
                        ) : (
                          <Send className="h-5 w-5" />
                        )}
                      </motion.div>
                    </motion.button>
                  </form>
                </div>
              </>
            )}

            {/* Analyze Tab */}
            {activeTab === "analyze" && (
              <div className="flex-1 overflow-y-auto p-4 bg-zinc-50">
                {!analysis && !isAnalyzing && (
                  <>
                    <p className="text-zinc-600 text-sm mb-4">
                      {t.chat.analyzeDescription}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="p-3 bg-white border border-zinc-200 rounded-xl text-center">
                        <span className="text-lg font-semibold text-zinc-900">98%</span>
                        <p className="text-xs text-zinc-500">{t.chat.accuracy}</p>
                      </div>
                      <div className="p-3 bg-white border border-zinc-200 rounded-xl text-center">
                        <span className="text-lg font-semibold text-zinc-900">30s</span>
                        <p className="text-xs text-zinc-500">{t.chat.analysis}</p>
                      </div>
                      <div className="p-3 bg-white border border-zinc-200 rounded-xl text-center">
                        <span className="text-lg font-semibold text-zinc-900">$0</span>
                        <p className="text-xs text-zinc-500">{t.chat.free}</p>
                      </div>
                    </div>

                    {/* Upload Zone */}
                    <label
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={cn(
                        "flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xl cursor-pointer transition-all",
                        isDragging
                          ? "border-violet-500 bg-violet-50"
                          : "border-zinc-300 hover:border-violet-400 hover:bg-violet-50/50"
                      )}
                    >
                      <Upload className="w-8 h-8 text-zinc-400 mb-2" />
                      <p className="text-zinc-700 font-medium text-sm mb-1">{t.chat.dropBillHere}</p>
                      <p className="text-xs text-zinc-500">{t.chat.orClickToBrowse}</p>
                      <p className="text-xs text-zinc-400 mt-2">{t.chat.fileTypes}</p>
                      <input
                        type="file"
                        accept=".pdf,image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </label>

                    {error && <p className="mt-3 text-red-500 text-sm">{error}</p>}
                  </>
                )}

                {/* Loading State */}
                {isAnalyzing && (
                  <div className="py-12 flex flex-col items-center">
                    <Loader2 className="w-10 h-10 text-violet-500 animate-spin mb-3" />
                    <p className="text-zinc-700 font-medium text-sm mb-1">{t.chat.analyzing} {fileName}...</p>
                    <p className="text-xs text-zinc-500">{t.chat.usuallyAbout}</p>
                  </div>
                )}

                {/* Results */}
                {analysis && (
                  <div className="space-y-4">
                    {/* Bill Summary */}
                    <div className="p-4 bg-white border border-zinc-200 rounded-xl">
                      <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-3">{t.chat.billSummary}</h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-zinc-500 text-xs">{t.chat.utility}</p>
                          <p className="text-zinc-900 font-medium">{analysis.utilityProvider}</p>
                        </div>
                        <div>
                          <p className="text-zinc-500 text-xs">{t.chat.monthlyUsage}</p>
                          <p className="text-zinc-900 font-medium">{analysis.totalKwh.toLocaleString()} kWh</p>
                        </div>
                        <div>
                          <p className="text-zinc-500 text-xs">{t.chat.monthlyCost}</p>
                          <p className="text-zinc-900 font-medium">${analysis.totalAmount.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-zinc-500 text-xs">{t.chat.ratePerKwh}</p>
                          <p className="text-zinc-900 font-medium">{analysis.ratePerKwh.toFixed(1)}c</p>
                        </div>
                      </div>
                    </div>

                    {/* Solar Recommendation */}
                    <div className="p-4 bg-violet-50 border border-violet-200 rounded-xl">
                      <h3 className="text-xs font-medium text-violet-600 uppercase tracking-wide mb-3">{t.chat.yourSolarPotential}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-violet-500" />
                          <div>
                            <p className="text-lg font-semibold text-zinc-900">{analysis.solarRecommendation.systemSizeKw} kW</p>
                            <p className="text-xs text-zinc-500">{t.chat.systemSize}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="text-lg font-semibold text-zinc-900">${analysis.solarRecommendation.estimatedMonthlySavings}</p>
                            <p className="text-xs text-zinc-500">{t.chat.monthlySavings}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-500" />
                          <div>
                            <p className="text-lg font-semibold text-zinc-900">{analysis.solarRecommendation.paybackYears} yrs</p>
                            <p className="text-xs text-zinc-500">{t.chat.payback}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Leaf className="w-4 h-4 text-emerald-500" />
                          <div>
                            <p className="text-lg font-semibold text-zinc-900">{(analysis.solarRecommendation.co2OffsetLbs / 1000).toFixed(1)}k lbs</p>
                            <p className="text-xs text-zinc-500">{t.chat.co2Year}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-violet-200">
                        <p className="text-xl font-bold text-violet-600">
                          ${analysis.solarRecommendation.estimatedAnnualSavings.toLocaleString()}
                          <span className="text-sm font-normal text-zinc-600"> {t.chat.savedYear}</span>
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={resetAnalysis}
                        className="flex-1 px-4 py-2.5 border border-zinc-300 text-zinc-700 text-sm font-medium rounded-xl hover:bg-zinc-100 transition-colors"
                      >
                        {t.chat.newAnalysis}
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 px-4 py-2.5 bg-violet-600 text-white text-sm font-medium rounded-xl hover:bg-violet-500 transition-colors"
                      >
                        {t.chat.getQuote}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
