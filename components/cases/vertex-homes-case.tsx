"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";

export function VertexHomesCase() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(4500);

  const syncHeight = () => {
    try {
      const doc = iframeRef.current?.contentWindow?.document;
      if (doc) {
        const wrapper = doc.querySelector('.case-wrapper') as HTMLElement | null;
        if (wrapper) {
          const rect = wrapper.getBoundingClientRect();
          const h = Math.ceil(rect.height + 90);
          if (h > 500) {
            setIframeHeight(h);
            return;
          }
        }
        const bodyHeight = doc.body?.scrollHeight || 0;
        if (bodyHeight > 500) {
          setIframeHeight(bodyHeight);
        }
      }
    } catch (e) {
      // cross-origin safety
    }
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "RESIZE_BEHANCE_CASE" && typeof e.data.height === "number") {
        if (e.data.height > 500) {
          setIframeHeight(e.data.height + 40);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    window.addEventListener("resize", syncHeight);
    const interval = setInterval(syncHeight, 500);
    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", syncHeight);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#222F33] text-[#F4F4F4] relative selection:bg-[#796D41] selection:text-white font-rubik">
      {/* Deep smooth background matching Vertex Homes palette */}
      <div className="relative z-10">
        {/* Header */}
        <Header />

        {/* Framed case study presentation */}
        <main className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-24 max-w-[1440px]">
          
          {/* Breadcrumbs matching Vertex Homes typography */}
          <nav aria-label="Breadcrumbs" className="text-xs sm:text-sm text-white/50 mb-8 flex flex-wrap items-center gap-2 font-sans">
            <Link href="/" className="transition-colors hover:text-[#B8A86C]">Главная</Link>
            <span>/</span>
            <Link href="/#cases" className="transition-colors hover:text-[#B8A86C]">Кейсы</Link>
            <span>/</span>
            <span className="text-[#B8A86C] font-medium">Vertex Homes</span>
          </nav>

          {/* Framed case study: completely seamless */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#796D41]/30 shadow-2xl bg-[#222F33] transition-all duration-300">
            <iframe
              ref={iframeRef}
              src="/case-vertex/index.html"
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
              title="Vertex Homes — Умное строительство для умных инвестиций"
            />
          </div>

        </main>
      </div>
    </div>
  );
}
