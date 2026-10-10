export function ArtCollage() {
  return (
    <section id="collage" className="relative w-full h-[calc(100vh-80px)] min-h-[500px] max-h-[850px] overflow-hidden bg-white flex border-b border-background/10 scroll-mt-20">
      <div className="marquee-vertical-bg-single-wrap flex-1 relative h-full bg-white">
        <div
          className="marquee-vertical-bg-single"
          style={{
            ["--marquee-image" as string]: "url(/collage-3.jpg)",
            ["--marquee-tile-w" as string]: "1121",
            ["--marquee-tile-h" as string]: "1920",
            ["--marquee-duration" as string]: "50s",
          }}
          role="img"
          aria-label="Коллаж работ из смолы"
        />
      </div>
    </section>
  );
}
