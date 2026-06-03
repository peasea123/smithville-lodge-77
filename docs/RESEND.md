# Resend email setup (chl77.org)

The contact form sends mail through [Resend](https://resend.com) after Turnstile captcha passes. **Vercel environment variables alone are not enough** — you must verify your domain in Resend with DNS records.

---

## Vercel environment variables

| Name | Example | Notes |
|------|---------|--------|
| `RESEND_API_KEY` | `re_...` | From Resend → API Keys. **Server only** — never `NEXT_PUBLIC_`. |
| `RESEND_FROM_EMAIL` | `Center Hill Lodge <contact@chl77.org>` | Must use an address on a **verified** domain. |
| `CONTACT_FORM_TO_EMAIL` | `secretary@chl77.org` | Inbox that receives form submissions (can be any valid email). |

After adding or changing variables, **redeploy** on Vercel.

---

## DNS records (required before @chl77.org can send)

1. Log in at [resend.com/domains](https://resend.com/domains)
2. **Add domain** → `chl77.org` (Resend usually covers both apex and `www` for sending; confirm in their UI)
3. Resend shows DNS records to add at your **domain registrar** or **DNS host** (wherever `chl77.org` DNS is managed — may be Cloudflare, GoDaddy, etc.)

Typical records (exact names/values come from Resend — copy from their dashboard):

| Type | Purpose |
|------|---------|
| **TXT** | SPF / domain verification |
| **CNAME** (often 3) | DKIM signing |
| **TXT** (optional) | DMARC — recommended for deliverability |

4. Click **Verify** in Resend after saving DNS
5. DNS can take from a few minutes up to **48 hours** to propagate

Until status is **Verified**, sending from `contact@chl77.org` (or any `@chl77.org` address) will **fail**. The contact form may show an error mentioning domain verification.

---

## Where to add DNS if Vercel hosts the website

**Website hosting** (Vercel) and **email DNS** (Resend) are separate:

- Vercel → `chl77.org` / `www.chl77.org` for the Next.js site (A/CNAME as Vercel instructs)
- Resend → TXT/CNAME records for **email authentication** on the same domain

Both sets of records live in your DNS provider. They do not conflict if you add exactly what each service lists.

---

## Testing before DNS is verified

Resend’s onboarding domain (`onboarding@resend.dev`) can only send to **your own** Resend account email during early testing — not suitable for a public lodge form.

**Recommended:** add DNS records, wait for **Verified**, then test the live form at https://www.chl77.org/contact.

---

## Checklist

- [ ] Domain `chl77.org` added in Resend
- [ ] SPF + DKIM (and optional DMARC) DNS records published
- [ ] Resend shows domain **Verified**
- [ ] `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_FORM_TO_EMAIL` set in Vercel
- [ ] Redeploy after env vars
- [ ] Submit test message on Contact page

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Form succeeds but no email | Check Vercel env vars; redeploy; check Resend → Logs |
| “Domain verification” error | DNS not verified yet — complete Resend DNS checklist |
| Emails go to spam | Ensure DKIM verified; add DMARC; use a real `From` like `contact@chl77.org` |
| `403` / validation error | `RESEND_FROM_EMAIL` must match verified domain |
