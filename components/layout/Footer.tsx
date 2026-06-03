import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-ivory-dark bg-navy text-ivory">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold text-gold">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-ivory/80">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70">
              {siteConfig.contact.address}
              <br />
              {siteConfig.contact.city}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-widest text-gold uppercase">
              Meetings
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">
              {siteConfig.contact.meetingSchedule}
            </p>
            <p className="mt-4 text-sm text-ivory/70">
              Please use the contact form for all inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-widest text-gold uppercase">
              Explore
            </h2>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/70 hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-ivory/10 pt-8 text-center text-xs text-ivory/50">
          <p>
            © {year} {siteConfig.name}. Content on this site is for public
            information.
          </p>
          <p className="mt-2">
            Freemasonry is a fraternity, not a religion. This site does not
            represent any grand lodge unless formally authorized.
          </p>
        </div>
      </Container>
    </footer>
  );
}
