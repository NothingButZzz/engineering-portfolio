# Yu Jen Lin — Robotics Engineer Portfolio

> Building Intelligent Machines for the Future.

A cinematic, interactive engineering portfolio built around a real-time 3D
autonomous drone. The site itself is the project — a demonstration of 3D web,
modern frontend and engineering thinking.

**Live:** https://nothingbutzzz.github.io/engineering-portfolio/

## Stack

- **Next.js 16** (App Router, static export) · **React 19** · **TypeScript**
- **Tailwind CSS v4** design system (dark / industrial / cinematic)
- **React Three Fiber** + **drei** + **postprocessing** — procedural 3D drone
- **GSAP** · **Framer Motion** · **Lenis** smooth scroll

## Structure

```
src/
├── app/            # layout, page, global design tokens
├── components/
│   ├── sections/   # Hero, About, Timeline, Projects, Skills, Experience, Contact
│   ├── scene/      # 3D drone, lighting, particles, camera rig
│   ├── ui/         # navbar, cards, HUD rail, dividers
│   └── animation/  # scroll + reveal primitives
├── hooks/  lib/  data/  types/
```

The drone is **procedural** (built from primitives, no external model) so it
loads instantly, and is code-split + client-only with a lightweight fallback on
low-power devices.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deploy

Pushing to `main` triggers a GitHub Actions workflow that builds the static
export and publishes it to GitHub Pages (see `.github/workflows/deploy.yml`).

---

Design specification lives in [`Engineering_Portfolio_Spec/`](./Engineering_Portfolio_Spec).
