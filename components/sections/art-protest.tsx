'use client';

export function ArtProtest() {
  const cases = [1, 2, 3, 4, 5, 6];
  
  // Group into chunks of 2
  const chunks = [];
  for (let i = 0; i < cases.length; i += 2) {
    chunks.push(cases.slice(i, i + 2));
  }

  return (
    <section className="relative w-full h-[calc(100vh-80px)] bg-[#111111] overflow-hidden">
      
      {/* The horizontal scroll track (native) with SNAP */}
      <div 
        className="relative w-full h-full overflow-x-auto overflow-y-hidden flex flex-nowrap snap-x snap-mandatory" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
        
        {chunks.map((chunk, index) => (
          <div key={index} className="relative h-full shrink-0 flex items-center justify-center snap-align-none">
            {/* Background image for this segment */}
            <img 
              src="/seamless_ceiling_v3_11_final1.jpg" 
              alt={`wall ${index + 1}`} 
              className="h-full w-auto max-w-none block pointer-events-none object-cover" 
            />
            
            {/* Containers explicitly spaced to guarantee 100% mathematical symmetry */}
            <div className="absolute inset-0 flex items-center">
              {/* Left padding: 12.5% on mobile, 5% on desktop */}
              <div className="w-[12.5%] md:w-[5%] h-full shrink-0"></div>
              
              {/* Item 1 */}
              <div className="relative w-[25%] md:w-[40%] h-[50vh] md:h-[60vh] shrink-0 border-2 border-black flex items-center justify-center overflow-hidden snap-center">
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full stroke-black" strokeWidth="2" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <line x1="0" y1="0" x2="100" y2="100" />
                    <line x1="100" y1="0" x2="0" y2="100" />
                  </svg>
                </div>
              </div>
              
              {/* Gap: 25% on mobile, 10% on desktop */}
              <div className="w-[25%] md:w-[10%] h-full shrink-0"></div>
              
              {/* Item 2 */}
              {chunk.length > 1 ? (
                <div className="relative w-[25%] md:w-[40%] h-[50vh] md:h-[60vh] shrink-0 border-2 border-black flex items-center justify-center overflow-hidden snap-center">
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full stroke-black" strokeWidth="2" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <line x1="0" y1="0" x2="100" y2="100" />
                      <line x1="100" y1="0" x2="0" y2="100" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="w-[25%] md:w-[40%] shrink-0"></div>
              )}
              
              {/* Right padding: 12.5% on mobile, 5% on desktop */}
              <div className="w-[12.5%] md:w-[5%] h-full shrink-0"></div>
            </div>
          </div>
        ))}
        {/* Trailing padding for the snap container to let the last item center properly if needed */}
        <div className="w-[10vw] shrink-0"></div>
      </div>
    </section>
  );
}
