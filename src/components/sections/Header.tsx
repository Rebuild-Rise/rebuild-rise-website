"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footer, nav } from "@/content/siteContent";
import { cn } from "@/lib/cn";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeAtDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    closeAtDesktop();
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key === "Tab") {
        const focusable = Array.from(
          menuPanelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
        ).filter((element) => element.getClientRects().length > 0);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <header className="bg-cream">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[5.25rem]">
          <Link
            href="/"
            className="relative flex h-12 shrink-0 items-center overflow-visible sm:h-14"
          >
            {/* Pre-sized static asset: the logo is the LCP element on mobile,
                and the /_next/image indirection cost ~1s of simulated LCP. */}
            <Image
              src="/rebuild-rise-logo-header.webp"
              alt={footer.wordmark}
              width={224}
              height={224}
              unoptimized
              className="h-full w-auto origin-left scale-[1.45] sm:scale-[1.5]"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                aria-current={link.href === pathname ? "page" : undefined}
                className="font-sans text-sm font-medium text-forest hover:text-walnut"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="primary" theme="light" href={nav.cta.href}>
              {nav.cta.label}
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-line text-forest lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <div
        ref={menuPanelRef}
        id={menuId}
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-cream lg:hidden",
          menuOpen ? "visible" : "invisible pointer-events-none",
        )}
        aria-hidden={!menuOpen}
        aria-label="Site navigation"
        aria-modal="true"
        role="dialog"
        inert={!menuOpen}
      >
        <Container className="flex h-16 items-center justify-end sm:h-20">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-line text-forest"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </Container>

        <nav
          className="flex flex-1 flex-col gap-2 px-4 pb-8 sm:px-6"
          aria-label="Mobile navigation"
        >
          {nav.links.map((link, index) => (
            <Link
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={link.href}
              prefetch={false}
              aria-current={link.href === pathname ? "page" : undefined}
              className="rounded-[14px] px-4 py-4 font-sans text-lg font-medium text-forest hover:bg-parchment"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 px-4">
            <Button
              variant="primary"
              theme="light"
              href={nav.cta.href}
              className="w-full"
              onClick={closeMenu}
            >
              {nav.cta.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
