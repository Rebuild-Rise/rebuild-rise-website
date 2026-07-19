import Image from "next/image";
import type { SiteImage } from "@/content/siteContent";
import { ARCH_ASPECT } from "@/lib/arch";
import { cn } from "@/lib/cn";

interface CaptionedPhotoProps {
  image: SiteImage;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Crop to a fixed-height frame without distorting aspect ratio */
  fit?: "natural" | "cover";
  imageWrapperClassName?: string;
  /** Keep compact figures from forcing provenance into a narrow side column. */
  captionLayout?: "responsive" | "stacked";
  /**
   * "arch" clips the photo with the shared doorway geometry (ledger D2).
   * Exactly one photo per page earns this. The caption stamp remains — the
   * photo grammar is a hard floor.
   */
  variant?: "rect" | "arch" | "editorial";
}

export function CaptionedPhoto({
  image,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  fit = "natural",
  imageWrapperClassName,
  captionLayout = "responsive",
  variant = "rect",
}: CaptionedPhotoProps) {
  if (variant === "editorial") {
    return (
      <figure className={cn("w-full", className)}>
        <div className={cn("relative w-full overflow-hidden", imageWrapperClassName)}>
          <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover object-center" />
        </div>
        <figcaption
          className={cn(
            "relative z-10 mt-3 grid min-w-0 gap-1 border-t border-line bg-parchment pt-2.5",
            captionLayout === "responsive" &&
              "xl:grid-cols-[minmax(0,1fr)_auto] xl:gap-4",
          )}
        >
          <span className="min-w-0 break-words font-sans text-sm font-medium leading-[1.5] text-forest">{image.place}</span>
          <span
            className={cn(
              "min-w-0 break-words font-mono text-[0.6875rem] leading-[1.5] text-ink-muted",
              captionLayout === "responsive" && "xl:text-right",
            )}
          >
            {image.stamp}
          </span>
        </figcaption>
      </figure>
    );
  }
  if (variant === "arch") {
    return (
      <figure className={cn("w-full", className)}>
        <div
          className="relative w-full overflow-hidden [clip-path:url(#rr-arch)]"
          style={{ aspectRatio: ARCH_ASPECT }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-center"
          />
        </div>
        <figcaption
          className={cn(
            "mt-3 grid min-w-0 gap-1 border-t border-line pt-2.5",
            captionLayout === "responsive" &&
              "xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start xl:gap-4",
          )}
        >
          <span className="min-w-0 break-words font-sans text-sm font-medium leading-[1.5] text-forest">
            {image.place}
          </span>
          <span
            className={cn(
              "min-w-0 break-words font-mono text-[0.6875rem] leading-[1.5] text-ink-muted",
              captionLayout === "responsive" && "xl:text-right",
            )}
          >
            {image.stamp}
          </span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "w-full overflow-hidden rounded-[14px] border border-line",
        className,
      )}
    >
      {fit === "cover" ? (
        <div
          className={cn(
            "relative w-full overflow-hidden",
            imageWrapperClassName,
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-center"
          />
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      )}
      <figcaption
        className={cn(
          "grid min-w-0 gap-1 bg-ivory px-3.5 py-2.5",
          captionLayout === "responsive" &&
            "xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start xl:gap-4",
        )}
      >
        <span className="min-w-0 break-words font-sans text-sm font-medium leading-[1.5] text-forest">
          {image.place}
        </span>
        <span
          className={cn(
            "min-w-0 break-words font-mono text-[0.6875rem] leading-[1.5] text-ink-muted",
            captionLayout === "responsive" && "xl:text-right",
          )}
        >
          {image.stamp}
        </span>
      </figcaption>
    </figure>
  );
}
