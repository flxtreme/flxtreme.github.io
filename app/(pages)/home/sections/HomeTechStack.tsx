"use client";

import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiWordpress,
  SiFigma,
  SiOpenai,
  SiPrisma,
  SiDrizzle,
} from "react-icons/si";
import { cn } from "@/app/(shared)/utils";
import { Button } from "@/app/(shared)/components/ui/Button";
import { IoAdd, IoChevronDownOutline, IoExpandOutline } from "react-icons/io5";
import { useScrollProgress } from "@/app/(shared)/hooks/useScrollProgress";
import LogoLoop from "@/app/(shared)/components/reactbits/LogoLoop";
import { useRouter } from "next/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ScrollingLogos from "@/app/(shared)/components/ui/ScrollingLogos";

const techStack = [
  { Icon: SiAngular, label: "Angular", category: "Frontend" },
  { Icon: SiNextdotjs, label: "Next.js", category: "Frontend" },
  { Icon: SiReact, label: "React", category: "Frontend" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", category: "Frontend" },

  // added frontend / languages
  { Icon: SiTypescript, label: "TypeScript", category: "Frontend" },
  { Icon: SiJavascript, label: "JavaScript", category: "Frontend" },

  // mobile
  { Icon: SiFlutter, label: "Flutter", category: "Mobile" },

  // backend
  { Icon: SiNodedotjs, label: "Node.js", category: "Backend" },
  { Icon: SiNestjs, label: "NestJS", category: "Backend" },
  { Icon: SiPostgresql, label: "PostgreSQL", category: "Backend" },
  { Icon: SiPrisma, label: "Prisma", category: "Backend / ORM" },
  { Icon: SiDrizzle, label: "Drizzle", category: "Backend / ORM" },

  // CMS / design / AI / tools (added)
  { Icon: SiWordpress, label: "WordPress", category: "CMS" },
  { Icon: SiFigma, label: "Figma", category: "Design" },

  // AI / assistants
  { Icon: SiOpenai, label: "Vibe Coding", category: "AI" },

  // cloud & devops
  { Icon: SiGooglecloud, label: "GCP", category: "Cloud & DevOps" },
  { Icon: SiDocker, label: "Docker", category: "Cloud & DevOps" },
  { Icon: SiGit, label: "Git", category: "Cloud & DevOps" },
];

const useTechStackRows = () => {
  const firstRow = techStack.slice(0, 6);
  const secondRow = techStack.slice(6, 12);
  const thirdRow = techStack.slice(12, 18);

  return {
    firstRow,
    secondRow,
    thirdRow
  }
}

/**
 * SkillCard
 * -------------------------
 * Modern card with hover backdrop blur effect.
 */
const SkillCard = ({
  tech,
  translate,
  size = "lg",
}: {
  tech: typeof techStack[0];
  translate?: MotionValue<number>;
  size?: "lg" | "sm";
}) => {
  const router = useRouter();

  const Icon = tech.Icon;

  const cardSize = {
    lg: "w-64 h-64",
    sm: "w-40 h-40",
  }[size];

  const iconSize = {
    lg: 64,
    sm: 40,
  }[size];

  const textSize = {
    lg: "text-lg md:text-xl",
    sm: "text-base md:text-lg",
  }[size];

  return (
    <motion.div
      onClick={() => {
        router.replace(`/#projects?f=${tech.label}`);
        router.refresh();
      }}
      style={translate ? { x: translate } : {}}
      whileHover={{ y: -16 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("group/skill relative shrink-0 cursor-pointer", cardSize)}
    >
      {/* Inner card */}
      <div
        className={cn(
          "relative h-full w-full rounded-2xl p-6 flex flex-col justify-center items-center",
          "bg-white/80 dark:bg-slate-900/80",
          "overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-200/10"
        )}
      >
        {/* Icon */}
        <div className="relative z-10 flex justify-center mb-3 md:mb-4 items-center">
          <Icon
            size={iconSize}
            className="text-purple-400 transition-transform duration-300 group-hover/skill:scale-110 drop-shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 text-center">
          <h3
            className={cn(
              "font-bold text-center mb-1 md:mb-2",
              "text-slate-900 dark:text-white",
              textSize
            )}
          >
            {tech.label}
          </h3>
          <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider">
            {tech.category}
          </p>
        </div>

        {/* Corner chevrons */}
        {[
          { pos: "top-3 left-3", rotate: "rotate-45" },
          { pos: "top-3 right-3", rotate: "rotate-135" },
          { pos: "bottom-3 left-3", rotate: "-rotate-45" },
          { pos: "bottom-3 right-3", rotate: "-rotate-135" },
        ].map((corner, i) => (
          <div
            key={i}
            className={cn(
              "absolute text-slate-300 dark:text-slate-600 size-4 md:size-6",
              corner.pos,
              corner.rotate,
              "transition-transform duration-300 group-hover/skill:scale-110"
            )}
          >
            <HiChevronLeft size={16} className="md:size-6 group-hover/skill:text-purple-500" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

/** Header (animated with scroll offset) */
const AnimatedHeader = ( {size} : { size: "lg" | "sm" } ) => {
  const { ref, scrollYProgress } = useScrollProgress(
    ["end start", "start end"]
  );

  const translateYLg = useTransform(scrollYProgress, [1, 0], [0, 860]);
  const translateYSm = useTransform(scrollYProgress, [1, 0], [0, 500]);

  const translateY = size === "lg" ? translateYLg : translateYSm;
  return (
    <div ref={ref}>
      <motion.div
        style={{ translateY }}
        className="container px-6"
      >
        <h1 className="title-text mb-4 lg:mb-6">Skills</h1>
        <p className="sub-desc-text max-w-2xl opacity-50">
          Yap! you're right. Here's what I work with.
        </p>
      </motion.div>
      <div id="more"></div>
    </div>
  );
};

/**
 * DesktopView (xl)
 * -------------------------
 * Full parallax + stacking header.
 */
const DesktopView = () => {
  const { firstRow, secondRow, thirdRow } = useTechStackRows();

  const { ref, scrollYProgress } = useScrollProgress(
    ["start start", "end start"]
  );

  const springConfig = { stiffness: 200, damping: 50, bounce: 500 };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, 400]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);

  return (
    <div
      className="relative flex h-[2000px] flex-col self-auto antialiased perspective-[1000px] transform-3d"
      ref={ref}
    >
      <AnimatedHeader size="lg" />
      <motion.div className="h-full py-120" style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="mb-8 flex flex-row-reverse space-x-8 space-x-reverse">
          {firstRow.map((tech) => (
            <SkillCard key={tech.label} tech={tech} translate={translateX} />
          ))}
        </motion.div>
        <motion.div className="mb-8 flex flex-row space-x-8">
          {secondRow.map((tech) => (
            <SkillCard key={tech.label} tech={tech} translate={translateXReverse} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-8 space-x-reverse">
          {thirdRow.map((tech) => (
            <SkillCard key={tech.label} tech={tech} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

/**
 * SmallerDesktopView (lg only)
 * -------------------------
 * Same layout with smaller scale and stacked header motion.
 */
const SmallerDesktopView = () => {
  const { firstRow, secondRow, thirdRow } = useTechStackRows();

  const { ref, scrollYProgress } = useScrollProgress(
    ["start start", "end start"]
  );

  const springConfig = { stiffness: 200, damping: 50, bounce: 500 };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [10, 0]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [10, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-400, 300]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.3, 1]), springConfig);

  return (
    <div
      className="relative flex h-[1200px] flex-col self-auto antialiased perspective-[1000px] transform-3d"
      ref={ref}
    >
      <AnimatedHeader size="sm" />
      <motion.div className="h-full py-60" style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="mb-4 flex flex-row-reverse space-x-4 space-x-reverse">
          {firstRow.map((tech) => (
            <SkillCard key={tech.label} tech={tech} translate={translateXReverse} size="sm" />
          ))}
        </motion.div>
        <motion.div className="mb-4 flex flex-row space-x-4">
          {secondRow.map((tech) => (
            <SkillCard key={tech.label} tech={tech} translate={translateX} size="sm" />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-4 space-x-reverse">
          {thirdRow.map((tech) => (
            <SkillCard key={tech.label} tech={tech} translate={translateXReverse} size="sm" />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

/** FallbackGrid (simple static grid for md and below) */
const FallbackGrid = () => (
  <section className="relative">
    <div className="container px-6 py-8">
      <h1 className="title-text mb-4 lg:mb-6">Skills</h1>
      <p className="sub-desc-text max-w-2xl opacity-50">
        Yap! you're right. Here's what I work with.
      </p>
    </div>
    <ScrollingLogos 
      logos={techStack.map((a) => {
        const Icon = a.Icon;

        return {
          icon: <Icon />,
          title: a.label,
        }
      })} 
      speed={2}
    />
  </section>
);

export default function HomeTechStack() {
  return (
    <div className="relative">
      <div id="skills" className="absolute top-0 md:top-1/3"></div>
      {/* xl and up */}
      <div className="hidden xl:block">
        <DesktopView />
      </div>

      {/* lg only */}
      <div className="hidden lg:block xl:hidden">
        <SmallerDesktopView />
      </div>

      {/* fallback (md and below) */}
      <div className="block lg:hidden">
        <FallbackGrid />
      </div>

    </div>
  );
}
