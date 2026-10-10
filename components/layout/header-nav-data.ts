export type NavLink = { href: string; label: string };

export const CAREER_SECTION_LINKS: NavLink[] = [
  { href: "/#about", label: "Обо мне" },
  { href: "/#competencies", label: "Компетенции" },
  { href: "/#cases", label: "Кейсы" },
];

export type ArtNavColumn = { title: string; links: NavLink[] };

export const ART_MENU_COLUMNS: ArtNavColumn[] = [
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
];

export function isCareerRoute(pathname: string): boolean {
  return pathname === "/" || pathname === "/case" || pathname.startsWith("/cases/");
}

export function isArtRoute(pathname: string): boolean {
  return pathname === "/fir_tree_art";
}
