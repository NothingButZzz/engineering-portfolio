"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  ContactShadows,
  AdaptiveDpr,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import Drone from "./Drone";
import Lighting from "./Lighting";
import Particles from "./Particles";
import CameraRig from "./CameraRig";
import { ensurePointerTracking } from "@/lib/pointer";

/**
 * The full 3D drone experience (spec 04 §12–13).
 * Rendered client-only and lazily (see Hero) so it never blocks first paint.
 */
export default function DroneScene({ lowPower = false }: { lowPower?: boolean }) {
  useEffect(() => {
    ensurePointerTracking();
  }, []);

  return (
    <Canvas
      shadows
      dpr={lowPower ? [1, 1.3] : [1, 2]}
      camera={{ position: [0, 0.4, 6], fov: 42 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#0a0613", 0);
      }}
    >
      <fog attach="fog" args={["#0a0613", 8, 20]} />

      <Suspense fallback={null}>
        <CameraRig />
        <Lighting />

        <group position={[0, 0.1, 0]}>
          <Drone startAt={0.2} />
        </group>

        <Particles count={lowPower ? 120 : 260} />

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.5}
          scale={12}
          blur={2.6}
          far={4}
          color="#150826"
        />

        {/* Self-contained reflections — no external HDR fetch */}
        <Environment resolution={256} background={false}>
          <Lightformer
            intensity={2.2}
            color="#b14dff"
            position={[0, 4, -6]}
            scale={[12, 6, 1]}
          />
          <Lightformer
            intensity={1.1}
            color="#ffffff"
            position={[-6, 2, 2]}
            scale={[6, 6, 1]}
          />
          <Lightformer
            intensity={0.8}
            color="#2fe0c6"
            position={[6, -2, 2]}
            scale={[6, 6, 1]}
          />
        </Environment>

        {!lowPower && (
          <EffectComposer>
            <Bloom
              intensity={0.9}
              luminanceThreshold={0.75}
              luminanceSmoothing={0.3}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.25} darkness={0.85} />
          </EffectComposer>
        )}
      </Suspense>

      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
