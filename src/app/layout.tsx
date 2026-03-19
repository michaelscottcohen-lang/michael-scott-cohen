import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Scott Cohen — Co-Founder & CEO, Harper+Scott",
  description:
    "Michael Scott Cohen is the Co-Founder & CEO of Harper+Scott Inc., a creative agency valued at $57.5M. YPO member, entrepreneur, and brand builder working with Sephora, L'Oreal Paris, and Fortune 500 companies.",
  openGraph: {
    title: "Michael Scott Cohen — Co-Founder & CEO, Harper+Scott",
    description:
      "Entrepreneur, brand builder, and Co-Founder of Harper+Scott Inc. Building iconic branded experiences for the world's most recognized companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
