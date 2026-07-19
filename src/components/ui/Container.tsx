import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        // relative z-[2] lifts all section content above the Path (z-[1]),
        // so the line passes behind cards and text, surfacing in whitespace.
        "relative z-[2] mx-auto w-full max-w-[1120px] px-4 sm:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
