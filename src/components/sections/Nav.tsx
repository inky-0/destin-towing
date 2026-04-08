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
        "fixed top-0 inset-x-0 z-50 h-[72px] flex items-center px-6 sm:px-10 transition-colors",
        scrolled ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-white/5" : "bg-transparent",
      )}
    >
      <div className="flex-1 flex items-center gap-3">
        <a
          href="#home"
          className="brand-wordmark text-2xl sm:text-[28px] text-white whitespace-nowrap leading-none"
        >
          {brand}
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-white transition">
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-end">
        <a
          href={cta.href}
          className="rounded-full bg-[var(--accent)] text-black text-xs sm:text-sm font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 hover:opacity-90 transition"
        >
          {cta.label}
        </a>
      </div>
    </nav>
  );
}
