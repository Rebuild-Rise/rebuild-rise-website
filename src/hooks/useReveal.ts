"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface UseRevealOptions {
  threshold?: number;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
}: UseRevealOptions = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, setRef] = useState<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reduced motion needs no observer: the hook already returns
    // `prefersReducedMotion || visible`, so everything renders visible.
    if (prefersReducedMotion) return;

    if (!ref) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [prefersReducedMotion, ref, threshold]);

  return {
    ref: setRef,
    visible: prefersReducedMotion || visible,
  };
}
