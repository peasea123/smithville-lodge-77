/** Generates a simple SVG data URI for dev — prefer files in /public/images/ */
export function placeholderSvg(label: string, accent = "#c9a227"): string {
  const encoded = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a2744"/>
          <stop offset="100%" style="stop-color:#2d3a52"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#g)"/>
      <g opacity="0.15" stroke="${accent}" fill="none" stroke-width="2">
        <rect x="500" y="300" width="200" height="200"/>
        <line x1="500" y1="500" x2="700" y2="300"/>
        <line x1="700" y1="500" x2="500" y2="300"/>
      </g>
      <text x="600" y="420" text-anchor="middle" fill="#f8f5f0" font-family="Georgia,serif" font-size="28">${label}</text>
      <text x="600" y="460" text-anchor="middle" fill="#c9a227" font-family="sans-serif" font-size="14">Image placeholder</text>
    </svg>`
  );
  return `data:image/svg+xml,${encoded}`;
}
