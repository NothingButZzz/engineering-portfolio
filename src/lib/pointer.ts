/**
 * Global normalized pointer (-1..1) tracked from a single window listener.
 * Used by the 3D scene so mouse-parallax works regardless of which overlay
 * element the cursor is physically over (the canvas often sits behind
 * pointer-events-none decorative layers).
 */
export const pointer = { x: 0, y: 0 };

let attached = false;

export function ensurePointerTracking() {
  if (attached || typeof window === "undefined") return;
  attached = true;
  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    },
    { passive: true }
  );
}
