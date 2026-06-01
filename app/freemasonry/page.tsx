import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "What Is Freemasonry?",
  description:
    "A clear introduction to Freemasonry — fraternity, faith, private lessons, and making good men better.",
};

const sections = [
  {
    id: "fraternity",
    title: "A centuries-old fraternity",
    body: "Modern organized Freemasonry has roots stretching back more than 300 years. It is a voluntary association of men who meet for fellowship, moral instruction, and charitable work. Lodges exist in communities around the world; Smithville Lodge No. 77 is one local expression of that tradition.",
  },
  {
    id: "not-religion",
    title: "Not a religion",
    body: "Freemasonry is not a church, synagogue, mosque, or substitute for any faith. It does not offer salvation, sacraments, or religious doctrine. Masons are expected to remain active in their own congregations and traditions. The lodge is a fraternity — a place where men of faith meet as brothers, not as a unified congregation.",
  },
  {
    id: "many-faiths",
    title: "Open to men of many faiths",
    body: "Freemasonry requires belief in a Supreme Being — a higher power — but does not define that belief for you. Christians, Jews, Muslims, and men of other traditions have been Masons for generations. What is required is sincerity of belief and respect for the beliefs of others.",
  },
  {
    id: "public-values",
    title: "Private lessons, public values",
    body: "Membership is not hidden. Our values — charity, integrity, brotherhood, civic responsibility — are public. Certain lessons, ceremonies, and modes of recognition are private and shared only among brothers. That distinction is often misunderstood; it does not mean the organization is secret in a sinister sense.",
  },
  {
    id: "stages",
    title: "Why lessons are revealed in stages",
    body: "Instruction is offered in degrees, each building on the last. The purpose is formation: time to reflect, question, and grow before receiving the next lesson. This pedagogical approach has served Freemasonry for centuries. It is not about exclusion or control — it is about helping each man internalize moral lessons at his own pace.",
  },
  {
    id: "better-men",
    title: "Making good men better",
    body: "The aim is practical and humane: to help good men become better husbands, fathers, sons, friends, neighbors, citizens, employees, employers, church members, and community servants. Masonry does not claim to perfect anyone — it offers fellowship, example, and instruction toward a life of service and character.",
  },
];

export default function FreemasonryPage() {
  return (
    <>
      <PageHero
        title="What Is Freemasonry?"
        subtitle="Plain-language answers for neighbors, friends, and men who are curious."
        imageSrc="/images/freemasonry.svg"
        imageAlt="Freemasonry — education and fraternity"
      />

      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-stone">
            Freemasonry is one of the world’s oldest fraternal organizations. This
            page offers a calm, accurate introduction — without sensationalism or
            conspiracy. If you have specific questions, see our{" "}
            <Link href="/faq" className="font-medium text-navy underline decoration-gold/60">
              FAQ
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-medium text-navy underline decoration-gold/60">
              contact the lodge
            </Link>
            .
          </p>
        </div>
      </ContentSection>

      {sections.map((section, i) => (
        <ContentSection key={section.id} variant={i % 2 === 1 ? "alt" : "default"}>
          <article id={section.id} className="mx-auto max-w-3xl scroll-mt-24">
            <SectionHeading title={section.title} />
            <p className="mt-6 leading-relaxed text-stone">{section.body}</p>
          </article>
        </ContentSection>
      ))}

      <ContentSection variant="navy">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Want to go further?"
            subtitle="Read about membership or reach out with respectful questions."
            centered
            light
          />
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/membership"
              className="inline-flex justify-center rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-navy uppercase hover:bg-gold-light"
            >
              Membership
            </Link>
            <Link
              href="/faq"
              className="inline-flex justify-center rounded-sm border border-ivory/60 px-6 py-3 text-sm font-semibold tracking-wide text-ivory uppercase hover:bg-ivory/10"
            >
              FAQ
            </Link>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
