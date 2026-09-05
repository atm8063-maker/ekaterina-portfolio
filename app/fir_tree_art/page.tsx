"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Image from "next/image";
import { ArtGalleryTest } from "@/components/sections/art-gallery-test";
import { ArtHero } from "@/components/sections/art-hero";
import { ArtSpace } from "@/components/sections/art-space";
import { ArtCollage } from "@/components/sections/art-collage";
import { ArtContemporary } from "@/components/sections/art-contemporary";
import { ArtProtest } from "@/components/sections/art-protest";
import { ArtNoBorders } from "@/components/sections/art-no-borders";
import { ArtTechniques } from "@/components/sections/art-techniques";
import { ArtNumbers } from "@/components/sections/art-numbers";
import { ArtAwards } from "@/components/sections/art-awards";
import { ArtBrand } from "@/components/sections/art-brand";
import { ArtTeaching } from "@/components/sections/art-teaching";
import { ArtContacts } from "@/components/sections/art-contacts";
import { ArtSketches } from "@/components/sections/art-sketches";
import { StubSection } from "@/components/ui/stub-section";

export default function ArtPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = decodeURIComponent(hash.replace("#", ""));
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const t1 = setTimeout(scrollToHash, 100);
    const t2 = setTimeout(scrollToHash, 400);

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);
  return (
    <main className="min-h-screen bg-[#111111] text-foreground overflow-hidden font-inter selection:bg-[#14F1D9] selection:text-black">
      
      <Header />

      {/* Clean Dark Crumpled Paper Background - Visible only in transparent blocks */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Crumpled paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
          priority
        />
      </div>

      <div className="fixed top-0 left-0 w-full h-[380px] lg:h-[600px] bg-gradient-to-b from-[#111111] from-[5%] via-[#111111]/70 via-[35%] to-transparent z-[1] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <div id="hero" className="scroll-mt-4">
        <ArtHero />
      </div>

      <div className="relative z-10">
        
        {/* 2. ИСКУССТВО В ПРОСТРАНСТВЕ */}
        <div id="space" className="scroll-mt-4">
          <div id="manifesto" className="scroll-mt-4" />
          <div id="art-space" className="scroll-mt-4" />
          <ArtSpace />
        </div>

        {/* 3. КОЛЛАЖ ИЗ РАБОТ ИЗ СМОЛЫ */}
        <div id="collage" className="scroll-mt-4">
          <div id="resin-collage" className="scroll-mt-4" />
          <ArtCollage />
        </div>

        {/* 4. ВСТАВКА «ИЗ ГАЛЕРЕИ» (5-VIDEO PANELS) */}
        <div id="gallery" className="relative w-full overflow-hidden border-b border-white/10 scroll-mt-4">
          <div id="video-panels" className="scroll-mt-4" />
          <div id="art-gallery" className="scroll-mt-4" />
          <ArtGalleryTest />
        </div>

        {/* 5. CONTEMPORARY ART */}
        <div id="contemporary" className="scroll-mt-4">
          <div id="contemporary-art" className="scroll-mt-4" />
          <ArtContemporary />
        </div>

        {/* 6. БЛОК АРТИВИЗМ И ЧЕСТНОСТЬ (Скролл) */}
        <div id="protest" className="scroll-mt-4">
          <div id="artivism" className="scroll-mt-4" />
          <div id="art-protest" className="scroll-mt-4" />
          <ArtProtest />
        </div>

        {/* 7. ДИАПАЗОН СМОЛЫ (Широкий диапазон смолы) */}
        <div id="resin-range" className="scroll-mt-4">
          <div id="range" className="scroll-mt-4" />
          <div id="wide-range" className="scroll-mt-4" />
          <div id="no-borders" className="scroll-mt-4" />
          <ArtNoBorders />
        </div>

        {/* 8. ТЕХНИКИ И ИНСТРУМЕНТЫ */}
        <div id="techniques" className="scroll-mt-4">
          <div id="tools" className="scroll-mt-4" />
          <ArtTechniques />
        </div>

        {/* 9. СКЕТЧИ И ПОРТРЕТЫ */}
        <div id="sketches" className="scroll-mt-4">
          <div id="portraits" className="scroll-mt-4" />
          <div id="sketches-portraits" className="scroll-mt-4" />
          <ArtSketches />
        </div>

        {/* 10. БЛОК С ЦИФРАМИ */}
        <div id="numbers" className="scroll-mt-4">
          <div id="facts" className="scroll-mt-4" />
          <div id="stats" className="scroll-mt-4" />
          <ArtNumbers />
        </div>

        {/* 11. ПОБЕДЫ, ФИНАЛЫ И СУДЕЙСТВО */}
        <div id="awards" className="scroll-mt-4">
          <div id="wins" className="scroll-mt-4" />
          <ArtAwards />
        </div>

        {/* 12. АМБАССАДОР БРЕНДА И ПРОДУКЦИЯ */}
        <div id="brand" className="scroll-mt-4">
          <div id="ambassador" className="scroll-mt-4" />
          <ArtBrand />
        </div>

        {/* 13. АРТ-МУЗА, МК, ОБУЧЕНИЕ */}
        <div id="teaching" className="scroll-mt-4">
          <div id="education" className="scroll-mt-4" />
          <div id="masterclasses" className="scroll-mt-4" />
          <div id="muza" className="scroll-mt-4" />
          <div id="art-teaching" className="scroll-mt-4" />
          <ArtTeaching />
        </div>

        {/* 14. ИНТЕРВЬЮ И ПУБЛИКАЦИИ В СМИ */}
        <div id="interviews" className="scroll-mt-4">
          <div id="media" className="scroll-mt-4" />
          <div id="media-publications" className="scroll-mt-4" />
          <StubSection 
            id="interviews-section"
            title="Интервью" 
            desc="Здесь покажем статьи, интервью на ТВ и публикации о работах и карьере в медиа."
          />
        </div>

        {/* 15. ОТЗЫВЫ */}
        <div id="testimonials" className="scroll-mt-4">
          <div id="reviews" className="scroll-mt-4" />
          <StubSection 
            id="testimonials-section"
            title="Отзывы" 
            desc="Снимаем последние сомнения перед Контактами. Реальные отзывы от покупателей работ и учеников (можно в виде карусели или карточек)."
          />
        </div>

        {/* 16. КОНТАКТЫ / INSTAGRAM */}
        <div id="contacts" className="scroll-mt-4">
          <div id="contact" className="scroll-mt-4" />
          <div id="instagram" className="scroll-mt-4" />
          <ArtContacts />
        </div>

      </div>
    </main>
  );
}
