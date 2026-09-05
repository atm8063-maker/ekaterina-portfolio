export function ArtContacts() {
  return (
    <section id="contacts" className="py-24 container mx-auto px-6 text-center border-t border-white/10 scroll-mt-20">
      <p className="text-white/50 uppercase tracking-widest text-xs font-bold font-montserrat mb-3">Следи за новыми работами</p>
      <h2 className="text-4xl sm:text-6xl font-black uppercase text-white font-montserrat mb-8">
        INSTAGRAM: <span className="text-[#14F1D9]">@FIR_TREE_ART</span>
      </h2>
      <a 
        href="https://instagram.com/fir_tree_art" 
        target="_blank" 
        rel="noreferrer"
        className="inline-block px-10 py-5 bg-[#14F1D9] text-[#111111] font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(20,241,217,0.3)] hover:scale-105"
      >
        Перейти в Instagram ↗
      </a>
    </section>
  );
}
