"use client";

import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = Omit<HTMLMotionProps<"button">, "ref" | "children"> & {
  children: ReactNode;
  intensity?: number;
  asLink?: boolean;
  href?: string;
};

export function MagneticButton({
  children,
  className,
  intensity = 0.35,
  asLink,
  href,
  ...props
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.6 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * intensity);
    y.set((e.clientY - rect.top - rect.height / 2) * intensity);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Inner = (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "flex w-full items-center justify-center rounded-lg px-7 py-3.5 font-bold text-sm",
        "transition-shadow duration-200",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (asLink && href)
    return <a href={href} className="block w-full sm:w-auto">{Inner}</a>;
  return Inner;
}
