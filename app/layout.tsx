// Root layout: cream paper background, Fraunces + Geist, and site metadata for cold-call follow-up.
import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Greek Ships XYZ",
  description:
    "Research conversations with import managers, FMCG buyers, and supply chain leads at small wholesale firms about ocean cargo.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={`${fraunces.variable} ${geist.variable} antialiased`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
