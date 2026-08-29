# 1885.ai Site — Operations & Setup

Technical reference for the 1885.ai marketing site. Pairs with [`brand.md`](../brand.md) (content source of truth).

---

## Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (Hobby plan)
- **Domain registrar + DNS:** Hover
- **Transactional email:** Resend
- **Inbound email:** Hover email forwarding (paid, $5/yr)

---

## Live URLs

| URL | Purpose |
|---|---|
| https://1885.ai | Primary domain (apex) |
| https://www.1885.ai | Redirects to apex |
| https://website-1885-ai.vercel.app | Vercel-assigned (still works, for debugging) |
| https://get1885.com | Secondary domain — **owned but not wired** yet |

---

## Page map

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero → Two Products → OEM Compliance → Differentiators → Contact CTA |
| `/about` | `app/about/page.tsx` | Founder, team, mission, pilot, why-1885 |
| `/contact` | `app/contact/page.tsx` | Static contact block + Server-Action form |
| `/icon.png` | `app/icon.png` | 512×512 favicon (auto-wired by Next.js) |
| `/apple-icon.png` | `app/apple-icon.png` | 180×180 iOS home-screen icon |
| `/opengraph-image` | `app/opengraph-image.tsx` | Dynamic 1200×630 OG image (next/og) |

Shared layout: `app/layout.tsx` (metadata, fonts, `<Header />`, `<Footer />`)
Shared chrome: `components/Header.tsx`, `components/Footer.tsx`

---

## DNS (at Hover)

| Type | Host | Value | Purpose |
|---|---|---|---|
| A | @ | 216.198.79.1 | Vercel apex |
| CNAME | www | cname.vercel-dns.com | Vercel www → apex redirect |
| MX | @ | 10 mx.hover.com.cust.hostedemail.com | Inbound mail for hello@1885.ai (Hover forwarding) |
| TXT | _dmarc | v=DMARC1; p=none; | DMARC |
| TXT | resend._domainkey | (long key) | Resend DKIM |
| TXT | send | v=spf1 include:amazonses.com ~all | Resend SPF |
| MX | send | 10 feedback-smtp.us-east-1.amazonses.com | Resend bounce handling |

> ⚠️ **SPF warning:** Only one SPF TXT record per host. If another service (future Google Workspace, etc.) also wants SPF, **merge** the includes — don't add a second TXT.

---

## Email flow

### Inbound (someone emails `hello@1885.ai`)
1. DNS MX at Hover receives the mail
2. Hover email forwarding forwards to `jason.ennis@gmail.com`

### Outbound — contact form submissions
1. User submits form at `/contact`
2. Server Action validates with zod (see `app/contact/actions.ts`)
3. Resend sends email with:
   - From: `1885.ai Contact <hello@1885.ai>`
   - To: `$CONTACT_TO_EMAIL` (currently `jason.ennis@gmail.com`)
   - Reply-To: submitter's email (so replies go to the person who filled out the form)

### Outbound — replies from `hello@1885.ai`
**Currently:** replying in Gmail sends from `jason.ennis@gmail.com`. Not ideal.

**Deferred fix:** set up Gmail Send-As via Resend SMTP (`smtp.resend.com:465`, username `resend`, password = `RESEND_API_KEY`). Then change `CONTACT_TO_EMAIL` env var to `hello@1885.ai` so Gmail auto-picks the right From on reply. Full steps documented in the April 2026 build conversation.

---

## Environment variables

All set in **Vercel → Settings → Environment Variables** (Production + Preview + Development) **and** in local `.env.local` (gitignored):

| Name | Value | Purpose |
|---|---|---|
| `RESEND_API_KEY` | `re_...` | Resend API auth |
| `CONTACT_FROM_EMAIL` | `hello@1885.ai` | Form submissions' From header |
| `CONTACT_TO_EMAIL` | `jason.ennis@gmail.com` | Where form submissions are delivered |

---

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000. For the contact form to actually send in dev, populate `.env.local` with a real `RESEND_API_KEY`. Otherwise the form submit returns a generic error (safe — no crash).

```bash
npm run build     # production build
npm run lint      # eslint
```

---

## Deployment

- Every push to `main` deploys to production automatically (Vercel GitHub integration).
- PRs get preview URLs automatically — use these for testing changes before merge.
- No manual deploy steps. No CI config needed.

---

## Contact form technical notes

- **Server Action pattern** — `'use server'` file (`app/contact/actions.ts`) can only export async functions. Non-function exports (the initial state object, types) live in `app/contact/form-state.ts`. **Do not move these back** — production builds fail strictly on this rule even though Turbopack dev tolerates it.
- **Client boundary** — `app/contact/ContactForm.tsx` is the only `'use client'` component. It uses `useActionState(submitContact, initialState)`.
- **Validation** — zod schema. Field values are echoed back in `state.values` on error so typed data survives validation failures.
- **Honeypot** — hidden off-screen `website` field. Non-empty submission returns silent success without sending. Bots see no indication the trap triggered.
- **Rate limiting** — not implemented. Honeypot + zod are enough for today's traffic. If abuse shows up, add `@upstash/ratelimit` + Upstash Redis.

---

## Deferred / backlog

| Item | Trigger to pick up |
|---|---|
| Gmail Send-As for `hello@1885.ai` | When tired of replies showing Gmail address |
| Wire `get1885.com` → redirect to `1885.ai` | Anytime — Vercel → Domains → Add |
| TikTok link back in footer | 30-day handle cooldown ends, or decide to keep off |
| OEM-specific page (`/oem` or `/partners`) | When pitching specific OEMs actively |
| Pricing page | As launch approaches |
| Privacy policy / Terms | OEM vendor review request, or before first paid customer |
| Vercel Analytics | Anytime — free on Hobby, one click |
| Security documentation PDF | OEM vendor review request — placeholder copy on site already directs them to email for it |
| Upstash rate limit on contact form | If spam submissions appear |

---

## Build history

| Date | What shipped |
|---|---|
| 2026-04-15 | Initial Next.js scaffold, Vercel deploy, custom domain + SSL |
| 2026-04-15 | Full landing page (home / about / contact), contact form w/ Resend, brand.md, socials in footer, favicon + OG image from logo |

---

## Who to ask

- Jason Ennis (Founder, Dealer Principal) — all product / copy / business decisions
- Mailing address: 2575 N. Orange Blossom Trail, Kissimmee, FL 34744
- Public contact: hello@1885.ai
