import type { TimelineEntry } from "@/types";

/** Engineering journey (spec 07): how a student becomes an engineer. */
export const timeline: TimelineEntry[] = [
  {
    id: "explore",
    year: "2020 — 2022",
    title: "Early Engineering Exploration",
    tag: "Foundation",
    description:
      "Science fairs and inventions — a bronze medal at the KIDE Kaohsiung International Invention & Design Expo, and a winning award in Hsinchu County's Creative Thinking math contest.",
  },
  {
    id: "ntut",
    year: "2022",
    title: "Intelligent Automation Engineering at Taipei Tech",
    tag: "Education",
    description:
      "Joined the five-year junior college program in Intelligent Automation Engineering at National Taipei University of Technology, keeping a GPA between 3.83 and 4.0.",
  },
  {
    id: "robotics",
    year: "2023 — 2024",
    title: "Robotics & Competitions",
    tag: "Mechatronics",
    description:
      "Third place at the 14th CR Cup robotics competition and a Selection Award at the 29th TDK Cup — rapid development, team collaboration and control systems under pressure.",
  },
  {
    id: "ai",
    year: "2024 — 2025",
    title: "AI, Vision & Professional Certification",
    tag: "Intelligence",
    description:
      "Computer vision with OpenCV, PID control simulation, an AI Junior Award 2024 semi-final entry, and CSWA → CSWP SolidWorks certification.",
  },
  {
    id: "rocket",
    year: "2025 — 2026",
    title: "Rocket Payload Hardware",
    tag: "Aerospace",
    description:
      "Payload lead for the TASA 2026 Taiwan Cup Rocket Competition — designing the modular PCB behind the team's telemetry and recovery payload, all the way to the finals.",
  },
  {
    id: "international",
    year: "2026",
    title: "International Experience",
    tag: "Global",
    description:
      "Selected for the Youth Overseas Dream Fund: a summer in the Netherlands visiting Philips, High Tech Campus Eindhoven, TU Delft and TU Eindhoven.",
  },
];
