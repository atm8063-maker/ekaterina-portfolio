export function ArtCollage() {
  return (
    <section id="collage" className="relative w-full h-[calc(100vh-80px)] min-h-[500px] max-h-[850px] overflow-hidden bg-white flex border-b border-background/10 scroll-mt-20">
      <div className="flex-1 relative overflow-hidden h-full bg-white">
        <div
          className="animate-marquee-vertical w-full flex flex-col"
          style={{ ["--marquee-duration" as string]: "50s" }}
        >
          <img src="/collage-3.jpg" alt="Коллаж работ из смолы" className="w-full h-auto min-h-[150vh] object-cover block" />
          <img src="/collage-3.jpg" alt="Коллаж работ из смолы" className="w-full h-auto min-h-[150vh] object-cover block" />
        </div>
      </div>
    </section>
  );
}
