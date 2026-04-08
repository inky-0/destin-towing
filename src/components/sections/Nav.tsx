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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-[88px] flex items-center px-6 sm:px-10 transition-colors",
        scrolled ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent",
      )}
    >
      {/* Left: nav links */}
      <div className="flex-1 hidden md:flex items-center gap-8 text-sm text-white/70">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-white transition">
            {l.label}
          </a>
        ))}
      </div>

      {/* Center: brand wordmark — absolute-centered so it's not pushed by side widths */}
      <a
        href="#home"
        className="brand-wordmark absolute left-1/2 -translate-x-1/2 text-3xl sm:text-[40px] text-white whitespace-nowrap leading-none"
      >
        {brand}
      </a>

      {/* Right: CTA */}
      <div className="flex-1 flex items-center justify-end ml-auto">
        <a
          href={cta.href}
          className="rounded-full bg-[var(--accent)] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 hover:bg-[var(--accent-light)] transition shadow-[0_4px_20px_rgba(204,17,17,0.35)]"
        >
          {cta.label}
        </a>
      </div>
    </nav>
  );
}
