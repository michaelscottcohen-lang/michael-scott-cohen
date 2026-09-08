import Link from "next/link";
import SiteNav from "@/components/site-nav";

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="content-page">
        <section className="content-shell content-hero not-found">
          <p className="content-kicker">404</p>
          <h1>This page is not part of the work.</h1>
          <p className="content-deck">The address may have changed, or the page may no longer exist.</p>
          <p><Link className="text-link" href="/">Return home <span aria-hidden="true">→</span></Link></p>
        </section>
      </main>
    </>
  );
}
