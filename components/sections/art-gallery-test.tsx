'use client';

import React from 'react';

export function ArtGalleryTest() {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] bg-black overflow-hidden flex flex-col md:block font-inter">
      
      {/* Desktop Centered Container */}
      <div className="relative w-full max-w-[1440px] h-full mx-auto md:min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between">
        
        {/* TEXT SECTION */}
        {/* Mobile: relative, text centered, solid black bg. */}
        {/* Desktop: right-aligned, transparent gradient */}
        <div className="relative md:absolute md:inset-0 md:inset-y-0 md:left-auto md:right-0 w-full md:w-[50%] lg:w-[45%] order-1 md:order-none bg-black md:bg-transparent md:bg-gradient-to-l from-black/95 via-black/80 to-transparent z-[30] pointer-events-none flex items-center justify-center md:justify-end flex-shrink-0">
          <div className="px-6 md:pr-10 lg:pr-12 md:pl-6 pt-12 pb-6 md:py-12 max-w-xl pointer-events-auto text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-montserrat mb-6 leading-[1.1]">
              <span className="text-[#14F1D9]">ЭСТЕТИКА &</span> <br />
              КРАСОТА
            </h2>
            
            <p className="text-[#A3A3A3] text-sm sm:text-base font-medium leading-[1.7] mb-6 font-inter">
              Идеальный глянец, созданный для того, чтобы приносить гармонию в любой интерьер. Эта сторона моего творчества — о безупречной гладкости, эстетике, попытке остановить мгновение и запечатлеть природную красоту с помощью химии и физики.
            </p>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="relative md:absolute md:left-0 md:top-0 h-auto md:h-full w-full md:w-[60%] order-2 md:order-none flex-grow flex items-center justify-center md:justify-start overflow-hidden">
           <video 
             src="/art-aesthetics-loop.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline 
             preload="auto"
             className="w-full h-auto md:h-full md:w-auto object-contain md:object-left"
           />
        </div>
      </div>
    </div>
  );
}
