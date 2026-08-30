'use client';

import React, { useState, useEffect } from 'react';

export default function WideMosaicPage() {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsMobile(w <= 900);

      const availableW = w - 16;
      const availableH = h - 16;
      const s = Math.min(availableW / 1920, availableH / 920, 1);
      setScaleFactor(Math.max(0.2, s));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = {
    bg: '#0F0F11',
    cardBg: '#1A1A1E',
    border: 'rgba(255, 255, 255, 0.45)',
    corner: '#14F1D9'
  };

  const totalW = 1920;
  const totalH = 920;

  // Portrait (Full Height = 920px, Width = 557px)
  const targetSilhouetteH = totalH;
  const targetSilhouetteW = Math.round(846 * (totalH / 1398)); // 557 px
  const s = totalH / 1398;
  const G = 1.9; // 7.5px visual gap

  // Mobile portrait dimensions (exact 420 x 694px or scaled)
  const mobSilhouetteW = 420;
  const mobSilhouetteH = Math.round(420 * (1398 / 846)); // 694px
  const mobS = mobSilhouetteH / 1398;
  const mobG = 1.6;

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

  // Desktop Sketches Grid
  const desktopSketchTiles = [
    { id: 'SK_VID', x: 571, y: 263, w: 332, h: 655, isVideo: true, src: 'video_145@04-08-2026_22-24-35.mp4' },

    { id: 'R1_1', x: 911,  y: 263, w: 196, h: 236, src: 'photo_3220@04-08-2026_21-04-08.jpg' },
    { id: 'R1_2', x: 1115, y: 263, w: 166, h: 236, src: 'photo_3217@04-08-2026_21-04-08.jpg' },
    { id: 'R1_3', x: 1289, y: 263, w: 382, h: 236, src: 'photo_2988@31-07-2026_18-20-25.jpg' },
    { id: 'R1_4', x: 1679, y: 263, w: 233, h: 236, src: 'photo_2026-08-30_02-47-41 (3).jpg' },

    { id: 'R2_1', x: 911,  y: 507, w: 200, h: 247, src: 'photo_2026-08-27_17-30-20 (2).jpg' },
    { id: 'R2_2', x: 1119, y: 507, w: 188, h: 247, src: 'photo_2026-08-27_17-30-21 (9).jpg' },
    { id: 'R2_3', x: 1315, y: 507, w: 154, h: 247, src: 'photo_2986@31-07-2026_18-19-24.jpg' },
    { id: 'R2_4', x: 1477, y: 507, w: 222, h: 247, src: 'photo_3218@04-08-2026_21-04-08.jpg' },
    { id: 'R2_5', x: 1707, y: 507, w: 205, h: 247, src: 'photo_2026-08-27_17-30-19 (6).jpg' },

    { id: 'R3_1', x: 911,  y: 762, w: 221, h: 156, src: 'photo_3076@31-07-2026_19-44-02.jpg' },
    { id: 'R3_2', x: 1140, y: 762, w: 164, h: 156, src: 'photo_2026-08-27_19-29-35.jpg' },
    { id: 'R3_3', x: 1312, y: 762, w: 249, h: 156, src: 'photo_2026-08-30_02-47-41 (4).jpg' },
    { id: 'R3_4', x: 1569, y: 762, w: 121, h: 156, src: 'photo_2026-08-27_17-30-18 (2).jpg' },
    { id: 'R3_5', x: 1698, y: 762, w: 214, h: 156, src: 'photo_2026-08-27_17-30-19 (4).jpg' },
  ];

  // Mobile Sections
  const mobileRow1_3 = [
    { src: 'photo_3220@04-08-2026_21-04-08.jpg', objectPos: 'center center' },
    { src: 'photo_3217@04-08-2026_21-04-08.jpg', objectPos: 'center -3px' },
    { src: 'photo_2026-08-30_02-47-41 (3).jpg', objectPos: 'center center' },
  ];

  const mobileHeroKids = 'photo_2988@31-07-2026_18-20-25.jpg';

  const mobileRow3_3 = [
    { src: 'photo_2026-08-27_17-30-20 (2).jpg', objectPos: 'center center' },
    { src: 'photo_2026-08-27_17-30-21 (9).jpg', objectPos: 'center -4px' },
    { src: 'photo_2986@31-07-2026_18-19-24.jpg', objectPos: 'center center' },
  ];

  const mobileRow4_2 = [
    { src: 'photo_3218@04-08-2026_21-04-08.jpg', objectPos: 'center center' },
    { src: 'photo_2026-08-27_17-30-19 (6).jpg', objectPos: 'center center' },
  ];

  const mobileRow5_3 = [
    { src: 'photo_3076@31-07-2026_19-44-02.jpg', objectPos: 'center center' },
    { src: 'photo_2026-08-27_19-29-35.jpg', objectPos: 'center center' },
    { src: 'photo_2026-08-27_17-30-18 (2).jpg', objectPos: 'center center' },
  ];

  const mobileRow6_2 = [
    { src: 'photo_2026-08-30_02-47-41 (4).jpg', objectPos: 'center center' },
    { src: 'photo_2026-08-27_17-30-19 (4).jpg', objectPos: 'center center' },
  ];

  const CornerMarks = ({ size = 8 }: { size?: number }) => (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: `${size}px`, height: `${size}px`, borderTop: `1.8px solid ${theme.corner}`, borderLeft: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: `${size}px`, height: `${size}px`, borderTop: `1.8px solid ${theme.corner}`, borderRight: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: `${size}px`, height: `${size}px`, borderBottom: `1.8px solid ${theme.corner}`, borderLeft: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: `${size}px`, height: `${size}px`, borderBottom: `1.8px solid ${theme.corner}`, borderRight: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
    </>
  );

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: '#FFFFFF',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        overflowY: isMobile ? 'auto' : 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '12px 8px 32px' : '0',
        margin: '0',
        boxSizing: 'border-box',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}
    >
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          background-color: #0F0F11;
        }
        img, video {
          image-rendering: auto;
        }
        @media (max-width: 900px) {
          .desktop-view {
            display: none !important;
          }
          .mobile-view {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .desktop-view {
            display: flex !important;
          }
          .mobile-view {
            display: none !important;
          }
        }
      `}</style>

      {/* ================= DESKTOP 1920 x 920 SCALED VIEW ================= */}
      <div
        className="desktop-view"
        style={{
          width: `${totalW * scaleFactor}px`,
          height: `${totalH * scaleFactor}px`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: `${totalW}px`,
            height: `${totalH}px`,
            transform: `scale(${scaleFactor})`,
            transformOrigin: 'top left',
            backgroundColor: theme.bg,
            boxSizing: 'border-box'
          }}
        >
          {/* LEFT SILHOUETTE PORTRAIT (x: 8px, y: 0..920, w: 557px, h: 920px) */}
          <div
            style={{
              position: 'absolute',
              left: '8px',
              top: '0px',
              width: `${targetSilhouetteW}px`,
              height: `${targetSilhouetteH}px`,
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

          {/* RIGHT SKETCHES TILES */}
          {desktopSketchTiles.map((t, idx) => (
            <div
              key={`sk-${idx}`}
              style={{
                position: 'absolute',
                left: `${t.x}px`,
                top: `${t.y}px`,
                width: `${t.w}px`,
                height: `${t.h}px`,
                overflow: 'hidden',
                backgroundColor: theme.cardBg,
                border: `1.2px solid ${theme.border}`,
                boxSizing: 'border-box'
              }}
            >
              {/* Glowing Cyan Corner Marks */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: `2.0px solid ${theme.corner}`, borderLeft: `2.0px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px', borderTop: `2.0px solid ${theme.corner}`, borderRight: `2.0px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '10px', height: '10px', borderBottom: `2.0px solid ${theme.corner}`, borderLeft: `2.0px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: `2.0px solid ${theme.corner}`, borderRight: `2.0px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />

              {t.isVideo ? (
                <video
                  src={`/art-sketches/${encodeURIComponent(t.src)}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={`/art-sketches/${encodeURIComponent(t.src)}`}
                  alt="Sketch"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE VERTICAL VIEW (< 900px) ================= */}
      <div
        className="mobile-view"
        style={{
          display: 'none',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '420px',
          gap: '8px',
          margin: '0 auto'
        }}
      >
        {/* 1. Raw Masked Silhouette Portrait (No outer card padding, exactly flush bottom!) */}
        <div
          style={{
            position: 'relative',
            width: `${mobSilhouetteW}px`,
            height: `${mobSilhouetteH}px`,
            WebkitMaskImage: "url('/Group%2047.png')",
            maskImage: "url('/Group%2047.png')",
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            overflow: 'hidden',
            margin: '0 auto'
          }}
        >
          {portraitTiles.map((t, idx) => {
            const rx = t.x * mobS + mobG;
            const ry = t.y * mobS + mobG;
            const rw = t.w * mobS - (mobG * 2);
            const rh = t.h * mobS - (mobG * 2);

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
              <div key={`mob-p-${idx}`} style={style}>
                {!t.isPolygon && (
                  <>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', borderTop: `1.8px solid ${theme.corner}`, borderLeft: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', borderTop: `1.8px solid ${theme.corner}`, borderRight: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '8px', height: '8px', borderBottom: `1.8px solid ${theme.corner}`, borderLeft: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', borderBottom: `1.8px solid ${theme.corner}`, borderRight: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
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
                    <path d={`M 0 8 L 0 0 L 8 0`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw*0.809 - 8} 0 L ${rw*0.809} 0 L ${rw*0.809} 8`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw*0.809} ${rh*0.535 - 8} L ${rw*0.809} ${rh*0.535} L ${rw*0.809 + 8} ${rh*0.535}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw - 8} ${rh*0.535} L ${rw} ${rh*0.535} L ${rw} ${rh*0.535 + 8}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw} ${rh - 8} L ${rw} ${rh} L ${rw - 8} ${rh}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw*0.191 + 8} ${rh} L ${rw*0.191} ${rh} L ${rw*0.191} - 8`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw*0.191} ${rh*0.33 + 8} L ${rw*0.191} ${rh*0.33} L ${rw*0.191 - 8} ${rh*0.33}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                    <path d={`M 8 ${rh*0.33} L 0 ${rh*0.33} L 0 ${rh*0.33 - 8}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
                  </svg>
                )}

                {t.type === 'face' && (
                  <img
                    src="/Group%2047.png"
                    alt="Face"
                    style={{
                      position: 'absolute',
                      left: `-${t.x * mobS}px`,
                      top: `-${t.y * mobS}px`,
                      width: `${mobSilhouetteW}px`,
                      height: `${mobSilhouetteH}px`,
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

        {/* 2. Top Video Hero Card (Пододвинуто ещё на пару пикселей ближе!) */}
        <div
          style={{
            width: `${mobSilhouetteW}px`,
            height: '340px',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: theme.cardBg,
            border: `1.2px solid ${theme.border}`,
            boxSizing: 'border-box',
            margin: '-2px auto 0'
          }}
        >
          <CornerMarks size={10} />
          <video
            src="/art-sketches/video_145@04-08-2026_22-24-35.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Row 1: Symmetrical 3-in-a-row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', width: `${mobSilhouetteW}px` }}>
          {mobileRow1_3.map((item, idx) => (
            <div
              key={`r1-${idx}`}
              style={{
                height: '135px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: theme.cardBg,
                border: `1.2px solid ${theme.border}`,
                boxSizing: 'border-box'
              }}
            >
              <CornerMarks size={8} />
              <img
                src={`/art-sketches/${encodeURIComponent(item.src)}`}
                alt="Sketch"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: item.objectPos || 'center center'
                }}
              />
            </div>
          ))}
        </div>

        {/* Row 2: Hero Wide Panoramic Sketch (Kids Illustration) */}
        <div
          style={{
            width: `${mobSilhouetteW}px`,
            height: '180px',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: theme.cardBg,
            border: `1.2px solid ${theme.border}`,
            boxSizing: 'border-box'
          }}
        >
          <CornerMarks size={10} />
          <img
            src={`/art-sketches/${encodeURIComponent(mobileHeroKids)}`}
            alt="Sketch"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Row 3: Symmetrical 3-in-a-row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', width: `${mobSilhouetteW}px` }}>
          {mobileRow3_3.map((item, idx) => (
            <div
              key={`r3-${idx}`}
              style={{
                height: '145px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: theme.cardBg,
                border: `1.2px solid ${theme.border}`,
                boxSizing: 'border-box'
              }}
            >
              <CornerMarks size={8} />
              <img
                src={`/art-sketches/${encodeURIComponent(item.src)}`}
                alt="Sketch"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: item.objectPos || 'center center'
                }}
              />
            </div>
          ))}
        </div>

        {/* Row 4: Symmetrical 2-in-a-row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', width: `${mobSilhouetteW}px` }}>
          {mobileRow4_2.map((item, idx) => (
            <div
              key={`r4-${idx}`}
              style={{
                height: '165px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: theme.cardBg,
                border: `1.2px solid ${theme.border}`,
                boxSizing: 'border-box'
              }}
            >
              <CornerMarks size={8} />
              <img
                src={`/art-sketches/${encodeURIComponent(item.src)}`}
                alt="Sketch"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: item.objectPos || 'center center'
                }}
              />
            </div>
          ))}
        </div>

        {/* Row 5: Symmetrical 3-in-a-row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', width: `${mobSilhouetteW}px` }}>
          {mobileRow5_3.map((item, idx) => (
            <div
              key={`r5-${idx}`}
              style={{
                height: '135px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: theme.cardBg,
                border: `1.2px solid ${theme.border}`,
                boxSizing: 'border-box'
              }}
            >
              <CornerMarks size={8} />
              <img
                src={`/art-sketches/${encodeURIComponent(item.src)}`}
                alt="Sketch"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: item.objectPos || 'center center'
                }}
              />
            </div>
          ))}
        </div>

        {/* Row 6: Symmetrical 2-in-a-row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', width: `${mobSilhouetteW}px` }}>
          {mobileRow6_2.map((item, idx) => (
            <div
              key={`r6-${idx}`}
              style={{
                height: '150px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: theme.cardBg,
                border: `1.2px solid ${theme.border}`,
                boxSizing: 'border-box'
              }}
            >
              <CornerMarks size={8} />
              <img
                src={`/art-sketches/${encodeURIComponent(item.src)}`}
                alt="Sketch"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: item.objectPos || 'center center'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
