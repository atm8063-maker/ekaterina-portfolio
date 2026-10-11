import React from 'react';
import { useLanguage } from '@/components/language-provider';

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
  const { isEn } = useLanguage();
  return (
    <section id="contemporary-art" className="relative w-full overflow-hidden font-inter border-b border-white/10 scroll-mt-20">
      
      {/* ЧАСТЬ 1: СТАТИЧНАЯ (Светлая стена, узкая) */}
      <div className="relative w-full bg-[#f4f4f4] md:min-h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden">
        
        {/* Левая половина: Текст (ровно 50%) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 py-10 md:py-16 relative z-10 bg-[#f4f4f4]">
          <div className="max-w-[500px] w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-montserrat mb-6 leading-[1.05] text-[#111]">
              {isEn ? <>ARTIVISM & <br /> HONESTY</> : <>АРТИВИЗМ & <br /> ЧЕСТНОСТЬ</>}
            </h2>

            <div className="space-y-4 text-gray-800 text-sm sm:text-base font-medium leading-[1.65]">
              {isEn ? (
                <>
                  <p>
                    Art is not only a perfect form, but also a voice. In several of my pieces, I explore society&apos;s pain points, express protest, and speak about what matters most without censorship.
                  </p>
                  <p className="text-gray-700">
                    This is an honest dialogue with the viewer, where the material serves a deeper meaning and aesthetics intertwine with raw reality. The pieces in this section are an attempt to capture personal and artistic truth in conditions where speaking out publicly becomes a risk. They are united by an inner need to not stay silent, even when the usual forms of protest are blocked.
                  </p>
                  <div className="border-l-2 border-gray-400 pl-4 py-1 mt-2">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium leading-[1.6] italic">
                      Using complex, layered tactile materials — epoxy resin, plaster, clay, oil, and chrome — I explore the edges of isolation, censorship, shock, and resistance. Each object here bears visual witness to a lived catastrophe, capturing the thin line between powerlessness and dissent. This is art as an act of preserving memory, of honesty with oneself, and a search for language where words have been taken away.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    Искусство — это не только идеальная форма, но и голос. В ряде своих работ я исследую болевые точки общества, выражаю протест и говорю о самом важном без цензуры.
                  </p>
                  <p className="text-gray-700">
                    Это честный диалог со зрителем, где материал служит глубокому смыслу, а эстетика переплетается с обнаженной реальностью. Работы в этом разделе — это попытка зафиксировать личную и художественную правду в условиях, когда публичное высказывание становится риском. Работы в этом блоке объединены темой внутренней потребности не молчать, даже когда привычные формы протеста блокированы.
                  </p>
                  <div className="border-l-2 border-gray-400 pl-4 py-1 mt-2">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium leading-[1.6] italic">
                      Используя сложные, слоистые tactile-материалы — эпоксидную смолу, гипс, глину, масло и хром — я исследую грани изоляции, цензуры, шока и сопротивления. Каждый объект здесь служит визуальным свидетельством переживаемой катастрофы и фиксирует тонкую грань между бессилием и несогласием. Это искусство как акт сохранения памяти, честности перед собой и поиск языка там, где слова отняты.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Правая половина: Фото (ровно 50%) */}
        <div className="w-full md:w-1/2 relative h-[350px] sm:h-[400px] md:h-auto md:min-h-full">
          <img
            src="/art-protest/photo_3317@04-08-2026_21-08-44.jpg"
            alt={isEn ? "Artivism" : "Артивизм"}
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
          <div className="hidden md:block absolute inset-y-0 left-0 w-[150px] bg-gradient-to-r from-[#f4f4f4] to-transparent pointer-events-none" />
          <div className="md:hidden absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-[#f4f4f4] to-transparent pointer-events-none" />
        </div>
      </div>

          </section>
  );
}
