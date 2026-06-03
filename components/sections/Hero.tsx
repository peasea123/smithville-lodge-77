import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

type HeroProps = {
  headline: string;
  subheadline: string;
  imageSrc?: string;
  imageAlt?: string;
  showLogo?: boolean;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({
  headline,
  subheadline,
  imageSrc = images.hero.home,
  imageAlt = "Center Hill Lodge — welcoming Masonic fraternity in Tennessee",
  showLogo = false,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <Container className="relative z-10 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-gold uppercase">
            Smithville, Tennessee
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            {showLogo && (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border border-gold/40 bg-white/95 shadow-sm sm:h-20 sm:w-20">
                <Image
                  src={images.brand.logo}
                  alt=""
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 64px, 80px"
                  priority
                />
              </div>
            )}
            <h1 className="font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-ivory/90 sm:text-xl">
            {subheadline}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
