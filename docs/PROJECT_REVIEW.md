# Обзор проекта — Portfolio Ekaterina Razumova

> Обзор для ревью репозитория. Обновлено: 2026-10-08.  
> Живая операционная документация по-прежнему в `docs/STATE.md`, `docs/BACKLOG.md`, `docs/DESIGN_SYSTEM.md`.

---

## Что это за проект

**Одностраничный маркeting-сайт + длинная art-лента + кейсы** для **Екатерины Разумовой** — позиционирование *Creative Generalist* (PR, медиа, UX/UI, смешанное искусство, смола, обучение).

Продакшен-домен задан в `lib/site-config.ts`: `https://ekaterinarazumova.com`.

Сайт решает две задачи для разных аудиторий:

| Аудитория | Маршрут | Задача |
|-----------|---------|--------|
| Заказчики, работодатели, бизнес | `/` | Кто такая Екатерина, компетенции, профессиональные кейсы, контакт |
| Комьюнити, коллекционеры, смолянисты | `/fir_tree_art` | Портфолио искусства, награды, СМИ, отзывы, Instagram |

Переключение — через фиксированный **Header** (`components/layout/Header.tsx`): дропдауны «Карьера» и «Искусство» с якорными ссылками.

---

## Стек и инфраструктура

| Слой | Технологии |
|------|------------|
| Framework | **Next.js 16** (App Router), **React 19** |
| Стили | **Tailwind CSS v4**, shadcn/base-ui, `app/globals.css` |
| Анимации | **Framer Motion** (основной движок на сайте) |
| Шрифты | **Montserrat** (заголовки), **Inter** (тело) — `next/font` в `app/layout.tsx` |
| Аналитика | `@vercel/analytics` |
| Контакт | **Web3Forms** (`components/contact-form.tsx`) |
| Деплой | типичный **Vercel** (следы v0 в metadata, `.vercel` в gitignore) |

Команды:

```bash
npm run dev      # локальная разработка
npm run build    # статическая генерация страниц + кейсов
npm run start    # production server
npm run lint     # ESLint
```

---

## Как устроена навигация и страницы

### Главная `/`

Секции на одной странице (`app/page.tsx`):

1. **Hero** — представление, Creative Generalist  
2. **Marquee** — бегущие строки (навыки / программы / медиа)  
3. **About** — биография и роль  
4. **Competencies** — аккордеон навыков  
5. **Portfolio** — горизонтальная карусель кейсов (`lib/data.ts` → `cases[]`)  
6. **Contact** — форма связи  

Якорный скролл: `hash` + `scrollIntoView` в `useEffect`, секции с `scroll-mt-*` под высоту хедера (~80px).

### Искусство `/fir_tree_art`

Длинный вертикальный лендинг (`app/fir_tree_art/page.tsx`): hero, галереи, contemporary block, горизонтальная «стена» артивизма, техники, цифры, награды, бренд, обучение, СМИ, отзывы, контакты. Фон — текстура смятой бумаги (`/paper-clean-dark.png`).

Статус блоков и известные баги — в **`docs/STATE.md`** (актуальнее, чем `docs/structure.md`).

### Кейсы

- **Карусель на главной** ведёт на `/cases/[slug]` или `customHref` (например Nick → `/case`, resin → `/fir_tree_art`).  
- **Данные:** `lib/data.ts` — `cases`, `caseDetails`, типы секций кейса.  
- **Рендер:** `app/cases/[slug]/page.tsx` — для части slug’ов отдельные React-компоненты (`components/cases/*-case.tsx`), для остальных — `CasePageClient` + markdown/секции из data.  
- **Интерактивный кейс Nick Potapov:** `/case` и slug `05-nick-potapov-site`.  

Исходники описаний кейсов также лежат в `public/Кейсы/*/ОПИСАНИЕ.md` (контент-референс).

### Служебные и экспериментальные маршруты

Orphan-страницы для A/B и черновиков (не в меню, но доступны по URL):  
`art-concrete`, `art-perspective`, `art-hero`, `collage-test`, `reference-collage`, `testimonials-test`, mosaic-эксперименты и т.д. — см. раздел «Известные проблемы» в `docs/STATE.md`.

