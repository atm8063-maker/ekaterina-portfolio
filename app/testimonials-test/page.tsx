"use client";

import Image from "next/image";
import { useRef } from "react";
import { Quote } from "lucide-react";

type Testimonial = {
  id: string;
  author: string;
  role?: string;
  quote?: string;
  image?: string;
  featured?: boolean;
};

const items: Testimonial[] = [
  {
    id: "vajs",
    author: "@vajs_craft_store",
    role: "Ученица курса по эпоксидной смоле",
    quote:
      "Я была у вас на 2 очень крутых курсах (зимнем и по шарам), и знаете что?! Ваш один курс окупился в 173 раза — именно столько я продала шаров за этот год! Именно из-за вашей нереальной задумки я уже 2 раза подряд в финале по новогодним игрушкам в арт-гонке. Спасибо!!!",
    featured: true,
  },
  {
    id: "tatiyanamirny",
    author: "@tatiyanamirny",
    role: "Комментарий под уроком",
    quote: "Космический!",
  },
  {
    id: "avegast11",
    author: "@avegast11",
    role: "Комментарий под уроком",
    quote: "Катя, я пришла на это обучение именно за этим подстаканником))) Но я уже здесь столько всего увидела!!!",
  },
  {
    id: "epoxy_art_garden",
    author: "@epoxy_art_garden",
    role: "Комментарий под уроком",
    quote: "Красивый эффект! Спасибо, Катенька!",
  },
  {
    id: "lanamalykh",
    author: "@lanamalykh",
    role: "Комментарий под уроком",
    quote: "Крутооооо 🔥🔥🔥 Катя, спасибо 😍",
  },
  {
    id: "student2",
    author: "Ученица школы (2 поток)",
    role: "Личное сообщение",
    quote:
      "С днём рождения! Я училась во втором потоке у Марии, где вы были нашим любимым куратором в школе! Ваши работы вдохновляли нас!! Вы так хорошо чувствуете смолу! Вы художник, и не оставляйте творчество ради других — это ваша жизнь, ваш путь, ваш свет!",
  },
  {
    id: "delivery",
    author: "Покупательница",
    role: "После доставки",
    quote: "Все дошло, ничего не побилось, выглядят прекрасно, упаковка шикарная, спасибо!!! 🙏❤️",
  },
  {
    id: "alena",
    author: "@alenaafrokudri",
    role: "Серьги на заказ",
    quote: "Какую красоту для меня сделали 🥰",
    image: "/testimonials-draft/alena-earrings.jpg",
  },
  {
    id: "adelii",
    author: "@adeliimakeup",
    role: "Форма для слепка",
    image: "/testimonials-draft/adelii-leaf-mold.jpg",
  },
  {
    id: "durackaya",
    author: "@durackaya_hat",
    role: "Серьги",
    image: "/testimonials-draft/durackaya-earrings.jpg",
  },
  {
    id: "artmeup",
    author: "@artmeup.ru",
    role: "Художница, коллега",
    quote: "Твой уровень харизмы равен уровню Вселенной 🧡 С днём рождения, Катя!",
    image: "/testimonials-draft/artmeup-birthday.jpg",
  },
  {
    id: "juliakardash",
    author: "@julia.kardash.beauty",
    role: "Палитра ручной работы",
    image: "/testimonials-draft/juliakardash-palette.jpg",
  },
  {
    id: "anchanov",
    author: "@ancha_nov",
    role: "Покупательница",
    quote: "Потрясающий мастер, обалденные работы. До мурашек! Вдохновение в каждой детали 🤍",
    image: "/testimonials-draft/anchanov-geode-croissant.jpg",
  },
  {
    id: "pendant",
    author: "Покупательница",
    role: "Кулон на заказ",
    quote: "Шикарная штука;) Кусочек моря",
    image: "/testimonials-draft/pendant-selfie.jpg",
  },
  {
    id: "beautytime",
    author: "@beautytime.nailroom",
    role: "Мастер-класс",
    quote: "Очень понравился мастер-класс от @fir_tree_art по эпоксидной смоле 🥰",
    image: "/testimonials-draft/beautytime-snowflakes.jpg",
  },
  {
    id: "mariiialakhmakova",
    author: "@mariiialakhmakova",
    role: "Художница, коллега",
    quote: "Мастер, чьи работы вдохновляют, притягивают взгляд и не отпускают. А что она делает с морем — это просто пушка-бомба 🔥🔥🔥",
  },
  {
    id: "beli4ita",
    author: "@beli4ita",
    role: "Художница, коллега",
    quote: "Нереальная красота! Вы такого ещё не видели! С днём рождения, замечательный мастер и супер-профи! Терпения, выносливости и сил в любых ситуациях!",
  },
  {
    id: "saianare",
    author: "@saianare",
    role: "Покупательница",
    quote: "Доброе утро! Хочется поехать на пляж. А вот маринист @fir_tree_art может сделать море из смолы. И море всегда рядом. Как такое можно сделать? Чудеса и красота 😍",
  },
  {
    id: "innabrusovaveretina",
    author: "@innabrusovaveretina",
    role: "Комментарий под уроком",
    quote: "Здорово 🔥",
  },
  {
    id: "pleshakova_art_dm",
    author: "@pleshakova_art_dm",
    role: "Комментарий под уроком",
    quote: "Огромное спасибо за подробный урок 😍🙏",
  },
  {
    id: "ahvalya_art",
    author: "@ahvalya_art",
    role: "Комментарий под уроком",
    quote: "Благодарю за урок 🔥🔥🔥",
  },
  {
    id: "kristina_zakharova_art",
    author: "@kristina_zakharova_art",
    role: "Комментарий под уроком",
    quote: "Катя, здравствуйте! Посмотрела ваш урок, всё чётко и подробно! Спасибо!",
  },
];

