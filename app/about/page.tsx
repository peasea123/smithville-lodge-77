import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { galleryItems } from "@/content/gallery";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About the Lodge",
  description:
    "Learn about Center Hill Lodge No. 77 — values, community service, and our place in Smithville, Tennessee.",
};

const values = [
  {
    title: "Brotherly Love",
    text: "We meet as brothers — respecting one another across differences of background, occupation, and faith.",
  },
  {
    title: "Relief",
    text: "Charity and practical help for neighbors in need are central to who we are as Masons.",
  },
  {
    title: "Truth",
    text: "We seek honesty in our dealings and growth in character through reflection and instruction.",
  },
];

const doNot = [
  "We do not discuss politics in lodge.",
  "We do not debate religion in lodge.",
  "We do not operate as a church or replace a man’s faith tradition.",
  "We do not use Masonry for business, political, or personal advantage.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About the Lodge"
        subtitle="A local fraternity of men committed to character, charity, and service in Smithville."
        imageSrc={images.hero.about}
        imageAlt="Center Hill Lodge building in Smithville, Tennessee"
      />

      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Who We Are" />
          <div className="mt-8 space-y-4 leading-relaxed text-stone">
            <p>
              Center Hill Lodge No. 77 is a lodge of Free & Accepted Masons serving
              Smithville and DeKalb County, Tennessee. We are neighbors, coworkers,
              veterans, tradesmen, professionals, fathers, and grandfathers — men who
              believe that fellowship and moral growth belong in the life of a community.
            </p>
            <p>
              Our lodge is part of a long tradition of American Freemasonry: not a
              secret society, but a fraternity with public values and private modes of
              instruction. We welcome the community to know who we are and what we stand
              for.
            </p>
            <p>
              The lodge traces its origins to the early Masonic tradition in
              DeKalb County. To learn more about our history — including the
              1937 Liberty Lodge commemorative building marker and the men who
              built this lodge —
              visit our{" "}
              <Link href="/history" className="font-medium text-navy underline decoration-gold/60">
                History page
              </Link>
              .
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="alt">
        <SectionHeading title="Values That Guide Us" centered />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-sm border border-ivory-dark bg-white p-8 text-center shadow-sm"
            >
              <h3 className="font-serif text-xl font-semibold text-navy">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{v.text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Serving Smithville" />
            <p className="mt-6 leading-relaxed text-stone">
              We support local charities, families, schools, and service efforts. We
              attend to the practical needs of our county — food, youth, disaster
              relief, and hands-on community days. Masonry is not only what happens
              inside the lodge room; it is how we show up for others.
            </p>
          </div>
          <div>
            <SectionHeading title="What We Do Not Do" />
            <ul className="mt-6 space-y-3">
              {doNot.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-stone"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="alt">
        <SectionHeading title="Gallery" subtitle="Life at the lodge and in the community." centered />
        <div className="mt-12">
          <PhotoGallery items={galleryItems.slice(0, 3)} />
        </div>
      </ContentSection>
    </>
  );
}
