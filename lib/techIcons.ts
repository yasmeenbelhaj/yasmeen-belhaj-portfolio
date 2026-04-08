import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFramer,
  SiThreedotjs,
  SiUnity,
  SiGit,
  SiGithub,
  SiFigma,
  SiNetlify,
  SiBlender,
  SiPython,
  SiWebgl,
  SiP5Dotjs,
  SiAutodeskmaya,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaWordpressSimple } from "react-icons/fa6";
import { TbBrandAdobePremier } from "react-icons/tb";
import { MdOutline360 } from "react-icons/md";
import { LiaAdobe } from "react-icons/lia";

export const techIcons: Record<string, IconType | undefined> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,
  "Framer Motion": SiFramer,
  "Three.js": SiThreedotjs,
  Unity: SiUnity,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  Netlify: SiNetlify,
  Blender: SiBlender,
  Python: SiPython,
  WebGL: SiWebgl,
  "p5.js": SiP5Dotjs,
  Maya: SiAutodeskmaya,
  "VS Code": VscVscode,
  WordPress: FaWordpressSimple,
  "Adobe Premiere Pro": TbBrandAdobePremier,
  "360° Imaging": MdOutline360,
  "Adobe Suite": LiaAdobe,

};