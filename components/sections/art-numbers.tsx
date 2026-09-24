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

      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-0 min-h-[auto] lg:min-h-[740px] relative z-20">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full relative">
          
          {/* Текстовые плашки с цифрами - мгновенная отрисовка без задержек */}
          <div className="flex w-full lg:w-[375px] flex-col justify-start order-3 lg:order-1 relative z-20 mt-6 lg:mt-0 pt-2 lg:pt-[138px] pb-12 lg:pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-col lg:gap-0 lg:space-y-7 text-[#A3A3A3] text-sm sm:text-base md:text-lg font-medium leading-[1.4] lg:leading-[1.6] font-inter">
              <div className="border-l-4 border-[#14F1D9] pl-3.5 lg:pl-4 py-1 bg-white/[0.02] lg:bg-transparent rounded-r">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">20+ ЛЕТ</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">Работы с креативом</p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-3.5 lg:pl-4 py-1 bg-white/[0.02] lg:bg-transparent rounded-r">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">7+ ЛЕТ</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">В сфере Resin Art</p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-3.5 lg:pl-4 py-1 bg-white/[0.02] lg:bg-transparent rounded-r">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">АМБАССАДОР</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">ведущего бренда в России</p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-3.5 lg:pl-4 py-1 bg-white/[0.02] lg:bg-transparent rounded-r">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 10 РАЗ</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">в финале арт-гонки</p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-3.5 lg:pl-4 py-1 bg-white/[0.02] lg:bg-transparent rounded-r">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 10000</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">
                  Зрителей на прямых эфирах и МК
                </p>
              </div>
              <div className="border-l-4 border-[#14F1D9] pl-3.5 lg:pl-4 py-1 bg-white/[0.02] lg:bg-transparent rounded-r">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 1000+</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">учеников</p>
              </div>
            </div>
          </div>
          
          {/* Статичная композиция без спецэффектов и анимаций */}
          <div className="w-full order-2 relative z-10 lg:w-auto lg:static lg:overflow-visible lg:pointer-events-none mt-2 lg:mt-0">
            <div className="block lg:hidden w-full max-w-[340px] sm:max-w-[420px] mx-auto overflow-hidden">
              <img 
                src="/about-composition.png" 
                alt="Art numbers composition"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </div>
            
            <img 
              src="/art-composition.png" 
              alt="Art numbers composition"
              loading="eager"
              decoding="async"
              className="hidden lg:block absolute left-[343px] -top-[493px] w-[1273px] max-w-none translate-x-0 h-[1970px] pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
