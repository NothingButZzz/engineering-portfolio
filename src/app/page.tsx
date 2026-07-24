import SmoothScroll from "@/components/animation/SmoothScroll";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Atmosphere from "@/components/ui/Atmosphere";
import TechDivider from "@/components/ui/TechDivider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <Atmosphere />
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <TechDivider label="// 01 · IDENTITY" />
        <About />
        <TechDivider label="// 02 · JOURNEY" />
        <Timeline />
        <TechDivider label="// 03 · SHOWCASE" />
        <Projects />
        <TechDivider label="// 04 · CAPABILITY" />
        <Skills />
        <TechDivider label="// 05 · EXPERIENCE" />
        <Experience />
        <TechDivider label="// 06 · CONTACT" />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
