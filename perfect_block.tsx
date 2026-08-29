      {/* 2.5 INSPIRATION IN DETAILS - Photo with text on the left */}
      <section className="relative w-full overflow-hidden bg-white border-b border-[#111111]/10">
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[500px] lg:min-h-[600px] flex items-center">
          
          {/* Background image container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute right-0 top-0 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] h-full translate-x-[120px] sm:translate-x-0">
              <Image 
                src="/art-gallery/photo_2930@31-07-2026_17-46-03.jpg" 
                alt="Искусство в пространстве" 
                fill
                className="object-[30%_center] md:object-right object-cover"
              />
              {/* Градиент */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-white/0" />
              
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white to-white/0" />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-white/0" />
            </div>
          </div>
          
          {/* Текстовый блок */}
          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-[8%] xl:px-[12%] py-16 lg:py-0 mt-[180px] sm:mt-0">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#111111] font-montserrat mb-3 sm:mb-6 leading-[1.05] tracking-tight relative -top-8 sm:top-0">
                ИСКУССТВО <br className="hidden lg:block" />
                <span className="text-[#0D9488]">В ПРОСТРАНСТВЕ</span>
              </h2>
              
              <p className="text-[#444444] text-sm sm:text-base lg:text-lg font-medium leading-[1.6] sm:leading-relaxed font-inter">
                Мои работы - это не просто картины, а часть вашей жизни, способная менять ее к лучшему. Я верю, что искусство должно жить в диалоге с человеком. В этом и кроется главный секрет моей живописи.
              </p>
            </div>
          </div>
        </div>
      </section>
