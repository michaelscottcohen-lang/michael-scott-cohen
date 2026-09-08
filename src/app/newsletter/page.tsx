import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SignupForm from "@/components/signup-form";
import StructuredData from "@/components/structured-data";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";

const title = "The Operator’s Note";
const description = "One honest note from Michael Scott Cohen about building, operating, investing in, and selling companies—sent when there is something useful to say.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/newsletter" },
  openGraph: { title, description, url: `${SITE_URL}/newsletter`, type: "website", images: [DEFAULT_SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [DEFAULT_SOCIAL_IMAGE] },
};

export default function NewsletterPage() {
  return (
    <>
      <SiteNav />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/newsletter#page`,
        url: `${SITE_URL}/newsletter`,
        name: title,
        description,
        author: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
      }} />
      <main className="content-page newsletter-page">
        <section className="content-shell content-hero newsletter-hero">
          <p className="content-kicker">The Operator’s Note</p>
          <h1>One useful detail from inside the work.</h1>
          <p className="content-deck">Michael shares a real decision, the practical lesson behind it, and one move a founder or operator can use.</p>
          <SignupForm id="newsletter-page-email" variant="button" label="Get the next note" />
          <p className="form-note">Free. Submitted securely to Kit. Unsubscribe anytime.</p>
        </section>
        <section className="content-shell newsletter-promise">
          <article><span>01</span><h2>A real story</h2><p>No recycled founder mythology. The context, constraint, and decision matter.</p></article>
          <article><span>02</span><h2>A practical lesson</h2><p>What changed Michael’s judgment—and where the lesson does not apply.</p></article>
          <article><span>03</span><h2>A move to use</h2><p>A question, framework, or action readers can take back to the work.</p></article>
        </section>
        <section className="content-shell content-note">
          <h2>Two newsletters, two jobs.</h2>
          <p><strong>The Operator’s Note</strong> is Michael’s owned email. <strong>Built in the Details</strong> is his LinkedIn-native newsletter for longer platform essays. They share Michael’s operating perspective without duplicating every issue word for word.</p>
          <Link className="text-link" href="/insights">Read the owned insight library <span aria-hidden="true">→</span></Link>
        </section>
      </main>
    </>
  );
}
