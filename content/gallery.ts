export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery-lodge-exterior.svg",
    alt: "Placeholder: lodge building exterior",
    caption: "Lodge exterior — replace with lodge photo",
  },
  {
    src: "/images/gallery-dining.svg",
    alt: "Placeholder: fellowship dinner",
    caption: "Fellowship meal — replace with event photo",
  },
  {
    src: "/images/gallery-service.svg",
    alt: "Placeholder: community service project",
    caption: "Community service — replace with project photo",
  },
  {
    src: "/images/gallery-meeting.svg",
    alt: "Placeholder: lodge room (non-ceremonial)",
    caption: "Lodge room — replace when appropriate",
  },
  {
    src: "/images/gallery-charity.svg",
    alt: "Placeholder: charity event",
    caption: "Charity event — replace with real image",
  },
  {
    src: "/images/gallery-brothers.svg",
    alt: "Placeholder: brothers at community event",
    caption: "Community event — replace with photo",
  },
];
