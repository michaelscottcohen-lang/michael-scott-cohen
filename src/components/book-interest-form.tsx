"use client";

import Script from "next/script";
import styles from "@/app/book/book.module.css";

declare global {
  interface Window {
    CK?: { default: () => void };
  }
}

// Kit's generated HTML embed for the dedicated book-interest form.
// CK handles the real response, double opt-in, errors and any verification.
// Michael's approved signup includes book updates and The Operator's Note.
// No payment is submitted by this form.
const kitOptions = {
  settings: {
    after_subscribe: {
      action: "message",
      success_message: "Thanks for your interest in the book. Check your inbox to confirm book updates and The Operator's Note, my weekly newsletter. No payment or reservation is required.",
      redirect_url: "",
    },
    analytics: {},
    powered_by: { show: true, url: "https://kit.com/features/forms" },
    recaptcha: { enabled: false },
    return_visitor: { action: "show", custom_content: "" },
  },
  version: "5",
};

export default function BookInterestForm({ initialInterest = "individual" }: { initialInterest?: "individual" | "team" }) {
  return (
    <>
      <form
        action="https://app.kit.com/forms/9973542/subscriptions"
        method="post"
        className={`${styles.interestForm} seva-form formkit-form`}
        data-sv-form="9973542"
        data-uid="3d36ba4c24"
        data-format="inline"
        data-version="5"
        data-options={JSON.stringify(kitOptions)}
        aria-label="Book updates"
      >
        <div data-style="clean">
          <ul className={styles.kitErrors} data-element="errors" data-group="alert" aria-live="polite" />
          <div data-element="fields" className="formkit-fields">
            <div className={styles.fieldRow}>
              <div><label htmlFor="book-name">First name <span className={styles.optional}>(optional)</span></label><input id="book-name" name="fields[first_name]" autoComplete="given-name" maxLength={80} /></div>
              <div><label htmlFor="book-email">Email address</label><input id="book-email" name="email_address" type="email" autoComplete="email" required maxLength={254} /></div>
            </div>
            <fieldset>
              <legend>I&apos;m interested in the book for</legend>
              <div className={styles.choices}>
                <label><input type="radio" name="fields[book_interest]" value="individual" defaultChecked={initialInterest === "individual"} /> Myself</label>
                <label><input type="radio" name="fields[book_interest]" value="team" defaultChecked={initialInterest === "team"} /> My sales team</label>
              </div>
            </fieldset>
            <details className={styles.teamFields} open={initialInterest === "team" || undefined}>
              <summary>Buying for a team? Add a little detail (optional)</summary>
              <div className={styles.fieldRow}>
                <div><label htmlFor="book-company">Company</label><input id="book-company" name="fields[book_company]" autoComplete="organization" maxLength={120} /></div>
                <div><label htmlFor="book-quantity">Approximate quantity</label><select id="book-quantity" name="fields[book_quantity]" defaultValue=""><option value="">Not sure yet</option><option value="1-24">1–24 copies</option><option value="25-49">25–49 copies</option><option value="50-99">50–99 copies</option><option value="100-249">100–249 copies</option><option value="250+">250+ copies</option></select></div>
              </div>
            </details>
            <p className={styles.formNote}>You&apos;ll receive book updates and The Operator&apos;s Note, my weekly newsletter. We&apos;ll also follow up about any team interest you share. Unsubscribe anytime. No payment is taken.</p>
            <button type="submit" data-element="submit"><span className={styles.buttonIdle}>Send me updates</span><span className={styles.buttonBusy}>Submitting…</span></button>
          </div>
          <p className={styles.kitCredit}><a href="https://kit.com/features/forms" target="_blank" rel="noopener noreferrer">Powered by Kit</a></p>
        </div>
      </form>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" onReady={() => window.CK?.default()} />
    </>
  );
}
