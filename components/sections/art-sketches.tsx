'use client';

import React, { useState, useEffect } from 'react';
import { SILHOUETTE_SPOTS } from '@/lib/mosaic/spots';

export interface ArtSketchesProps {
  className?: string;
  defaultBlur?: number;       // default: 5
  defaultBrightness?: number; // default: 1.0 (100% brightness)
  showControls?: boolean;     // default: false
}

export function ArtSketches({
  className = '',
  defaultBlur = 5,
  defaultBrightness = 1.0,
  showControls = false
}: ArtSketchesProps) {
  const [scaleFactor, setScaleFactor] = useState(0.85);
  const [blurAmount, setBlurAmount] = useState(defaultBlur);
  const [brightness, setBrightness] = useState(defaultBrightness);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const targetSilhouetteH = 920;
  const targetSilhouetteW = 558;
  const s = targetSilhouetteH / 1398;
  const G = 1.9;

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mob = w < 768;
      setIsMobile(mob);

      const availableW = w - (mob ? 24 : 64);
      const availableH = h - (mob ? 130 : 64);
      const scale = Math.min(availableW / targetSilhouetteW, availableH / targetSilhouetteH, 0.95);
      setScaleFactor(Math.max(0.25, scale));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = {
    bg: '#08080A',
    cardBg: 'var(--color-surface)',
    border: 'rgba(255, 255, 255, 0.45)',
    corner: 'var(--color-primary)'
  };

  const portraitTiles = SILHOUETTE_SPOTS;

  type TrackItem = { src: string; w: number; isVideo?: boolean };

  // 6 Narrow Background Tracks
  const track1: TrackItem[] = [
    { src: 'photo_3220@04-08-2026_21-04-08.jpg', w: 115 },
    { src: 'photo_3217@04-08-2026_21-04-08.jpg', w: 95 },
    { src: 'photo_2988@31-07-2026_18-20-25.jpg', w: 195 },
    { src: 'photo_2026-08-30_02-47-41 (3).jpg', w: 130 },
    { src: 'video_145@04-08-2026_22-24-35.mp4', w: 105, isVideo: true },
    { src: 'photo_2026-08-27_17-30-20 (2).jpg', w: 120 },
  ];

  const track2 = [
    { src: 'photo_2026-08-27_17-30-21 (9).jpg', w: 110 },
    { src: 'photo_2986@31-07-2026_18-19-24.jpg', w: 95 },
    { src: 'photo_3218@04-08-2026_21-04-08.jpg', w: 135 },
    { src: 'photo_2026-08-27_17-30-19 (6).jpg', w: 125 },
    { src: 'photo_3076@31-07-2026_19-44-02.jpg', w: 135 },
    { src: 'photo_2026-08-27_19-29-35.jpg', w: 100 },
  ];

  const track3 = [
    { src: 'photo_2026-08-30_02-47-41 (4).jpg', w: 145 },
    { src: 'photo_2026-08-27_17-30-18 (2).jpg', w: 80 },
    { src: 'photo_2026-08-27_17-30-19 (4).jpg', w: 130 },
    { src: 'video_145@04-08-2026_22-24-35.mp4', w: 115, isVideo: true },
    { src: 'photo_2988@31-07-2026_18-20-25.jpg', w: 185 },
    { src: 'photo_3220@04-08-2026_21-04-08.jpg', w: 110 },
  ];

  const track4 = [
    { src: 'photo_2026-08-27_17-30-20 (2).jpg', w: 125 },
    { src: 'photo_3218@04-08-2026_21-04-08.jpg', w: 130 },
    { src: 'photo_2026-08-30_02-47-41 (3).jpg', w: 135 },
    { src: 'photo_2986@31-07-2026_18-19-24.jpg', w: 95 },
    { src: 'photo_3076@31-07-2026_19-44-02.jpg', w: 140 },
    { src: 'photo_2026-08-27_17-30-21 (9).jpg', w: 115 },
  ];

  const track5 = [
    { src: 'photo_3217@04-08-2026_21-04-08.jpg', w: 95 },
    { src: 'video_145@04-08-2026_22-24-35.mp4', w: 110, isVideo: true },
    { src: 'photo_2026-08-27_17-30-19 (6).jpg', w: 130 },
    { src: 'photo_2026-08-30_02-47-41 (4).jpg', w: 145 },
    { src: 'photo_2988@31-07-2026_18-20-25.jpg', w: 190 },
    { src: 'photo_2026-08-27_17-30-18 (2).jpg', w: 85 },
  ];

  const track6 = [
    { src: 'photo_2026-08-27_19-29-35.jpg', w: 105 },
    { src: 'photo_3220@04-08-2026_21-04-08.jpg', w: 115 },
    { src: 'photo_2026-08-27_17-30-19 (4).jpg', w: 135 },
    { src: 'video_145@04-08-2026_22-24-35.mp4', w: 115, isVideo: true },
    { src: 'photo_3218@04-08-2026_21-04-08.jpg', w: 130 },
    { src: 'photo_2026-08-27_17-30-20 (2).jpg', w: 120 },
  ];

  const tracks: { data: TrackItem[]; dir: string; speed: string }[] = [
    { data: track1, dir: 'left', speed: '44s' },
    { data: track2, dir: 'right', speed: '52s' },
    { data: track3, dir: 'left', speed: '38s' },
    { data: track4, dir: 'right', speed: '48s' },
    { data: track5, dir: 'left', speed: '42s' },
    { data: track6, dir: 'right', speed: '50s' },
  ];

  return (
    <section
      id="sketches-portraits"
      className={`relative w-full h-screen min-h-[680px] overflow-hidden flex flex-col items-center justify-center bg-[#08080A] ${className}`}
    >
      {/* ================= BACKGROUND: 6 NARROW DRIFTING LANES ================= */}
      <div
        className={`marquee-pause ${isPaused ? 'marquee-paused' : ''}`}
        style={{
          position: 'absolute',
          inset: '-30px',
          zIndex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '10px',
          filter: `blur(${blurAmount}px) brightness(${brightness}) saturate(1.2)`,
          transform: 'scale(1.04)',
          pointerEvents: 'none',
          opacity: 0.95
        }}
      >
        {tracks.map((tr, idx) => (
          <div
            key={`tr-${idx}`}
            className={`marquee-track gap-2.5 ${tr.dir === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
            style={{ ['--marquee-duration' as string]: tr.speed }}
          >
            {[...tr.data, ...tr.data, ...tr.data].map((item, i) => (
              <div
                key={`tr-${idx}-${i}`}
                style={{
                  width: `${item.w}px`,
                  height: '135px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backgroundColor: 'var(--color-surface)',
                  flexShrink: 0
                }}
              >
                {item.isVideo ? (
                  <video
                    src={`/art-sketches/${encodeURIComponent(item.src)}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src={`/art-sketches/${encodeURIComponent(item.src)}`}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Cinematic Vignette Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'radial-gradient(ellipse at center, rgba(8,8,10,0.15) 0%, rgba(8,8,10,0.80) 75%, rgba(8,8,10,0.98) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* ================= TITLE: ПОРТРЕТЫ & СКЕТЧИ ================= */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-12 z-20 pointer-events-none max-w-[240px] sm:max-w-md">
        <h2 className="font-montserrat font-black uppercase text-xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          Портреты <span className="text-primary">&</span> <br /> Скетчи
        </h2>
      </div>

      {/* ================= FOREGROUND: PERFECT SCALED BOUNDING BOX ================= */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: `${targetSilhouetteW * scaleFactor}px`,
          height: `${targetSilhouetteH * scaleFactor}px`,
          marginTop: isMobile ? '40px' : '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: `${targetSilhouetteW}px`,
            height: `${targetSilhouetteH}px`,
            transform: `scale(${scaleFactor})`,
            transformOrigin: 'top left',
            filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 45px rgba(20,241,217,0.35))',
            pointerEvents: 'auto'
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              WebkitMaskImage: "url('/Group%2047.png')",
              maskImage: "url('/Group%2047.png')",
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              overflow: 'hidden'
            }}
          >
            {portraitTiles.map((t, idx) => {
              const rx = t.x * s + G;
              const ry = t.y * s + G;
              const rw = t.w * s - (G * 2);
              const rh = t.h * s - (G * 2);

              const style: React.CSSProperties = {
                position: 'absolute',
                left: `${rx}px`,
                top: `${ry}px`,
                width: `${rw}px`,
                height: `${rh}px`,
                overflow: 'hidden',
                backgroundColor: theme.cardBg,
                border: t.isPolygon ? 'none' : `1.2px solid ${theme.border}`,
                boxSizing: 'border-box',
                clipPath: t.clipPath || undefined
              };

              const imageSrc = t.src ? `/art-portraits/${encodeURIComponent(t.src)}` : '';

              return (
                <div key={idx} style={style}>
                  {!t.isPolygon && (
                    <>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: `2.0px solid ${theme.corner}`, borderLeft: `2.0px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                      <div style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px', borderTop: `2.0px solid ${theme.corner}`, borderRight: `2.0px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '10px', height: '10px', borderBottom: `2.0px solid ${theme.corner}`, borderLeft: `2.0px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: `2.0px solid ${theme.corner}`, borderRight: `2.0px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                    </>
                  )}

                  {t.isPolygon && (
                    <svg
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3 }}
                      viewBox={`0 0 ${rw} ${rh}`}
                    >
                      <polygon
                        points={`0,0 ${rw*0.809},0 ${rw*0.809},${rh*0.535} ${rw},${rh*0.535} ${rw},${rh} ${rw*0.191},${rh} ${rw*0.191},${rh*0.33} 0,${rh*0.33}`}
                        fill="none"
                        stroke={theme.border}
                        strokeWidth="1.5"
                      />
                      <path d={`M 0 10 L 0 0 L 10 0`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                      <path d={`M ${rw*0.809 - 10} 0 L ${rw*0.809} 0 L ${rw*0.809} 10`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                      <path d={`M ${rw*0.809} ${rh*0.535 - 10} L ${rw*0.809} ${rh*0.535} L ${rw*0.809 + 10} ${rh*0.535}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                      <path d={`M ${rw - 10} ${rh*0.535} L ${rw} ${rh*0.535} L ${rw} ${rh*0.535 + 10}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                      <path d={`M ${rw} ${rh - 10} L ${rw} ${rh} L ${rw - 10} ${rh}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                      <path d={`M ${rw*0.191 + 10} ${rh} L ${rw*0.191} ${rh} L ${rw*0.191} - 10`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                      <path d={`M ${rw*0.191} ${rh*0.33 + 10} L ${rw*0.191} ${rh*0.33} L ${rw*0.191 - 10} ${rh*0.33}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                      <path d={`M 10 ${rh*0.33} L 0 ${rh*0.33} L 0 ${rh*0.33 - 10}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                    </svg>
                  )}

                  {t.type === 'face' && (
                    <img
                      src="/Group%2047.png"
                      alt="Face"
                      style={{
                        position: 'absolute',
                        left: `-${t.x * s}px`,
                        top: `-${t.y * s}px`,
                        width: `${targetSilhouetteW}px`,
                        height: `${targetSilhouetteH}px`,
                        maxWidth: 'none'
                      }}
                    />
                  )}

                  {t.type === 'video' && (
                    <video
                      src={`/art-portraits/${encodeURIComponent(t.src!)}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}

                  {t.type === 'img' && (
                    <img
                      src={imageSrc}
                      alt="Artwork"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Controls (Optional for debugging/tweaking) */}
      {showControls && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(15, 15, 17, 0.88)',
            backdropFilter: 'blur(12px)',
            padding: '10px 16px',
            borderRadius: '30px',
            border: '1px solid rgba(255,255,255,0.15)',
            fontSize: '13px',
            color: '#E0E0E0'
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <span>Блюр:</span>
            <input
              type="range"
              min="0"
              max="16"
              step="1"
              value={blurAmount}
              onChange={(e) => setBlurAmount(Number(e.target.value))}
              style={{ width: '70px', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
            />
            <span style={{ minWidth: '24px' }}>{blurAmount}px</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <span>Яркость:</span>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              style={{ width: '70px', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
            />
            <span style={{ minWidth: '28px' }}>{Math.round(brightness * 100)}%</span>
          </label>

          <button
            onClick={() => setIsPaused(!isPaused)}
            style={{
              backgroundColor: isPaused ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
              color: isPaused ? 'var(--color-background)' : '#FFF',
              border: 'none',
              borderRadius: '16px',
              padding: '4px 12px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            {isPaused ? '▶ Старт' : '⏸ Пауза'}
          </button>
        </div>
      )}
    </section>
  );
}

export default ArtSketches;
