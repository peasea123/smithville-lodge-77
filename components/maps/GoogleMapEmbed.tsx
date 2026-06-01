import { googleMapsEmbedUrl, googleMapsSearchUrl, siteConfig } from "@/lib/site";

type GoogleMapEmbedProps = {
  className?: string;
  title?: string;
};

export function GoogleMapEmbed({
  className = "",
  title = `Map: ${siteConfig.contact.fullAddress}`,
}: GoogleMapEmbedProps) {
  const embedUrl = googleMapsEmbedUrl();
  const directionsUrl = googleMapsSearchUrl();

  return (
    <div className={className}>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-ivory-dark bg-ivory-dark/30 shadow-sm">
        <iframe
          title={title}
          src={embedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-4 text-center text-sm text-stone">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-navy underline decoration-gold/50 hover:decoration-gold"
        >
          Open in Google Maps
        </a>
        {" · "}
        {siteConfig.contact.fullAddress}
      </p>
    </div>
  );
}
