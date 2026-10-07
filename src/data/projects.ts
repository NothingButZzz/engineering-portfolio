import type { Project } from "@/types";

/** Engineering case studies (spec 06). Quality over quantity. */
export const projects: Project[] = [
  {
    id: "rocket",
    title: "TASA Rocket Payload PCB",
    category: "Aerospace · Avionics",
    year: "2026",
    problem:
      "The payload — IMU attitude estimation, LoRa telemetry and automated parachute recovery — was built from separate off-the-shelf modules that needed to work together as one system inside the rocket.",
    solution:
      "As payload lead, my main contribution was the circuit board: I integrated the off-the-shelf sensor and radio modules into a modular PCB and designed its wiring.",
    technologies: ["PCB Design", "Modular Integration", "IMU", "LoRa", "Arduino"],
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
