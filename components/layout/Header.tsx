"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"RU" | "EN">("RU");

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
              <div className="bg-[#1A1A1A] border border-white/10 rounded-sm shadow-2xl py-2 flex flex-col">
                <Link href="/#about" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Обо мне</Link>
                <Link href="/#competencies" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Компетенции</Link>
                <Link href="/#portfolio" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Кейсы</Link>
              </div>
            </div>
          </div>

          {/* Art Dropdown */}
          <div className="relative group">
            <Link 
              href="/fir_tree_art" 
              className={`flex items-center gap-0.5 md:gap-1 text-[9px] sm:text-xs md:text-sm font-bold tracking-widest uppercase transition-colors font-montserrat py-2 whitespace-nowrap ${pathname === '/fir_tree_art' ? 'text-[#14F1D9]' : 'text-white/70 hover:text-white'}`}
            >
              Искусство
              <ChevronDown className="w-2.5 h-2.5 md:w-4 md:h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-[#1A1A1A] border border-white/10 rounded-sm shadow-2xl py-2 flex flex-col">
                <Link href="/fir_tree_art#gallery" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Галерея работ</Link>
                <Link href="/fir_tree_art#protest" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Артивизм</Link>
                <Link href="/fir_tree_art#media-publications" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Публикации в СМИ</Link>
                <Link href="/fir_tree_art#contacts" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">Instagram</Link>
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

          <div className="flex items-center gap-1 md:gap-3 text-[9px] sm:text-xs md:text-sm font-semibold font-montserrat text-white/70 border-l border-white/20 pl-2 md:pl-6 shrink-0">
            <button onClick={() => setLang("RU")} className={`transition-colors hover:text-white ${lang === "RU" ? "text-white" : ""}`}>RU</button>
            <span className="text-white/30">|</span>
            <button onClick={() => setLang("EN")} className={`transition-colors hover:text-white ${lang === "EN" ? "text-white" : ""}`}>EN</button>
          </div>
        </div>

      </div>
    </header>
  );
}
