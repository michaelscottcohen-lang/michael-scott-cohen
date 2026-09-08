import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SignupForm from "@/components/signup-form";
import StructuredData from "@/components/structured-data";
import { insights } from "@/lib/insights";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";

const title = "Insights for Founders and Operators";
const description = "Practical frameworks from Michael Scott Cohen on branded merchandise, building and selling companies, relationships, and applied AI workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/insights" },
  openGraph: { title, description, url: `${SITE_URL}/insights`, type: "website", images: [DEFAULT_SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [DEFAULT_SOCIAL_IMAGE] },
};

export default function InsightsPage() {
  return (
    <>
      <SiteNav />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/insights#collection`,
        url: `${SITE_URL}/insights`,
        name: title,
        description,
        author: { "@id": `${SITE_URL}/#person` },
        hasPart: insights.map((item) => ({ "@type": "Article", url: `${SITE_URL}/insights/${item.slug}`, headline: item.title })),
      }} />
      <main className="content-page">
        <section className="content-shell content-hero">
          <p className="content-kicker">Inside the work</p>
          <h1>Insights for founders and operators.</h1>
          <p className="content-deck">Specific lessons from building brands, teams, systems, and companies—written to help someone make a better decision.</p>
        </section>
        <section className="content-shell card-list" aria-label="Insights">
          {insights.map((item) => (
            <article className="content-card" key={item.slug}>
              <p className="content-kicker">{item.eyebrow}</p>
              <h2><Link href={`/insights/${item.slug}`}>{item.title}</Link></h2>
              <p>{item.description}</p>
              <div className="content-meta"><time dateTime={item.published}>{item.published}</time><span>{item.readTime}</span></div>
              <Link className="text-link" href={`/insights/${item.slug}`}>Read the insight <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </section>
        <section className="content-shell inline-cta">
          <div><p className="content-kicker">The Operator’s Note</p><h2>Get the next useful detail.</h2><p>One real decision from building, operating, investing in, or selling companies.</p></div>
          <SignupForm id="insights-email" variant="button" label="Subscribe free" />
        </section>
      </main>
    </>
  );
}
