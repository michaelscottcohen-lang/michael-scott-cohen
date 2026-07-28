import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "./v4.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const TITLE = "Michael Scott Cohen — Builder, Operator, Investor";
const DESCRIPTION =
  "Michael Scott Cohen is a New York founder, operator, investor, and co-founder of Harper+Scott. Watch recent videos, read selected posts, and subscribe to The Operator's Note.";

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
