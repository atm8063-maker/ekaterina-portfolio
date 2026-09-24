"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { cases, CaseSummary } from "@/lib/data";

interface CaseNavigationProps {
  currentSlug: string;
  className?: string;
  position?: "top" | "bottom";
}

// Active visible cases in portfolio order
const activeCases = cases.filter(c => !c.hidden && c.slug !== "12-resin-masterclass" && c.slug !== "13-local-tv-report");

export function CaseNavigation({ currentSlug, className = "", position = "bottom" }: CaseNavigationProps) {
  // Normalize slug (handle custom hrefs if any)
  const normalizedSlug = currentSlug === "case" ? "05-nick-potapov-site" : currentSlug;
  const currentIndex = activeCases.findIndex(c => c.slug === normalizedSlug);

  const prevCase = currentIndex > 0 ? activeCases[currentIndex - 1] : activeCases[activeCases.length - 1];
  const nextCase = currentIndex < activeCases.length - 1 ? activeCases[currentIndex + 1] : activeCases[0];

  const getHref = (c: CaseSummary) => {
    return `/cases/${c.slug}`;
  };

  if (position === "top") {
    return (
      <div className={`flex items-center justify-between gap-4 py-4 border-b border-white/10 text-xs sm:text-sm font-montserrat ${className}`}>
        {/* Back to portfolio */}
        <Link
          href="/#cases"
          className="inline-flex items-center gap-2 text-white/70 hover:text-[#14F1D9] transition-colors py-1 px-2 -ml-2 rounded"
        >
          <ArrowLeft className="w-4 h-4 text-[#14F1D9]" />
          <span>Все кейсы</span>
        </Link>

        {/* Next / Prev quick switcher */}
        <div className="flex items-center gap-2 sm:gap-4">
          {prevCase && (
            <Link
              href={getHref(prevCase)}
              title={prevCase.title}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors py-1 px-2 rounded hover:bg-white/5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Назад</span>
            </Link>
          )}
          <span className="text-white/20">|</span>
          {nextCase && (
            <Link
              href={getHref(nextCase)}
              title={nextCase.title}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#14F1D9] transition-colors py-1 px-2 rounded hover:bg-white/5"
            >
              <span className="hidden sm:inline">Вперед</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    );
  }

  // Bottom full navigation banner
  return (
    <nav aria-label="Навигация по кейсам" className={`mt-16 pt-10 border-t border-white/10 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        {/* Previous case */}
        {prevCase ? (
          <Link
            href={getHref(prevCase)}
            className="group flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#14F1D9]/40 transition-all text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/70 group-hover:text-[#14F1D9] group-hover:border-[#14F1D9]/50 transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 block font-montserrat">
                Предыдущий
              </span>
              <span className="text-sm font-medium text-white group-hover:text-[#14F1D9] truncate block transition-colors">
                {prevCase.title}
              </span>
            </div>
          </Link>
        ) : <div />}

        {/* Center: Back to Cases catalog */}
        <div className="flex justify-center order-first sm:order-none">
          <Link
            href="/#cases"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#14F1D9]/40 bg-[#14F1D9]/10 hover:bg-[#14F1D9]/20 text-[#14F1D9] font-bold text-xs uppercase tracking-widest font-montserrat transition-all shadow-[0_0_20px_rgba(20,241,217,0.15)]"
          >
            <Grid className="w-4 h-4" />
            <span>Каталог кейсов</span>
          </Link>
        </div>

        {/* Next case */}
        {nextCase ? (
          <Link
            href={getHref(nextCase)}
            className="group flex items-center justify-end gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#14F1D9]/40 transition-all text-right"
          >
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 block font-montserrat">
                Следующий
              </span>
              <span className="text-sm font-medium text-white group-hover:text-[#14F1D9] truncate block transition-colors">
                {nextCase.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/70 group-hover:text-[#14F1D9] group-hover:border-[#14F1D9]/50 transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ) : <div />}
      </div>
    </nav>
  );
}
