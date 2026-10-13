"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type MotionRevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in";

type MotionRevealProps = {
  children: ReactNode;
  variant?: MotionRevealVariant;
  /** Run on mount (hero) instead of intersection */
  onLoad?: boolean;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  /** IntersectionObserver rootMargin (default matches former Framer viewport margin) */
  rootMargin?: string;
};

const variantClass: Record<MotionRevealVariant, string> = {
  "fade-up": "motion-reveal--fade-up",
  "fade-down": "motion-reveal--fade-down",
  "fade-left": "motion-reveal--fade-left",
  "fade-right": "motion-reveal--fade-right",
  "scale-in": "motion-reveal--scale-in",
};

export function MotionReveal({
  children,
  variant = "fade-up",
  onLoad = false,
  delay,
  duration,
  className,
  as: Tag = "div",
  style,
  rootMargin = "-80px 0px",
}: MotionRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (onLoad) return;

    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onLoad, rootMargin]);

  const cssVars = {
    ...(delay !== undefined ? { "--motion-reveal-delay": `${delay}s` } : {}),
    ...(duration !== undefined ? { "--motion-reveal-duration": `${duration}s` } : {}),
    ...style,
  } as CSSProperties;

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={cn(
        "motion-reveal",
        variantClass[variant],
        onLoad && "motion-reveal--on-load is-visible",
        className
      )}
      style={cssVars}
    >
      {children}
    </Tag>
  );
}
