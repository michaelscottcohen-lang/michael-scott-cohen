export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-card-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-accent">MSC</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#ventures" className="hover:text-foreground transition-colors">Ventures</a>
            <a href="#achievements" className="hover:text-foreground transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 border border-card-border rounded-full text-sm text-muted">
            Co-Founder &amp; CEO · Harper+Scott
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            Michael Scott
            <br />
            <span className="text-accent">Cohen</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
            Building iconic brands at the intersection of creativity, sustainability, and enterprise.
            Turning branded experiences into lasting impressions for the world&apos;s most recognized companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-accent text-background font-semibold rounded-lg hover:bg-accent-light transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 border border-card-border text-foreground rounded-lg hover:border-muted transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">About</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                From Business Development to Building a
                <span className="text-accent"> $57.5M </span>
                Creative Empire
              </h2>
            </div>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Michael Scott Cohen is a New York-based entrepreneur and the Co-Founder &amp; CEO of
                Harper+Scott Inc., a creative agency that has redefined how the world&apos;s top brands
                approach private-label branded goods.
              </p>
              <p>
                With a BA in Communications and Culture from Indiana University Bloomington, Michael
                launched his career at Access Staffing, LLC, quickly rising to Assistant Vice President.
                He spent years mastering business development across industries — from recruiting
                to insurance brokerages — building deep relationships with chief procurement officers
                and marketing professionals.
              </p>
              <p>
                That foundation became the launchpad for Harper+Scott, where Michael and co-founder
                Jon Alagem built a creative powerhouse that designs, manufactures, and delivers
                branded experiences for companies like Sephora, L&apos;Oreal Paris, and Compass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="py-24 md:py-32 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 text-center">Ventures &amp; Leadership</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
            Building Brands That Matter
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Harper+Scott Inc.",
                role: "Co-Founder & CEO",
                description:
                  "A creative agency focused on designing and producing private-label branded goods for the world's most iconic brands. Valued at $57.5M with backing from the former CEO of Coach and Irving Place Capital.",
                highlight: "$57.5M Valuation",
              },
              {
                title: "Local Weather",
                role: "Co-Founder",
                description:
                  "A mind and body hydration beverage brand born from Michael's passion for wellness and innovative consumer products.",
                highlight: "Wellness & CPG",
              },
              {
                title: "Plug Spot",
                role: "Advisor & Investor",
                description:
                  "Leveraging years of entrepreneurial experience to advise and invest in the next generation of innovative startups.",
                highlight: "Angel Investing",
              },
            ].map((venture) => (
              <div
                key={venture.title}
                className="group p-8 rounded-2xl border border-card-border bg-background hover:border-accent/30 transition-all duration-300"
              >
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-accent bg-accent/10 rounded-full">
                  {venture.highlight}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-1">{venture.title}</h3>
                <p className="text-accent text-sm mb-4">{venture.role}</p>
                <p className="text-muted text-sm leading-relaxed">{venture.description}</p>
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Brand Strategy",
              "Creative Direction",
              "Product Design",
              "Manufacturing",
              "Business Development",
              "Sustainability",
              "Corporate Gifting",
              "Venture Advisory",
            ].map((service) => (
              <div
                key={service}
                className="text-center py-4 px-6 rounded-xl border border-card-border text-sm text-muted hover:text-foreground hover:border-accent/30 transition-all"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 text-center">Recognition</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
            Achievements &amp; Milestones
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                year: "2023",
                title: "Distributor Entrepreneurs of the Year",
                source: "Counselor Awards / ASI",
                description:
                  "Recognized alongside Jon Alagem for building Harper+Scott into one of the industry's most innovative and successful enterprises.",
              },
              {
                year: "2019",
                title: "$57.5M Valuation",
                source: "Business Insider",
                description:
                  'Secured investment from Lew Frankfort (former CEO of Coach) and Irving Place Capital, with coverage in Business Insider for "fixing the problem of disposable corporate swag."',
              },
              {
                year: "Ongoing",
                title: "YPO Member — NY Metro Chapter",
                source: "Young Presidents Organization",
                description:
                  "Active member of the world's premier peer network for chief executives, connecting with 35,000+ leaders across 140+ countries.",
              },
              {
                year: "Clients",
                title: "Trusted by Global Brands",
                source: "Harper+Scott Portfolio",
                description:
                  "Designed and delivered branded experiences for Sephora, L'Oreal Paris, Compass, and numerous Fortune 500 companies.",
              },
            ].map((achievement) => (
              <div
                key={achievement.title}
                className="p-8 rounded-2xl border border-card-border bg-card/30 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                  <span className="text-xs text-muted">{achievement.source}</span>
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">{achievement.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-card-border">
            {[
              { stat: "$57.5M", label: "Company Valuation" },
              { stat: "15+", label: "Years in Business" },
              { stat: "Fortune 500", label: "Client Roster" },
              { stat: "YPO", label: "Global Network" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-accent">{item.stat}</p>
                <p className="text-sm text-muted mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Connect</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-12">
            Whether you&apos;re looking to create unforgettable branded experiences, explore partnership
            opportunities, or connect through YPO — Michael is always open to meaningful conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://www.linkedin.com/in/mcohen3/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-accent text-background font-semibold rounded-lg hover:bg-accent-light transition-colors text-center"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://twitter.com/TheMichaelCohen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 border border-card-border text-foreground rounded-lg hover:border-muted transition-colors text-center"
            >
              Follow on X
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Harper+Scott",
                value: "harperandscott.com",
                href: "https://harperandscott.com",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/mcohen3",
                href: "https://www.linkedin.com/in/mcohen3/",
              },
              {
                label: "Crunchbase",
                value: "crunchbase.com",
                href: "https://www.crunchbase.com/person/michael-scott-cohen",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-card-border bg-background hover:border-accent/30 transition-all duration-300 block"
              >
                <p className="text-xs text-muted uppercase tracking-widest mb-2">{link.label}</p>
                <p className="text-sm font-medium text-foreground">{link.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-card-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Michael Scott Cohen. All rights reserved.</p>
          <p>
            Co-Founder &amp; CEO,{" "}
            <a
              href="https://harperandscott.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light transition-colors"
            >
              Harper+Scott Inc.
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
