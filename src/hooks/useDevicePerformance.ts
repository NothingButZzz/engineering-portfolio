"use client";

import { useEffect, useState } from "react";
import type { DevicePerformance } from "@/types";

/**
 * Heuristic device-tier detection so the 3D scene can gracefully degrade
 * (spec 04 §14, spec 11). Returns "low" for phones / reduced-motion /
 * low core-count devices, "high" otherwise. Defaults to "high" during SSR.
 */
export function useDevicePerformance(): DevicePerformance {
  const [tier, setTier] = useState<DevicePerformance>("high");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.innerWidth < 768;
    const fewCores =
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency <= 4;

    if (prefersReduced || (isCoarse && narrow) || (narrow && fewCores)) {
      setTier("low");
    } else {
      setTier("high");
    }
  }, []);

  return tier;
}
