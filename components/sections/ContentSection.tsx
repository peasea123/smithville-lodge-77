import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type ContentSectionProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "alt" | "navy";
  pattern?: boolean;
};

const variants = {
  default: "bg-ivory",
  alt: "bg-ivory-dark/40 pattern-geometry",
  navy: "bg-navy text-ivory pattern-columns",
};

export function ContentSection({
  children,
  className = "",
  variant = "default",
  pattern = false,
}: ContentSectionProps) {
  return (
    <section
      className={`py-16 lg:py-24 ${variants[variant]} ${pattern && variant === "default" ? "pattern-geometry" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
