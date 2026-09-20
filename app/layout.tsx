// Root layout: fonts, SEO metadata, locale-aware lang, JSON-LD, and skip link.
import JsonLd from "@/components/JsonLd";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Fraunces, Geist } from "next/font/google";
import { headers } from "next/headers";
import type { Viewport } from "next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "800"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f6f0e4",
  width: "device-width",
  initialScale: 1,
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const headerList = await headers();
  const locale: Locale = headerList.get("x-locale") === "es" ? "es" : "en";
  const t = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${geist.variable} antialiased`}
        suppressHydrationWarning
      >
        <JsonLd locale={locale} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
        >
          {t.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
