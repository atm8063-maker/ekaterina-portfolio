"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"RU" | "EN">("RU");
  const [showEnToast, setShowEnToast] = useState(false);

  const handleEnClick = () => {
    setShowEnToast(true);
    setTimeout(() => {
      setShowEnToast(false);
    }, 2500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] flex items-center min-h-[5rem] py-3">
      <div className="container mx-auto px-2 lg:px-6 flex items-center justify-between gap-2 md:gap-4 w-full flex-nowrap">
        
        {/* Left: Initials / Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity relative block ml-[10px] md:ml-0">
            {/* Hidden image to force natural width/aspect ratio */}
            <img src="/logo.png" alt="Logo" className="h-8 md:h-10 lg:h-12 w-auto object-contain opacity-0 pointer-events-none" />
            {/* The actual visible logo tinted cyan */}
            <div 
              className="absolute inset-0 bg-[#14F1D9]" 
              style={{
                maskImage: 'url(/logo.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center',
                WebkitMaskImage: 'url(/logo.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center',
              }}
            />
          </Link>
        </div>

        {/* Center: Main Navigation */}
        <nav className="flex items-center justify-center gap-3 md:gap-6 lg:gap-10 min-w-0 flex-shrink-0">
          {/* Career Dropdown */}
          <div className="relative group">
            <Link 
              href="/" 
              className={`flex items-center gap-0.5 md:gap-1 text-[9px] sm:text-xs md:text-sm font-bold tracking-widest uppercase transition-colors font-montserrat py-2 whitespace-nowrap ${pathname === '/' ? 'text-[#14F1D9]' : 'text-white/70 hover:text-white'}`}
            >
              Карьера
              <ChevronDown className="w-2.5 h-2.5 md:w-4 md:h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-[#1A1A1A] border border-white/10 rounded-none shadow-2xl py-2 flex flex-col">
                <Link href="/#about" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Обо мне</Link>
                <Link href="/#competencies" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Компетенции</Link>
                <Link href="/#cases" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Кейсы</Link>
              </div>
            </div>
          </div>

          {/* Art Dropdown - 3 Column Mega-Menu */}
          <div className="relative group">
            <Link 
              href="/fir_tree_art" 
              className={`flex items-center gap-0.5 md:gap-1 text-[9px] sm:text-xs md:text-sm font-bold tracking-widest uppercase transition-colors font-montserrat py-2 whitespace-nowrap ${pathname === '/fir_tree_art' ? 'text-[#14F1D9]' : 'text-white/70 hover:text-white'}`}
            >
              Искусство
              <ChevronDown className="w-2.5 h-2.5 md:w-4 md:h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            
            <div className="absolute top-full left-1/2 -translate-x-[65%] sm:-translate-x-1/2 w-[90vw] sm:w-[680px] lg:w-[780px] max-w-[820px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
              <div className="bg-[#161616]/95 backdrop-blur-md border-2 border-black sm:border border-white/15 shadow-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
                
                {/* Column 1: Творчество & Объекты */}
                <div className="flex flex-col space-y-1">
                  <span className="text-[11px] font-montserrat font-black uppercase tracking-wider text-[#14F1D9] border-b border-white/10 pb-1.5 mb-1.5">
                    Творчество & Галерея
                  </span>
                  <Link 
                    href="/fir_tree_art#gallery" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Галерея</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link 
                    href="/fir_tree_art#artivism" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Артивизм</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link 
                    href="/fir_tree_art#resin-range" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Диапазон смолы</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link 
                    href="/fir_tree_art#techniques" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Техники & инструменты</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link 
                    href="/fir_tree_art#portraits" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Портреты & скетчи</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>

                {/* Column 2: Экспертиза & Бренд */}
                <div className="flex flex-col space-y-1">
                  <span className="text-[11px] font-montserrat font-black uppercase tracking-wider text-[#14F1D9] border-b border-white/10 pb-1.5 mb-1.5">
                    Экспертиза & Бренд
                  </span>
                  <Link 
                    href="/fir_tree_art#competencies" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Компетенции</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link 
                    href="/fir_tree_art#victories" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Победы, финалы & Судейство</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link 
                    href="/fir_tree_art#ambassador" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Амбассадор & Продукция</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>

                {/* Column 3: Обучение & Медиа */}
                <div className="flex flex-col space-y-1">
                  <span className="text-[11px] font-montserrat font-black uppercase tracking-wider text-[#14F1D9] border-b border-white/10 pb-1.5 mb-1.5">
                    Обучение & Медиа
                  </span>
                  <Link 
                    href="/fir_tree_art#education" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Обучение & Лекции</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link 
                    href="/fir_tree_art#media" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Публикации в СМИ</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link 
                    href="/fir_tree_art#testimonials" 
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>Отзывы</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </nav>

        {/* Right: Contact & Language */}
        <div className="flex-1 flex items-center justify-end gap-2 md:gap-6 flex-shrink-0">
          <Link 
            href="/#contact"
            className="text-[8px] sm:text-[10px] md:text-sm font-bold tracking-widest uppercase text-[#111111] bg-[#14F1D9] hover:bg-white transition-colors px-2 py-1 md:px-6 md:py-2.5 rounded-none font-montserrat whitespace-nowrap"
          >
            Связаться
          </Link>

          <div className="relative flex items-center gap-1 md:gap-3 text-[9px] sm:text-xs md:text-sm font-semibold font-montserrat text-white/70 border-l border-white/20 pl-2 md:pl-6 shrink-0">
            <button 
              type="button"
              onClick={() => setLang("RU")} 
              className={`transition-colors hover:text-white cursor-pointer ${lang === "RU" ? "text-[#14F1D9] font-bold" : "text-white/60"}`}
            >
              RU
            </button>
            <span className="text-white/30">|</span>
            <button 
              type="button"
              onClick={handleEnClick} 
              className="transition-colors hover:text-white text-white/60 cursor-pointer flex items-center gap-1"
              title="English version coming soon"
            >
              <span>EN</span>
            </button>

            {/* In-development popup toast */}
            {showEnToast && (
              <div className="absolute top-full right-0 mt-3 bg-[#1A1A1A] border border-[#14F1D9]/50 text-white text-[11px] font-sans font-medium px-3.5 py-2 rounded-lg shadow-2xl z-50 whitespace-nowrap animate-in fade-in slide-in-from-top-1 pointer-events-none">
                <span className="text-[#14F1D9] mr-1">⏳</span>
                <span>English version in development (Скоро)</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
