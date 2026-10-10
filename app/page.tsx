"use client";

import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/hero";
import { MarqueeRow } from "@/components/sections/marquee-tags";
import About from "@/components/sections/about";
import { SectionSkeleton } from "@/components/shared/section-skeleton";

const Competencies = dynamic(() => import("@/components/sections/Competencies"), {
  loading: () => <SectionSkeleton minHeight="min-h-[40vh]" />,
});

const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), {
  loading: () => <SectionSkeleton minHeight="min-h-[50vh]" />,
});

const Contact = dynamic(() => import("@/components/sections/contact"), {
  loading: () => <SectionSkeleton minHeight="min-h-[30vh]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <div id="hero" className="scroll-mt-header">
        <Hero />
      </div>

      <MarqueeRow type="skills" variant="programs" direction="left" speed="40s" className="py-8 lg:py-14" />

      <div id="about" className="scroll-mt-header">
        <div id="bio" className="scroll-mt-header" />
        <About />
      </div>

      <MarqueeRow type="programs" variant="media" direction="right" speed="45s" />

      <div id="competencies" className="scroll-mt-header">
        <div id="skills" className="scroll-mt-header" />
        <div id="approach" className="scroll-mt-header" />
        <Competencies />
      </div>

      <MarqueeRow type="media" variant="skills" direction="left" speed="50s" />

      <div id="cases" className="scroll-mt-header">
        <div id="portfolio" className="scroll-mt-header" />
        <Portfolio />
      </div>

      <MarqueeRow type="industries" variant="industries" direction="right" speed="55s" />

      <div id="contact" className="scroll-mt-header">
        <div id="contacts" className="scroll-mt-header" />
        <Contact />
      </div>
    </main>
  );
}
