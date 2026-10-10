/**
 * CSS horizontal marquees use translateX(±50%). The track must be two equal-width halves;
 * each half should be wide enough to cover the viewport so no empty gap shows mid-loop.
 */
const MIN_ITEMS_PER_HALF = 36;

export function buildMarqueeHalf<T>(items: T[]): T[] {
  if (items.length === 0) return [];
  const half: T[] = [];
  while (half.length < MIN_ITEMS_PER_HALF) {
    half.push(...items);
  }
  return half;
}

export function buildMarqueeSequence<T>(items: T[]): T[] {
  const half = buildMarqueeHalf(items);
  return [...half, ...half];
}
