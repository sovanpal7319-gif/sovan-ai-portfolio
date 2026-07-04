"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import BackToTop from "@/components/effects/BackToTop";
import GlobalBackground from "@/components/effects/GlobalBackground";

export default function Home() {
  return (
    <>
      {/* Global animated background — covers entire page */}
      <GlobalBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}