function SectionLabel({ n, title, note }: { n: string; title: string; note: string }) {
  return (
    <div className="container mx-auto px-6 pt-20 pb-10">
      <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[#14F1D9]">
        Вариант {n}
      </p>
      <h2 className="mb-3 text-3xl font-black uppercase text-white font-montserrat sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-xl text-sm text-white/50">{note}</p>
    </div>
  );
}

/* ---------- Variant A: Bento / Masonry grid ---------- */

function BentoCard({ item }: { item: Testimonial }) {
  const isBig = item.featured;

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] ${
        isBig ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
    >
      {item.image && (
        <div className="relative aspect-[4/5] w-full bg-black/40">
          <Image src={item.image} alt={item.author} fill className="object-cover" />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        {item.quote ? (
          <div className="flex flex-1 flex-col justify-center">
            <Quote className={`mb-2 text-[#14F1D9] ${isBig ? "h-8 w-8" : "h-5 w-5"}`} strokeWidth={2.5} />
            <p className={`leading-relaxed text-white/80 ${isBig ? "text-xl sm:text-2xl" : "text-sm"}`}>
              {item.quote}
            </p>
          </div>
        ) : null}

        <div className="mt-auto pt-2">
          <p className="text-sm font-bold text-white">{item.author}</p>
          {item.role && <p className="text-xs text-white/40">{item.role}</p>}
        </div>
      </div>
    </article>
  );
}

function BentoVariant() {
  return (
    <div className="container mx-auto px-6 pb-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:auto-rows-[minmax(0,auto)] lg:grid-cols-4">
        {items.map((item) => (
          <BentoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Variant B: Horizontal scroll row ---------- */

function ScrollCard({ item }: { item: Testimonial }) {
  return (
    <article
      className={`group flex shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] ${
        item.featured ? "w-[300px] sm:w-[420px]" : "w-[260px] sm:w-[300px]"
      }`}
    >
      {item.image && (
        <div className="relative aspect-[4/5] w-full bg-black/40">
          <Image
            src={item.image}
            alt={item.author}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        {item.quote && <p className="text-sm leading-relaxed text-white/70">{item.quote}</p>}
        <div className="mt-auto pt-2">
          <p className="text-sm font-bold text-white">{item.author}</p>
          {item.role && <p className="text-xs text-white/40">{item.role}</p>}
        </div>
      </div>
    </article>
  );
}

function ScrollVariant() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { isDown: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    el.classList.add("cursor-grabbing");
    el.classList.remove("cursor-grab");
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !drag.current.isDown) return;
    el.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.isDown = false;
    const el = scrollRef.current;
    el?.classList.remove("cursor-grabbing");
    el?.classList.add("cursor-grab");
  };

  return (
    <div
      ref={scrollRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onDragStart={(e) => e.preventDefault()}
      className="hide-scrollbar flex cursor-grab select-none overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-4"
    >
      {items.map((item) => (
        <ScrollCard key={item.id} item={item} />
      ))}
      <div className="w-px shrink-0" />
    </div>
  );
}

/* ---------- Variant C: Auto-scrolling vertical lanes ---------- */

function MiniCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] p-3">
      {item.image ? (
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-black/40">
          <Image src={item.image} alt={item.author} fill className="object-cover" />
        </div>
      ) : (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-black/30">
          <Quote className="h-5 w-5 text-[#14F1D9]" strokeWidth={2.5} />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-xs leading-snug text-white/80">{item.quote}</p>
        <p className="mt-1 truncate text-[11px] font-bold text-white">{item.author}</p>
      </div>
    </article>
  );
}

function AutoScrollLane({
  laneItems,
  direction,
  duration,
}: {
  laneItems: Testimonial[];
  direction: "up" | "down";
  duration: number;
}) {
  const looped = [...laneItems, ...laneItems];
  return (
    <div className="group relative h-[560px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
      <div
        className="animate-marquee-vertical flex flex-col gap-3 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s`, animationDirection: direction === "down" ? "reverse" : "normal" }}
      >
        {looped.map((item, i) => (
          <MiniCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function FeedVariant() {
  const lane0 = items.filter((_, i) => i % 3 === 0);
  const lane1 = items.filter((_, i) => i % 3 === 1);
  const lane2 = items.filter((_, i) => i % 3 === 2);

  return (
    <div className="container mx-auto px-6 pb-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <AutoScrollLane laneItems={lane0} direction="up" duration={34} />
        </div>
        <div className="flex-1">
          <AutoScrollLane laneItems={lane1} direction="down" duration={26} />
        </div>
        <div className="hidden flex-1 lg:block">
          <AutoScrollLane laneItems={lane2} direction="up" duration={40} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function TestimonialsTestPage() {
  return (
    <main className="min-h-screen bg-[#111111] pb-32">
      <div className="container mx-auto px-6 pt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">
          Черновик для сравнения — не в навигации. Выбран вариант C, он на проде: /fir_tree_art#testimonials
        </p>
        <h1 className="mt-2 text-4xl font-black uppercase text-white font-montserrat sm:text-6xl">
          Отзывы — 3 варианта вёрстки
        </h1>
        <p className="mt-4 max-w-2xl text-white/60">
          Один и тот же набор реальных отзывов (сообщения из директа, комментарии, репосты историй) в трёх раскладках.
          Фото обрезаны от интерфейса телефона/инстаграма, тексты — дословные цитаты.
        </p>
      </div>

      <section className="border-t border-white/10">
        <SectionLabel
          n="A"
          title="Bento-сетка"
          note="Разноразмерные карточки вперемешку: крупная цитата на весь блок для самого сильного отзыва, тред комментариев, фото- и текст-карточки. Показывает разнообразие контента, не повторяет паттерн блока «СМИ»."
        />
        <BentoVariant />
      </section>

      <section className="border-t border-white/10 bg-[#0c0c0c] py-4">
        <SectionLabel
          n="B"
          title="Горизонтальный скролл"
          note="Тот же паттерн, что уже сделан в блоке «Публикации в СМИ» (карточки в ряд, drag-scroll, snap). Консистентно и дёшево в разработке, но два одинаковых по механике блока подряд."
        />
        <ScrollVariant />
      </section>

      <section className="border-t border-white/10">
        <SectionLabel
          n="C"
          title="Авто-прокрутка колонками"
          note="Компактные мини-карточки, 3 колонки бесконечно скроллятся вертикально (разное направление и скорость), останавливаются при наведении мыши. Классический паттерн «стены отзывов»."
        />
        <FeedVariant />
      </section>
    </main>
  );
}
