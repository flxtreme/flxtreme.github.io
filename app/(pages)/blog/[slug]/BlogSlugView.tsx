"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBlogs } from "@/app/(shared)/hooks/useBlogs";
import MarkdownBlog from "@/app/(shared)/components/ui/MarkdownBlog";
import { cn } from "@/app/(shared)/utils";
import { LuArrowLeft, LuCalendar } from "react-icons/lu";

export default function BlogSlugView({ slug }: { slug: string }) {
  const router = useRouter();
  const { getBlogBySlug } = useBlogs();
  const blog = getBlogBySlug(slug);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (!content) return;

    const handleHashLinks = () => {
      const links = document.querySelectorAll("a[href^='#']");
      links.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const href = (link as HTMLAnchorElement).getAttribute("href");
          if (!href) return;

          const targetId = href.substring(1);
          const currentPath = window.location.pathname;

          // If inside blog path
          if (currentPath.startsWith("/blog/")) {
            const target = document.getElementById(targetId);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
              history.replaceState(null, "", href);
            }
          } else {
            // Outside blog path
            router.push(`/${href}`);
          }
        });
      });
    };

    handleHashLinks();
  }, [content, router]);

  if (!blog) {
    return (
      <div className="container min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-lg opacity-70 mb-8">The blog post you're looking for doesn't exist.</p>
        <button
          onClick={() => router.push("/blog")}
          className="flex items-center gap-2 px-6 py-3 bg-orange-400 dark:bg-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
        >
          <LuArrowLeft />
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className={cn("container container-height px-6")}>
        <button
          onClick={() => router.push("/blog")}
          className="flex items-center gap-2 mb-8 text-sm font-medium text-orange-400 dark:text-purple-400 hover:opacity-70 transition-opacity"
        >
          <LuArrowLeft />
          Back to all posts
        </button>

        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center gap-2 text-sm opacity-60">
            <LuCalendar className="text-base" />
            <time>{blog.date}</time>
          </div>
          <p className="text-lg opacity-70 mt-6">{blog.excerpt}</p>
        </header>

        <hr className="my-8 border-slate-300 dark:border-slate-700" />

        <div>
          <MarkdownBlog
            mdPath={blog.content}
            onRenderUpdate={(content) => setContent(content)}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-slate-300 dark:border-slate-700">
          <button
            onClick={() => router.push("/blog")}
            className="flex items-center gap-2 text-sm font-medium text-orange-400 dark:text-purple-400 hover:opacity-70 transition-opacity"
          >
            <LuArrowLeft />
            Back to all posts
          </button>
        </div>
      </div>
    </div>
  );
}
