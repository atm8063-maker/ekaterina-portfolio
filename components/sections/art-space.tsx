import Image from "next/image";

export function ArtSpace() {
  return (
    <section id="art-space" className="relative w-full overflow-hidden bg-white border-b border-[#111111]/10 pt-10">
      <div className="relative w-full max-w-[1920px] mx-auto min-h-[580px] lg:min-h-[600px] flex items-center">
        
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute right-0 top-[80px] sm:top-0 bottom-0 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] translate-x-[105px] sm:translate-x-0">
            <Image 
              src="/art-gallery/photo_2930@31-07-2026_17-46-03.jpg" 
              alt="Искусство в пространстве" 
              fill
              className="object-[30%_center] md:object-right object-cover"
            />
            
            <div className="absolute inset-y-0 left-0 w-[180px] md:w-[250px] bg-gradient-to-r from-white via-white/90 to-white/0" />
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white to-white/0" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-white/0" />
          </div>
        </div>
        
        <div className="absolute inset-y-0 left-0 w-[240px] md:w-[350px] bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-[5]" />

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-[8%] xl:px-[12%] pt-4 pb-16 sm:py-16 lg:py-0 mt-0 sm:mt-0">
          <div className="max-w-[230px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#111111] font-montserrat mb-12 sm:mb-6 leading-[1.05] tracking-tight relative sm:top-0 whitespace-nowrap">
              ГАЛЕРЕЯ <span className="text-[#0D9488]">РАБОТ</span>
            </h2>
            
            <p className="text-[#444444] text-sm sm:text-base lg:text-lg font-medium leading-[1.6] sm:leading-relaxed font-inter">
              Основной материал в моём творчестве — это эпоксидная смола, которая отлично подходит не только для декоративных акцентных работ, но и для создания каустических эффектов, возникающих при преломлении солнечных лучей. Сочетание света, цвета и разнообразных текстур позволяет расширять границы условного &quot;холста&quot; и &quot;выходить за рамки&quot; во всех смыслах.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
