"use client";

import { useEffect } from "react";

type Priority = "high" | "low";

type Job = { src: string; priority: Priority };

const warmed = new Set<string>();
const queued = new Set<string>();
const inflight = new Set<HTMLImageElement>();
let queue: Job[] = [];
let active = 0;
let started = false;
const CONCURRENCY = 6;

function absoluteUrl(src: string): string {
  try {
    return new URL(src, window.location.href).href;
  } catch {
    return src;
  }
}

function pump() {
  if (!started) return;
  while (active < CONCURRENCY && queue.length > 0) {
    const job = queue.shift();
    if (!job) break;
    queued.delete(job.src);
    if (warmed.has(job.src)) continue;
    warmed.add(job.src);
    active += 1;
    const img = new Image();
    inflight.add(img);
    img.decoding = "async";
    img.fetchPriority = job.priority;
    const done = () => {
      inflight.delete(img);
      active -= 1;
      pump();
    };
    img.onload = done;
    img.onerror = done;
    img.src = job.src;
  }
}

/** Warm an image (or the poster frame of a video URL is ignored) before it is shown. */
export function prefetchMedia(src: string | undefined, priority: Priority = "high") {
  if (!src || src.startsWith("data:") || src.startsWith("blob:")) return;
  if (typeof window === "undefined") return;
  if (/\.(mp4|webm|mov)(\?|#|$)/i.test(src)) return;
  const abs = absoluteUrl(src);
  if (warmed.has(abs)) return;
  if (queued.has(abs)) {
    if (priority === "high") {
      queue = queue.filter((job) => job.src !== abs);
      queue.unshift({ src: abs, priority: "high" });
      pump();
    }
    return;
  }
  queued.add(abs);
  if (priority === "high") queue.unshift({ src: abs, priority });
  else queue.push({ src: abs, priority });
  pump();
}

function imageUrl(img: HTMLImageElement): string {
  const attr = img.getAttribute("src") || "";
  if (!attr || attr.startsWith("data:") || attr.startsWith("blob:")) return "";
  return img.src || absoluteUrl(attr);
}

function band(el: Element): Priority {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 800;
  const vw = window.innerWidth || 400;
  const close =
    rect.top < vh * 1.35 &&
    rect.bottom > -vh * 0.35 &&
    rect.left < vw * 1.6 &&
    rect.right > -vw * 0.6;
  return close ? "high" : "low";
}

/**
 * Keeps the next screens of images in the HTTP cache without pulling the whole
 * page on the first paint. The image already on screen stays high priority.
 */
export function MediaPrefetch() {
  useEffect(() => {
    started = true;
    pump();

    const seen = new Set<HTMLImageElement>();

    const consider = (img: HTMLImageElement) => {
      if (seen.has(img)) return;
      seen.add(img);
      const src = imageUrl(img);
      if (!src) return;
      if (img.complete && img.naturalWidth > 0) {
        warmed.add(src);
        return;
      }
      const alreadyEager =
        img.loading === "eager" || img.getAttribute("fetchpriority") === "high";
      if (alreadyEager) {
        warmed.add(src);
        return;
      }
      io.observe(img);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const img = entry.target;
          if (!(img instanceof HTMLImageElement)) continue;
          const src = imageUrl(img);
          if (src) prefetchMedia(src, band(img));
          io.unobserve(img);
        }
      },
      { rootMargin: "2400px 1200px" },
    );

    const scan = (root: ParentNode) => {
      if (root instanceof HTMLImageElement) {
        consider(root);
        return;
      }
      root.querySelectorAll("img").forEach((img) => consider(img));
    };

    scan(document);

    const marqueeSeen = new Set<Element>();
    const marqueeIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.querySelectorAll("img").forEach((img) => {
            const src = imageUrl(img);
            if (src) prefetchMedia(src, "low");
          });
          marqueeIo.unobserve(entry.target);
        }
      },
      { rootMargin: "1200px 400px" },
    );
    const watchMarquees = (root: ParentNode) => {
      const nodes =
        root instanceof Element && root.matches("[class*='marquee']")
          ? [root]
          : [];
      if (root instanceof Element || root instanceof Document) {
        root.querySelectorAll("[class*='marquee']").forEach((node) => nodes.push(node));
      }
      nodes.forEach((node) => {
        if (marqueeSeen.has(node)) return;
        marqueeSeen.add(node);
        marqueeIo.observe(node);
      });
    };
    watchMarquees(document);

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            scan(node);
            watchMarquees(node);
          }
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const boostHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return;
      const target = document.getElementById(id);
      target?.querySelectorAll("img").forEach((img) => {
        const src = imageUrl(img);
        if (src) prefetchMedia(src, "high");
      });
    };
    boostHash();
    window.addEventListener("hashchange", boostHash);

    return () => {
      io.disconnect();
      marqueeIo.disconnect();
      mo.disconnect();
      window.removeEventListener("hashchange", boostHash);
      seen.clear();
    };
  }, []);

  return null;
}
