import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/site-nav";
import StructuredData from "@/components/structured-data";
import { companies, getCompany } from "@/lib/company-pages";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return companies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return {};
  const title = `${company.name} — Company Record`;
  const url = `${SITE_URL}/companies/${company.slug}`;
  return {
    title,
    description: company.description,
    alternates: { canonical: `/companies/${company.slug}` },
    openGraph: { title, description: company.description, url, type: "article", images: [DEFAULT_SOCIAL_IMAGE] },
    twitter: { card: "summary_large_image", title, description: company.description, images: [DEFAULT_SOCIAL_IMAGE] },
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();
  const url = `${SITE_URL}/companies/${company.slug}`;
  return (
    <>
      <SiteNav />
      <StructuredData data={[
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${url}#page`,
          url,
          name: `${company.name} — Company Record`,
          description: company.description,
          about: { "@id": `${url}#company` },
          author: { "@id": `${SITE_URL}/#person` },
          isPartOf: { "@id": `${SITE_URL}/#website` },
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${url}#company`,
          name: company.name,
          description: company.description,
          subjectOf: company.sources.map((source) => ({ "@type": "Article", url: source.href })),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Companies", item: `${SITE_URL}/companies` },
            { "@type": "ListItem", position: 3, name: company.name, item: url },
          ],
        },
      ]} />
      <main className="content-page article-page">
        <header className="content-shell content-hero article-hero">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/companies">Companies</Link></nav>
          <p className="content-kicker">{company.category}</p>
          <h1>{company.name}</h1>
          <p className="content-deck">{company.description}</p>
          <div className="company-facts"><p><strong>Michael’s role</strong><span>{company.role}</span></p><p><strong>Public status</strong><span>{company.status}</span></p></div>
        </header>
        <div className="article-body content-shell">
          <section>
            <h2>Operating lessons</h2>
            <ul>{company.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul>
          </section>
          <section>
            <h2>Public sources</h2>
            <p>These links support the public company record. Company valuation, acquisition value, revenue, and personal proceeds are different facts and should not be treated as interchangeable.</p>
            <ul className="source-list">{company.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label} <span aria-hidden="true">↗</span></a></li>)}</ul>
          </section>
          <p><Link className="text-link" href="/insights">Read Michael’s operator insights <span aria-hidden="true">→</span></Link></p>
        </div>
      </main>
    </>
  );
}
