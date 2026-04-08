"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionShell } from "./SectionShell";

type Item = { quote: string; name: string; role?: string };
type Props = {
  id?: string;
  tag: string;
  title: React.ReactNode;
  items: Item[];
};

export function Testimonials({ id, tag, title, items }: Props) {
  return (
    <SectionShell id={id} tag={tag} title={title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--surface-2)] border border-white/[0.07] rounded-2xl p-7"
          >
            <div className="flex gap-1 mb-4 text-[var(--accent)]">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-white/85 text-sm leading-relaxed mb-5">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <div className="text-white font-bold text-sm">{t.name}</div>
              {t.role && <div className="text-white/45 text-xs mt-0.5">{t.role}</div>}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
