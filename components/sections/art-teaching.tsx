import { ArtCard } from "@/components/ui/art-card";

export function ArtTeaching() {
  return (
    <section id="teaching" className="container mx-auto px-6 py-28 border-b border-white/10 scroll-mt-20">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
            Музей АртМуза, Лекции & МК
          </h2>
          <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
            <p>
              Выступала с лекцией и проводила авторский мастер-класс на 1-м форуме смолянистов в музее современного искусства <strong className="text-white">АртМуза</strong>.
            </p>
            <p>
              Проводила прямые эфиры по тонкостям работы со смолой с охватом в <strong className="text-[#14F1D9]">несколько тысяч человек</strong>, а также организовывала оффлайн творческие мастер-классы в Турции и Черногории. Кураторство в онлайн-школе.
            </p>
            <div className="pt-4 flex gap-4">
              <a href="#" className="px-6 py-3 border border-[#14F1D9]/50 text-[#14F1D9] text-sm uppercase tracking-wider hover:bg-[#14F1D9] hover:text-black transition-colors rounded-full font-semibold">
                Смотреть уроки ↗
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[420px] sm:h-[500px]">
          <ArtCard src="/placeholder.jpg" alt="Gallery image" title="Мастер-класс • АртМуза" className="col-span-1 h-[240px]" />
          <ArtCard src="/placeholder.jpg" alt="Gallery image" title="Черногория & Турция" className="col-span-1 row-span-2" />
          <ArtCard src="/placeholder.jpg" alt="Gallery image" title="Прямой эфир" className="col-span-1 h-[240px]" />
        </div>

      </div>
    </section>
  );
}
