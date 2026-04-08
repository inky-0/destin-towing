"use client";

import { Phone, Mail, MapPin } from "lucide-react";

type Col = { title: string; links: { href: string; label: string }[] };
type Props = {
  brand: string;
  tagline?: string;
  columns: Col[];
  contact: { phone?: string; email?: string; address?: string };
};

export function Footer({ brand, tagline, columns, contact }: Props) {
  return (
    <footer className="bg-[var(--surface)] border-t border-white/[0.07] mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16 grid gap-12 grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="brand-wordmark text-white text-3xl mb-3 leading-none">{brand}</div>
          {tagline && <p className="text-white/55 text-sm leading-relaxed">{tagline}</p>}
        </div>

        {columns.slice(0, 2).map((c) => (
          <div key={c.title}>
            <div className="text-[11px] uppercase tracking-widest text-white/45 font-bold mb-4">
              {c.title}
            </div>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-white text-sm transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="text-[11px] uppercase tracking-widest text-white/45 font-bold mb-4">
            Contact
          </div>
          <ul className="space-y-2.5 text-sm">
            {contact.phone && (
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={14} className="text-[var(--accent)]" />
                <a href={`tel:${contact.phone}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
            )}
            {contact.email && (
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={14} className="text-[var(--accent)]" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.address && (
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={14} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                <span>{contact.address}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07] py-5 px-6 sm:px-10 max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between text-white/40 text-xs">
        <span>
          © {new Date().getFullYear()} {brand}. All rights reserved.
        </span>
        <span>
          Built by <a href="https://vexasites.com" className="text-[var(--accent)]/80 hover:text-[var(--accent)]">Vexa Sites</a>
        </span>
      </div>
    </footer>
  );
}
