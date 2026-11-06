# Tragami marketing site

Next.js 14 (App Router) + TypeScript + Tailwind CSS v4 + Motion + lucide-react.

## Run it

```bash
npm install
npm run dev
```

## The homepage (Conversion and Channel Giveaways)

`app/page.tsx` follows the Conversion / Channel Giveaways brief, in the Finsyc template's visual
design (`components/templates/finance-management-landing-page-finsyc/`). Section order:

| Brief section | Component |
| --- | --- |
| Nav and hero (headline, two CTAs, trust points, dashboard mockup) | `Header 01 Finsyc.tsx` |
| Product overview, two product cards | `Feature 01 Finsyc.tsx` |
| Conversion Giveaways detail (5 features) | `Why Choose us 01 Finsyc.tsx` (used twice) |
| Channel Giveaways detail (5 features) | `Why Choose us 01 Finsyc.tsx` (second instance, mirrored) |
| How it works (4 steps) | `How it Works 01 Finsyc.tsx` |
| Use cases (4 cards) | `Metrics with logo 01 Finsyc.tsx` |
| Feature overview (10 features) | `Feature Grid Gamiflow.tsx` |
| FAQ | `FAQ Gamiflow.tsx` |
| Final CTA and footer | `CTA with Footer 01 Finsyc.tsx` |

Notes on how the brief was applied:

- **Engage content is removed** from the homepage, the nav and footer, the sitemap, and the two
  dedicated pages (`/engage`, `/platform/gamification`, now deleted). The only mention left is the
  FAQ entry "Does Tragami include mini-games?", which the brief asks for. Delete that item in
  `FAQ Gamiflow.tsx` if you would rather not mention games at all. Wording about engagement still
  appears in the older internal pages (Capture, Retain and the use-case pages); those are untouched.
- **Nothing invented.** The brief rules out made-up stats, testimonials, customer logos and
  integrations, so the template's counters, testimonials, integrations hub, blog and pricing
  sections were deleted. The dashboard and form mockups (`Mockups.tsx`) use fictional names,
  `example.com` emails and round numbers, and each is captioned "Sample data for illustration".
- **Pricing** is not a homepage section in the brief. The nav links to `/pricing`, which is driven by
  `content/pricing.ts`, so prices can be changed in one file without touching any page layout.
- **Product routes.** `/conversion-giveaways` and `/channel-giveaways` are new pages
  (`content/pages/conversion-giveaways.ts`, `channel-giveaways.ts`) using the shared internal-page
  template. The older `/conversion` and `/channel` pages still exist.
- **FAQ placement.** The footer is part of the final CTA component, so the FAQ sits just before it.
- **Footer.** The newsletter form and Facebook, Twitter and Instagram links were removed (no backend
  or known profiles). Footer links point at real routes; "Contact" is still a placeholder `#`.
- **Assets.** Background videos still point at the template's `cdn.jiro.build` URL. Search for it to
  replace them. The product mockups are code, not images, so swap them for screenshots whenever
  you have real ones.
- **Fonts.** Inter, Onest and Playfair Display, loaded by each section and registered in
  `app/globals.css`. The giant footer wordmark is sized down so "Tragami" fits.

The previous homepage components (`Hero.tsx`, `GlassMetrics.tsx`, `GameShowcase.tsx`, etc. in
`components/`) are not used by any page. They still contain game and Engage content; delete them
when you are ready. The internal pages under `app/(site)/` keep the older header and footer.

## Previous homepage: section-by-section reference map (no longer used)

- **Hero** — the Stellar.ai spec. CloudFront video restored.
- **Product showcase** — the rounded video-hero-container + floating pill navbar spec.
  CloudFront video restored.
- **Problem** — the Prisma spec: full-bleed video, noise overlay, word-pull-up heading,
  scroll-linked per-character reveal on the paragraph. CloudFront video restored. Instrument
  Serif italic swapped for Inter italic, per "keep the font consistent."
