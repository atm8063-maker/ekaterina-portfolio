"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { SectionSkeleton } from "@/components/shared/section-skeleton";

function lazySection(
  importFn: () => Promise<Record<string, ComponentType<object>>>,
  exportName: string,
  minHeight = "min-h-[50vh]"
) {
  return dynamic(
    () => importFn().then((mod) => ({ default: mod[exportName] })),
    { loading: () => <SectionSkeleton minHeight={minHeight} /> }
  );
}

export const ArtSpace = lazySection(
  () => import("@/components/sections/art-space"),
  "ArtSpace",
  "min-h-[60vh]"
);
export const ArtCollage = lazySection(
  () => import("@/components/sections/art-collage"),
  "ArtCollage",
  "min-h-[calc(100vh-80px)]"
);
export const ArtGalleryTest = lazySection(
  () => import("@/components/sections/art-gallery-test"),
  "ArtGalleryTest",
  "min-h-[calc(100vh-80px)]"
);
export const ArtContemporary = lazySection(
  () => import("@/components/sections/art-contemporary"),
  "ArtContemporary",
  "min-h-[calc(100vh-80px)]"
);
export const ArtProtest = lazySection(
  () => import("@/components/sections/art-protest"),
  "ArtProtest",
  "min-h-[calc(100vh-80px)]"
);
export const ArtNoBorders = lazySection(
  () => import("@/components/sections/art-no-borders"),
  "ArtNoBorders",
  "min-h-[50vh]"
);
export const ArtTechniques = lazySection(
  () => import("@/components/sections/art-techniques"),
  "ArtTechniques",
  "min-h-[50vh]"
);
export const ArtSketches = lazySection(
  () => import("@/components/sections/art-sketches"),
  "ArtSketches",
  "min-h-[50vh]"
);
export const ArtNumbers = lazySection(
  () => import("@/components/sections/art-numbers"),
  "ArtNumbers",
  "min-h-[40vh]"
);
export const ArtAwards = lazySection(
  () => import("@/components/sections/art-awards"),
  "ArtAwards",
  "min-h-[50vh]"
);
export const ArtBrand = lazySection(
  () => import("@/components/sections/art-brand"),
  "ArtBrand",
  "min-h-[50vh]"
);
export const ArtTeaching = lazySection(
  () => import("@/components/sections/art-teaching"),
  "ArtTeaching",
  "min-h-[50vh]"
);
export const ArtMedia = lazySection(
  () => import("@/components/sections/art-media"),
  "ArtMedia",
  "min-h-[40vh]"
);
export const ArtTestimonials = lazySection(
  () => import("@/components/sections/art-testimonials"),
  "ArtTestimonials",
  "min-h-[50vh]"
);
export const ArtContacts = lazySection(
  () => import("@/components/sections/art-contacts"),
  "ArtContacts",
  "min-h-[40vh]"
);
