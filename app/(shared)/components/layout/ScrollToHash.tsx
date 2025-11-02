"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;

    if (hash) {
      // Wait a tick for rendering
      setTimeout(() => {
        const hashOnly = hash.split("?")[0];

        const element = document.querySelector(hashOnly);

        console.log(hashOnly);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [pathname, searchParams]); // re-run on route or param change

  return null;
}
