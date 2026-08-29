import Image from "next/image";

export function ArtCard({ src, alt, title, className = "" }: { src: string; alt: string; title?: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group cursor-pointer bg-surface border border-white/10 ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover transition-all duration-700 filter grayscale sepia-[.2] hue-rotate-[160deg] opacity-70 group-hover:filter-none group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity" />
      {title && (
        <div className="absolute bottom-4 left-4 right-4 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <p className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] drop-shadow-md">{title}</p>
        </div>
      )}
    </div>
  );
}
