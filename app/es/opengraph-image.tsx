import { buildOgImage, OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt =
  "Greek Ships XYZ — flete marítimo más rentable para pymes";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

const OpenGraphImage = () => buildOgImage("es");

export default OpenGraphImage;
