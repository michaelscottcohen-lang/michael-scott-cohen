import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import { bookPrompts, promptIntroduction, sourceSections } from "@/lib/book-resources";
import { SITE_URL } from "@/lib/site";
import CopyPrompt from "./copy-prompt";
import styles from "./resources.module.css";

const downloads = "/downloads/book/";
const title = "Reader resources | So You Want to Sell Branded Merch";
const description = "Sixteen printable exercises with pricing answers, twenty copyable AI prompts and the book's source links. Free reader resources from Michael Scott Cohen. No signup required.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book-resources" },
  openGraph: { title, description, url: `${SITE_URL}/book-resources`, type: "website", images: [`${SITE_URL}/images/book/cover.webp`] },
};

function SourceText({ text }: { text: string }) {
  // Only the two inline formats present in the supplied source notes are allowed.
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^)]+\))/g).map((part, index) => {
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={index} href={link[2]}>{link[1]}</a>;
    return part;
  });
}

export default function BookResourcesPage() {
  return (
    <div className={styles.resourcePage}>
      <SiteNav />
      <main id="reader-resources">
        <section className={styles.hero} aria-labelledby="resources-title">
          <div>
            <p className={styles.eyebrow}>So You Want to Sell Branded Merch</p>
            <h1 id="resources-title">Put the book<br /><em>to work.</em></h1>
            <p className={styles.intro}>Print a worksheet. Adapt a prompt. Follow a source.<br className={styles.desktopBreak} /> Everything here is yours to use alongside the book.</p>
            <a className={styles.primaryLink} href={`${downloads}Branded-Merch-Reader-Resources.zip`} download>Download all resources <span aria-hidden="true">↓</span></a>
            <p className={styles.small}>Free reader resources. No email or signup required.</p>
          </div>
          <div className={styles.bookNote}>
            <Image src="/images/book/cover.webp" width={1008} height={1440} sizes="(max-width: 760px) 100px, 160px" alt="So You Want to Sell Branded Merch book cover" />
            <div><p className={styles.eyebrow}>A note from Michael</p><p>Use these with a real opportunity. Start with the part of the work in front of you.</p><p className={styles.signature}>Michael Scott Cohen</p></div>
          </div>
        </section>

        <nav className={styles.sectionNav} aria-label="Reader resources">
          <a href="#worksheets"><span>01</span> Printable exercises <span aria-hidden="true">↓</span></a>
          <a href="#prompts"><span>02</span> AI prompts <span aria-hidden="true">↓</span></a>
          <a href="#sources"><span>03</span> Source links <span aria-hidden="true">↓</span></a>
        </nav>

        <section id="worksheets" className={styles.worksheetSection} aria-labelledby="worksheets-title">
          <div><p className={styles.eyebrow}>01 / The companion workbook</p><h2 id="worksheets-title">A fresh sheet.<br /><em>A real opportunity.</em></h2><p>The same sixteen exercises included in the book, ready to print whenever you need them. The pricing exercise includes answers.</p></div>
          <div className={styles.workbookDownload}><span className={styles.bigNumber}>16</span><h3>Printable exercises</h3><p>Companion workbook · PDF<br />Includes pricing answers</p><a className={styles.primaryLink} href={`${downloads}Branded-Merch-Companion-Workbook.pdf`} download>Download the workbook <span aria-hidden="true">↓</span></a><p className={styles.small}>Print copies for your own use.</p></div>
        </section>

        <section id="prompts" className={styles.section} aria-labelledby="prompts-title">
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / Twenty starting points</p><h2 id="prompts-title">Give AI a useful<br /><em>assignment.</em></h2></div><div><p>Open the prompt for the job you need to do. Gather the inputs, copy it and make it your own.</p><div className={styles.downloadLinks}><a href={`${downloads}20-AI-Prompts-for-Selling-Branded-Merch.txt`} download>Download all prompts (.txt) ↓</a><a href={`${downloads}20-AI-Prompts-for-Selling-Branded-Merch.md`} download>Markdown version ↓</a></div></div></div>
          <details className={styles.usage}><summary>How to use these prompts</summary><div>{promptIntroduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></details>
          <div className={styles.promptList}>
            {bookPrompts.map((prompt) => (
              <details className={styles.prompt} id={`prompt-${prompt.number}`} key={prompt.number}>
                <summary><span className={styles.promptNumber}>{String(prompt.number).padStart(2, "0")}</span><span className={styles.promptTitle}>{prompt.title}</span><span className={styles.expand} aria-hidden="true" /></summary>
                <div className={styles.promptBody}>
                  <p className={styles.purpose}>{prompt.purpose}</p>
                  <p><strong>Have ready:</strong> {prompt.inputs}</p>
                  <div className={styles.promptText}><CopyPrompt text={prompt.text} number={prompt.number} /><p id={`prompt-text-${prompt.number}`}>{prompt.text}</p></div>
                  <p className={styles.review}><strong>Before you use it:</strong> {prompt.review}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="sources" className={styles.section} aria-labelledby="sources-title">
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>03 / Keep learning</p><h2 id="sources-title">Follow the<br /><em>source.</em></h2></div><div><p>The research notes and source links credited in the book, with context for how to use them.</p><a className={styles.textLink} href={`${downloads}Book-Source-Links.md`} download>Download the source notes ↓</a></div></div>
          {sourceSections.map((section) => (
            <details className={styles.sources} key={section.title} open>
              <summary>{section.title}<span aria-hidden="true" className={styles.expand} /></summary>
              <div>{section.paragraphs.map((paragraph, index) => <p key={index}><SourceText text={paragraph} /></p>)}</div>
            </details>
          ))}
        </section>
      </main>
      <footer className={styles.footer}><Link href="/book">← About the book</Link><span>Michael Scott Cohen</span><a href={`${downloads}Read-Me.txt`} download>Resource notes ↓</a></footer>
    </div>
  );
}
