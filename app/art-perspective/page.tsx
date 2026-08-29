"use client";

import Header from "@/components/layout/Header";
import ArtGalleryPerspective from "@/components/sections/art-gallery-perspective";

export default function ArtPerspectivePage() {
  return (
    <main
      className="min-h-screen text-white overflow-hidden bg-black selection:bg-white selection:text-black"
    >
      {/* Global navigation */}
      <Header />

      {/* Content */}
      <div className="relative z-10 w-full h-screen">
        <ArtGalleryPerspective />
        
        {/* Navigation / title overlay */}
        <div className="absolute top-24 left-8 pointer-events-none z-30">
          <h2
            className="text-4xl xl:text-5xl font-black uppercase leading-none tracking-tight font-montserrat"
            style={{ color: "#fff", textShadow: "0 2px 20px rgba(0,0,0,1)" }}
          >
            ГАЛЕРЕЯ
            <br />
            <span style={{ color: "#aaa" }}>ПРОЕКТОВ</span>
          </h2>
        </div>
      </div>
    </main>
  );
}
