"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a className="monogram" href="#top" aria-label={`${profile.name} — home`}>{profile.monogram}<i>.</i></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-cta" href="#subscribe">Subscribe <span>↓</span></a>
        <button className="menu-button" type="button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span/><span/></button>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="mobile-signup" href="#subscribe" onClick={() => setOpen(false)}>Join The Operator&apos;s Note ↓</a>
      </div>
    </header>
  );
}
