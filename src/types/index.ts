/** Shared domain types for the portfolio. */

export interface ProjectMedia {
  /** Path under /public, without the base path */
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  /** Engineering case-study fields (spec 06) */
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  /** Optional accent for the card, defaults to cyan */
  accent?: "cyan" | "green";
  /** Photos shown on the card; the first one is the cover */
  images?: ProjectMedia[];
  /** Absolute URL of a demo video (hosted on the main site) */
  video?: { src: string; caption: string };
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  id: string;
  place: string;
  location: string;
  role: string;
  period: string;
  description: string;
}

export type DevicePerformance = "high" | "low";
