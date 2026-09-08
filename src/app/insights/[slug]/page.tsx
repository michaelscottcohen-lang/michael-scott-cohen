import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/site-nav";
import SignupForm from "@/components/signup-form";
import StructuredData from "@/components/structured-data";
import { getInsight, insights } from "@/lib/insights";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  const url = `${SITE_URL}/insights/${insight.slug}`;
  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: { title: insight.title, description: insight.description, url, type: "article", publishedTime: insight.published, authors: [SITE_URL], images: [DEFAULT_SOCIAL_IMAGE] },
    twitter: { card: "summary_large_image", title: insight.title, description: insight.description, images: [DEFAULT_SOCIAL_IMAGE] },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const url = `${SITE_URL}/insights/${insight.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      url,
      headline: insight.title,
      description: insight.description,
      datePublished: insight.published,
      dateModified: insight.published,
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
        { "@type": "ListItem", position: 3, name: insight.title, item: url },
      ],
    },
  ];

  return (
    <>
      <SiteNav />
      <StructuredData data={schema} />
      <main className="content-page article-page">
        <article>
          <header className="content-shell content-hero article-hero">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/insights">Insights</Link></nav>
            <p className="content-kicker">{insight.eyebrow}</p>
            <h1>{insight.title}</h1>
            <p className="content-deck">{insight.lede}</p>
            <div className="content-meta"><span>By Michael Scott Cohen</span><time dateTime={insight.published}>{insight.published}</time><span>{insight.readTime}</span></div>
          </header>
          <div className="article-body content-shell">
            {insight.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
          </div>
        </article>
        <section className="content-shell inline-cta">
          <div><p className="content-kicker">The Operator’s Note</p><h2>Keep reading inside the work.</h2><p>One honest operator lesson, sent by email.</p></div>
          <SignupForm id={`article-${insight.slug}-email`} variant="button" label="Subscribe free" />
        </section>
      </main>
    </>
  );
}
