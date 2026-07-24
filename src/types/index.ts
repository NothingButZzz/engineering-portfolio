/** Shared domain types for the portfolio. */

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
