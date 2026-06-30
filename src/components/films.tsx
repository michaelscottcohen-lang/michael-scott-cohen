"use client";

import { useEffect, useState } from "react";
import type { Film } from "@/lib/content";

/**
 * Film section. The 16:9 frame is a designed PLACEHOLDER poster
 * (warm monotone title card + play glyph) — swap in a real <video>
 * src or iframe when films are available. The lightbox renders the
 * same poster at scale so the layout reads true in the demo.
 */

function PlayMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11.5" stroke="currentColor" strokeWidth="0.75" />
      <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="currentColor" />
    </svg>
  );
}

function PosterFrame({
  film,
  large = false,
}: {
  film: Film;
  large?: boolean;
}) {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden bg-ink">
      {/* quiet monotone "light" via layered flat fills — no gradient */}
      <div className="absolute inset-0 bg-ink" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(243,239,230,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute left-0 top-0 h-px w-full bg-paper/15" />

      {/* play affordance, centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayMark className="h-12 w-12 text-paper/70 transition-all duration-500 group-hover:scale-110 group-hover:text-paper md:h-14 md:w-14" />
      </div>

      {/* lower-third meta */}
      <div className="relative z-10 flex w-full items-end justify-between p-5 md:p-7">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-paper/55">
            {film.role} · {film.year}
          </p>
          <p
            className={`mt-2 text-paper ${
              large ? "display text-2xl md:text-4xl" : "display text-lg md:text-xl"
            }`}
          >
            {film.title}
          </p>
        </div>
        <span className="font-mono text-[0.7rem] tracking-widest text-paper/55">
          {film.runtime}
        </span>
      </div>
    </div>
  );
}

export default function Films({ films }: { films: Film[] }) {
  const [active, setActive] = useState<Film | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const featured = films.find((f) => f.featured) ?? films[0];
  const archive = films.filter((f) => f !== featured);

  return (
    <>
      {/* Featured */}
      <button
        type="button"
        onClick={() => setActive(featured)}
        aria-label={`Play: ${featured.title}`}
        className="group relative block w-full overflow-hidden text-left"
      >
        <div className="aspect-[16/9] w-full">
          <PosterFrame film={featured} large />
        </div>
      </button>

      <p className="prose-serif mt-6 max-w-2xl text-stone md:text-lg">
        {featured.description}
      </p>

      {/* Archive */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {archive.map((film) => (
          <button
            type="button"
            key={film.title}
            onClick={() => setActive(film)}
            aria-label={`Play: ${film.title}`}
            className="group text-left"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] w-full transition-[transform] duration-700 ease-out group-hover:scale-[1.02]">
                <PosterFrame film={film} />
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-rule pt-3">
              <h3 className="display text-lg text-ink">{film.title}</h3>
              <span className="font-mono text-[0.7rem] tracking-widest text-stone-light">
                {film.runtime}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {film.description}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative z-10 w-full max-w-[1100px]">
            <div className="aspect-[16/9] w-full">
              <PosterFrame film={active} large />
            </div>
            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="display text-2xl text-paper md:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-paper/55">
                  {active.role} · {active.year} · {active.runtime}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-paper/70 hover:text-paper"
              >
                Close ✕
              </button>
            </div>
            <p className="prose-serif mt-4 max-w-2xl text-paper/70">
              {active.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
