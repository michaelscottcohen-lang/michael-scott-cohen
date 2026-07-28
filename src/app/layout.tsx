import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Serif — the voice: headlines + essay prose (with italic accents)
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

// Sans — structure: nav, UI, labels
const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Mono — data: dates, durations, section indices, the ticker
const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const TITLE = "Michael Scott Cohen — Builder, Operator, Investor";
const DESCRIPTION =
  "Michael Scott Cohen is a New York builder, operator, investor, and co-founder of Harper+Scott. The record, operating principles, and The Operator's Note.";

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelscottcohen.com"),
  title: {
    default: TITLE,
    template: "%s — Michael Scott Cohen",
  },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    siteName: "Michael Scott Cohen",
    url: "https://michaelscottcohen.com",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  authors: [{ name: "Michael Scott Cohen" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${schibsted.variable} ${plex.variable} grain antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
