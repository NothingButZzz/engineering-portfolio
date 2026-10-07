"use client";

import { useSyncExternalStore } from "react";
import type { DevicePerformance } from "@/types";

const QUERIES = [
  "(prefers-reduced-motion: reduce)",
  "(pointer: coarse)",
  "(max-width: 767px)",
];

function subscribe(onChange: () => void) {
  const lists = QUERIES.map((q) => window.matchMedia(q));
  lists.forEach((l) => l.addEventListener("change", onChange));
  return () => lists.forEach((l) => l.removeEventListener("change", onChange));
}

function getSnapshot(): DevicePerformance {
  const [prefersReduced, isCoarse, narrow] = QUERIES.map(
    (q) => window.matchMedia(q).matches
  );
  const fewCores =
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= 4;

  return prefersReduced || (isCoarse && narrow) || (narrow && fewCores)
    ? "low"
    : "high";
}

/**
 * Heuristic device-tier detection so the 3D scene can gracefully degrade
 * (spec 04 §14, spec 11). Returns "low" for phones / reduced-motion /
 * low core-count devices, "high" otherwise. Defaults to "high" during SSR.
 */
export function useDevicePerformance(): DevicePerformance {
  return useSyncExternalStore(subscribe, getSnapshot, () => "high");
}
