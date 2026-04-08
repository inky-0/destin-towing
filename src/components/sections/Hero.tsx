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
      className="relative min-h-[100svh] flex items-end sm:items-center justify-center overflow-hidden px-5 sm:px-10 pt-32 pb-16 sm:pt-48 sm:pb-32 text-center"
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
          <div className="hero-tag-pill hidden sm:inline-flex items-center gap-2 bg-[var(--accent)]/12 border border-[var(--accent)]/30 text-[var(--accent-light,var(--accent))] uppercase tracking-widest text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-light,var(--accent))]" />
            {tag}
          </div>
        )}
        <h1 className="hero-title text-white font-extrabold leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 8vw, 3.6rem)" }}>
          {title}
        </h1>
        <p className="hero-sub text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-9">
          {sub}
        </p>
        <div className="hero-cta w-full flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-2.5 sm:gap-3.5 max-w-md sm:max-w-none mx-auto">
          <MagneticButton
            asLink
            href={primaryCta.href}
            className="bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] shadow-[0_4px_24px_rgba(204,17,17,0.4)] !w-full sm:!w-auto !rounded-[10px] sm:!rounded-lg !py-4 sm:!py-3.5"
          >
            {primaryCta.label}
          </MagneticButton>
          {secondaryCta && (
            <MagneticButton
              asLink
              href={secondaryCta.href}
              className="border-2 border-[var(--accent)]/40 text-[var(--accent-light)] bg-transparent !w-full sm:!w-auto !rounded-[10px] sm:!rounded-lg !py-4 sm:!py-3.5"
            >
              {secondaryCta.label}
            </MagneticButton>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="hero-stats mt-9 sm:mt-14 pt-7 sm:pt-9 grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-x-3 sm:gap-x-12 gap-y-4 border-t border-[var(--accent)]/15 w-full max-w-xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`hero-stat text-center px-2 ${
                  i < stats.length - 1 ? "sm:border-r-0 border-r border-[var(--accent)]/15" : ""
                }`}
              >
                <div className="text-2xl sm:text-[2rem] font-extrabold text-white tracking-tight leading-none">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-[13px] text-white/45 mt-1.5 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
