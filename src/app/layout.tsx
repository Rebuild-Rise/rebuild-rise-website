import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { hero } from "@/content/siteContent";

// Fraunces loads as a true variable font with its optical-size axis (ledger
// D5): one file replaces three static weights and font-optical-sizing does
// real work at display sizes.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rebuildandrise.ng"),
  title: "Rebuild & Rise — We build what stays",
  description: hero.subhead,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
