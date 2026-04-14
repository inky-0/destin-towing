"use client";

/**
 * ─────────────────────────────────────────────────────────────────────
 * VEXA WEBSITE TEMPLATE v2 — Premium Custom Design
 *
 * To build a new client site, change ONLY:
 *   1. The constants below (BRAND, PHONE, EMAIL, etc.)
 *   2. The content arrays (SERVICES, TESTIMONIALS, FAQ_ITEMS, etc.)
 *   3. The text strings in the About, Hero, and CTA sections
 *   4. The images in /public/ (hero-bg.jpg, shop.jpg, work-1..5.jpg)
 *   5. The 8 CSS variables in globals.css (the brand palette)
 *   6. The metadata in layout.tsx
 *
 * Do NOT restructure the page or remove sections. If a section isn't
 * needed (e.g. no real testimonials), delete the <TestimonialsSection />
 * call from the Home component at the bottom.
 * ─────────────────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  Search,
  ShieldCheck,
  Wrench,
  Thermometer,
  Cog,
  ClipboardCheck,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   1. CLIENT CONSTANTS — replace per client
   ═══════════════════════════════════════════════════════════════════ */

const BRAND       = "Destin Towing";
const PHONE       = "(850) 737-1738";
const PHONE_TEL   = "tel:8507371738";
const EMAIL       = "info@destintowing.com";
const ADDRESS     = "112 Mountain Dr, Destin, FL 32541";
const MAP_LINK    = "https://www.google.com/maps/search/?api=1&query=Destin+Towing+112+Mountain+Dr+Destin+FL+32541";
const TAGLINE     = "24/7 towing and roadside assistance in Destin, FL.";

/* ═══════════════════════════════════════════════════════════════════
   2. CONTENT ARRAYS — replace per client
   ═══════════════════════════════════════════════════════════════════ */

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  { icon: Search, name: "Lockout Service", description: "Locked out of your car? We get you back in fast without damaging your vehicle. Day or night, we're on the way.", image: "/work-1.jpg" },
  { icon: ShieldCheck, name: "Emergency Towing", description: "Accident, breakdown, or stuck on the side of the road — call us and we'll have a truck to you as fast as possible.", image: "/work-2.jpg" },
  { icon: Wrench, name: "Roadside Assistance", description: "Flat tire, dead battery, or out of gas? We handle it on the spot so you can get back on the road without a tow.", image: "/work-3.jpg" },
  { icon: Thermometer, name: "Jump Starts & Battery", description: "Dead battery in a parking lot or your driveway? We'll jump-start your vehicle or help you get a replacement.", image: "/work-4.jpg" },
  { icon: Cog, name: "Flatbed Towing", description: "Our flatbed trucks keep all four wheels off the ground, protecting your vehicle from drivetrain damage during transport.", image: "/work-5.jpg" },
  { icon: ClipboardCheck, name: "Long-Distance Towing", description: "Need a tow beyond Destin? We handle long-distance hauls across the Florida Panhandle and beyond. Call for a quote.", image: "/shop.jpg" },
];

const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

const FAQ_ITEMS = [
  { question: "How much does a tow cost in Destin?", answer: "It depends on the distance and type of tow. Local tows in Destin typically start around $75-$125. Long-distance and after-hours jobs vary. Call (850) 737-1738 for an exact quote — no hidden fees, ever." },
  { question: "How fast can you get to me?", answer: "We respond to most calls in the Destin area within 20-30 minutes, sometimes faster. We're local and always on the road, so we don't keep you waiting." },
  { question: "What's the difference between flatbed towing and dolly towing?", answer: "A flatbed carries your entire vehicle off the ground, which is the safest option for AWD, luxury, and lowered cars. Dolly towing lifts only the front wheels. We'll recommend the right method for your vehicle." },
  { question: "What should I do if I'm stranded on the highway?", answer: "Pull as far off the road as you can, turn on your hazards, and stay in your vehicle if traffic is close. Then call (850) 737-1738. We'll get your location and dispatch a truck right away." },
  { question: "Does insurance cover towing?", answer: "Most auto insurance policies and roadside assistance plans cover towing. We work with all major insurance providers. Call us and we can help you figure out your coverage before we start." },
];

const SERVICE_AREAS = [
  "Destin", "Fort Walton Beach", "Niceville", "Crestview",
  "Santa Rosa Beach", "Miramar Beach", "Valparaiso", "Mary Esther",
];

