export type NavLink = { href: string; label: string };
export type ArtNavColumn = { title: string; links: NavLink[] };
export type Lang = "RU" | "EN";

const CAREER_SECTION_LINKS_BY_LANG: Record<Lang, NavLink[]> = {
  RU: [
    { href: "/#about", label: "Обо мне" },
    { href: "/#competencies", label: "Компетенции" },
    { href: "/#cases", label: "Кейсы" },
  ],
  EN: [
    { href: "/#about", label: "About" },
    { href: "/#competencies", label: "Competencies" },
    { href: "/#cases", label: "Case Studies" },
  ],
};

const ART_MENU_COLUMNS_BY_LANG: Record<Lang, ArtNavColumn[]> = {
  RU: [
    {
      title: "Творчество & Галерея",
      links: [
        { href: "/fir_tree_art#gallery", label: "Галерея" },
        { href: "/fir_tree_art#artivism", label: "Артивизм" },
        { href: "/fir_tree_art#resin-range", label: "Диапазон смолы" },
        { href: "/fir_tree_art#techniques", label: "Техники & инструменты" },
        { href: "/fir_tree_art#portraits", label: "Портреты & скетчи" },
      ],
    },
    {
      title: "Экспертиза & Бренд",
      links: [
        { href: "/fir_tree_art#competencies", label: "Компетенции" },
        { href: "/fir_tree_art#victories", label: "Победы, финалы & Судейство" },
        { href: "/fir_tree_art#ambassador", label: "Амбассадор & Продукция" },
      ],
    },
    {
      title: "Обучение & Медиа",
      links: [
        { href: "/fir_tree_art#education", label: "Обучение & Лекции" },
        { href: "/fir_tree_art#media", label: "Публикации в СМИ" },
        { href: "/fir_tree_art#testimonials", label: "Отзывы" },
      ],
    },
  ],
  EN: [
    {
      title: "Art & Gallery",
      links: [
        { href: "/fir_tree_art#gallery", label: "Gallery" },
        { href: "/fir_tree_art#artivism", label: "Artivism" },
        { href: "/fir_tree_art#resin-range", label: "Resin Range" },
        { href: "/fir_tree_art#techniques", label: "Techniques & Tools" },
        { href: "/fir_tree_art#portraits", label: "Portraits & Sketches" },
      ],
    },
    {
      title: "Expertise & Brand",
      links: [
        { href: "/fir_tree_art#competencies", label: "Competencies" },
        { href: "/fir_tree_art#victories", label: "Wins, Finals & Judging" },
        { href: "/fir_tree_art#ambassador", label: "Brand Ambassador & Products" },
      ],
    },
    {
      title: "Teaching & Media",
      links: [
        { href: "/fir_tree_art#education", label: "Teaching & Lectures" },
        { href: "/fir_tree_art#media", label: "Press" },
        { href: "/fir_tree_art#testimonials", label: "Testimonials" },
      ],
    },
  ],
};

export function getCareerSectionLinks(lang: Lang): NavLink[] {
  return CAREER_SECTION_LINKS_BY_LANG[lang];
}

export function getArtMenuColumns(lang: Lang): ArtNavColumn[] {
  return ART_MENU_COLUMNS_BY_LANG[lang];
}

export function isCareerRoute(pathname: string): boolean {
  return pathname === "/" || pathname === "/case" || pathname.startsWith("/cases/");
}

export function isArtRoute(pathname: string): boolean {
  return pathname === "/fir_tree_art";
}
