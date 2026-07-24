import type { Project } from "@/types";

/** Engineering case studies (spec 06). Quality over quantity. */
export const projects: Project[] = [
  {
    id: "rocket",
    title: "High-Altitude Rocket",
    category: "Aerospace · Avionics",
    year: "2025",
    problem:
      "A competition rocket needed reliable in-flight telemetry and an automated recovery system that could survive high-altitude flight and hard landings.",
    solution:
      "Built a dual-node avionics stack: a sensor node fusing IMU data for attitude estimation and a LoRa node streaming live telemetry to the ground, triggering the recovery sequence at apogee.",
    technologies: ["Arduino", "IMU / Sensor Fusion", "LoRa", "Telemetry", "C++"],
    result:
      "Delivered a working payload with live flight data and automated recovery — validated through ground and integration testing.",
    accent: "cyan",
  },
  {
    id: "robotics",
    title: "Robotics Competition Robot",
    category: "Mechatronics · Controls",
    year: "2024",
    problem:
      "Design and build a competition robot under tight time constraints, balancing mechanical strength, weight and precise motion control.",
    solution:
      "Rapid-prototyped the mechanical structure, integrated a motor-control system, and iterated through mechanical failures to a reliable final drivetrain.",
    technologies: ["Mechanical Design", "Motor Control", "Embedded C", "CAD"],
    result:
      "Competed with a robot refined across multiple prototype iterations — turning early failures into a stronger final design.",
    accent: "green",
  },
  {
    id: "opencv",
    title: "OpenCV Vision Pipeline",
    category: "Computer Vision · AI",
    year: "2025",
    problem:
      "Extract clean, usable features from noisy real-world images for an automation task.",
    solution:
      "Engineered a processing pipeline — Gaussian blur, edge detection, thresholding and morphology — tuned to isolate the target features reliably.",
    technologies: ["Python", "OpenCV", "NumPy", "Image Processing"],
    result:
      "A repeatable before/after pipeline that cleanly enhances raw input into structured, machine-readable output.",
    accent: "cyan",
  },
  {
    id: "embedded",
    title: "Embedded Systems Lab",
    category: "Embedded · Hardware",
    year: "2024",
    problem:
      "Bridge software and physical hardware across a range of sensing and actuation tasks.",
    solution:
      "Built a series of Arduino-based systems integrating sensors, motor control and custom circuits — hardware, circuit, code and result as one loop.",
    technologies: ["Arduino", "Sensor Integration", "Motor Control", "Circuit Design"],
    result:
      "A hands-on foundation in how firmware commands real machines — the groundwork for every later project.",
    accent: "green",
  },
];
