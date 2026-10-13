"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  getArtMenuColumns,
  getCareerSectionLinks,
  isArtRoute,
  isCareerRoute,
} from "@/components/layout/header-nav-data";
import { useHeaderScrollState } from "@/components/shared/use-header-scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const t = {
  RU: {
    skip: "Перейти к содержимому",
    career: "Карьера",
    art: "Искусство",
    contact: "Связаться",
    home: "На главную",
    mainNav: "Основная навигация",
    mobileNav: "Мобильная навигация",
    closeMenu: "Закрыть меню",
    openMenu: "Открыть меню",
  },
  EN: {
    skip: "Skip to content",
    career: "Career",
    art: "Art",
    contact: "Contact",
    home: "Go to homepage",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    closeMenu: "Close menu",
    openMenu: "Open menu",
  },
};

const DROPDOWN_PANEL =
  "pointer-events-none absolute top-full z-50 pt-2 opacity-0 invisible transition-all duration-300 group-hov:pointer-events-auto group-hov:opacity-100 group-hov:visible focus-within:pointer-events-auto focus-within:opacity-100 focus-within:visible";

const HEADER_INNER =
  "container mx-auto flex w-full flex-nowrap items-center justify-between gap-2 px-2 md:gap-4 lg:px-6";

const HEADER_COMPACT_SIZE =
  "min-h-14 border-white/10 py-2 shadow-lg shadow-black/20";

const MOBILE_MENU_TOGGLE =
  "group flex shrink-0 items-center gap-1.5 rounded-none border-l border-white/10 py-2 pl-2 font-montserrat text-[10px] font-bold tracking-[0.25em] text-white/75 uppercase transition-colors hov:text-primary";

const MENU_BAR =
  "block h-[2px] w-full shrink-0 rounded-none bg-current transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none";

function NavMenuIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <span
      className={cn("relative flex h-3.5 w-[1.125rem] flex-col justify-center gap-[5px]", className)}
      aria-hidden
    >
      <span className={cn(MENU_BAR, open && "translate-y-[7px] rotate-45")} />
      <span className={cn(MENU_BAR, open && "opacity-0")} />
      <span className={cn(MENU_BAR, open && "-translate-y-[7px] -rotate-45")} />
    </span>
  );
}

function NavSectionLink({
  href,
  label,
  onNavigate,
  className = "px-4 py-2 text-sm text-white/70 hov:text-primary hov:bg-white/5 transition-colors font-inter",
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {label}
    </Link>
  );
}

