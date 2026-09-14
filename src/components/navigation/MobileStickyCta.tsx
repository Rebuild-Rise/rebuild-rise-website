"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

const hiddenRoutes = new Set([
  "/contact",
  "/contact/thank-you",
  "/get-involved",
  "/privacy",
  "/terms",
]);

export function MobileStickyCta() {
  const pathname = usePathname();

  if (hiddenRoutes.has(pathname) || pathname.startsWith("/styleguide")) {
    return null;
  }

  return (
    <>
      <div className="h-[calc(4.75rem+env(safe-area-inset-bottom))] lg:hidden" aria-hidden="true" />
      <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-olive/40 bg-forest-deep px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_28px_rgba(18,38,22,0.14)] lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-4">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-leaf">
            Pilot 001 · In design
          </p>
          <Link
            href="/get-involved"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-[12px] bg-cream px-4 font-sans text-sm font-medium text-forest outline-offset-2 hover:bg-ivory"
          >
            Get involved
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </>
  );
}
