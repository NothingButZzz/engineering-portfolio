import type { TimelineEntry } from "@/types";

/** Engineering journey (spec 07): how a student becomes an engineer. */
export const timeline: TimelineEntry[] = [
  {
    id: "explore",
    year: "Stage 01",
    title: "Early Engineering Exploration",
    tag: "Foundation",
    description:
      "Started with programming, electronics and Arduino — discovering how software can command physical hardware.",
  },
  {
    id: "robotics",
    year: "Stage 02",
    title: "Robotics Development",
    tag: "Mechatronics",
    description:
      "Robotics club and automation projects built skills in mechanical design, control systems and integration.",
  },
  {
    id: "competition",
    year: "Stage 03",
    title: "Competition Experience",
    tag: "Applied Engineering",
    description:
      "From the CR Cup to rocket competition — rapid development, team collaboration, telemetry and recovery systems under pressure.",
  },
  {
    id: "ai",
    year: "Stage 04",
    title: "AI & Intelligent Systems",
    tag: "Intelligence",
    description:
      "Image processing and computer vision — moving from automation toward intelligent automation.",
  },
  {
    id: "international",
    year: "Stage 05",
    title: "International Experience",
    tag: "Global",
    description:
      "Overseas exposure and university visits — building a global perspective on engineering and technology.",
  },
  {
    id: "future",
    year: "Stage 06",
    title: "Future Vision",
    tag: "Next",
    description:
      "Exploring robotics, automation and intelligent manufacturing as a future engineer.",
  },
];
