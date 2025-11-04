"use client";

import { NAV_ITEMS } from "@/app/(shared)/constants";
import { cn } from "@/app/(shared)/utils";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { HTMLAttributes, useEffect, useState } from "react";

interface NavProps extends HTMLAttributes<HTMLElement> {}

export const Nav: React.FC<NavProps> = ({ className, ...props }) => {
  const router = useRouter();

  const [fullPath, setFullPath] = useState<string | null>(null);

  // Set initial path on mount
  useEffect(() => {
    setFullPath(window.location.pathname + window.location.hash);
  }, []);

  // Handle click for both normal and hash links
  const handleClick = (href: string) => {
    const isHash = href.startsWith("#");

    if (isHash) {
      // Find the scroll container (main element)
      setFullPath(window.location.pathname + href);
    } else {
      router.push(href);
      setFullPath(href);
    }
  };

  return (
    <nav
      className={cn(
        "flex items-center gap-4 font-medium rounded-full p-1",
        "backdrop-blur-md bg-white/10 border-2 border-white/20 shadow-lg shadow-black/5 dark:shadow-white/5",
        className
      )}
      {...props}
    >
      {NAV_ITEMS.map((item, i) => {
        const Icon = item.icon;
        const isActive = fullPath?.includes(item.href);

        return (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.href);
            }}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={cn(
              "group relative flex items-center px-3 h-10 cursor-pointer rounded-full",
              "transition-colors duration-200",
              "hover:bg-white/20"
            )}
          >
            {/* Icon with glow */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
              className={cn(
                "transition-colors duration-200",
                isActive
                  ? "text-purple-400 drop-shadow-[0_0_6px_#fb923c] dark:drop-shadow-[0_0_6px_#c084fc]"
                  : "text-neutral-700 dark:text-neutral-300 group-hover:group-hover:text-purple-400 group-hover:drop-shadow-[0_0_6px_#fb923c] dark:group-hover:drop-shadow-[0_0_6px_#c084fc]"
              )}
            >
              <Icon size={20} strokeWidth={1.5} />
            </motion.div>

            {/* Label */}
            <motion.span
              initial={false}
              animate={{
                width: isActive ? "auto" : 0,
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? 8 : 0,
              }}
              whileHover={{ width: "auto", opacity: 1, marginLeft: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "overflow-hidden whitespace-nowrap text-sm",
                "transition-colors duration-200",
                isActive
                  ? "text-purple-400"
                  : "text-neutral-700 dark:text-neutral-300 group-hover:group-hover:text-purple-400"
              )}
            >
              {item.label}
            </motion.span>
          </motion.a>
        );
      })}
    </nav>
  );
};