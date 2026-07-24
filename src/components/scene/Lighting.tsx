"use client";

/**
 * Cinematic three-point-ish lighting (spec 04 §6):
 *  - key light: main shape definition
 *  - cyan rim: futuristic edge
 *  - cool fill + ambient to lift shadows slightly
 */
export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.25} color="#3a4a63" />

      {/* Key light */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={2.4}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Cyan rim from behind */}
      <spotLight
        position={[-5, 3, -6]}
        angle={0.7}
        penumbra={1}
        intensity={40}
        color="#00e5ff"
        distance={30}
      />

      {/* Soft green underglow */}
      <pointLight
        position={[0, -3, 2]}
        intensity={8}
        color="#7cf7d4"
        distance={12}
      />

      {/* Cool fill */}
      <pointLight position={[6, -1, 4]} intensity={6} color="#1a3a5a" />
    </>
  );
}
