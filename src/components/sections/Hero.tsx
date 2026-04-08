"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";

type CTA = { href: string; label: string };
type Stat = { value: string; label: string };

type Props = {
  tag?: string;
  title: ReactNode;
  sub: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  bgImage: string;
  stats?: Stat[];
};

export function Hero({ tag, title, sub, primaryCta, secondaryCta, bgImage, stats }: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;

    // Reveal animation
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from(".hero-tag-pill", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from(".hero-title", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .from(".hero-sub", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .from(".hero-cta", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");

    if (stats?.length) {
      tl.from(".hero-stat", { y: 20, opacity: 0, stagger: 0.12, duration: 0.5, ease: "power2.out" }, "-=0.3");
    }

    // Mouse parallax (skip on touch)
    if (isTouch || !heroRef.current || !bgRef.current) return;

    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 50;
      const y = (e.clientY / h - 0.5) * 34;
      gsap.to(bgRef.current, { x, y, duration: 1.2, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(bgRef.current, { x: 0, y: 0, duration: 1.5, ease: "power2.out" });
    };

    const el = heroRef.current;
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [stats]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden px-6 sm:px-10 py-32 sm:py-40 text-center"
    >
      <div
        ref={bgRef}
        className="absolute -inset-16 will-change-transform"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.45) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/85 via-[var(--bg)]/70 to-[var(--bg)]/95" />

      <div className="relative max-w-[820px] w-full mx-auto flex flex-col items-center">
        {tag && (
          <div className="hero-tag-pill inline-flex items-center gap-2 bg-[var(--accent)]/12 border border-[var(--accent)]/30 text-[var(--accent-light,var(--accent))] uppercase tracking-widest text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-light,var(--accent))]" />
            {tag}
          </div>
        )}
        <h1 className="hero-title text-white font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)" }}>
          {title}
        </h1>
        <p className="hero-sub text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-9">
          {sub}
        </p>
        <div className="hero-cta flex flex-wrap justify-center gap-3.5">
          <MagneticButton
            asLink
            href={primaryCta.href}
            className="bg-[var(--accent)] text-black hover:bg-[var(--accent-light,var(--accent))] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            {primaryCta.label}
          </MagneticButton>
          {secondaryCta && (
            <MagneticButton
              asLink
              href={secondaryCta.href}
              className="border-2 border-[var(--accent)]/40 text-[var(--accent-light,var(--accent))] bg-transparent"
            >
              {secondaryCta.label}
            </MagneticButton>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="hero-stats mt-14 pt-9 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-[var(--accent)]/15 w-full max-w-xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat text-center">
                <div className="text-3xl sm:text-[2rem] font-extrabold text-white tracking-tight leading-none">{s.value}</div>
                <div className="text-[13px] text-white/45 mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
