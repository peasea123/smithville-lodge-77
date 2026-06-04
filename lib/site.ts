export const siteConfig = {
  name: "Center Hill Lodge No. 77",
  shortName: "Center Hill Lodge 77",
  tagline: "Free & Accepted Masons",
  location: "Smithville, Tennessee",
  description:
    "Center Hill Lodge No. 77 is a local Masonic lodge committed to charity, fellowship, moral growth, and service to our community.",
  url: "https://www.chl77.org",
  /** Production hostnames (for Turnstile, DNS, etc.) */
  domains: ["chl77.org", "www.chl77.org"] as const,
  /** Resend sending subdomain — verify this domain in Resend, not the apex */
  emailSendingDomain: "contact.chl77.org",
  contact: {
    address: "101 W Market",
    city: "Smithville, TN 37166",
    fullAddress: "101 W Market, Smithville, TN 37166",
    meetingSchedule:
      "Stated meetings: first Monday of each month at 7:00 PM. Dinner often precedes the meeting — contact the lodge to confirm.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "History", href: "/history" },
    { label: "Freemasonry", href: "/freemasonry" },
    { label: "Charity", href: "/charity" },
    { label: "Fellowship", href: "/fellowship" },
    { label: "Membership", href: "/membership" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function googleMapsSearchUrl(query = siteConfig.contact.fullAddress) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function googleMapsEmbedUrl(query = siteConfig.contact.fullAddress) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
