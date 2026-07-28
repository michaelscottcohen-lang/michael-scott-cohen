import SiteNav from "@/components/site-nav";
import { fieldNotes, KIT_FORM, profile, proof, receipts, socials } from "@/lib/content";

const Shell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => <div className={`shell ${className}`}>{children}</div>;
const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return <>
    <SiteNav />
    <main>
      <header id="top" className="hero">
        <Shell className="hero-inner">
          <div className="hero-kicker"><span>New York</span><span>Est. in the work</span></div>
          <h1><span>Michael Scott</span><span>Cohen<em>.</em></span></h1>
          <div className="hero-bottom">
            <p className="hero-thesis">{profile.thesis}</p>
            <p className="hero-role">{profile.headline}</p>
          </div>
        </Shell>
      </header>

      <section id="story" className="dark section">
        <Shell>
          <div className="section-label"><span>01</span><span>The operating thesis</span></div>
          <div className="statement-grid">
            <h2>Not commentary.<br/><i>Consequence.</i></h2>
            <div className="body-copy">
              <p>I am most at home where creative ambition meets operational reality: the factory floor, the margin conversation, the relationship that has to hold when a plan changes.</p>
              <p>Co-founding Harper+Scott meant years of building the systems, team, and trust required to deliver physical work for demanding brands. The lessons were rarely tidy. That is the point.</p>
            </div>
          </div>
          <div className="principles">
            {fieldNotes.map(([title, body], i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </Shell>
      </section>

      <section id="receipts" className="section receipts-section">
        <Shell>
          <div className="section-label"><span>02</span><span>Selected receipts</span></div>
          <h2 className="section-title">The record,<br/><i>not the résumé.</i></h2>
          <div className="receipts">
            {receipts.map((item) => <article key={item.title}>
              <div className="receipt-year">{item.year}</div>
              <h3>{item.title}</h3><p>{item.body}</p>
              <a href={item.href} target="_blank" rel="noreferrer">{item.cta} <Arrow/></a>
            </article>)}
          </div>
          <div className="proof-list">
            {proof.map(item => <a key={item.title} href={item.href} target="_blank" rel="noreferrer"><span>{item.label}</span><strong>{item.title}</strong><small>{item.source}</small><Arrow/></a>)}
          </div>
        </Shell>
      </section>

      <section id="notes" className="note-section">
        <Shell className="note-grid">
          <div><div className="section-label light"><span>03</span><span>The Operator&apos;s Note</span></div><h2>What holds up<br/><i>under pressure.</i></h2></div>
          <div className="note-copy"><p>An occasional note on building physical businesses: judgment, people, capital, mistakes, and the things no clean case study can teach.</p><p className="fine">No content machine. No manufactured urgency. Just a useful note when there is something worth sending.</p><a className="button" href={KIT_FORM} target="_blank" rel="noreferrer">Join The Operator&apos;s Note <Arrow/></a><small>Secure signup hosted by Kit.</small></div>
        </Shell>
      </section>

      <section id="elsewhere" className="section elsewhere">
        <Shell>
          <div className="section-label"><span>04</span><span>Elsewhere</span></div>
          <h2 className="section-title">Keep the<br/><i>conversation going.</i></h2>
          <div className="socials">{socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer"><span>{s.label}</span><strong>{s.handle}</strong><Arrow/></a>)}</div>
        </Shell>
      </section>
    </main>
    <footer><Shell><div className="footer-mark">MSC<span>.</span></div><div><p>Michael Scott Cohen</p><p>Builder · Operator · Investor</p></div><a href="#top">Back to top ↑</a></Shell></footer>
  </>;
}
