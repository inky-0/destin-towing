# Instructions for Claude

This repo is a Next.js website template I (Braeden) use to spin up a new client site every time. When I ask you to "build a website for X using vexa-template", do **exactly** this:

## Step 1 — Read the brief

Open `BRIEF.md`. The fields will already be filled in for the specific client. If a field is empty, ask me before assuming. Never invent statistics, testimonials, or services that aren't in the brief.

## Step 2 — Read the house style

Open `STYLE_GUIDE.md`. This is non-negotiable — every site I ship uses these patterns. Don't substitute "trendy" alternatives unless I explicitly say so.

## Step 3 — Plan the page

Use the `ui-ux-pro-max` skill with action `plan` and the brief contents. It will return a section list, color palette, font pairing, and animation strategy. Cross-reference its suggestions with `STYLE_GUIDE.md` — when they conflict, the style guide wins.

## Step 4 — Pick components

Open `COMPONENTS.md`. It catalogs every reusable section I've already built (hero, services dual, comparison, sell band, member services poster, testimonials, dual CTA, footer, etc.) with copy-paste-ready imports. Pick the sections that fit the brief. Most sites need:

1. Nav (always)
2. Hero with mouse parallax
3. Services grid OR dual-column services
4. Why choose us / comparison table
5. Sell band (optional, for selling-focused niches)
6. Testimonials (only if real ones in brief)
7. Dual CTA
8. Contact form
9. Footer (always)

## Step 5 — Build

- Edit `src/app/page.tsx` to compose the chosen sections
- Edit `src/app/globals.css` to set the brand color CSS variables (don't hardcode hex in components)
- Edit `src/app/layout.tsx` to set `<title>` and meta description from the brief
- Add any client-specific images to `public/` (or use the URLs the brief gives you)
- For premium accent components (hero illustrations, fancy cards, etc.), use Magic MCP via the `mcp__magic__21st_magic_component_builder` tool to generate them, then drop them into `src/components/ui/`

## Step 6 — Mobile

Every site MUST work cleanly on mobile. The component library already has the responsive rules baked in, but verify:
- Hero text scales `clamp(28px, 8vw, 48px)`
- Nav collapses to logo + CTA on ≤640px (no nav-link overlap with CTA)
- Grids collapse to 1 column on phones
- Section padding drops to 64px vertical
- Touch targets ≥44px

## Step 7 — Deploy notes

These sites get deployed to Railway. Make sure `next build` succeeds locally before declaring done. Don't add any environment variables unless the brief asks for them — these are static marketing sites.

## Things to never do

- Never use placeholder Lorem ipsum copy. If a section needs copy and the brief doesn't have it, ask me.
- Never invent fake testimonials or stats. Empty is better than fake.
- Never add cookie banners, chatbots, or "AI assistants" unless the brief asks for them.
- Never use stock photos that don't match the business (verify image URLs by reading them if uncertain).
- Never use emojis in client-facing copy. Internal comments are fine.
- Never push to git or create the GitHub repo unless I say so. Once I do say push, name the repo `<client-slug>-site` under inky-0.

## Tools you have

- `ui-ux-pro-max` skill — design intelligence (plan / build / review / fix / improve / optimize)
- Magic MCP (`mcp__magic__*`) — generates premium shadcn components
- Tailwind v4 (already configured in this template)
- framer-motion (animation primitives)
- gsap + ScrollTrigger (legacy animations + scroll parallax)
- lucide-react (icons)
- shadcn/ui patterns via clsx + tailwind-merge + cva
