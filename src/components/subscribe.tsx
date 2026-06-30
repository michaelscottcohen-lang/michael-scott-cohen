"use client";

import { useState } from "react";

// Placeholder capture — opens the visitor's email client addressed to a
// placeholder inbox. Swap the action for a real newsletter provider
// (Beehiiv, Buttondown, ConvertKit) when one is connected.
const INBOX = "letter@michaelscottcohen.com";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Add me to the letter");
    const body = encodeURIComponent(`Add me to the list:\n${email}`);
    window.location.href = `mailto:${INBOX}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="flex items-center gap-4 border-b border-ink/30 pb-3 focus-within:border-ink">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@somewhere.com"
          aria-label="Email address"
          className="w-full bg-transparent text-base text-ink placeholder:text-stone-light focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:text-bronze"
        >
          {sent ? "Sent ✓" : "Subscribe →"}
        </button>
      </div>
      <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-stone-light">
        No funnel. If the writing is useful, it travels.
      </p>
    </form>
  );
}
