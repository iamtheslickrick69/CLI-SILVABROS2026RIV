"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrollDirectionOptions {
  threshold?: number;
  topOffset?: number;
}

interface ScrollDirectionState {
  direction: "up" | "down" | null;
  isAtTop: boolean;
  scrollY: number;
}

export function useScrollDirection(options: ScrollDirectionOptions = {}): ScrollDirectionState {
  const { threshold = 10, topOffset = 100 } = options;
  
  const [scrollState, setScrollState] = useState<ScrollDirectionState>({
    direction: null,
    isAtTop: true,
    scrollY: 0,
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isAtTop = currentScrollY < topOffset;
    
    setScrollState((prev) => {
      const diff = currentScrollY - prev.scrollY;
      
      // Only update direction if scroll difference exceeds threshold
      if (Math.abs(diff) < threshold) {
        return { ...prev, scrollY: currentScrollY, isAtTop };
      }
      
      const direction = diff > 0 ? "down" : "up";
      
      return {
        direction,
        isAtTop,
        scrollY: currentScrollY,
      };
    });
  }, [threshold, topOffset]);

  useEffect(() => {
    // Set initial state
    setScrollState({
      direction: null,
      isAtTop: window.scrollY < topOffset,
      scrollY: window.scrollY,
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, topOffset]);

  return scrollState;
}
