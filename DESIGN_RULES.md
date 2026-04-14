# Design Rules — High-Converting Vexa Sites

These rules apply to every site built from this template. Follow them when writing copy, choosing layouts, generating mockups (Stitch), and reviewing builds. The goal: every Vexa site should look like a $5k custom build, convert visitors into calls/form submissions, and load fast on mobile.

---

## Above the Fold (Hero)

- **Phone number visible without scrolling.** It's in the Nav CTA and the Hero primary CTA. Both must be `tel:` links.
- **One clear action.** The primary CTA is always "Call (XXX) XXX-XXXX". The secondary CTA is a soft scroll ("See Our Work", "View Services"). Never two competing primary actions.
- **Tag pill = credibility.** Use it for trust signals: "Locally Owned & Operated", "Serving [Area] Since 2004", "Licensed & Insured". Not marketing fluff.
- **Stats row = social proof.** Use real numbers only. Best performers: years in business, jobs completed, Google review rating. If the client can't give you numbers, drop the stats row entirely — don't guess.
- **Hero headline = outcome, not feature.** "Your Property, Professionally Protected" beats "We Offer Landscaping Services". Lead with what the customer gets, not what the business does.

## Copy Rules

- **No corporate filler.** Ban these phrases: "We are committed to", "Our team of professionals", "We pride ourselves on", "Look no further", "One-stop shop", "In today's fast-paced world", "Leveraging our expertise". They say nothing.
- **Write like the business owner talks.** A towing company doesn't say "vehicular recovery solutions." They say "We'll get you off the road, fast." Match the client's register.
- **Every paragraph earns its space.** If a sentence doesn't tell the visitor something useful or push them toward contact, cut it. Two strong sentences beat four weak ones.
- **CTAs are specific.** "Call Now for a Free Estimate" converts better than "Get Started". "Schedule Your Inspection" beats "Contact Us". Name the action the customer is taking.
- **Service descriptions answer "why should I care?"** Bad: "We offer residential painting." Good: "Interior and exterior painting with a 2-year warranty on every job. We prep, prime, paint, and clean up — you don't lift a finger."
- **FAQ answers are real answers.** Don't restate the question. Don't be vague. Give the actual answer a receptionist would give on the phone: pricing ranges, timelines, what to expect.

## Visual Hierarchy

- **Section order is intentional.** The template's order follows a proven conversion funnel:
  1. **Hero** — hook + primary CTA (top of funnel)
  2. **Services** — "here's what we do" (inform)
  3. **How It Works** — "here's how easy it is" (reduce friction)
  4. **Gallery** — "here's proof we do it well" (build trust)
  5. **Why Choose Us** — "here's why we're better" (differentiate)
  6. **FAQ** — "here are your objections, answered" (overcome hesitation)
  7. **Service Area** — "yes, we come to you" (qualify)
  8. **Testimonials** — "don't take our word for it" (social proof)
  9. **CTA Banner** — "ready?" (re-engage)
  10. **Contact** — "here's how" (convert)
  11. **Footer** — links + info (catch-all)
- **Don't reorder sections** unless there's a specific reason. This funnel is tested.
- **Accent color is for CTAs and emphasis only.** If everything is accented, nothing is. Use `--accent` / `--accent-light` on: buttons, the highlighted line in headlines, stat numbers, and icon hover states. Nowhere else.

## Trust & Conversion Signals

- **Phone number appears 4 times minimum:** Nav CTA, Hero CTA, CTA Banner, Contact section. Every scroll position should have a call option within thumb reach on mobile.
- **Google reviews > everything.** If the client has a 4.5+ Google rating, feature it in the hero stats. "4.8 Google Rating" with a star is the strongest trust signal for local businesses.
- **"Licensed & Insured" / "Family Owned" / "BBB Accredited"** — if true, put it in the tag pill or Why Choose Us. These convert for service businesses.
- **Real testimonials only.** Three genuine reviews beat ten fake ones. If the client has zero reviews, skip the section. Never fabricate.
- **Badge overlay on Why Choose Us image.** Use for the single most impressive number: years in business, jobs completed, or a rating. One number, not three.

## Color & Typography

- **Dark backgrounds convert better for service businesses.** Stick with the dark palette unless the client specifically wants light.
- **Contrast ratio on CTAs must be obvious.** The accent button should pop against the dark background. If the client's brand color is too dark or too muted, bump it up. A CTA that blends in doesn't get clicked.
- **Display font (Bebas Neue) for brand wordmark only.** Body text stays in Inter. Never use the display font for paragraphs or descriptions.
- **Max 2 font weights in body:** regular (400) for paragraphs, bold/extrabold (700/800) for headings. That's it.

## Mobile-First Conversion

- **Tap targets: 44px minimum.** Every button and link must be finger-friendly. The template handles this, but verify custom sections.
- **Phone CTA is a `tel:` link everywhere.** On mobile, tapping "Call (555) 555-5555" should open the dialer instantly. No extra steps.
- **Forms are short.** Name, phone, message. That's it. Every extra field drops conversion. Don't add email unless the client specifically asks for it. Don't add dropdowns, file uploads, or captchas.
- **Hero content anchors to bottom on mobile** (`items-end`). The user's thumb is at the bottom — that's where the CTA should be.
- **No horizontal scrolling, ever.** If it happens, it's a bug. Fix it.

## Image Guidelines

- **Hero background: dark, high-contrast, relevant.** A photo of the actual work (tow truck on scene, crew on a roof, finished landscape). Not a stock sunset. Dim it to 45% brightness so white text is readable.
- **Gallery images: real work only.** No stock. No AI-generated. If they only have 3 photos, use 3. The gallery reflows.
- **Shop/storefront image: shows the business is real.** Their truck with the logo, their storefront, their team in uniform. This goes in Why Choose Us to prove they're a real local business.
- **All images need descriptive alt text for SEO.** Not "work-1" — use "Kitchen cabinet refacing project in Boca Raton" or "24-hour emergency towing on I-95".

## SEO Baseline

- **Title tag format:** `"[Brand Name] — [What They Do] in [City/Area]"`
- **Meta description:** One sentence saying what + where + why. Under 155 characters.
- **H1 is the hero headline.** Only one H1 per page. Section titles are H2.
- **FAQ section generates FAQPage schema potential.** Write questions the way people actually Google them: "How much does [service] cost in [city]?" not "What are your rates?"
- **Service area section is critical for local SEO.** List every city/neighborhood they serve. Google uses this for local ranking.
- **Image alt text = keyword opportunities.** "[Service] in [City]" format.

## What NOT to Do

- Don't add animations beyond what the template has. The GSAP reveals and magnetic buttons are enough. More animation = slower load = lower conversion.
- Don't add parallax scrolling to anything except the hero background. It's a gimmick that hurts mobile performance.
- Don't use gradients on text. They look dated and hurt readability.
- Don't put social media icons in the hero or above the fold. You want people to call, not leave your site for Instagram.
- Don't add a "Back to Top" button. If the site is good, people scroll naturally. The nav is sticky anyway.
- Don't use carousels/sliders for anything. They have terrible engagement rates. The gallery grid is better.
- Don't add loading spinners or skeleton screens. The site should be fast enough not to need them.
