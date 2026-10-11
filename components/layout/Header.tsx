"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const t = {
  RU: {
    skip: "Перейти к содержимому",
    career: "Карьера",
    art: "Искусство",
    contact: "Связаться",
    careerMenu: { about: "Обо мне", competencies: "Компетенции", cases: "Кейсы" },
    artCol1: "Творчество & Галерея",
    artCol1Links: { gallery: "Галерея", artivism: "Артивизм", resin: "Диапазон смолы", techniques: "Техники & инструменты", portraits: "Портреты & скетчи" },
    artCol2: "Экспертиза & Бренд",
    artCol2Links: { competencies: "Компетенции", victories: "Победы, финалы & Судейство", ambassador: "Амбассадор & Продукция" },
    artCol3: "Обучение & Медиа",
    artCol3Links: { education: "Обучение & Лекции", media: "Публикации в СМИ", testimonials: "Отзывы" },
  },
  EN: {
    skip: "Skip to content",
    career: "Career",
    art: "Art",
    contact: "Contact",
    careerMenu: { about: "About", competencies: "Competencies", cases: "Case Studies" },
    artCol1: "Art & Gallery",
    artCol1Links: { gallery: "Gallery", artivism: "Artivism", resin: "Resin Range", techniques: "Techniques & Tools", portraits: "Portraits & Sketches" },
    artCol2: "Expertise & Brand",
    artCol2Links: { competencies: "Competencies", victories: "Wins, Finals & Judging", ambassador: "Brand Ambassador & Products" },
    artCol3: "Teaching & Media",
    artCol3Links: { education: "Teaching & Lectures", media: "Press", testimonials: "Testimonials" },
  },
};

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const tr = t[lang];

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-[#14F1D9] focus:px-4 focus:py-2 focus:font-bold focus:uppercase focus:text-[#111111]"
      >
        {tr.skip}
      </a>
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
              {tr.career}
              <ChevronDown className="w-2.5 h-2.5 md:w-4 md:h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </Link>

            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-[#1A1A1A] border border-white/10 rounded-none shadow-2xl py-2 flex flex-col">
                <Link href="/#about" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">{tr.careerMenu.about}</Link>
                <Link href="/#competencies" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">{tr.careerMenu.competencies}</Link>
                <Link href="/#cases" className="px-4 py-2 text-sm text-white/70 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter">{tr.careerMenu.cases}</Link>
              </div>
            </div>
          </div>

          {/* Art Dropdown - 3 Column Mega-Menu */}
          <div className="relative group">
            <Link 
              href="/fir_tree_art" 
              className={`flex items-center gap-0.5 md:gap-1 text-[9px] sm:text-xs md:text-sm font-bold tracking-widest uppercase transition-colors font-montserrat py-2 whitespace-nowrap ${pathname === '/fir_tree_art' ? 'text-[#14F1D9]' : 'text-white/70 hover:text-white'}`}
            >
              {tr.art}
              <ChevronDown className="w-2.5 h-2.5 md:w-4 md:h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            
            <div className="absolute top-full left-1/2 -translate-x-[65%] sm:-translate-x-1/2 w-[90vw] sm:w-[680px] lg:w-[780px] max-w-[820px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
              <div className="bg-[#161616]/95 backdrop-blur-md border-2 border-black sm:border border-white/15 shadow-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
                
                {/* Column 1: Творчество & Объекты */}
                <div className="flex flex-col space-y-1">
                  <span className="text-[11px] font-montserrat font-black uppercase tracking-wider text-[#14F1D9] border-b border-white/10 pb-1.5 mb-1.5">
                    {tr.artCol1}
                  </span>
                  <Link
                    href="/fir_tree_art#gallery"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol1Links.gallery}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/fir_tree_art#artivism"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol1Links.artivism}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/fir_tree_art#resin-range"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol1Links.resin}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/fir_tree_art#techniques"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol1Links.techniques}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/fir_tree_art#portraits"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol1Links.portraits}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>

                {/* Column 2: Экспертиза & Бренд */}
                <div className="flex flex-col space-y-1">
                  <span className="text-[11px] font-montserrat font-black uppercase tracking-wider text-[#14F1D9] border-b border-white/10 pb-1.5 mb-1.5">
                    {tr.artCol2}
                  </span>
                  <Link
                    href="/fir_tree_art#competencies"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol2Links.competencies}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/fir_tree_art#victories"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol2Links.victories}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/fir_tree_art#ambassador"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol2Links.ambassador}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>

                {/* Column 3: Обучение & Медиа */}
                <div className="flex flex-col space-y-1">
                  <span className="text-[11px] font-montserrat font-black uppercase tracking-wider text-[#14F1D9] border-b border-white/10 pb-1.5 mb-1.5">
                    {tr.artCol3}
                  </span>
                  <Link
                    href="/fir_tree_art#education"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol3Links.education}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/fir_tree_art#media"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol3Links.media}</span>
                    <span className="text-[#14F1D9] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/fir_tree_art#testimonials"
                    className="px-2 py-1.5 text-xs sm:text-sm text-white/80 hover:text-[#14F1D9] hover:bg-white/5 transition-colors font-inter rounded-sm flex items-center justify-between group/link"
                  >
                    <span>{tr.artCol3Links.testimonials}</span>
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
            {tr.contact}
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
              onClick={() => setLang("EN")}
              className={`transition-colors hover:text-white cursor-pointer ${lang === "EN" ? "text-[#14F1D9] font-bold" : "text-white/60"}`}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </header>
    </>
  );
}
