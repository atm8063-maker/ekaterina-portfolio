export function ArtTechniques() {
  const techniques = ["Эпоксидная смола", "Акрил", "Алкогольные чернила", "Текстурная паста", "Смешанные техники"];
  
  return (
    <section className="border-b border-white/10 bg-[#111111] py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat mt-2">
            Техники & Инструменты
          </h2>
          <p className="text-white/60 mt-2">
            Работаю в разных техниках и с разными темами — от изящных украшений до полноформатной мебели и картин, а также создаю дизайн в цифре.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 rounded-bl-full -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat mb-6">
              Офлайн
            </h3>
            <div className="flex flex-wrap gap-3">
              {techniques.map(t => (
                <span key={t} className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default">
                  {t}
                </span>
              ))}
              {["Гипс", "Глина", "Масло", "Скетчи"].map(t => (
                <span key={t} className="px-5 py-2.5 rounded-full border border-white/20 text-white/50 text-sm uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 rounded-bl-full -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat mb-6">
              Цифра (Design & Tech)
            </h3>
            <div className="flex flex-wrap gap-3">
              {["SketchUp", "Planoplan", "Illustrator", "Интерьерный дизайн", "Ландшафтный дизайн"].map(i => (
                <span key={i} className="px-5 py-2.5 rounded-full bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-sm uppercase tracking-wider font-semibold">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
