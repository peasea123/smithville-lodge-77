import Image from "next/image";
import type { GalleryItem } from "@/content/gallery";

export function PhotoGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-ivory-dark bg-navy/5"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {item.caption && (
            <figcaption className="absolute inset-x-0 bottom-0 bg-navy/80 px-4 py-3 text-xs text-ivory/90">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
