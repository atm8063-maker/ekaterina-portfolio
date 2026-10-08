'use client';

import React, { useState } from 'react';
import { SILHOUETTE_SPOTS } from '@/lib/mosaic/spots';

export default function PortraitMosaicPage() {
  const [theme, setTheme] = useState<'ivory' | 'dark' | 'cyan' | 'white'>('dark');

  const themes = {
    ivory: { bg: '#ECE9E2', text: '#181818', accent: '#14F1D9', cardBg: '#E4E0D7', border: 'rgba(0,0,0,0.35)', corner: '#111111' },
    dark: { bg: '#0F0F11', text: '#F0F0F0', accent: '#14F1D9', cardBg: '#1A1A1E', border: 'rgba(255,255,255,0.45)', corner: '#14F1D9' },
    cyan: { bg: '#8FD0D8', text: '#0D2B30', accent: '#0F0F11', cardBg: '#76BFC8', border: 'rgba(0,0,0,0.4)', corner: '#0D2B30' },
    white: { bg: '#FAFAFA', text: '#111111', accent: '#0066FF', cardBg: '#EEEEEE', border: 'rgba(0,0,0,0.3)', corner: '#111111' },
  };

  const currentTheme = themes[theme];

  // Scale: silhouette is 454 x 750 (total height ~840px)
  const s = 750 / 1398;
  const G = 1.6; // half gap in scaled px

  const tiles = SILHOUETTE_SPOTS;

  return (
    <div
      style={{
        backgroundColor: currentTheme.bg,
        color: currentTheme.text,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 12px',
        boxSizing: 'border-box',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}
    >
      {/* High Quality Smooth Rendering */}
      <style>{`
        img, video {
          image-rendering: auto;
        }
      `}</style>

      {/* Theme Switcher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
          background: theme === 'dark' ? 'rgba(30, 30, 35, 0.7)' : 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(12px)',
          padding: '4px 12px',
          borderRadius: '40px',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }}
      >
        <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', opacity: 0.6 }}>Фон:</span>
        {(['ivory', 'dark', 'cyan', 'white'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              background: theme === t ? currentTheme.text : 'transparent',
              color: theme === t ? currentTheme.bg : currentTheme.text,
              border: 'none',
              padding: '4px 10px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '11px',
              transition: 'all 0.2s ease'
            }}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Poster (840-850px height) */}
      <div
        style={{
          position: 'relative',
          width: '514px',
          height: '840px',
          background: currentTheme.bg,
          padding: '16px 30px 20px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
        {/* NEW SINGLE CLEAN HEADER: ПОРТРЕТЫ И СКЕТЧИ */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '10px',
            borderBottom: `1.5px solid ${currentTheme.text}`,
            paddingBottom: '6px'
          }}
        >
          <h1 style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', margin: 0, textTransform: 'uppercase' }}>
            ПОРТРЕТЫ И СКЕТЧИ
          </h1>
        </div>

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
              backgroundColor: currentTheme.cardBg,
              border: t.isPolygon ? 'none' : `1.2px solid ${currentTheme.border}`,
              boxSizing: 'border-box',
              clipPath: t.clipPath || undefined
            };

            const imageSrc = t.src ? `/art-portraits/${encodeURIComponent(t.src)}` : '';

            return (
              <div key={idx} style={style}>
                {/* L-shaped Corner Marks for Normal Rectangles */}
                {!t.isPolygon && (
                  <>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', borderTop: `1.8px solid ${currentTheme.corner}`, borderLeft: `1.8px solid ${currentTheme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', borderTop: `1.8px solid ${currentTheme.corner}`, borderRight: `1.8px solid ${currentTheme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '8px', height: '8px', borderBottom: `1.8px solid ${currentTheme.corner}`, borderLeft: `1.8px solid ${currentTheme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', borderBottom: `1.8px solid ${currentTheme.corner}`, borderRight: `1.8px solid ${currentTheme.corner}`, pointerEvents: 'none', zIndex: 3 }} />
                  </>
                )}

                {/* SVG Outline and ALL 8 Corner Notches for C4 */}
                {t.isPolygon && (
                  <svg
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3 }}
                    viewBox={`0 0 ${rw} ${rh}`}
                  >
                    {/* Outline */}
                    <polygon
                      points={`0,0 ${rw*0.809},0 ${rw*0.809},${rh*0.535} ${rw},${rh*0.535} ${rw},${rh} ${rw*0.191},${rh} ${rw*0.191},${rh*0.33} 0,${rh*0.33}`}
                      fill="none"
                      stroke={currentTheme.border}
                      strokeWidth="1.5"
                    />
                    {/* 8 Corner Marks for C4 */}
                    <path d={`M 0 8 L 0 0 L 8 0`} fill="none" stroke={currentTheme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw*0.809 - 8} 0 L ${rw*0.809} 0 L ${rw*0.809} 8`} fill="none" stroke={currentTheme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw*0.809} ${rh*0.535 - 8} L ${rw*0.809} ${rh*0.535} L ${rw*0.809 + 8} ${rh*0.535}`} fill="none" stroke={currentTheme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw - 8} ${rh*0.535} L ${rw} ${rh*0.535} L ${rw} ${rh*0.535 + 8}`} fill="none" stroke={currentTheme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw} ${rh - 8} L ${rw} ${rh} L ${rw - 8} ${rh}`} fill="none" stroke={currentTheme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw*0.191 + 8} ${rh} L ${rw*0.191} ${rh} L ${rw*0.191} ${rh - 8}`} fill="none" stroke={currentTheme.corner} strokeWidth="2.2" />
                    <path d={`M ${rw*0.191} ${rh*0.33 + 8} L ${rw*0.191} ${rh*0.33} L ${rw*0.191 - 8} ${rh*0.33}`} fill="none" stroke={currentTheme.corner} strokeWidth="2.2" />
                    <path d={`M 8 ${rh*0.33} L 0 ${rh*0.33} L 0 ${rh*0.33 - 8}`} fill="none" stroke={currentTheme.corner} strokeWidth="2.2" />
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
    </div>
  );
}
