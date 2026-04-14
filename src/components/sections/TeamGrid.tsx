"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import Image from "next/image";
import { ReactNode } from "react";

type Member = { name: string; role: string; image: string };
type Props = {
  id?: string;
  tag: string;
  title: ReactNode;
  sub?: string;
  members: Member[];
};

export function TeamGrid({ id, tag, title, sub, members }: Props) {
  const gridCols =
    members.length <= 2 ? "sm:grid-cols-2"
    : members.length === 3 ? "sm:grid-cols-3"
    : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <SectionShell id={id} tag={tag} title={title} sub={sub} className="bg-[var(--surface)]">
      <div className={`grid gap-5 ${gridCols}`}>
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-[var(--surface-2)] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-200"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={m.image}
                alt={m.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-white font-bold text-base">{m.name}</h3>
              <p className="text-white/50 text-sm mt-1">{m.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
