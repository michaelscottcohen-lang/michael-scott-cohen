import SiteNav from "@/components/site-nav";
import Films from "@/components/films";
import Subscribe from "@/components/subscribe";
import {
  profile,
  clients,
  ventures,
  essays,
  films,
  press,
  colophon,
} from "@/lib/content";

/* ---------- shared bits ---------- */

function Shell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1280px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function SectionHead({
  index,
  label,
  title,
  dek,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  dek?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.25em] text-bronze">
          {index}
        </span>
        <span className="h-px w-10 bg-rule" />
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-stone">
          {label}
        </span>
      </div>
      <h2
        className="display mt-7 text-ink"
        style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.6rem)" }}
      >
        {title}
      </h2>
      {dek && (
        <p className="prose-serif mt-6 max-w-xl text-lg text-stone">{dek}</p>
      )}
    </div>
  );
}

/* ---------- page ---------- */

export default function Home() {
  const ticker = [...clients, ...clients];

  return (
    <>
      <SiteNav />

      {/* ===== 00 · MAST ===== */}
      <header id="top" className="relative overflow-hidden">
        <Shell className="flex min-h-screen flex-col justify-between pb-10 pt-32 md:pt-40">
          <div className="flex flex-1 flex-col justify-center">
            <p
              className="eyebrow reveal"
              style={{ animationDelay: "0ms" }}
            >
              {profile.location} · Operator · Investor
            </p>

            <h1
              className="display mt-8 text-ink"
              style={{
                fontSize: "clamp(3.1rem, 11.5vw, 10.5rem)",
                lineHeight: "0.9",
              }}
            >
              <span className="reveal block" style={{ animationDelay: "80ms" }}>
                Michael Scott
              </span>
              <span
                className="reveal block"
                style={{ animationDelay: "180ms" }}
              >
                Cohen<span className="text-bronze">.</span>
              </span>
            </h1>

            <p
              className="prose-serif reveal mt-10 max-w-2xl text-ink-soft"
              style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.9rem)", lineHeight: 1.4 }}
            >
              {profile.pov.split("unromantic")[0]}
              <span className="serif-italic">unromantic</span>
              {profile.pov.split("unromantic")[1]}
            </p>

            <div
              className="reveal mt-12 flex flex-wrap items-center gap-x-10 gap-y-4"
              style={{ animationDelay: "320ms" }}
            >
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-stone">
                {profile.roleLine}
              </span>
              <div className="flex items-center gap-8">
                <a
                  href="#writing"
                  className="uline font-mono text-[0.78rem] uppercase tracking-[0.2em] text-ink"
                >
                  Read the writing →
                </a>
                <a
                  href="#film"
                  className="uline font-mono text-[0.78rem] uppercase tracking-[0.2em] text-ink"
                >
                  Watch the film →
                </a>
              </div>
            </div>
          </div>

          {/* client ticker — proof, kept quiet */}
          <div
            className="reveal mt-16"
            style={{ animationDelay: "440ms" }}
          >
            <div className="flex items-center gap-4 border-y border-rule py-4">
              <span className="hidden shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.25em] text-stone-light sm:block">
                In production for
              </span>
              <div className="marquee-wrap relative flex-1 overflow-hidden">
                <div className="marquee-track">
                  {ticker.map((c, i) => (
                    <span
                      key={`${c}-${i}`}
                      className="mx-6 font-mono text-[0.72rem] uppercase tracking-[0.3em] text-stone"
                    >
                      {c}
                      <span className="ml-12 text-bronze">/</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </header>

      {/* ===== 01 · NOW / OPERATING ===== */}
      <section id="now" className="bg-paper-deep py-24 md:py-36">
        <Shell>
          <SectionHead
            index="01"
            label="Now"
            title={
              <>
                What I&apos;m <span className="serif-italic">building.</span>
              </>
            }
            dek="Three things, all physical, all in motion. The common thread is making objects that earn their place."
          />

          <div className="border-t border-rule-strong">
            {ventures.map((v) => (
              <article
                key={v.name}
                className="grid grid-cols-1 gap-6 border-b border-rule py-10 md:grid-cols-12 md:gap-8 md:py-12"
              >
                <div className="md:col-span-4">
                  <h3 className="display text-3xl text-ink md:text-4xl">
                    {v.name}
                  </h3>
                  <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-stone">
                    {v.role}
                    {v.founded && (
                      <span className="text-stone-light"> · {v.founded}</span>
                    )}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="prose-serif text-lg text-ink-soft">{v.body}</p>
                </div>
                <div className="md:col-span-3 md:border-l md:border-rule md:pl-6">
                  {v.proof && (
                    <p className="text-sm leading-relaxed text-stone">
                      <span className="mr-2 text-bronze">●</span>
                      {v.proof}
                    </p>
                  )}
                  {v.href && (
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uline mt-4 inline-block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink"
                    >
                      Visit ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Shell>
      </section>

      {/* ===== 02 · WRITING ===== */}
      <section id="writing" className="py-24 md:py-36">
        <Shell>
          <SectionHead
            index="02"
            label="Writing"
            title={
              <>
                The <span className="serif-italic">writing.</span>
              </>
            }
            dek="Notes from fifteen years of building physical brands. Short, opinionated, and usually about the gap between the deck and the factory floor."
          />

          <ul className="border-t border-rule-strong">
            {essays.map((e) => (
              <li key={e.index}>
                <a
                  href={e.href ?? "#writing"}
                  className="group grid grid-cols-12 items-baseline gap-3 border-b border-rule py-7 transition-colors duration-300 hover:bg-paper-shade/50 md:gap-6 md:py-8"
                >
                  <span className="col-span-2 font-mono text-xs tracking-widest text-bronze md:col-span-1">
                    {e.index}
                  </span>
                  <span className="col-span-10 hidden font-mono text-[0.68rem] uppercase tracking-[0.18em] text-stone-light md:col-span-2 md:block">
                    {e.date}
                    <br />
                    {e.reading}
                  </span>
                  <div className="col-span-10 md:col-span-7">
                    <h3 className="display text-xl text-ink transition-colors group-hover:text-bronze md:text-2xl">
                      {e.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone">
                      {e.dek}
                    </p>
                  </div>
                  <span className="col-span-12 flex items-center justify-between md:col-span-2 md:justify-end md:self-center">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-stone-light">
                      {e.tag}
                    </span>
                    <span className="ml-4 text-ink transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="#writing"
              className="uline font-mono text-[0.78rem] uppercase tracking-[0.2em] text-ink"
            >
              The full archive →
            </a>
          </div>
        </Shell>
      </section>

      {/* ===== 03 · FILM ===== */}
      <section id="film" className="bg-paper-deep py-24 md:py-36">
        <Shell>
          <SectionHead
            index="03"
            label="Film"
            title={
              <>
                The <span className="serif-italic">work,</span> on screen.
              </>
            }
            dek="How a branded object actually gets made — and the conversations behind the businesses that make them."
          />
          <Films films={films} />
        </Shell>
      </section>

      {/* ===== 04 · PRESS ===== */}
      <section id="press" className="py-24 md:py-36">
        <Shell>
          <SectionHead
            index="04"
            label="Press"
            title={
              <>
                Simple <span className="serif-italic">proof.</span>
              </>
            }
          />
          <ul className="border-t border-rule-strong">
            {press.map((p) => (
              <li
                key={p.title}
                className="grid grid-cols-12 items-baseline gap-3 border-b border-rule py-6 md:gap-6"
              >
                <span className="col-span-3 font-mono text-xs tracking-widest text-bronze md:col-span-2">
                  {p.year}
                </span>
                <span className="col-span-9 text-base text-ink md:col-span-6">
                  {p.title}
                </span>
                <span className="col-span-12 text-sm text-stone md:col-span-4 md:text-right">
                  {p.source}
                </span>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* ===== 05 · COLOPHON / ABOUT ===== */}
      <section id="about" className="bg-paper-deep py-24 md:py-36">
        <Shell>
          <SectionHead
            index="05"
            label="Colophon"
            title={
              <>
                The <span className="serif-italic">operator.</span>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-8">
              <div className="space-y-6">
                {colophon.bio.map((para, i) => (
                  <p
                    key={i}
                    className="prose-serif text-ink-soft"
                    style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <dl className="md:col-span-4 md:border-l md:border-rule md:pl-8">
              {colophon.founded.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-2 gap-2 border-b border-rule py-4 last:border-0"
                >
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-stone-light">
                    {f.label}
                  </dt>
                  <dd className="text-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Shell>
      </section>

      {/* ===== 06 · SUBSCRIBE ===== */}
      <section id="subscribe" className="py-28 md:py-44">
        <Shell>
          <div className="flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow mb-6">06 — Letter</p>
              <h2
                className="display text-ink"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                A short letter,
                <br />
                <span className="serif-italic">now and then.</span>
              </h2>
              <p className="prose-serif mt-6 text-lg text-stone">
                New writing, the occasional film, and a few things I&apos;m
                learning the hard way. Rarely more than once a month.
              </p>
            </div>
            <Subscribe />
          </div>
        </Shell>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-rule bg-paper-deep py-12">
        <Shell>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="display text-2xl text-ink">
                {profile.monogram}
                <span className="text-bronze">.</span>
              </p>
              <p className="prose-serif mt-2 max-w-sm text-stone">
                {profile.povShort}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-stone-light">
                Elsewhere
              </p>
              <a
                href="https://www.linkedin.com/in/mcohen3/"
                target="_blank"
                rel="noopener noreferrer"
                className="uline w-fit text-sm text-ink"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://twitter.com/TheMichaelCohen"
                target="_blank"
                rel="noopener noreferrer"
                className="uline w-fit text-sm text-ink"
              >
                X ↗
              </a>
              <a
                href="https://harperandscott.com"
                target="_blank"
                rel="noopener noreferrer"
                className="uline w-fit text-sm text-ink"
              >
                Harper+Scott ↗
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-stone-light sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Michael Scott Cohen</span>
            <span>New York · Built quietly</span>
          </div>
        </Shell>
      </footer>
    </>
  );
}
