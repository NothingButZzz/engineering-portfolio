"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { clamp, lerp } from "@/lib/utils";
import { pointer } from "@/lib/pointer";

/* Shared materials (created once) --------------------------------- */
const bodyMat = new THREE.MeshStandardMaterial({
  color: "#120d1e",
  metalness: 0.85,
  roughness: 0.3,
});
const armMat = new THREE.MeshStandardMaterial({
  color: "#0a0714",
  metalness: 0.7,
  roughness: 0.4,
});
const trimMat = new THREE.MeshStandardMaterial({
  color: "#241a33",
  metalness: 0.9,
  roughness: 0.25,
});
const propMat = new THREE.MeshStandardMaterial({
  color: "#0a0613",
  metalness: 0.5,
  roughness: 0.5,
  transparent: true,
  opacity: 0.85,
});
const glassMat = new THREE.MeshStandardMaterial({
  color: "#050308",
  metalness: 1,
  roughness: 0.05,
});

const MOTOR_POSITIONS: [number, number, number][] = [
  [1.15, 0, 1.15],
  [-1.15, 0, 1.15],
  [1.15, 0, -1.15],
  [-1.15, 0, -1.15],
];

/**
 * Procedural industrial quad-drone (spec 04). No external GLB — the whole
 * machine is built from primitives so it loads instantly and stays crisp.
 * Handles its own startup sequence, idle float and mouse-reactive tilt.
 */
export default function Drone({ startAt }: { startAt: number }) {
  const root = useRef<THREE.Group>(null);
  const propRefs = useRef<THREE.Group[]>([]);
  const ledRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state, delta) => {
    const g = root.current;
    if (!g) return;

    const t = state.clock.getElapsedTime();
    // Startup progress 0 → 1 over 3.2s after mount.
    const boot = clamp((t - startAt) / 3.2, 0, 1);
    const easedBoot = 1 - Math.pow(1 - boot, 3);

    // Rise + fade in.
    const baseY = lerp(-1.8, 0, easedBoot);
    const float = Math.sin(t * 0.6) * 0.08 * easedBoot;
    g.position.y = baseY + float;
    g.scale.setScalar(lerp(0.85, 1, easedBoot));

    // Gentle idle yaw.
    const yaw = Math.sin(t * 0.18) * 0.16;

    // Mouse-reactive tilt (low intensity, spec 04 §9).
    const px = pointer.x;
    const py = pointer.y;
    g.rotation.y = lerp(g.rotation.y, yaw + px * 0.25, 0.05);
    g.rotation.x = lerp(g.rotation.x, -py * 0.12, 0.05);
    g.rotation.z = lerp(g.rotation.z, -px * 0.12, 0.05);

    // Propeller spin ramps up during boot, then holds fast.
    const spin = lerp(0, 40, easedBoot) * delta;
    for (const p of propRefs.current) {
      if (p) p.rotation.y += spin;
    }

    // LED pulse.
    if (ledRef.current) {
      const pulse = 1.5 + Math.sin(t * 2.2) * 0.8;
      ledRef.current.emissiveIntensity = pulse * easedBoot;
    }
  });

  return (
    <group ref={root} dispose={null}>
      {/* ---- Central body ---- */}
      <RoundedBox
        args={[1.5, 0.34, 1.0]}
        radius={0.1}
        smoothness={4}
        material={bodyMat}
      />
      {/* Canopy / sensor hump */}
      <RoundedBox
        args={[0.7, 0.24, 0.55]}
        radius={0.08}
        smoothness={4}
        position={[0, 0.24, 0.05]}
        material={trimMat}
      />
      {/* Front LED bar (feeds bloom) */}
      <mesh position={[0, 0.05, 0.52]}>
        <boxGeometry args={[0.8, 0.05, 0.04]} />
        <meshStandardMaterial
          ref={ledRef}
          color="#2ee0c4"
          emissive="#2ee0c4"
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>

      {/* ---- Motor arms (X configuration) ---- */}
      {[45, -45].map((deg, i) => (
        <mesh
          key={i}
          rotation={[0, THREE.MathUtils.degToRad(deg), 0]}
          material={armMat}
        >
          <boxGeometry args={[0.16, 0.12, 3.15]} />
        </mesh>
      ))}

      {/* ---- Motors + propellers ---- */}
      {MOTOR_POSITIONS.map((pos, i) => (
        <group key={i} position={pos}>
          {/* motor housing */}
          <mesh material={trimMat} position={[0, 0.05, 0]}>
            <cylinderGeometry args={[0.16, 0.18, 0.22, 20]} />
          </mesh>
          {/* propeller hub + blades */}
          <group
            ref={(el) => {
              if (el) propRefs.current[i] = el;
            }}
            position={[0, 0.2, 0]}
          >
            <mesh material={trimMat}>
              <cylinderGeometry args={[0.05, 0.05, 0.06, 12]} />
            </mesh>
            {[0, 90].map((a) => (
              <mesh
                key={a}
                rotation={[0, THREE.MathUtils.degToRad(a), 0]}
                material={propMat}
              >
                <boxGeometry args={[1.05, 0.015, 0.12]} />
              </mesh>
            ))}
          </group>
          {/* landing leg */}
          <mesh material={armMat} position={[0, -0.35, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.55, 8]} />
          </mesh>
          <mesh material={trimMat} position={[0, -0.62, 0]}>
            <boxGeometry args={[0.34, 0.05, 0.1]} />
          </mesh>
        </group>
      ))}

      {/* ---- Gimbal camera ---- */}
      <group position={[0, -0.2, 0.42]}>
        <mesh material={trimMat}>
          <sphereGeometry args={[0.16, 24, 24]} />
        </mesh>
        {/* lens */}
        <mesh position={[0, -0.02, 0.13]} rotation={[Math.PI / 2, 0, 0]} material={glassMat}>
          <cylinderGeometry args={[0.08, 0.09, 0.1, 24]} />
        </mesh>
      </group>
    </group>
  );
}
