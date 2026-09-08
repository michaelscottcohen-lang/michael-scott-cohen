import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}