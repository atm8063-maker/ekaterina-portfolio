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

      {/* Top Shadow Darkening from Top Menu Bar onto Paper Background ONLY (z-[1]) - Exactly like Career section */}
      <div className="fixed top-0 left-0 w-full h-[380px] lg:h-[600px] bg-gradient-to-b from-[#111111] from-[5%] via-[#111111]/70 via-[35%] to-transparent z-[1] pointer-events-none" />

      {/* Main content wrapper: Lifted by half navbar height (pt-10 = 40px instead of 80px) so everything fits on screen */}
      <div className="relative z-10 pt-10">

        {/* 2. NEW HERO SECTION (#1) - 1:1 'Мой подход' block from Career section, but with points & numbers instead of text */}
        <section className="pt-0 pb-12 lg:pb-0 relative overflow-hidden text-white border-b border-white/10">
          <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-0 min-h-[580px] lg:min-h-[740px] relative">
            <div className="flex flex-row items-start justify-between w-full relative">
              
              {/* Left Column: On mobile takes left 58% of screen so all points fit on first screen; Desktop 100% LOCKED (375px at pt-[138px]) */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-[58%] sm:w-[50%] lg:w-[375px] flex flex-col justify-start order-1 relative z-20 pt-4 sm:pt-6 lg:pt-[138px] pb-8 lg:pb-24"
              >
                <div className="flex flex-col space-y-4 sm:space-y-5 lg:space-y-7 text-[#A3A3A3] text-sm sm:text-base md:text-lg font-medium leading-[1.4] lg:leading-[1.6] font-inter">
                  {/* 1. 20+ ЛЕТ */}
                  <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">20+ ЛЕТ</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">Работы с креативом</p>
                  </div>
                  {/* 2. 7+ ЛЕТ */}
                  <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">7+ ЛЕТ</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">В сфере Resin Art</p>
                  </div>
                  {/* 3. АМБАССАДОР */}
                  <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">АМБАССАДОР</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">ведущего бренда в России</p>
                  </div>
                  {/* 4. БОЛЕЕ 10 РАЗ */}
                  <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 10 РАЗ</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">в финале арт-гонки</p>
                  </div>
                  {/* 5. БОЛЕЕ 10000 */}
                  <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 10000</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">
                      Зрителей на прямых эфирах <br className="hidden sm:inline" />и мастер-классах
                    </p>
                  </div>
                  {/* 6. БОЛЕЕ 1000+ */}
                  <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 1000+</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">учеников</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Composition: On mobile positioned in upper-right corner (absolute right-0 top-0); Desktop 100% LOCKED (-top-[493px]) */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[45%] lg:w-auto order-2 absolute right-0 top-0 lg:static z-10 flex justify-end lg:justify-center -mr-6 sm:-mr-12 lg:mr-0 -mt-4 lg:mt-0 overflow-hidden lg:overflow-visible pointer-events-none"
              >
                <img 
                  src="/art-composition.png" 
                  alt="Искусство"
                  className="relative lg:absolute lg:left-[343px] lg:-top-[493px] w-[210%] sm:w-[180%] lg:w-[1273px] max-w-none lg:max-w-none translate-x-[15%] lg:translate-x-0 h-auto lg:h-[1970px] pointer-events-none block"
                />
              </motion.div>

            </div>
          </div>
        </section>

      {/* 2. NEW EDITORIAL VIDEO SECTION (#2) - Asymmetric Magazine Spread (Text Left, 9:16 Video Right) */}
      <section className="py-16 lg:py-28 relative overflow-hidden text-white border-b border-white/10">
        <div className="w-full px-6 sm:px-12 lg:px-[8%] xl:px-[12%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Title, Philosophy & Detail */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs font-mono font-bold uppercase tracking-widest w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-[#14F1D9] animate-pulse"></span>
                [ 02 / ЖИВАЯ ИНСТАЛЛЯЦИЯ ]
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-montserrat mb-6 leading-[1.1]">
                ЖИВАЯ <br className="hidden sm:inline" />
                <span className="text-[#14F1D9]">ГЛУБИНА СМОЛЫ</span>
              </h2>
              
              <p className="text-[#A3A3A3] text-lg sm:text-xl font-medium leading-[1.7] font-inter mb-8 max-w-[560px]">
                Настоящая магия Resin Art раскрывается именно в движении: многослойная заливка играет на свету, создавая оптическую глубину, зеркальный глянец и неповторимые цветовые переливы, которые невозможно передать статичной фотографией.
              </p>

              {/* Aesthetic quote / detail card */}
              <div className="p-6 bg-white/[0.03] border border-white/10 relative overflow-hidden backdrop-blur-sm max-w-[520px]">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#14F1D9]"></div>
                <p className="italic text-white/90 text-sm sm:text-base leading-relaxed font-inter">
                  «Каждая заливка — это живая экосистема, где пигменты, смола и время создают рисунок, который невозможно повторить дважды».
                </p>
                <p className="text-xs uppercase tracking-widest text-[#14F1D9] font-bold font-montserrat mt-3">
                  — Екатерина Разумова
                </p>
              </div>
            </motion.div>

            {/* Right Column: 9:16 Vertical Video in Museum Halo Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
                {/* Ambient Colored Halo around the vertical video */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#14F1D9]/25 via-[#074F98]/20 to-transparent rounded-[32px] blur-2xl z-0 pointer-events-none"></div>

                {/* Video container */}
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-[#111111]">
                  <video 
                    src="/art-video-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto aspect-[9/16] object-cover block"
                  />

                  {/* Subtle live indicator badge inside video top-right */}
                  <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/15 rounded-full flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-white uppercase shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    RESIN IN MOTION
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. SECOND SECTION (#2) - Portrait + ART title moved BELOW Hero, with colored gradient removed (clean dark paper background) */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden border-b border-white/10">
        {/* Top/Main Hero Area: Holds Photo + ART title */}
        <div className="relative w-full h-[calc(100vh-5rem)] sm:h-[calc(100vh-5rem)] lg:h-full lg:flex-1">
          {/* Left: Portrait Cutout from Figma (Mask group.png) */}
          <div className="absolute top-0 bottom-0 left-0 w-[58%] sm:w-[50%] lg:w-[42%] xl:w-[38%] h-full z-20 pointer-events-none">
            <Image 
              src="/mask-group.png" 
              alt="Екатерина Разумова" 
              fill
              className="object-contain object-left-bottom drop-shadow-[15px_0_35px_rgba(0,0,0,0.25)]"
              priority
            />
          </div>

          {/* Right/Center: ART title. Vertically stacked (A-R-T) and huge on mobile; horizontal and locked on desktop */}
          <div className="absolute inset-0 left-0 lg:left-[21%] z-10 flex items-center justify-center select-none px-4 pointer-events-none">
            <h1 
              className="flex flex-col lg:flex-row items-center justify-center text-[38vw] sm:text-[34vw] lg:text-[37vw] xl:text-[34vw] font-black uppercase tracking-tight leading-[0.84] lg:leading-none font-montserrat select-none text-center lg:[transform:translate(-50px,calc(-8%-71px))]"
              style={{
                backgroundImage: "url('/paper-clean-dark.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(6px 6px 0px #074F98)"
              }}
            >
              <span>A</span>
              <span>R</span>
              <span>T</span>
            </h1>
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
