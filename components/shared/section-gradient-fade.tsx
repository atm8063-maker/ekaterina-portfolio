import { cn } from "@/lib/utils";

type SectionGradientFadeProps = {
  position: "top" | "bottom";
  className?: string;
};

const topDefault =
  "fixed top-0 left-0 w-full h-[380px] lg:h-[600px] bg-gradient-to-b from-background from-[5%] via-background/70 via-[35%] to-transparent z-[1] pointer-events-none";

const bottomDefault =
  "fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-[1] pointer-events-none";

export function SectionGradientFade({ position, className }: SectionGradientFadeProps) {
  return (
    <div
      className={cn(position === "top" ? topDefault : bottomDefault, className)}
      aria-hidden
    />
  );
}
