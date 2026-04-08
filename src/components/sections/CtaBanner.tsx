"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

type Props = {
  title: string;
  sub?: string;
  cta: { href: string; label: string };
};

export function CtaBanner({ title, sub, cta }: Props) {
  return (
    <section className="relative py-20 sm:py-24 px-6 sm:px-10 overflow-hidden text-center"
      style={{
        background: "linear-gradient(135deg, #4a0606 0%, #1a0303 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl mx-auto"
      >
        <h2 className="text-white font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
          {title}
        </h2>
        {sub && <p className="text-white/75 text-base sm:text-lg mb-8 leading-relaxed">{sub}</p>}
        <MagneticButton
          asLink
          href={cta.href}
          className="bg-[var(--accent)] text-white text-base px-9 py-4 hover:bg-[var(--accent-light)] shadow-[0_4px_28px_rgba(204,17,17,0.5)]"
        >
          {cta.label}
        </MagneticButton>
      </motion.div>
    </section>
  );
}
