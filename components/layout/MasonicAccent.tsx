/** Tasteful square-and-compasses inspired line art — decorative only */
export function MasonicAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="10"
        y="10"
        width="28"
        height="28"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M10 38 L24 14 L38 38"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

export function LightRays({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/20 via-gold/5 to-transparent"
        style={{ boxShadow: "0 0 80px 20px rgba(201,162,39,0.08)" }}
      />
      <div className="absolute left-1/2 top-1/4 h-1/2 w-full max-w-2xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.12)_0%,transparent_70%)]" />
    </div>
  );
}
