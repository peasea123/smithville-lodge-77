import Image from "next/image";
import type { CharityCard as CharityCardType } from "@/content/charity";

export function CharityCard({ title, description, image, imageAlt }: CharityCardType) {
  return (
    <article className="group overflow-hidden rounded-sm border border-ivory-dark bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-stone">{description}</p>
      </div>
    </article>
  );
}
