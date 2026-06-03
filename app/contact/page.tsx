import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { GoogleMapEmbed } from "@/components/maps/GoogleMapEmbed";
import { googleMapsSearchUrl, siteConfig } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Contact Center Hill Lodge No. 77 at 101 W Market, Smithville, TN. Stated meetings first Monday of each month at 7:00 PM.",
};

export default function ContactPage() {
  const { contact } = siteConfig;
  const directionsUrl = googleMapsSearchUrl();

  return (
    <>
      <PageHero
        title="Contact & Visit"
        subtitle="101 W Market, Smithville — stated meetings first Monday of each month at 7:00 PM."
        imageSrc={images.hero.contact}
        imageAlt="Smithville, Tennessee — lodge location"
      />

      <ContentSection>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Lodge information" />
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold tracking-widest text-gold uppercase">
                  Address
                </dt>
                <dd className="mt-2 text-stone">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy underline decoration-gold/50 hover:decoration-gold"
                  >
                    {contact.address}
                    <br />
                    {contact.city}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest text-gold uppercase">
                  Meetings
                </dt>
                <dd className="mt-2 text-stone">{contact.meetingSchedule}</dd>
              </div>
            </dl>
            <p className="mt-8 text-sm text-stone">
              Visitors who are not Masons should use the contact form below
              before attending. Ceremonial portions of meetings are not open to
              the public.
            </p>
          </div>

          <div className="rounded-sm border border-ivory-dark bg-white p-6 shadow-sm sm:p-8">
            <SectionHeading title="Send a message" />
            <div className="mt-8">
              <ContactForm showInterestField />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="alt">
        <SectionHeading
          title="Find us"
          subtitle="Center Hill Lodge No. 77 on West Market Street"
          centered
        />
        <div className="mx-auto mt-10 max-w-4xl">
          <GoogleMapEmbed />
        </div>
      </ContentSection>
    </>
  );
}
