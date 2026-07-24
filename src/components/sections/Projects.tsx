import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="container-max">
        <SectionHeader
          index="03"
          label="Engineering Showcase"
          title="Projects as evidence, not homework."
          lead="Each project is a case study — the problem, the engineering solution, the technology and the result."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
