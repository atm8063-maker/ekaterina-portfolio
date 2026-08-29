'use client';

import { motion } from "framer-motion";

export function ArtNumbers() {
  return (
    <section id="numbers" className="pt-0 pb-0 lg:pb-0 relative overflow-hidden text-white border-b border-white/10">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-0 min-h-[auto] lg:min-h-[740px] relative">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex w-full lg:w-[375px] flex-col justify-start order-3 lg:order-1 relative z-20 -mt-[400px] lg:mt-0 pt-8 lg:pt-[138px] pb-8 lg:pb-24"
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:flex lg:flex-col lg:gap-0 lg:space-y-7 text-[#A3A3A3] text-sm sm:text-base md:text-lg font-medium leading-[1.4] lg:leading-[1.6] font-inter">
              <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">20+ ЛЕТ</p>
                <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">Работы с креативом</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">7+ ЛЕТ</p>
                <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">В сфере Resin Art</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">АМБАССАДОР</p>
                <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">ведущего бренда в России</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 10 РАЗ</p>
                <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">в финале арт-гонки</p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#14F1D9] font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 10000</p>
                <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">
                  Зрителей на прямых эфирах <br className="hidden sm:inline" />и мастер-классах
                </p>
              </div>
              <div className="border-l-[3px] border-[#14F1D9] pl-3 lg:pl-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-montserrat mb-0.5 lg:mb-1 leading-[1.1]">БОЛЕЕ 1000+</p>
                <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-white/90 font-bold font-montserrat">учеников</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[calc(100%+48px)] sm:w-[calc(100%+96px)] order-2 relative z-10 -mx-6 sm:-mx-12 lg:mx-0 -mt-16 -mb-32 lg:mt-0 lg:mb-0 lg:w-auto lg:static lg:overflow-visible lg:pointer-events-none"
          >
            <img 
              src="/about-composition.png" 
              alt="Gallery image"
              className="block lg:hidden w-full max-w-none h-auto relative -mt-[200px]"
            />
            
            <img 
              src="/art-composition.png" 
              alt="Gallery image"
              className="hidden lg:block absolute left-[343px] -top-[493px] w-[1273px] max-w-none translate-x-0 h-[1970px] pointer-events-none"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
