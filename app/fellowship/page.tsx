import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { galleryItems } from "@/content/gallery";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fellowship & Brotherhood",
  description:
    "Friendship, meals, mentoring, and intergenerational brotherhood at Smithville Lodge No. 77.",
};

const fellowshipPoints = [
  {
    title: "Friendship that lasts",
    text: "Many men first come to the lodge through a friend. Over years, those friendships deepen — through meals, service projects, and shared milestones.",
  },
  {
    title: "Meals together",
    text: "Fellowship dinners before stated meetings are a cherished tradition. Breaking bread together grounds the lodge in ordinary human warmth.",
  },
  {
    title: "Mentoring across generations",
    text: "Older brothers guide younger ones — not as bosses, but as examples. Wisdom, patience, and encouragement pass naturally from one generation to the next.",
  },
  {
    title: "Shared learning",
    text: "Degrees and lectures invite reflection on virtue, duty, and the human condition. Learning continues long after a man is raised a Master Mason.",
  },
  {
    title: "A place to belong",
    text: "In a world that can feel fragmented, the lodge offers steady brotherhood — men who show up for one another in difficulty and in joy.",
  },
];

export default function FellowshipPage() {
  return (
    <>
      <PageHero
        title="Fellowship & Brotherhood"
        subtitle="More than meetings — a community of men who know and support one another."
        imageSrc={images.hero.fellowship}
        imageAlt="Fellowship and brotherhood at the lodge"
      />

      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="A Lodge Is People" />
          <p className="mt-6 leading-relaxed text-stone">
            Freemasonry is often described in terms of symbols and history — but at
            Smithville Lodge, it is also simply this: good men spending time together,
            learning from one another, and enjoying life as brothers. The lodge room
            matters; so does the dining table, the handshake after a hard week, and
            the phone call when someone is in need.
          </p>
        </div>
      </ContentSection>

      <ContentSection variant="alt">
        <div className="grid gap-8 md:grid-cols-2">
          {fellowshipPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-sm border border-ivory-dark bg-white p-8 shadow-sm"
            >
              <h3 className="font-serif text-xl font-semibold text-navy">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{point.text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          title="Moments together"
          subtitle="Fellowship, conversation, and shared life as brothers."
          centered
        />
        <div className="mt-12">
          <PhotoGallery
            items={galleryItems.filter((g) =>
              ["/images/gallery-dining.png", "/images/fellowship.png", "/images/membership.png"].includes(g.src)
            )}
          />
        </div>
      </ContentSection>
    </>
  );
}