function ArtMenuColumns({
  lang,
  onNavigate,
  compact,
}: {
  lang: "RU" | "EN";
  onNavigate?: () => void;
  compact?: boolean;
}) {
  return (
    <>
      {getArtMenuColumns(lang).map((column) => (
        <div key={column.title} className="flex flex-col space-y-1">
          <span className="mb-1.5 border-b border-white/10 pb-1.5 font-montserrat text-[11px] font-black uppercase tracking-wider text-primary">
            {column.title}
          </span>
          {column.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className={`flex items-center justify-between rounded-sm px-2 py-1.5 font-inter text-white/80 transition-colors hov:bg-white/5 hov:text-primary ${
                compact ? "text-sm" : "text-xs sm:text-sm"
              } group/link`}
            >
              <span>{link.label}</span>
              {!compact && (
                <span className="text-primary opacity-0 transition-opacity group-hov/link:opacity-100">
                  →
                </span>
              )}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const tr = t[lang];
  const [mobileOpen, setMobileOpen] = useState(false);

  const careerActive = isCareerRoute(pathname);
  const artActive = isArtRoute(pathname);
  const { compact: headerCompact } = useHeaderScrollState(mobileOpen);

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    // Close drawer after client navigation (links also call closeMobile).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional on pathname change
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const navTriggerClass = (active: boolean) =>
    `flex items-center gap-1 py-2 font-montserrat text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors md:text-sm ${
      active ? "text-primary" : "text-white/70 hov:text-white"
    }`;

  const careerLinks = getCareerSectionLinks(lang);

  const mobileMenu =
    mobileOpen && typeof document !== "undefined"
      ? createPortal(
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-black/55 md:hidden motion-reduce:transition-none"
              aria-label={tr.closeMenu}
              onClick={closeMobile}
            />
            <nav
              className="fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col gap-8 overflow-y-auto overscroll-contain border-t border-white/10 bg-background px-4 py-6 pb-10 md:hidden"
              aria-label={tr.mobileNav}
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
            >
              <section>
                <Link
                  href="/"
                  onClick={closeMobile}
                  className={`mb-3 block font-montserrat text-base font-bold tracking-widest uppercase ${careerActive ? "text-primary" : "text-white"}`}
                >
                  {tr.career}
                </Link>
                <div className="flex flex-col overflow-hidden rounded-sm border border-white/10">
                  {careerLinks.map((link, i) => (
                    <NavSectionLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      onNavigate={closeMobile}
                      className={`px-4 py-3.5 text-base text-white/85 hov:bg-white/5 hov:text-primary font-inter ${
                        i < careerLinks.length - 1 ? "border-b border-white/5" : ""
                      }`}
                    />
                  ))}
                </div>
              </section>

              <section>
                <Link
                  href="/fir_tree_art"
                  onClick={closeMobile}
                  className={`mb-3 block font-montserrat text-base font-bold tracking-widest uppercase ${artActive ? "text-primary" : "text-white"}`}
                >
                  {tr.art}
                </Link>
                <div className="flex flex-col gap-6 rounded-sm border border-white/10 bg-background/40 p-4">
                  <ArtMenuColumns lang={lang} onNavigate={closeMobile} compact />
                </div>
              </section>

              <Link
                href="/#contact"
                onClick={closeMobile}
                className="btn-press btn-fill block py-4 text-center font-montserrat text-sm font-bold tracking-widest text-background uppercase"
              >
                {tr.contact}
              </Link>

              <div className="flex items-center justify-center gap-4 font-montserrat text-base font-semibold">
                <button
                  type="button"
                  onClick={() => setLang("RU")}
                  className={`px-3 py-2 transition-colors ${lang === "RU" ? "font-bold text-primary" : "text-white/60 hov:text-white"}`}
                >
                  RU
                </button>
                <span className="text-white/30" aria-hidden>
                  |
                </span>
                <button
                  type="button"
                  onClick={() => setLang("EN")}
                  className={`px-3 py-2 transition-colors ${lang === "EN" ? "font-bold text-primary" : "text-white/60 hov:text-white"}`}
                >
                  EN
                </button>
              </div>
            </nav>
          </>,
          document.body,
        )
      : null;

  return (
    <>
    <a
      href="#hero"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:font-bold focus:uppercase focus:text-background"
    >
      {tr.skip}
    </a>
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 flex items-center border-b bg-background/95 backdrop-blur-md transition-[min-height,padding,box-shadow] duration-300 ease-out motion-reduce:transition-none",
        headerCompact ? HEADER_COMPACT_SIZE : "min-h-[5rem] border-white/5 py-3",
      )}
    >
      <div className={HEADER_INNER}>
        <div className="flex flex-1 justify-start">
          <Link
            href="/"
            className="relative ml-2 block shrink-0 hov:opacity-80 transition-opacity md:ml-0"
            aria-label={tr.home}
          >
            <Image
              src="/logo.webp"
              alt=""
              width={160}
              height={48}
              className={cn(
                "w-auto opacity-0 transition-[height] duration-300 motion-reduce:transition-none",
                headerCompact ? "h-7 md:h-8" : "h-8 md:h-10 lg:h-12",
              )}
              priority
            />
            <div
              className="absolute inset-0 bg-primary"
              aria-hidden
              style={{
                maskImage: "url(/logo.webp)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "left center",
                WebkitMaskImage: "url(/logo.webp)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
              }}
            />
          </Link>
        </div>

        <nav
          className="hidden shrink-0 items-center justify-center gap-6 lg:gap-10 md:flex"
          aria-label={tr.mainNav}
        >
          <div className="group relative">
            <Link href="/" className={navTriggerClass(careerActive)} aria-haspopup="true">
              {tr.career}
              <ChevronDown
                className="h-4 w-4 opacity-70 transition-transform duration-300 group-hov:rotate-180"
                aria-hidden
              />
            </Link>
            <div className={`${DROPDOWN_PANEL} left-1/2 w-48 -translate-x-1/2`}>
              <div
                role="menu"
                className="flex flex-col rounded-none border border-white/10 bg-surface py-2 shadow-2xl"
              >
                {careerLinks.map((link) => (
                  <NavSectionLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link href="/fir_tree_art" className={navTriggerClass(artActive)} aria-haspopup="true">
              {tr.art}
              <ChevronDown
                className="h-4 w-4 opacity-70 transition-transform duration-300 group-hov:rotate-180"
                aria-hidden
              />
            </Link>
            <div
              className={`${DROPDOWN_PANEL} left-1/2 w-[min(780px,calc(100vw-2rem))] max-w-[820px] -translate-x-1/2`}
            >
              <div className="grid grid-cols-1 gap-4 border border-white/15 bg-surface/95 p-4 shadow-2xl backdrop-blur-md sm:grid-cols-3 sm:gap-6 sm:p-6">
                <ArtMenuColumns lang={lang} />
              </div>
            </div>
          </div>
        </nav>

        <div className="flex flex-1 shrink-0 items-center justify-end gap-2 md:gap-6">
          <Link
            href="/#contact"
            className={cn(
              "btn-press btn-fill rounded-none font-montserrat font-bold tracking-widest whitespace-nowrap text-background uppercase",
              headerCompact
                ? "px-2.5 py-1 text-[9px] sm:px-4 sm:py-1.5 sm:text-[10px]"
                : "px-3 py-1.5 text-[10px] sm:px-6 sm:py-2.5 sm:text-sm",
            )}
          >
            {tr.contact}
          </Link>

          <div className="relative hidden shrink-0 items-center gap-3 border-l border-white/20 pl-6 font-montserrat text-sm font-semibold text-white/70 sm:flex">
            <button
              type="button"
              onClick={() => setLang("RU")}
              className={`cursor-pointer transition-colors hov:text-white ${lang === "RU" ? "font-bold text-primary" : "text-white/60"}`}
            >
              RU
            </button>
            <span className="text-white/30" aria-hidden>
              |
            </span>
            <button
              type="button"
              onClick={() => setLang("EN")}
              className={`cursor-pointer transition-colors hov:text-white ${lang === "EN" ? "font-bold text-primary" : "text-white/60"}`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className={cn(
              MOBILE_MENU_TOGGLE,
              "md:hidden",
              !headerCompact && "pl-3",
            )}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? tr.closeMenu : tr.openMenu}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <NavMenuIcon open={mobileOpen} className="text-current" />
          </button>
        </div>
      </div>

    </header>
    {mobileMenu}
    </>
  );
}
