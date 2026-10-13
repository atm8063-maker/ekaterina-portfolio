# Optimization R1 — Runtime hooks audit

> Captured: **2026-10-09** · Scope: `components/` and `app/` · Patterns: `useEffect`, `setInterval`, `addEventListener` (plus `setTimeout` where it appears inside audited effects).

Method: ripgrep over `components/**/*.{ts,tsx}` and `app/**/*.{ts,tsx}`, then manual read of each effect body for cleanup.

---

## Summary

| Area | Files with matches | `setInterval` | `window.addEventListener` | Effects with explicit cleanup |
|------|-------------------|---------------|---------------------------|--------------------------------|
| `components/` | 9 | 0 | 8 registrations | 7 / 9 effect blocks |
| `app/` | 2 | 0 | 2 (`resize`) | 2 / 2 |

**Hash scroll:** `/` and `/fir_tree_art` no longer define inline `useEffect` in `app/`; both call `useHashScroll()` from `components/shared/use-hash-scroll.ts` (listed below).

**Iframe height sync:** Nick Potapov (`/case`, `/cases/05-nick-potapov-site`) and Vertex Homes (`/cases/14-vertex-homes`) use `postMessage` (`RESIZE_BEHANCE_CASE`), `resize` (debounced via `requestAnimationFrame`), and `onLoad` timeouts in JSX — **no `setInterval`** after R1.

---

## Audit table

| File | Line | Pattern | Cleanup? | Notes |
|------|------|---------|----------|--------|
| `components/shared/use-hash-scroll.ts` | 7 | `useEffect` | Yes | Entry effect |
| `components/shared/use-hash-scroll.ts` | 18–19 | `setTimeout` (×2) | Yes | Cleared in return |
| `components/shared/use-hash-scroll.ts` | 21 | `window.addEventListener("hashchange", …)` | Yes | `removeEventListener` in return |
| `app/page.tsx` | 24 | `useHashScroll()` | — | Delegates to row above |
| `app/fir_tree_art/page.tsx` | 27 | `useHashScroll()` | — | Delegates to row above |
| `components/sections/hero.tsx` | 42 | `useEffect` | Yes | `cancelled` flag + clears pending `timeoutId` on cleanup / hover end |
| `components/sections/hero.tsx` | 52 | `setTimeout` (recursive via `scheduleNext`) | Yes | Stops scheduling when `cancelled` |
| `components/sections/art-protest.tsx` | 799 | `React.useEffect` | Yes | Mobile first-spot centering |
| `components/sections/art-protest.tsx` | 812–813 | `setTimeout` (×2) | Yes | Cleared in return |
| `components/sections/art-protest.tsx` | 814 | `window.addEventListener('resize', centerFirstSpot)` | Yes | `removeEventListener` in return |
| `components/sections/art-sketches.tsx` | 29 | `useEffect` | Yes | Resize scaling for silhouette mosaic |
| `components/sections/art-sketches.tsx` | 42 | `window.addEventListener('resize', handleResize)` | Yes | `removeEventListener` in return |
| `components/sections/art-gallery-perspective.tsx` | 10–12 | `useSyncExternalStore` hydration guard | N/A | No subscriptions; client-only render gate |
| `components/language-provider.tsx` | 19 | `useEffect` | N/A | One-shot `localStorage` read; no listeners |
| `components/language-provider.tsx` | 43 | `useEffect` | N/A | Sets `document.title` on `lang` change; no listeners |
| `components/cases/nick-potapov-case.tsx` | 36 | `useEffect` | Yes | **Iframe sync** (Behance board in iframe) |
| `components/cases/nick-potapov-case.tsx` | 44 | `window.addEventListener("message", handleMessage)` | Yes | Handles `RESIZE_BEHANCE_CASE` |
| `components/cases/nick-potapov-case.tsx` | 45–50 | `window.addEventListener("resize", onResize)` | Yes | `onResize` → rAF → `syncHeight` |
| `components/cases/nick-potapov-case.tsx` | 49 | `cancelAnimationFrame(rafId)` | Yes | On unmount |
| `components/cases/vertex-homes-case/index.tsx` | 38 | `useEffect` | Yes | Same pattern as Nick case |
| `components/cases/vertex-homes-case/index.tsx` | 51 | `window.addEventListener("message", handleMessage)` | Yes | `RESIZE_BEHANCE_CASE` + offset |
| `components/cases/vertex-homes-case/index.tsx` | 52–57 | `window.addEventListener("resize", onResize)` | Yes | rAF debounce; `cancelAnimationFrame` on cleanup |
| `components/case-page-client.tsx` | 32 | `useEffect` | Yes | Lightbox keyboard trap |
| `components/case-page-client.tsx` | 41 | `window.addEventListener('keydown', handleKeyDown)` | Yes | Only when lightbox open |
| `components/case-page-client.tsx` | 42–46 | `document.body.style.overflow` | Yes | Restored to `auto` on cleanup |
| `app/wide-mosaic/page.tsx` | 9 | `useEffect` | Yes | Scale-to-viewport for mosaic |
| `app/wide-mosaic/page.tsx` | 21 | `window.addEventListener('resize', handleResize)` | Yes | `removeEventListener` in return |
| `app/wide-mosaic-experiment/page.tsx` | 12 | `useEffect` | Yes | Same resize pattern + blur experiment state |
| `app/wide-mosaic-experiment/page.tsx` | 24 | `window.addEventListener('resize', handleResize)` | Yes | `removeEventListener` in return |

---

## Nick Potapov iframe sync (detail)

**Files:** `components/cases/nick-potapov-case.tsx` (used by `app/case/page.tsx` and `app/cases/[slug]/page.tsx` when `slug === '05-nick-potapov-site'`).

| Mechanism | Purpose |
|-----------|---------|
| `syncHeight()` | Reads iframe `contentDocument` for `.behance-board` or `body.scrollHeight`; updates React state `iframeHeight` |
| `message` listener | Accepts `{ type: "RESIZE_BEHANCE_CASE", height: number }` from embedded page |
| `resize` listener | Debounced with `requestAnimationFrame` → `syncHeight` |
| iframe `onLoad` | Staggered `setTimeout` calls in JSX (outside this effect) |

Effect cleanup: remove `message` / `resize` listeners and cancel pending rAF.

---

## Gaps / follow-ups (R1 candidates)

| Item | Risk | Suggestion |
|------|------|------------|
| `hero.tsx` recursive `setTimeout` | — | Addressed R1 (cancel flag) |
| Iframe height if embed changes | Low | R1 removed interval polling; if height drifts, add `ResizeObserver` on iframe content |
| No matches in `app/` for hash scroll | — | Already centralized in `use-hash-scroll.ts` |

---

## Related docs

- [`docs/OPTIMIZATION_R1_BASELINE.md`](./OPTIMIZATION_R1_BASELINE.md)
- [`docs/OPTIMIZATION_R1_RESULTS.md`](./OPTIMIZATION_R1_RESULTS.md)
- [`docs/STATE.md`](./STATE.md) — memory/cleanup expectations in `.cursor/rules/memory-leak-review.mdc`
