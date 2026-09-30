import Image from "next/image";

export function ArtNumbers() {
  return (
    <section id="numbers" className="pt-0 pb-0 lg:pb-0 relative overflow-hidden text-white bg-[#111111] scroll-mt-20">
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

      <div className="w-full max-w-[1200px] mx-auto px-0 lg:px-0 min-h-[auto] lg:min-h-[740px] relative z-20">
        
        {/* ================= DESKTOP LAYOUT (lg+) ================= */}
        <div className="hidden lg:flex flex-row items-start justify-between w-full relative px-6 sm:px-12 lg:px-0">
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
        <div className="lg:hidden flex flex-col w-full relative pt-0 pb-8 overflow-hidden">
          {/* 100% full-bleed edge-to-edge with compact top margin to previous block */}
          <div className="w-full relative z-10 -mt-6 xs:-mt-8 sm:-mt-10">
            <img 
              src="/about-composition.png" 
              alt="Art numbers composition"
              loading="eager"
              decoding="async"
              className="w-full h-auto block"
            />
          </div>

          {/* Numbers in 2 columns: placed directly below the photo */}
          <div className="relative z-20 w-full pl-3 pr-2 -mt-[33vw] xs:-mt-[35vw] sm:-mt-[37vw]">
            <div className="grid grid-cols-2 gap-2 xs:gap-2.5 max-w-[62%] xs:max-w-[58%]">
              <div className="border-l-[3px] border-[#14F1D9] pl-2 xs:pl-2.5 py-1.5 bg-[#111111]/85 backdrop-blur-sm rounded-r">
                <p className="text-lg xs:text-xl font-black text-[#14F1D9] font-montserrat leading-tight mb-0.5">20+ ЛЕТ</p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-wider text-white/90 font-bold font-montserrat leading-tight">Работы с креативом</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-2 xs:pl-2.5 py-1.5 bg-[#111111]/85 backdrop-blur-sm rounded-r">
                <p className="text-lg xs:text-xl font-black text-white font-montserrat leading-tight mb-0.5">7+ ЛЕТ</p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-wider text-white/90 font-bold font-montserrat leading-tight">В сфере Resin Art</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-2 xs:pl-2.5 py-1.5 bg-[#111111]/85 backdrop-blur-sm rounded-r">
                <p className="text-lg xs:text-xl font-black text-[#14F1D9] font-montserrat leading-tight mb-0.5 tracking-tight">АМБАССАДОР</p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-wider text-white/90 font-bold font-montserrat leading-tight">бренда РФ</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-2 xs:pl-2.5 py-1.5 bg-[#111111]/85 backdrop-blur-sm rounded-r">
                <p className="text-lg xs:text-xl font-black text-white font-montserrat leading-tight mb-0.5">10+ РАЗ</p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-wider text-white/90 font-bold font-montserrat leading-tight">в финале гонки</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-2 xs:pl-2.5 py-1.5 bg-[#111111]/85 backdrop-blur-sm rounded-r">
                <p className="text-lg xs:text-xl font-black text-[#14F1D9] font-montserrat leading-tight mb-0.5">10 000+</p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-wider text-white/90 font-bold font-montserrat leading-tight">Зрителей МК</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-2 xs:pl-2.5 py-1.5 bg-[#111111]/85 backdrop-blur-sm rounded-r">
                <p className="text-lg xs:text-xl font-black text-white font-montserrat leading-tight mb-0.5">1 000+</p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-wider text-white/90 font-bold font-montserrat leading-tight">учеников</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
