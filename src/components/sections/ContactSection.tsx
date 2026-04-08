"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionShell } from "./SectionShell";

type Props = {
  id?: string;
  tag: string;
  title: React.ReactNode;
  sub?: string;
  phone: string;
  email: string;
  address: string;
  mapHref: string;
  hours: { day: string; time: string }[];
};

export function ContactSection({ id, tag, title, sub, phone, email, address, mapHref, hours }: Props) {
  return (
    <SectionShell id={id} tag={tag} title={title} sub={sub}>
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--surface-2)] border border-white/[0.07] rounded-2xl p-8 space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center flex-shrink-0 text-[var(--accent)]">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-white/45 text-xs uppercase tracking-widest font-bold mb-1">Phone</div>
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="text-white font-extrabold text-lg hover:text-[var(--accent)] transition"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center flex-shrink-0 text-[var(--accent)]">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-white/45 text-xs uppercase tracking-widest font-bold mb-1">Email</div>
              <a
                href={`mailto:${email}`}
                className="text-white font-bold text-base hover:text-[var(--accent)] transition break-all"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center flex-shrink-0 text-[var(--accent)]">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-white/45 text-xs uppercase tracking-widest font-bold mb-1">Address</div>
              <a
                href={mapHref}
                target="_blank"
                rel="noreferrer"
                className="text-white font-bold text-base hover:text-[var(--accent)] transition leading-snug block"
              >
                {address}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--surface-2)] border border-white/[0.07] rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
              <Clock size={20} />
            </div>
            <div className="text-white font-extrabold text-lg">Business Hours</div>
          </div>
          <ul className="space-y-3 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
                <span className="text-white/65">{h.day}</span>
                <span className="text-white font-bold">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/55 text-xs mt-6 leading-relaxed">
            Towing dispatch is available 24/7 — call anytime, even outside business hours.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