const WHY_ITEMS = [
  "24/7 availability — breakdowns don't wait for business hours, and neither do we",
  "Fast response times — we're local and usually on-scene within 20-30 minutes",
  "Flatbed fleet — your vehicle stays off the pavement and protected during every tow",
  "No hidden fees — the price we quote is the price you pay, period",
  "Licensed & insured — fully covered so you don't have to worry about a thing",
  "Local knowledge — we know every road, lot, and back street on the Emerald Coast",
];

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: "24/7 Available", desc: "Day, night, weekends, holidays — we answer every call" },
  { icon: Check, title: "Fast Response", desc: "On-scene in 20-30 minutes across the Destin area" },
  { icon: Clock, title: "No Hidden Fees", desc: "Upfront pricing with no surprise charges after the job" },
];

const STATS: { target: number; suffix: string; label: string; isStar?: boolean }[] = [
  { target: 10, suffix: "+", label: "Years in Business" },
  { target: 3000, suffix: "+", label: "Tows Completed" },
  { target: 24, suffix: "/7", label: "Always Available" },
];

const HOURS = [
  { day: "Monday - Sunday", time: "24 Hours" },
];

/* ═══════════════════════════════════════════════════════════════════
   SCROLL PROGRESS
   ═══════════════════════════════════════════════════════════════════ */

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
}

/* ═══════════════════════════════════════════════════════════════════
   TOP BAR
   ═══════════════════════════════════════════════════════════════════ */

