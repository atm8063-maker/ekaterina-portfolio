"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { CaseNavigation } from "@/components/cases/case-navigation";

export function NickPotapovCase() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(3800);

  const syncHeight = () => {
    try {
      const doc = iframeRef.current?.contentWindow?.document;
      if (doc) {
        const board = doc.querySelector('.behance-board') as HTMLElement | null;
        if (board) {
          const rect = board.getBoundingClientRect();
          const h = Math.ceil(rect.height + 70);
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
      // ignore
    }
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "RESIZE_BEHANCE_CASE" && typeof e.data.height === "number") {
        if (e.data.height > 500) {
          setIframeHeight(e.data.height);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    window.addEventListener("resize", syncHeight);
    const interval = setInterval(syncHeight, 600);
    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", syncHeight);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white relative font-inter">
      {/* Background paper texture matching Ekaterina's site */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/paper-clean-dark.png"
          alt="Paper texture"
          fill
          className="object-cover opacity-70 mix-blend-screen"
          priority
        />
      </div>

      {/* Top & bottom gradient fades */}
      <div className="fixed top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[1] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111111] to-transparent z-[1] pointer-events-none" />

      <div className="relative z-10">
        {/* Ekaterina's Header */}
        <Header />

        {/* NOT full screen - framed container with Catherine's site layout */}
        <main className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-24 max-w-[1440px]">
          
          {/* Top Navigation */}
          <CaseNavigation currentSlug="05-nick-potapov-site" position="top" className="mb-8" />

          {/* Framed case study: completely verbatim from prepared source */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#050505] transition-all duration-300">
            <iframe
              ref={iframeRef}
              src="/case/index.html"
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
              title="Кейс Ника Потапова — Архитектура без рутины"
            />
          </div>

          {/* Bottom Navigation */}
          <CaseNavigation currentSlug="05-nick-potapov-site" position="bottom" />

        </main>
      </div>
    </div>
  );
}
