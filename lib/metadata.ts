import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export const buildMetadata = (locale: Locale = "en"): Metadata => {
  const t = getDictionary(locale);
  const path = localePath(locale);
  const pageUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${t.seo.title} | ${SITE_NAME}`,
    description: t.seo.description,
    applicationName: SITE_NAME,
    keywords: t.seo.keywords,
    authors: [{ name: "Tasos Valtinos", url: SITE_URL }],
    creator: "Tasos Valtinos",
    publisher: SITE_NAME,
    category: locale === "es" ? "Flete marítimo" : "Ocean freight",
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: path,
      languages: {
        en: "/",
        es: "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: pageUrl,
      siteName: SITE_NAME,
      title: t.seo.title,
      description: t.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};
