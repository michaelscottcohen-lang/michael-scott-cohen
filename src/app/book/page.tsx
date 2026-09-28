import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import BookInterestForm from "@/components/book-interest-form";
import { SITE_URL } from "@/lib/site";
import styles from "./book.module.css";

const title = "So You Want to Sell Branded Merch";
const description = "A practical sales book by Michael Scott Cohen about finding clients, asking better questions and growing accounts. Get book updates or register interest for your sales team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book" },
  openGraph: { title, description, url: `${SITE_URL}/book`, type: "website", images: [{ url: `${SITE_URL}/images/book/cover.webp`, width: 1008, height: 1440, alt: `${title} by Michael Scott Cohen` }] },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/images/book/cover.webp`] },
};

export default async function BookPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  return (
    <div className={styles.bookPage}>
      <SiteNav />
      <main id="book-main">
        <section className={styles.hero} aria-labelledby="book-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A book by Michael Scott Cohen</p>
            <h1 id="book-title">So You Want to Sell <em>Branded Merch</em></h1>
            <p className={styles.subtitle}>A Salesperson&apos;s Guide to Winning Clients and Growing Accounts</p>
            <p className={styles.intro}>There&apos;s a lot of business out there. This book is about getting in front of the right people, asking better questions and delivering when they count on you.</p>
            <a className={styles.primaryLink} href="#book-updates">Get book updates <span aria-hidden="true">↗</span></a>
            <p className={styles.releaseNote}>Planned for November 2026. Join the interest list today.</p>
            <div className={styles.authorLine}><strong>Michael Scott Cohen</strong><span>Co-founder of Harper+Scott</span></div>
          </div>
          <figure className={styles.bookStage}>
            <div className={styles.cover}><Image src="/images/book/cover.webp" alt="Cover of So You Want to Sell Branded Merch by Michael Scott Cohen" width={1008} height={1440} sizes="(max-width: 760px) 70vw, 370px" priority /></div>
            <figcaption>Full-color paperback · 7 × 10 inches · 144 pages</figcaption>
          </figure>
        </section>

        <div className={styles.numbers} aria-label="Inside the book">
          <p><strong>21</strong><span>chapters grounded<br />in the work</span></p>
          <p><strong>16</strong><span>worksheets to<br />put it into practice</span></p>
          <p><strong>20</strong><span>AI prompts to adapt<br />to your day</span></p>
        </div>

        <section id="book-updates" className={styles.signupSection} aria-labelledby="updates-heading">
          <div>
            <p className={styles.eyebrow}>Be there for the release</p>
            <h2 id="updates-heading">I&apos;ll let you know<br /><em>when it&apos;s ready.</em></h2>
            <p>Get a note when you can order the book, plus a few previews along the way.</p>
            <p className={styles.small}>Just registering interest. No payment or reservation.</p>
          </div>
          <BookInterestForm initialInterest={interest === "team" ? "team" : "individual"} />
        </section>

        <section className={styles.lessons} aria-labelledby="lessons-heading">
          <p className={styles.eyebrow}>From the first conversation to the next order</p>
          <h2 id="lessons-heading">Learn the business.<br /><em>Get better at earning it.</em></h2>
          <p className={styles.sectionIntro}>For people entering merchandise sales and salespeople who want to sharpen their approach.</p>
          <div className={styles.lessonGrid}>
            <article><span>01</span><h3>Earn the meeting</h3><p>Find a useful opening, reach the right person and follow up when the timing isn&apos;t right.</p></article>
            <article><span>02</span><h3>Understand the assignment</h3><p>Ask what the client wants to accomplish before recommending what to put in someone&apos;s hands.</p></article>
            <article><span>03</span><h3>Make the work add up</h3><p>Present your ideas, price the whole order and decide which RFPs deserve your time.</p></article>
            <article><span>04</span><h3>Deliver and earn the next order</h3><p>Work with suppliers, stay ahead of problems and keep showing up for the relationship.</p></article>
          </div>
        </section>

        <section className={styles.authorNote} aria-labelledby="note-heading">
          <div><p className={styles.eyebrow}>The stories behind the lessons</p><h2 id="note-heading">My first big order?<br /><em>20,000 apples.</em></h2></div>
          <div><p>One of my early projects sent me looking for 20,000 Granny Smith apples. That story is in the book, alongside the everyday work of making calls, following up, understanding the assignment and keeping your word.</p><p>I wanted to put the lessons I&apos;ve learned into something a salesperson could actually use.</p><p className={styles.signature}>Michael Scott Cohen</p></div>
        </section>

        <section className={styles.teamSection} aria-labelledby="team-heading">
          <div><p className={styles.eyebrow}>For sales leaders</p><h2 id="team-heading">Give your team a book<br /><em>they can put to work.</em></h2><p>Welcome a new salesperson. Read a chapter together. Work through an exercise using a real opportunity.</p></div>
          <div className={styles.teamOffer}><p className={styles.eyebrow}>Signed company copies</p><p className={styles.teamPrice}>$24.99 <span>per book · 25 or more</span></p><p>Shipping and applicable tax are additional. Tell me your approximate quantity in the interest form, and we&apos;ll follow up when team orders open.</p><a href="/book?interest=team#book-updates" className={styles.textLink}>I&apos;m interested for my team <span aria-hidden="true">→</span></a></div>
        </section>
      </main>
      <footer className={styles.footer}><Link href="/">MSC.</Link><span>Michael Scott Cohen</span><Link href="/newsletter">The Operator&apos;s Note <span aria-hidden="true">↗</span></Link></footer>
    </div>
  );
}
