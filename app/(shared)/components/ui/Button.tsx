"use client";

import { useEffect, useState, ComponentPropsWithoutRef } from "react";
import { cn } from "@/app/(shared)/utils/";

/**
 * Button
 * -------------------------
 * Adaptive button that changes color depending on theme (orange for light, purple for dark).
 * Solid variant features gradient backgrounds with animated hover effects.
 * Outline variant features glassmorphism effect with backdrop blur.
 * Renders as <a> if `href` is provided, otherwise as <button>.
 */
type ButtonProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "default" | "large" | "small";
} & Omit<ComponentPropsWithoutRef<"button">, "onClick"> &
  Omit<ComponentPropsWithoutRef<"a">, "href">;

export const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  className,
  children,
  variant = "solid",
  size = "default",
  ...rest
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") as "light" | "dark";
    setTheme(current || "light");

    const observer = new MutationObserver(() => {
      const newTheme = html.getAttribute("data-theme") as "light" | "dark";
      if (newTheme) setTheme(newTheme);
    });

    observer.observe(html, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  const sizeClasses = cn({
    small: "h-8 px-3 text-xs gap-1",
    default: "h-10 px-4 text-sm gap-2",
    large: "h-10 px-4 text-sm gap-2 lg:h-14 lg:px-6 lg:text-lg lg:gap-3",
  }[size]);

  const borderSizeClasses = cn({
    small: "border",
    default: "border",
    large: "border-2",
  }[size]);

  const base = "cursor-pointer transition-all duration-300 inline-flex items-center justify-center rounded-full text-center shadow-lg shadow-black/5 dark:shadow-white/5 font-medium";

  const solid = cn(
    "relative overflow-hidden group",
    "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white",
    "before:absolute before:inset-0 before:bg-gradient-to-r before:-z-10",
    "before:from-purple-400 before:to-purple-500",
    "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
    "hover:shadow-xl hover:scale-105 active:scale-95"
  );

  const outline = cn(
    borderSizeClasses,
    "backdrop-blur-md border-white/20 bg-white/10 hover:bg-gray-300/10 hover:backdrop-blur-none"
  );

  const styles = cn(base, sizeClasses, variant === "solid" ? solid : outline, className);

  if (href) {
    return (
      <a href={href} className={styles} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles} {...rest}>
      {children}
    </button>
  );
};