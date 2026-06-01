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

Quick version after `gh auth login`:

```powershell
gh repo create smithville-lodge-77 --public --source=. --remote=origin --push
```

Then import the repo at [vercel.com/new](https://vercel.com/new). Pushes to `main` auto-deploy.

## GitHub workflow

1. Clone the repository and create a branch for your changes.
2. Edit content or components locally; run `npm run dev` to preview.
3. Commit and push to GitHub.
4. Open a pull request for review before merging to the main branch.

Update `lib/site.ts` → `url` with your production domain when live.

## Before launch checklist

- [ ] Replace placeholder address, email, phone, and meeting schedule in `lib/site.ts`
- [ ] Replace SVG placeholders in `public/images/` with real lodge photos
- [ ] Add verified lodge history if desired (currently marked as placeholder on About)
- [ ] Wire contact form to email (e.g. Resend, Formspree, or server action)
- [ ] Embed map on Contact page when address is final
- [ ] Confirm any grand lodge / jurisdictional disclaimer requirements

## License & imagery

Do not add copyrighted Masonic artwork without permission. Placeholder geometry in this repo is original and decorative only.
