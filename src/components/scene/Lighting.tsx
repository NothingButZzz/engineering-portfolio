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
      <ambientLight intensity={0.25} color="#4a3a63" />

      {/* Key light */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={2.4}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Violet rim from behind */}
      <spotLight
        position={[-5, 3, -6]}
        angle={0.7}
        penumbra={1}
        intensity={40}
        color="#b14dff"
        distance={30}
      />

      {/* Soft teal underglow */}
      <pointLight
        position={[0, -3, 2]}
        intensity={8}
        color="#2fe0c6"
        distance={12}
      />

      {/* Cool fill */}
      <pointLight position={[6, -1, 4]} intensity={6} color="#2a1a5a" />
    </>
  );
}