- **Capture / Engage / Retain cards** (`GlassMetrics.tsx`) — the "Built for Intelligent
  Performance" glass-card spec: paper-gray stage, looping background video, fixed 429x554
  card ratio via the `--u` unit, LED dot-matrix headline ("Built to `engage` and `retain`."),
  grain texture. All 5 CloudFront videos restored. Gauge/tile-wall/network illustrations are
  simplified rather than traced exactly.
- **Attribution** (`Attribution.tsx`) — now two references:
  - The **PrecisionSection** header is now implemented literally: the exact background
    "wave" image, the badge pill with its inline SVG, and the two-line heading with the
    gradient accent span — all of it was missing in the previous pass. Font stays Inter
    rather than switching to Mazzard H, per "keep the font consistent."
  - The **PrecisionSection** staircase (desktop: four rising pillars in absolute vw
    positions; mobile: alternating left/right flow with a gradient line) replaces the old
    flat chain-of-boxes row. The seven original chain nodes are grouped into four stages:
    Captures, Plays, Rewards, Measures.
  - The **pixel-faithful mosaic**'s pastel-gradient card chrome is applied to the
    "01 / Every source, tagged", "02 / Every play, scored", "03 / Every outcome, traced"
    cards (cool blue-grey, chartreuse, peach gradients with dark text, instead of the
    previous plain dark cards).
- **Product loop** — the Boomerang spec's numbered row pattern. Header unified via
  `SectionHeader`.
- **Game showcase** (`GameShowcase.tsx`) — rebuilt from the Gamma-style product-mosaic
  screenshot: soft sky-blue section, 2-column white cards (thumbnail + title + description),
  decorative clouds and a centered tagline at the bottom. This section had no reference
  before; it does now.
- **Use cases** — marquee is the logo-scroller spec; the three featured cards reuse the
  Prisma Features checklist card. Header unified via `SectionHeader`.
- **Final CTA + FAQ** (`CTAFinal.tsx`) — rebuilt from the "CTA + FAQ" spec: the animated
  five-blob gradient CTA card (via CSS `@property`, in `globals.css` as
  `.c5-animated-gradient`, retinted to the Tragami palette) beside a working FAQ accordion.
  The reference's own footer wasn't duplicated — the site already has one from a different
  reference. This replaces the earlier Boomerang-video treatment of this section, since the
  new reference doesn't call for video here; `components/ui/BoomerangVideo.tsx` is still in
  the project if you want that technique somewhere else.
- **Footer** — the Lumina liquid-glass spec, video scoped to `absolute` instead of the
  reference's page-wide `fixed` (which would have bled behind every earlier section).

## Consistent section headers

Every content section now shares one header component, `components/ui/SectionHeader.tsx`,
built on the PrecisionSection reference's own header pattern: a small badge pill (with its
exact SVG icon), a plain heading line, a gradient-accent second line (the exact
`linear-gradient(90deg, #2ba7ff, #ca45ff 50%, #fe881b)` clip-text treatment from that spec),
and a muted explainer paragraph. Attribution, Product loop, Game showcase, Use cases and
Pricing all run through this same structure now, so a badge + two-line heading + subtext
reads as one system rather than five different ideas about what a heading looks like.
Sections that are full-bleed video/hero moments (Hero, Product showcase, Problem) keep their
own bespoke treatment rather than being forced into the standard pattern — those aren't
"section headers," they're the hero itself. The glass cards' "Built to `engage` and
`retain`" headline also stays as its own thing, since that's the specific styling you liked.

The LED dot-matrix font (`components/ui/DotNumber.tsx`) is reused wherever a real word in
context happens to be spellable in its limited glyph set (digits plus `I a e g i l n t r`):
"engage" and "retain" in the glass cards, "great" in the game showcase's custom-games tile.
Everywhere else, it's normal type, exactly as you asked — mimic it where it fits, plain
font where it doesn't.

## Sections with no reference prompt

- **Nav** (`components/Nav.tsx`) — still original. Send a reference if you have one.

## Structure

