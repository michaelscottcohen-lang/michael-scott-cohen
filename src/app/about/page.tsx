import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import { companies, press, socials } from "@/lib/content";

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
      <main className="entity-about">
        <section className="entity-about-shell">
          <header className="entity-about-hero">
            <div>
              <p className="entity-about-kicker">About Michael Scott Cohen</p>
              <h1>Founder, operator, and investor.</h1>
            </div>
            <p className="entity-about-intro">
              Michael Scott Cohen is a New York entrepreneur and operator. He has built companies in
              branded merchandise and consumer products and is now exploring what artificial
              intelligence makes possible for working teams.
            </p>
          </header>

          <section className="entity-about-section" aria-labelledby="companies-heading">
            <div className="entity-about-heading">
              <p className="entity-about-kicker">Companies</p>
              <h2 id="companies-heading">Built through the work.</h2>
            </div>
            <div className="entity-company-grid">
              {companies.map((company) => (
                <article key={company.name}>
                  <p>{company.category}</p>
                  <h3>{company.name}</h3>
                  <div>{company.detail}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="entity-about-section" aria-labelledby="profiles-heading">
            <div className="entity-about-heading">
              <p className="entity-about-kicker">Official profiles</p>
              <h2 id="profiles-heading">Find the right Michael Scott Cohen.</h2>
            </div>
            <div className="entity-profile-grid">
              {socials.map((social) => (
                <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.label}>
                  <span>{social.label}</span>
                  <strong>{social.handle}</strong>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section className="entity-about-section" aria-labelledby="references-heading">
            <div className="entity-about-heading">
              <p className="entity-about-kicker">Public references</p>
              <h2 id="references-heading">Coverage supporting the public record.</h2>
            </div>
            <div className="entity-reference-grid">
              {press.map((item) => (
                <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}>
                  <span>{item.publication}</span>
                  <h3>{item.title}</h3>
                  <strong>Read source ↗</strong>
                </a>
              ))}
            </div>
          </section>

          <footer className="entity-about-footer">
            <Link href="/">Return to Michael’s official website</Link>
          </footer>
        </section>
      </main>
      <style>{`
        .entity-about {
          background: var(--bone);
          color: var(--midnight);
        }
        .entity-about-shell {
          width: min(calc(100% - 64px), 1240px);
          margin: 0 auto;
          padding: 148px 0 80px;
        }
        .entity-about-hero,
        .entity-about-heading {
          display: grid;
          grid-template-columns: minmax(240px, 1fr) minmax(0, 2fr);
          gap: 44px;
        }
        .entity-about-hero {
          align-items: end;
          padding-bottom: 72px;
          border-bottom: 2px solid var(--midnight);
        }
        .entity-about-kicker {
          margin: 0 0 16px;
          color: var(--oxide);
          font-size: .78rem;
          font-weight: 750;
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        .entity-about h1,
        .entity-about h2,
        .entity-about h3 {
          font-family: var(--font-serif);
          font-weight: 500;
          letter-spacing: -.035em;
        }
        .entity-about h1 {
          max-width: 520px;
          margin: 0;
          font-size: clamp(3.4rem, 5.6vw, 5rem);
          line-height: .97;
        }
        .entity-about-intro {
          max-width: 720px;
          margin: 0;
          color: #4c5259;
          font-size: clamp(1.25rem, 2.1vw, 1.75rem);
          line-height: 1.48;
        }
        .entity-about-section {
          padding: 82px 0 0;
        }
        .entity-about-heading {
          align-items: start;
          margin-bottom: 36px;
        }
        .entity-about-heading h2 {
          max-width: 820px;
          margin: 0;
          font-size: clamp(2.7rem, 4.4vw, 4.2rem);
          line-height: 1;
        }
        .entity-company-grid,
        .entity-reference-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 2px solid var(--midnight);
        }
        .entity-company-grid article {
          min-height: 190px;
          padding: 25px 28px 25px 0;
          margin-right: 28px;
          border-right: 1px solid var(--rule);
        }
        .entity-company-grid article:last-child {
          margin-right: 0;
          border-right: 0;
        }
        .entity-company-grid article > p {
          margin: 0 0 8px;
          color: var(--oxide);
          font-size: .76rem;
          font-weight: 750;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .entity-company-grid h3 {
          margin: 0 0 10px;
          font-size: 1.8rem;
        }
        .entity-company-grid article > div {
          color: #4c5259;
          font-size: .96rem;
        }
        .entity-profile-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }
        .entity-profile-grid a {
          min-height: 164px;
          padding: 22px 22px 20px 0;
          margin-right: 22px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--rule);
        }
        .entity-profile-grid a:last-child {
          margin-right: 0;
          border-right: 0;
        }
        .entity-profile-grid span:first-child,
        .entity-reference-grid a > span {
          color: #596069;
          font-size: .82rem;
        }
        .entity-profile-grid strong {
          margin: 16px 0 auto;
          font-family: var(--font-serif);
          font-size: 1.12rem;
          font-weight: 500;
          line-height: 1.2;
          overflow-wrap: anywhere;
        }
        .entity-reference-grid {
          gap: 20px;
        }
        .entity-reference-grid a {
          min-height: 220px;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
        }
        .entity-reference-grid h3 {
          margin: 14px 0 auto;
          font-size: 1.65rem;
          line-height: 1.15;
        }
        .entity-reference-grid strong {
          font-size: .9rem;
        }
        .entity-about-footer {
          margin-top: 72px;
          padding-top: 26px;
          border-top: 1px solid var(--rule);
          font-weight: 700;
        }
        @media (max-width: 800px) {
          .entity-about-shell {
            width: min(calc(100% - 32px), 1240px);
            padding-top: 106px;
          }
          .entity-about-hero,
          .entity-about-heading {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .entity-about-hero {
            padding-bottom: 46px;
          }
          .entity-about h1 {
            font-size: 3.15rem;
          }
          .entity-about-intro {
            font-size: 1.15rem;
          }
          .entity-about-section {
            padding-top: 62px;
          }
          .entity-about-heading h2 {
            font-size: 2.7rem;
          }
          .entity-company-grid,
          .entity-reference-grid,
          .entity-profile-grid {
            grid-template-columns: 1fr;
          }
          .entity-company-grid article,
          .entity-profile-grid a {
            min-height: 0;
            margin-right: 0;
            border-right: 0;
            border-bottom: 1px solid var(--rule);
          }
          .entity-profile-grid a {
            padding: 20px 0;
          }
          .entity-profile-grid strong {
            margin: 8px 0 16px;
          }
          .entity-reference-grid a {
            min-height: 180px;
          }
        }
      `}</style>
    </>
  );
}
