"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/hero";
import { MarqueeRow } from "@/components/sections/marquee-tags";
import About from "@/components/sections/about";
import Competencies from "@/components/sections/Competencies";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = decodeURIComponent(hash.replace("#", ""));
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const t1 = setTimeout(scrollToHash, 100);
    const t2 = setTimeout(scrollToHash, 400);

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      {/* 1. HERO */}
      <div id="hero" className="scroll-mt-4">
        <Hero />
      </div>

      <MarqueeRow type="programs" direction="left" speed="40s" className="pt-16 lg:pt-32 pb-4 lg:pb-8" />
      
      {/* 2. ABOUT */}
      <div id="about" className="scroll-mt-4">
        <div id="bio" className="scroll-mt-4" />
        <About />
      </div>

      <MarqueeRow type="media" direction="right" speed="45s" />
      
      {/* 3. COMPETENCIES / SKILLS */}
      <div id="competencies" className="scroll-mt-4">
        <div id="skills" className="scroll-mt-4" />
        <div id="approach" className="scroll-mt-4" />
        <Competencies />
      </div>

      <MarqueeRow type="skills" direction="left" speed="50s" />
      
      {/* 4. PORTFOLIO / CASES */}
      <div id="cases" className="scroll-mt-4">
        <div id="portfolio" className="scroll-mt-4" />
        <Portfolio />
      </div>

      <MarqueeRow type="industries" direction="right" speed="55s" />
      
      {/* 5. CONTACT */}
      <div id="contact" className="scroll-mt-4">
        <div id="contacts" className="scroll-mt-4" />
        <Contact />
      </div>
    </main>
  );
}
