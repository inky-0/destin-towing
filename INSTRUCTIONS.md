# Instructions for Claude

> **Read `DESIGN_RULES.md` before writing any copy or generating any mockup.** It contains the conversion playbook that makes Vexa sites actually work.

When Braeden says **"build a website for X using vexa-template"**, do exactly this. The template is a premium single-page design with scroll animations, slideshow hero, image-rich service cards, animated stat counters, and conversion-optimized layout. Every client site uses the same structure so builds are fast and consistent.

## What he'll give you per client

1. **Company name** (e.g. "Destin Towing")
2. **Industry / niche** (e.g. "towing", "landscaping", "dental")
3. **A few photos** (optional — if not provided, generate with nano-banana-2)
4. Basic facts: **services list, phone, email, address, hours**
5. *(Optional)* **Logo, brand color, competitor URLs, tone of voice, target customer, USP** — see BRIEF.md

That's it. Anything missing, ask before assuming. **A brand color is NOT required** — the logo generation step will determine the palette.

## The build, step by step

### 1. Fork & rename
- Fork `vexa-website-template` as `<client-slug>-site`
- Clone locally

### 2. Generate the logo FIRST — this drives the entire color palette

**The logo comes before everything else.** Do NOT pick colors manually. Let the AI choose colors that fit the industry/niche, then extract the palette from the logo.

Use `nano-banana-2` to generate the logo (**costs ~$0.13**):

```bash
infsh app run google/gemini-3-1-flash-image-preview --input '{
  "prompt": "Minimalist professional logo for a [INDUSTRY] company called [COMPANY NAME]. Clean modern design, bold typography. The company name with a relevant icon integrated into the design. Dark background version. Choose colors that feel right for the [INDUSTRY] industry — do not use generic blue. Flat vector logo style, no gradients, no photorealism. Centered composition, square format.",
  "aspect_ratio": "1:1",
  "resolution": "2K"
}' --save /tmp/gen-logo.json
```

**Key rules for the logo prompt:**
- Do NOT specify colors — let the AI pick what fits the industry naturally
- DO specify the industry/niche so the AI picks appropriate colors
- A towing company will get orange/red/yellow. A dental office will get teal/blue/white. A landscaping company will get green. Let it happen.
- Always request "dark background version" so it works on the dark site
- Always request "flat vector logo style" — no photorealism

After generating, **read the logo image** to see what colors the AI chose.

### 3. Extract the palette from the logo

Look at the generated logo and identify:
- **Primary accent color** — the dominant non-white, non-black color in the logo
- **Accent light** — a lighter/brighter version of that color

Use these to set the CSS variables in `src/app/globals.css`:
```css
--accent:       #______;          /* extracted from logo */
--accent-light: #______;          /* lighter version */
```

**That's it.** The `--border-hover` and all card/CTA/gradient colors auto-derive from `--accent` via `color-mix()`. You only set two values.

Resize the logo, generate favicon + apple-touch-icon from it:
```python
from PIL import Image
img = Image.open('raw-logo.png').convert('RGBA')
img.resize((400, 400), Image.LANCZOS).save('public/logo.png', 'PNG', optimize=True)
img.resize((32, 32), Image.LANCZOS).save('src/app/favicon.ico', format='ICO', sizes=[(32, 32)])
img.resize((180, 180), Image.LANCZOS).save('public/apple-touch-icon.png', 'PNG')
img.resize((192, 192), Image.LANCZOS).save('public/icon-192.png', 'PNG')
```
This gives you the logo at 4 sizes: full (nav/footer), favicon (browser tab), apple-touch-icon (iOS home screen), and 192px (Android/PWA).

### 4. Generate photos with nano-banana-2

