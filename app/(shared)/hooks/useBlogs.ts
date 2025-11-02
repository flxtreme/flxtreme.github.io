"use client";

import { useMemo } from "react";

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

const blogs: Blog[] = [
  {
    slug: "optimizing-api",
    title: "Optimizing APIs: Promise.all, Preloading & Caching Config",
    excerpt: "Learn how to dramatically improve your service performance using Promise.all for parallel API requests, intelligent preloading patterns, and effective caching configurations.",
    content: "/blogs/optimizing-api.md",
    date: "Nov 3, 2025",
  },
];

export function useBlogs() {
  const allBlogs = useMemo(() => blogs, []);

  const getBlogBySlug = useMemo(
    () => (slug: string): Blog | undefined => {
      return allBlogs.find((blog) => blog.slug === slug);
    },
    [allBlogs]
  );

  const getLatestBlogs = useMemo(
    () => (limit?: number): Blog[] => {
      return limit ? allBlogs.slice(0, limit) : allBlogs;
    },
    [allBlogs]
  );

  return {
    blogs: allBlogs,
    getBlogBySlug,
    getLatestBlogs,
  };
}