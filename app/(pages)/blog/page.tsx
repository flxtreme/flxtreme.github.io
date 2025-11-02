"use client";

import { useBlogs } from "@/app/(shared)/hooks/useBlogs";
import { cn } from "@/app/(shared)/utils";
import { useRouter } from "next/navigation";
import { LuGlobe } from "react-icons/lu";

/**
 * BlogPage
 * -------------------------
 * Displays blog intro and latest posts section.
 */
export default function BlogPage() {
  const router = useRouter();
  const { blogs } = useBlogs();

  return (
    <div className="relative min-h-screen">
      {/* Intro Section */}
      <div
        className={cn(
          "container container-height flex flex-col items-start justify-center"
        )}
      >
        <div className="flex items-center gap-2 mb-4 text-orange-400 dark:text-purple-400">
          <LuGlobe className="text-xl" />
          <span className="font-medium uppercase tracking-widest">My Blog</span>
        </div>
        <h1 className="title-text mb-4 lg:mb-6">Thoughts & Articles</h1>
        <p className="sub-desc-text max-w-2xl opacity-50 mb-16">
          My personal space for insights, experiments, and reflections on code, design, and
          productivity.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 -mx-6">
          {blogs.map((blog, index) => (
            <article
              onClick={() => router.push(`/blog/${blog.slug}`)}
              key={index}
              className="p-6 border border-transparent hover:border-orange-400 dark:hover:border-purple-400 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <time className="block text-sm opacity-50 mb-2">{blog.date}</time>
              <h2 className="text-lg font-semibold mb-3">{blog.title}</h2>
              <p className="text-sm opacity-70">
                {blog.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
