"use client";

import Image from "next/image";
import { asset } from "@/lib/utils";
import { useRef, useState, type PointerEvent } from "react";

const VIEWS = [
  { label: "01 / CAD DESIGN", src: "/media/projects/tdk/cad-render.webp", alt: "Full TDK robot CAD in SolidWorks", note: "SolidWorks · Full robot design" },
  { label: "02 / BUILT ROBOT", src: "/media/projects/tdk/robot.webp", alt: "The assembled TDK competition robot", note: "From drawings to machining and assembly" },
];

export default function HeroShowcase() {
  const [view, setView] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  const current = VIEWS[view];

  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    if (panel.current) panel.current.style.transform = "perspective(1100px) rotateX(" + (-y * 5) + "deg) rotateY(" + (x * 5) + "deg)";
  }

  return (
    <div className="hero-showcase" onPointerMove={tilt} onPointerLeave={() => { if (panel.current) panel.current.style.transform = ""; }}>
      <div className="showcase-orbit" aria-hidden="true" />
      <div ref={panel} className="showcase-panel">
        <div className="showcase-topline mono"><span><span className="status-dot" /> PROJECT / TDK–30</span><span>2026</span></div>
        <div className="showcase-image">
          <Image key={current.src} src={asset(current.src)} alt={current.alt} fill sizes="(max-width: 767px) 90vw, 45vw" loading={view === 0 ? "eager" : "lazy"} className="object-contain" />
          <span className="image-crosshair top-4 left-4" aria-hidden="true">+</span><span className="image-crosshair right-4 bottom-4" aria-hidden="true">+</span>
          <div className="showcase-caption mono">{current.note}</div>
        </div>
        <div className="showcase-switch" role="group" aria-label="Robot showcase view">
          {VIEWS.map((item, index) => <button key={item.label} type="button" aria-pressed={view === index} onClick={() => setView(index)}>{item.label}<span aria-hidden="true">{view === index ? "●" : "○"}</span></button>)}
        </div>
        <div className="showcase-footer"><div><p className="text-sm font-semibold">From CAD to the real world</p><p className="mt-1 text-xs text-muted">Mecanum drive · Lift · Modular grippers</p></div><a href="#project-tdk30" aria-label="View the TDK robot project" className="showcase-link" onClick={() => window.dispatchEvent(new Event("show-all-projects"))}>↗</a></div>
      </div>
      <div className="showcase-note mono"><span aria-hidden="true">↳</span> DESIGNED. BUILT. INTEGRATED.</div>
    </div>
  );
}
