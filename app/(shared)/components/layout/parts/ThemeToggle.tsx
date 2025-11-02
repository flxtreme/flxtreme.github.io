"use client";


import { useTheme } from "@/app/(shared)/contexts/ThemeProvider";
import { cn } from "@/app/(shared)/utils";
import { motion, AnimatePresence } from "framer-motion";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      initial={false}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative size-12 flex items-center justify-center rounded-full cursor-pointer",
        "transition-transform duration-200 hover:scale-105",
        "backdrop-blur-md bg-white/10 border-2 border-white/20 hover:bg-white/20",
        "shadow-lg shadow-black/5 dark:shadow-white/5"
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="text-black"
          >
            <IoSunnyOutline size={18} strokeWidth={2.5} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="text-purple-400"
          >
            <IoMoonOutline size={18} strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};