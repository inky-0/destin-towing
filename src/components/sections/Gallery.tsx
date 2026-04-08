"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

type Props = {
  id?: string;
  tag: string;
  title: React.ReactNode;
  sub?: string;
  images: { src: string; alt: string }[];
};

/** Asymmetric 3-col gallery — first image spans 2 cols, others fill the rest */
export function Gallery({ id, tag, title, sub, images }: Props) {
  return (
    <SectionShell id={id} tag={tag} title={title} sub={sub}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={img.src + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`relative overflow-hidden rounded-xl group ${
              i === 0 ? "col-span-2 sm:col-span-2 row-span-2 aspect-video sm:aspect-auto sm:h-[340px]" : "h-44 sm:h-[240px]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
