import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";
import "./globals.css";
import "./v4.css";
import "./content.css";

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

const entityGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Michael Scott Cohen",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/michael-hero-latest.jpg`,
      description: DESCRIPTION,
      jobTitle: "Founder, operator, and investor",
      sameAs: [
        "https://www.linkedin.com/in/mcohen3/",
        "https://www.instagram.com/michaelscottcohen_official/",
        "https://www.youtube.com/@michaelscottcohen",
        "https://www.tiktok.com/@michaelscottcohen",
        "https://x.com/TheMichaelCohen",
        "https://www.crunchbase.com/person/michael-scott-cohen",
      ],
      award: "2023 Advertising Specialty Institute Distributor Entrepreneur of the Year",
      knowsAbout: [
        "Entrepreneurship",
        "Business operations",
        "Branded merchandise",
        "Consumer packaged goods",
        "Artificial intelligence",
      ],
      subjectOf: [
        "https://members.asicentral.com/news/web-exclusive/july-2023/distributor-entrepreneurs-of-the-year-2023-jon-alagem-michael-scott-cohen-harper-plus-scott/",
        "https://www.businessinsider.com/harper-scott-john-howard-lew-frankfort-coach-sephora-swag-2019-9",
        "https://www.prnewswire.com/news-releases/blue-monkey-beverage-acquires-local-weather-sports-drink-302702909.html",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Michael Scott Cohen",
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
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
    url: SITE_URL,
    images: [{ url: DEFAULT_SOCIAL_IMAGE, width: 1200, height: 630, alt: "Michael Scott Cohen — builder, operator, and investor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  authors: [{ name: "Michael Scott Cohen" }],
  creator: "Michael Scott Cohen",
  publisher: "Michael Scott Cohen",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entityGraph).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${newsreader.variable} ${schibsted.variable} ${plex.variable} grain antialiased`}
      >
        {children}
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
