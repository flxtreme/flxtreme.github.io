"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollToHashContent() {
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

export default function ScrollToHash() {
  return (
    <Suspense fallback={null}>
      <ScrollToHashContent />
    </Suspense>
  );
}