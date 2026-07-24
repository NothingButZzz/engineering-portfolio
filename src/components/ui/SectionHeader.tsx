import ScrollReveal from "@/components/animation/ScrollReveal";

/** Consistent section header: index label + title + optional lead line. */
export default function SectionHeader({
  index,
  label,
  title,
  lead,
}: {
  index: string;
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <ScrollReveal>
      <div className="max-w-3xl">
        <p className="tech-label mb-4 flex items-center gap-3">
          <span className="text-faint">{index}</span>
          <span className="h-px w-8 bg-accent/50" />
          {label}
        </p>
        <h2 className="font-sans font-bold tracking-tight text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
          {title}
        </h2>
        {lead && (
          <p className="mt-5 text-[clamp(1rem,1.6vw,1.25rem)] text-muted">
            {lead}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
