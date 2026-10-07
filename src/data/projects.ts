import type { Project } from "@/types";

/** Engineering case studies (spec 06). Quality over quantity. */
export const projects: Project[] = [
  {
    id: "rocket",
    title: "TASA Competition Rocket Payload",
    category: "Aerospace · Avionics",
    year: "2026",
    problem:
      "A competition rocket needed reliable in-flight telemetry and an automated recovery system that could survive flight loads and hard landings.",
    solution:
      "As payload lead, built a dual-node avionics stack: a sensor node fusing IMU data for attitude estimation and a LoRa node streaming live telemetry to the ground, triggering parachute recovery automatically.",
    technologies: ["Arduino", "IMU / Sensor Fusion", "LoRa", "Telemetry", "C++"],
    result:
      "The team advanced to the finals of the TASA 2026 Taiwan Cup Rocket Competition; I also earned the TASA Junior Rocket Launch License.",
    accent: "cyan",
  },
  {
    id: "tdk",
    title: "TDK Cup Competition Robot",
    category: "Mechatronics · Controls",
    year: "2024",
    problem:
      "Build a remotely operated competition robot under tight time constraints, with responsive and reliable control.",
    solution:
      "Wrote the firmware and integrated the circuits — decoding remote-control signals and designing the real-time control logic that drives the robot.",
    technologies: ["Embedded C", "Remote-Control Decoding", "Circuit Integration", "Motor Control"],
    result:
      "Won the Selection Award at the 29th TDK Cup National Creative Design & Build Competition.",
    accent: "green",
  },
  {
    id: "opencv",
    title: "Blackboard Note Enhancement",
    category: "Computer Vision · AI",
    year: "2025",
    problem:
      "Photos of blackboard notes are noisy, unevenly lit and hard to read — and hard for text recognition to process.",
    solution:
      "Built an OpenCV pipeline — image pre-processing, edge detection, thresholding and morphology — to clean up the board and isolate the writing.",
    technologies: ["Python", "OpenCV", "NumPy", "Image Processing"],
    result:
      "Noticeably more readable notes and a higher text-recognition rate on the processed output.",
    accent: "cyan",
  },
  {
    id: "diff-drive",
    title: "Differential-Drive Robot Control",
    category: "Controls · Simulation",
    year: "2025",
    problem:
      "A differential-drive mobile robot drifts off its path without well-tuned closed-loop control.",
    solution:
      "Modelled the robot's kinematics in Matlab/Simulink and designed PID controllers to track the target path.",
    technologies: ["Matlab", "Simulink", "PID Control", "Kinematic Modelling"],
    result:
      "Improved path-tracking accuracy and driving stability in simulation.",
    accent: "green",
  },
];
