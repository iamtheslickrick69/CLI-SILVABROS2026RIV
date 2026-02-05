"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";

// Component to render message with hyperlinks
function MessageContent({ text }: { text: string }) {
  // Parse markdown links [text](url) and render as clickable
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

const QUICK_REPLIES = [
  "How much can I save?",
  "What's NEM 3.0?",
  "Do I need a battery?",
  "What's the tax credit?",
];

const WELCOME_MESSAGE = "Hey! I'm RIV, your solar assistant. Ask me anything about going solar in California!";

export function RivChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

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

  // Listen for custom event to open chat from anywhere
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };

    window.addEventListener('open-riv-chat', handleOpenChat);
    return () => window.removeEventListener('open-riv-chat', handleOpenChat);
  }, []);

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

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/riv-chat" }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

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

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-32 md:bottom-24 right-4 md:right-6 z-50 h-12 w-12 md:h-16 md:w-16 rounded-full bg-violet-600 shadow-lg shadow-violet-500/30 flex items-center justify-center group"
            data-chat-button
          >
            <div className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-20" />
            <Image
              src="/images/riv-logo.png"
              alt="RIV AI"
              width={32}
              height={32}
              className="invert"
            />
            <span className="sr-only">Chat with RIV</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : undefined
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bg-white border border-zinc-200 shadow-2xl shadow-black/10 overflow-hidden flex flex-col inset-0 md:inset-auto md:bottom-6 md:right-6 md:w-[400px] md:rounded-2xl"
            style={{
              maxHeight: isMinimized ? "auto" : undefined,
              paddingBottom: keyboardHeight > 0 ? `${keyboardHeight}px` : undefined
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-violet-700 px-4 flex items-center justify-between shrink-0 py-4 pt-safe md:py-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Image
                      src="/images/riv-logo.png"
                      alt="RIV"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-violet-600" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-white">RIV AI</span>
                    <Sparkles className="h-4 w-4 text-violet-200" />
                  </div>
                  <span className="text-xs text-violet-200">Online now</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 hover:bg-white/10 rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close chat"
              >
                <ChevronDown className="h-5 w-5 text-white" />
              </button>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div
                  ref={messagesContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 overscroll-contain min-h-0 md:min-h-[300px]"
                >
                  {/* Welcome Message */}
                  <div className="flex gap-3">
                    <div className="h-9 w-9 md:h-8 md:w-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/riv-logo.png"
                        alt="RIV"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className="flex flex-col gap-3 max-w-[85%]">
                      <div className="bg-white text-zinc-800 px-4 py-3 rounded-2xl rounded-bl-md text-sm md:text-sm leading-relaxed shadow-sm border border-zinc-100">
                        {WELCOME_MESSAGE}
                      </div>
                      {messages.length === 0 && (
                        <div className="flex flex-wrap gap-2">
                          {QUICK_REPLIES.map((reply) => (
                            <button
                              key={reply}
                              onClick={() => handleQuickReply(reply)}
                              className="px-4 py-2.5 md:px-3 md:py-1.5 bg-violet-100 hover:bg-violet-200 active:bg-violet-300 text-violet-700 text-sm md:text-xs rounded-full transition-colors border border-violet-200 min-h-[44px] md:min-h-0"
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Conversation Messages */}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                    >
                      {message.role === "assistant" && (
                        <div className="h-9 w-9 md:h-8 md:w-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                          <Image
                            src="/images/riv-logo.png"
                            alt="RIV"
                            width={18}
                            height={18}
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          message.role === "user"
                            ? "bg-violet-600 text-white rounded-br-md"
                            : "bg-white text-zinc-800 rounded-bl-md shadow-sm border border-zinc-100"
                        }`}
                      >
                        <MessageContent text={getMessageText(message)} />
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="h-9 w-9 md:h-8 md:w-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/riv-logo.png"
                          alt="RIV"
                          width={18}
                          height={18}
                        />
                      </div>
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-zinc-100">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="h-2.5 w-2.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="h-2.5 w-2.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="shrink-0 border-t border-zinc-200 bg-white p-4 pb-safe md:pb-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend(input);
                    }}
                    className="flex gap-2"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about solar..."
                      disabled={isLoading}
                      enterKeyHint="send"
                      className="flex-1 bg-zinc-100 text-zinc-900 placeholder:text-zinc-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 border border-zinc-200 px-4 py-4 text-base md:py-3 md:text-sm"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="bg-violet-600 hover:bg-violet-500 active:bg-violet-700 disabled:bg-zinc-300 disabled:cursor-not-allowed text-white rounded-xl transition-colors flex items-center justify-center px-5 py-4 min-w-[56px] md:px-4 md:py-3 md:min-w-0"
                    >
                      <Send className="h-5 w-5 md:h-4 md:w-4" />
                    </button>
                  </form>
                  <p className="hidden md:block text-xs text-zinc-400 text-center mt-2">
                    Powered by Claude Sonnet
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
