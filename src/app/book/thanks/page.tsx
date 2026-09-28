import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import styles from "../book.module.css";

export const metadata: Metadata = { title: "Book updates", robots: { index: false, follow: false }, alternates: { canonical: "/book/thanks" } };

export default function BookThanksPage() {
  return <div className={styles.bookPage}><SiteNav /><main className={styles.thanks}><p className={styles.eyebrow}>So You Want to Sell Branded Merch</p><h1>Thanks for being here.</h1><p>If you arrived from your confirmation email, Kit has recorded your confirmation. I&apos;ll keep you posted as the book gets closer to release.</p><p>No payment has been taken and no copy has been reserved.</p><p>Michael Scott Cohen</p><Link className={styles.primaryLink} href="/book">Back to the book <span aria-hidden="true">→</span></Link></main></div>;
}
