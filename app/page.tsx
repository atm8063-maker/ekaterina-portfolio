import Header from "@/components/layout/Header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Competencies from "@/components/sections/Competencies";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Competencies />
      <Portfolio />
      <Contact />
    </main>
  );
}
