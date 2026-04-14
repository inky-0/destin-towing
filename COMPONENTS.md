# Component Catalog — v2

All sections are defined inline in `src/app/page.tsx`. To customize a site, you only edit the constants and content arrays at the top of the file.

## Page Sections (in order)

| Section | Function | Purpose |
|---|---|---|
| `<ScrollProgress />` | `ScrollProgress` | Thin accent-colored progress bar fixed at top of viewport, tracks scroll depth. |
| `<TopBar />` | `TopBar` | Fixed info strip above nav: phone, address, hours. Hidden on mobile. |
| `<Nav />` | `Nav` | Sticky nav: brand left, links center, CTA right. Transparent → solid on scroll. Hamburger on mobile. |
| `<Hero />` | `Hero` | Full-viewport hero with slideshow background, mouse parallax, gradient overlays, tagline pill, h1, sub, two CTAs, bounce scroll indicator. |
| `<TrustBar />` | `TrustBar` | 3 value prop cards overlapping hero bottom (-mt-16). Trust signals like certifications, warranties, guarantees. |
| `<About />` | `About` | 2-column split: text left, image right with badge overlay (years in business). Welcoming copy. |
| `<ServicesSection />` | `ServicesSection` | 6 image-rich cards in 3-col grid. Each has background image, icon overlay, description, "Schedule Service" link. |
| `<StatsBand />` | `StatsBand` | Full-width section with animated counting numbers (IntersectionObserver + requestAnimationFrame, ease-out cubic). |
| `<WhyChooseUs />` | `WhyChooseUs` | Image left, checklist right with check icons. Why this business is different. |
| `<TestimonialsSection />` | `TestimonialsSection` | 3 review cards with 5-star ratings, quotes, names. **Delete from Home() if no real reviews.** |
| `<FAQSection />` | `FAQSection` | 5-item accordion with smooth height transitions. Great for SEO. |
| `<ServiceAreaSection />` | `ServiceAreaSection` | 8-city grid with map pin icons + Google Maps link. Critical for local SEO. |
| `<CtaBanner />` | `CtaBanner` | Full-width accent gradient band with headline, sub, and black CTA button. |
| `<ContactSection />` | `ContactSection` | 3 info cards (phone/email/address) + hours card. |
| `<Footer />` | `Footer` | 4-column: brand + tagline, services links, company links, contact info. |

## Utility Components

| Component | File | Purpose |
|---|---|---|
| `<FadeIn />` | `components/FadeIn.tsx` | Reusable framer-motion scroll-triggered animation. Supports direction (up/down/left/right/none), delay, duration. Uses `useInView` with `once: true`. |
| `<SectionHeader />` | inline in `page.tsx` | Reusable tag + h2 + sub pattern for section intros. |
| `<AnimatedCounter />` | inline in `page.tsx` | Number counter that animates when scrolled into view. Ease-out cubic. |
| `<FAQItem />` | inline in `page.tsx` | Single accordion item with smooth max-height transition. |

## Key Design Features

- **Scroll progress bar** — thin gradient line at very top
- **TopBar → Nav stacking** — TopBar fixed at z-60, Nav at z-50 below it, slides to top-0 on scroll
- **Hero slideshow** — crossfade between images every 5s, all with mouse parallax
- **Card hover effects** — translateY(-4px) + accent border glow via `.card-hover` CSS class
- **Scroll-triggered fade-in** — every section uses `<FadeIn>` wrapper
- **Animated stat counters** — numbers count up with ease-out cubic when visible
- **Custom scrollbar** — dark theme scrollbar matching the site

## Adding a New Section

1. Define the function in `page.tsx` following the existing pattern
2. Wrap content in a `<section>` with `className="section-pad bg-[var(--bg)]"` or `bg-[var(--surface)]` (alternate)
3. Use `<FadeIn>` for scroll animations
4. Use `<SectionHeader>` for the intro if it follows the tag → h2 → sub pattern
5. Add it to the `Home()` composition at the bottom
6. Add a row to this catalog
7. Push the change back to `vexa-website-template` so future builds get it
