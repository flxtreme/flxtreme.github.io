"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/(shared)/utils";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

interface MarkdownBlogProps {
  mdPath: string;
  className?: string;
}

/**
 * MarkdownBlog
 * -------------------------
 * Renders a markdown file as a styled blog post with syntax highlighting,
 * line numbers, and copy-to-clipboard support for each code block.
 */
export default function MarkdownBlog({ mdPath, className }: MarkdownBlogProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        const response = await fetch(mdPath);

        if (!response.ok) {
          throw new Error(`Failed to load markdown file: ${response.statusText}`);
        }

        const text = await response.text();
        const html = parseMarkdown(text);
        setContent(html);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [mdPath]);

  /** Parse markdown content into styled HTML */
  const parseMarkdown = (md: string): string => {
    let html = md;

    const codeBlocks: string[] = [];
    html = html.replace(/```([\s\S]*?)```/gm, (match) => {
      const inner = match.slice(3, -3);
      const lines = inner.split("\n");
      const lang = lines[0].trim();
      const code = lines.slice(1).join("\n").trim();

      const highlighted = hljs.highlightAuto(code, lang ? [lang] : undefined).value;

      const numbered = highlighted
        .split(/\n/)
        .map(
          (line, i) =>
            `<div class="table-row"><span class="table-cell text-right select-none pr-4 text-slate-500 dark:text-slate-400">${
              i + 1
            }</span><span class="table-cell">${line || "&nbsp;"}</span></div>`
        )
        .join("");

      // keep pre/code classes EXACTLY as user saved
      const block = `
      <div class="code-block-wrapper relative group">
        <button class="copy-btn absolute top-2 right-2 text-xs bg-slate-700/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Copy
        </button>
        <pre class="border-l-4 shadow-md border-gray-400 dark:border-purple-400 overflow-x-auto my-6"><code class="hljs language-${lang} bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-100 table border-separate border-spacing-x-2">${numbered}</code></pre>
      </div>`;
      codeBlocks.push(block);
      return `\n___CODE_BLOCK_${codeBlocks.length - 1}___\n`;
    });

    // Inline code, headers, lists, etc. remain unchanged
    const inlineCodes: string[] = [];
    html = html.replace(/`([^`\n]+)`/g, (match, code) => {
      const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const inline = `<code class="bg-slate-200 shadow-sm dark:bg-slate-800 px-1 py-0.5 rounded text-sm font-mono text-orange-600 dark:text-purple-400">${escaped}</code>`;
      inlineCodes.push(inline);
      return `___INLINE_CODE_${inlineCodes.length - 1}___`;
    });

    html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-10 mb-5">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-12 mb-6">$1</h1>');
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg my-6 shadow-lg" />');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-orange-400 dark:text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
    html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-orange-400 dark:border-purple-400 pl-4 italic my-4 opacity-80">$1</blockquote>');
    html = html.replace(/(^|\n)(\d+)\. (.*)/g, '$1<ol class="my-4 list-decimal ml-6"><li>$3</li></ol>');
    html = html.replace(/(^|\n)\* (.*)/g, '$1<ul class="my-4 list-disc ml-6"><li>$2</li></ul>');
    html = html.replace(/<\/li>\s*<li>/g, '</li><li>').replace(/<\/ol>\s*<ol[^>]*>/g, '').replace(/<\/ul>\s*<ul[^>]*>/g, '');
    html = html.replace(/^---$/gim, '<hr class="my-8 border-slate-300 dark:border-slate-700" />');

    const lines = html.split("\n");
    const processed: string[] = [];
    let inParagraph = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        if (inParagraph) {
          processed.push("</p>");
          inParagraph = false;
        }
        continue;
      }

      if (
        line.startsWith("<h") ||
        line.startsWith("<pre") ||
        line.startsWith("<ul") ||
        line.startsWith("<ol") ||
        line.startsWith("<li") ||
        line.startsWith("<hr") ||
        line.startsWith("<blockquote") ||
        line.startsWith("___CODE_BLOCK_")
      ) {
        if (inParagraph) {
          processed.push("</p>");
          inParagraph = false;
        }
        processed.push(line);
      } else {
        if (!inParagraph) {
          processed.push('<p class="mb-4 leading-relaxed">');
          inParagraph = true;
        }
        processed.push(line);
      }
    }

    if (inParagraph) processed.push("</p>");

    html = processed.join("\n");
    html = html.replace(/___INLINE_CODE_(\d+)___/g, (_, i) => inlineCodes[i]);
    html = html.replace(/___CODE_BLOCK_(\d+)___/g, (_, i) => codeBlocks[i]);
    return html;
  };

  /** Clipboard logic after render */
  useEffect(() => {
    const buttons = document.querySelectorAll(".copy-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const pre = btn.closest(".code-block-wrapper");
        const code = pre?.querySelector("code")?.innerText ?? "";
        try {
          await navigator.clipboard.writeText(code);
          btn.textContent = "Copied!";
          setTimeout(() => (btn.textContent = "Copy"), 2000);
        } catch (e) {
          console.error("Copy failed", e);
        }
      });
    });
  }, [content]);

  if (loading) {
    return (
      <div className={cn("animate-pulse", className)}>
        <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn("p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800", className)}>
        <p className="text-red-600 dark:text-red-400 font-medium">Error loading blog post</p>
        <p className="text-sm text-red-500 dark:text-red-300 mt-2">{error}</p>
      </div>
    );
  }

  return (
    <article
      className={cn(
        "prose prose-slate dark:prose-invert max-w-none",
        "prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100",
        "prose-p:text-slate-700 dark:prose-p:text-slate-300",
        "prose-a:text-orange-400 dark:prose-a:text-purple-400",
        "prose-code:text-orange-600 dark:prose-code:text-purple-400",
        "prose-img:rounded-lg prose-img:shadow-lg",
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
