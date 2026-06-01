import { MasonicAccent } from "@/components/layout/MasonicAccent";

const icons = {
  heart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  ),
  users: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  ),
  compass: null,
};

type ValueCardProps = {
  title: string;
  description: string;
  icon?: keyof typeof icons;
};

export function ValueCard({ title, description, icon = "compass" }: ValueCardProps) {
  return (
    <article className="flex flex-col rounded-sm border border-ivory-dark bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-navy/5 text-gold">
        {icon === "compass" ? (
          <MasonicAccent className="h-8 w-8 text-navy" />
        ) : (
          <svg
            className="h-7 w-7 text-navy"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden
          >
            {icons[icon]}
          </svg>
        )}
      </div>
      <h3 className="font-serif text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
        {description}
      </p>
    </article>
  );
}
