"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { ReactNode } from "react";

type Step = { title: string; description: string };
type Props = {
  id?: string;
  tag: string;
  title: ReactNode;
  sub?: string;
  steps: Step[];
};

export function HowItWorks({ id, tag, title, sub, steps }: Props) {
  return (
    <SectionShell id={id} tag={tag} title={title} sub={sub}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[var(--surface-2)] border border-white/[0.07] rounded-2xl p-6 hover:border-[var(--accent)]/30 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--accent)]/12 border border-[var(--accent)]/25 flex items-center justify-center text-[var(--accent)] font-extrabold text-sm mb-4">
              {i + 1}
            </div>
            <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>

            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 -right-3 w-6 text-white/20 text-xl select-none">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
