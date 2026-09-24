import Image from "next/image";

export function ArtContacts() {
  return (
    <section id="contacts" className="py-24 relative bg-[#111111] overflow-hidden text-center scroll-mt-20">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top & bottom gradient blend fades */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
        <p className="text-white/50 uppercase tracking-widest text-xs font-bold font-montserrat mb-3">Следи за новыми работами</p>
        <h2 className="text-4xl sm:text-6xl font-black uppercase text-white font-montserrat mb-8">
          INSTAGRAM: <span className="text-[#14F1D9]">@FIR_TREE_ART</span>
        </h2>
        <a 
          href="https://instagram.com/fir_tree_art" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block px-10 py-5 bg-[#14F1D9] text-[#111111] font-black uppercase tracking-widest rounded-none hover:bg-white transition-all shadow-[0_0_30px_rgba(20,241,217,0.3)] hover:scale-105"
        >
          Перейти в Instagram ↗
        </a>
      </div>
    </section>
  );
}
