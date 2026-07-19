import Image from "next/image";
import { cn } from "@/lib/cn";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  headshot: string | null;
  headshotAlt?: string;
  className?: string;
  showRule?: boolean;
}

export function FounderCard({
  name,
  role,
  bio,
  headshot,
  headshotAlt,
  className,
  showRule = true,
}: FounderCardProps) {
  return (
    <article
      className={cn(
        "grid grid-cols-[72px_1fr] gap-5 py-6 sm:grid-cols-[88px_1fr] sm:gap-7",
        showRule && "border-t border-line",
        className,
      )}
    >
      {headshot ? (
        <div className="relative h-[72px] w-[72px] overflow-hidden sm:h-[88px] sm:w-[88px]">
          <Image
            src={headshot}
            alt={headshotAlt ?? name}
            fill
            sizes="88px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="grid h-[72px] w-[72px] place-items-center bg-forest font-display text-xl text-cream">
          {name[0]}
        </div>
      )}
      <div>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-display text-[1.35rem] font-medium text-ink">
            {name}
          </h3>
          <p className="font-sans text-xs font-medium text-walnut">{role}</p>
        </div>
        {bio && (
          <p className="mt-3 max-w-[52ch] font-sans text-sm leading-[1.65] text-ink-muted">
            {bio}
          </p>
        )}
      </div>
    </article>
  );
}
