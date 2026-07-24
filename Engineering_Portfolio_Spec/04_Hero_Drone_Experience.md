# 04 - Hero Drone Experience

# 3D Autonomous Drone Experience Specification


---

# 1. Purpose


The drone is the main visual identity of the website.


It represents:


- Robotics
- Automation
- Intelligence
- Future mobility


The drone is not decoration.


The drone is the main character.


---

# 2. Visual Direction


The drone should look like:


Professional industrial prototype.


References:


- DJI Enterprise Drone
- Autonomous inspection drone
- Aerospace prototype


---

# 3. Drone Model Requirements


## Geometry


Requirements:


- Realistic proportions
- Detailed mechanical structure
- Visible engineering components


Include:


- Motor arms
- Propellers
- Camera module
- Sensors
- Landing structure


Avoid:


- Cute appearance
- Cartoon proportions
- Oversimplified geometry


---

# 4. Material Design


Use Physically Based Rendering.


Materials:


## Body


Type:

Metal / Carbon Fiber


Properties:

Metalness: 0.6 - 0.9

Roughness: 0.2 - 0.4

---

## Propellers


Material:

Dark composite material.


Slight reflection.


---

## Camera Module


Material:

Glass.


Include:


- Reflection
- Lens effect


---

# 5. 3D Environment


Background:


Dark laboratory environment.


Elements:


- Soft fog
- Floating particles
- Technical grid


Avoid:


Bright colorful background.


---

# 6. Lighting Setup


Use cinematic lighting.


Recommended:


## Key Light


Purpose:

Main shape definition.


---

## Rim Light


Purpose:

Create futuristic edge.


Color:

Cyan.


---

## Environment Light


Use:


HDRI environment.


Purpose:


Realistic reflection.


---

# 7. Camera System


Camera should not be static.


Use:


Perspective Camera.


Features:


- Slight movement
- Smooth follow
- Depth feeling


---

# 8. Idle Animation


When user does nothing:


Drone should:

Slow floating

Small rotation

Subtle light pulse

Movement:


Very smooth.


Not:

Game animation.


---

# 9. Mouse Interaction


Mouse movement controls:


Camera:

Small horizontal movement

Small vertical movement

Drone:

Slight rotation response

Intensity:

Low.


Purpose:

Make the scene alive.


---

# 10. Drone Startup Animation


Initial loading:


Sequence:

System boot

↓

LED activation

↓

Motor initialization

↓

Propeller rotation

↓

Drone floating

Duration:


3-5 seconds.


---

# 11. Scroll Animation


The drone should guide the user.


Timeline:


## 0%


Drone centered.


State:

Welcome

---

## 25%


Drone moves right.


Text appears:

Who I am

---

## 50%


Drone flies upward.


Project section begins.


---

## 75%


Drone transitions away.


Focus moves to projects.


---

## 100%


Drone returns as background element.


---

# 12. Technical Implementation


Recommended:


## Framework


React Three Fiber


## Libraries

@react-three/fiber

@react-three/drei

@react-three/postprocessing

---

# 13. Required Effects


## Bloom


Purpose:

Soft futuristic light.


---

## Contact Shadows


Purpose:

Ground the drone.


---

## Ambient Occlusion


Purpose:

Increase realism.


---

## Tone Mapping


Purpose:

Cinematic color.


---

# 14. Performance Requirements


Target:


Desktop:

60 FPS

Mobile:

30 FPS minimum

Optimization:


- Draco compression
- GLB optimization
- Lazy loading
- Reduced particles


---

# 15. Forbidden Design


Do not:


- Make drone cute
- Add eyes
- Use cartoon style
- Use excessive neon
- Make it look like a game


---

# 16. Final Experience Goal


When visitors enter the website:


They should feel:


"A robotics engineer is introducing his technology world."


The drone represents:


Not a toy.

Not an image.

A machine.
