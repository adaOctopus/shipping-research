// Injects Organization, WebPage, Service, and FAQ JSON-LD for Google rich results.
import { type Locale } from "@/lib/i18n";
import { buildJsonLd } from "@/lib/seo";

type JsonLdProps = {
  locale: Locale;
};

const JsonLd = ({ locale }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }}
  />
);

export default JsonLd;
