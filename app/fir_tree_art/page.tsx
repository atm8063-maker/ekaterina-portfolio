"use client";

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
      <ArtHero />

      <div className="relative z-10">
        
        {/* 2. ИСКУССТВО В ПРОСТРАНСТВЕ */}
        <ArtSpace />

        {/* 3. КОЛЛАЖ ИЗ РАБОТ ИЗ СМОЛЫ */}
        <ArtCollage />

        {/* 4. ВСТАВКА «ИЗ ГАЛЕРЕИ» (5-VIDEO PANELS) */}
        <div className="relative w-full overflow-hidden border-b border-white/10">
          <ArtGalleryTest />
        </div>

        {/* 5. CONTEMPORARY ART */}
        <ArtContemporary />

        {/* БЛОК АРТИВИЗМ И ЧЕСТНОСТЬ (Скролл) */}
        <ArtProtest />

        {/* 6. ДИАПАЗОН СМОЛЫ (Бывш. Искусство без границ) */}
        <ArtNoBorders />

        {/* 7. ТЕХНИКИ И ИНСТРУМЕНТЫ */}
        <ArtTechniques />

        {/* 8. СКЕТЧИ И ПОРТРЕТЫ */}
        <ArtSketches />

        {/* 9. БЛОК С ЦИФРАМИ */}
        <ArtNumbers />

        {/* 10. ПОБЕДЫ, ФИНАЛЫ И СУДЕЙСТВО */}
        <ArtAwards />

        {/* 11. АМБАССАДОР БРЕНДА И ПРОДУКЦИЯ */}
        <ArtBrand />

        {/* 12. АРТ-МУЗА, МК, ОБУЧЕНИЕ */}
        <ArtTeaching />

        {/* 13. ПУБЛИКАЦИИ В СМИ */}
        <StubSection 
          id="media-publications"
          title="Публикации в СМИ" 
          desc="Здесь покажем статьи, интервью и публикации о твоих работах и карьере в медиа."
        />

        {/* 14. ОТЗЫВЫ */}
        <StubSection 
          id="testimonials"
          title="Отзывы" 
          desc="Снимаем последние сомнения перед Контактами. Реальные отзывы от покупателей работ и учеников (можно в виде карусели или карточек)."
        />

        {/* 15. КОНТАКТЫ / INSTAGRAM */}
        <ArtContacts />

      </div>
    </main>
  );
}