### API

- `app/api/save-sectors/route.ts` — утилита для сохранения секторов (вспомогательный инструмент, не ядро сайта).

---

## Структура репозитория (кратко)

```text
app/                    # Next.js routes
components/
  layout/Header.tsx     # общая шапка
  sections/             # секции главной и art-страницы
  cases/                # полноэкранные кейс-лонгриды
  ui/                   # кнопки, карточки, заглушки
lib/
  data.ts               # кейсы и тексты кейсов (большой файл)
  site-config.ts        # SITE_URL
  translations.ts       # i18n (EN в хедере — toast «скоро»)
public/                 # изображения, кейсы, testimonials, gallery JSON
docs/                   # STATE, BACKLOG, design system, блоки
_backups/               # legacy Nick site, tabbed cases, старые галереи
.agents/AGENTS.md       # правила для AI-агентов по этому проекту
.cursor/                # Cursor rules, skills, hooks (перенесено из binary-options)
```

---

## Дизайн-система

Кратко: тёмный фон `#111111`, акцент `#14F1D9`, белый / `#A3A3A3`, текстуры бумаги и бетона.  
Полная спецификация: **`docs/DESIGN_SYSTEM.md`**.

---

## Контент и ограничения (важно при правках)

Из `.agents/AGENTS.md`:

- **Не менять тексты на сайте** без явной команды (заголовки, биографии, метрики, подписи).  
- **Не ломать блоки со статусом ✅** в `docs/STATE.md` без согласования.  
- **Не тянуть код** из других репозиториев (в т.ч. старый `portfolio-website`).  
- Критичные фиксированные решения: высота Header 80px, не восстанавливать удалённую Part 2 в ArtContemporary, не удалять ArtGalleryTest.

---

## Текущее состояние разработки (сводка)

По `docs/STATE.md` (даты в файле — осень 2026):

| Область | Состояние |
|---------|-----------|
| `/fir_tree_art` | Основной фокус; почти все блоки ✅; **ArtProtest** 🔧 (заглушки фото); **скетчи** — stub |
| `/` (career) | Базовые блоки есть; «не в активной разработке» в STATE |
| Кейсы | Унифицированы в лонгриды (тег v2026-09-10); часть кейсов 08–11 требует наполнения (см. BACKLOG) |
| Legacy | Сайт Nick Potapov архивирован в `_backups/legacy-nick-site/` |

Актуальный бэклог: **`docs/BACKLOG.md`**.

---

## Артефакты вне продакшена

Корневые Figma/PDF-скрач, дубли `public/cases_graphics` и `public/case-assets` (медиа перенесены в `public/case/assets/` для `/case/index.html`), неиспользуемые компоненты и vendored `.cursor/skills` **удалены** (2026-10-08). Сохранено в `_backups/`: legacy Nick site, tabbed cases, `public-seedance-gallery`, `public-cases_graphics` (копия HTML-инфографики для архива), `backup_aug25_info.md`. Исторический план: `docs/PLAN.md`.

Orphan-маршруты (`/collage-test`, mosaic, `/testimonials-test`, …) **оставлены** — см. `docs/STATE.md` (SYS-001).

---

## Agent / Cursor tooling

| В git | Назначение |
|-------|------------|
| `.agents/AGENTS.md` | Протокол работы с проектом |
| `.cursor/rules/*.mdc` | Только **project rules** (контекст, design/motion, pre-commit review, memory) |
| `docs/*` | STATE, BACKLOG, design system |

Skills (impeccable, animate, a11y, …) подключаются из **глобального** каталога Cursor — в репозиторий не копируются.

Локальные заметки: `additional-docs/` (gitignore).

---

## Рекомендуемый порядок чтения для нового разработчика

1. Этот файл  
2. `docs/structure.md` — карта «двух вселенных»  
3. `docs/STATE.md` — что готово / что нельзя трогать  
4. `docs/DESIGN_SYSTEM.md`  
5. `app/page.tsx` + `app/fir_tree_art/page.tsx` — сборка страниц  
6. `lib/data.ts` — кейсы  
