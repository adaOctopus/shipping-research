# Greek Ships XYZ

A landing page for **Greek Ships XYZ** — ocean freight conversations with **small and mid-size ocean freight forwarders**. The site exists so a cold call can point somewhere real: who we talk to, what we are studying, and a 30-minute Calendly conversation.

Default language is **English** (`/`). The full page also exists in **Spanish** (`/es`), with a language switch in the top right of the header.

It is not a freight product. It is a research front door, written so operations, destination, and account teams at ocean forwarders can also find it on Google.

## Who it is for

People running **import operations** at small and mid-size ocean freight forwarders:

- Operations managers
- Branch managers
- Import coordinators
- Destination agents
- Pricing and quoting
- Account managers

The research is about how those houses manage import files while cargo is on the water — and what happens when destination charges land as a crazy invoice on wholesale import clients, or quietly eat the forwarder’s margin. CBM remeasurement, demurrage and detention, customs exam, war-risk, and tracking that is a pin instead of a picture.

## What the page contains

A single English route (`/`) and a Spanish equivalent (`/es`), each with four sections and a footer:

1. **Research** — headline, audience, and an original containership diagram with callouts (`charges`, `tracking`, `carriers`, `capital`)
2. **The friction** — four operational problems, written the way forwarders describe them
3. **A conversation** — who a call is for, what it is, and what it is not
4. **FAQ** — destination charges vs client relationships, CBM remeasurement, D&amp;D, handling a line you cannot verify, who this is for
5. **Footer** — antique-ship watermark, research note, Calendly button, email, LinkedIn

Primary action everywhere: [Book a 30-minute call](https://calendly.com/tasos-valtinos/30min)

## SEO

The page is built for organic search around **import operations at small and mid-size ocean freight forwarders** — destination charges, client invoices after delivery, margin leakage, cargo on the water. Copy is grounded in operator language, not generic freight-charge stuffing. Air freight, GST, and courier queries are out of scope.

- Title, description, canonical, Open Graph, Twitter card, robots, and `hreflang` for `en` / `es`
- Share thumbnail is a 1200×630 hero image (`/opengraph-image`, `/es/opengraph-image`) so LinkedIn, X, and Slack show the page — not a text card
- `sitemap.xml` (English and Spanish URLs) and `robots.txt`
- JSON-LD for Organization, WebSite, WebPage, ProfessionalService, and FAQPage
- A visible, crawlable FAQ (content is in the HTML even when collapsed)
- Semantic landmarks: skip link, `header`, `main`, `footer`, one `h1`

Set the public origin so Google gets the right canonical and sitemap URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

On Vercel, production URL is used automatically if that variable is empty.

## Design

The page sits on warm cream paper and hull navy. Accents come from a six-color talk palette (blush, coral, mustard, teal, lavender, sage) used on the containership stacks. The only loud UI color is an earthy clay orange on the Calendly buttons. The layout is quiet like Waybill (numbered sections, a journey strip, leftover space) and the copy is grounded like Peer Freight. Colored containers live only on the ship — not in the UI chrome.

- Display type: Fraunces
- UI type: Geist
- Journey strip: Booked — On water — Customs — On dock

## Structure

```
app/
  layout.tsx              Root layout, fonts, metadata, JSON-LD, skip link
  page.tsx                English landing page
  es/page.tsx             Spanish landing page
  es/opengraph-image.tsx  Spanish social share image
  globals.css             Cream / navy / clay-orange tokens and ship palette
  sitemap.ts              /sitemap.xml
  robots.ts               /robots.txt
  manifest.ts             Web app manifest
  opengraph-image.tsx     Social share image
  icon.tsx                Favicon
  twitter-image.tsx       Twitter share image
public/
  linkedin-profile.png    512×512 company mark — cream GS on navy hull / teal keel
  favicon-512.png         512×512 favicon — cream GS on hull navy
components/
  Header.tsx              Sticky wordmark, journey strip, flag switch, Book a call
  LanguageSwitch.tsx      UK / Spain flag toggle for English and Spanish
  HomePage.tsx            Locale-aware page composition
  Hero.tsx                Section 01 — research pitch + ship
  ShipDiagram.tsx         Original SVG containership and labels
  Friction.tsx            Section 02 — four ocean-cargo problems
  Conversation.tsx        Section 03 — audience and call framing
  Faq.tsx                 Ocean freight questions for small forwarders
  JsonLd.tsx              Schema.org graph
  Footer.tsx              Watermark, research note, Calendly, email, LinkedIn
  BookCallButton.tsx      Shared Calendly link
lib/
  constants.ts            URLs, site name, title, description
  i18n/                   English and Spanish dictionaries
  og.tsx                  Open Graph / Twitter share image
  seo.ts                  Locale-aware JSON-LD
  metadata.ts             Next.js Metadata builder
middleware.ts             Sets x-locale for html lang
```

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (English) or [http://localhost:3000/es](http://localhost:3000/es) (Spanish).

```bash
npm run build
npm start
```

Next.js 15, App Router, TypeScript, Tailwind CSS v4. No backend and no form — Calendly is the only action.
