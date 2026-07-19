import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";
type ButtonTheme = "light" | "dark";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  className?: string;
  tabIndex?: number;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: undefined;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "motion-m3-button inline-flex h-12 items-center justify-center rounded-[14px] px-6 font-sans text-[0.9375rem] font-medium";

function variantClasses(variant: ButtonVariant, theme: ButtonTheme) {
  if (variant === "primary") {
    return theme === "light"
      ? "bg-forest text-cream hover:bg-forest-deep"
      : "bg-cream text-forest hover:bg-ivory";
  }

  return theme === "light"
    ? "border border-olive bg-transparent text-forest hover:border-walnut"
    : "border border-olive/40 bg-transparent text-cream hover:border-leaf";
}

export function Button({
  children,
  variant = "primary",
  theme = "light",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses(variant, theme), className);

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        onClick={props.onClick}
        tabIndex={props.tabIndex}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, tabIndex } = props as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} tabIndex={tabIndex} className={classes}>
      {children}
    </button>
  );
}
