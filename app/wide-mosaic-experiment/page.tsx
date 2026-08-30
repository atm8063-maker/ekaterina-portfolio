'use client';

import React, { useState, useEffect } from 'react';

export default function WideMosaicExperimentPage() {
  const [scaleFactor, setScaleFactor] = useState(0.85);
  const [isMobile, setIsMobile] = useState(false);
  const [blurAmount, setBlurAmount] = useState(5);
  const [brightness, setBrightness] = useState(0.40);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsMobile(w <= 900);

      const availableW = w - 40;
      const availableH = h - 40;
      const s = Math.min(availableW / 560, availableH / 924, 0.95);
      setScaleFactor(Math.max(0.35, s));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = {
    bg: '#08080A',
    cardBg: '#1A1A1E',
    border: 'rgba(255, 255, 255, 0.45)',
    corner: '#14F1D9'
  };

  // Silhouette scale: Base 846 x 1398 -> Target 558 x 920
  const targetSilhouetteH = 920;
  const targetSilhouetteW = 558;
  const s = targetSilhouetteH / 1398;
  const G = 1.9;

  const portraitTiles = [
    { id: 'A1', x: 0,   y: 0,    w: 190, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-20 (5).jpg' },
    { id: 'A2', x: 196, y: 0,    w: 144, h: 210, type: 'img', src: 'photo_3329@04-08-2026_21-08-45.jpg' },
    { id: 'A3', x: 346, y: 0,    w: 180, h: 180, type: 'img', src: 'photo_2026-08-27_17-30-20 (5).jpg' },
    { id: 'A4', x: 532, y: 0,    w: 150, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-20 (7).jpg' },
    { id: 'A5', x: 688, y: 0,    w: 158, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-21 (8).jpg' },

    { id: 'B1', x: 0,   y: 178,  w: 190, h: 130, type: 'img', src: 'photo_2026-08-27_17-30-19.jpg' },
    { id: 'B2', x: 196, y: 216,  w: 144, h: 182, type: 'video', src: 'video_2026-08-04_22-43-39 (4).mp4' },
    { id: 'B3', x: 346, y: 186,  w: 180, h: 148, type: 'face' },
    { id: 'B4', x: 532, y: 178,  w: 150, h: 156, type: 'img', src: 'photo_2026-08-27_17-30-19 (2).jpg' },
    { id: 'B5', x: 688, y: 178,  w: 158, h: 156, type: 'img', src: 'photo_2026-08-27_17-30-19 (3).jpg' },

    { id: 'C1', x: 0,   y: 314,  w: 110, h: 290, type: 'img', src: 'photo_2026-08-27_17-30-21 (2).jpg' },
    { id: 'C2', x: 116, y: 314,  w: 74,  h: 156, type: 'img', src: 'photo_3333@04-08-2026_21-08-45.jpg' },
    { id: 'C3', x: 116, y: 476,  w: 108, h: 128, type: 'img', src: 'photo_2026-08-27_17-30-21 (5).jpg' },

    {
      id: 'C4',
      isPolygon: true,
      x: 196, y: 404, w: 178, h: 200,
      clipPath: 'polygon(0% 0%, 80.9% 0%, 80.9% 53.5%, 100% 53.5%, 100% 100%, 19.1% 100%, 19.1% 33%, 0% 33%)',
      type: 'img',
      src: 'photo_2026-08-30_02-47-41 (5).jpg'
    },

    { id: 'C5', x: 346, y: 340,  w: 406, h: 164, type: 'face' },
    { id: 'C6', x: 758, y: 340,  w: 88,  h: 164, type: 'img', src: 'photo_2026-08-27_17-30-21 (4).jpg' },

    { id: 'D1', x: 0,   y: 610,  w: 224, h: 232, type: 'video', src: 'video_2026-08-29_18-25-41.mp4' },
    { id: 'D2', x: 230, y: 610,  w: 144, h: 126, type: 'img', src: 'photo_2026-08-29_17-06-15.jpg' },
    { id: 'D3', x: 380, y: 510,  w: 286, h: 224, type: 'face' },
    { id: 'D4', x: 672, y: 510,  w: 174, h: 224, type: 'img', src: 'photo_2960@31-07-2026_18-19-07.jpg' },

    { id: 'E1', x: 230, y: 742,  w: 144, h: 184, type: 'img', src: 'photo_3334@04-08-2026_21-08-45.jpg' },
    { id: 'E2', x: 380, y: 740,  w: 152, h: 184, type: 'face' },
    { id: 'E3', x: 538, y: 740,  w: 144, h: 184, type: 'img', src: 'photo_2026-08-29_20-12-50.jpg' },
    { id: 'E4', x: 688, y: 740,  w: 158, h: 250, type: 'video', src: 'video_2026-08-29_20-12-42.mp4' },

    { id: 'G1', x: 0,   y: 848,  w: 224, h: 266, type: 'img', src: 'photo_2026-08-29_20-12-29.jpg' },
    { id: 'F3', x: 230, y: 932,  w: 452, h: 182, type: 'video', src: 'video_48@31-07-2026_19-44-20.mp4' },
    { id: 'F4', x: 688, y: 996,  w: 158, h: 128, type: 'img', src: 'photo_3331@04-08-2026_21-08-45.jpg' },

    { id: 'F1', x: 0,   y: 1120, w: 160, h: 278, type: 'img', src: 'photo_2026-08-27_17-30-20.jpg' },
    { id: 'F2', x: 166, y: 1120, w: 166, h: 278, type: 'img', src: 'photo_3330@04-08-2026_21-08-45.jpg' },
    { id: 'G2', x: 338, y: 1120, w: 194, h: 278, type: 'face', label: 'DECOLLETE' },
    { id: 'G3', x: 538, y: 1120, w: 144, h: 278, type: 'img', src: 'photo_2026-08-27_17-30-21 (3).jpg' },
    { id: 'G4', x: 688, y: 1130, w: 158, h: 268, type: 'img', src: 'photo_2026-08-27_17-30-20 (4).jpg' }
  ];

  // 6 Narrow Marquee Tracks (Tiles reduced in size by 2x for fine-grain background tapestry)
  const track1 = [
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

  const tracks = [
    { data: track1, dir: 'left', speed: '44s' },
    { data: track2, dir: 'right', speed: '52s' },
    { data: track3, dir: 'left', speed: '38s' },
    { data: track4, dir: 'right', speed: '48s' },
    { data: track5, dir: 'left', speed: '42s' },
    { data: track6, dir: 'right', speed: '50s' },
  ];

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: '#FFFFFF',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}
    >
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .marquee-track-left {
          display: flex;
          gap: 10px;
          width: max-content;
          animation: marqueeLeft var(--speed, 40s) linear infinite;
        }
        .marquee-track-right {
          display: flex;
          gap: 10px;
          width: max-content;
          animation: marqueeRight var(--speed, 45s) linear infinite;
        }

        .paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* ================= BACKGROUND: 6 NARROW DRIFTING LANES ================= */}
      <div
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
            className={`${tr.dir === 'left' ? 'marquee-track-left' : 'marquee-track-right'} ${isPaused ? 'paused' : ''}`}
            style={{ '--speed': tr.speed } as React.CSSProperties}
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
                  backgroundColor: '#16161A',
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
          background: 'radial-gradient(ellipse at center, rgba(8,8,10,0.2) 0%, rgba(8,8,10,0.85) 75%, rgba(8,8,10,0.98) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* ================= FOREGROUND: PERFECT CENTERED CRISP PORTRAIT ================= */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: `${targetSilhouetteW}px`,
          height: `${targetSilhouetteH}px`,
          transform: `scale(${scaleFactor})`,
          transformOrigin: 'center center',
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

      {/* ================= FLOATING CONTROLS (QUICK TWEAKS) ================= */}
      <div
        style={{
          position: 'fixed',
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
          boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
          fontSize: '13px',
          color: '#E0E0E0'
        }}
      >
        <a
          href="/wide-mosaic"
          style={{
            color: '#14F1D9',
            textDecoration: 'none',
            fontWeight: 600,
            paddingRight: '8px',
            borderRight: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          ← Классический вид
        </a>

        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
          <span>Блюр:</span>
          <input
            type="range"
            min="0"
            max="16"
            step="1"
            value={blurAmount}
            onChange={(e) => setBlurAmount(Number(e.target.value))}
            style={{ width: '70px', accentColor: '#14F1D9', cursor: 'pointer' }}
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
            style={{ width: '70px', accentColor: '#14F1D9', cursor: 'pointer' }}
          />
          <span style={{ minWidth: '28px' }}>{Math.round(brightness * 100)}%</span>
        </label>

        <button
          onClick={() => setIsPaused(!isPaused)}
          style={{
            backgroundColor: isPaused ? '#14F1D9' : 'rgba(255,255,255,0.1)',
            color: isPaused ? '#000' : '#FFF',
            border: 'none',
            borderRadius: '16px',
            padding: '4px 12px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.2s'
          }}
        >
          {isPaused ? '▶ Старт' : '⏸ Пауза'}
        </button>
      </div>
    </div>
  );
}