If client provided photos, use those. If not, generate with nano-banana-2 (**~$0.13/image, generate only what's needed**).

Generate images that match the industry. Run all in parallel to save time:
```
public/hero-bg.jpg    (dramatic wide shot of the business type)
public/shop.jpg       (owner/team portrait or interior — About section)
public/work-1.jpg     (service action shot 1)
public/work-2.jpg     (service action shot 2)
public/work-3.jpg     (wide interior/facility shot)
public/work-4.jpg     (detail/close-up shot)
public/work-5.jpg     (exterior at dusk or additional shot)
```

After downloading, compress with Pillow to ~200-300KB each:
```python
from PIL import Image
img = Image.open('raw.png').convert('RGB')
if img.width > 1920:
    ratio = 1920 / img.width
    img = img.resize((1920, int(img.height * ratio)), Image.LANCZOS)
img.save('public/work-1.jpg', 'JPEG', quality=75, optimize=True)
```

### 5. Update `src/app/layout.tsx`
- Change `metadata.title` to `"<Brand Name> | <What They Do> in <City>, <ST>"`
- Change `metadata.description` to a 1–2 sentence SEO blurb under 155 chars
- Add `keywords` array with 5-6 local SEO terms
- Add `openGraph` with title + description

### 6. Edit the constants and content arrays at the top of `src/app/page.tsx`

**Constants:**
```ts
const BRAND       = "...";
const PHONE       = "(555) 555-5555";
const PHONE_TEL   = "tel:5555555555";
const EMAIL       = "...";
const ADDRESS     = "...";
const MAP_LINK    = "https://www.google.com/maps/search/?api=1&query=...";
const TAGLINE     = "...";
```

**Content arrays to fill:**
- `HERO_SLIDES` — which images to cycle in the hero slideshow (pick 3-4)
- `NAV_LINKS` — usually stays the same
- `SERVICES` — 6 objects with icon, name, description, image path
- `TESTIMONIALS` — 3 real reviews. **Delete `<TestimonialsSection />` from Home() if none.**
- `FAQ_ITEMS` — 5 real questions + answers
- `SERVICE_AREAS` — 8 cities/neighborhoods
- `WHY_ITEMS` — 6 reasons with short explanations
- `TRUST_ITEMS` — 3 value propositions for the trust bar below hero
- `STATS` — 3 numbers (years, customers, rating)
- `HOURS` — business hours

### 7. Fill in section-specific text
Walk through each section in `page.tsx` and replace placeholder strings:
- **Hero**: tagline pill, h1 (outcome-focused), sub paragraph
- **About**: headline, two paragraphs about the business, badge number + label
- **Services SectionHeader**: title + sub that names the niche
- **Why Choose Us**: headline, framing paragraph
- **Testimonials SectionHeader**: title referencing the area
- **Service Area SectionHeader**: title + sub
- **CTA Banner**: title + sub
- **Contact SectionHeader**: title + sub

### 7.5. Write conversion-focused copy
Before filling in text, read `DESIGN_RULES.md`. Key reminders:
- Hero headline = outcome the customer gets, not a feature list
- No corporate filler ("We pride ourselves on...", "Look no further...")
- CTAs name the specific action ("Call Now for a Free Estimate", not "Get Started")
- FAQ answers are real — what a receptionist would say on the phone
- Service descriptions answer "why should I care?"
- Tag pill = credibility signal (years in business, licensed & insured, etc.)

### 8. Build & verify
```bash
npm install
npx next build
```
Has to pass clean. If it doesn't, fix the type errors before pushing.

### 9. Push to GitHub & deploy
- New repo on `inky-0/<client-slug>-site`
- Push to `main`
- Tell Braeden the repo URL and that Railway should auto-pick it up (Node service, `npm install && npm run build` → `npm start`)

## Hard rules — never break

- **Logo first, palette second.** Never manually pick brand colors. Generate the logo, extract colors from it, then set CSS variables. The logo defines the brand.
- **Core sections (always include):** ScrollProgress · TopBar · Nav · Hero · TrustBar · About · ServicesSection · StatsBand · WhyChooseUs · CtaBanner · ContactSection · Footer.
- **Optional sections:** TestimonialsSection (only with real reviews) · FAQSection (include when possible — great for SEO) · ServiceAreaSection (include for local businesses).
- **Never remove the Hero, ServicesSection, ContactSection, or Footer.** Those are the spine.
- **Never invent testimonials, stats, services, or addresses.** If the client didn't give you something, ask Braeden or leave it out.
- **Never use stock photos.** Use client photos or nano-banana-2 generated images (marked as placeholders).
- **Never add cookie banners, chatbots, or "AI assistants"** unless explicitly asked.
- **Never use emojis in client-facing copy.** Internal code comments are fine.
- **If the client provides their own logo**, skip the logo generation step but still extract the accent color from their logo to set the palette.

## Mobile is non-negotiable

The template's responsive design handles everything via Tailwind breakpoints:
- TopBar: hidden on mobile
- Nav: hamburger drawer on mobile, CTA button visible
- Hero: content stacks vertically, CTAs go full-width
- TrustBar: stacks to single column
- Services / Why / Contact: collapse to single column
- Stats: 2-col grid on small screens, 3-col on desktop

If something breaks on mobile, fix it in `page.tsx` and push the fix back to the template.

## When something is genuinely missing

Some clients need a section the template doesn't have (e.g. menu for a restaurant, pricing tiers for SaaS). If that happens:

1. First, ask Braeden if he wants you to skip it or build it.
2. If build it: add a new function in `page.tsx`, follow the existing pattern (section-pad, FadeIn, SectionHeader), and **push the change back to `vexa-website-template`**. Document it in `COMPONENTS.md`.

## Tools you have

- **nano-banana-2** skill — AI image generation (Gemini 3.1 Flash via inference.sh). **Costs ~$0.13/image.** Used for logo generation (step 2) and photo generation (step 4). The logo prompt should NOT specify colors — let the AI pick based on industry.
- **Google Stitch MCP** (`mcp__stitch__*`) — generate full UI mockups and screens. Use to prototype page layouts, create design systems per client, and generate screen variants before building.
- **Magic MCP** (`mcp__magic__*`) — generate premium one-off shadcn/Tailwind React components for sections the template doesn't have.
- `ui-ux-pro-max` skill — design intelligence (colors, fonts, layout suggestions, palette generation).
- framer-motion — used for scroll-triggered FadeIn animations
- lucide-react — icon library

### Recommended workflow for a new client site

1. **Logo first** — Generate logo with nano-banana-2. Let the AI pick colors based on the industry. Read the image to see the result.
2. **Extract palette** — Pull accent color from the logo, set `--accent` and `--accent-light` in globals.css. Everything else auto-derives.
3. **Generate photos** — If client hasn't sent photos, use nano-banana-2 for industry-appropriate images. Compress to ~200-300KB.
4. **Build the site** — Fork template, fill constants + content arrays, write conversion-focused copy, build, push.
5. **Custom sections** — If needed, use Magic MCP to generate components. Push back to template if reusable.
