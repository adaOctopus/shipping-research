import { buildOgImage, OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt =
  "Greek Ships XYZ — making ocean freight for SMB importers more profitable";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

const OpenGraphImage = () => buildOgImage("en");

export default OpenGraphImage;
