import Image from "next/image";
import type { Project } from "@/types";
import { asset } from "@/lib/utils";
import MediaGallery from "./MediaGallery";
import ImageComparison from "./ImageComparison";
import ProjectArtwork from "./ProjectArtwork";

const presentation: Record<string, { summary: string; role: string }> = {
  tdk30: { summary: "One robot, four tasks. A mecanum chassis, lift and modular grippers within a 45 × 45 cm starting footprint.", role: "Mechanical team: CAD, machining and assembly; contributions to circuit design and the design report." },
  rocket: { summary: "A modular PCB bringing the team's sensing and radio modules together in one payload system.", role: "Payload lead, responsible for PCB wiring and off-the-shelf module integration." },
  opencv: { summary: "Recovering readable chalk strokes from photos affected by glare, uneven light and chalk dust.", role: "Course project with a classmate: image-processing pipeline and method comparisons." },
  cnc: { summary: "A complete workflow from Mastercam design to a finished, engraved acrylic part.", role: "Design, tool setup, work coordinates and machining, with NC-code support from instructors." },
  "diff-drive": { summary: "A kinematic model and PID controllers for differential-drive robot path tracking.", role: "Matlab / Simulink control simulation as a course project." },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = presentation[project.id];
  const cover = project.id === "tdk30" ? project.images?.[1] : project.images?.[0];
  return (
    <article id={"project-" + project.id} className={"project-card " + (project.id === "tdk30" ? "project-featured" : "")}>
      <div className="project-visual">
        {project.id === "opencv" ? <ImageComparison /> : cover ? <div className="project-cover"><Image src={asset(cover.src)} alt={cover.caption} fill sizes="(max-width: 767px) 90vw, 45vw" className="object-contain" /><span className="cover-label mono">{project.id === "tdk30" ? "TDK 30 / TEAM B17" : "MASTERCAM → CNC"}</span></div> : <><ProjectArtwork type={project.id === "rocket" ? "payload" : "control"} /><p className="art-caption">Concept illustration · {project.id === "rocket" ? "not PCB wiring" : "not measured data"}</p></>}
      </div>
      <div className="project-content">
        <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-meta mono">{project.year}</p>
        <p className="project-summary">{content.summary}</p>
        <dl className="project-evidence"><div><dt>MY ROLE</dt><dd>{content.role}</dd></div><div><dt>OUTCOME</dt><dd>{project.result}</dd></div></dl>
        <ul className="tech-tags" aria-label="Technologies used">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
      </div>
      <details className="project-details">
        <summary><span>Explore project details{project.images ? " & media" : ""}</span><span className="details-icon" aria-hidden="true">+</span></summary>
        <div className="details-body">
          <dl className="grid gap-6 sm:grid-cols-2"><div><dt className="eyebrow mb-2">THE PROBLEM</dt><dd className="text-sm leading-7 text-muted">{project.problem}</dd></div><div><dt className="eyebrow mb-2">THE APPROACH</dt><dd className="text-sm leading-7 text-muted">{project.solution}</dd></div></dl>
          {project.images && <MediaGallery images={project.images} title={project.title} />}
          {project.video && <figure className="mt-6"><video src={project.video.src} poster={cover ? asset(cover.src) : undefined} controls playsInline preload="none" className="aspect-video w-full rounded-lg border border-line bg-background" /><figcaption className="mt-2 text-xs text-muted">{project.video.caption}</figcaption></figure>}
        </div>
      </details>
    </article>
  );
}
