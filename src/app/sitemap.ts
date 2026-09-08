import type { MetadataRoute } from "next";
import { companies } from "@/lib/company-pages";
import { insights } from "@/lib/insights";
import { CONTENT_DATES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: CONTENT_DATES.home,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE_URL}/images/michael-hero-latest.jpg`],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: CONTENT_DATES.about,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/newsletter`,
      lastModified: CONTENT_DATES.seoExpansion,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: CONTENT_DATES.seoExpansion,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/companies`,
      lastModified: CONTENT_DATES.seoExpansion,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [
    ...core,
    ...insights.map((item) => ({
      url: `${SITE_URL}/insights/${item.slug}`,
      lastModified: item.published,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...companies.map((item) => ({
      url: `${SITE_URL}/companies/${item.slug}`,
      lastModified: CONTENT_DATES.seoExpansion,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
