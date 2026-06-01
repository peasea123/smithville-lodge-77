export const siteConfig = {
  name: "Smithville Lodge No. 77",
  shortName: "Smithville Lodge 77",
  tagline: "Free & Accepted Masons",
  location: "Smithville, Tennessee",
  description:
    "Smithville Lodge No. 77 is a local Masonic lodge committed to charity, fellowship, moral growth, and service to our community.",
  url: "https://smithville-lodge-77.vercel.app",
  contact: {
    address: "101 W Market",
    city: "Smithville, TN 37166",
    fullAddress: "101 W Market, Smithville, TN 37166",
    email: "[lodge-email@example.com — placeholder]",
    phone: "[(000) 000-0000 — placeholder]",
    meetingSchedule:
      "Stated meetings: first Monday of each month at 7:00 PM. Dinner often precedes the meeting — contact the lodge to confirm.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
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