function TopBar() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-[#080808] border-b border-white/5 text-sm text-[var(--text-mute)]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="text-[var(--accent)]" />
            {PHONE}
          </a>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <MapPin size={14} className="text-[var(--accent)]" />
            {ADDRESS}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[var(--accent)]" />
          <span>Available 24/7</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════════════ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "top-0 md:top-[36px] bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt={BRAND} width={40} height={40} className="w-10 h-10" />
          <span className="brand-wordmark text-xl text-white tracking-wider hidden sm:inline">
            {BRAND.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[var(--accent)]">{BRAND.split(" ").slice(-1)}</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[var(--text-mute)] hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={PHONE_TEL}
          className="hidden md:inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          <Phone size={15} />
          Call {PHONE}
        </a>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-white/5 px-6 py-6 space-y-4">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="block text-lg text-[var(--text-mute)] hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={PHONE_TEL} className="block text-center bg-[var(--accent)] text-black font-semibold py-3 rounded-lg mt-4">
            Call {PHONE}
          </a>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════ */

const HERO_SLIDES = ["/hero-bg.jpg", "/work-1.jpg", "/work-3.jpg"];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" onMouseMove={handleMouseMove}>
      {HERO_SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === currentSlide ? 1 : 0,
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.1)`,
            transition: "opacity 1s ease-in-out, transform 0.7s ease-out",
          }}
        >
          <Image src={src} alt={BRAND} fill className="object-cover" priority={i === 0} />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <FadeIn delay={0.1}>
          <span className="inline-block text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-6">
            24/7 Towing & Roadside Assistance in Destin
          </span>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Stranded? We'll be there fast.
            <br />
            <span className="text-[var(--accent-light)]">No wait. No hassle.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-[var(--text-mute)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Fast, reliable towing and roadside assistance across Destin and the Emerald Coast. Flatbed trucks, upfront pricing, and a team that actually picks up the phone — 24 hours a day, 7 days a week.
          </p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors">
              <Phone size={20} />
              Call {PHONE}
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium text-lg px-8 py-4 rounded-lg transition-colors">
              Our Services
              <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <a href="#trust" className="inline-block mt-16 animate-bounce">
            <ChevronDown size={28} className="text-[var(--text-mute)]" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TRUST BAR
   ═══════════════════════════════════════════════════════════════════ */

function TrustBar() {
  return (
    <section id="trust" className="relative z-10 -mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {TRUST_ITEMS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="bg-[var(--surface)] border border-white/[0.06] rounded-xl p-6 flex items-start gap-4 card-hover">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--text-mute)]">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION HEADER (reusable)
   ═══════════════════════════════════════════════════════════════════ */

function SectionHeader({ tag, title, sub, center = true }: { tag: string; title: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <FadeIn>
        <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">{tag}</span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">{title}</h2>
      </FadeIn>
      {sub && (
        <FadeIn delay={0.2}>
          <p className="text-[var(--text-mute)] text-lg mt-4 max-w-2xl mx-auto leading-relaxed">{sub}</p>
        </FadeIn>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT / WELCOME
   ═══════════════════════════════════════════════════════════════════ */

function About() {
  return (
    <section id="about" className="section-pad bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">About Us</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              Destin's most{" "}
              <span className="text-[var(--accent-light)]">reliable</span> tow truck
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--text-mute)] text-lg mt-6 leading-relaxed">
              Destin Towing has been serving the Emerald Coast for over a decade. When you're stranded on Highway 98, locked out at the beach, or need a vehicle moved across the state, we're the call that gets answered — every single time.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-[var(--text-mute)] text-lg mt-4 leading-relaxed">
              Our flatbed fleet handles everything from sedans to SUVs without putting extra wear on your drivetrain. We quote upfront, show up fast, and treat your vehicle like it's our own. That's why locals keep calling us back.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black font-semibold px-6 py-3 rounded-lg mt-8 transition-colors">
              <Phone size={18} />
              Call {PHONE}
            </a>
          </FadeIn>
        </div>

        <FadeIn direction="right" delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image src="/shop.jpg" alt={`Inside ${BRAND}`} fill className="object-cover" />
            <div className="absolute bottom-6 left-6 bg-[var(--accent)] text-black rounded-xl px-5 py-3">
              <span className="block text-3xl font-bold leading-none">24/7</span>
              <span className="text-sm font-medium">Always Available</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SERVICES GRID
   ═══════════════════════════════════════════════════════════════════ */

function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What We Do"
          title={<>From lockouts to{" "}<span className="text-[var(--accent-light)]">long-distance tows</span></>}
          sub="Whatever's got you stuck, we've got a truck and a plan to fix it. Here's what we handle."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.name} delay={i * 0.08}>
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] card-hover h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-2)] via-[var(--surface-2)]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                      <service.icon size={20} className="text-black" />
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[var(--surface-2)]">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-[var(--text-mute)] leading-relaxed mb-4">{service.description}</p>
                  <a href={PHONE_TEL} className="inline-flex items-center gap-1 text-[var(--accent)] text-sm font-medium hover:gap-2 transition-all">
                    Schedule Service <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STATS BAND (animated counters)
   ═══════════════════════════════════════════════════════════════════ */

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView.current) {
          inView.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function StatsBand() {
  return (
    <section className="section-pad bg-[var(--bg)] border-y border-white/[0.04]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {STATS.map((stat) => (
          <FadeIn key={stat.label}>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[var(--accent)]">
                {stat.isStar ? (
                  <span className="flex items-center justify-center gap-2">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    <Star size={32} className="fill-[var(--accent)] text-[var(--accent)]" />
                  </span>
                ) : (
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-[var(--text-mute)] mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   WHY CHOOSE US
   ═══════════════════════════════════════════════════════════════════ */

function WhyChooseUs() {
  return (
    <section id="why" className="section-pad bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="left">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image src="/work-2.jpg" alt={`Why choose ${BRAND}`} fill className="object-cover" />
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              Why Destin{" "}
              <span className="text-[var(--accent-light)]">trusts us</span> on the road
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--text-mute)] text-lg mt-4 leading-relaxed">
              We're not a call center dispatching from out of state. We're a local crew that knows these roads and shows up when you need us.
            </p>
          </FadeIn>

          <div className="mt-8 space-y-4">
            {WHY_ITEMS.map((item, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.06}>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-[var(--accent)]" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TESTIMONIALS — delete <TestimonialsSection /> if no real reviews
   ═══════════════════════════════════════════════════════════════════ */

function TestimonialsSection() {
  return (
    <section id="reviews" className="section-pad bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What Customers Say"
          title={<>Trusted by{" "}<span className="text-[var(--accent-light)]">customers</span> across the area</>}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name + i} delay={i * 0.1}>
              <div className="bg-[var(--surface)] border border-white/[0.06] rounded-xl p-8 card-hover h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[var(--accent)] text-[var(--accent)]" />
                  ))}
                </div>
                <blockquote className="text-white/80 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[var(--text-mute)]">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════════════ */

function FAQItem({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-white/[0.06] rounded-xl overflow-hidden card-hover">
      <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpen(!open)}>
        <span className="font-semibold text-white pr-4">{item.question}</span>
        <ChevronDown size={20} className={`text-[var(--accent)] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div ref={contentRef} className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? contentRef.current?.scrollHeight ?? 0 : 0 }}>
        <p className="px-6 pb-6 text-[var(--text-mute)] leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="section-pad bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          tag="Common Questions"
          title={<>Frequently asked{" "}<span className="text-[var(--accent-light)]">questions</span></>}
        />
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <FadeIn key={item.question}>
              <FAQItem item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SERVICE AREA
   ═══════════════════════════════════════════════════════════════════ */

