import { images } from "@/lib/images";

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/about-lodge.png",
    alt: "Lodge building exterior in Smithville, Tennessee",
    caption: "Our lodge in the community",
  },
  {
    src: images.gallery.dining,
    alt: "Fellowship dinner among brothers",
    caption: "Fellowship and shared meals",
  },
  {
    src: "/images/charity-local.png",
    alt: "Community charity and local service",
    caption: "Serving Smithville and DeKalb County",
  },
  {
    src: "/images/learning_growth.png",
    alt: "Learning, reflection, and moral growth",
    caption: "Growth through reflection and instruction",
  },
  {
    src: images.gallery.charity,
    alt: "Charity event and community outreach",
    caption: "Charity in action",
  },
  {
    src: "/images/membership.png",
    alt: "Brothers in conversation about membership",
    caption: "Brotherhood in the community",
  },
];
