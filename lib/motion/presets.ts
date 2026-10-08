import type { Transition, Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const viewportOnce = { once: true, margin: "-80px" as const };

export const easeOutMedium: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};
