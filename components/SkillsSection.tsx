"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Creative Technology",
    skills: ["Framer Motion", "p5.js", "Creative Coding", "Interactive Design"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "Netlify", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-brand-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['the-seasons'] font-bold text-5xl tracking-wide">
            Skills
          </h2>

          <p className="mt-4 max-w-2xl text-white/70">
            Technologies and tools I use when building modern web experiences.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 md:grid-cols-3">

          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold text-brand-sand">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-brand-sand/50 px-4 py-2 text-sm text-white/85 transition hover:bg-brand-gold/20 hover:border-brand-gold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}