import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

export type Social = { name: string; href: string; icon: LucideIcon };

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/loyaldudee", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mayur-rishi-420601252/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mayurrishi_/",
    icon: Instagram,
  },
];
