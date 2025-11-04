"use client";

import { useEffect, useMemo, useState } from "react";

export interface Project {
  url?: string;
  title: string;
  description?: string;
  stacks?: string[];
  image?: string; // alias for url if you prefer
  private?: boolean;
}

/**
 * useProjects
 * -------------------------
 * - Provides `allProjects` and filtered `projects` (by showPrivate)
 * - Persists `showPrivate` in localStorage (default: false)
 * - Returns setter to toggle visibility
 */
export function useProjects() {
  const [showPrivate, setShowPrivate] = useState<boolean>(false);

  /** Load persisted preference on mount */
  useEffect(() => {
    try {
      const raw = localStorage.getItem("showPrivate");
      if (raw !== null) setShowPrivate(raw === "true");
    } catch {
      // Ignore SSR/localStorage access issues
    }
  }, []);

  /** Persist when toggled */
  useEffect(() => {
    try {
      localStorage.setItem("showPrivate", String(showPrivate));
    } catch {
      // Ignore privacy mode or restricted access
    }
  }, [showPrivate]);

  /** Canonical project list */
  const allProjects: Project[] = useMemo(() => [
    {
      title: "Red Hire",
      description: "Cabin crew recruitment system with Workday integration",
      stacks: ["React", "Workday", "Firestore", "Node.js"],
      private: true,
    },
    {
      title: "Crew Commission Portal",
      description:
        "Tracks cabin crew sales and commissions with downloadable reports.",
      stacks: ["React", "Node.js", "Firestore", "BigQuery"],
      private: true,
    },
    {
      title: "Corporate ICT Portal",
      description:
        "Portal for IT equipment, devices, and license requests, integrated with Jira.",
      stacks: ["NextJS", "Jira", "Node", "Prisma", "PostgreSQL"],
      private: true,
    },
    {
      title: "Credit Account Expiry Notification",
      description:
        "Scheduled checking and notifying expiring credit accounts.",
      stacks: ["Node.js", "Pub/Sub", "CleverTap", "BigQuery"],
      private: true,
    },
    {
      title: "All-Star Booking",
      description:
        "Booking platform with enhanced UI and PDF itinerary generation.",
      stacks: ["Next.js", "Puppeteer", "Handlebars"],
      private: true,
    },
    {
      title: "CBTA",
      description:
        "Pilot training app with offline/draft mode and form/reports/pilot data management.",
      stacks: ["Angular", "NestJs", "Prisma"],
      private: true,
    },
    {
      title: "SkyIQ",
      description:
        "Dashboard to manage disruptions, reduce costs, and enhance efficiency.",
      stacks: ["Angular", "NestJs", "Prisma"],
      private: true,
    },
    {
      title: "Cockpit",
      description:
        "Dashboard that consists of KPI charts for C-Level to track OKRs.",
      stacks: ["NextJS", "BigQuery", "LLM Integration"],
      private: true,
    },
    {
      title: "Customer360: Sit-Together Service",
      description:
        "Service to automatically group passengers together while ensuring safety.",
      stacks: ["Node.js", "Drizzle", "PostgreSQL", "Navitaire", "Redis"],
      private: true,
    },
    {
      url: "https://flxtreme.github.io/",
      image: "/preview/preview-portfolio.png",
      title: "flxtreme.github.io",
      description: "My online portfolio",
      stacks: ["NextJS", "TailwindCSS"],
      private: false,
    },
    {
      url: "https://flxtreme.github.io/dream-homes-landing-template/",
      image: "/preview/preview-dr-landing-template.png",
      title: "DreamHomes Template",
      description: "A real estate landing page template for funnels.",
      stacks: ["HTML", "JavaScript", "TailwindCSS"],
      private: false,
    },
    {
      url: "https://flxtreme.github.io/todoapp/",
      image: "/preview/preview-todo-app.png",
      title: "Todo App",
      description:
        "A modern todo application built with Next.js. Integrates flxhelpers and todo-app-engine.",
      stacks: ["Next.js", "flxhelpers", "todo-app-engine"],
      private: false,
    },
    {
      url: "https://www.npmjs.com/package/todo-app-engine",
      image: "/preview/preview-todo-app-engine.png",
      title: "todo-app-engine",
      description:
        "A lightweight, type-safe CRUD engine for managing todo items using IndexedDB.",
      stacks: ["npm", "TypeScript", "IndexedDB", "idb"],
      private: false,
    },
    {
      url: "https://www.npmjs.com/package/flxhelpers",
      image: "/preview/preview-flxhelpers.png",
      title: "flxhelpers",
      description:
        "A modular utility toolkit combining Lodash, date-fns, and custom helpers for Node.js + TypeScript projects.",
      stacks: ["TypeScript"],
      private: false,
    },
    {
      url: "https://www.npmjs.com/package/pokemon-app-engine",
      image: "/preview/preview-pokemon-app-engine.png",
      title: "pokemon-app-engine",
      description:
        "A type-safe TypeScript engine for fetching Pokémon data from the PokéAPI.",
      stacks: ["npm", "TypeScript", "PokeAPI"],
      private: false,
    },
    {
      url: "https://flxtreme.github.io/pokedex-next/",
      image: "/preview/preview-pokedex-next.png",
      title: "Pokedex Next",
      description:
        "A modern Pokédex app built with Next.js, powered by pokemon-app-engine.",
      stacks: ["NextJS", "pokemon-app-engine"],
      private: false,
    },
    {
      url: "https://thebabybuzz.store",
      image: "/preview/preview-thebabybuzz.png",
      title: "thebabybuzz.store",
      description:
        "A website to showcase affilate products and blogs.",
      stacks: ["NextJS"],
      private: false,
    },
  ], []);

  
  const _notPrivateProjects = ( projects: Project[] ) => {
    
    return projects.filter((p) => !p.private);
  }

  const _getAllProjects = (projects: Project[]) => {
    return projects;
  }

  const projects = useMemo(
    () => (showPrivate ? _getAllProjects(allProjects) : _notPrivateProjects(allProjects)),
    [showPrivate, allProjects]
  );


  return { allProjects, projects, showPrivate, setShowPrivate };
}
