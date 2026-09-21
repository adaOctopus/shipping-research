export const CALENDLY_URL = "https://calendly.com/tasos-valtinos/30min";
export const LINKEDIN_URL = "https://www.linkedin.com/company/gships-inc";
export const EMAIL = "tasos.valtinos@greekships.xyz";
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
  "Import Operations for Small Ocean Freight Forwarders | Greek Ships XYZ";

export const SITE_DESCRIPTION =
  "Research with small and mid-size ocean freight forwarders on import operations: destination charges that shock wholesale clients, margin leakage, tracking while cargo is at sea. Book a 30-minute conversation.";
