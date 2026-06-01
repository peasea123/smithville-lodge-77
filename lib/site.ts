export const siteConfig = {
  name: "Smithville Lodge No. 77",
  shortName: "Smithville Lodge 77",
  tagline: "Free & Accepted Masons",
  location: "Smithville, Tennessee",
  description:
    "Smithville Lodge No. 77 is a local Masonic lodge committed to charity, fellowship, moral growth, and service to our community.",
  url: "https://smithvillelodge77.org", // placeholder — update when domain is live
  contact: {
    address: "[Lodge street address — placeholder]",
    city: "Smithville, TN [ZIP — placeholder]",
    email: "[lodge-email@example.com — placeholder]",
    phone: "[(000) 000-0000 — placeholder]",
    meetingSchedule:
      "Stated meetings: [e.g., first Thursday, 7:00 PM — placeholder]. Dinner often precedes meeting — confirm with the lodge.",
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
