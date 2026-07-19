import { cn } from "@/lib/cn";

type SectionEyebrowTheme = "light" | "dark";

interface SectionEyebrowProps {
  children: React.ReactNode;
  theme?: SectionEyebrowTheme;
  className?: string;
}

export function SectionEyebrow({
  children,
  theme = "light",
  className,
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em]",
        theme === "light" ? "text-walnut" : "text-leaf",
        className,
      )}
    >
      {children}
    </p>
  );
}
