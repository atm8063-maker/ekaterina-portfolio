"use client";

import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const techniques = ["Эпоксидная смола", "Акрил", "Алкогольные чернила", "Текстурная паста", "Смешанные техники"];
const items = ["Предметы декора", "Картины", "Украшения", "Ёлочные игрушки"];

// Helper for image cards with B&W cyan tinted hover effect
function ArtCard({ src, alt, title, className = "" }: { src: string; alt: string; title?: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group cursor-pointer bg-surface border border-white/10 ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover transition-all duration-700 filter grayscale sepia-[.2] hue-rotate-[160deg] opacity-70 group-hover:filter-none group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity" />
      {title && (
        <div className="absolute bottom-4 left-4 right-4 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <p className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] drop-shadow-md">{title}</p>
        </div>
      )}
    </div>
  );
}

export default function ArtPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-foreground overflow-hidden font-inter selection:bg-[#14F1D9] selection:text-black">
      
      {/* 1. Global Navigation */}
      <Header />

      {/* Clean Dark Crumpled Paper Background - Exactly like My Approach block */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Crumpled paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
          priority
        />
      </div>

      {/* 2. HERO SECTION - Exactly matching user's custom Figma gradient and layout */}
      <div className="relative z-10 pt-24">
        
        <section 
          className="relative w-full min-h-[85vh] flex flex-col justify-between overflow-hidden border-b border-white/10"
          style={{
            background: 'linear-gradient(90deg, #AFABCC 7%, #14F1D9 100%)'
          }}
        >
          
          {/* Left: Portrait Cutout from Figma (Mask group.png) full height of entire Hero section touching bottom edge of screen and top header without cropping */}
          <div className="absolute top-0 bottom-0 left-0 w-[55%] sm:w-[48%] lg:w-[42%] xl:w-[38%] h-full z-20 pointer-events-none">
            <Image 
              src="/mask-group.png" 
              alt="Екатерина Разумова" 
              fill
              className="object-contain object-left-bottom drop-shadow-[15px_0_35px_rgba(0,0,0,0.25)]"
              priority
            />
          </div>

          {/* Main Hero Content Area - Centered ART title */}
          <div className="relative z-10 flex-1 w-full flex items-center justify-center min-h-[65vh] lg:min-h-[72vh] px-6 select-none">
            <div className="relative flex items-center justify-center">
              
              {/* Bottom Layer: Extruded Shadow in #074F98 offset literally 3px right and 3px down */}
              <h1 
                className="absolute text-[31vw] lg:text-[25vw] font-black uppercase tracking-tighter leading-none font-montserrat text-[#074F98] select-none pointer-events-none"
                style={{ transform: 'translate(3px, 3px)' }}
              >
                ART
              </h1>

              {/* Top Layer: Textured with crumpled paper from My Approach block */}
              <h1 
                className="relative text-[31vw] lg:text-[25vw] font-black uppercase tracking-tighter leading-none font-montserrat select-none"
                style={{
                  backgroundImage: "url('/paper-clean-dark.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                ART
              </h1>

            </div>
          </div>

          {/* Points Bar: From right edge of the photo to the right screen edge */}
          <div className="relative z-30 w-full flex justify-end">
            <div className="w-full lg:w-[63%] xl:w-[66%] ml-auto bg-[#111111]/90 backdrop-blur-md border-t border-l border-white/15 py-6 lg:py-8 px-6 lg:px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                <div className="pt-3 md:pt-0 md:px-4 lg:px-6 first:pt-0 first:px-0">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#14F1D9] font-montserrat mb-1">7+ ЛЕТ</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80 font-bold font-montserrat">В сфере Resin Art</p>
                </div>

                <div className="pt-3 md:pt-0 md:px-4 lg:px-6">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-montserrat mb-1">10+ РАЗ</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80 font-bold font-montserrat">В финале мировой Арт-гонки</p>
                </div>

                <div className="pt-3 md:pt-0 md:px-4 lg:px-6">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#14F1D9] font-montserrat mb-1">#1 БРЕНД</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80 font-bold font-montserrat">Амбассадор в России</p>
                </div>

                <div className="pt-3 md:pt-0 md:px-4 lg:px-6">
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-montserrat mb-1">1000+</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80 font-bold font-montserrat">Зрителей на прямых эфирах</p>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* 4. SUBSECTION 1: КОНКУРСЫ & ЖЮРИ + ASYMMETRIC GALLERY */}
        <section className="container mx-auto px-6 mb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Story */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#14F1D9] font-montserrat">01 / Признание</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
                Победы, финалы и судейство
              </h2>
              <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                <p>
                  Неоднократно выигрывала российские и мировые конкурсы по смоле. Мои работы получают высокие оценки за сложную технику и глубину композиции.
                </p>
                <p>
                  <strong className="text-white">Более 10 раз</strong> изделия выходили в финал легендарной «Арт-гонки». Впоследствии была приглашена в качестве <strong className="text-[#14F1D9]">члена Жюри Арт-гонки</strong> — одного из главных конкурсов среди художников-смолянистов.
                </p>
              </div>
            </div>

            {/* Right Column: Asymmetrical Gallery Cluster (3 photos) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[420px] sm:h-[500px]">
              <ArtCard src="/placeholder.jpg" alt="Contest Art 1" title="Арт-гонка • Финал" className="col-span-1 row-span-2" />
              <ArtCard src="/placeholder.jpg" alt="Contest Art 2" title="Конкурсная работа" className="col-span-1 h-[240px]" />
              <ArtCard src="/placeholder.jpg" alt="Contest Art 3" title="Резин-арт" className="col-span-1 h-[240px]" />
            </div>

          </div>
        </section>

        {/* 5. SUBSECTION 2: АМБАССАДОРСТВО & КОЛЛАБОРАЦИИ + GALLERY */}
        <section className="container mx-auto px-6 mb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Asymmetrical Gallery Cluster (2 photos) */}
            <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4 h-[380px] sm:h-[460px]">
              <ArtCard src="/placeholder.jpg" alt="Ambassador 1" title="Брендированная продукция" className="col-span-1 h-full" />
              <ArtCard src="/placeholder.jpg" alt="Ambassador 2" title="Набор для ёлочных игрушек" className="col-span-1 h-full" />
            </div>

            {/* Right Column: Story */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#14F1D9] font-montserrat">02 / Коллаборации</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
                Амбассадор бренда & Продукция
              </h2>
              <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                <p>
                  Была официальным <strong className="text-white">амбассадором</strong> крупнейшего производителя смолы и художественных материалов в России.
                </p>
                <p>
                  В рамках партнерства мы выпустили совместную брендированную продукцию: <strong className="text-[#14F1D9]">эксклюзивную коробку для создания ёлочных игрушек</strong> из смолы, которая разошлась по всей стране.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 6. SUBSECTION 3: ОБУЧЕНИЕ, АРТМУЗА & ЭФИРЫ + GALLERY */}
        <section className="container mx-auto px-6 mb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Story */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#14F1D9] font-montserrat">03 / Обучение & Сцена</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
                Музей АртМуза & Мастер-классы
              </h2>
              <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                <p>
                  Выступала с лекцией и проводила авторский мастер-класс на 1-м форуме смолянистов в музее современного искусства <strong className="text-white">АртМуза</strong>.
                </p>
                <p>
                  Проводила прямые эфиры по тонкостям работы со смолой с охватом в <strong className="text-[#14F1D9]">несколько тысяч человек</strong>, а также организовывала оффлайн творческие мастер-классы в Турции и Черногории.
                </p>
              </div>
            </div>

            {/* Right Column: Gallery Cluster (3 photos) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[420px] sm:h-[500px]">
              <ArtCard src="/placeholder.jpg" alt="Workshop 1" title="Мастер-класс • АртМуза" className="col-span-1 h-[240px]" />
              <ArtCard src="/placeholder.jpg" alt="Workshop 2" title="Черногория & Турция" className="col-span-1 row-span-2" />
              <ArtCard src="/placeholder.jpg" alt="Workshop 3" title="Прямой эфир" className="col-span-1 h-[240px]" />
            </div>

          </div>
        </section>

        {/* 7. TECHNIQUES & ITEMS - Magazine Catalog Style */}
        <section className="border-t border-white/10 bg-[#111111]/80 py-20">
          <div className="container mx-auto px-6">
            
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#14F1D9] font-montserrat">04 / Арсенал</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat mt-2">
                Техники & Предметы
              </h2>
              <p className="text-white/60 mt-2">
                Работаю в разных техниках и с разными темами — от изящных украшений до полноформатной мебели и картин.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Techniques Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-white/10">
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat mb-6">Техники исполнения</h3>
                <div className="flex flex-wrap gap-3">
                  {techniques.map(t => (
                    <span key={t} className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Items Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-white/10">
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat mb-6">Создаваемые объекты</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map(i => (
                    <span key={i} className="px-5 py-2.5 rounded-full bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-sm uppercase tracking-wider font-semibold">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 8. INSTAGRAM FOOTER BANNER */}
        <section className="py-24 container mx-auto px-6 text-center border-t border-white/10">
          <p className="text-white/50 uppercase tracking-widest text-xs font-bold font-montserrat mb-3">Следи за новыми работами</p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-white font-montserrat mb-8">
            INSTAGRAM: <span className="text-[#14F1D9]">@FIR_TREE_ART</span>
          </h2>
          <a 
            href="https://instagram.com/fir_tree_art" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-10 py-5 bg-[#14F1D9] text-[#111111] font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(20,241,217,0.3)] hover:scale-105"
          >
            Перейти в Instagram ↗
          </a>
        </section>

      </div>
    </main>
  );
}
