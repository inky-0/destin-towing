# House Style Guide

These are non-negotiable patterns derived from my existing live sites: always-green-turf, safewithpgs, custom-cars-revamp, ricos-auto-repair, 20th-street-auto. Every new site should feel like it belongs to the same shop.

## Layout philosophy

- **Single-page marketing site**, ~5–8 sections, anchored nav
- **Generous vertical rhythm** — sections 100–140px tall on desktop, 64px on mobile
- **Container max-width:** 1200px, padded 40px desktop / 16px mobile
- **One bold focal moment per section** — don't make every section a hero

## Color palettes (pick one per client based on brand)

### Dark navy + accent (default for most B2B)
```css
--bg:        #07070f
--surface:   #0f0f1a
--surface-2: #12121f
--border:    rgba(255,255,255,0.07)
--text:      #eeeef8
--text-mute: #7777a0
--accent:    /* CLIENT BRAND COLOR */
--accent-light: /* lighter version of brand */
```

### Dark navy + orange (industrial / occupational)
```css
--bg:     #0a1628
--accent: #e8712a
```

### Dark + emerald (turf / outdoor / natural)
```css
--bg:     #080e08
--accent: #4cb84c
```

### Pure black + gold (luxury / cars / exotics)
```css
--bg:     #050505
--accent: #d4af37
```

### Light cream + warm accent (boutique / wellness)
```css
--bg:     #fdfaf5
--text:   #1a1410
--accent: #c2410c
```

## Typography

- **Body:** Inter (Google Fonts), weights 400/500/600/700/800
- **Display:** depends on niche
  - Modern B2B: Inter (same as body), 800/900 weights
  - Editorial / luxury: Playfair Display (serif)
  - Industrial: Inter Condensed or Bebas Neue
- **Mono (rare):** JetBrains Mono for code/stats only
- **H1:** `clamp(2.4rem, 5vw, 3.6rem)` weight 800/900, line-height 1.1, letter-spacing -0.02em
- **H2:** `clamp(28px, 7vw, 36px)` weight 800
- **Body:** 15–17px, line-height 1.6–1.7
- **Section tag** (small uppercase pill above h2): 11px, weight 700, letter-spacing 0.12em, uppercase, accent color

## Animation rules

- **GSAP for scroll-triggered reveals** (section headings, cards stagger in on scroll)
- **framer-motion for in-page interactions** (hover states, modals, accordion)
- **Mouse parallax on hero background:** ±25px X / ±17px Y, 1.2s power2.out, springs back on mouseleave, **disabled on touch**
- **Magnetic buttons** on primary CTAs (`±0.35 * cursor offset`, elastic return)
- **Reveal timing:** stagger 0.12s, duration 0.6s, ease `power3.out`
- **No bouncy/playful eases** — we use power2/power3/power4. Save `back.out` and `elastic` for tiny moments only
- **No autoplay videos**, no hero slideshows that distract from the headline

## Spacing scale

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 56 / 80 / 120 px` — pick from this scale, don't invent values.

## Buttons

- **Primary:** filled with accent color, white/dark text, 14–16px font, 14×30px padding, 8px radius, magnetic hover, `box-shadow: 0 4px 20px <accent at 35%>`
- **Outline:** 2px border in accent at 40%, accent text, transparent bg, same dimensions
- **Pill / nav CTA:** smaller (10–12px font, 8×16px padding), 100px radius
- **Disabled:** opacity 0.5, cursor not-allowed, transform none

## Section tag pattern (the small uppercase label)

```tsx
<div className="section-tag">{label}</div>
```
- Always above the H2
- Format: `What We Do`, `Get In Touch`, `At a Glance`, etc.
- 11px, 700 weight, accent color, uppercase, 0.12em letter-spacing
- Optional ::before dot in accent color

## Cards

- **Background:** surface-2 (`#12121f`)
- **Border:** 1px subtle (`rgba(255,255,255,0.07)`)
- **Radius:** 12–18px (12 for compact, 16–18 for hero/feature cards)
- **Shadow:** none by default; on hover `0 24px 64px rgba(0,0,0,0.55)` and a 1px accent border glow
- **Hover lift:** translateY(-4px), 0.18s ease

## Mobile rules (≤640px)

These are checked on every site or it counts as broken:

1. Nav: hide secondary links, keep logo + CTA only, 60–64px nav height
2. Logo never overlaps the CTA (don't use absolute centering on mobile)
3. Hero: justify-flex-end so headline + CTAs hug the bottom, leaving room for hero image
4. Hero search / contact forms: stack vertically, only show key field on first scroll
5. All grids → 1 or 2 columns max
6. Section vertical padding: 64px (not 80–120)
7. H1 floor: 30px
8. H2 floor: 28px
9. Body: 14–15px (not 17)
10. Touch targets: min 44px height
11. No mouse parallax (disabled via `(hover: none)` media query)

## Images

- **Hero:** real photo, dark gradient overlay (135deg, rgba bg 85% → 60% → 100%)
- **Section illustrations:** prefer `object-fit: cover` for full-bleed, `contain` for logos/icons
- **Avoid:** stock photos that scream "stock", smiling office workers, handshake clichés
- **CDN:** Unsplash URLs are fine if you've verified the photo matches the title

## Patterns I love and use everywhere

- **Hero with mouse-parallax background image** behind headline + tagline + dual CTA
- **Section tag → H2 → section-sub** structure (uppercase label, big headline, muted paragraph)
- **Dual-column "two sides of the same mission"** services layout
- **Comparison table** with us highlighted in accent color, competitors greyed
- **"At a glance" poster section** that displays a tall image of a flyer/menu/services list with a soft accent shadow
- **Sell band** — full-bleed darker section with text on the left and bullet list + CTA on the right
- **Magnetic CTA buttons**
- **Numbered process steps** with vertical connector line on desktop, horizontal accordion on mobile
- **Footer** with 3 columns (links / contact / hours) collapsing to 1 column on mobile, copyright bar at bottom

## Patterns I do NOT want

- ❌ "Trusted by" logo strips that auto-scroll horizontally (cliché)
- ❌ Hero video backgrounds (slow, distracting)
- ❌ Multi-step popup forms in the hero
- ❌ Cookie banners (waste of viewport, only add if legally required)
- ❌ "Live chat" widgets (LeadConnector, Drift, Intercom — all banned)
- ❌ Cards with rounded corners > 24px (too "Web 3.0")
- ❌ Gradient text on body copy
- ❌ Glowing neon everything
- ❌ "AI-powered" buzzwords in copy (unless the client literally sells AI)

## When in doubt

Look at how `safewithpgs/index.html` (B2B / industrial) or `always-green-turf/index.html` (services / outdoor) handled the same problem and copy that pattern.
