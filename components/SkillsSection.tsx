"use client";

import { motion } from "framer-motion";
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

type Skill = {
  name: string;
  icon?: IconType;
};

const skillGroups: {
  title: string;
  description: string;
  skills: Skill[];
}[] = [
  {
    title: "Frontend",
    description:
      "Responsive interfaces, component-based development, and modern web tooling.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    title: "Creative Technology",
    description:
      "Motion, creative coding, 3D, and real-time interactive systems.",
    skills: [
      { name: "Framer Motion", icon: SiFramer },
      { name: "p5.js", icon: SiP5Dotjs },
      { name: "Three.js", icon: SiThreedotjs },
      { name: "WebGL", icon: SiWebgl },
      { name: "Unity", icon: SiUnity },
      { name: "AR Foundation" },
      { name: "Interactive Design" },
      { name: "Creative Coding" },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Design, version control, deployment, and supporting technical workflows.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Netlify", icon: SiNetlify },
      { name: "VS Code", icon: VscVscode },
      { name: "Blender", icon: SiBlender },
      { name: "Maya", icon: SiAutodeskmaya },
      { name: "Python", icon: SiPython },
      { name: "C#" },
    ],
  },
];

const sectionIntro = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.06,
    },
  }),
};

const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.04,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32 },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-brand-black text-brand-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-['the-seasons'] font-bold text-5xl tracking-wide text-white">
            Skills
          </h2>

          <div className="mt-6 h-[2px] w-16 bg-brand-sand/80" />

          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-brand-sand/80">
            Frontend • Creative Tech • Workflow
          </p>

          <p className="mt-8 text-base leading-relaxed text-brand-cream/75">
            A selection of the technologies, tools, and creative systems I use
            across frontend development, interactive experiences, and real-time
            work.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[1.75rem] border border-brand-sand/30 bg-brand-cream/[0.04] p-7 transition duration-300 hover:border-brand-sand/50 hover:bg-brand-cream/[0.06]"
            >
              <div className="flex min-h-full flex-col">
                <div>
                  <h3 className="font-['the-seasons'] text-3xl font-bold tracking-wide text-white">
                    {group.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-brand-cream/65">
                    {group.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-brand-sand/15" />
                </div>

                <motion.div
                  variants={tagContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.span
                        key={skill.name}
                        variants={tagVariants}
                        whileHover={{ y: -1.5, scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 22,
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-brand-sand/30 bg-brand-cream/[0.05] px-4 py-2 text-sm text-brand-cream/85 transition-colors duration-200 hover:border-brand-gold/60 hover:bg-brand-gold/[0.08]"
                      >
                        {Icon ? (
                          <Icon
                            className="h-[17px] w-[17px] shrink-0 text-brand-sand/80"
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sand/75"
                            aria-hidden="true"
                          />
                        )}
                        <span>{skill.name}</span>
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}