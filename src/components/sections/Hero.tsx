"use client";

import { site } from "@/data/site";
import { Reveal, RevealItem } from "@/components/animation/TextReveal";
import ParticleField from "@/components/scene/ParticleField";
import DroneMount from "@/components/scene/DroneMount";

/**
 * Hero — the cinematic opening (spec 04 / 12).
 * Layers, back to front:
 *   1. deep background + technical grid + vignette
 *   2. particle field
 *   3. [drone slot] — 3D drone canvas mounts here in Phase 2
 *   4. HUD frame + headline + CTAs + scroll cue
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-bg"
    >
      {/* 1 — technical grid + radial glow */}
      <div className="absolute inset-0 tech-grid opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.14) 0%, rgba(0,229,255,0) 60%)",
        }}
        aria-hidden
      />

      {/* 2 — particle field */}
      <div className="pointer-events-none absolute inset-0">
        <ParticleField />
      </div>

      {/* 3 — 3D drone scene (client-only, code-split) */}
      <div id="drone-slot" className="absolute inset-0">
        <DroneMount />
      </div>

      {/* cinematic vignette on top of scene */}
      <div
        className="pointer-events-none absolute inset-0 cinematic-vignette"
        aria-hidden
      />

      {/* 4 — HUD corner marks */}
      <HudFrame />

      {/* content */}
      <div className="relative z-10 container-max flex min-h-screen flex-col justify-center pt-24 pb-20">
        <Reveal className="max-w-4xl">
          <RevealItem>
            <p className="tech-label mb-6">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-2 align-middle" />
              System Online · Robotics Portfolio
            </p>
          </RevealItem>

          <RevealItem>
            <h1 className="font-sans font-bold leading-[0.95] tracking-tight text-[clamp(3rem,9vw,7.5rem)]">
              Building
              <br />
              <span className="text-accent">Intelligent</span> Machines
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-8 max-w-xl text-[clamp(1.05rem,2vw,1.375rem)] text-muted">
              I&apos;m {site.name}, a robotics engineer working across
              autonomous systems, embedded hardware and applied AI — engineering
              the machines of the future.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                View Engineering Work
                <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
          </RevealItem>

          <RevealItem>
            <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-sm text-faint">
              {site.subroles.map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <span className="h-px w-4 bg-accent/60" />
                  {r}
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-faint">
          <span className="text-[0.7rem] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <span className="relative flex h-10 w-6 justify-center rounded-full border border-white/20">
            <span className="mt-2 h-2 w-1 animate-bounce rounded-full bg-accent" />
          </span>
        </div>
      </div>
    </section>
  );
}

/** Faint HUD registration marks in the four corners. */
function HudFrame() {
  const corner = "absolute h-8 w-8 border-accent/30";
  return (
    <div className="pointer-events-none absolute inset-6 z-10" aria-hidden>
      <span className={`${corner} left-0 top-0 border-l border-t`} />
      <span className={`${corner} right-0 top-0 border-r border-t`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}
