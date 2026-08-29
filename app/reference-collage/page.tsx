import React from "react";

export default function ReferenceCollagePage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* 
        Container matching the approximate 16:10 aspect ratio of the reference image.
        Absolute positioning is used inside to achieve 100% pixel-perfect asymmetrical layout.
      */}
      <div className="relative w-full max-w-[1400px] aspect-[16/10] bg-black text-white/80 font-serif text-[10px] sm:text-xs md:text-sm lg:text-base overflow-hidden border border-white/10">
        
        {/* --- TEXTS --- */}
        <div className="absolute whitespace-nowrap text-white/90" style={{ top: '6%', left: '4%', fontSize: '1.2em' }}>Customer Profile</div>
        <div className="absolute whitespace-nowrap" style={{ top: '61.5%', left: '10%' }}>Artistic</div>
        <div className="absolute whitespace-nowrap" style={{ top: '41%', left: '26%' }}>Educated</div>
        <div className="absolute whitespace-nowrap" style={{ top: '31%', left: '41%' }}>Independent</div>
        <div className="absolute whitespace-nowrap" style={{ top: '66%', left: '41%' }}>Ambitious</div>
        <div className="absolute whitespace-nowrap" style={{ top: '41%', left: '53%' }}>Well paid</div>
        <div className="absolute whitespace-nowrap" style={{ top: '31%', left: '73%' }}>Sophisticated taste</div>
        <div className="absolute whitespace-nowrap" style={{ top: '86%', left: '26%' }}>Enjoys the finer things in life</div>

        {/* --- LINES (White, 2px) --- */}
        {/* Main Horizontal Line */}
        <div className="absolute bg-white" style={{ top: '65%', left: '10%', width: '85%', height: '2px' }} />
        {/* Horizontal Line 2 (under Profile) */}
        <div className="absolute bg-white" style={{ top: '35%', left: '52%', width: '43%', height: '2px' }} />
        
        {/* Vertical Line 1 (left of Piano/Escalator) */}
        <div className="absolute bg-white" style={{ top: '35%', left: '25%', height: '55%', width: '2px' }} />
        {/* Vertical Line 2 (left of Dress/Walking) */}
        <div className="absolute bg-white" style={{ top: '22%', left: '40%', height: '70%', width: '2px' }} />
        {/* Vertical Line 3 (left of Profile/Airplane) */}
        <div className="absolute bg-white" style={{ top: '8%', left: '52%', height: '84%', width: '2px' }} />
        {/* Vertical Line 4 (right of Profile/Airplane) */}
        <div className="absolute bg-white" style={{ top: '15%', left: '72%', height: '50%', width: '2px' }} />

        {/* --- IMAGES (Grayscale to match reference) --- */}
        {/* Col A: Piano */}
        <div className="absolute" style={{ top: '45%', left: '25%', width: '15%', height: '20%' }}>
          <img src="/photo_3154@04-08-2026_20-56-52.jpg" alt="Piano" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity" />
        </div>
        {/* Col A: Escalator */}
        <div className="absolute" style={{ top: '65%', left: '25%', width: '15%', height: '20%' }}>
          <img src="/photo_3155@04-08-2026_20-56-52.jpg" alt="Escalator" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        {/* Col B: Dress */}
        <div className="absolute" style={{ top: '35%', left: '40%', width: '12%', height: '30%' }}>
          <img src="/photo_3157@04-08-2026_20-56-52.jpg" alt="Dress" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity" />
        </div>
        {/* Col B: Walking */}
        <div className="absolute" style={{ top: '70%', left: '40%', width: '12%', height: '20%' }}>
          <img src="/photo_3158@04-08-2026_20-56-52.jpg" alt="Walking" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        {/* Col C: Profile */}
        <div className="absolute" style={{ top: '15%', left: '52%', width: '20%', height: '20%' }}>
          <img src="/photo_3159@04-08-2026_20-56-52.jpg" alt="Profile" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity" />
        </div>
        {/* Col C: Airplane */}
        <div className="absolute" style={{ top: '45%', left: '52%', width: '20%', height: '20%' }}>
          <img src="/photo_3161@04-08-2026_20-56-52.jpg" alt="Airplane" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        {/* Col D: Origami */}
        <div className="absolute" style={{ top: '35%', left: '72%', width: '15%', height: '20%' }}>
          <img src="/photo_3162@04-08-2026_20-56-52.jpg" alt="Origami" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity" />
        </div>

      </div>
    </main>
  );
}
