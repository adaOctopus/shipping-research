import { SITE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/es`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
];

export default sitemap;
