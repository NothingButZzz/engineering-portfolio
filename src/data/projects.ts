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
    id: "tdk30",
    title: "TDK Cup Remote-Control Robot",
    category: "Mechatronics · Mechanical Design",
    year: "2026",
    problem:
      "The 30th TDK Cup sets four Yunlin-themed tasks — righting bird models, sorting clams, stacking hay bales and a temple-procession run — for one robot that must start folded inside 45 × 45 cm.",
    solution:
      "A mecanum-wheel omnidirectional chassis on a 15×15 aluminium-extrusion frame, with a lift, a telescoping arm and 3D-printed grippers shared across tasks. On the mechanical team, I did SolidWorks CAD, machining and assembly, and also worked on circuit design and the design report.",
    technologies: ["SolidWorks", "CNC Machining", "3D Printing", "Mecanum Drive", "Teensy", "ODrive"],
    result:
      "All mechanisms run individually and are being integrated on one chassis; the competition is still in progress.",
    accent: "green",
    images: [
      { src: "/media/projects/tdk/cad-render.webp", caption: "Full robot CAD (SolidWorks)" },
      { src: "/media/projects/tdk/robot.webp", caption: "Integrated robot" },
      { src: "/media/projects/tdk/chassis-v2.webp", caption: "Chassis V2 assembly" },
      { src: "/media/projects/tdk/gripper-cad.webp", caption: "Fruit-plate gripper CAD" },
    ],
    video: {
      src: "https://nothingbutzzz.github.io/media/tdk30-intro.mp4",
      caption: "Stage-1 intro film: omnidirectional driving, course test, gripper prototypes (Mandarin)",
    },
  },
  {
    id: "opencv",
    title: "Blackboard Note Enhancement",
    category: "Computer Vision · Course Project",
    year: "2025",
    problem:
      "Photos of blackboard notes suffer from uneven lighting, glare and chalk dust, which makes them hard to read.",
    solution:
      "With a classmate, chained grayscale conversion, Gaussian blur, Canny edges and dilation, then kept white, red, yellow and orange strokes with HSV colour masks and combined them with the edge mask (bitwise AND).",
    technologies: ["Python", "OpenCV", "Canny", "HSV Masking", "Morphology"],
    result:
      "Compared Gaussian, bilateral, mean and median filters; the colour + edge mask removed most of the board and chalk dust that a colour mask alone kept.",
    accent: "cyan",
    images: [
      { src: "/media/projects/blackboard/before.webp", caption: "Original photo" },
      { src: "/media/projects/blackboard/after.webp", caption: "Colour + edge mask (final)" },
      { src: "/media/projects/blackboard/color-only.webp", caption: "Colour mask only" },
      { src: "/media/projects/blackboard/after-2.webp", caption: "Second example, processed" },
    ],
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
  {
    id: "cnc",
    title: "CNC Milling: Acrylic Engraving",
    category: "Manufacturing · CAM",
    year: "2024",
    problem:
      "Take a part from a drawing to a finished piece on a real three-axis mill, as a numerical-control course project.",
    solution:
      "Modelled a 98 × 61 × 16 mm acrylic block in Mastercam, converted a bitmap logo to vectors, and set up the tool and milling paths. The NC code was generated with the instructors; I then zeroed the tool, set work coordinates, loaded the G-code and ran the YCM FV56A mill.",
    technologies: ["Mastercam", "CAM Toolpaths", "3-Axis Mill", "G-code"],
    result:
      "A finished engraved acrylic piece, deburred by hand.",
    accent: "cyan",
    images: [
      { src: "/media/projects/cnc/finished.webp", caption: "Finished acrylic piece" },
      { src: "/media/projects/cnc/design.webp", caption: "Mastercam design" },
      { src: "/media/projects/cnc/vectorize.webp", caption: "Bitmap-to-vector" },
      { src: "/media/projects/cnc/controller.webp", caption: "FANUC controller" },
    ],
  },
];
