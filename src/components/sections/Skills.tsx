import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="container-max">
        <SectionHeader
          index="04"
          label="Technical Capability"
          title="The engineering toolkit."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.06}>
              <div className="glass-panel h-full p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
