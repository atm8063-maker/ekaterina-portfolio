import { ArtCard } from "@/components/ui/art-card";

export function ArtAwards() {
  return (
    <section id="awards" className="container mx-auto px-6 py-28 border-b border-white/10 scroll-mt-20">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
            Победы, финалы и судейство
          </h2>
          <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
            <p>
              Неоднократно выигрывала российские и мировые конкурсы по смоле. Мои работы получают высокие оценки за сложную технику и глубину композиции.
            </p>
            <p>
              <strong className="text-white">Более 10 раз</strong> изделия выходили в финал легендарной «Арт-гонки». Впоследствии была приглашена в качестве <strong className="text-[#14F1D9]">члена Жюри Арт-гонки</strong> — одного из главных конкурсов среди художников-смолянистов.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[420px] sm:h-[500px]">
          <ArtCard src="/placeholder.jpg" alt="Gallery image" title="Арт-гонка • Финал" className="col-span-1 row-span-2" />
          <ArtCard src="/placeholder.jpg" alt="Gallery image" title="Конкурсная работа" className="col-span-1 h-[240px]" />
          <ArtCard src="/placeholder.jpg" alt="Gallery image" title="Резин-арт" className="col-span-1 h-[240px]" />
        </div>

      </div>
    </section>
  );
}
