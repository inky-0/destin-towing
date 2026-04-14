# vexa-website-template

The base every Vexa Sites client website is built from. Same skeleton, different palette + copy + photos.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · framer-motion · gsap · lucide-react · Bebas Neue display font

## Workflow per client

1. Fork this repo as `<client-slug>-site`
2. Drop client logo + photos into `public/` (filenames: `logo.png`, `hero-bg.jpg`, `shop.jpg`, `work-1..5.jpg`)
3. Override the 8 brand color variables at the top of `src/app/globals.css`
4. Edit the constants + section props in `src/app/page.tsx`
5. Update `metadata.title` + `metadata.description` in `src/app/layout.tsx`
6. `npm install && npm run build`
7. Push to GitHub, deploy on Railway

That's the entire process. The page structure never changes.

## Files Claude reads

| File | What it is |
|---|---|
| `INSTRUCTIONS.md` | The exact step-by-step Claude follows every time. **Read this first.** |
| `BRIEF.md` | The fields Braeden fills in per client. ~15 things. |
| `COMPONENTS.md` | Catalog of every section component + their props. |

## Page anatomy (every site, in this exact order)

1. **Nav** — sticky, brand left, links/hamburger right
2. **Hero** — full viewport with parallax bg image, 3-line headline, dual CTA, stats row
3. **ServicesGrid** — 6 service cards
4. **Gallery** — 5-image asymmetric grid
5. **WhyChooseSplit** — image + badge left, checklist right
6. **Testimonials** — 3 review cards (skip if no real reviews)
7. **CtaBanner** — full-bleed accent gradient CTA
8. **ContactSection** — info + hours left, form right
9. **Footer** — brand, links, contact

## Brand palette — change just these 8 things per client

In `src/app/globals.css`:

```css
:root {
  --bg:           #0a0a0a;          /* page background */
  --surface:      #111111;          /* alternating section bg */
  --surface-2:    #181818;          /* card bg */
  --border:       rgba(255,255,255,0.08);
  --text:         #ffffff;
  --text-mute:    #999999;
  --accent:       #cc1111;          /* primary brand color */
  --accent-light: #ef4444;          /* lighter version */
}
```

Every component reads from these vars — change them and the whole site re-themes.

## Local dev

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # always check this passes before pushing
```

## Examples

- [destin-towing](https://github.com/inky-0/destin-towing) — black + emergency red, towing & recovery
