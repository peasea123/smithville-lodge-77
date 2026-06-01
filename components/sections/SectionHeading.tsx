import { MasonicAccent } from "@/components/layout/MasonicAccent";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <MasonicAccent
        className={`mx-auto mb-4 h-10 w-10 ${centered ? "" : ""} ${light ? "text-gold" : "text-gold"}`}
      />
      <h2
        className={`font-serif text-3xl font-semibold sm:text-4xl ${
          light ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-ivory/80" : "text-stone"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-gold ${centered ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}
