import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "How a man may ask about joining Center Hill Lodge No. 77 — eligibility, expectations, and respectful inquiry.",
};

const whoCanAsk = [
  "A man of lawful age (traditionally 18 or 21 depending on jurisdiction — confirm with the lodge).",
  "Of good moral character and reputation in his community.",
  "Believing in a Supreme Being / higher power.",
  "Able to support himself and his family.",
  "Willing to participate in the life of the lodge over time.",
];

const kindOfMan = [
  "Someone who values honesty, charity, and civic responsibility.",
  "A man who respects the faith traditions of others and does not seek to debate religion or politics in lodge.",
  "Someone patient enough to grow through staged instruction rather than rushing through degrees.",
  "A husband, father, son, or friend who wants to be better — not perfect, but improving.",
];

const expectations = [
  "You will be invited to meet brothers and ask questions — there is no high-pressure sales process.",
  "A committee may visit with you and your family to ensure mutual understanding.",
  "If accepted, you will progress through degrees at a pace appropriate to your formation.",
  "Membership involves dues, attendance, and participation in charity — reasonable commitments explained upfront.",
  "You may always ask questions. No one should ever promise you business or political advantage through Masonry.",
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership"
        subtitle="A man becomes a Mason because he asks — never because he is recruited."
        imageSrc={images.hero.membership}
        imageAlt="Membership inquiry — Center Hill Lodge"
      />

      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="An Important Note" />
          <p className="mt-6 leading-relaxed text-stone">
            Freemasonry does not solicit members. We do not recruit in the manner of
            clubs or sales organizations. If you are reading this page, you may
            already sense that Masonry could be meaningful for you. The next step is
            a respectful conversation — with a brother you know, or with the lodge
            through the form below.
          </p>
        </div>
      </ContentSection>

      <ContentSection variant="alt">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Who can ask" />
            <ul className="mt-6 space-y-3">
              {whoCanAsk.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="What kind of man should consider Masonry" />
            <ul className="mt-6 space-y-3">
              {kindOfMan.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading title="What to expect" centered />
        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {expectations.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-ivory-dark bg-white px-6 py-4 text-sm leading-relaxed text-stone shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection variant="alt">
        <div className="mx-auto max-w-xl">
          <SectionHeading
            title="Ask the lodge"
            subtitle="Use this form to begin a conversation. We will respond when a brother is available."
            centered
          />
          <div className="mt-10 rounded-sm border border-ivory-dark bg-white p-6 shadow-sm sm:p-8">
            <ContactForm subject="Membership inquiry" showInterestField />
          </div>
        </div>
      </ContentSection>
    </>
  );
}
