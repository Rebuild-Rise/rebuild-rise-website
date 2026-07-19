"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/siteContent";

export function FooterNav() {
  const pathname = usePathname();

  return (
    <nav
      className="grid grid-cols-2 gap-x-6 gap-y-2 lg:col-start-7 lg:col-span-3"
      aria-label="Footer navigation"
    >
      {nav.footerLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch={false}
          aria-current={link.href === pathname ? "page" : undefined}
          className="font-sans text-sm font-medium text-cream hover:text-ivory"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
