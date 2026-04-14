"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

type Item = { question: string; answer: string };
type Props = {
  id?: string;
  tag: string;
  title: ReactNode;
  sub?: string;
  items: Item[];
};

function AccordionItem({ item, index }: { item: Item; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="border border-white/[0.07] rounded-xl overflow-hidden bg-[var(--surface-2)] hover:border-[var(--accent)]/20 transition-colors duration-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-white font-semibold text-[15px] leading-snug">{item.question}</span>
        <ChevronDown
          size={18}
          className={`text-white/40 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ id, tag, title, sub, items }: Props) {
  return (
    <SectionShell id={id} tag={tag} title={title} sub={sub}>
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {items.map((item, i) => (
          <AccordionItem key={item.question} item={item} index={i} />
        ))}
      </div>
    </SectionShell>
  );
}
