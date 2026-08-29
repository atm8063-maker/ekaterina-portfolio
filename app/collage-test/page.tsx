import React from "react";

export default function CollageTestPage() {
  return (
    <main className="min-h-screen bg-[#111111] overflow-hidden">
      {/* 
        Container replicating the 100vh-80px space from ArtProtest section 
        with the concrete wall background. 
      */}
      <section className="relative w-full h-[calc(100vh-80px)] mt-[80px] bg-[#111111]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/seamless_ceiling_v3_11_final1.jpg" 
            alt="Concrete Wall" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        {/* Collage Container (scrollable if it overflows) */}
        <div className="relative z-10 w-full h-full p-4 md:p-8 flex items-center justify-center overflow-auto">
          
          {/* Collage Board - Max width and aspect ratio */}
          <div className="w-full max-w-[1200px] bg-transparent border-4 border-black aspect-[16/9] md:aspect-[21/9] flex flex-col md:flex-row shadow-2xl">
            
            {/* Left Column (Main Artwork + Text) */}
            <div className="flex-[2] border-r-4 border-black flex flex-col">
              
              {/* Main Artwork Image */}
              <div className="flex-[3] border-b-4 border-black relative bg-[#1A1A1A] overflow-hidden group">
                <img 
                  src="/photo_3183@04-08-2026_20-56-52.jpg" 
                  alt="Main Artwork" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1">
                  <span className="text-white text-xs tracking-widest uppercase font-montserrat">Fragment 1</span>
                </div>
              </div>
              
              {/* Text Block */}
              <div className="flex-1 bg-[#F5F5F5] p-4 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-black uppercase font-montserrat text-black mb-2">Название Работы</h2>
                <p className="text-xs md:text-sm text-black/70 font-inter leading-relaxed">
                  Описание работы. Холст, масло, смешанная техника. Исследование внутренних и внешних границ в урбанистическом пейзаже. 2026.
                </p>
              </div>

            </div>
            
            {/* Right Column (Video + Secondary Images) */}
            <div className="flex-[1] flex flex-col min-h-0">
              
              {/* Top Right: Video Block */}
              <div className="h-1/2 border-b-4 border-black relative bg-black flex items-center justify-center overflow-hidden">
                {/* Fallback to image if video not loaded, or use video directly */}
                <video 
                  className="absolute inset-0 w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src="/video_119@04-08-2026_22-24-17.mp4"
                />
                <div className="absolute top-2 right-2 bg-black/70 px-2 py-0.5 z-10">
                  <span className="text-white text-[10px] tracking-widest uppercase font-montserrat">Process</span>
                </div>
              </div>
              
              {/* Bottom Right: Detail Image */}
              <div className="h-1/2 relative bg-[#1A1A1A] group overflow-hidden">
                <img 
                  src="/photo_3198@04-08-2026_20-58-15.jpg" 
                  alt="Detail Artwork" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 z-10">
                  <span className="text-white text-[10px] tracking-widest uppercase font-montserrat">Macro Detail</span>
                </div>
              </div>

            </div>

          </div>
          
        </div>
        
      </section>
    </main>
  );
}