function ServiceAreaSection() {
  return (
    <section id="areas" className="section-pad bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Service Area"
          title={<>Serving the{" "}<span className="text-[var(--accent-light)]">Emerald Coast</span></>}
          sub="From Crestview to Santa Rosa Beach, we cover the full stretch. If you're nearby, we can get to you."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SERVICE_AREAS.map((area, i) => (
            <FadeIn key={area} delay={i * 0.05}>
              <div className="flex items-center gap-3 bg-[var(--surface)] border border-white/[0.06] rounded-xl px-4 py-4 card-hover">
                <MapPin size={16} className="text-[var(--accent)] shrink-0" />
                <span className="text-white/90 text-sm font-medium">{area}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-8">
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline">
              <MapPin size={16} />
              View on Google Maps
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CTA BANNER
   ═══════════════════════════════════════════════════════════════════ */

function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]" />

      <div className="relative section-pad">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Stuck on the side of the road?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-black/70 text-lg mt-4 max-w-xl mx-auto">
              Call (850) 737-1738 right now. We'll send a truck your way.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-black text-white font-bold text-lg px-8 py-4 rounded-lg mt-8 hover:bg-black/80 transition-colors">
              <Phone size={20} />
              Call {PHONE}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════════════════════════════ */

function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Get In Touch"
          title={<>Call anytime — we're always{" "}<span className="text-[var(--accent-light)]">on the road</span></>}
          sub="Day or night, just pick up the phone. We're here."
        />

        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn delay={0}>
            <a href={PHONE_TEL} className="block bg-[var(--surface-2)] border border-white/[0.06] rounded-xl p-8 text-center card-hover h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-[var(--accent)] font-medium text-lg">{PHONE}</p>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <a href={`mailto:${EMAIL}`} className="block bg-[var(--surface-2)] border border-white/[0.06] rounded-xl p-8 text-center card-hover h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-[var(--accent)] font-medium break-all">{EMAIL}</p>
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="block bg-[var(--surface-2)] border border-white/[0.06] rounded-xl p-8 text-center card-hover h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">Address</h3>
              <p className="text-[var(--accent)] font-medium">{ADDRESS}</p>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 bg-[var(--surface-2)] border border-white/[0.06] rounded-xl p-8 max-w-md mx-auto">
            <h3 className="font-semibold text-white text-center mb-4 flex items-center justify-center gap-2">
              <Clock size={18} className="text-[var(--accent)]" />
              Business Hours
            </h3>
            <div className="space-y-3">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-[var(--text-mute)]">{h.day}</span>
                  <span className={`font-medium ${h.time === "Closed" ? "text-red-400" : "text-white"}`}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt={BRAND} width={48} height={48} className="w-12 h-12" />
              <span className="brand-wordmark text-xl text-white tracking-wider">
                {BRAND.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-[var(--accent)]">{BRAND.split(" ").slice(-1)}</span>
              </span>
            </div>
            <p className="text-[var(--text-mute)] text-sm leading-relaxed">{TAGLINE}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.name}>
                  <a href="#services" className="text-sm text-[var(--text-mute)] hover:text-white transition-colors">{s.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {[
                { href: "#why", label: "Why Choose Us" },
                { href: "#about", label: "About" },
                { href: "#reviews", label: "Reviews" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[var(--text-mute)] hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--text-mute)]">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} className="text-[var(--accent)]" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} className="text-[var(--accent)]" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white transition-colors">
                  <MapPin size={14} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] text-center text-sm text-[var(--text-mute)]">
          <p>&copy; {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <TopBar />
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <ServicesSection />
      <StatsBand />
      <WhyChooseUs />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <ServiceAreaSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </>
  );
}
