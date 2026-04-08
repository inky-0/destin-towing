"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id?: string;
  tag?: string;
  title?: ReactNode;
  sub?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Standard section wrapper: tag → H2 → sub → content.
 * Use this so every section on the site has identical vertical rhythm
 * and intro animation.
 */
export function SectionShell({ id, tag, title, sub, className = "", children }: Props) {
  return (
    <section id={id} className={`relative py-20 sm:py-32 px-6 sm:px-10 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(tag || title || sub) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 sm:mb-16"
          >
            {tag && (
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)] mb-3">
                {tag}
              </div>
            )}
            {title && (
              <h2 className="text-white font-extrabold tracking-tight leading-tight"
                  style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}>
                {title}
              </h2>
            )}
            {sub && (
              <p className="text-white/65 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
                {sub}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
