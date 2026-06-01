import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Contact Smithville Lodge No. 77 — address, meeting times, and inquiry form.",
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      <PageHero
        title="Contact & Visit"
        subtitle="We welcome respectful inquiries. Please confirm meeting times before visiting."
        imageSrc="/images/contact-map.svg"
        imageAlt="Contact Smithville Lodge — map placeholder"
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
                  {contact.address}
                  <br />
                  {contact.city}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest text-gold uppercase">
                  Meetings
                </dt>
                <dd className="mt-2 text-stone">{contact.meetingSchedule}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest text-gold uppercase">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-navy underline decoration-gold/50 hover:decoration-gold"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest text-gold uppercase">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="text-navy underline decoration-gold/50 hover:decoration-gold"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-sm text-stone">
              Visitors who are not Masons should contact the lodge in advance.
              Ceremonial portions of meetings are not open to the public.
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
          title="Map"
          subtitle="Embed a Google Map or similar when the lodge address is finalized."
          centered
        />
        <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-sm border border-ivory-dark">
          <Image
            src="/images/contact-map.svg"
            alt="Map placeholder — replace with embedded map when address is confirmed"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </ContentSection>
    </>
  );
}
