import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light border border-gold shadow-sm",
  secondary:
    "bg-navy text-ivory hover:bg-navy-light border border-navy",
  outline:
    "bg-transparent text-ivory border border-ivory/80 hover:bg-ivory/10",
};

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
