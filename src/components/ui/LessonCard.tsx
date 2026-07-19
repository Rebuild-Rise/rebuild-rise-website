import { cn } from "@/lib/cn";

interface LessonCardProps {
  quote: string;
  maps: string;
  className?: string;
}

export function LessonCard({ quote, maps, className }: LessonCardProps) {
  return (
    <article
      className={cn(
        "rounded-[14px] border border-line bg-ivory p-6 sm:p-8",
        className,
      )}
    >
      <blockquote className="rr-hquote font-display text-[1.25rem] font-medium leading-[1.3] text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="mt-4 font-sans text-sm text-walnut">{maps}</p>
    </article>
  );
}
