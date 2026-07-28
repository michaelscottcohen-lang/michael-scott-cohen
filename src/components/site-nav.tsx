"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-paper/85 backdrop-blur-md border-b border-rule"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#top"
          className="display text-[1.35rem] tracking-tight text-ink"
          onClick={() => setOpen(false)}
          aria-label={`${profile.name} — home`}
        >
          {profile.monogram}
          <span className="text-bronze">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="uline text-[0.82rem] uppercase tracking-[0.18em] text-stone hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#notes"
            className="text-[0.82rem] uppercase tracking-[0.18em] text-ink"
          >
            <span className="uline">The Note</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`block h-[1.5px] w-7 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-7 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-[68px] z-40 origin-top bg-paper transition-all duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`fixed inset-x-0 top-[68px] z-40 flex flex-col gap-2 px-6 pb-12 pt-6 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display border-b border-rule py-5 text-3xl text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#notes"
            onClick={() => setOpen(false)}
            className="display mt-6 text-2xl text-bronze"
          >
            The Operator&apos;s Note →
          </a>
        </nav>
      </div>
    </header>
  );
}
