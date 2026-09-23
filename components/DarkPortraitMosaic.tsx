'use client';

import React from 'react';

export interface DarkPortraitMosaicProps {
  className?: string;
  showTitle?: boolean;
}

export default function DarkPortraitMosaic({ className = '', showTitle = true }: DarkPortraitMosaicProps) {
  // Silhouette scale: 454 x 750 (native base 846 x 1398)
  const s = 750 / 1398;
  const G = 1.6; // half gap in px

  const theme = {
    bg: '#0F0F11',
    text: '#F0F0F0',
    accent: '#14F1D9',
    cardBg: '#1A1A1E',
    border: 'rgba(255, 255, 255, 0.45)',
    corner: '#14F1D9',
  };

  const tiles = [
    // ROW A: TOP CROWN
    { id: 'A1', x: 0,   y: 0,    w: 190, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-20 (5).jpg' },
    { id: 'A2', x: 196, y: 0,    w: 144, h: 210, type: 'img', src: 'photo_3329@04-08-2026_21-08-45.jpg' },
    { id: 'A3', x: 346, y: 0,    w: 180, h: 180, type: 'img', src: 'photo_2026-08-27_17-30-20 (5).jpg' },
    { id: 'A4', x: 532, y: 0,    w: 150, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-20 (7).jpg' },
    { id: 'A5', x: 688, y: 0,    w: 158, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-21 (8).jpg' },

    // ROW B: UPPER FOREHEAD & BANGS
    { id: 'B1', x: 0,   y: 178,  w: 190, h: 130, type: 'img', src: 'photo_2026-08-27_17-30-19.jpg' },
    { id: 'B2', x: 196, y: 216,  w: 144, h: 182, type: 'video', src: 'video_2026-08-04_22-43-39 (4).mp4' },
    { id: 'B3', x: 346, y: 186,  w: 180, h: 148, type: 'face' },
    { id: 'B4', x: 532, y: 178,  w: 150, h: 156, type: 'img', src: 'photo_2026-08-27_17-30-19 (2).jpg' },
    { id: 'B5', x: 688, y: 178,  w: 158, h: 156, type: 'img', src: 'photo_2026-08-27_17-30-19 (3).jpg' },

    // ROW C: EYES & CHEEKS
    { id: 'C1', x: 0,   y: 314,  w: 110, h: 290, type: 'img', src: 'photo_2026-08-27_17-30-21 (2).jpg' },
    { id: 'C2', x: 116, y: 314,  w: 74,  h: 156, type: 'img', src: 'photo_3333@04-08-2026_21-08-45.jpg' },
    { id: 'C3', x: 116, y: 476,  w: 108, h: 128, type: 'img', src: 'photo_2026-08-27_17-30-21 (5).jpg' },

    // C4: 8-SIDED POLYGON
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

    // ROW D: NOSE, LIPS & JAW
    { id: 'D1', x: 0,   y: 610,  w: 224, h: 232, type: 'video', src: 'video_2026-08-29_18-25-41.mp4' },
    { id: 'D2', x: 230, y: 610,  w: 144, h: 126, type: 'img', src: 'photo_2026-08-29_17-06-15.jpg' },
    { id: 'D3', x: 380, y: 510,  w: 286, h: 224, type: 'face' },
    { id: 'D4', x: 672, y: 510,  w: 174, h: 224, type: 'img', src: 'photo_2960@31-07-2026_18-19-07.jpg' },

    // ROW E: CHIN, NECK & COLLARBONE
    { id: 'E1', x: 230, y: 742,  w: 144, h: 184, type: 'img', src: 'photo_3334@04-08-2026_21-08-45.jpg' },
    { id: 'E2', x: 380, y: 740,  w: 152, h: 184, type: 'face' },
    { id: 'E3', x: 538, y: 740,  w: 144, h: 184, type: 'img', src: 'photo_2026-08-29_20-12-50.jpg' },
    { id: 'E4', x: 688, y: 740,  w: 158, h: 250, type: 'video', src: 'video_2026-08-29_20-12-42.mp4' },

    // ROW F: SHOULDERS & CHEST CENTER
    { id: 'G1', x: 0,   y: 848,  w: 224, h: 266, type: 'img', src: 'photo_2026-08-29_20-12-29.jpg' },
    { id: 'F3', x: 230, y: 932,  w: 452, h: 182, type: 'video', src: 'video_48@31-07-2026_19-44-20.mp4' },
    { id: 'F4', x: 688, y: 996,  w: 158, h: 128, type: 'img', src: 'photo_3331@04-08-2026_21-08-45.jpg' },

    // ROW G: LOWER BASE & DECOLLETE
    { id: 'F1', x: 0,   y: 1120, w: 160, h: 278, type: 'img', src: 'photo_2026-08-27_17-30-20.jpg' },
    { id: 'F2', x: 166, y: 1120, w: 166, h: 278, type: 'img', src: 'photo_3330@04-08-2026_21-08-45.jpg' },
    { id: 'G2', x: 338, y: 1120, w: 194, h: 278, type: 'face', label: 'DECOLLETE' },
    { id: 'G3', x: 538, y: 1120, w: 144, h: 278, type: 'img', src: 'photo_2026-08-27_17-30-21 (3).jpg' },
    { id: 'G4', x: 688, y: 1130, w: 158, h: 268, type: 'img', src: 'photo_2026-08-27_17-30-20 (4).jpg' }
  ];

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '514px',
        height: '840px',
        backgroundColor: theme.bg,
        color: theme.text,
        padding: '16px 30px 20px',
        borderRadius: '16px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}
    >
      {/* Title */}
      {showTitle && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '10px',
            borderBottom: `1.5px solid ${theme.border}`,
            paddingBottom: '6px'
          }}
        >
          <h2 style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', margin: 0, textTransform: 'uppercase', color: theme.text }}>
            ПОРТРЕТЫ И СКЕТЧИ
          </h2>
        </div>
      )}

      {/* Masked Silhouette */}
      <div
        style={{
          position: 'relative',
          width: '454px',
          height: '750px',
          margin: '0 auto',
          WebkitMaskImage: "url('/Group%2047.png')",
          maskImage: "url('/Group%2047.png')",
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          overflow: 'hidden'
        }}
      >
        {tiles.map((t, idx) => {
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
              {/* L-shaped Corner Marks */}
              {!t.isPolygon && (
                <>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', borderTop: `1.8px solid ${theme.corner}`, borderLeft: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', borderTop: `1.8px solid ${theme.corner}`, borderRight: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '8px', height: '8px', borderBottom: `1.8px solid ${theme.corner}`, borderLeft: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', borderBottom: `1.8px solid ${theme.corner}`, borderRight: `1.8px solid ${theme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                </>
              )}

              {/* SVG Outline & 8 Corner Marks for C4 */}
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
                  <path d={`M ${rw*0.191 + 8} ${rh} L ${rw*0.191} ${rh} L ${rw*0.191} ${rh - 8}`} fill="none" stroke={theme.corner} strokeWidth="2.2" />
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
                    left: `-${t.x * s}px`,
                    top: `-${t.y * s}px`,
                    width: '454px',
                    height: '750px',
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
  );
}
