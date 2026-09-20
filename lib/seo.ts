import {
  CALENDLY_URL,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants";

export const SEO_KEYWORDS = [
  "ocean freight charges",
  "sea freight charges",
  "container freight charges",
  "additional freight charges",
  "freight charges after delivery",
  "CBM remeasurement",
  "dimensional remeasurement fee",
  "demurrage and detention",
  "war risk surcharge",
  "customs exam charges",
  "LCL destination charges",
  "freight invoice dispute",
  "DDP importer",
  "import manager",
  "purchasing manager",
  "FMCG buyer",
  "wholesale import export",
  "SMB importer",
];

export const FAQ_ITEMS = [
  {
    question:
      "Why do ocean freight charges appear after delivery?",
    answer:
      "Importers who ship regularly by ocean freight get billed after delivery for charges they cannot independently verify. The most common is a CBM or weight remeasurement fee that does not match the packing list. Also common: demurrage and detention billed under the wrong free-time terms, customs exam markups, war-risk and rerouting surcharges, and destination-mismatch fees when the MBL says one port and the box is stuck at another.\n\nThe proof that would settle it usually exists on the carrier or forwarder’s file. It is not sent unless the importer already knows to ask. Companies with someone auditing every invoice line catch this with a spreadsheet. The people who get hurt ship often enough for it to add up, and are not organized enough to check every line — typically wholesale import-export firms of about 11 to 50 people.",
  },
  {
    question: "How common are surprise freight charges on ocean shipments?",
    answer:
      "Not an edge case and not universal. Operators who watch closely see demurrage on only 1–2 of about 20 monthly shipments. Others report surprise line items on roughly 1 in 5 shipments lately, and no longer treat them as accidents. Across those accounts the recurring rate sits around 5–20% of shipments.\n\nMid-size forwarders are the more frequent offenders because unverified charges are often baked into the margin model. Larger names are cleaner, but charges still slip through if nobody checks the paperwork. Asking for backup documentation first makes a lot of them vanish. Full invoice audit work in the market puts recoverable freight spend in the 3–7% range when the paperwork is actually pulled.",
  },
  {
    question:
      "What is a CBM or dimensional remeasurement fee on ocean freight?",
    answer:
      "Destination remeasurement changes the billed volume or weight versus what you declared. On LCL it is treated as standard operating procedure; a post-delivery fee around $420 is a commonly reported size, including cases where CBM already matched the packing list exactly. The measurement record almost always exists. It is not offered unless you ask.\n\nThe remeasured number can come out lower as well as higher — palletizing changes measured volume either way — so this is at minimum a variance that is not disclosed by default, not always a scheme. On FCL, ocean freight is typically flat regardless of CBM used inside the box; an extra CBM charge after delivery is often a signal the move was actually LCL. Non-stackable pallets are sometimes costed at a conventional height (about 220–250 cm) regardless of real height — check that convention before treating every CBM gap as padding.",
  },
  {
    question:
      "What are demurrage, detention, and other post-delivery freight charges?",
    answer:
      "Demurrage and detention are storage and equipment charges past the last free day. They are only a slice of what shows up after delivery. The rest of the pattern includes: customs exam charges where receipts are withheld; weather or force-majeure storage billed above market during a documented closure; drayage detention with no real-time notice that free time expired; war-risk and change-of-destination fees on boxes that never approached the risk zone; destination-mismatch release fees when the MBL and the actual discharge port disagree; and Incoterms / free-time mismatches, where the destination agent applies a different period than what was agreed at origin. Small and mid-size shippers have little leverage. Large shippers get waivers.",
  },
  {
    question:
      "How do you dispute ocean freight charges you cannot verify?",
    answer:
      "The same script keeps surfacing across LCL, FCL, and couriers. Ask for the measurement or weighbridge record tied to that exact shipment — not a restated number from the forwarder. Ask for the tariff or rate confirmation that was actually agreed. Ask for the calculation behind the dollar figure, including the W/M basis (weight vs. measurement, whichever is higher), broken out if palletization is involved.\n\nFrame it as non-adversarial: you are not refusing to pay, your recorded dimensions do not match, and the paperwork should clear it. Pay whatever is not in dispute. Hold only the contested line, in writing.\n\nFor demurrage and detention in the US, the FMC’s May 2024 rule has an unavailable-container provision: a billing party cannot charge D&D for any period the container was not actually available (customs exam, terminal or rail delay outside your control). Pull terminal availability timestamps and the pickup or rail order dated before the last free day. Cite the unavailable-container provision by name. Most steamship lines reverse on the first written dispute. If not, a CADRS complaint with the FMC is a 30–60 day path.\n\nNot every missing document is bad faith — some charges are still pending upstream from carrier to forwarder. And proof alone is not always enough if disputing the charge would hold the box and risk a stockout.",
  },
  {
    question:
      "Who pays extra freight charges under FOB versus DDP — and who is this for?",
    answer:
      "Under FOB, extra destination fees are paid by the importer’s own company — that is the term. Under DDP, extra fees should be paid by the forwarder. CIF and DDP importers who hire and pay the destination-side forwarder are the people this hits: import managers, procurement and sourcing managers, purchasing managers, FMCG buyers, supply chain managers, and buyer-side logistics coordinators at wholesale import-export firms of 11 to 50 people.\n\nIt is not the FOB exporter (liability ends at origin), not bulk charter-party traders on GAFTA contracts (a different demurrage mechanism), and not forwarders or carriers. Most “this does not happen to me” answers trace back to Incoterms putting the person outside the exposure — not to the problem being rare.",
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      sameAs: [LINKEDIN_URL],
      founder: {
        "@type": "Person",
        name: "Tasos Valtinos",
        url: LINKEDIN_URL,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: {
        "@type": "Thing",
        name: "Unverified ocean freight charges billed after delivery",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "DDP and CIF import managers, purchasing managers, and FMCG buyers at wholesale import-export companies of 11 to 50 people",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${SITE_NAME} ocean freight conversations`,
      url: SITE_URL,
      description:
        "Research conversations with DDP and CIF importers about ocean freight charges billed after delivery that cannot be independently verified — remeasurement, demurrage, detention, customs exam, war-risk, and destination mismatch.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 11,
          maxValue: 50,
        },
      },
      offers: {
        "@type": "Offer",
        url: CALENDLY_URL,
        name: "30-minute ocean freight conversation",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.replace(/\n\n/g, " "),
        },
      })),
    },
  ],
};
