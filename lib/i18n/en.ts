import type { Dictionary } from "@/lib/i18n/types";

const en: Dictionary = {
  skipToContent: "Skip to content",
  header: {
    homeAria: "Greek Ships XYZ home",
    journeyAria: "Shipment journey",
    stages: ["Booked", "On water", "Customs", "On dock"],
    bookCall: "Book a call",
    languageAria: "Language",
    languageEn: "English",
    languageEs: "Español",
  },
  hero: {
    h1: "Making ocean freight more profitable for forwarders.",
    h1Emphasis: "profitable",
    body: "When cargo lands and the invoice looks crazy, wholesale import clients walk. While the box is still at sea, tracking, carriers, and cash eat the margin you thought you had. We research how small and mid-size ocean forwarders actually run import operations.",
    cta: "BOOK A CALL WITH US",
  },
  ship: {
    title: "Ocean containership showing charges, tracking, carriers, and capital for freight forwarders",
    desc: "A modern ocean containership with colored stacks and callouts for ocean freight charges, tracking, carriers, and working capital at small and mid-size freight forwarders.",
    labels: {
      charges: "charges",
      tracking: "tracking",
      carriers: "carriers",
      capital: "capital",
    },
  },
  friction: {
    h2: "Small and mid-size ocean forwarders face these challenges.",
    problems: [
      {
        number: "01",
        title: "Charges that land on the client",
        body: "You quoted one number. Destination throws another: a CBM remeasurement, D&D under the wrong free time, a customs exam, a war-risk line. The importer sees a crazy invoice with your name on it. The relationship takes the hit, whether the line was yours, the agent’s, or the carrier’s.",
      },
      {
        number: "02",
        title: "Tracking that is a pin, not a picture",
        body: "The client calls because a forwarded link shows a last known location. It does not tell you whether the box will make the cutoff, sit at transshipment, or miss the truck — and you are the one who has to answer.",
      },
      {
        number: "03",
        title: "Stuck between the importer and the line",
        body: "Proof sits with the carrier or the LCL console. The importer talks to you. Exceptions bounce. Days disappear. Undocumented lines either eat your margin or become the invoice that blows up the account.",
      },
      {
        number: "04",
        title: "Cash that leaves before cargo earns",
        body: "Freight, duties, and deposits go out while the container is still at sea. Delay is not only a late delivery. It is working capital sitting in a box, and a client who is already watching the clock.",
      },
    ],
  },
  conversation: {
    h2: "Chat with us to keep import clients and margin when ocean cargo lands.",
    body: "We speak with operations managers, branch managers, import coordinators, and destination agents at small and mid-size ocean freight forwarders. This is discovery, not a pitch. If the last import file came with a destination invoice that shocked the client — or a line that quietly ate your margin — we would like to hear how that actually works.",
    cta: "Book a call",
    whoLabel: "Who this is for",
    roles: [
      "Operations managers",
      "Branch managers",
      "Import coordinators",
      "Destination agents",
      "Pricing and quoting",
      "Account managers",
    ],
    whoBody:
      "If you run ocean import files for wholesale clients — and cargo-on-the-water or post-delivery charges are squeezing the relationship or the margin — that is the conversation.",
  },
  faq: {
    h2: "Import operations on ocean cargo - what small forwarders actually see.",
    intro:
      "From conversations we want to have with ops, destination, and account teams at small and mid-size ocean forwarders: post-delivery charges that shock import clients, margin leakage, tracking while the box is at sea, and how a house handles a line it cannot verify.",
    items: [
      {
        question:
          "Why do destination charges blow up wholesale import accounts?",
        answer:
          "The importer was quoted a number. After delivery another invoice arrives: a CBM or weight remeasurement that does not match the packing list, demurrage and detention under the wrong free-time terms, a customs exam markup, a war-risk or rerouting surcharge, a destination-mismatch fee when the MBL says one port and the box is at another.\n\nThe proof that would settle it usually exists on the carrier file or in your house. It is not always attached to the client invoice. The wholesale importer does not see a carrier-to-forwarder problem. They see you. Accounts that ship often enough for this to add up — and that do not have someone checking every line — are the ones that leave.",
      },
      {
        question:
          "How often do surprise lines hit a small forwarder’s files?",
        answer:
          "Not an edge case and not universal. Operators who watch closely see demurrage on only 1–2 of about 20 monthly shipments. Others report surprise line items on roughly 1 in 5 shipments lately, and no longer treat them as accidents. Across those accounts the recurring rate sits around 5–20% of shipments.\n\nOn a small or mid-size ocean desk, undocumented lines get absorbed as margin or passed through. Either way they show up: as a thinner file, or as a client who thinks the invoice is crazy. Asking the line or the console for backup first makes a lot of them vanish. Full invoice audit work in the market puts recoverable freight spend in the 3–7% range when the paperwork is actually pulled.",
      },
      {
        question:
          "What is a CBM or dimensional remeasurement fee on ocean freight?",
        answer:
          "Destination remeasurement changes the billed volume or weight versus what was declared. On LCL it is treated as standard operating procedure; a post-delivery fee around $420 is a commonly reported size, including cases where CBM already matched the packing list exactly. The measurement record almost always exists. It is not offered unless someone asks.\n\nThe remeasured number can come out lower as well as higher — palletizing changes measured volume either way — so this is at minimum a variance that is not disclosed by default, not always a scheme. On FCL, ocean freight is typically flat regardless of CBM used inside the box; an extra CBM charge after delivery is often a signal the move was actually LCL. Non-stackable pallets are sometimes costed at a conventional height (about 220–250 cm) regardless of real height — check that convention before treating every CBM gap as padding, and before you send it on to the importer.",
      },
      {
        question:
          "What are demurrage, detention, and other post-delivery freight charges?",
        answer:
          "Demurrage and detention are storage and equipment charges past the last free day. They are only a slice of what shows up after delivery. The rest of the pattern includes: customs exam charges where receipts are withheld; weather or force-majeure storage billed above market during a documented closure; drayage detention with no real-time notice that free time expired; war-risk and change-of-destination fees on boxes that never approached the risk zone; destination-mismatch release fees when the MBL and the actual discharge port disagree; and Incoterms / free-time mismatches, where the destination agent applies a different period than what was agreed at origin. Small and mid-size houses have little leverage with the line. Large shippers get waivers. You still have to explain the file to the client.",
      },
      {
        question:
          "How do you handle an ocean charge you cannot verify?",
        answer:
          "The same script keeps surfacing across LCL and FCL. Get the measurement or weighbridge record tied to that exact shipment — not a restated number. Get the tariff or rate confirmation that was actually agreed. Get the calculation behind the dollar figure, including the W/M basis (weight vs. measurement, whichever is higher), broken out if palletization is involved. Then decide what you absorb and what you pass through.\n\nWith the client, frame it as non-adversarial: you are not dumping a surprise, the recorded dimensions do not match, and the paperwork should clear it. Pass through only what you can show. Hold the contested line, in writing, until the file is clean.\n\nFor demurrage and detention in the US, the FMC’s May 2024 rule has an unavailable-container provision: a billing party cannot charge D&D for any period the container was not actually available (customs exam, terminal or rail delay outside your control). Pull terminal availability timestamps and the pickup or rail order dated before the last free day. Cite the unavailable-container provision by name. Most steamship lines reverse on the first written dispute. If not, a CADRS complaint with the FMC is a 30–60 day path.\n\nNot every missing document is bad faith — some charges are still pending upstream from carrier to house. And proof alone is not always enough if holding the box to argue the line would blow the importer’s stock.",
      },
      {
        question: "Who is this research for — and who is it not?",
        answer:
          "Small and mid-size ocean freight forwarders who run import operations for wholesale clients: operations managers, branch managers, import coordinators, destination agents, pricing, and account managers. The people who sit between the line and the importer while cargo is on the water, and who send the invoice when it lands.\n\nIt is not mega 3PLs with a dedicated audit desk, not steamship lines, not the wholesale importer themselves, and not FOB origin houses whose liability ends at the load port. If your import files, your client relationships, or your margin move when a box is at sea or when destination charges appear — that is the conversation.",
      },
    ],
  },
  footer: {
    blurb:
      "Research with small and mid-size ocean freight forwarders. We talk about import operations, client invoices after delivery, and margin while cargo is still on the water.",
    bookCall: "Book a call",
    linkedinAria: "GShips Inc on LinkedIn",
    emailAria: "Email Tasos Valtinos",
  },
  seo: {
    title: "Import Operations for Small Ocean Freight Forwarders",
    description:
      "Research with small and mid-size ocean freight forwarders on import operations: destination charges that shock wholesale clients, margin leakage, tracking while cargo is at sea. Book a 30-minute conversation.",
    keywords: [
      "ocean freight forwarder",
      "small freight forwarder",
      "mid-size freight forwarder",
      "ocean freight operations",
      "import operations",
      "freight forwarding margins",
      "destination charges",
      "ocean freight charges after delivery",
      "CBM remeasurement",
      "demurrage and detention",
      "LCL destination charges",
      "freight forwarder client invoice",
      "NVOCC operations",
      "destination agent",
      "ocean cargo tracking",
      "wholesale import forwarding",
    ],
    jsonLdAbout:
      "Import operations at small and mid-size ocean freight forwarders",
    jsonLdAudience:
      "Operations managers, branch managers, import coordinators, and destination agents at small and mid-size ocean freight forwarders",
    jsonLdService:
      "Research conversations with small and mid-size ocean freight forwarders about import operations: post-delivery charges that affect wholesale client relationships, margin leakage, and cargo on the water.",
    jsonLdOffer: "30-minute ocean freight conversation",
  },
};

export default en;
