"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { nav, profile } from "@/lib/content";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link className="monogram" href="/" aria-label={`MSC — ${profile.name} home`}>{profile.monogram}<i>.</i></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="nav-cta" href="/newsletter">Subscribe <span>→</span></Link>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span/><span/></button>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="mobile-menu open" aria-label="Mobile navigation">
          {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="mobile-signup" href="/newsletter" onClick={() => setOpen(false)}>Join The Operator&apos;s Note →</Link>
        </nav>
      ) : null}
    </header>
  );
}
