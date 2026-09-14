import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { hero } from "@/content/siteContent";
import { MobileStickyCta } from "@/components/navigation/MobileStickyCta";
import { PrivacyControls } from "@/components/privacy/PrivacyControls";

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
  applicationName: "Rebuild & Rise Humanitarian Initiative",
  authors: [{ name: "Rebuild & Rise Humanitarian Initiative" }],
  creator: "Rebuild & Rise Humanitarian Initiative",
  publisher: "Rebuild & Rise Humanitarian Initiative",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Rebuild & Rise Humanitarian Initiative",
    title: "Rebuild & Rise — We build what stays",
    description: hero.subhead,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebuild & Rise — We build what stays",
    description: hero.subhead,
  },
  category: "nonprofit",
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
      <body className="min-h-full flex flex-col">
        {children}
        <MobileStickyCta />
        <PrivacyControls />
      </body>
    </html>
  );
}
