import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <ScrollProgress />
      <main id="main-content">
        <Hero />
        <div className="site-container credentials-strip" aria-label="Qualifications and experience">
          <div><strong>3.83–4.0</strong><span>GPA across semesters</span></div>
          <div><strong>CSWP</strong><span>SOLIDWORKS Professional</span></div>
          <div><strong>TASA 2026</strong><span>Finalist team · Payload lead</span></div>
          <div><strong>Netherlands</strong><span>Overseas learning · 2026</span></div>
        </div>
        <Projects />
        <About />
        <Timeline />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
