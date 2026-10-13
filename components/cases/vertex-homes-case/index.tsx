"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import { CaseNavigation } from "@/components/cases/case-navigation";
import { VertexIframeSection } from "./vertex-hero";
import { VertexMockupsSection, type SelectedVertexImage } from "./vertex-content";
import { VertexImageLightbox } from "./vertex-lightbox";
import { PageTitle } from "@/components/language-provider";

export function VertexHomesCase() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(4500);
  const [selectedImage, setSelectedImage] = useState<SelectedVertexImage | null>(null);

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
    <div className="min-h-screen bg-[#1b2629] text-[#F4F4F4] relative selection:bg-[#796D41] selection:text-white font-rubik">
      <PageTitle titleRu="Кейс: Vertex Homes — Екатерина Разумова" titleEn="Case Study: Vertex Homes — Ekaterina Razumova" />
      {/* Deep smooth background matching Vertex Homes palette */}
      <div className="relative z-10">
        {/* Header */}
        <Header />

        {/* Framed case study presentation */}
        <main className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-24 max-w-[1440px] space-y-16">

          {/* Top Navigation */}
          <CaseNavigation currentSlug="14-vertex-homes" position="top" className="mb-8" />

          {/* Framed case study: completely seamless */}
          <VertexIframeSection
            iframeRef={iframeRef}
            iframeHeight={iframeHeight}
            syncHeight={syncHeight}
          />

          {/* New Interactive Device Mockups Showcase */}
          <VertexMockupsSection onSelectImage={setSelectedImage} />

          {/* Bottom Full Navigation */}
          <CaseNavigation currentSlug="14-vertex-homes" position="bottom" />

        </main>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <VertexImageLightbox
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