```
app/
  layout.tsx        Inter font, global metadata
  page.tsx           assembles all sections
  globals.css        Tailwind v4 theme tokens, shared keyframes, stage-card system,
                      animated-gradient CTA blobs, pillar line gradient
components/
  Nav.tsx
  Hero.tsx
  ProductShowcase.tsx
  Problem.tsx
  GlassMetrics.tsx
  Attribution.tsx
  ProductLoop.tsx
  GameShowcase.tsx
  UseCases.tsx
  Pricing.tsx
  CTAFinal.tsx
  Footer.tsx
  ui/
    SectionHeader.tsx
    WordsPullUp.tsx
    Marquee.tsx
    DotNumber.tsx
    CloudDecor.tsx
    VideoBG.tsx
    BoomerangVideo.tsx   (currently unused, kept for later)
    TragamiMark.tsx
lib/
  utils.ts           cn() class-merge helper
```

## Internal pages (ported from the uploaded `gamiflow.zip`)

All 22 non-homepage pages from the uploaded static site are now real Next.js routes under
`app/(site)/`, sharing the homepage's nav, footer, fonts and colors, and deliberately **not**
using any of the homepage's motion/video treatments — per "keep it minimal, no weird
animations for internal pages," these are plain server components with no `motion` usage
(the only client-side pieces are the nav dropdown, the mobile menu, the pricing controls, and
the FAQ accordion, none of which animate on scroll).

Content isn't hardcoded per page. Each original HTML file was parsed into structured JSON
(`content/pages/*.ts`, typed via `content/types.ts`) and rendered through one shared set of
block components (`components/site/Blocks.tsx`) that covers every pattern the original site
used: feature grids, "deep dive" two-column sections with a table or timeline mockup, funnels,
scenario write-ups, data chips, numbered flows, engine cards, quotes, integration tiles, and
FAQs. `components/site/PageView.tsx` assembles the shared hero, sections and final CTA band
around that. Adding a 23rd page later means writing one `PageData` object, not a new layout.

The pricing page is the one page with real interactivity, ported into
`components/site/PricingView.tsx` from `content/pricing.ts`: the monthly/yearly toggle, the
Conversion/Channel product tabs, the plan cards, the comparison table, and the "customize
volume" slider modal all use the same numbers and the same linear price formula as the
original (verified against the source markup at generation time, not re-typed by hand).

`lib/site.ts` is the one place nav links, footer columns, the "Start free" target
(`SIGNUP_HREF`) and the login link live. `lib/routes.ts` lists every page route and feeds
`app/sitemap.ts`; `app/robots.ts` points at it. Set `NEXT_PUBLIC_SITE_URL` in production if
the domain isn't `tragami.com`.

The real logo assets from the upload are in `public/logo.svg` and `app/favicon.ico` but
aren't wired in yet, everything still renders the placeholder `TragamiMark` circle-and-dot
icon via `components/site/Brand.tsx`. Swap that one file to `<img src="/logo.svg" ... />`
when you're ready to use the real mark; I left it as the placeholder rather than guess at how
you want it sized and colored across light and dark backgrounds.

## Making the internal pages look less like blog posts

The plain white "breadcrumb, h1, paragraph" header every internal page had is gone. Each page
now gets:

- **A standout gradient header** (`HeroView` in `components/site/PageView.tsx`) in one of
  three accent colors, chosen automatically from the route (`lib/category.ts`): indigo for
  product pages (Capture, Engage, Retain, Conversion, Channel, Distribution), teal for
  Platform pages, coral for Use Case pages. Breadcrumb pills, badge, big heading and CTAs sit
  on the gradient; a placeholder visual panel sits on the right on desktop.
- **A placeholder component for illustrations** (`components/site/ArtPlaceholder.tsx`): a
  gradient tile in the page's accent color with a faint icon and a small corner label, used
  in the hero and in card/engine grids wherever the original page had a feature but no
  graphic. It's built to make clear it's a placeholder without looking broken. Swap any one
  of them for a real screenshot or illustration; the layout around it doesn't need to change.
- **Every card, engine and tile block** (`components/site/Blocks.tsx`) now carries that same
  accent color through icons, borders and the small "traffic light" browser-chrome dots on
  table/timeline mockups, so a Capture page and a Retain page read as clearly different
  without becoming a different design system.

Nothing here uses `motion` or scroll-triggered animation, per "keep it minimal, no weird
animations for internal pages" from before. The visual variety comes from color and layout,
not motion.
