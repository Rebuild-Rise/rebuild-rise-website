import Link from "next/link";
import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  /** "roomy" gives recomposed sections larger interiors (ledger D20). */
  padding?: "default" | "roomy";
  className?: string;
}

const cardClasses = "rounded-[14px] border border-line bg-ivory";

const paddingClasses: Record<NonNullable<CardProps["padding"]>, string> = {
  default: "p-6 sm:p-8",
  roomy: "p-7 sm:p-9 lg:p-10",
};

const interactiveClasses =
  "motion-m3-card hover:border-walnut";

export function Card({
  children,
  href,
  padding = "default",
  className,
}: CardProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(cardClasses, paddingClasses[padding], interactiveClasses, className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={cn(cardClasses, paddingClasses[padding], className)}>
      {children}
    </div>
  );
}
