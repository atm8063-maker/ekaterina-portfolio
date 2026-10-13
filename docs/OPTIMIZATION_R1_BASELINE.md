# Optimization R1 — Baseline inventory

> Captured: **2026-10-09** · Command: `pnpm exec next build` · **Next.js 16.2.6 (Turbopack)** · Result: compiled successfully; **Generating static pages (32/32)**.

---

## Preservation contract

Any R1 work must respect the live project contract documented in [`docs/STATE.md`](./STATE.md):

- Do **not** change blocks marked **✅ Готов** without an explicit user request (see also `.agents/AGENTS.md` § «Не ломай готовые блоки»).
- Do **not** change on-site copy unless the user supplies replacement text.
- Orphan / draft routes listed in STATE (SYS-001) stay reachable by direct URL unless the user opts to remove them.
- Anchor map and hash-scroll behavior on `/` and `/fir_tree_art` are part of shipped navigation (NAV-001).

---

## Scope exclusions (user decision)

| Phase | Topic | Status |
|-------|--------|--------|
| **Phase 4** | Video optimization, heavy asset passes (compression, lazy video strategy, gallery media reflow) | **DEFERRED by user** — out of R1 implementation scope; baseline only records current routes and runtime patterns. |

---

## Route inventory (from production build)

Legend: **○** static · **●** SSG (`generateStaticParams`) · **ƒ** dynamic (on demand).

### Primary & linked routes

| # | Route | Build type | In site nav / carousel | Notes |
|---|--------|------------|-------------------------|--------|
| 1 | `/` | ○ Static | Yes (Professional) | Career landing; `useHashScroll()` |
| 2 | `/fir_tree_art` | ○ Static | Yes (Creative) | Art landing; lazy section chunks |
| 3 | `/case` | ○ Static | Yes (Nick Potapov card → `customHref`) | Same interactive case as slug route |
| 4 | `/cases/05-nick-potapov-site` | ● SSG | Yes | Iframe Behance board + height sync |
| 5 | `/cases/01-insigma` | ● SSG | Yes | Standard case longread |
| 6 | `/cases/02-contact-real-estate` | ● SSG | Yes | Standard case longread |
| 7 | `/cases/03-pobeda-dizayna` | ● SSG | Yes | Standard case longread |
| 8 | `/cases/04-kart-motors-honda-civic-cup` | ● SSG | Yes | Standard case longread |
| 9 | `/cases/06-mafia-assistant` | ● SSG | Yes | Standard case longread |
| 10 | `/cases/07-resin-art-school` | ● SSG | Hidden in carousel (`hidden: true`) | Still built via `generateStaticParams` |
| 11 | `/cases/08-mockup-real-estate` | ● SSG | Yes | Custom `DoorsRealEstateCase` |
| 12 | `/cases/09-mockup-electronics` | ● SSG | Yes | Custom `ElectronicsShopCase` |
| 13 | `/cases/10-house-project` | ● SSG | Yes | Custom `HouseCase` |
| 14 | `/cases/11-landscape-project` | ● SSG | Yes | Custom `LandscapeCase` |
| 15 | `/cases/12-resin-masterclass` | ● SSG | Yes | `customHref` → `/fir_tree_art` |
| 16 | `/cases/13-local-tv-report` | ● SSG | Yes | `customHref` → `/fir_tree_art#interviews` |
| 17 | `/cases/14-vertex-homes` | ● SSG | Yes | Iframe case + height sync |

### System, metadata, and utility routes

| # | Route | Build type | Notes |
|---|--------|------------|--------|
| 18 | `/_not-found` | ○ Static | App Router not-found |
| 19 | `/icon.png` | ○ Static | App icon route (listed in build tree) |
| 20 | `/robots.txt` | ○ Static | `app/robots.ts` |
| 21 | `/sitemap.xml` | ○ Static | `app/sitemap.ts` |
| 22 | `/api/save-sectors` | ƒ Dynamic | POST utility; not a public page |

### Orphan / draft routes (direct URL only)

Documented in [`docs/STATE.md`](./STATE.md) (SYS-001) and [`docs/PLAN.md`](./PLAN.md). Not linked from header or main flows; kept intentionally for design comparison / references.

| # | Route | Build type | Connected component / purpose |
|---|--------|------------|--------------------------------|
| 23 | `/art-concrete` | ○ Static | `components/sections/art-gallery-concrete.tsx` |
| 24 | `/art-hero` | ○ Static | `components/sections/art-gallery-hero.tsx` |
| 25 | `/art-perspective` | ○ Static | `components/sections/art-gallery-perspective.tsx` |
| 26 | `/collage-test` | ○ Static | Collage layout experiment |
| 27 | `/reference-collage` | ○ Static | Reference collage experiment |
| 28 | `/testimonials-test` | ○ Static | A/B layout reference for ArtTestimonials |

### Mosaic experiments (unlinked; same class as drafts)

| # | Route | Build type | Notes |
|---|--------|------------|--------|
| 29 | `/portrait-mosaic` | ○ Static | Standalone mosaic prototype |
| 30 | `/wide-mosaic` | ○ Static | Wide mosaic layout (`resize` listener) |
| 31 | `/wide-mosaic-experiment` | ○ Static | Mosaic + blur/brightness controls; grid from `lib/mosaic/spots.ts` |

**Route count note:** The build **Route (app)** tree exposes **32** entries when `/cases/[slug]` is expanded to **14** slugs: **16** prerendered `○` routes (including `/_not-found`, `/icon.png`, metadata) **+ 14** case pages **+ 1** dynamic `ƒ` **`/api/save-sectors`** = **31** prerendered URLs + **1** API route. The worker line **Generating static pages (32/32)** matches Next.js’ internal static output count for this app; re-run `pnpm exec next build` after route changes to refresh both the tree and the count.

---

## Orphan route summary

| Route | In STATE.md | Linked from nav |
|-------|-------------|-----------------|
| `/art-concrete`, `/art-hero`, `/art-perspective` | Yes | No |
| `/collage-test`, `/reference-collage` | Yes | No |
| `/testimonials-test` | Yes | No |
| `/portrait-mosaic`, `/wide-mosaic`, `/wide-mosaic-experiment` | No (implicit draft) | No |

---

## Lighthouse (pending)

| URL | Device | Performance | Accessibility | Best practices | SEO | LCP | CLS | INP/TBT | Captured |
|-----|--------|-------------|---------------|----------------|-----|-----|-----|---------|----------|
| `/` | Mobile | | | | | | | | |
| `/` | Desktop | | | | | | | | |
| `/fir_tree_art` | Mobile | | | | | | | | |
| `/fir_tree_art` | Desktop | | | | | | | | |
| `/case` | Mobile | | | | | | | | |

---

## Bundle / build metrics (pending)

| Metric | Before R1 | After R1 | Command / source |
|--------|-----------|----------|------------------|
| First Load JS `/` | | | `@next/bundle-analyzer` or build output |
| First Load JS `/fir_tree_art` | | | |
| `next build` compile time | ~3.1s (2026-10-09) | | `pnpm exec next build` |
| Static pages generated | 32/32 | | build log |

---

## Related docs

- [`docs/OPTIMIZATION_R1_AUDIT.md`](./OPTIMIZATION_R1_AUDIT.md) — `useEffect` / timers / listeners audit
- [`docs/OPTIMIZATION_R1_RESULTS.md`](./OPTIMIZATION_R1_RESULTS.md) — verification checklist and post-change metrics
