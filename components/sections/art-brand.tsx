import { ArtCard } from "@/components/ui/art-card";

export function ArtBrand() {
  return (
    <section className="container mx-auto px-6 py-28 border-b border-white/10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4 h-[380px] sm:h-[460px]">
          <ArtCard src="/placeholder.jpg" alt="Gallery image" title="Брендированная продукция" className="col-span-1 h-full" />
          <ArtCard src="/placeholder.jpg" alt="Gallery image" title="Набор для ёлочных игрушек" className="col-span-1 h-full" />
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
            Амбассадор бренда & Продукция
          </h2>
          <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
            <p>
              Была официальным <strong className="text-white">амбассадором</strong> крупнейшего производителя смолы и художественных материалов в России.
            </p>
            <p>
              В рамках партнерства мы выпустили совместную брендированную продукцию: <strong className="text-[#14F1D9]">эксклюзивную коробку для создания ёлочных игрушек</strong> из смолы, которая разошлась по всей стране.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
