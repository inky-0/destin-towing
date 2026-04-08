"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionShell } from "./SectionShell";

type Item = { title: string; body: string };
type Props = {
  id?: string;
  tag: string;
  title: React.ReactNode;
  sub?: string;
  image: string;
  imageAlt: string;
  badge?: { big: string; small: string };
  items: Item[];
};

export function WhyChooseSplit({ id, tag, title, sub, image, imageAlt, badge, items }: Props) {
  return (
    <SectionShell id={id} className="bg-[var(--surface)]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className="w-full h-[420px] lg:h-[500px] object-cover" />
          {badge && (
            <div className="absolute bottom-5 left-5 bg-[var(--bg)]/90 border border-[var(--accent)]/20 rounded-xl px-5 py-3.5 backdrop-blur-md">
              <div className="text-3xl font-extrabold text-[var(--accent-light)] leading-none">{badge.big}</div>
              <div className="text-xs text-white/55 mt-1">{badge.small}</div>
            </div>
          )}
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {tag && (
              <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--accent-light)] mb-3">
                {tag}
              </div>
            )}
            <h2 className="text-white font-extrabold tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              {title}
            </h2>
            {sub && <p className="text-white/55 text-base mt-4 leading-relaxed">{sub}</p>}
          </motion.div>

          <ul className="mt-9 space-y-6">
            {items.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 items-start"
              >
                <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[var(--accent)]/12 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent-light)]">
                  <Check size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] mb-1">{item.title}</h4>
                  <p className="text-white/55 text-[13px] leading-relaxed">{item.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
