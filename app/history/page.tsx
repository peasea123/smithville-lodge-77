import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "History",
  description:
    "The history of Center Hill Lodge No. 77, Free & Accepted Masons, in Smithville and DeKalb County, Tennessee.",
};

const financeCommittee = [
  "J. E. Evins, Chairman",
  "G. E. Braswell",
  "J. R. Colvert",
  "W. R. Tittsworth",
  "W. J. Evins",
  "T. J. Potter",
];

const buildingCommittee = [
  "R. L. Estes",
  "A. H. Evins",
  "T. J. Potter",
  "W. H. Vickers",
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="History of the Lodge"
        subtitle="A record of fellowship, leadership, and service spanning generations in DeKalb County, Tennessee."
        imageSrc={images.hero.history}
        imageAlt="Center Hill Lodge No. 77 lodge building"
      />

      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Lodge History" />
          <div className="mt-8 space-y-4 leading-relaxed text-stone">
            <p>
              Center Hill Lodge No. 77, Free &amp; Accepted Masons, has served
              the community of Smithville and DeKalb County, Tennessee, for
              generations. The lodge traces its origins to the early Masonic
              tradition in this region, when a small group of dedicated men
              gathered to form a fraternal bond grounded in brotherly love,
              relief, and truth.
            </p>
            <p>
              Over the years, the lodge has reflected the life of the community
              around it — shaped by the same families, civic leaders, and
              tradesmen who built Smithville into the town it is today. The
              record of the lodge is a record of DeKalb County itself.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="alt">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="The 1937 Liberty Lodge Cornerstone"
            subtitle="A lasting record of brotherhood, sacrifice, and community commitment."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
            {/* Cornerstone image */}
            <div className="mx-auto w-full max-w-xs shrink-0 lg:mx-0 lg:w-56 xl:w-64">
              <div className="overflow-hidden rounded-sm border border-gold/30 bg-white shadow-sm">
                <Image
                  src={images.cornerstone1937}
                  alt="1937 Liberty Lodge No. 77 cornerstone"
                  width={256}
                  height={320}
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-2 text-center text-xs italic text-stone/70">
                The 1937 Liberty Lodge No.&nbsp;77 cornerstone
              </p>
            </div>

            {/* Main text */}
            <div className="space-y-5 leading-relaxed text-stone">
              <p>
                Set into the corner of the lodge building is one of the most
                important visible links to the history of Center Hill Lodge
                No.&nbsp;77. The stone identifies the building as Liberty Lodge
                No.&nbsp;77, F.&nbsp;&amp;&nbsp;A.M., with the date 1831 carved
                into the left side and 1937 carved into the right side. The date
                1831 marks the early history of Liberty Lodge No.&nbsp;77, while
                the 1937 date marks the construction or dedication of this lodge
                building.
              </p>
              <p>
                Although the lodge is now known as Center Hill Lodge No.&nbsp;77,
                the cornerstone preserves the older name, Liberty Lodge
                No.&nbsp;77. This stone is a reminder that the present lodge
                continues a much older Masonic tradition in Smithville and
                DeKalb County.
              </p>
              <p>
                The marker also preserves the names of the brethren who helped
                make the 1937 building possible. These men served on the Finance
                Committee and Building Committee and represented some of the most
                active civic, professional, and family names in Smithville during
                that period.
              </p>

              <div className="grid gap-8 pt-2 sm:grid-cols-2">
                <div>
                  <h3 className="font-serif text-base font-semibold text-navy">
                    Finance Committee
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {financeCommittee.map((name) => (
                      <li key={name} className="flex gap-3 text-sm text-stone">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-navy">
                    Building Committee
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {buildingCommittee.map((name) => (
                      <li key={name} className="flex gap-3 text-sm text-stone">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="mx-auto max-w-3xl space-y-5 leading-relaxed text-stone">
          <SectionHeading title="The Men Behind the Marker" />

          <p className="mt-6">
            The chairman of the Finance Committee, J. E. Evins, was James Edgar
            Evins, one of Smithville&apos;s most prominent citizens. Evins was a
            businessman, mayor of Smithville, and Tennessee state senator. He
            played an important role in promoting the development of Center Hill
            Dam and Reservoir, one of the major public works projects that helped
            shape modern DeKalb County. Edgar Evins State Park was later named
            in his honor.
          </p>

          <p>
            Another important name on the stone is Dr. T. J. Potter, who served
            on both the Finance Committee and the Building Committee. Dr. Thomas
            J. Potter was one of Smithville&apos;s early physicians and a
            respected community leader. His service on both committees shows the
            confidence the lodge placed in him and reflects the close connection
            between the lodge, local leadership, and public service in
            Smithville.
          </p>

          <p>
            The Evins name appears more than once on the marker. Along with
            J. E. Evins, the Finance Committee included W. J. Evins, and the
            Building Committee included A. H. Evins. The presence of multiple
            members of the Evins family reflects the family&apos;s deep
            connection to Smithville and to the civic life of DeKalb County.
          </p>

          <p>
            The other names on the stone — Braswell, Colvert, Tittsworth,
            Estes, and Vickers — are also long-standing DeKalb County names.
            Together, the men listed on this marker represent a generation of
            local Masons who invested their time, resources, and leadership into
            building a permanent home for the lodge.
          </p>
        </div>
      </ContentSection>

      <ContentSection variant="navy">
        <div className="mx-auto max-w-3xl space-y-5 leading-relaxed text-ivory/90">
          <SectionHeading
            title="A Foundation for Today"
            subtitle="The cornerstone endures as a public record of brotherhood and community commitment."
            centered
            light
          />
          <div className="mt-6 space-y-5">
            <p>
              The 1937 cornerstone is more than a construction marker. It is a
              public record of brotherhood, sacrifice, and community commitment.
              It connects today&apos;s Center Hill Lodge No.&nbsp;77 with the
              earlier Liberty Lodge No.&nbsp;77 and with the men who helped
              preserve Masonry in Smithville through the difficult years of the
              Great Depression.
            </p>
            <p>
              Today, this stone remains part of the building and part of the
              lodge&apos;s story. It reminds every visitor that Center Hill
              Lodge No.&nbsp;77 stands on a foundation laid by earlier
              generations of brothers who believed in fellowship, moral
              instruction, charity, and service to the community.
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
