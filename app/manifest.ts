import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: SITE_NAME,
  short_name: "Greek Ships",
  description: SITE_DESCRIPTION,
  start_url: "/",
  display: "standalone",
  background_color: "#f6f0e4",
  theme_color: "#0e2340",
});

export default manifest;
