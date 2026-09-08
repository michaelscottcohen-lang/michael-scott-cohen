import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import StructuredData from "@/components/structured-data";
import { companies } from "@/lib/company-pages";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";

const title = "Companies in Michael Scott Cohen’s Public Operating Record";
const description = "Public, sourced company history and operator lessons from Harper+Scott, Local Weather, and Cyndra.";

export const metadata: Metadata = {
  title: "Companies",
  description,
  alternates: { canonical: "/companies" },
  openGraph: { title, description, url: `${SITE_URL}/companies`, type: "website", images: [DEFAULT_SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [DEFAULT_SOCIAL_IMAGE] },
};

export default function CompaniesPage() {
  return (
    <>
      <SiteNav />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/companies#collection`,
        url: `${SITE_URL}/companies`,
        name: title,
        description,
        about: { "@id": `${SITE_URL}/#person` },
      }} />
      <main className="content-page">
        <section className="content-shell content-hero">
          <p className="content-kicker">Company receipts</p>
          <h1>Built across merchandise, consumer products, and AI.</h1>
          <p className="content-deck">Public company history, Michael’s role, and the operating lessons that matter beyond the transaction headline.</p>
        </section>
        <section className="content-shell card-list" aria-label="Companies">
          {companies.map((company) => (
            <article className="content-card" key={company.slug}>
              <p className="content-kicker">{company.category}</p>
              <h2><Link href={`/companies/${company.slug}`}>{company.name}</Link></h2>
              <p>{company.description}</p>
              <p><strong>Role:</strong> {company.role}</p>
              <Link className="text-link" href={`/companies/${company.slug}`}>View company record <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
