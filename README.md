# vexa-website-template

The base every Vexa Sites client website is built from.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · framer-motion · gsap · lucide-react

## Workflow

1. Fork this repo as `<client-slug>-site`
2. Fill out `BRIEF.md` with the client's info
3. Tell Claude: *"Build a website for X using vexa-website-template — here's the brief"* and paste the filled-in brief
4. Claude reads `INSTRUCTIONS.md` → `STYLE_GUIDE.md` → `COMPONENTS.md` → composes `src/app/page.tsx` from the existing components, generates anything missing via Magic MCP
5. Review locally with `npm run dev`
6. `npm run build` to verify, then push and deploy to Railway

## Files Claude reads (in order)

| File | What it is |
|---|---|
| `INSTRUCTIONS.md` | The runbook Claude follows every time. Don't edit unless changing the workflow. |
| `STYLE_GUIDE.md` | House style — color palettes, typography, animation rules, mobile patterns. Non-negotiable. |
| `COMPONENTS.md` | Catalog of every reusable section (Hero, ServicesGrid, Footer, etc.) with props and examples. |
| `BRIEF.md` | Per-client brief. Fill out `???` placeholders before asking Claude to build. |

## Local dev

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # check before shipping
```

## Component anatomy

```
src/
├── app/
│   ├── layout.tsx       # root layout — set <title>/meta per client
│   ├── page.tsx         # the assembled page — composed of section components
│   └── globals.css      # CSS variables for the brand palette
├── components/
│   ├── sections/        # full-width page sections (Hero, Footer, etc.)
│   └── ui/              # primitives (MagneticButton, Magic-generated UI bits)
└── lib/
    └── cn.ts            # classnames helper
```

## Adding a new section component

1. Create `src/components/sections/<Name>.tsx` as a client component
2. Wrap content in `<SectionShell>` for consistent vertical rhythm + intro animation
3. Document it in `COMPONENTS.md` with props and an example usage
4. Use it from `src/app/page.tsx`

## House rules

- Always read `STYLE_GUIDE.md` before designing
- Never invent stats, testimonials, or services not in the brief
- Mobile breakpoints at ≤640px and ≤380px must work cleanly
- No emojis in client-facing copy
- No cookie banners, chatbots, or "AI assistants" unless the brief asks for them
