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

## Custom domain (later)

1. In Vercel: Project → **Settings** → **Domains**
2. Add your domain (e.g. `smithvillelodge77.org`)
3. Add the DNS records Vercel shows at your registrar
4. Update `lib/site.ts` → `url` with the live domain

---

## Environment variables

No env vars are required for the current static site and contact form UI.

When you connect the contact form to email (Resend, etc.), add secrets in:

**Vercel** → Project → **Settings** → **Environment Variables**

Never commit `.env` files (already in `.gitignore`).

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `gh: not recognized` | Restart terminal, or refresh PATH after installing GitHub CLI |
| `gh auth login` needed | Run Part 1 step 1 |
| Push rejected (remote has commits) | `git pull origin main --rebase` then `git push` |
| Vercel build fails | Run `npm run build` locally and fix errors first |
| Wrong repo root warning | Ensure you deploy from this folder, not a parent directory with another `package-lock.json` |

---

## Quick reference

| Service | URL after setup |
|---------|-----------------|
| GitHub repo | `https://github.com/YOUR_USERNAME/smithville-lodge-77` |
| Vercel preview | `https://smithville-lodge-77-*.vercel.app` |
| Production | Custom domain or Vercel production URL |
