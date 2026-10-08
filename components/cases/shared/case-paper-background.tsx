import Image from "next/image";
import { cn } from "@/lib/utils";

type CasePaperBackgroundProps = {
  src?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function CasePaperBackground({
  src = "/paper-clean-dark.png",
  className,
  imageClassName = "object-cover opacity-70 mix-blend-screen",
  priority = false,
}: CasePaperBackgroundProps) {
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
