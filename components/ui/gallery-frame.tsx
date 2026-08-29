import React from 'react';
import Image from 'next/image';

interface GalleryFrameProps {
  src: string;
  type?: 'image' | 'video';
  alt?: string;
  aspectRatio?: string;
  className?: string;
  caption?: string;
  theme?: 'light' | 'dark';
}

export function GalleryFrame({
  src,
  type = 'image',
  alt = 'Artwork',
  aspectRatio = 'aspect-[3/4]',
  className = '',
  caption,
  theme = 'dark'
}: GalleryFrameProps) {
  
  const isLight = theme === 'light';
  
  return (
    <div className={`flex flex-col items-start md:items-center group ${className}`}>
      {/* Рама - Минималистичная, без паспарту */}
      <div 
        className={`relative w-full ${aspectRatio} shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:-translate-y-1`}
        style={{
          border: '4px solid #111',
          borderRadius: '2px',
        }}
      >
        <div className="relative w-full h-full bg-[#111] overflow-hidden">
          {type === 'video' ? (
            <video 
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image 
              src={src}
              alt={alt}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none z-20"></div>
        </div>
      </div>
      
      {/* Подпись к картине */}
      {caption && (
        <div className={`mt-4 md:mt-6 pr-4 border-l pl-4 py-1 text-left self-start md:self-center ${isLight ? 'border-gray-300' : 'border-white/20'}`}>
          <p className={`text-[10px] md:text-[11px] font-inter uppercase tracking-[0.2em] ${isLight ? 'text-gray-500' : 'text-white/50'}`}>
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
