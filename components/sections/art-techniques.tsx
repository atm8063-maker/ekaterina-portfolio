export function ArtTechniques() {
  const techniques = ["Эпоксидная смола", "Акрил", "Алкогольные чернила", "Текстурная паста", "Смешанные техники"];
  
  return (
    <section id="techniques" className="border-b border-white/10 bg-[#111111] py-20 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat mt-2">
            Техники <span className="text-[#14F1D9]">&</span> Инструменты
          </h2>
          <p className="text-white/60 mt-2 font-inter">
            Работаю в разных техниках и с разными темами — от изящных украшений до полноформатной мебели и картин, а также создаю дизайн в цифре.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-none bg-surface border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat mb-6">
              Офлайн
            </h3>
            <div className="flex flex-wrap gap-3">
              {techniques.map(t => (
                <span key={t} className="px-4 py-2 rounded-none border border-white/20 text-white text-xs uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default">
                  {t}
                </span>
              ))}
              {["Гипс", "Глина", "Масло", "Скетчи"].map(t => (
                <span key={t} className="px-4 py-2 rounded-none border border-white/20 text-white/50 text-xs uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-none bg-surface border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat mb-6">
              Цифра (Design <span className="text-[#14F1D9]">&</span> Tech)
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Figma", "Photoshop", "Illustrator", "SketchUp", "Planoplan"].map(i => (
                <span key={i} className="px-4 py-2 rounded-none bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs uppercase tracking-wider font-semibold hover:bg-[#14F1D9]/20 transition-colors cursor-default">
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
