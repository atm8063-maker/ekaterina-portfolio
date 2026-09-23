import Image from "next/image";

export function ArtNumbers() {
  return (
    <section id="numbers" className="py-16 lg:py-0 relative overflow-hidden text-white border-b border-white/10 scroll-mt-20 bg-[#111111]">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-0 min-h-[auto] lg:min-h-[740px] relative">
        
        {/* DESKTOP LAYOUT (>= lg) */}
        <div className="hidden lg:flex flex-row items-start justify-between w-full relative">
          {/* Numbers Column */}
          <div className="flex w-[375px] flex-col justify-start relative z-20 pt-[138px] pb-24">
            <div className="flex flex-col space-y-7 text-[#A3A3A3] text-lg font-medium leading-[1.6] font-inter">
              <div className="border-l-[3px] border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-[#14F1D9] font-montserrat mb-1 leading-[1.1]">20+ ЛЕТ</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">Работы с креативом</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-white font-montserrat mb-1 leading-[1.1]">7+ ЛЕТ</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">В сфере Resin Art</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-[#14F1D9] font-montserrat mb-1 leading-[1.1]">АМБАССАДОР</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">ведущего бренда в России</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-white font-montserrat mb-1 leading-[1.1]">БОЛЕЕ 10 РАЗ</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">в финале арт-гонки</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-[#14F1D9] font-montserrat mb-1 leading-[1.1]">БОЛЕЕ 10000</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">
                  Зрителей на прямых эфирах <br />и мастер-классах
                </p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-white font-montserrat mb-1 leading-[1.1]">БОЛЕЕ 1000+</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">учеников</p>
              </div>
            </div>
          </div>
          
          {/* Desktop Composition image */}
          <div className="relative z-10 w-auto static overflow-visible pointer-events-none">
            <img 
              src="/art-composition.png" 
              alt="Art numbers composition"
              loading="eager"
              decoding="async"
              className="absolute left-[343px] -top-[493px] w-[1273px] max-w-none translate-x-0 h-[1970px] pointer-events-none"
            />
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (< lg) */}
        <div className="lg:hidden flex flex-col items-center gap-8 w-full">
          {/* Top image on mobile */}
          <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="/about-composition.png" 
              alt="Art numbers composition"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Numbers grid cleanly below image */}
          <div className="w-full grid grid-cols-2 gap-4 sm:gap-6">
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-1 bg-white/5 p-3 rounded-r-lg">
              <p className="text-2xl sm:text-3xl font-black text-[#14F1D9] font-montserrat leading-tight mb-1">20+ ЛЕТ</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">Работы с креативом</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-1 bg-white/5 p-3 rounded-r-lg">
              <p className="text-2xl sm:text-3xl font-black text-white font-montserrat leading-tight mb-1">7+ ЛЕТ</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">В сфере Resin Art</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-1 bg-white/5 p-3 rounded-r-lg">
              <p className="text-2xl sm:text-3xl font-black text-[#14F1D9] font-montserrat leading-tight mb-1">АМБАССАДОР</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">ведущего бренда РФ</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-1 bg-white/5 p-3 rounded-r-lg">
              <p className="text-2xl sm:text-3xl font-black text-white font-montserrat leading-tight mb-1">10+ РАЗ</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">в финале арт-гонки</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-1 bg-white/5 p-3 rounded-r-lg">
              <p className="text-2xl sm:text-3xl font-black text-[#14F1D9] font-montserrat leading-tight mb-1">10 000+</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">Зрителей эфиров & МК</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-1 bg-white/5 p-3 rounded-r-lg">
              <p className="text-2xl sm:text-3xl font-black text-white font-montserrat leading-tight mb-1">1 000+</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">учеников</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
