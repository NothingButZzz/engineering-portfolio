# 10 - React Code Architecture

# Frontend Development Structure


---

# 1. Development Philosophy


The codebase should be:


- Modular
- Maintainable
- Scalable
- AI-friendly


The project should look like:

A professional production website.


Not:

A generated prototype.


---

# 2. Technology Stack


Required:


```
Next.js

React

TypeScript

TailwindCSS

React Three Fiber
```


---

# 3. Recommended Folder Structure


```
src

├── app

│   ├── page.tsx

│   ├── layout.tsx

│   └── globals.css


├── components

│   ├── ui

│   │
│   ├── sections
│   │
│   ├── scene
│   │
│   └── animation


├── hooks


├── lib


├── data


├── assets


├── styles


└── types
```


---

# 4. Page Architecture


Main page:


```
app/page.tsx
```


Structure:


```tsx
<Portfolio>

  <Hero />

  <About />

  <Timeline />

  <Projects />

  <Skills />

  <Experience />

  <Contact />

</Portfolio>
```


---

# 5. Section Components


Location:


```
components/sections/
```


Components:


```
Hero.tsx

About.tsx

Timeline.tsx

Projects.tsx

Skills.tsx

Experience.tsx

Contact.tsx
```


Each section should:

- Have independent logic
- Avoid excessive dependencies
- Be reusable


---

# 6. Three.js Components


Location:


```
components/scene/
```


Structure:


```
Drone.tsx

Environment.tsx

CameraRig.tsx

Lighting.tsx

Particles.tsx
```


---

# 7. Animation Components


Location:


```
components/animation/
```


Examples:


```
ScrollController.tsx

TextReveal.tsx

PageTransition.tsx
```


---

# 8. Custom Hooks


Location:


```
hooks/
```


Examples:


```
useScrollAnimation.ts

useMouseInteraction.ts

useDroneMotion.ts

useDevicePerformance.ts
```


---

# 9. Data Management


Project data should be separated.


Example:


```
data/projects.ts
```


Example:


```typescript
export const projects = [

{
 title:
 "Rocket Project",

 category:
 "Aerospace",

 technologies:
 [
 "Arduino",
 "IMU",
 "LoRa"
 ],

 result:
 "Competition Development"

}

]
```


---

# 10. TypeScript Rules


Use:


```
interface

type

enum
```


Avoid:


```typescript
any
```


All components should have clear types.


---

# 11. Styling Rules


Use:


```
TailwindCSS
```


Maintain:


- Design tokens
- Consistent spacing
- Responsive layout


Avoid:


Inline styling everywhere.


---

# 12. Performance Rules


Required:


## Images


Use:


- Next Image
- Optimized assets


## Components


Use:


- Dynamic import
- Lazy loading


## 3D


Use:


- Suspense
- Progressive loading


---

# 13. AI Coding Rules


When using Claude Code or Cursor:


The AI must:


1. Follow existing architecture


2. Avoid unnecessary dependencies


3. Explain major changes


4. Maintain clean code


5. Preserve design system


---

# 14. Component Naming


Use:


```
PascalCase
```


Examples:


```
DroneScene

ProjectCard

TimelineItem
```


---

# 15. Final Code Quality Goal


The final project should demonstrate:


```
Modern Frontend Development

+

3D Web Technology

+

Engineering Thinking

+

Professional Code Quality
```


The code itself should represent:

A future-ready engineer.
