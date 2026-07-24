import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animation/ScrollReveal";

const stats = [
  { value: "4+", label: "Engineering domains" },
  { value: "10+", label: "Hands-on projects" },
  { value: "3D", label: "Web · Robotics · AI" },
];

const focus = [
  "Autonomous & robotic systems",
  "Embedded hardware and firmware",
  "Applied AI and computer vision",
  "Digital manufacturing mindset",
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container-max">
        <SectionHeader
          index="01"
          label="Engineering Identity"
          title="An engineer who builds intelligent machines."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <ScrollReveal>
            <div className="space-y-6 text-[clamp(1.05rem,1.6vw,1.3rem)] leading-relaxed text-muted">
              <p>
                I&apos;m a robotics engineer working where software meets the
                physical world — from IMU sensor fusion and LoRa telemetry to
                motor control and computer vision.
              </p>
              <p>
                My path runs from Arduino experiments to competition robots,
                rocket avionics and AI applications. Each step made the next
                machine smarter, more autonomous and more reliable.
              </p>
              <p className="text-fg">
                I build systems that sense, decide and act — and I&apos;m ready
                to do it in a global engineering environment.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="grid gap-3">
              {focus.map((f) => (
                <li
                  key={f}
                  className="glass-panel flex items-center gap-4 px-5 py-4 text-sm text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
                  {f}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-14 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center">
                <div className="font-sans text-4xl font-bold text-accent sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-faint sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
