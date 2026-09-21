'use client';

import Image from "next/image";
import { useState } from "react";

type AwardPiece = {
  id: string;
  title: string;
  badge: string;
  image: string;
  category?: string;
};

const mainAwards: AwardPiece[] = [
  {
    id: "wave-kingdom",
    title: "Скульптурная 3D-волна",
    badge: "1 МЕСТО • RESINART KINGDOM",
    image: "/awards/winner-resinart-kingdom-wave.jpg",
    category: "Международный конкурс",
  },
  {
    id: "bulb-winner",
    title: "Лампа-террариум с папоротником",
    badge: "ПОБЕДИТЕЛЬ «АРТ-ГОНКИ»",
    image: "/awards/winner-art-race-bulb.jpg",
    category: "Всероссийский конкурс",
  },
  {
    id: "turquoise-diptych",
    title: "Диптих «Бирюзовая лагуна»",
    badge: "ФИНАЛИСТ «АРТ-ГОНКИ»",
    image: "/awards/turquoise-diptych.jpg",
    category: "Интерьерный диптих",
  },
];

const extraPieces: AwardPiece[] = [
  {
    id: "whale-globe",
    title: "Сфера с китом и парусником",
    badge: "ФИНАЛИСТ АРТ-ГОНКИ",
    image: "/awards/whale-wave-globe.jpg",
  },
  {
    id: "boat-sphere",
    title: "Сфера «Лодка в шторме»",
    badge: "ФИНАЛИСТ",
    image: "/awards/boat-sphere-wave.jpg",
  },
  {
    id: "ice-hand",
    title: "Скульптура «Прорыв сквозь лёд»",
    badge: "КОНКУРСНАЯ РАБОТА",
    image: "/awards/ice-hand-sculpture.jpg",
  },
  {
    id: "ocean-canvas",
    title: "Панно «Океаническая волна»",
    badge: "АРТ-РЕЛЬЕФ",
    image: "/awards/ocean-canvas-wave.jpg",
  },
  {
    id: "crystal-candy",
    title: "Кристальная конфета",
    badge: "АВТОРСКАЯ ФОРМА",
    image: "/awards/crystal-candy.jpg",
  },
  {
    id: "jewelry-set",
    title: "Ювелирный гарнитур",
    badge: "ЮВЕЛИРНАЯ СМОЛА",
    image: "/awards/jewelry-sea-set.jpg",
  },
];

export function ArtAwards() {
  const [selectedImage, setSelectedImage] = useState<AwardPiece | null>(null);

  return (
    <section id="awards" className="relative border-b border-white/10 bg-[#111111] py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Левая колонка: Текст и статистика */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
              Победы, финалы и судейство
            </h2>

            <div className="space-y-4 text-white/75 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                Неоднократно побеждала в российских и международных конкурсах по смоле. Экспертное жюри отмечает сложную многослойную 3D-технику, реалистичность морской стихии и ювелирную чистоту исполнения.
              </p>
              <p>
                <strong className="text-white font-semibold">Более 10 раз</strong> изделия выходили в финал всероссийской «Арт-гонки». Впоследствии была приглашена в качестве <strong className="text-[#14F1D9] font-semibold">члена Жюри «Арт-гонки»</strong> — главного профессионального баттла мастеров-смолянистов.
              </p>
            </div>

            {/* Метрики и плашки */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-4 transition-colors hover:border-[#14F1D9]/40">
                <div className="font-montserrat text-2xl font-black text-[#14F1D9]">1 МЕСТО</div>
                <div className="mt-1 text-xs text-white/60">Международный конкурс Resinart Kingdom</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-4 transition-colors hover:border-[#14F1D9]/40">
                <div className="font-montserrat text-2xl font-black text-[#14F1D9]">ПОБЕДИТЕЛЬ</div>
                <div className="mt-1 text-xs text-white/60">Всероссийская «Арт-гонка»</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-4 transition-colors hover:border-[#14F1D9]/40">
                <div className="font-montserrat text-2xl font-black text-white">ЖЮРИ</div>
                <div className="mt-1 text-xs text-white/60">Судейство профессиональных конкурсов</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-4 transition-colors hover:border-[#14F1D9]/40">
                <div className="font-montserrat text-2xl font-black text-white">10+ ФИНАЛОВ</div>
                <div className="mt-1 text-xs text-white/60">Регулярные выходы в финал арт-битв</div>
              </div>
            </div>
          </div>

          {/* Правая колонка: Главное трио победителей (Bento Grid) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto sm:h-[540px]">
              
              {/* Главный призер (слева, на всю высоту) */}
              <article 
                onClick={() => setSelectedImage(mainAwards[0])}
                className="group relative h-[360px] sm:h-full overflow-hidden rounded-2xl border border-white/15 bg-[#1A1A1A] cursor-pointer"
              >
                <Image
                  src={mainAwards[0].image}
                  alt={mainAwards[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
                
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-full bg-[#14F1D9] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-lg">
                    {mainAwards[0].badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-xs text-white/60 uppercase tracking-wider">{mainAwards[0].category}</p>
                  <h3 className="text-lg font-bold text-white font-montserrat leading-snug">
                    {mainAwards[0].title}
                  </h3>
                </div>
              </article>

              {/* Правая колонка: 2 карточки */}
              <div className="flex flex-col gap-4 h-[540px] sm:h-full">
                
                {/* Верхняя карточка (Победитель Арт-гонки) */}
                <article 
                  onClick={() => setSelectedImage(mainAwards[1])}
                  className="group relative flex-1 overflow-hidden rounded-2xl border border-white/15 bg-[#1A1A1A] cursor-pointer"
                >
                  <Image
                    src={mainAwards[1].image}
                    alt={mainAwards[1].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-[#14F1D9] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-black shadow">
                      {mainAwards[1].badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="text-sm sm:text-base font-bold text-white font-montserrat leading-snug">
                      {mainAwards[1].title}
                    </h3>
                  </div>
                </article>

                {/* Нижняя карточка (Диптих на сером фоне) */}
                <article 
                  onClick={() => setSelectedImage(mainAwards[2])}
                  className="group relative flex-1 overflow-hidden rounded-2xl border border-white/15 bg-[#1A1A1A] cursor-pointer"
                >
                  <Image
                    src={mainAwards[2].image}
                    alt={mainAwards[2].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-[#14F1D9] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-black shadow">
                      {mainAwards[2].badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="text-sm sm:text-base font-bold text-white font-montserrat leading-snug">
                      {mainAwards[2].title}
                    </h3>
                  </div>
                </article>

              </div>
            </div>
          </div>

        </div>

        {/* Дополнительная мини-галерея конкурсных работ */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F1D9]">
              Другие конкурсные и финальные работы
            </h4>
            <span className="text-xs text-white/40">Нажмите для просмотра</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {extraPieces.map((piece) => (
              <div
                key={piece.id}
                onClick={() => setSelectedImage(piece)}
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] cursor-pointer hover:border-[#14F1D9]/50 transition-all"
              >
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                  <p className="text-[11px] font-medium leading-tight text-white line-clamp-2">
                    {piece.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Лайтбокс при клике */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden border border-white/20">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="inline-block rounded-full bg-[#14F1D9] px-3 py-1 text-xs font-black uppercase text-black mb-1">
                {selectedImage.badge}
              </span>
              <h3 className="text-lg font-bold text-white font-montserrat">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
