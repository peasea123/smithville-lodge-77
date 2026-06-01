import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  title,
  subtitle,
  imageSrc = images.hero.home,
  imageAlt = "Smithville Lodge",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ivory-dark">
      <div className="relative h-48 sm:h-56 lg:h-64">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>
      <Container className="relative -mt-16 pb-10 sm:-mt-20">
        <div className="rounded-sm border border-gold/30 bg-ivory px-6 py-8 shadow-sm sm:px-10">
          <h1 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-lg text-stone">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
