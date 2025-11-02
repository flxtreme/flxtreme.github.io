"use client";

import { useRef, useEffect } from "react";
import { useScroll, MotionValue } from "framer-motion";

/**
 * useScrollProgress
 * -------------------------
 * Provides scroll tracking for sections within a shared scroll container.
 * Automatically detects the element with `[data-scroll-container]`.
 */
export function useScrollProgress(offset: [string, string] = ["start start", "end start"]) {
  const ref = useRef(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    containerRef.current = document.querySelector("[data-scroll-container]");
  }, []);

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: ref,
    container: containerRef,
    offset: offset as any,
  });

  return { ref, containerRef, scrollYProgress };
}
