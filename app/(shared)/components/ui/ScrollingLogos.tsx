"use client";

import { JSX, useRef, useEffect } from "react";

/**
 * ScrollingLogos
 * -------------------------
 * Smooth auto-scrolling logo carousel with wave animation.
 */
export default function ScrollingLogos({
  logos,
  speed = 0.5,
}: {
  logos: { icon: JSX.Element; title: string }[];
  speed?: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let position = 0;

    const animate = () => {
      position += speed;
      container.scrollLeft = position;

      if (position >= container.scrollWidth / 2) {
        position = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  return (
    <section className="relative w-full">
      <div
        ref={scrollRef}
        className="flex items-center overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {[...logos, ...logos].map((item, i) => (
          <div
            key={i}
            className="shrink-0 w-[150px] flex flex-col items-center justify-center text-center mx-3 mb-6"
            style={{
              animation: "floatY 3s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div className="text-8xl mb-4 text-orange-400 dark:text-purple-400 transition-transform duration-300 hover:scale-110">
              {item.icon}
            </div>
            <span className="text-base font-medium opacity-70">{item.title}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(30px);
          }
        }
      `}</style>
    </section>

  );
}