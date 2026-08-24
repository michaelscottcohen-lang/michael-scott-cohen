import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allowAll = [
    "Googlebot",
    "Bingbot",
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
  ].map((userAgent) => ({ userAgent, allow: "/" }));

  return {
    rules: [{ userAgent: "*", allow: "/" }, ...allowAll],
    sitemap: "https://michaelscottcohen.com/sitemap.xml",
    host: "https://michaelscottcohen.com",
  };
}