# Smithville Lodge No. 77 — Public Website

A modern public website for **Smithville Lodge No. 77, Free & Accepted Masons** in Smithville, Tennessee. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Captcha configuration (Cloudflare Turnstile)

Set these environment variables before running the contact form in development or production:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
```

Contact form email uses **Resend** on subdomain **`contact.chl77.org`**. See **[docs/RESEND.md](docs/RESEND.md)** for DNS verification.

## Editing content

| What to change | Where |
|----------------|--------|
| Lodge name, nav, contact placeholders | `lib/site.ts` |
| Home page copy & value cards | `content/home.ts` |
| FAQ | `content/faq.ts` |
| Charity cards | `content/charity.ts` |
| Gallery items | `content/gallery.ts` |
| Page-specific copy | `app/<route>/page.tsx` |
| Images | Replace files in `public/images/` (keep filenames or update references) |

## Project structure

```
app/              # Routes (pages)
components/       # UI: Header, Footer, Hero, forms, cards, etc.
content/          # Editable static data (FAQ, charity, gallery)
lib/              # Site config
public/images/    # Placeholder SVGs — swap for real photos
```

## GitHub + Vercel deployment

**First-time setup:** follow **[docs/DEPLOY.md](docs/DEPLOY.md)** — GitHub CLI login, create the remote repo, push, and connect Vercel.

Quick version after login (`gh auth login` or `.\scripts\gh.ps1 auth login` if `gh` is not found):

```powershell
.\scripts\push-to-github.ps1
```

Then import the repo at [vercel.com/new](https://vercel.com/new). Pushes to `main` auto-deploy.

## GitHub workflow

1. Clone the repository and create a branch for your changes.
2. Edit content or components locally; run `npm run dev` to preview.
3. Commit and push to GitHub.
4. Open a pull request for review before merging to the main branch.

Production site: **https://www.chl77.org** (also **https://chl77.org**). Canonical URL is set in `lib/site.ts`.

## Before launch checklist

- [ ] Replace placeholder address, email, phone, and meeting schedule in `lib/site.ts`
- [ ] Replace SVG placeholders in `public/images/` with real lodge photos
- [ ] Add verified lodge history if desired (currently marked as placeholder on About)
- [ ] Verify Resend DNS for `contact.chl77.org` (see `docs/RESEND.md`)
- [ ] Embed map on Contact page when address is final
- [ ] Confirm any grand lodge / jurisdictional disclaimer requirements

## License & imagery

Do not add copyrighted Masonic artwork without permission. Placeholder geometry in this repo is original and decorative only.
