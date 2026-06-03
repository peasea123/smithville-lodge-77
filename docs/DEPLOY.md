# Deploy: GitHub + Vercel

This project is ready to host on **GitHub** (source of truth) and **Vercel** (hosting). Complete the steps below once on your machine.

---

## Prerequisites

- [Git](https://git-scm.com/) (already in use)
- [GitHub CLI](https://cli.github.com/) (`gh`) — installed via `winget install GitHub.cli`
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (sign in with GitHub)

---

## Part 1 — GitHub

### 1. Log in to GitHub CLI (one time)

**If `gh` is not recognized** (common right after install), either **close and reopen** PowerShell / Cursor, or use the project wrapper:

```powershell
cd c:\Users\pseagraves\dev\github\smithville-lodge-77
.\scripts\gh.ps1 auth login
```

Or refresh PATH in the current window, then use `gh` normally:

```powershell
$env:Path = "C:\Program Files\GitHub CLI;" + $env:Path
gh auth login
```

In PowerShell or Terminal:

```powershell
gh auth login
```

Choose:

- **GitHub.com**
- **HTTPS** (recommended) or SSH if you prefer
- Authenticate via **browser** or **token**

Verify:

```powershell
gh auth status
```

### 2. Create the remote repo and push

From the project folder:

```powershell
cd c:\Users\pseagraves\dev\github\smithville-lodge-77

# Create repo on GitHub under your account and push main
gh repo create smithville-lodge-77 --public --source=. --remote=origin --push
```

If the repo name is taken, pick another name:

```powershell
gh repo create smithville-lodge-77-site --public --source=. --remote=origin --push
```

**Repo already exists on GitHub?** Link and push instead:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/smithville-lodge-77.git
git push -u origin main
```

### 3. Day-to-day workflow

```powershell
git add .
git commit -m "Describe your change"
git push
```

---

## Part 2 — Vercel

### Option A — Dashboard (recommended, no CLI)

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import** your GitHub account if prompted
3. Select repository **`smithville-lodge-77`** (or your repo name)
4. Vercel auto-detects **Next.js** — keep defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (default)
   - **Install Command:** `npm install`
5. Click **Deploy**
6. After the first deploy, every push to `main` triggers a new production deployment

### Option B — Vercel CLI

```powershell
npm i -g vercel
cd c:\Users\pseagraves\dev\github\smithville-lodge-77
vercel login
vercel link
vercel --prod
```

---

## Custom domain

Production: **https://www.chl77.org** and **https://chl77.org**

1. In Vercel: Project → **Settings** → **Domains** — add `chl77.org` and `www.chl77.org`
2. Add the DNS records Vercel shows at your registrar
3. Set **www** as primary redirect (or apex → www) per your preference
4. `lib/site.ts` → `url` is the canonical site URL (`https://www.chl77.org`)

---

## Environment variables (contact form captcha)

The contact form requires **Cloudflare Turnstile** keys. Without them, the form shows “temporarily unavailable.”

### 1. Create Turnstile keys

1. Sign in at [Cloudflare Dashboard → Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
2. **Add widget** → choose **Managed** (recommended)
3. **Domains:** add `chl77.org`, `www.chl77.org`, and `localhost` (for local dev). Optionally keep `smithville-lodge-77.vercel.app` for preview deploys.
4. Copy the **Site key** and **Secret key**

### 2. Add to Vercel

**Vercel** → your project → **Settings** → **Environment Variables**

| Name | Value | Environments |
|------|--------|----------------|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Site key from Cloudflare | Production, Preview, Development |
| `TURNSTILE_SECRET_KEY` | Secret key from Cloudflare | Production, Preview, Development |

Important: `NEXT_PUBLIC_*` is embedded at **build time**. After adding or changing these variables, **redeploy** (Deployments → ⋯ → Redeploy, or push a new commit).

### 3. Local development

Copy `.env.example` to `.env.local` and fill in both keys:

```powershell
copy .env.example .env.local
# Edit .env.local, then:
npm run dev
```

Or via CLI:

```powershell
npx vercel env pull .env.local
```

Never commit `.env` or `.env.local` (already in `.gitignore`).

When you add email delivery (Resend, etc.), add those secrets in the same Vercel screen.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `gh: not recognized` | Close/reopen terminal, or run `.\scripts\gh.ps1` instead of `gh`, or `$env:Path = "C:\Program Files\GitHub CLI;" + $env:Path` |
| `gh auth login` needed | Run Part 1 step 1 |
| Push rejected (remote has commits) | `git pull origin main --rebase` then `git push` |
| Vercel build fails | Run `npm run build` locally and fix errors first |
| Wrong repo root warning | Ensure you deploy from this folder, not a parent directory with another `package-lock.json` |
| Contact form: captcha unavailable | Add Turnstile env vars on Vercel and **redeploy** (see Environment variables above) |
| Captcha widget missing but no error | Confirm domain is allowed in Turnstile widget settings; redeploy after adding `NEXT_PUBLIC_TURNSTILE_SITE_KEY` |

---

## Quick reference

| Service | URL after setup |
|---------|-----------------|
| GitHub repo | `https://github.com/YOUR_USERNAME/smithville-lodge-77` |
| Vercel preview | `https://smithville-lodge-77-*.vercel.app` |
| Production | https://www.chl77.org · https://chl77.org |
