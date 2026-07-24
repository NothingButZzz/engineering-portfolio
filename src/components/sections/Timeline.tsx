import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { timeline } from "@/data/timeline";

/** Blueprint-style vertical timeline (spec 07). */
export default function Timeline() {
  return (
    <section id="timeline" className="relative py-32">
      {/* subtle blueprint grid backdrop */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" aria-hidden />

      <div className="container-max relative">
        <SectionHeader
          index="02"
          label="Journey"
          title="How a student becomes an engineer."
          lead="Every project built a stronger engineering foundation."
        />

        <ol className="mt-16 relative border-l border-white/12 pl-8 sm:pl-12">
          {timeline.map((entry, i) => (
            <li key={entry.id} className="relative pb-12 last:pb-0">
              {/* node */}
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-4 w-4 items-center justify-center">
                <span className="h-4 w-4 rounded-full border border-accent/60 bg-bg" />
                <span className="absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
              </span>

              <ScrollReveal delay={i * 0.04}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="tech-label">{entry.year}</span>
                  <span className="rounded-full border border-white/12 px-3 py-0.5 text-xs text-faint">
                    {entry.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-2xl text-muted">{entry.description}</p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
