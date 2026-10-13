"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

type Testimonial = {
  id: string;
  author: string;
  role?: string;
  quote?: string;
  image?: string;
};

const itemsRu: Testimonial[] = [
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
    image: "/testimonials/alena-earrings.webp",
  },
  {
    id: "adelii",
    author: "@adeliimakeup",
    role: "Форма для слепка",
    image: "/testimonials/adelii-leaf-mold.webp",
  },
  {
    id: "durackaya",
    author: "@durackaya_hat",
    role: "Серьги",
    image: "/testimonials/durackaya-earrings.webp",
  },
  {
    id: "juliakardash",
    author: "@julia.kardash.beauty",
    role: "Палитра ручной работы",
    image: "/testimonials/juliakardash-palette.webp",
  },
  {
    id: "anchanov",
    author: "@ancha_nov",
    role: "Покупательница",
    quote: "Потрясающий мастер, обалденные работы. До мурашек! Вдохновение в каждой детали 🤍",
    image: "/testimonials/anchanov-geode-croissant.webp",
  },
  {
    id: "pendant",
    author: "Покупательница",
    role: "Кулон на заказ",
    quote: "Шикарная штука;) Кусочек моря",
    image: "/testimonials/pendant-selfie.webp",
  },
  {
    id: "beautytime",
    author: "@beautytime.nailroom",
    role: "Мастер-класс",
    quote: "Очень понравился мастер-класс от @fir_tree_art по эпоксидной смоле 🥰",
    image: "/testimonials/beautytime-snowflakes.webp",
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

const itemsEn: Testimonial[] = [
  {
    id: "vajs",
    author: "@vajs_craft_store",
    role: "Epoxy resin course student",
    quote:
      "I took 2 of your amazing courses (the winter one and the sphere one), and you know what?! One of your courses paid for itself 173 times over — that's how many spheres I sold this year! It's thanks to your incredible idea that I've made the finals for ornaments in the art race two years running. Thank you!!!",
  },
  {
    id: "tatiyanamirny",
    author: "@tatiyanamirny",
    role: "Comment on a lesson",
    quote: "Out of this world!",
  },
  {
    id: "avegast11",
    author: "@avegast11",
    role: "Comment on a lesson",
    quote: "Katya, I came to this course specifically for this coaster))) But I've already seen so much more here!!!",
  },
  {
    id: "epoxy_art_garden",
    author: "@epoxy_art_garden",
    role: "Comment on a lesson",
    quote: "Beautiful effect! Thank you, Katenka!",
  },
  {
    id: "lanamalykh",
    author: "@lanamalykh",
    role: "Comment on a lesson",
    quote: "So coooool 🔥🔥🔥 Thank you, Katya 😍",
  },
  {
    id: "student2",
    author: "School Student (2nd cohort)",
    role: "Direct message",
    quote:
      "I studied in Maria's second cohort, where you were our favorite mentor at the school! Your work inspired us!! You understand resin so well! You're an artist — don't set your art aside for others, it's your life, your path, your light!",
  },
  {
    id: "delivery",
    author: "Customer",
    role: "After delivery",
    quote: "Everything arrived, nothing broke, they look beautiful, the packaging is gorgeous, thank you!!! 🙏❤️",
  },
  {
    id: "alena",
    author: "@alenaafrokudri",
    role: "Custom earrings",
    quote: "Such beauty they made for me 🥰",
    image: "/testimonials/alena-earrings.webp",
  },
  {
    id: "adelii",
    author: "@adeliimakeup",
    role: "Cast mold",
    image: "/testimonials/adelii-leaf-mold.webp",
  },
  {
    id: "durackaya",
    author: "@durackaya_hat",
    role: "Earrings",
    image: "/testimonials/durackaya-earrings.webp",
  },
  {
    id: "juliakardash",
    author: "@julia.kardash.beauty",
    role: "Handmade palette",
    image: "/testimonials/juliakardash-palette.webp",
  },
  {
    id: "anchanov",
    author: "@ancha_nov",
    role: "Customer",
    quote: "An amazing artist, stunning work. Gives me chills! Inspiration in every detail 🤍",
    image: "/testimonials/anchanov-geode-croissant.webp",
  },
  {
    id: "pendant",
    author: "Customer",
    role: "Custom pendant",
    quote: "Gorgeous piece ;) A little slice of the sea",
    image: "/testimonials/pendant-selfie.webp",
  },
  {
    id: "beautytime",
    author: "@beautytime.nailroom",
    role: "Workshop",
    quote: "Really enjoyed the epoxy resin workshop by @fir_tree_art 🥰",
    image: "/testimonials/beautytime-snowflakes.webp",
  },
  {
    id: "mariiialakhmakova",
    author: "@mariiialakhmakova",
    role: "Fellow artist",
    quote: "An artist whose work inspires, catches the eye, and doesn't let go. And what she does with the sea is just incredible 🔥🔥🔥",
  },
  {
    id: "saianare",
    author: "@saianare",
    role: "Customer",
    quote: "Good morning! Makes me want to go to the beach. But marine artist @fir_tree_art can make the sea out of resin. And the sea is always close by. How is this even possible? Magic and beauty 😍",
  },
  {
    id: "innabrusovaveretina",
    author: "@innabrusovaveretina",
    role: "Comment on a lesson",
    quote: "Amazing 🔥",
  },
  {
    id: "pleshakova_art_dm",
    author: "@pleshakova_art_dm",
    role: "Comment on a lesson",
    quote: "Huge thanks for the detailed lesson 😍🙏",
  },
  {
    id: "ahvalya_art",
    author: "@ahvalya_art",
    role: "Comment on a lesson",
    quote: "Thank you for the lesson 🔥🔥🔥",
  },
  {
    id: "kristina_zakharova_art",
    author: "@kristina_zakharova_art",
    role: "Comment on a lesson",
    quote: "Katya, hello! I watched your lesson, everything was so clear and detailed! Thank you!",
  },
];

function MiniCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex items-center gap-3 rounded-none border border-white/10 bg-surface p-3">
      {item.image ? (
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-none bg-black/40">
          <Image src={item.image} alt={item.author} fill className="object-cover" />
        </div>
      ) : (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none bg-black/30">
          <Quote className="h-5 w-5 text-primary" strokeWidth={2.5} />
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
    <div className="marquee-pause group relative h-[560px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
      <div
        className="animate-marquee-vertical flex flex-col gap-3"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: direction === "down" ? "reverse" : "normal",
        }}
      >
        {looped.map((item, i) => (
          <MiniCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function ArtTestimonials() {
  const { isEn } = useLanguage();
  const items = isEn ? itemsEn : itemsRu;
  const lane0 = items.filter((_, i) => i % 3 === 0);
  const lane1 = items.filter((_, i) => i % 3 === 1);
  const lane2 = items.filter((_, i) => i % 3 === 2);

  return (
    <section id="testimonials" className="relative bg-background py-24 scroll-mt-20 overflow-hidden">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.webp" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top & bottom gradient blend fades */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-b from-background via-background/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-t from-background via-background/60 to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
        <h2 className="mb-12 text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight max-w-2xl">
          {isEn ? "Testimonials" : "Отзывы"}
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Desktop: 3 Columns */}
        <div className="hidden lg:flex gap-4">
          <div className="flex-1">
            <AutoScrollLane laneItems={lane0} direction="up" duration={34} />
          </div>
          <div className="flex-1">
            <AutoScrollLane laneItems={lane1} direction="down" duration={26} />
          </div>
          <div className="flex-1">
            <AutoScrollLane laneItems={lane2} direction="up" duration={40} />
          </div>
        </div>

        {/* Mobile & Tablet: 1 Single Clean Column */}
        <div className="block lg:hidden w-full max-w-md mx-auto">
          <AutoScrollLane laneItems={items} direction="up" duration={65} />
        </div>
      </div>
    </section>
  );
}
