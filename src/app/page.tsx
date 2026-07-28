import SiteNav from "@/components/site-nav";
import { companies, featuredIn, KIT_FORM, KIT_SUBSCRIBE, linkedInPosts, press, profile, proof, socials, watch } from "@/lib/content";

const Arrow = () => <span aria-hidden="true">↗</span>;
const Shell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => <div className={`shell ${className}`}>{children}</div>;
const Signup = ({ label = "Get the next note" }: { label?: string }) => <a className="button" href={KIT_FORM} target="_blank" rel="noopener noreferrer">{label} <Arrow /></a>;
const InlineSignup = () => <form className="inline-signup" action={KIT_SUBSCRIBE} method="post">
  <label className="sr-only" htmlFor="hero-email">Email address</label>
  <input id="hero-email" name="email_address" type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" required />
  <button type="submit">Subscribe free</button>
</form>;

export default function Home() {
  return <>
    <SiteNav />
    <main>
      <header id="top" className="hero">
        <Shell className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">Michael Scott Cohen</p>
            <h1>I build companies.<br /><em>Then I share what worked.</em></h1>
            <p className="intro">{profile.intro}</p>
          </div>
          <aside className="signup-card" aria-labelledby="signup-title">
            <p className="kicker">The Operator’s Note</p>
            <h2 id="signup-title">Notes from inside the work.</h2>
            <p>One real decision from building, operating, investing in, or selling companies. What worked, what didn’t, and what I’d do now.</p>
            <InlineSignup />
            <small>Free. Submitted securely to Kit. Unsubscribe anytime.</small>
          </aside>
          <div className="featured-in" aria-label="Featured in">
            <span>Featured in</span>
            {featuredIn.map((item) => <a key={item.publication} href={item.href} target="_blank" rel="noopener noreferrer">{item.publication} <Arrow /></a>)}
          </div>
          <div className="hero-socials" aria-label="Michael's social profiles">
            {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">{social.label} <Arrow /></a>)}
          </div>
        </Shell>
      </header>

      <section className="proof-strip" aria-label="Selected verified milestones"><Shell>{proof.map((item) => <p key={item}>{item}</p>)}</Shell></section>

      <section className="receipts" aria-labelledby="company-receipts"><Shell>
        <div className="receipts-head"><p className="kicker">Company receipts</p><h2 id="company-receipts">Built across merchandise, CPG, and AI.</h2></div>
        <div className="receipt-grid">{companies.map((company) => <article key={company.name}><p>{company.category}</p><h3>{company.name}</h3><p>{company.detail}</p></article>)}</div>
      </Shell></section>

      <section id="watch" className="section watch-section">
        <Shell>
          <div className="section-head"><p className="kicker">Watch Michael</p><h2>Recent conversations and short videos.</h2></div>
          <div className="video-grid">
            {watch.filter((item) => "embed" in item).map((item) => <article className="video-card" key={item.href}>
              <div className="embed-wrap"><iframe src={item.embed} title={`${item.platform}: ${item.title}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
              <div className="card-copy"><p className="platform">{item.platform}</p><h3>{item.title}</h3><p>{item.detail}</p><a href={item.href} target="_blank" rel="noopener noreferrer">Watch original <Arrow /></a></div>
            </article>)}
          </div>
          <div className="short-grid">
            {watch.slice(2).map((item) => <a className="short-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}><span className="play" aria-hidden="true">▶</span><div><p className="platform">{item.platform}</p><h3>{item.title}</h3><span>{item.detail} <Arrow /></span></div></a>)}
          </div>
          <div className="context-cta"><div><p className="kicker">Prefer email?</p><h2>Get Michael’s next note.</h2></div><Signup /></div>
        </Shell>
      </section>

      <section id="read" className="section read-section">
        <Shell>
          <div className="section-head"><p className="kicker">Read Michael</p><h2>Selected posts from LinkedIn.</h2></div>
          <div className="post-list">{linkedInPosts.map((post, index) => <a href={post.href} target="_blank" rel="noopener noreferrer" key={post.href}><span className="post-number">0{index + 1}</span><blockquote>“{post.excerpt}”</blockquote><span className="post-link">Read on LinkedIn <Arrow /></span></a>)}</div>
        </Shell>
      </section>

      <section id="follow" className="section follow-section">
        <Shell>
          <div className="section-head"><p className="kicker">Follow Michael</p><h2>Pick your feed.</h2></div>
          <div className="channel-grid">{socials.map((social) => <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.label}><span>{social.label}</span><strong>{social.handle}</strong><Arrow /></a>)}</div>
        </Shell>
      </section>

      <section className="section press-section">
        <Shell>
          <div className="section-head compact"><p className="kicker">Selected press</p><h2>Coverage and interviews.</h2></div>
          <div className="press-grid">{press.map((item) => <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}><span>{item.publication}</span><h3>{item.title}</h3><span>Read source <Arrow /></span></a>)}</div>
        </Shell>
      </section>

      <section id="subscribe" className="closing"><Shell><p className="kicker">The Operator’s Note</p><h2>One honest note.<br />Sent when there is<br />something worth saying.</h2><Signup label="Subscribe free" /><small>Secure signup hosted by Kit.</small></Shell></section>
    </main>
    <footer><Shell><strong>MSC.</strong><span>Michael Scott Cohen · New York</span><a href="#top">Back to top ↑</a></Shell></footer>
  </>;
}
