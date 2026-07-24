# 08 - Three.js Technical Specification

# 3D Engine Implementation Guide


---

# 1. Purpose

The 3D system is the core technical feature of this portfolio.

The goal is to create:

- Realistic engineering visualization
- Smooth user interaction
- Cinematic product presentation
- High-quality WebGL experience


The 3D experience should feel like:

> A technology company introducing a future product.


---

# 2. Technology Stack


## Core Framework

Required:

- Three.js
- React Three Fiber
- TypeScript


## Supporting Libraries


```bash
@react-three/fiber
@react-three/drei
@react-three/postprocessing
three-stdlib
```


## Animation Libraries


```bash
GSAP
Framer Motion
Lenis Smooth Scroll
```


---

# 3. Rendering Architecture


The 3D scene should follow this structure:


```
Canvas

├── Camera
│
├── Scene Environment
│
├── Lighting System
│
├── Drone Model
│
├── Particle System
│
├── Post Processing
│
└── Interaction Controller
```


---

# 4. Scene Configuration


## Renderer


Recommended:


```javascript
{
  antialias: true,
  alpha: true,
  powerPreference: "high-performance"
}
```


---

# 5. Camera System


The camera should create a cinematic feeling.


Use:

- Perspective Camera


Recommended settings:


```
Field of View:

35 - 45


Near:

0.1


Far:

1000
```


The camera should support:


- Smooth movement
- Scroll animation
- Mouse interaction
- Parallax effect


Avoid:

Static camera.


---

# 6. Drone Model System


## File Format


Preferred:


```
GLB / GLTF
```


Reason:


- Web optimized
- Supports PBR materials
- Compatible with React Three Fiber


---

# 7. Model Optimization


Required:


## Geometry


- Reduce unnecessary polygons
- Keep mechanical details
- Optimize topology


## Texture


Use:

- Compressed textures
- Proper resolution
- Normal maps


## Compression


Recommended:


```
Draco Compression
```


---

# 8. Drone Component Architecture


Recommended structure:


```
components/

└── scene/

    ├── Drone.tsx

    ├── DroneMaterials.ts

    ├── DroneAnimation.ts

    ├── DroneLights.ts

    └── DroneEffects.ts
```


---

# 9. Material Specification


The drone should use:

Physically Based Rendering (PBR)


---

## Main Body


Material:

Carbon Fiber / Aerospace Metal


Properties:


```
Metalness:

0.7 - 0.9


Roughness:

0.2 - 0.4
```


---

## Camera Lens


Material:


Glass / Transparent


Properties:


```
Transmission:

0.8


Roughness:

0.1
```


---

## Propeller


Material:


Dark composite material.


Characteristics:


- Low reflection
- Lightweight appearance
- Realistic surface


---

# 10. Lighting System


Lighting should create:

Premium product photography style.


---

## Key Light


Purpose:

Define the drone shape.


Type:


```
Area Light
```


---

## Rim Light


Purpose:


Create futuristic edge lighting.


Color:


```
#00E5FF
```


---

## Environment Light


Use:


```
HDR Environment
```


Purpose:


- Real reflection
- Realistic metal appearance


---

# 11. Post Processing


Required effects:


## Bloom


Purpose:

Create subtle technology glow.


---

## Ambient Occlusion


Purpose:

Increase depth and realism.


---

## Tone Mapping


Purpose:


Cinematic color response.


---

# 12. Particle System


Background particles should be:


- Minimal
- Slow
- Low brightness


Purpose:


Create:

- Laboratory atmosphere
- Future technology feeling


Avoid:


- Gaming space effects
- Excessive particles


---

# 13. Engineering Grid


Optional background element.


Style:


```
Blueprint Grid

Technical Interface

Laboratory Floor
```


Properties:


- Thin lines
- Low opacity
- Slow animation


---

# 14. Interaction System


## Mouse Interaction


Mouse movement controls:


```
Camera rotation

+

Drone rotation
```


Intensity:

Low.


The user should feel:


"The machine responds naturally."


---

# 15. Performance Requirements


Target:


Desktop:


```
60 FPS
```


Mobile:


```
30 FPS minimum
```


Optimization:


- Lazy loading
- GLB compression
- Adaptive DPR
- Reduced particles


---

# 16. Mobile Fallback


For low performance devices:


Replace:


Full 3D scene


with:


Static cinematic drone image.


---

# 17. Final Technical Goal


The 3D system should demonstrate:


```
Frontend Engineering

+

3D Graphics

+

Robotics Visualization

+

Interactive Experience
```


The website itself becomes:

A demonstration of engineering ability.
