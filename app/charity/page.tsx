import type { Metadata } from "next";
import { CharityCard } from "@/components/cards/CharityCard";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { charityCards } from "@/content/charity";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Charity & Community",
  description:
    "How Center Hill Lodge No. 77 serves Smithville and DeKalb County through charity, food support, youth, and community service.",
};

export default function CharityPage() {
  return (
    <>
      <PageHero
        title="Charity & Community"
        subtitle="Practical service to neighbors — the heart of Masonic relief."
        imageSrc={images.hero.charity}
        imageAlt="Charity and community service in Smithville"
      />

      <ContentSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            title="Serving Our Neighbors"
            subtitle="Masons are taught that charity is not optional — it is part of who we are. Center Hill Lodge seeks tangible ways to help our community."
            centered
          />
          <p className="mt-8 leading-relaxed text-stone">
            Specific partnerships and dollar amounts may be listed here when the
            lodge approves public details. The cards below describe the kinds of work
            we pursue. Additional program photos will be added as they become available.
          </p>
        </div>
      </ContentSection>

      <ContentSection variant="alt">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {charityCards.map((card) => (
            <CharityCard key={card.title} {...card} />
          ))}
        </div>
      </ContentSection>

      <ContentSection variant="navy">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Partner with us"
            subtitle="Local organizations with aligned missions may contact the lodge to explore cooperation."
            centered
            light
          />
          <a
            href="/contact"
            className="mt-8 inline-flex rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-navy uppercase hover:bg-gold-light"
          >
            Contact the lodge
          </a>
        </div>
      </ContentSection>
    </>
  );
}
