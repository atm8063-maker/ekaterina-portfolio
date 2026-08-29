import { motion } from "framer-motion";

export function ArtCollage() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[500px] max-h-[850px] overflow-hidden bg-white flex border-b border-[#111111]/10">
      <div className="flex-1 relative overflow-hidden h-full bg-white">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          className="w-full flex flex-col"
        >
          <img src="/collage-3.jpg" alt="Коллаж работ из смолы" className="w-full h-auto min-h-[150vh] object-cover block" />
          <img src="/collage-3.jpg" alt="Коллаж работ из смолы" className="w-full h-auto min-h-[150vh] object-cover block" />
        </motion.div>
      </div>
    </section>
  );
}
