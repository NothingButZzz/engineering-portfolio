"use client";

import { useFrame } from "@react-three/fiber";
import { lerp } from "@/lib/utils";
import { pointer } from "@/lib/pointer";

/**
 * Subtle parallax camera (spec 04 §7): the camera drifts slightly with the
 * pointer and always looks at the drone, giving the scene depth and life
 * without ever feeling like a game camera.
 */
export default function CameraRig() {
  useFrame(({ camera }) => {
    camera.position.x = lerp(camera.position.x, pointer.x * 1.2, 0.03);
    camera.position.y = lerp(camera.position.y, 0.4 + pointer.y * 0.6, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
