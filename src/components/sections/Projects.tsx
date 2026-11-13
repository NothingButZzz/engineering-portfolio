"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const groups = [
  { label: "All work", ids: ["tdk30", "rocket", "opencv", "cnc", "diff-drive"] },
  { label: "Mechanical & control", ids: ["tdk30", "cnc", "diff-drive"] },
  { label: "Embedded systems", ids: ["rocket"] },
  { label: "Computer vision", ids: ["opencv"] },
];
const ordered = groups[0].ids.map(id => projects.find(project => project.id === id)!);

export default function Projects() {
  const [filter, setFilter] = useState(0);
  useEffect(() => {
    // Restore the anchor target before the browser follows the hero link.
    const showAll = () => flushSync(() => setFilter(0));
    window.addEventListener("show-all-projects", showAll);
    return () => window.removeEventListener("show-all-projects", showAll);
  }, []);
  const shown = ordered.filter(project => groups[filter].ids.includes(project.id));
  return (
    <section id="projects" className="section-space">
      <div className="container-max">
        <SectionHeader index="01" label="Selected work" title="Designed. Built. Integrated." lead="From mechanical systems to embedded electronics and computer vision. Explore the work, my contribution, and the outcome." />
        <div className="project-filters mt-8" role="group" aria-label="Filter projects by discipline">
          {groups.map((group, index) => <button key={group.label} type="button" aria-pressed={filter === index} onClick={() => setFilter(index)}>{group.label}<span className="mono">{String(group.ids.length).padStart(2, "0")}</span></button>)}
        </div>
        <p className="sr-only" role="status">Showing {shown.length} projects</p>
        <div className="projects-grid">
          {shown.map(project => <ProjectCard key={project.id} project={project} index={ordered.indexOf(project)} />)}
        </div>
        <a href="https://github.com/NothingButZzz" target="_blank" rel="noreferrer" className="github-more mono">EXPLORE MORE ON GITHUB <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
