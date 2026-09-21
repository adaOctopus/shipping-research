export type Locale = "en" | "es";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Dictionary = {
  skipToContent: string;
  header: {
    homeAria: string;
    journeyAria: string;
    stages: [string, string, string, string];
    bookCall: string;
    languageAria: string;
    languageEn: string;
    languageEs: string;
  };
  hero: {
    h1: string;
    h1Emphasis: string;
    body: string;
    cta: string;
  };
  ship: {
    title: string;
    desc: string;
    labels: {
      charges: string;
      tracking: string;
      carriers: string;
      capital: string;
    };
  };
  friction: {
    h2: string;
    problems: { number: string; title: string; body: string }[];
  };
  conversation: {
    h2: string;
    body: string;
    cta: string;
    whoLabel: string;
    roles: string[];
    whoBody: string;
  };
  faq: {
    h2: string;
    intro: string;
    items: FaqItem[];
  };
  footer: {
    blurb: string;
    bookCall: string;
    linkedinAria: string;
    emailAria: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    jsonLdAbout: string;
    jsonLdAudience: string;
    jsonLdService: string;
    jsonLdOffer: string;
  };
};

export const LOCALES: Locale[] = ["en", "es"];

export const localePath = (locale: Locale) => (locale === "es" ? "/es" : "/");
