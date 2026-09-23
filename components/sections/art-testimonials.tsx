"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

type Testimonial = {
  id: string;
  author: string;
  role?: string;
  quote?: string;
  image?: string;
};

const items: Testimonial[] = [
  {
    id: "vajs",
    author: "@vajs_craft_store",
    role: "Ученица курса по эпоксидной смоле",
    quote:
      "Я была у вас на 2 очень крутых курсах (зимнем и по шарам), и знаете что?! Ваш один курс окупился в 173 раза — именно столько я продала шаров за этот год! Именно из-за вашей нереальной задумки я уже 2 раза подряд в финале по новогодним игрушкам в арт-гонке. Спасибо!!!",
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
      "Я училась во втором потоке у Марии, где вы были нашим любимым куратором в школе! Ваши работы вдохновляли нас!! Вы так хорошо чувствуете смолу! Вы художник, и не оставляйте творчество ради других — это ваша жизнь, ваш путь, ваш свет!",
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
    image: "/testimonials/alena-earrings.jpg",
  },
  {
    id: "adelii",
    author: "@adeliimakeup",
    role: "Форма для слепка",
    image: "/testimonials/adelii-leaf-mold.jpg",
  },
  {
    id: "durackaya",
    author: "@durackaya_hat",
    role: "Серьги",
    image: "/testimonials/durackaya-earrings.jpg",
  },
  {
    id: "juliakardash",
    author: "@julia.kardash.beauty",
    role: "Палитра ручной работы",
    image: "/testimonials/juliakardash-palette.jpg",
  },
  {
    id: "anchanov",
    author: "@ancha_nov",
    role: "Покупательница",
    quote: "Потрясающий мастер, обалденные работы. До мурашек! Вдохновение в каждой детали 🤍",
    image: "/testimonials/anchanov-geode-croissant.jpg",
  },
  {
    id: "pendant",
    author: "Покупательница",
    role: "Кулон на заказ",
    quote: "Шикарная штука;) Кусочек моря",
    image: "/testimonials/pendant-selfie.jpg",
  },
  {
    id: "beautytime",
    author: "@beautytime.nailroom",
    role: "Мастер-класс",
    quote: "Очень понравился мастер-класс от @fir_tree_art по эпоксидной смоле 🥰",
    image: "/testimonials/beautytime-snowflakes.jpg",
  },
  {
    id: "mariiialakhmakova",
    author: "@mariiialakhmakova",
    role: "Художница, коллега",
    quote: "Мастер, чьи работы вдохновляют, притягивают взгляд и не отпускают. А что она делает с морем — это просто пушка-бомба 🔥🔥🔥",
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

function MiniCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex items-center gap-3 rounded-none border border-white/10 bg-[#1A1A1A] p-3">
      {item.image ? (
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-none bg-black/40">
          <Image src={item.image} alt={item.author} fill className="object-cover" />
        </div>
      ) : (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none bg-black/30">
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

export function ArtTestimonials() {
  const lane0 = items.filter((_, i) => i % 3 === 0);
  const lane1 = items.filter((_, i) => i % 3 === 1);
  const lane2 = items.filter((_, i) => i % 3 === 2);

  return (
    <section id="testimonials" className="relative border-b border-white/10 bg-[#111111] py-20 lg:py-24 scroll-mt-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight max-w-2xl">
          Отзывы
        </h2>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Mobile Single Lane */}
        <div className="sm:hidden w-full">
          <AutoScrollLane laneItems={items} direction="up" duration={45} />
        </div>

        {/* Tablet & Desktop Multi-Lane */}
        <div className="hidden sm:flex gap-4">
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
    </section>
  );
}
