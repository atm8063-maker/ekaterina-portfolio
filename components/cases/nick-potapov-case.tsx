"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import { CaseNavigation } from "@/components/cases/case-navigation";
import { CasePaperBackground } from "@/components/cases/shared/case-paper-background";
import { useLanguage, PageTitle } from "@/components/language-provider";

export function NickPotapovCase() {
  const { isEn } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(3800);

  // Navigating here via a case's prev/next link doesn't always land at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    let rafId = 0;
    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(syncHeight);
    };
    window.addEventListener("message", handleMessage);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white relative font-inter">
      <PageTitle titleRu="Кейс: Сайт Nick Potapov — Екатерина Разумова" titleEn="Case Study: Nick Potapov Website — Ekaterina Razumova" />
      {/* Background paper texture matching Ekaterina's site */}
      <CasePaperBackground priority />

      {/* Top & bottom gradient fades */}
      <div className="fixed top-0 left-0 w-full h-[400px] bg-gradient-to-b from-background via-background/60 to-transparent z-[1] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-[1] pointer-events-none" />

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
              src={isEn ? "/case/index-en.html" : "/case/index.html"}
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
              title={isEn ? "Nick Potapov Case Study — Architecture Without Routine" : "Кейс Ника Потапова — Архитектура без рутины"}
            />
          </div>

          {/* Bottom Navigation */}
          <CaseNavigation currentSlug="05-nick-potapov-site" position="bottom" />

        </main>
      </div>
    </div>
  );
}
