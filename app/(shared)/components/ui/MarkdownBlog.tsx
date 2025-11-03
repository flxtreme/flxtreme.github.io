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

  /** Handle internal link clicks (prevent page refresh) */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement | null;
      if (!link) return;

      // Only intercept internal links (within same domain or anchor links)
      const isInternal =
        link.href.startsWith(window.location.origin) || link.getAttribute("href")?.startsWith("#");

      if (isInternal) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Handle anchor links (e.g., #section-title)
        if (href?.startsWith("#")) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", href); // update URL hash without reload
          }
        } else if (href) {
          // Handle internal blog navigation
          window.history.pushState({}, "", href);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [content]);


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

      const block = `
      <div class="code-block-wrapper relative">
        <button class="copy-btn absolute top-2 right-2 text-xs bg-slate-700/80 text-white px-2 py-1 rounded transition hover:bg-slate-600">
          Copy
        </button>
        <pre class="border-l-4 shadow-md border-gray-400 dark:border-purple-400 overflow-x-auto my-6"><code class="hljs language-${lang} bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-100 table border-separate border-spacing-x-2">${numbered}</code></pre>
      </div>`;
      codeBlocks.push(block);
      return `\n___CODE_BLOCK_${codeBlocks.length - 1}___\n`;
    });

    // Inline code
    const inlineCodes: string[] = [];
    html = html.replace(/`([^`\n]+)`/g, (match, code) => {
      const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const inline = `<code class="bg-slate-200 shadow-sm dark:bg-slate-800 px-1 py-0.5 rounded text-sm font-mono text-orange-600 dark:text-purple-400">${escaped}</code>`;
      inlineCodes.push(inline);
      return `___INLINE_CODE_${inlineCodes.length - 1}___`;
    });

    // Headers with auto-generated IDs
    html = html.replace(/^### (.*$)/gim, (_, title) => {
      const id = title.toLowerCase()
        .replace(/[^\w\s-]/g, "") // remove non-word chars
        .trim()
        .replace(/\s+/g, "-"); // replace spaces with hyphens
      return `<h3 id="${id}" class="font-poppins text-2xl font-bold mt-8 mb-4 scroll-mt-24">${title}</h3>`;
    });

    html = html.replace(/^## (.*$)/gim, (_, title) => {
      const id = title.toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      return `<h2 id="${id}" class="font-poppins text-3xl font-bold mt-10 mb-5 scroll-mt-24">${title}</h2>`;
    });

    html = html.replace(/^# (.*$)/gim, (_, title) => {
      const id = title.toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      return `<h1 id="${id}" class="font-poppins text-4xl font-bold mt-12 mb-6 scroll-mt-24">${title}</h1>`;
    });
    
    // Bold & Italic
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');
    
    // Images & Links
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg my-6 shadow-lg" />');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-orange-400 dark:text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-orange-400 dark:border-purple-400 pl-4 italic my-4 opacity-80">$1</blockquote>');
    
    // Lists - Process line by line to handle nesting
    const listLines = html.split('\n');
    const processedLines: string[] = [];
    let inList = false;
    let listType = '';
    
    for (let i = 0; i < listLines.length; i++) {
      const line = listLines[i];
      const unorderedMatch = line.match(/^(\s*)[-*]\s+(.+)/);
      const orderedMatch = line.match(/^(\s*)(\d+)\.\s+(.+)/);
      
      if (unorderedMatch) {
        const indent = unorderedMatch[1].length;
        const content = unorderedMatch[2];
        const indentClass = indent > 0 ? `ml-${Math.min(indent / 2, 12)}` : 'ml-6';
        
        if (!inList || listType !== 'ul') {
          processedLines.push(`<ul class="my-4 list-disc ${indentClass}">`);
          inList = true;
          listType = 'ul';
        }
        processedLines.push(`<li class="my-1">${content}</li>`);
      } else if (orderedMatch) {
        const indent = orderedMatch[1].length;
        const content = orderedMatch[3];
        const indentClass = indent > 0 ? `ml-${Math.min(indent / 2, 12)}` : 'ml-6';
        
        if (!inList || listType !== 'ol') {
          processedLines.push(`<ol class="my-4 list-decimal ${indentClass}">`);
          inList = true;
          listType = 'ol';
        }
        processedLines.push(`<li class="my-1">${content}</li>`);
      } else {
        if (inList) {
          processedLines.push(listType === 'ul' ? '</ul>' : '</ol>');
          inList = false;
          listType = '';
        }
        processedLines.push(line);
      }
    }
    
    if (inList) {
      processedLines.push(listType === 'ul' ? '</ul>' : '</ol>');
    }
    
    html = processedLines.join('\n');
    
    // Horizontal rule
    html = html.replace(/^---$/gim, '<hr class="my-8 border-slate-300 dark:border-slate-700" />');

    // Paragraphs + preserve indentation and line breaks
    const lines = html.split("\n");
    const processed: string[] = [];
    let inParagraph = false;

    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const trimmed = rawLine.trim();

      if (!trimmed) {
        if (inParagraph) {
          processed.push("</p>");
          inParagraph = false;
        }
        continue;
      }

      // Skip wrapping for existing HTML elements
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("</ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("</ol") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("___CODE_BLOCK_")
      ) {
        if (inParagraph) {
          processed.push("</p>");
          inParagraph = false;
        }
        processed.push(trimmed);
      } else {
        // Preserve indentation (spaces/tabs) by converting them to non-breaking spaces
        const leadingSpaces = rawLine.match(/^\s+/)?.[0] || "";
        const preservedIndent = leadingSpaces.replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
        const lineWithIndent = preservedIndent + trimmed;

        // Replace single newlines inside a paragraph with <br />
        const lineWithBreaks = lineWithIndent.replace(/(?<!>)\n(?!<)/g, "<br />");

        if (!inParagraph) {
          processed.push('<p class="mb-4 leading-relaxed whitespace-pre-wrap">');
          inParagraph = true;
        }
        processed.push(lineWithBreaks);
      }
    }

    if (inParagraph) processed.push("</p>");
    html = processed.join("\n");


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
        const wrapper = btn.closest(".code-block-wrapper");
        const codeElement = wrapper?.querySelector("code");
        if (!codeElement) return;

        // Extract only the actual code cells (skip line numbers)
        const codeLines = Array.from(codeElement.querySelectorAll(".table-row"))
          .map((row) => {
            const codeCell = row.querySelectorAll(".table-cell")[1];
            return codeCell?.textContent?.trimEnd() ?? "";
          })
          // remove trailing blank lines but preserve inner ones
          .filter((line, index, arr) => {
            if (index === arr.length - 1 && line.trim() === "") return false;
            return true;
          });

        const cleanCode = codeLines.join("\n").trimEnd();

        try {
          await navigator.clipboard.writeText(cleanCode);
          btn.textContent = "Copied!";
          btn.classList.add("bg-green-600");
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.classList.remove("bg-green-600");
          }, 1500);
        } catch (e) {
          console.error("Copy failed", e);
        }
      });
    });

    return () => {
      buttons.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true)); // clean up listeners
      });
    };
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
        "font-lato",
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
