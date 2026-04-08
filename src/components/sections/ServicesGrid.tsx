"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

type Service = { icon: LucideIcon; name: string; description: string };
type Props = {
  id?: string;
  tag: string;
  title: string;
  sub?: string;
  services: Service[];
  columns?: 2 | 3 | 4;
};

export function ServicesGrid({ id, tag, title, sub, services, columns = 3 }: Props) {
  // Single column on phones (≤640px), expand on tablets+
  const gridCols =
    columns === 2 ? "md:grid-cols-2"
    : columns === 4 ? "md:grid-cols-2 lg:grid-cols-4"
    : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <SectionShell id={id} tag={tag} title={title} sub={sub}>
      <div className={`grid gap-5 ${gridCols}`}>
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--surface-2)] border border-white/[0.07] rounded-2xl p-6 hover:border-[var(--accent)]/30 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/12 border border-[var(--accent)]/25 flex items-center justify-center text-[var(--accent)] mb-4">
              <s.icon size={20} strokeWidth={2} />
            </div>
            <h3 className="text-white font-bold text-base mb-2">{s.name}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
