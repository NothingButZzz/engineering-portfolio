/** Global site + identity configuration. */

export const site = {
  name: "Yu Jen Lin",
  role: "Robotics Engineer",
  tagline: "Building Intelligent Machines for the Future.",
  subroles: [
    "Robotics Engineer",
    "Automation Developer",
    "AI / Embedded Systems",
  ],
  email: "kenny.lin.026@gmail.com",
  location: "Taiwan",
} as const;

export interface SocialLink {
  label: string;
  value: string;
  href: string;
}

/** Contact channels (spec 06 style). GitHub/LinkedIn filled at deploy time. */
export const socials: SocialLink[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/NothingButZzz",
    href: "https://github.com/NothingButZzz",
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#timeline" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
