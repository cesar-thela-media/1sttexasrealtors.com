# 1st Texas Realtors — Website

Production Next.js site for [1sttexasrealtors.com](https://www.1sttexasrealtors.com) — a family-owned real estate brokerage serving Clear Lake, TX and surrounding southeast Houston communities since 2004.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14.2.5 (App Router) |
| Output | Static export (`output: 'export'`) |
| Styling | Tailwind CSS 3.4 |
| Language | TypeScript (strict) |
| Fonts | Playfair Display + Inter via Google Fonts |
| Images | `next/image` with `unoptimized: true` (Unsplash CDN) |
| Lead form | n8n webhook (POST) |
| Hosting | Vercel (static) |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `teal-dark` | `#1C3535` | Primary backgrounds, headings |
| `rust` | `#C4622D` | CTAs, accents, labels |
| `cream` | `#F2EDE3` | Section backgrounds |
| `map-blue` | `#C8DDE9` | Hero variants, stats strips |
| Serif | Playfair Display | Headings, pull quotes |
| Sans | Inter | Body, labels, navigation |

---

## Project Structure

```
app/                        # All pages (Next.js App Router)
├── page.tsx                # Homepage
├── about/
├── agents/
├── clear-lake-tx-homes-for-sale/
├── commercial-property-realtors/
├── communities/
├── contact/                # Lead form → n8n webhook
├── home-buyers/
├── home-staging/
├── homes-for-rent/
│   └── [city]/             # 21 dynamic city pages
├── new-home-construction/
├── privacy-policy/
├── realtor-reviews/
├── realtors-in/
│   └── [city]/             # 21 dynamic city pages
├── relocation-service/
├── resources/
└── seller-services/

components/
├── shared/                 # Reused across all pages
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FooterCTA.tsx
│   └── PageHero.tsx
└── home/                   # Homepage-only sections
    ├── Hero.tsx
    ├── StatsBar.tsx
    ├── Services.tsx
    ├── MapSection.tsx
    ├── AboutSection.tsx
    ├── Testimonial.tsx
    └── Badges.tsx

lib/
├── constants.ts            # CITY_SLUGS (21 cities), NAV_LINKS
└── types.ts                # CityData, RentalCityMeta

public/
├── robots.txt
└── sitemap.xml             # All 61 static routes

scripts/
└── static-serve.js         # Local static file server (post-build preview)
```

---

## Running Locally

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Environment variables

Copy the example and fill in your n8n webhook URL:

```bash
cp .env.local.example .env.local
```

Or create `.env.local` manually:

```
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-id
```

> The site builds and runs without this set — the contact form will show an error message if someone submits without it configured.

### Dev server

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

Outputs static files to `/out`.

### Preview the static build locally

```bash
npm run serve
```

Opens at [http://localhost:3002](http://localhost:3002). This uses the custom `scripts/static-serve.js` server which handles Next.js bracket-named JS chunks correctly on Windows.

### Lint

```bash
npm run lint
```

---

## Deploying to Vercel

### First deploy

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Vercel auto-detects Next.js — no build settings needed (`vercel.json` handles it)
4. Add environment variable:
   - **Key:** `NEXT_PUBLIC_N8N_WEBHOOK_URL`
   - **Value:** your n8n webhook URL
5. Deploy

### Subsequent deploys

Push to `main` — Vercel deploys automatically.

### Custom domain

In Vercel → Project → Settings → Domains → add `1sttexasrealtors.com` and `www.1sttexasrealtors.com`. Update DNS at your registrar to point to Vercel's nameservers.

---

## Pages (61 total)

| Route | Description |
|---|---|
| `/` | Homepage |
| `/about` | About Mark & Sandra |
| `/agents` | Agent profiles |
| `/home-buyers` | Buyer's guide |
| `/seller-services` | Seller services |
| `/home-staging` | Staging consultation |
| `/new-home-construction` | New construction guide |
| `/relocation-service` | Relocation services |
| `/clear-lake-tx-homes-for-sale` | Listings search page |
| `/homes-for-rent` | Rental hub |
| `/homes-for-rent/[city]` | 21 city rental pages |
| `/commercial-property-realtors` | Commercial real estate |
| `/communities` | Community comparison |
| `/realtors-in/[city]` | 21 city realtor pages |
| `/realtor-reviews` | Client reviews |
| `/resources` | Resource guide |
| `/contact` | Lead form (n8n) |
| `/privacy-policy` | Privacy policy |

---

## Lead Form (n8n Webhook)

The contact form at `/contact` POSTs the following JSON to `NEXT_PUBLIC_N8N_WEBHOOK_URL`:

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "(281) 555-0000",
  "message": "Looking for a 3-bed in Seabrook",
  "interest": "Buying a Home",
  "source": "website-contact-form",
  "submittedAt": "2026-06-24T14:32:00.000Z"
}
```

In n8n: create a **Webhook** node → set method to `POST` → copy the production URL → paste into Vercel env vars.

---

## Notes

- `output: 'export'` means this is a fully static site — no server, no API routes
- Images are served directly from Unsplash CDN — swap with owned assets before launch
- `AboutSection` on the homepage has a placeholder polaroid — replace with a real photo of Mark & Sandra
- Google Fonts are loaded via `<link>` in `app/layout.tsx` (not `next/font`) — required due to build-time network restrictions on this machine
