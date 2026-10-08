# Дизайн-система (AS-IS) — Portfolio Ekaterina

> Автоматически собрано из кодовой базы. Обновлять при каждом значимом изменении стилей.
> Последнее обновление: 26.08.2026

---

## 1. Цвета

### Основная палитра

| Токен | Значение | Использование |
|-------|----------|---------------|
| `--color-background` | `#111111` | Основной фон всего сайта |
| `--color-surface` | `#1A1A1A` | Фон карточек, дропдаунов, вторичных поверхностей |
| `--color-primary` | `#14F1D9` | Акцентный бирюзовый. Кнопки, ссылки, выделение, логотип |
| `--color-text-main` | `#FFFFFF` | Основной цвет текста |
| `--color-text-muted` | `#A3A3A3` | Вторичный текст, подписи |

### Производные

| Класс | Назначение |
|-------|-----------|
| `bg-white` | Карточки Contemporary Art, коллаж, CTA |
| `bg-black` | Фон видео-галереи, оверлеи |
| `bg-[#f4f4f4]` | Светлый фон Contemporary Art (Part 1) |
| `text-white/70` | Приглушённый белый (навигация, описания) |
| `border-white/10` | Тонкие разделители |

---

## 2. Типографика

### Шрифты

| Шрифт | Переменная | Класс | Назначение |
|-------|-----------|-------|------------|
| **Montserrat** | `--font-montserrat` | `.font-montserrat` | Заголовки, навигация, кнопки |
| **Inter** | `--font-sans` | `.font-inter` | Наборный текст, описания |

### Размеры заголовков

| Элемент | Mobile | Desktop | Стили |
|---------|--------|---------|-------|
| Hero | `text-4xl` | `text-7xl` / `lg:text-[6rem]` | `font-bold tracking-tighter uppercase` |
| Секция h2 (крупный) | `text-4xl` | `sm:text-5xl lg:text-6xl` | `font-black uppercase tracking-tight` |
| Секция h2 (средний) | `text-3xl` | `sm:text-5xl` | `font-black uppercase` |
| Карточка h3 | `text-xl` | `xl:text-3xl` | `font-black uppercase` |
| Описание | `text-sm` | `sm:text-base` | `leading-relaxed` |

---

## 3. Компоновка

### Header: `min-h-[5rem]` (80px), `fixed top-0 z-50`

### Высота секций

| Паттерн | Где |
|---------|-----|
| `h-[100svh]` | ArtHero |
| `h-[calc(100vh-80px)]` | ArtProtest, ArtCollage |
| `min-h-[calc(100vh-80px)]` | ArtGalleryTest, ArtContemporary |

---

## 4. Компоненты

### Кнопка CTA
`bg-[#14F1D9] text-[#111111] font-black uppercase tracking-wider rounded-none`
Hover: `hover:bg-white`

### Дропдаун
`bg-[#1A1A1A] border border-white/10 rounded-sm shadow-2xl`

### Контейнер-заглушка (ArtProtest)
`border-2 border-black`, SVG-крест внутри.
Desktop: `w-[40%] h-[60vh]`, Mobile: `w-[25%] h-[50vh]`

---

## 5. Текстуры и фоны

| Файл | Назначение |
|------|-----------|
| `paper-clean-dark.png` | Текстура мятой бумаги (fixed, opacity-70, mix-blend-screen) |
| `paper-bg-dark.png` | Фон body (blend-mode: overlay) |
| `seamless_ceiling_v3_11_final1.jpg` | Бетонная стена (горизонтальный скролл) |

---

## 6. Анимации

| Эффект | Реализация | Где |
|--------|-----------|-----|
| Появление при скролле | framer-motion useInView | ArtSpace, ArtContemporary |
| Параллакс | framer-motion useScroll | ArtHero |
| Ч/Б → Цвет ховер | CSS `.photo-hover-effect` | Фото-карточки |
| Горизонтальный скролл | Нативный overflow-x + Scroll Snap | ArtProtest |
| Glassmorphism | `backdrop-blur-sm bg-white/5` | ArtHero badge |

---

## 7. Зависимости

| Пакет | Для чего |
|-------|---------|
| `framer-motion` | Анимации |
| `lucide-react` | Иконки |
| `next/image` | Оптимизация картинок |
| `next/font/google` | Шрифты |
| `@vercel/analytics` | Аналитика (prod) |

---

## 8. Tailwind token classes (R1 Phase 2)

Hex arbitrary values in `className` map to `@theme` tokens in `app/globals.css`:

| Legacy arbitrary class | Token class | CSS variable |
|------------------------|-------------|--------------|
| `text-[#14F1D9]` | `text-primary` | `--color-primary` |
| `bg-[#14F1D9]` | `bg-primary` | `--color-primary` |
| `border-[#14F1D9]` | `border-primary` | `--color-primary` |
| `bg-[#111111]` / `bg-[#111]` | `bg-background` | `--color-background` |
| `text-[#A3A3A3]` | `text-muted-foreground` | `--color-text-muted` |
| `bg-[#1A1A1A]` / `bg-[#161616]` (panels) | `bg-surface` | `--color-surface` |
| `bg-[#181818]` (elevated cards) | `bg-surface-elevated` | `--color-surface-elevated` |
| `text-[#111111]` / `text-[#111]` (on primary, ink on light) | `text-background` | `--color-background` |
| `border-[#111111]` / `border-[#111]` | `border-background` | `--color-background` |
| `selection:bg-[#14F1D9]` | `selection:bg-primary` | `--color-primary` |

Opacity modifiers stay on the token (e.g. `bg-primary/10`, `border-primary/30`, `bg-surface/95`, `border-background/10`). Gradient stops and side borders use the same tokens (`from-background`, `border-l-primary`, `fill-primary`) where the hex matched the table above. Inline `style` may use `var(--color-primary)`, `var(--color-surface)`, etc. when arbitrary hex matched this table.
