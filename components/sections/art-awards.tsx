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

const winners: AwardPiece[] = [
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
    image: "/awards/winner-art-race-bulb1.jpg",
    category: "Всероссийский конкурс",
  },
];

const otherWorks: AwardPiece[] = [
  {
    id: "turquoise-diptych",
    title: "Диптих «Бирюзовая лагуна»",
    badge: "ФИНАЛИСТ АРТ-ГОНКИ",
    image: "/awards/turquoise-diptych.jpg",
  },
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
    title: "«Февраль 22-го»",
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
  {
    id: "flower-coasters",
    title: "Цветочные подстаканники",
    badge: "АВТОРСКАЯ ТЕХНИКА",
    image: "/awards/flower-coasters.jpg",
  },
];

export function ArtAwards() {
  const [selectedImage, setSelectedImage] = useState<AwardPiece | null>(null);

  return (
    <section id="awards" className="relative border-b border-white/10 bg-[#111111] py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Левая колонка: Текст и статистика */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
              Победы, финалы <span className="text-[#14F1D9]">&</span> Судейство
            </h2>

            <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-inter">
              <p>
                Неоднократно побеждала в российских и международных конкурсах по смоле.
              </p>
              <p>
                <strong className="text-white font-semibold">Более 10 раз</strong> изделия выходили в финал всероссийской «Арт-гонки». Впоследствии была приглашена в качестве <strong className="text-[#14F1D9] font-semibold">члена Жюри «Арт-гонки»</strong> — главного профессионального баттла мастеров-смолянистов.
              </p>
            </div>

            {/* Метрики */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="border border-white/10 bg-[#1A1A1A] p-4 rounded-none transition-colors hover:border-[#14F1D9]/40">
                <div className="font-montserrat text-2xl font-black text-[#14F1D9]">1 МЕСТО</div>
                <div className="mt-1 text-xs text-white/60 font-inter">Международный конкурс Resinart Kingdom</div>
              </div>

              <div className="border border-white/10 bg-[#1A1A1A] p-4 rounded-none transition-colors hover:border-[#14F1D9]/40">
                <div className="font-montserrat text-2xl font-black text-[#14F1D9]">ПОБЕДИТЕЛЬ</div>
                <div className="mt-1 text-xs text-white/60 font-inter">Всероссийская «Арт-гонка»</div>
              </div>

              <div className="border border-white/10 bg-[#1A1A1A] p-4 rounded-none transition-colors hover:border-[#14F1D9]/40">
                <div className="font-montserrat text-2xl font-black text-white">ЖЮРИ</div>
                <div className="mt-1 text-xs text-white/60 font-inter">Судейство профессиональных конкурсов</div>
              </div>

              <div className="border border-white/10 bg-[#1A1A1A] p-4 rounded-none transition-colors hover:border-[#14F1D9]/40">
                <div className="font-montserrat text-2xl font-black text-white">10+ ФИНАЛОВ</div>
                <div className="mt-1 text-xs text-white/60 font-inter">Регулярные выходы в финал арт-битв</div>
              </div>
            </div>
          </div>

          {/* Правая колонка: 2 крупные вертикальные карточки главных победителей */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto sm:h-[540px]">
              {winners.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-[380px] sm:h-full overflow-hidden rounded-none border border-white/15 bg-[#1A1A1A] cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 35vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-none bg-[#14F1D9] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-lg">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    {item.category && (
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-1 font-inter">{item.category}</p>
                    )}
                    <h3 className="text-lg font-bold text-white font-montserrat leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

        {/* Нижний ряд: Остальные работы */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F1D9]">
              Другие финальные работы
            </h4>
            <span className="text-xs text-white/40 font-inter">Нажмите для увеличения</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {otherWorks.map((piece) => (
              <div
                key={piece.id}
                onClick={() => setSelectedImage(piece)}
                className="group relative aspect-square overflow-hidden rounded-none border border-white/10 bg-[#1A1A1A] cursor-pointer hover:border-[#14F1D9]/60 hover:shadow-lg transition-all"
              >
                <Image
                  src={piece.image}
                  alt={piece.title || "Конкурсная работа"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-none overflow-hidden border border-white/20">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title || "Конкурсная работа"}
                fill
                className="object-contain"
              />
            </div>
            {selectedImage.badge && (
              <div className="mt-4 text-center">
                <span className="inline-block rounded-none bg-[#14F1D9] px-3 py-1 text-xs font-black uppercase text-black mb-1">
                  {selectedImage.badge}
                </span>
                {selectedImage.title && (
                  <h3 className="text-lg font-bold text-white font-montserrat">{selectedImage.title}</h3>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
