import type { RefObject } from "react";
import { useLanguage } from "@/components/language-provider";

type VertexIframeSectionProps = {
  iframeRef: RefObject<HTMLIFrameElement | null>;
  iframeHeight: number;
  syncHeight: () => void;
};

export function VertexIframeSection({
  iframeRef,
  iframeHeight,
  syncHeight,
}: VertexIframeSectionProps) {
  const { lang } = useLanguage();
  const isEn = lang === "EN";
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#796D41]/30 shadow-2xl bg-[#222F33] transition-all duration-300">
      <iframe
        ref={iframeRef}
        src={isEn ? "/case-vertex/index-en.html" : "/case-vertex/index.html"}
        onLoad={() => {
          syncHeight();
          setTimeout(syncHeight, 300);
          setTimeout(syncHeight, 1000);
          setTimeout(syncHeight, 2500);
        }}
        style={{
          width: "100%",
          height: `${iframeHeight}px`,
          border: "none",
          display: "block",
          overflow: "hidden",
        }}
        scrolling="no"
        title={isEn ? "Vertex Homes — Smart Construction for Smart Investments" : "Vertex Homes — Умное строительство для умных инвестиций"}
      />
    </div>
  );
}
