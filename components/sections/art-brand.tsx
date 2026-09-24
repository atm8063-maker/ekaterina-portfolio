'use client';

import Image from "next/image";
import { useState } from "react";

type BrandItem = {
  id: string;
  title: string;
  badge: string;
  desc: string;
  image: string;
};

const brandItems: BrandItem[] = [
  {
    id: "sawdust-box",
    title: "Защитный короб для опила изделий",
    badge: "ПРОМЫШЛЕННЫЙ ДИЗАЙН",
    desc: "Эргономичный прозрачный бокс для безопасной и чистой шлифовки. Спроектировала конструкцию с нуля, запущена в серийное производство.",
    image: "/brand/sawdust-chamber.jpg",
  },
  {
    id: "toys-box",
    title: "Набор для создания ёлочных игрушек",
    badge: "КОЛЛАБОРАЦИЯ",
    desc: "Эксклюзивный подарочный праздничный бокс с авторскими силиконовыми молдами, смолой, красителями и пошаговым обучением.",
    image: "/brand/toy-box-holiday.webp",
  },
  {
    id: "toy-flatlay",
    title: "Полный состав и наполнение бокса",
    badge: "КОМПЛЕКТАЦИЯ",
    desc: "Комплект авторских силиконовых молдов, эпоксидная смола, весы, горелка, перламутры и красители.",
    image: "/brand/toy-box-flatlay.webp",
  },
  {
    id: "toy-collection",
    title: "Готовые авторские ёлочные игрушки",
    badge: "РЕЗУЛЬТАТ",
    desc: "Коллекция праздничных украшений из смолы, созданных по обучающей программе набора.",
    image: "/brand/toy-finished-collection.webp",
  },
];

export function ArtBrand() {
  const [selectedImage, setSelectedImage] = useState<BrandItem | null>(null);

  return (
    <section id="brand" className="relative bg-[#111111] py-24 scroll-mt-20 overflow-hidden">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top & bottom gradient blend fades */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Левая колонка: Описание и факты */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
              Амбассадор бренда <span className="text-[#14F1D9]">&</span> Продукция
            </h2>

            <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-inter">
              <p>
                Была официальным <strong className="text-white font-semibold">амбассадором</strong> одного из ведущих производителей эпоксидной смолы и художественных материалов в России.
              </p>
              <p>
                В рамках партнерства мы выпустили совместную брендированную продукцию: <strong className="text-[#14F1D9] font-semibold">эксклюзивную коробку для создания ёлочных игрушек</strong> из смолы, которая разошлась по всей стране.
              </p>
              <p>
                Также я <strong className="text-[#14F1D9] font-semibold">спроектировала специализированный защитный короб для опила изделий</strong>, защищающий мастера от пыли — производитель пустил мою разработку в серийное производство.
              </p>
            </div>

            {/* Факты */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="border border-white/10 bg-[#1A1A1A] p-4 rounded-none">
                <div className="font-montserrat text-lg font-black text-[#14F1D9]">АМБАССАДОР</div>
                <div className="mt-1 text-xs text-white/60 font-inter">Ведущего производителя смолы в РФ</div>
              </div>
              <div className="border border-white/10 bg-[#1A1A1A] p-4 rounded-none">
                <div className="font-montserrat text-lg font-black text-white">В СЕРИИ</div>
                <div className="mt-1 text-xs text-white/60 font-inter">Авторский промышленный дизайн</div>
              </div>
            </div>
          </div>

          {/* Правая колонка: 4 карточки 2x2 сеткой вровень с текстом */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-none border border-white/15 bg-[#1A1A1A] transition-all hover:border-[#14F1D9]/40"
              >
                {/* Картинка */}
                <div 
                  onClick={() => setSelectedImage(item)}
                  className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    loading="eager"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-none bg-[#14F1D9] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Текстовый блок */}
                <div className="flex flex-1 flex-col justify-between p-4 space-y-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-montserrat leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/65 font-inter">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
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
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full h-[70vh] rounded-none overflow-hidden border border-white/20">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="inline-block rounded-none bg-[#14F1D9] px-3 py-1 text-xs font-black uppercase text-black mb-1">
                {selectedImage.badge}
              </span>
              <h3 className="text-base font-bold text-white font-montserrat">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
