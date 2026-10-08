import { cn } from "@/lib/utils";

type SectionSkeletonProps = {
  minHeight?: string;
  className?: string;
};

export function SectionSkeleton({
  minHeight = "min-h-[50vh]",
  className,
}: SectionSkeletonProps) {
  return (
    <div
      className={cn(minHeight, "w-full bg-background/80 animate-pulse", className)}
      aria-hidden
    />
  );
}
