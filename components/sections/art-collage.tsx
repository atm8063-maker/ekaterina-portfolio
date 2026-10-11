import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function ArtCollage() {
  const { isEn } = useLanguage();
  const alt = isEn ? "Collage of resin artworks" : "Коллаж работ из смолы";
  return (
    <section id="collage" className="relative w-full h-[calc(100vh-80px)] min-h-[500px] max-h-[850px] overflow-hidden bg-white flex border-b border-[#111111]/10 scroll-mt-20">
      <div className="flex-1 relative overflow-hidden h-full bg-white">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          className="w-full flex flex-col"
        >
          <img src="/collage-3.jpg" alt={alt} className="w-full h-auto min-h-[150vh] object-cover block" />
          <img src="/collage-3.jpg" alt={alt} className="w-full h-auto min-h-[150vh] object-cover block" />
        </motion.div>
      </div>
    </section>
  );
}
