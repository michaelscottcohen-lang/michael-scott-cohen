import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import { companies, press, profile, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Public biography, company history, official profiles, and primary sources for Michael Scott Cohen.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="section read-section">
          <div className="shell">
            <div className="section-head">
              <p className="kicker">About Michael Scott Cohen</p>
              <h1>Founder, operator, and investor.</h1>
              <p className="intro">{profile.intro}</p>
            </div>

            <div className="receipt-grid" aria-label="Companies">
              {companies.map((company) => (
                <article key={company.name}>
                  <p>{company.category}</p>
                  <h2>{company.name}</h2>
                  <p>{company.detail}</p>
                </article>
              ))}
            </div>

            <div className="section-head compact">
              <p className="kicker">Official profiles</p>
              <h2>Find the right Michael Scott Cohen.</h2>
            </div>
            <div className="channel-grid">
              {socials.map((social) => (
                <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.label}>
                  <span>{social.label}</span>
                  <strong>{social.handle}</strong>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            <div className="section-head compact">
              <p className="kicker">Primary references</p>
              <h2>Coverage supporting the public record.</h2>
            </div>
            <div className="press-grid">
              {press.map((item) => (
                <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}>
                  <span>{item.publication}</span>
                  <h3>{item.title}</h3>
                  <span>Read source ↗</span>
                </a>
              ))}
            </div>

            <p>
              <Link href="/">Return to Michael’s official website</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}