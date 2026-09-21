import {
  CALENDLY_URL,
  EMAIL,
  LINKEDIN_URL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { getDictionary, type Locale } from "@/lib/i18n";

export const buildJsonLd = (locale: Locale) => {
  const t = getDictionary(locale);
  const pageUrl = locale === "es" ? `${SITE_URL}/es` : SITE_URL;
  const inLanguage = locale === "es" ? "es" : "en";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: t.seo.description,
        email: EMAIL,
        sameAs: [LINKEDIN_URL],
        founder: {
          "@type": "Person",
          name: "Tasos Valtinos",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: t.seo.description,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage,
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t.seo.title,
        description: t.seo.description,
        inLanguage,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: {
          "@type": "Thing",
          name: t.seo.jsonLdAbout,
        },
        audience: {
          "@type": "Audience",
          audienceType: t.seo.jsonLdAudience,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${pageUrl}/opengraph-image`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${SITE_NAME} ocean freight research`,
        url: SITE_URL,
        description: t.seo.jsonLdService,
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
          name: t.seo.jsonLdOffer,
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        inLanguage,
        mainEntity: t.faq.items.map((item) => ({
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
};
