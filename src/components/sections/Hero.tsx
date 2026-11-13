import Aurora from "@/components/ui/Aurora";
import HeroShowcase from "@/components/ui/HeroShowcase";

export default function Hero() {
  return (
    <section id="top" className="site-container hero-section" aria-labelledby="hero-title">
      <Aurora />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-intro">
        <p className="eyebrow flex items-center gap-3"><span className="status-dot" /> ENGINEERING PORTFOLIO / 2026</p>
        <h1 id="hero-title" className="hero-name">KENNY<span className="text-gradient">LIN<span className="text-accent">.</span></span></h1>
        <p className="mono mt-5 text-sm tracking-[0.18em] text-muted">YU-JEN LIN · 林榆蓁</p>
        <h2 className="mt-8 text-2xl font-semibold leading-tight sm:text-3xl">Turning ideas into<br /><span className="text-accent">working systems.</span></h2>
        <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base">An Intelligent Automation Engineering student at Taipei Tech. I build competition robots, integrate rocket payload electronics, and develop computer-vision tools.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="button-primary">Explore my work <span aria-hidden="true">↗</span></a>
          <a href="#about" className="button-secondary">About me <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-disciplines mono"><span>MECHANICAL</span><i /><span>EMBEDDED</span><i /><span>VISION</span></div>
      </div>
      <HeroShowcase />
      <div className="hero-bottom mono"><span>TAIPEI, TAIWAN · NTUT</span><a href="#projects">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
