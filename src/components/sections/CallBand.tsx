"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

type Props = {
  title: string;
  phoneLabel: string;
  phoneHref: string;
};

export function CallBand({ title, phoneLabel, phoneHref }: Props) {
  return (
    <section className="relative py-16 px-6 sm:px-10 bg-[var(--accent)] overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
          {title}
        </h2>
        <a
          href={phoneHref}
          className="flex items-center gap-3 bg-black text-white font-extrabold text-lg sm:text-xl px-7 py-4 rounded-lg hover:bg-white hover:text-[var(--accent)] transition shadow-2xl whitespace-nowrap"
        >
          <Phone size={22} strokeWidth={2.5} />
          {phoneLabel}
        </a>
      </motion.div>
    </section>
  );
}
