"use client";

import { cn } from "@/app/(shared)/utils";
import { Footer } from "./parts/Footer";
import { Header } from "./parts/Header";
import { Nav } from "./parts/Nav";
import { ThemeToggle } from "./parts/ThemeToggle";
import { useTheme } from "@/app/(shared)/contexts/ThemeProvider";
import DotGrid from "../reactbits/DotGrid";
import ScrollToHash from "./ScrollToHash";


export default function Layout({ children }: { children: React.ReactNode }) {

  const { theme } = useTheme();

  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">
      <ScrollToHash />
      {/* Header */}
      <Header
        className="fixed z-50 left-0 right-0 top-0"
        contentAttributes={{
          className: "justify-between"
        }}
      >
        <div className="w-1/4">
          <a
            href="/#home"
            className={cn(
              "text-lg font-bold tracking-wide select-none rounded-full inline-flex justify-center items-center text-center size-12",
              "text-black dark:text-purple-400",
              "backdrop-blur-md bg-white/10 border-2 border-white/20 shadow-lg shadow-black/5 dark:shadow-white/5"
            )}
          >
            <span className="-scale-x-100">F</span>
            <span>R</span>
          </a>

        </div>

        {/* Center: Nav */}
        <Nav
          className="hidden md:flex justify-between w-full max-w-84"
        />


        {/* Right: Theme toggle + CV */}
        <div className="flex items-center justify-end gap-4 w-1/4">
          <ThemeToggle />
        </div>
      </Header>
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <DotGrid
          dotSize={4}
          gap={24}
          baseColor={
            theme === 'dark'
              ? "#333"
              : "#D0D0D0"
          }
          activeColor={"#C785FE"}
          proximity={100}
          shockRadius={100}
          shockStrength={100}
          resistance={750}
          returnDuration={2}
        />
      </div>          
      {/* Main Content + Footer */}
      <main 
        data-scroll-container
        className="relative z-1 flex-1 w-full overflow-x-hidden scroll-smooth pb-20 md:pb-0"
      >
        <div className="min-h-[40vh]">{children}</div>
        <Footer />
      </main>

      <div className="flex w-full md:hidden items-center justify-center h-20 px-6 fixed z-50 left-0 bottom-0 right-0">
        <Nav className="justify-evenly w-full" />
      </div>
    </div>
  );
}
