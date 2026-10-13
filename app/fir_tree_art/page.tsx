"use client";

import Header from "@/components/layout/Header";
import { ArtHero } from "@/components/sections/art-hero";
import {
  ArtSpace,
  ArtCollage,
  ArtGalleryTest,
  ArtContemporary,
  ArtProtest,
  ArtNoBorders,
  ArtTechniques,
  ArtSketches,
  ArtNumbers,
  ArtAwards,
  ArtBrand,
  ArtTeaching,
  ArtMedia,
  ArtTestimonials,
  ArtContacts,
} from "@/components/fir-tree-art/lazy-sections";
import { SitePaperBackground } from "@/components/shared/site-paper-background";
import { SectionGradientFade } from "@/components/shared/section-gradient-fade";

export default function ArtPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden font-inter selection:bg-primary selection:text-black">
      <Header />

      <SitePaperBackground priority />
      <SectionGradientFade position="top" />

      <div id="hero" className="scroll-mt-header">
        <ArtHero />
      </div>

      <div className="relative z-10">
        <div id="gallery" className="scroll-mt-header">
          <div id="space" className="scroll-mt-header" />
          <div id="manifesto" className="scroll-mt-header" />
          <div id="art-space" className="scroll-mt-header" />
          <div id="art-gallery" className="scroll-mt-header" />
          <ArtSpace />
        </div>

        <div id="collage" className="scroll-mt-header">
          <div id="resin-collage" className="scroll-mt-header" />
          <ArtCollage />
        </div>

        <div id="video-panels" className="relative w-full overflow-hidden border-b border-white/10 scroll-mt-header">
          <div id="video-gallery" className="scroll-mt-header" />
          <div id="videos" className="scroll-mt-header" />
          <ArtGalleryTest />
        </div>

        <div id="artivism" className="scroll-mt-header">
          <div id="contemporary" className="scroll-mt-header" />
          <div id="contemporary-art" className="scroll-mt-header" />
          <div id="art-contemporary" className="scroll-mt-header" />
          <ArtContemporary />
        </div>

        <div id="protest" className="scroll-mt-header">
          <div id="art-protest" className="scroll-mt-header" />
          <div id="art-gallery-concrete" className="scroll-mt-header" />
          <ArtProtest />
        </div>

        <div id="resin-range" className="scroll-mt-header">
          <div id="range" className="scroll-mt-header" />
          <div id="wide-range" className="scroll-mt-header" />
          <div id="no-borders" className="scroll-mt-header" />
          <ArtNoBorders />
        </div>

        <div id="techniques" className="scroll-mt-header">
          <div id="tools" className="scroll-mt-header" />
          <ArtTechniques />
        </div>

        <div id="sketches" className="scroll-mt-header">
          <div id="portraits" className="scroll-mt-header" />
          <div id="sketches-portraits" className="scroll-mt-header" />
          <ArtSketches />
        </div>

        <div id="numbers" className="scroll-mt-header">
          <div id="facts" className="scroll-mt-header" />
          <div id="stats" className="scroll-mt-header" />
          <div id="competencies" className="scroll-mt-header" />
          <ArtNumbers />
        </div>

        <div id="awards" className="scroll-mt-header">
          <div id="wins" className="scroll-mt-header" />
          <div id="victories" className="scroll-mt-header" />
          <ArtAwards />
        </div>

        <div id="brand" className="scroll-mt-header">
          <div id="ambassador" className="scroll-mt-header" />
          <ArtBrand />
        </div>

        <div id="teaching" className="scroll-mt-header">
          <div id="education" className="scroll-mt-header" />
          <div id="masterclasses" className="scroll-mt-header" />
          <div id="muza" className="scroll-mt-header" />
          <div id="art-teaching" className="scroll-mt-header" />
          <ArtTeaching />
        </div>

        <div id="interviews" className="scroll-mt-header">
          <div id="media" className="scroll-mt-header" />
          <div id="media-publications" className="scroll-mt-header" />
          <ArtMedia />
        </div>

        <div id="testimonials" className="scroll-mt-header">
          <div id="reviews" className="scroll-mt-header" />
          <ArtTestimonials />
        </div>

        <div id="contacts" className="scroll-mt-header">
          <div id="contact" className="scroll-mt-header" />
          <div id="instagram" className="scroll-mt-header" />
          <ArtContacts />
        </div>
      </div>
    </main>
  );
}
