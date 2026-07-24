"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";

/** 3D scene is client-only + code-split so it never blocks first paint. */
const DroneScene = dynamic(() => import("./DroneScene"), {
  ssr: false,
  loading: () => <StaticDrone />,
});

/**
 * Decides whether to mount the full WebGL drone. Low-power devices keep a
 * lightweight vector stand-in (spec 04 §14 mobile fallback). Mounting is also
 * deferred one tick so the hero text paints first.
 */
export default function DroneMount() {
  const tier = useDevicePerformance();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!ready) return <StaticDrone />;
  if (tier === "low") return <StaticDrone label="Optimized view" />;

  return <DroneScene lowPower={false} />;
}

/** CSS-only fallback: concentric engineering rings + glowing core. */
function StaticDrone({ label }: { label?: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-[46vmin] w-[46vmin] rounded-full border border-accent/20" />
        <div className="absolute h-[32vmin] w-[32vmin] rounded-full border border-accent/30 [animation:spin_28s_linear_infinite]" />
        <div className="absolute h-[20vmin] w-[20vmin] rounded-full border border-dashed border-accent/40 [animation:spin_18s_linear_infinite_reverse]" />
        <div className="h-24 w-24 rounded-2xl bg-accent/10 shadow-[0_0_80px_rgba(46,224,196,0.4)] backdrop-blur-sm" />
        {label && (
          <span className="tech-label absolute -bottom-10 whitespace-nowrap opacity-60">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
