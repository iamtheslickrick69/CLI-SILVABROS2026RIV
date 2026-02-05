"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hey! I'm RIV, your AI solar assistant. Ask me anything about solar panels, California utility rates, NEM 3.0, financing options, or tax credits. I'm here 24/7!",
    isUser: false,
    timestamp: new Date(),
  },
];

const quickQuestions = [
  "How much can I save with solar?",
  "What is NEM 3.0?",
  "Do I need battery storage?",
  "What tax credits are available?",
];

// Simulated AI responses
const getAIResponse = (question: string): string => {
  const q = question.toLowerCase();

  if (q.includes("save") || q.includes("saving")) {
    return "Most California homeowners save between $100-$300 per month with solar! Your exact savings depend on your current bill, roof size, and utility. Want me to analyze your specific situation? You can upload your bill using our AI Bill Analyzer for a personalized estimate.";
  }
  if (q.includes("nem") || q.includes("net metering")) {
    return "NEM 3.0 is California's new net metering policy. Under NEM 3.0, export rates are lower than before, which means battery storage is more valuable now. The good news? Solar is still very worth it - you just want to maximize self-consumption. Systems designed for NEM 3.0 can still achieve 6-8 year payback periods.";
  }
  if (q.includes("battery") || q.includes("storage")) {
    return "With NEM 3.0, battery storage is highly recommended! Batteries let you store excess solar energy for evening use when rates are highest. Popular options include Tesla Powerwall and Enphase batteries. They also provide backup power during outages - increasingly important in California.";
  }
  if (q.includes("tax") || q.includes("credit") || q.includes("incentive")) {
    return "Great news! The federal Investment Tax Credit (ITC) is currently 30% through 2032. That means if your system costs $30,000, you get $9,000 back on your federal taxes. California also offers property tax exemptions for solar - your home value increases but your taxes don't. Plus there's SGIP rebates for batteries!";
  }
  if (q.includes("cost") || q.includes("price") || q.includes("expensive")) {
    return "In California, a typical residential solar system costs $15,000-$35,000 before incentives. After the 30% federal tax credit, that drops to $10,500-$24,500. With financing options, many homeowners pay $0 down and have monthly payments lower than their current electric bill!";
  }
  if (q.includes("roof") || q.includes("damage")) {
    return "Quality solar installations actually protect your roof! Panels shield shingles from sun and weather. At RIV Solar, we use industry-leading mounting systems and include roof penetration warranties. If your roof is older than 10 years, we recommend evaluating it first.";
  }

  return "That's a great question! Solar is a big decision and I want to make sure you get accurate information. For a personalized answer, I'd recommend scheduling a free consultation with one of our solar experts, or try our AI Bill Analyzer to see your specific savings potential. Is there anything else I can help with?";
};

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI typing
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Add AI response
    const aiResponse: Message = {
      id: messages.length + 2,
      text: getAIResponse(messageText),
      isUser: false,
      timestamp: new Date(),
    };
    setIsTyping(false);
    setMessages((prev) => [...prev, aiResponse]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Chat Widget */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100%-2rem)] md:w-[420px] h-[600px] max-h-[80vh] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl shadow-violet-500/10 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-700 bg-gradient-to-r from-violet-600/20 to-violet-500/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-zinc-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">RIV AI Assistant</h3>
                  <p className="text-xs text-green-400">Online - Ready to help</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.isUser
                        ? "bg-violet-600 text-white rounded-br-md"
                        : "bg-zinc-800 text-zinc-200 rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-zinc-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-xs px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-zinc-700 bg-zinc-900/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about solar..."
                  className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="p-3 bg-violet-600 hover:bg-violet-500 disabled:bg-zinc-700 disabled:cursor-not-allowed rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-zinc-600 mt-2 text-center">
                <Sparkles className="w-3 h-3 inline mr-1" />
                Powered by RIV AI
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
