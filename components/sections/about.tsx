"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="pt-16 lg:pt-32 pb-[20px] lg:pb-[250px] relative overflow-hidden bg-[#111111] text-white">
      {/* Clean Dark Paper Background - Newly generated texture with slight cyan sheen */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Seamless ultra-smooth blend gradient at the top (covers paper and photo, but NOT text) */}
      <div className="absolute top-0 left-0 w-full h-[440px] lg:h-[840px] bg-gradient-to-b from-[#111111] from-[10%] via-[#111111]/50 via-[40%] to-transparent z-[15] pointer-events-none" />
      
      {/* Bottom gradient fade for smooth transition to next section and hiding the brush cut */}
      <div className="absolute bottom-0 left-0 w-full h-48 lg:h-[400px] bg-gradient-to-t from-[#111111] via-[#111111]/90 to-transparent z-[15] pointer-events-none" />

      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center order-1 px-6 sm:px-12 lg:pl-[10%] xl:pl-[15%] lg:pr-12 relative z-20 lg:-mt-[5%]"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-white mt-12 lg:mt-[136px]">
              МОЙ <br className="lg:hidden" /><span className="text-[#14F1D9]">ПОДХОД</span>
            </h2>
            <div className="space-y-6 text-[#A3A3A3] text-base md:text-lg lg:text-xl font-medium leading-[1.8] font-inter">
              <p className="max-w-[440px]">
                Я — специалист полного цикла. Мой подход заключается в том, чтобы взять идею на стадии зарождения и довести её до финальной реализации. 
              </p>
              <p className="max-w-[440px]">
                В мире, где узкая специализация часто приводит к разрыву между смыслами и формой, я объединяю весь контент в единое целое, органично сплетая между собой тексты, дизайн, pr, маркетинг и технологии. Профильное образование, 20 лет работы с креативом и применение ИИ позволяют мне видеть картину целиком и создавать продукты, которые не просто выглядят стильно и дорого, но и решают конкретные бизнес-задачи.
              </p>
              
              {/* Quote and button row */}
              <div className="relative pt-2">
                <div className="pl-6 border-l-[3px] border-[#14F1D9] italic font-semibold text-white/90 space-y-2 max-w-[440px]">
                  <p>От первого черновика UX-текста до финального пикселя в интерфейсе.</p>
                  <p>От начальной строки пресс-релиза до публикаций в Forbes.</p>
                  <p>От поста в инстаграме до пресс-тура.</p>
                </div>
                
                {/* Button - Under ring photo on desktop */}
                <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-[70px] lg:left-[550px] xl:left-[590px] z-30">
                  <Link href="#contact" className="inline-block bg-[#14F1D9] hover:bg-white text-[#111111] font-bold text-sm md:text-base px-6 py-4 tracking-widest uppercase transition-all rounded-none shadow-lg hover:shadow-xl hover:-translate-y-1 font-montserrat whitespace-nowrap">
                    ПОДРОБНЕЕ ОБО МНЕ
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-2 relative z-10 -mt-[calc(40%+100px)] sm:-mt-[calc(30%+100px)] md:-mt-[400px] lg:-mt-[500px] -mb-[250px] md:-mb-[300px] lg:-mb-[800px]"
          >
            <img 
              src="/about-composition.png" 
              alt="Обо мне"
              className="w-full h-auto block"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
