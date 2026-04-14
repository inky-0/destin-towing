"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { MapPin } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  id?: string;
  tag: string;
  title: ReactNode;
  sub?: string;
  areas: string[];
  mapHref?: string;
};

export function ServiceArea({ id, tag, title, sub, areas, mapHref }: Props) {
  return (
    <SectionShell id={id} tag={tag} title={title} sub={sub} className="bg-[var(--surface)]">
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {areas.map((area, i) => (
          <motion.div
            key={area}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 bg-[var(--surface-2)] border border-white/[0.07] rounded-xl px-4 py-3 hover:border-[var(--accent)]/30 transition-all duration-200"
          >
            <MapPin size={14} className="text-[var(--accent)] flex-shrink-0" />
            <span className="text-white/80 text-sm font-medium">{area}</span>
          </motion.div>
        ))}
      </div>

      {mapHref && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-semibold hover:underline"
          >
            <MapPin size={16} />
            View full service area on Google Maps
          </a>
        </motion.div>
      )}
    </SectionShell>
  );
}
