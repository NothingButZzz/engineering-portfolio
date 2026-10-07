import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { experiences } from "@/data/experience";
import Journey from "@/components/ui/Journey";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="container-max">
        <SectionHeader
          index="05"
          label="International Journey"
          title="Experience across teams and borders."
        />

        <div className="mt-16 divide-y divide-white/10 border-t border-white/10">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.05}>
              <div className="grid gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-10">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-sm text-accent">
                    {exp.period}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-faint">
                    {exp.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    {exp.place}
                    <span className="text-faint"> · {exp.role}</span>
                  </h3>
                  <p className="mt-3 max-w-2xl text-muted">{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <Journey />
      </div>
    </section>
  );
}
