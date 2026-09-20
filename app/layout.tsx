// Root layout: fonts, full SEO metadata, JSON-LD, and skip link.
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { Fraunces, Geist } from "next/font/google";
import type { Viewport } from "next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: "#f6f0e4",
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${fraunces.variable} ${geist.variable} antialiased`}
      suppressHydrationWarning
    >
      <JsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      {children}
    </body>
  </html>
);

export default RootLayout;
