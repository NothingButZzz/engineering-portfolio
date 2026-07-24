# 09 - Animation & Motion System

# Motion Design Specification


---

# 1. Animation Philosophy


The animation system should create the feeling of:


```
Precision

Mechanical Movement

Engineering Control

Future Technology
```


The purpose of animation is not decoration.

Every movement should support:

- Storytelling
- User guidance
- Technology visualization


Avoid:


```
Random effects

Excessive movement

Game-like animation

Overly playful transitions
```


---

# 2. Motion Design Principles


## Principle 01

## Smooth


All movement should use:

- Easing
- Interpolation
- Natural acceleration


Avoid:

Instant movement.


---

## Principle 02

## Controlled


Engineering systems are precise.


Animation should feel:


```
Calculated

Stable

Intentional
```


---

## Principle 03

## Cinematic


Use:

- Slow camera movement
- Depth transition
- Layered animation


Reference:


Apple product presentation.


---

# 3. Animation Timing System


Recommended duration:


## Micro Interaction


Examples:

- Button hover
- Icon response


Duration:


```
200ms - 400ms
```


---

## Component Transition


Examples:

- Card reveal
- Section appearance


Duration:


```
600ms - 1200ms
```


---

## Major Scene Animation


Examples:

- Drone movement
- Camera transition


Duration:


```
2s - 5s
```


---

# 4. Easing Rules


Preferred easing:


```
easeOut

power2.out

power3.out

expo.out
```


Avoid:


```
linear movement
```


Reason:


Real objects accelerate and decelerate.


---

# 5. Loading Animation


## Purpose


Create the first impression.

The website should feel like:

An engineering system starting.


---

## Loading Sequence


```
Step 1

Logo appears


↓

Step 2

System interface activates


↓

Step 3

Drone lights turn on


↓

Step 4

Drone model appears


↓

Step 5

Camera enters main scene
```


---

# 6. Hero Section Animation


## Initial State


Before interaction:


```
Drone hidden

Low lighting

Camera far away

Background inactive
```


---

## Activation


Sequence:


```
Drone fades in

↓

Lights activate

↓

Propellers start

↓

Drone floats

↓

Main title appears
```


---

# 7. Drone Idle Animation


The drone should always feel alive.


Idle animation:


```
Small vertical movement

Slow rotation

Subtle light pulse
```


---

## Floating Motion


Example:


```
Y Position:

+0.1

to

-0.1
```


Movement:

Slow sinusoidal motion.


---

## Rotation


Very small:


```
Rotation:

1 - 3 degrees
```


Avoid:

Fast spinning.


---

# 8. Mouse Interaction


The user should feel:

The machine reacts.


---

## Mouse Movement


Controls:


```
Camera rotation

+

Drone orientation
```


---

## Movement Range


Small:


```
5 - 10 degrees maximum
```


---

## Purpose


Create:

- Depth
- Presence
- Interaction


Not:

A game controller.


---

# 9. Scroll Animation System


Technology:


Recommended:


```
GSAP ScrollTrigger
```


Purpose:


Synchronize:

- Camera
- Drone
- Text
- Sections


---

# 10. Scroll Story Timeline


## 0% - Hero


State:


```
Drone centered

Camera close

Introduction visible
```


Message:


```
Building Intelligent Machines
for the Future
```


---

## 25% - About Section


Drone movement:


```
Move to right side
```


Purpose:


Create space for personal introduction.


---

## 50% - Project Section


Drone movement:


```
Move upward

Become background element
```


Purpose:


Shift focus to engineering projects.


---

## 75% - Experience Section


Drone:


```
Reduced size

Background position
```


Focus:


Timeline and achievements.


---

## 100% - Final Section


Drone returns as:

Symbol of future vision.


---

# 11. Section Reveal Animation


Each section should appear with:


```
Opacity

+

Translation

+

Blur removal
```


Example:


Initial:


```
opacity: 0

y: 50px

blur: 10px
```


Final:


```
opacity: 1

y: 0

blur: 0
```


---

# 12. Text Animation


Large titles should use:


Word-by-word reveal.


Example:


```
Building

Intelligent

Machines

for

the

Future
```


Animation:


```
Fade

+

Slide

+

Delay
```


---

# 13. Project Card Animation


When project enters viewport:


Sequence:


```
Image reveal

↓

Project title

↓

Technology tags

↓

Description
```


---

## Hover Effect


Cards:


```
Scale:

1.02


Brightness:

Increase


Border:

Soft glow
```


---

# 14. Camera Motion System


Camera movement should be:


```
Smooth

Slow

Cinematic
```


Use:


```
lerp()

GSAP timeline
```


Avoid:


Sudden camera movement.


---

# 15. Background Motion


Background elements:


Examples:


- Particles
- Grid
- Light gradients


Movement:


Very slow.


Purpose:


Create atmosphere.


---

# 16. Reduced Motion Support


Respect:


```
prefers-reduced-motion
```


If enabled:


Reduce:


- Camera movement
- Particle animation
- Large transitions


Keep:


- Content accessibility
- Basic interaction


---

# 17. Mobile Animation Strategy


Mobile devices have limited performance.


Adjust:


Disable:


- Heavy particles
- Complex camera movement


Keep:


- Simple transitions
- Important storytelling animation


---

# 18. Performance Rules


Animation must maintain:


Desktop:


```
60 FPS
```


Mobile:


```
30 FPS+
```


Optimization:


- Avoid unnecessary re-render
- Use GPU-friendly animation
- Reduce DOM animation


---

# 19. Final Motion Goal


The final experience should feel like:


```
A machine coming alive.

A technology product being introduced.

A future engineer presenting his vision.
```


The visitor should think:


"This website is engineered, not simply designed."
