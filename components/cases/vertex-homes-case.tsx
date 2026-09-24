"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { CaseNavigation } from "@/components/cases/case-navigation";
import { Maximize2, Eye, X, ArrowLeft, ArrowRight, Sparkles, ChevronRight } from "lucide-react";

interface VertexMockup {
  title: string;
  type: string;
  src: string;
  description: string;
}

const vertexMockups: VertexMockup[] = [
  {
    title: "iPad Air: Презентация каталога инвесторам",
    type: "Tablet Lifestyle",
    src: "/Кейсы/14-vertex-homes/Free iPad Air mockup held by user against a bright silver background  (Mockuuups Studio).jpg",
    description: "Планшетный сценарий взаимодействия с каталогом вилл и доходной аналитикой на экране iPad Air в руках клиента."
  },
  {
    title: "iPhone 12 Pro: Мобильный интерфейс и бронь",
    type: "Mobile Experience",
    src: "/Кейсы/14-vertex-homes/iPhone 12 Pro.jpg",
    description: "Мобильная адаптация интерфейса инвестиционной платформы: фильтры доходности, 3D-планировки и быстрая бронь лотов."
  },
  {
    title: "Комплексный презентационный холст Vertex Homes",
    type: "Master Design Canvas",
    src: "/Кейсы/14-vertex-homes/mockup.png",
    description: "Полномасштабный визуальный макет со всеми блоками платформы: Hero, калькулятор ROI, каталог вилл и форма закрытого инвест-пула."
  }
];

export function VertexHomesCase() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(4500);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);

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
    <div className="min-h-screen bg-[#1b2629] text-[#F4F4F4] relative selection:bg-[#796D41] selection:text-white font-rubik">
      {/* Deep smooth background matching Vertex Homes palette */}
      <div className="relative z-10">
        {/* Header */}
        <Header />

        {/* Framed case study presentation */}
        <main className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-24 max-w-[1440px] space-y-16">
          
          {/* Top Navigation */}
          <CaseNavigation currentSlug="14-vertex-homes" position="top" className="mb-8" />

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

          {/* New Interactive Device Mockups Showcase */}
          <section className="space-y-8 pt-8">
            <div className="border-b border-[#796D41]/30 pb-4">
              <div className="text-xs font-montserrat font-bold text-[#B8A86C] uppercase tracking-widest mb-1 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B8A86C]" />
                <span>МОКАПЫ УСТРОЙСТВ & ПРЕЗЕНТАЦИЯ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-montserrat uppercase text-white tracking-tight">
                Интерфейс Vertex Homes на устройствах
              </h2>
              <p className="text-sm text-white/70 font-sans mt-1 max-w-3xl leading-relaxed">
                Полноразмерные рендеры и визуализация взаимодействия с платформой на смартфонах, планшетах и широкоформатных экранах.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vertexMockups.map((m, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({
                    src: m.src,
                    title: m.title,
                    subtitle: m.type
                  })}
                  className="bg-[#222F33] border border-[#796D41]/30 rounded-2xl overflow-hidden group hover:border-[#B8A86C] transition-all flex flex-col cursor-pointer shadow-lg"
                >
                  <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                    <Image
                      src={m.src}
                      alt={m.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-montserrat font-semibold text-[#B8A86C] border border-[#796D41]/40 uppercase tracking-wider">
                      {m.type}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md p-2 rounded-lg text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 text-[#B8A86C]" />
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-base font-bold font-montserrat text-white group-hover:text-[#B8A86C] transition-colors leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-xs text-white/60 font-sans leading-relaxed mt-2">
                        {m.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-montserrat">
                      <span>Mockup Render</span>
                      <span className="text-[#B8A86C] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Развернуть <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Full Navigation */}
          <CaseNavigation currentSlug="14-vertex-homes" position="bottom" />

        </main>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10 max-w-7xl mx-auto w-full">
            <div>
              <div className="text-base font-bold font-montserrat text-white uppercase tracking-tight">
                {selectedImage.title}
              </div>
              {selectedImage.subtitle && (
                <div className="text-xs text-[#B8A86C] font-sans mt-0.5">
                  {selectedImage.subtitle}
                </div>
              )}
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 w-full overflow-auto custom-scrollbar flex items-center justify-center p-2 sm:p-4">
            <div 
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
