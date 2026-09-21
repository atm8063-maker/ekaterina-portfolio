'use client';

import Image from "next/image";
import { useState } from "react";

type BrandProduct = {
  id: string;
  title: string;
  badge: string;
  desc: string;
  image: string;
};

const products: BrandProduct[] = [
  {
    id: "sawdust-box",
    title: "Защитный короб для опила изделий",
    badge: "ПРОМЫШЛЕННЫЙ ДИЗАЙН",
    desc: "Эргономичный прозрачный бокс для безопасной и чистой шлифовки изделий. Спроектировала конструкцию с нуля, после чего производитель запустил её в серийное производство.",
    image: "/brand/sawdust-chamber.jpg",
  },
  {
    id: "toys-box",
    title: "Набор для создания ёлочных игрушек",
    badge: "КОЛЛАБОРАЦИЯ",
    desc: "Эксклюзивный брендированный праздничный набор с авторскими силиконовыми молдами, смолой, красителями и пошаговым обучением.",
    image: "/brand/toy-box-holiday.webp",
  },
];

const galleryPhotos = [
  {
    src: "/brand/toy-box-flatlay.webp",
    title: "Полный состав набора (молды, смола, красители, весы)",
  },
  {
    src: "/brand/toy-finished-collection.webp",
    title: "Ёлочные игрушки из смолы, созданные по урокам набора",
  },
];

export function ArtBrand() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="brand" className="relative border-b border-white/10 bg-[#111111] py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Левая колонка: Описание и факты */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
              Амбассадор бренда и продукция
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
              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-4">
                <div className="font-montserrat text-lg font-black text-[#14F1D9]">АМБАССАДОР</div>
                <div className="mt-1 text-xs text-white/60">Ведущего производителя смолы в РФ</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-4">
                <div className="font-montserrat text-lg font-black text-white">В СЕРИИ</div>
                <div className="mt-1 text-xs text-white/60">Авторский промышленный дизайн</div>
              </div>
            </div>
          </div>

          {/* Правая колонка: 2 главные карточки продуктов */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#1A1A1A] transition-all hover:border-[#14F1D9]/40"
              >
                {/* Картинка */}
                <div 
                  onClick={() => setSelectedImage(item.image)}
                  className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-[#14F1D9] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-black shadow">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Текстовый блок */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white font-montserrat leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/65 font-inter">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Дополнительные фото набора */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F1D9]">
              Детали коллаборации и наполнение набора
            </h4>
            <span className="text-xs text-white/40">Нажмите для увеличения</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(photo.src)}
                className="group relative h-48 sm:h-56 overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] cursor-pointer hover:border-[#14F1D9]/50 transition-all"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-4">
                  <p className="text-xs font-medium text-white/90 leading-snug">
                    {photo.title}
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
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden border border-white/20">
              <Image
                src={selectedImage}
                alt="Продукция"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-xs text-white/60">Кликните в любом месте, чтобы закрыть</p>
          </div>
        </div>
      )}
    </section>
  );
}
