"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  brand: string;
  links: { href: string; label: string }[];
  cta: { href: string; label: string };
};

export function Nav({ brand, links, cta }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-[70px] flex items-center justify-between px-6 sm:px-10 transition-colors",
          scrolled
            ? "bg-[var(--bg)]/92 backdrop-blur-md border-b border-[var(--accent)]/12"
            : "bg-[var(--bg)]/70 backdrop-blur-md border-b border-[var(--accent)]/12",
        )}
      >
        {/* Brand — left aligned */}
        <a
          href="#home"
          className="brand-wordmark text-2xl sm:text-[28px] text-white leading-none whitespace-nowrap"
        >
          {brand}
        </a>

        {/* Center links (desktop only) */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/65 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--accent-light)] transition">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cta.href}
              className="bg-[var(--accent)] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-[var(--accent-light)] transition shadow-[0_4px_18px_rgba(204,17,17,0.35)]"
            >
              {cta.label}
            </a>
          </li>
        </ul>

        {/* Mobile: just the CTA + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={cta.href}
            className="bg-[var(--accent)] text-white px-3.5 py-2 rounded-md font-semibold text-xs hover:bg-[var(--accent-light)] transition"
          >
            {cta.label}
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            className="flex flex-col gap-1.5 p-1.5"
          >
            <span className={cn("block w-6 h-0.5 bg-white transition-transform", menuOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block w-6 h-0.5 bg-white transition-opacity", menuOpen && "opacity-0")} />
            <span className={cn("block w-6 h-0.5 bg-white transition-transform", menuOpen && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="fixed top-[70px] inset-x-0 z-40 bg-[var(--bg)] border-b border-[var(--accent)]/12 px-6 py-6 md:hidden flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-base font-medium hover:text-[var(--accent-light)] transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
