export function StubSection({ id, title, desc }: { id: string, title: string, desc: string }) {
  return (
    <section id={id} className="py-24 border-b border-white/10 bg-[#111111] flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#14F1D9]/40 via-[#111] to-[#111]"></div>
      <div className="relative z-10 p-8 border border-white/20 rounded-3xl bg-white/5 backdrop-blur-md max-w-3xl w-full mx-4">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#14F1D9]/30 bg-[#14F1D9]/10 text-[#14F1D9] text-xs font-mono font-bold tracking-widest">
          НОВЫЙ БЛОК В РАЗРАБОТКЕ
        </div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-montserrat mb-4">{title}</h2>
        <p className="text-white/60 font-inter text-sm sm:text-base leading-relaxed">{desc}</p>
      </div>
    </section>
  );
}
