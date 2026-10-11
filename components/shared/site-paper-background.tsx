import Image from "next/image";
import { cn } from "@/lib/utils";

type SitePaperBackgroundProps = {
  src?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function SitePaperBackground({
  src = "/paper-clean-dark.webp",
  className,
  imageClassName = "object-cover opacity-70 mix-blend-screen",
  priority = false,
}: SitePaperBackgroundProps) {
  return (
    <div className={cn("fixed inset-0 z-0 pointer-events-none", className)}>
      <Image
        src={src}
        alt=""
        fill
        className={imageClassName}
        priority={priority}
        aria-hidden
      />
    </div>
  );
}
