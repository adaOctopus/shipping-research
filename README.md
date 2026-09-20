# Greek Ships XYZ

A minimal landing page for **Greek Ships XYZ** — research into ocean cargo for small wholesale import-export companies. The site exists so a cold call can point somewhere real: who we talk to, what we are studying, and a 30-minute Calendly conversation.

It is not a freight product. It is a research front door.

## Who it is for

Operators at wholesale import-export firms of about **11–50 people**:

- Import managers
- FMCG buyers
- Import buyers
- Purchasing managers
- Supply chain managers

The research is about what happens after a container is booked with a forwarder and a maritime carrier: surprise charges, thin tracking, carrier issues trapped behind the forwarder, customs delays, and working capital that leaves before the cargo can earn.

## What the page contains

A single route (`/`) with three sections and a footer:

1. **Research** — headline, audience, and an original containership diagram with callouts (`charges`, `tracking`, `carriers`, `capital`)
2. **The friction** — four operational problems, written the way operators describe them
3. **A conversation** — who a call is for, what it is, and what it is not
4. **Footer** — antique-ship watermark, research note, Calendly

Primary action everywhere: [Book a 30-minute call](https://calendly.com/tasos-valtinos/30min)

## Design

The palette and metaphor come from a trade-book cover: warm cream paper, hull navy, signal red, and a modern containership drawn as a diagram. The layout is quiet like Waybill (numbered sections, a journey strip, leftover space) and the copy is grounded like Peer Freight. Colored containers live only on the ship — not in the UI chrome.

- Display type: Fraunces
- UI type: Geist
- Journey strip: Booked — On water — Customs — On dock

## Structure

```
app/
  layout.tsx              Root layout, fonts, metadata
  page.tsx                Composes header, three sections, footer
  globals.css             Cream / navy / red tokens
components/
  Header.tsx              Sticky wordmark, journey strip, Book a call
  Hero.tsx                Section 01 — research pitch + ship
  ShipDiagram.tsx         Original SVG containership and labels
  Friction.tsx            Section 02 — four ocean-cargo problems
  Conversation.tsx        Section 03 — audience and call framing
  Footer.tsx              Watermark, research note, Calendly
  BookCallButton.tsx      Shared Calendly link
lib/
  constants.ts            Calendly URL and site name
```

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

Next.js 15, App Router, TypeScript, Tailwind CSS v4. No backend and no form — Calendly is the only action.
