# Resend email setup (contact.chl77.org)

The contact form sends mail through [Resend](https://resend.com) after Turnstile captcha passes.

**Sending subdomain:** `contact.chl77.org` — isolates website/form mail from the main `chl77.org` domain reputation. The public website stays on `www.chl77.org`; only the **From** address uses the subdomain.

---

## Vercel environment variables

| Name | Example | Notes |
|------|---------|--------|
| `RESEND_API_KEY` | `re_...` | From Resend → API Keys. **Server only** — never `NEXT_PUBLIC_`. |
| `RESEND_FROM_EMAIL` | `Center Hill Lodge <inquiries@contact.chl77.org>` | Must use `@contact.chl77.org` after that subdomain is **Verified** in Resend. |
| `CONTACT_FORM_TO_EMAIL` | `your-inbox@gmail.com` | Where submissions are delivered (any valid email). |

After adding or changing variables, **redeploy** on Vercel.

---

## DNS records (required before mail sends)

1. Log in at [resend.com/domains](https://resend.com/domains)
2. **Add domain** → `contact.chl77.org` (the subdomain only — not the apex)
3. Resend shows DNS records (TXT for SPF, CNAME for DKIM, optional DMARC). Add them at your DNS host for **`contact.chl77.org`** — same provider where `chl77.org` / Vercel records live.
4. Click **Verify** in Resend after saving DNS
5. Propagation can take minutes up to **48 hours**

Until status is **Verified**, sending from `@contact.chl77.org` will fail. The contact form may show a domain verification error.

---

## Website DNS vs email DNS

| Purpose | Host | Where configured |
|---------|------|------------------|
| Website | `chl77.org`, `www.chl77.org` | Vercel → Domains |
| Form email | `contact.chl77.org` | Resend → Domains + DNS records |

These do not conflict. You are adding records for the **subdomain** `contact`, not moving the website.

---

## Suggested `RESEND_FROM_EMAIL` values

Pick one address on the verified subdomain:

- `Center Hill Lodge <inquiries@contact.chl77.org>` (recommended)
- `Center Hill Lodge <noreply@contact.chl77.org>`

`CONTACT_FORM_TO_EMAIL` can be any inbox you check (Gmail, lodge officer email, etc.).

---

## Checklist

- [ ] Domain **`contact.chl77.org`** added in Resend (not only apex `chl77.org`)
- [ ] SPF + DKIM DNS records published for the subdomain
- [ ] Resend shows **Verified**
- [ ] `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_FORM_TO_EMAIL` set in Vercel
- [ ] `RESEND_FROM_EMAIL` uses `@contact.chl77.org`
- [ ] Redeploy on Vercel
- [ ] Test submit at https://www.chl77.org/contact
- [ ] Check Resend → **Logs** if mail does not arrive

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Resend verified but form still fails | **`RESEND_FROM_EMAIL` must use `@contact.chl77.org`**, not `@chl77.org`. Example: `Center Hill Lodge <inquiries@contact.chl77.org>`. Redeploy after changing Vercel. |
| “Domain verification” on form (old deploy) | Redeploy latest code; check Vercel **Functions** logs for `[contact-email]` |
| Verified apex but still fails | Verify **`contact.chl77.org`** in Resend, not only `chl77.org` |
| Emails go to spam | Confirm DKIM green in Resend; add DMARC if offered |
| `403` / validation error | `RESEND_FROM_EMAIL` domain must match verified subdomain exactly |
| Check send attempts | [resend.com/emails](https://resend.com/emails) — failed sends show the API error |
