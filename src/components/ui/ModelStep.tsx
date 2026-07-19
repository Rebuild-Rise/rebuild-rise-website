import { cn } from "@/lib/cn";

interface ModelStepProps {
  name: string;
  body: string;
  lessonBorn: boolean;
  isSustain?: boolean;
  className?: string;
  layout?: "full" | "text-only";
}

function nodeColor(lessonBorn: boolean, isSustain: boolean) {
  if (isSustain) return "bg-olive";
  if (lessonBorn) return "bg-walnut";
  return "bg-forest";
}

export function ModelStepNode({
  lessonBorn,
  isSustain = false,
  className,
}: Pick<ModelStepProps, "lessonBorn" | "isSustain" | "className">) {
  return (
    <div
      data-path-node
      className={cn(
        "relative z-10 h-3 w-3 shrink-0 rounded-full ring-4 ring-parchment",
        nodeColor(lessonBorn, isSustain),
        className,
      )}
      aria-hidden="true"
    />
  );
}

export function ModelStep({
  name,
  body,
  lessonBorn,
  isSustain = false,
  className,
  layout = "full",
}: ModelStepProps) {
  if (layout === "text-only") {
    return (
      <div className={cn("flex flex-col gap-2 text-center", className)}>
        <h3 className="font-display text-[1.25rem] font-medium leading-[1.3] text-ink">
          {name}
        </h3>
        <p className="font-sans text-sm leading-[1.6] text-ink-muted">{body}</p>
      </div>
    );
  }

  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex w-6 shrink-0 justify-center pt-0.5">
        <ModelStepNode lessonBorn={lessonBorn} isSustain={isSustain} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h3 className="font-display text-[1.25rem] font-medium leading-[1.3] text-ink">
          {name}
        </h3>
        <p className="font-sans text-sm leading-[1.6] text-ink-muted">{body}</p>
      </div>
    </div>
  );
}
