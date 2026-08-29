"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import galleryData from "@/public/gallery-data.json";

type MediaItem = { src: string; type: "image" | "video" };

export default function ArtGalleryPerspective() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-screen bg-black" />;

  // Filter out videos, we only want photos as requested
  const allPhotos = (galleryData as MediaItem[]).filter((item) => item.type === "image");
  
  // Split photos for left and right walls (use as many as possible)
  const half = Math.floor(allPhotos.length / 2);
  const leftItems = allPhotos.slice(0, half);
  const rightItems = allPhotos.slice(half);

  // Helper to render a dense masonry wall
  const renderWall = (items: MediaItem[], isLeft: boolean) => (
    <div
      className="absolute top-1/2"
      style={{
        width: "3000px", // very wide wall
        height: "1200px",
        marginTop: "-600px",
        // CSS Columns for perfect masonry without gaps
        columnCount: 8,
        columnGap: "4px",
        
        // 3D placement
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
          {/* We use next/image with object-cover. To make columns work nicely with Next Image fill,
              we can use a static aspect ratio based on a pseudo-random seed, or just let next/image
              render in default flow if we use standard img tags. 
              Actually, for masonry, next/image with layout="responsive" or standard <img> is better. 
              Let's use a standard img tag with loading="lazy" for the prototype to perfectly wrap content. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt=""
            loading="lazy"
            className="w-full h-auto block opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* Lightbox glare overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent mix-blend-overlay" />
        </div>
      ))}
      
      {/* Black gradient mask to fade the far ends of the wall into darkness */}
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
      {/* Immersive 3D Room Container */}
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ translateZ: 800, opacity: 0 }}
        animate={{ translateZ: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* The two walls meeting in the center */}
        {renderWall(leftItems, true)}
        {renderWall(rightItems, false)}
        
        {/* Corner shadow where walls meet */}
        <div 
          className="absolute top-0 bottom-0 left-1/2 w-[300px] -translate-x-1/2 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to right, transparent, rgba(0,0,0,0.8) 50%, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
