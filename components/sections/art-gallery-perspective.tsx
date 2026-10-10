"use client";

import { useSyncExternalStore } from "react";
import galleryData from "@/public/gallery-data.json";

type MediaItem = { src: string; type: "image" | "video" };

const subscribeNoop = () => () => {};

export default function ArtGalleryPerspective() {
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

  if (!mounted) return <div className="h-screen bg-black" />;

  const allPhotos = (galleryData as MediaItem[]).filter((item) => item.type === "image");
  
  const half = Math.floor(allPhotos.length / 2);
  const leftItems = allPhotos.slice(0, half);
  const rightItems = allPhotos.slice(half);

  const renderWall = (items: MediaItem[], isLeft: boolean) => (
    <div
      className="absolute top-1/2"
      style={{
        width: "3000px",
        height: "1200px",
        marginTop: "-600px",
        columnCount: 8,
        columnGap: "4px",
        left: isLeft ? "auto" : "50%",
        right: isLeft ? "50%" : "auto",
        transformOrigin: isLeft ? "right center" : "left center",
        transform: `rotateY(${isLeft ? 55 : -55}deg) translateZ(-150px)`,
      }}
    >
      {items.map((item, i) => (
        <div 
          key={i} 
          className="relative w-full mb-[4px] overflow-hidden group"
          style={{ 
            backgroundColor: "#050505",
            border: "1px solid #000",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt=""
            loading="lazy"
            className="w-full h-auto block opacity-80 group-hov:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent mix-blend-overlay" />
        </div>
      ))}
      
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: isLeft 
            ? "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 30%)" 
            : "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 30%)"
        }}
      />
    </div>
  );

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
      style={{ 
        perspective: "1800px",
        backgroundImage: "url('/museum-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="perspective-room-enter relative w-full h-full">
        {renderWall(leftItems, true)}
        {renderWall(rightItems, false)}
        
        <div 
          className="absolute top-0 bottom-0 left-1/2 w-[300px] -translate-x-1/2 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to right, transparent, rgba(0,0,0,0.8) 50%, transparent)",
          }}
        />
      </div>
    </section>
  );
}
