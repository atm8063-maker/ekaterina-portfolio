import Image from "next/image";
import { Maximize2, Sparkles, ChevronRight } from "lucide-react";

interface VertexMockup {
  title: string;
  type: string;
  src: string;
  description: string;
}

const vertexMockups: VertexMockup[] = [
  {
    title: "iPad Air: Презентация каталога инвесторам",
    type: "Tablet Lifestyle",
    src: "/Кейсы/14-vertex-homes/Free iPad Air mockup held by user against a bright silver background  (Mockuuups Studio).jpg",
    description: "Планшетный сценарий взаимодействия с каталогом вилл и доходной аналитикой на экране iPad Air в руках клиента."
  },
  {
    title: "iPhone 12 Pro: Мобильный интерфейс и бронь",
    type: "Mobile Experience",
    src: "/Кейсы/14-vertex-homes/iPhone 12 Pro.jpg",
    description: "Мобильная адаптация интерфейса инвестиционной платформы: фильтры доходности, 3D-планировки и быстрая бронь лотов."
  },
  {
    title: "Комплексный презентационный холст Vertex Homes",
    type: "Master Design Canvas",
    src: "/Кейсы/14-vertex-homes/mockup.png",
    description: "Полномасштабный визуальный макет со всеми блоками платформы: Hero, калькулятор ROI, каталог вилл и форма закрытого инвест-пула."
  }
];

export type SelectedVertexImage = {
  src: string;
  title: string;
  subtitle?: string;
};

type VertexMockupsSectionProps = {
  onSelectImage: (image: SelectedVertexImage) => void;
};

export function VertexMockupsSection({ onSelectImage }: VertexMockupsSectionProps) {
  return (
    <section className="space-y-8 pt-8">
      <div className="border-b border-[#796D41]/30 pb-4">
        <div className="text-xs font-montserrat font-bold text-[#B8A86C] uppercase tracking-widest mb-1 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B8A86C]" />
          <span>МОКАПЫ УСТРОЙСТВ & ПРЕЗЕНТАЦИЯ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black font-montserrat uppercase text-white tracking-tight">
          Интерфейс Vertex Homes на устройствах
        </h2>
        <p className="text-sm text-white/70 font-sans mt-1 max-w-3xl leading-relaxed">
          Полноразмерные рендеры и визуализация взаимодействия с платформой на смартфонах, планшетах и широкоформатных экранах.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vertexMockups.map((m, idx) => (
          <div
            key={idx}
            onClick={() => onSelectImage({
              src: m.src,
              title: m.title,
              subtitle: m.type
            })}
            className="bg-[#222F33] border border-[#796D41]/30 rounded-2xl overflow-hidden group hover:border-[#B8A86C] transition-all flex flex-col cursor-pointer shadow-lg"
          >
            <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
              <Image
                src={m.src}
                alt={m.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-montserrat font-semibold text-[#B8A86C] border border-[#796D41]/40 uppercase tracking-wider">
                {m.type}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md p-2 rounded-lg text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#B8A86C]" />
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-base font-bold font-montserrat text-white group-hover:text-[#B8A86C] transition-colors leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs text-white/60 font-sans leading-relaxed mt-2">
                  {m.description}
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-montserrat">
                <span>Mockup Render</span>
                <span className="text-[#B8A86C] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Развернуть <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
