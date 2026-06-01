import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Freemasonry, faith, politics, privacy, and membership at Smithville Lodge No. 77.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Honest answers to common questions about Freemasonry and our lodge."
        imageSrc="/images/hero-home.svg"
        imageAlt="FAQ — Smithville Lodge"
      />

      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Common questions"
            subtitle="If your question is not answered here, please contact us."
            centered
          />
          <div className="mt-12">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </ContentSection>
    </>
  );
}
