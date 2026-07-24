import Header from "@/components/layout/Header";
import Hero from "@/components/sections/hero";
import { MarqueeRow } from "@/components/sections/marquee-tags";
import About from "@/components/sections/about";
import Competencies from "@/components/sections/Competencies";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <Hero />
      <MarqueeRow type="programs" direction="left" speed="40s" className="pt-16 lg:pt-32 pb-4 lg:pb-8" />
      <About />
      <MarqueeRow type="media" direction="right" speed="45s" />
      <Competencies />
      <MarqueeRow type="skills" direction="left" speed="50s" />
      <Portfolio />
      <MarqueeRow type="industries" direction="right" speed="55s" />
      <Contact />
    </main>
  );
}
