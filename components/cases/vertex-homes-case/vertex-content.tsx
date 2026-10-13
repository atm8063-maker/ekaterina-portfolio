import Image from "next/image";
import { Maximize2, Sparkles, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface VertexMockup {
  title: string;
  type: string;
  src: string;
  description: string;
}

const IPAD_SRC = "/Кейсы/14-vertex-homes/Free iPad Air mockup held by user against a bright silver background  (Mockuuups Studio).webp";
const IPHONE_SRC = "/Кейсы/14-vertex-homes/iPhone 12 Pro.webp";

// "Master Design Canvas" (mockup.webp) removed: the source file is byte-identical
// to the corrupted public/case-vertex/assets/vertex_landing_full.webp (same md5),
// there is no good replacement in the repo.
const vertexMockupsByLang: Record<"RU" | "EN", VertexMockup[]> = {
  RU: [
    {
      title: "iPad Air: Презентация каталога инвесторам",
      type: "Tablet Lifestyle",
      src: IPAD_SRC,
      description: "Планшетный сценарий взаимодействия с каталогом вилл и доходной аналитикой на экране iPad Air в руках клиента."
    },
    {
      title: "iPhone 12 Pro: Мобильный интерфейс и бронь",
      type: "Mobile Experience",
      src: IPHONE_SRC,
      description: "Мобильная адаптация интерфейса инвестиционной платформы: фильтры доходности, 3D-планировки и быстрая бронь лотов."
    }
  ],
  EN: [
    {
      title: "iPad Air: Investor Catalog Presentation",
      type: "Tablet Lifestyle",
      src: IPAD_SRC,
      description: "A tablet interaction scenario for the villa catalog and ROI analytics on an iPad Air held by a client."
    },
    {
      title: "iPhone 12 Pro: Mobile Interface and Booking",
      type: "Mobile Experience",
      src: IPHONE_SRC,
      description: "Mobile adaptation of the investment platform interface: yield filters, 3D floor plans, and fast lot booking."
    }
  ],
};

const t = {
  RU: {
    eyebrow: "МОКАПЫ УСТРОЙСТВ & ПРЕЗЕНТАЦИЯ",
    heading: "Интерфейс Vertex Homes на устройствах",
    lead: "Полноразмерные рендеры и визуализация взаимодействия с платформой на смартфонах, планшетах и широкоформатных экранах.",
    mockupRender: "Mockup Render",
    expand: "Развернуть",
  },
  EN: {
    eyebrow: "DEVICE MOCKUPS & PRESENTATION",
    heading: "Vertex Homes Interface Across Devices",
    lead: "Full-scale renders and interaction visuals for the platform on smartphones, tablets, and wide-format screens.",
    mockupRender: "Mockup Render",
    expand: "Expand",
  },
};

export type SelectedVertexImage = {
  src: string;
  title: string;
  subtitle?: string;
};

type VertexMockupsSectionProps = {
  onSelectImage: (image: SelectedVertexImage) => void;
};

export function VertexMockupsSection({ onSelectImage }: VertexMockupsSectionProps) {
  const { lang } = useLanguage();
  const vertexMockups = vertexMockupsByLang[lang];
  const tr = t[lang];
  return (
    <section className="space-y-8 pt-8">
      <div className="border-b border-[#796D41]/30 pb-4">
        <div className="text-xs font-montserrat font-bold text-[#B8A86C] uppercase tracking-widest mb-1 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B8A86C]" />
          <span>{tr.eyebrow}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black font-montserrat uppercase text-white tracking-tight">
          {tr.heading}
        </h2>
        <p className="text-sm text-white/70 font-sans mt-1 max-w-3xl leading-relaxed">
          {tr.lead}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
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
                <span>{tr.mockupRender}</span>
                <span className="text-[#B8A86C] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {tr.expand} <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
