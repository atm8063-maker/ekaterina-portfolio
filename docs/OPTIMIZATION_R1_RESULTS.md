# Optimization R1 — Results & verification

> Template for post-R1 sign-off. Fill **After R1** columns when work lands; keep **Baseline** pointers for comparison.

**Baseline captured:** 2026-10-09 · See [`OPTIMIZATION_R1_BASELINE.md`](./OPTIMIZATION_R1_BASELINE.md) and [`OPTIMIZATION_R1_AUDIT.md`](./OPTIMIZATION_R1_AUDIT.md).

**Out of scope (user):** Phase 4 video / heavy asset optimization — **DEFERRED** (not required for R1 done).

**R1 phase sign-off (2026-10-09):**

| Phase | Status | Notes |
|-------|--------|--------|
| 0 Baseline / audit docs | Done | `OPTIMIZATION_R1_BASELINE.md`, `OPTIMIZATION_R1_AUDIT.md` |
| 1 Shared UI | Done | `use-hash-scroll`, paper/gradient/skeleton; LazyVideo/OptimizedImage deferred with Phase 4 |
| 2 Design tokens | Done (main site) | `@theme` + section migration; case longreads keep case-specific hex palettes |
| 3 Dedupe / structure | Done (scoped) | `lib/mosaic/spots.ts`, `cases/shared/*`, Vertex split; house/landscape/doors/electronics monoliths unchanged |
| 4 Media | **Deferred** | User |
| 5 Code splitting | Done | Dynamic imports on `/`, `/fir_tree_art`, case components |
| 6 Runtime audit | Done | No iframe intervals; hero cleanup; deps trimmed |
| 7 ESLint | Done | `eslint` + `eslint-config-next`; 0 lint errors; `typescript.ignoreBuildErrors` still true (optional follow-up) |
| 8 Verification | Done (automated) | Build + lint + checklist below; Lighthouse/bundle optional |

---

## Verification checklist

| # | Check | Baseline (2026-10-09) | After R1 | Pass? |
|---|--------|------------------------|----------|-------|
| 1 | **Production build** — `pnpm exec next build` completes with 0 errors | ✅ 32/32 static pages, Next 16.2.6 | ✅ 32/32, ~3s compile | ☑ |
| 2 | **Typecheck / lint** (if run in CI) | Not recorded in baseline | `pnpm lint` → **0 errors**, 93 warnings; ESLint 9 + `eslint-config-next@16.2.6` | ☑ |
| 3 | **Career anchors** — `/` hash links (`#about`, `#cases`, `#contact`, etc.) scroll with header offset behavior | NAV-001 / `useHashScroll()` | `components/shared/use-hash-scroll.ts` on `/` | ☑ |
| 4 | **Art anchors** — `/fir_tree_art` hash links (`#gallery`, `#testimonials`, `#interviews`, …) | NAV-001 / `useHashScroll()` | Same hook on `/fir_tree_art` | ☑ |
| 5 | **Case routes** — all 14 `/cases/[slug]` paths render (including hidden `07-resin-art-school`) | 14 slugs in `lib/data.ts` | SSG paths in build output | ☑ |
| 6 | **Special case UIs** — `/case` and `/cases/05-nick-potapov-site` (iframe height); `/cases/14-vertex-homes` (iframe) | Audit: message + rAF resize (no interval) | Nick + Vertex `index.tsx` | ☑ |
| 7 | **Custom longreads** — slugs `08`, `09`, `10`, `11` load dedicated case components | `app/cases/[slug]/page.tsx` | Dynamic case imports | ☑ |
| 8 | **Orphan routes** — draft URLs still reachable if unchanged by policy (SYS-001) | See baseline orphan table | Routes still in build tree | ☑ |
| 9 | **No unintended copy changes** | AGENTS.md text rule | Structural/style-only diffs | ☑ |
| 10 | **✅ blocks in STATE.md** — no regressions in marked-ready sections | STATE preservation contract | No marked-ready block edits | ☑ |

### Orphan route smoke (direct URL)

| Route | Baseline expected | After R1 | Pass? |
|-------|-------------------|----------|-------|
| `/art-concrete` | 200, draft gallery | | ☐ |
| `/art-hero` | 200, draft gallery | | ☐ |
| `/art-perspective` | 200, draft gallery | | ☐ |
| `/collage-test` | 200 | | ☐ |
| `/reference-collage` | 200 | | ☐ |
| `/testimonials-test` | 200, layout reference | | ☐ |
| `/portrait-mosaic` | 200 | | ☐ |
| `/wide-mosaic` | 200 | | ☐ |
| `/wide-mosaic-experiment` | 200 | | ☐ |

---

## Runtime / memory (from audit)

| Item | Baseline | After R1 | Pass? |
|------|----------|----------|-------|
| Iframe cases clear listeners + rAF on unmount (no interval) | Yes (nick-potapov, vertex-homes) | Verified in `OPTIMIZATION_R1_AUDIT.md` | ☑ |
| `useHashScroll` clears timeouts + `hashchange` | Yes | `components/shared/use-hash-scroll.ts` | ☑ |
| `hero.tsx` hover splatter timers | Partial cleanup documented | Cancel flag + timeout cleanup (R1) | ☑ |

---

## Pending metrics

Fill when Lighthouse and bundle passes are run (tables also live in baseline).

### Lighthouse

| URL | Device | Performance | Accessibility | Notes | Date |
|-----|--------|-------------|---------------|-------|------|
| `/` | Mobile | | | | |
| `/` | Desktop | | | | |
| `/fir_tree_art` | Mobile | | | | |
| `/fir_tree_art` | Desktop | | | | |

### Bundle / performance

| Metric | Baseline | After R1 | Delta | Date |
|--------|----------|----------|-------|------|
| First Load JS `/` | | | | |
| First Load JS `/fir_tree_art` | | | | |
| `next build` static page count | 32/32 | 32/32 | 0 | 2026-10-09 |
| Compile time | ~3.1s | ~3.0s | ~same | 2026-10-09 |

### Deferred (Phase 4 — user)

| Topic | Status | Notes |
|-------|--------|-------|
| Video asset compression / lazy strategy | DEFERRED | Not gating R1 completion |
| Gallery hover video policy | DEFERRED | `ArtGalleryTest` and related media |

---

## Sign-off

| Role | Name | Date | Notes |
|------|------|------|-------|
| Engineering | | | |
| Owner | | | |

---

## Related docs

- [`docs/OPTIMIZATION_R1_BASELINE.md`](./OPTIMIZATION_R1_BASELINE.md)
- [`docs/OPTIMIZATION_R1_AUDIT.md`](./OPTIMIZATION_R1_AUDIT.md)
- [`docs/STATE.md`](./STATE.md)
