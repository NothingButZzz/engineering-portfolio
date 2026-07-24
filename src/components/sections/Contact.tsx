import ScrollReveal from "@/components/animation/ScrollReveal";
import ContactChannels from "@/components/ui/ContactChannels";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      {/* radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(169,107,255,0.18) 0%, rgba(169,107,255,0) 60%)",
        }}
        aria-hidden
      />

      <div className="container-max relative text-center">
        <ScrollReveal>
          <p className="tech-label mb-6">Future Collaboration</p>
          <h2 className="mx-auto max-w-4xl font-sans font-bold tracking-tight text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
            Let&apos;s build the next
            <br />
            <span className="text-gradient">intelligent machine.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[clamp(1rem,1.6vw,1.25rem)] text-muted">
            Open to robotics, automation and AI opportunities — internships,
            research and global engineering roles.
          </p>

          <ContactChannels />
        </ScrollReveal>
      </div>

      <footer className="container-max relative mt-28 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-faint sm:flex-row">
        <span>
          © {new Date().getFullYear()} {site.name}. Built with Next.js + Three.js.
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2 shadow-[0_0_10px_var(--color-accent-2)]" />
          {site.tagline}
        </span>
      </footer>
    </section>
  );
}
