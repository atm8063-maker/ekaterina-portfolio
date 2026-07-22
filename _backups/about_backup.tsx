"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="pt-4 pb-16 md:pt-8 md:pb-24 relative overflow-hidden bg-[#111111] text-white">
      {/* Clean Dark Paper Background - Newly generated texture with slight cyan sheen */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          
          {/* Text Content - Pulled up by 5% */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center order-1 px-6 sm:px-12 lg:pl-[10%] xl:pl-[15%] lg:pr-12 relative z-20 -mt-[5%]"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 md:mb-8 text-white tracking-widest font-montserrat mt-8 lg:mt-32">
              Creative <span className="text-[#14F1D9]">Generalist</span>
            </h2>
            <div className="space-y-6 text-[#A3A3A3] text-base md:text-lg lg:text-xl font-medium leading-[1.8] font-inter">
              <p>
                Я — специалист полного цикла. Мой подход заключается в том, чтобы взять идею на стадии зарождения и довести её до финальной, безупречной реализации. 
              </p>
              <p>
                В мире, где узкая специализация часто приводит к разрыву между смыслами и формой, я объединяю тексты, дизайн, маркетинг и технологии. Это позволяет мне видеть картину целиком и создавать продукты, которые не просто выглядят стильно и дорого, но и решают конкретные бизнес-задачи.
              </p>
              <p className="pl-6 border-l-[3px] border-[#14F1D9] italic font-semibold text-white/90">
                "От первого черновика пресс-релиза до финального пикселя в интерфейсе."
              </p>
            </div>
          </motion.div>
          
          {/* Visual Composition - Pushed up to hide transparent gap (-500px on desktop, -40% on mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-2 relative z-10 -mt-[40%] sm:-mt-[30%] md:-mt-[300px] lg:-mt-[500px]"
          >
            <img 
              src="/about-composition.png" 
              alt="Обо мне"
              className="w-full h-auto block"
            />
            {/* Button - Under left photo */}
            <div className="mt-2 lg:mt-6 pl-6 sm:pl-12 lg:pl-[15%] w-full flex justify-start">
              <Link href="#contact" className="inline-block bg-[#14F1D9] hover:bg-[#11E0C9] text-[#111111] font-black text-sm md:text-base px-6 py-4 tracking-widest uppercase transition-all rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1 font-montserrat">
                ПОДРОБНЕЕ ОБО МНЕ
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
