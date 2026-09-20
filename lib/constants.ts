export const CALENDLY_URL = "https://calendly.com/tasos-valtinos/30min";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/tasos-valtinos-24572b112/";
export const SITE_NAME = "Greek Ships XYZ";

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : null;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  vercelUrl ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const SITE_TITLE =
  "Unverified Ocean Freight Charges After Delivery | Greek Ships XYZ";

export const SITE_DESCRIPTION =
  "Ocean freight charges billed after delivery that wholesale importers cannot verify: CBM remeasurement, demurrage, detention, customs exam, war-risk. For DDP/CIF import managers at firms of 11–50 people.";
