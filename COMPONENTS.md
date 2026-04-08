# Component Catalog

Every reusable section, in the order I'd usually compose them on a page. Each one is a real React component in `src/components/sections/` that you can import and drop into `src/app/page.tsx`.

When a component takes copy, pass it via props — never hard-code business names in the components themselves.

---

## `<Nav />` — top navigation
**File:** `src/components/sections/Nav.tsx`
**Purpose:** Sticky top nav with logo, primary links, and a single CTA button.
**Props:**
- `brand: string` — wordmark text
- `links: { href: string; label: string }[]`
- `cta: { href: string; label: string }`
**Mobile behavior:** hides links, keeps logo + CTA, hamburger optional
**Used by:** every site

```tsx
<Nav
  brand="PGS"
  links={[
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ]}
  cta={{ href: "#contact", label: "Talk to Our Team" }}
/>
```

---

## `<Hero />` — full-screen hero with mouse parallax
**File:** `src/components/sections/Hero.tsx`
**Purpose:** Big tagline, sub-text, dual CTA, parallax background image, optional stat row.
**Props:**
- `tag?: string` — small uppercase pill ("WEB DESIGN AGENCY")
- `title: string | ReactNode` — supports JSX for italic accent words
- `sub: string`
- `primaryCta: { href: string; label: string }`
- `secondaryCta?: { href: string; label: string }`
- `bgImage: string` — public path or absolute URL
- `stats?: { value: string; label: string }[]` — up to 3
**Animations:**
- gsap.from on title/sub/CTAs (stagger reveal on mount)
- gsap mouse parallax on bg (`±25px / ±17px`, `power2.out 1.2s`)
- Touch detection disables parallax
**Mobile:** title clamps to `clamp(28px, 8vw, 40px)`, parallax off, content justify-end

---

## `<ServicesGrid />` — N-up service cards
**File:** `src/components/sections/ServicesGrid.tsx`
**Purpose:** 3–8 service cards with icon, name, one-line description.
**Props:**
- `tag: string` — section label
- `title: string`
- `sub?: string`
- `services: { icon: LucideIcon; name: string; description: string }[]`
- `columns?: 2 | 3 | 4` (default 3)
**Mobile:** collapses to 1 col on phones, 2 cols on tablets

---

## `<ServicesDual />` — two-column services ("two sides of the same mission")
**File:** `src/components/sections/ServicesDual.tsx`
**Purpose:** When a business has two distinct service categories (e.g., "Pre-employment + Injury management" for PGS).
**Props:**
- `tag: string`
- `title: string`
- `sub?: string`
- `left: { title: string; services: string[] }`
- `right: { title: string; services: string[] }`
**Visual:** vertical divider, accent-bordered headings on each side

---

## `<WhyChooseUs />` — 3-up benefits
**File:** `src/components/sections/WhyChooseUs.tsx`
**Purpose:** Three reasons to pick this business.
**Props:**
- `tag: string`
- `title: string`
- `items: { icon: LucideIcon; title: string; body: string }[]` (3–4)
**Animations:** stagger reveal on scroll into view

---

## `<ComparisonTable />` — us vs. competitors
**File:** `src/components/sections/ComparisonTable.tsx`
**Purpose:** Highlight differentiators with a check/x table.
**Props:**
- `title: string`
- `competitors: string[]` — column headers (the first is always "Us")
- `rows: { feature: string; values: (boolean | string)[] }[]`
**Visual:** "Us" column highlighted in accent, others greyed

---

## `<SellBand />` — full-bleed CTA-driven horizontal section
**File:** `src/components/sections/SellBand.tsx`
**Purpose:** Big "ready to sell?" or "ready to subscribe?" moment between sections.
**Props:**
- `tag: string`
- `title: string`
- `bullets: string[]` (3–6)
- `cta: { href: string; label: string }`
**Visual:** flex split — text left, bullets+CTA right, full-bleed dark background, top + bottom borders

---

## `<PosterSection />` — "at a glance" tall image card
**File:** `src/components/sections/PosterSection.tsx`
**Purpose:** Display a tall flyer/menu/services overview as the hero artwork of a section.
**Props:**
- `tag: string`
- `title: string`
- `sub?: string`
- `image: string`
- `alt: string`
**Visual:** centered image, max-width 880px, rounded 18px, accent-tinted shadow

---

## `<Process />` — numbered steps
**File:** `src/components/sections/Process.tsx`
**Purpose:** "How it works" — 3–5 numbered steps.
**Props:**
- `tag: string`
- `title: string`
- `steps: { number: string; title: string; body: string }[]`
**Visual:** vertical connector line on desktop, accordion on mobile

---

## `<Pricing />` — pricing tiers
**File:** `src/components/sections/Pricing.tsx`
**Purpose:** 2–3 pricing cards.
**Props:**
- `tag: string`
- `title: string`
- `tiers: { name: string; price: string; period?: string; description: string; features: string[]; cta: { href: string; label: string }; highlighted?: boolean }[]`

---

## `<Testimonials />` — quote cards
**File:** `src/components/sections/Testimonials.tsx`
**Purpose:** Real customer quotes (skip if no real ones).
**Props:**
- `tag: string`
- `title: string`
- `items: { quote: string; name: string; role?: string }[]`

---

## `<FAQ />` — accordion
**File:** `src/components/sections/FAQ.tsx`
**Purpose:** Common questions with framer-motion accordion behavior.
**Props:**
- `tag: string`
- `title: string`
- `items: { q: string; a: string }[]`

---

## `<DualCta />` — two side-by-side CTA boxes
**File:** `src/components/sections/DualCta.tsx`
**Purpose:** "Find a car / Sell a car" style — two equally-weighted next steps.
**Props:**
- `left: { title: string; body: string; cta: { href: string; label: string }; image?: string }`
- `right: { title: string; body: string; cta: { href: string; label: string }; image?: string }`

---

## `<ContactForm />` — contact section
**File:** `src/components/sections/ContactForm.tsx`
**Purpose:** Name + email + phone + message + submit.
**Props:**
- `tag: string`
- `title: string`
- `sub?: string`
- `contactInfo?: { phone?: string; email?: string; address?: string; hours?: string }`
- `formAction?: string` — POST endpoint (default: just `mailto:`)

---

## `<Footer />` — site footer
**File:** `src/components/sections/Footer.tsx`
**Purpose:** Logo, links, contact, copyright.
**Props:**
- `brand: string`
- `tagline?: string`
- `columns: { title: string; links: { href: string; label: string }[] }[]` (max 3)
- `contact: { phone?: string; email?: string; address?: string }`
- `social?: { platform: 'instagram' | 'facebook' | 'linkedin' | 'twitter'; href: string }[]`
**Mobile:** collapses to 1 column

---

## `<MagneticButton />` — primitive
**File:** `src/components/ui/MagneticButton.tsx`
**Purpose:** Reusable button that drifts toward the cursor on hover. Wrap any link/button.
**Props:** standard `<button>` props + `intensity?: number` (default 0.35)

---

## Magic MCP integration

For premium one-off components (custom hero illustrations, fancy stat dials, animated logos, etc.) call:
```
mcp__magic__21st_magic_component_builder
```
with a clear prompt of what's needed. Drop the output into `src/components/ui/`. Do **not** use Magic for the standard sections above — those should stay consistent across all sites.
