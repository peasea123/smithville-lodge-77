import Link from "next/link";
import { ValueCard } from "@/components/cards/ValueCard";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContentSection } from "@/components/sections/ContentSection";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { homeValues, homeSections } from "@/content/home";
import { galleryItems } from "@/content/gallery";
import { images } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Brotherhood. Service. Character."
        subheadline="Center Hill Lodge No. 77 is a local Masonic lodge committed to charity, fellowship, moral growth, and service to our community."
        imageSrc={images.hero.home}
        imageAlt="Center Hill Lodge No. 77 — fraternity and community service in Tennessee"
        primaryCta={{ label: "Learn About Freemasonry", href: "/freemasonry" }}
        secondaryCta={{ label: "Ask About Membership", href: "/membership" }}
      />

      <ContentSection>
        <SectionHeading
          title="Our Foundation"
          subtitle="Three pillars guide how we live as brothers and neighbors."
          centered
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {homeValues.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </ContentSection>

      <ContentSection variant="alt">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={homeSections.rooted.title} />
            <p className="mt-6 leading-relaxed text-stone">{homeSections.rooted.body}</p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-navy underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
            >
              About the lodge →
            </Link>
          </div>
          <div className="rounded-sm border border-ivory-dark bg-white p-8 shadow-sm">
            <blockquote className="font-serif text-xl leading-relaxed text-navy">
              “We take good men and make them better — better husbands, fathers,
              sons, friends, neighbors, and citizens.”
            </blockquote>
            <p className="mt-4 text-sm text-stone">
              A traditional aim of Freemasonry, expressed in plain language.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading title={homeSections.whatIs.title} centered />
        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-stone">
          {homeSections.whatIs.body}
        </p>
        <div className="mt-10 text-center">
          <Button href="/freemasonry" variant="secondary">
            What Is Freemasonry?
          </Button>
        </div>
      </ContentSection>

      <ContentSection variant="navy">
        <SectionHeading
          title={homeSections.mystery.title}
          subtitle={homeSections.mystery.body}
          centered
          light
        />
      </ContentSection>

      <ContentSection variant="alt">
        <SectionHeading title={homeSections.service.title} centered />
        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-stone">
          {homeSections.service.body}
        </p>
        <div className="mt-10 text-center">
          <Button href="/charity" variant="primary">
            Charity & Community
          </Button>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          title="Life at the Lodge"
          subtitle="Brotherhood, service, and life together in Smithville."
          centered
        />
        <div className="mt-12">
          <PhotoGallery items={galleryItems} />
        </div>
      </ContentSection>

      <ContentSection variant="navy">
        <div className="text-center">
          <SectionHeading
            title={homeSections.cta.title}
            subtitle={homeSections.cta.body}
            centered
            light
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/membership" variant="primary">
              Membership
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
