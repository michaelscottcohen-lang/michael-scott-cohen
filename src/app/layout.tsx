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

const TITLE = "Michael Scott Cohen — Operator, Investor, Harper+Scott";
const DESCRIPTION =
  "Michael Scott Cohen builds the physical things that carry the world's largest brands. Co-Founder & CEO of Harper+Scott ($57.5M). Writing, film, and an unromantic point of view on the work.";

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
