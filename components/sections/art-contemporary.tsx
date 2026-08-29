import React from 'react';

// Музейная табличка для текста
const MuseumPlacard = ({ title, subtitle, desc }: { title: string, subtitle?: string, desc?: string }) => (
  <div className="bg-white text-black p-6 shadow-2xl shrink-0 w-[300px] md:w-[350px]">
    <h4 className="font-bold text-xl md:text-2xl mb-1 font-montserrat">{title}</h4>
    {subtitle && <p className="text-sm text-gray-600 mb-3">{subtitle}</p>}
    {desc && <p className="text-xs md:text-sm font-medium leading-relaxed">{desc}</p>}
  </div>
);

// Музейная рамка для картинки
const MuseumImage = ({ src, type = 'image', aspectRatio = 'aspect-[3/4]' }: { src: string, type?: 'image' | 'video', aspectRatio?: string }) => (
  <div className="bg-white p-2 md:p-3 shadow-2xl shrink-0">
    <div className={`relative w-[280px] md:w-[400px] ${aspectRatio}`}>
      {type === 'video' ? (
        <video src={src} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <img src={src} alt="Artwork" className="absolute inset-0 w-full h-full object-cover" />
      )}
    </div>
  </div>
);

export function ArtContemporary() {
  return (
    <section id="contemporary-art" className="relative w-full overflow-hidden font-inter border-b border-white/10 scroll-mt-20">
      
      {/* ЧАСТЬ 1: СТАТИЧНАЯ (Светлая стена, узкая) */}
      <div className="relative w-full bg-[#f4f4f4] md:min-h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden">
        
        {/* Левая половина: Текст (ровно 50%) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 py-10 md:py-16 relative z-10 bg-[#f4f4f4]">
          <div className="max-w-[500px] w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-montserrat mb-6 leading-[1.05] text-[#111]">
              АРТИВИЗМ & <br />
              ЧЕСТНОСТЬ
            </h2>
            
            <p className="text-gray-700 text-sm sm:text-base font-medium leading-[1.6] mb-6">
              Искусство — это не только идеальная форма, но и голос. В моих работах в стиле Contemporary Art я исследую болевые точки общества, выражаю протест и говорю о самом важном без цензуры.
            </p>
            <div className="border-l-2 border-gray-300 pl-4 py-1">
              <p className="text-gray-500 text-sm font-medium leading-[1.6]">
                Это честный диалог со зрителем, где материал служит глубокому смыслу, а эстетика переплетается с обнаженной реальностью.
              </p>
            </div>
          </div>
        </div>

        {/* Правая половина: Фото (ровно 50%) */}
        <div className="w-full md:w-1/2 relative h-[350px] sm:h-[400px] md:h-auto md:min-h-full">
          <img 
            src="/art-protest/photo_3317@04-08-2026_21-08-44.jpg" 
            alt="Артивизм" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
          <div className="hidden md:block absolute inset-y-0 left-0 w-[150px] bg-gradient-to-r from-[#f4f4f4] to-transparent pointer-events-none" />
          <div className="md:hidden absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-[#f4f4f4] to-transparent pointer-events-none" />
        </div>
      </div>

          </section>
  );
}
