"use client";

import Header from "@/components/layout/Header";
import ArtGalleryConcrete from "@/components/sections/art-gallery-concrete";

export default function ArtConcretePage() {
  return (
    <main
      className="min-h-screen text-white overflow-hidden selection:bg-[#c8b89a] selection:text-black"
      style={{ background: "#1a1a1a" }}
    >
      {/* Global navigation */}
      <Header />

      {/* Full-page seamless concrete wall — fixed behind all content */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/concrete-wall.png')",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
          filter: "brightness(0.5) contrast(1.2)",
        }}
      />
      {/* Top-to-bottom gradient overlay that darkens as you scroll */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(100,100,100,0.12) 0%, rgba(18,18,18,0.0) 25%, rgba(10,10,10,0.6) 100%)",
        }}
      />
      {/* Side vignette */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Content: sits above the fixed background */}
      <div className="relative z-10 pt-20 lg:pt-24 h-screen flex flex-col">
        {/* Gallery section */}
        <div className="flex-1">
          <ArtGalleryConcrete />
        </div>

        {/* Spacer so the page has scrollable content below */}
        <div className="py-24 text-center opacity-40">
          <p className="text-sm uppercase tracking-widest font-montserrat">
            — Экспериментальная версия / Бетонный зал —
          </p>
        </div>
      </div>
    </main>
  );
}
