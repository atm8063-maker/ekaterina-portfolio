import Image from "next/image";

export function ArtNumbers() {
  return (
    <section id="numbers" className="pt-4 lg:pt-0 pb-12 lg:pb-0 relative overflow-hidden text-white bg-[#111111] scroll-mt-20">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top & bottom gradient fades */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-0 min-h-[auto] lg:min-h-[740px] relative z-20">
        
        {/* ================= DESKTOP LAYOUT (lg+) ================= */}
        <div className="hidden lg:flex flex-row items-start justify-between w-full relative">
          {/* Numbers list left */}
          <div className="flex w-[375px] flex-col justify-start relative z-20 pt-[138px] pb-24">
            <div className="flex flex-col space-y-7 text-[#A3A3A3] text-lg font-medium leading-[1.6] font-inter">
              <div className="border-l-4 border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-[#14F1D9] font-montserrat mb-1 leading-[1.1]">20+ ЛЕТ</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">Работы с креативом</p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-white font-montserrat mb-1 leading-[1.1]">7+ ЛЕТ</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">В сфере Resin Art</p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-[#14F1D9] font-montserrat mb-1 leading-[1.1]">АМБАССАДОР</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">ведущего бренда в России</p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-white font-montserrat mb-1 leading-[1.1]">БОЛЕЕ 10 РАЗ</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">в финале арт-гонки</p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-[#14F1D9] font-montserrat mb-1 leading-[1.1]">БОЛЕЕ 10000</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">
                  Зрителей на прямых эфирах и МК
                </p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-4">
                <p className="text-4xl font-black text-white font-montserrat mb-1 leading-[1.1]">БОЛЕЕ 1000+</p>
                <p className="text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">учеников</p>
              </div>
            </div>
          </div>
          
          {/* Composition image right */}
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

        {/* ================= MOBILE & TABLET LAYOUT (< lg) ================= */}
        <div className="lg:hidden flex flex-col items-center gap-6 w-full pt-4">
          {/* Top image on mobile */}
          <div className="relative w-full max-w-[380px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="/about-composition.png" 
              alt="Art numbers composition"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* Numbers grid cleanly below image */}
          <div className="w-full grid grid-cols-2 gap-3 sm:gap-4">
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-2 bg-white/[0.03] p-3 rounded-r-lg">
              <p className="text-xl sm:text-2xl font-black text-[#14F1D9] font-montserrat leading-tight mb-1">20+ ЛЕТ</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">Работы с креативом</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-2 bg-white/[0.03] p-3 rounded-r-lg">
              <p className="text-xl sm:text-2xl font-black text-white font-montserrat leading-tight mb-1">7+ ЛЕТ</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">В сфере Resin Art</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-2 bg-white/[0.03] p-3 rounded-r-lg">
              <p className="text-xl sm:text-2xl font-black text-[#14F1D9] font-montserrat leading-tight mb-1 tracking-tight">АМБАССАДОР</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">ведущего бренда РФ</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-2 bg-white/[0.03] p-3 rounded-r-lg">
              <p className="text-xl sm:text-2xl font-black text-white font-montserrat leading-tight mb-1">10+ РАЗ</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">в финале арт-гонки</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-2 bg-white/[0.03] p-3 rounded-r-lg">
              <p className="text-xl sm:text-2xl font-black text-[#14F1D9] font-montserrat leading-tight mb-1">10 000+</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">Зрителей эфиров & МК</p>
            </div>
            <div className="border-l-[3px] border-[#14F1D9] pl-3 py-2 bg-white/[0.03] p-3 rounded-r-lg">
              <p className="text-xl sm:text-2xl font-black text-white font-montserrat leading-tight mb-1">1 000+</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/90 font-bold font-montserrat">учеников</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
