"use client";

import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { CARD_STAGGER_MS, MAX_CARD_STAGGER } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  staggerIndex?: number;
  threshold?: number;
}

export function Reveal({
  children,
  className,
  staggerIndex,
  threshold,
}: RevealProps) {
  const { ref, visible } = useReveal({ threshold });
  const staggerDelay =
    staggerIndex === undefined
      ? undefined
      : `${Math.min(staggerIndex, MAX_CARD_STAGGER - 1) * CARD_STAGGER_MS}ms`;

  return (
    <div
      ref={ref}
      className={cn("motion-reveal", visible && "motion-reveal-visible", className)}
      style={staggerDelay ? { transitionDelay: staggerDelay } : undefined}
    >
      {children}
    </div>
  );
}
