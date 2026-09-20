// Injects Organization, WebPage, Service, and FAQ JSON-LD for Google rich results.
import { jsonLd } from "@/lib/seo";

const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
);

export default JsonLd;
