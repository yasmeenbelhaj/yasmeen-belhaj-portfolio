"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Motion",
    items: ["Framer Motion", "Scroll-driven animation", "Interaction design", "p5.js"],
  },
  {
    title: "Tools",
    items: ["GitHub", "Netlify", "Figma", "Adobe Creative Suite", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-brand-cream px-6 py-20 text-brand-black md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-brand-olive">
            Skills & Tools
          </p>

          <h2 className="font-['the-seasons'] text-4xl tracking-[0.04em] text-brand-black sm:text-5xl md:text-6xl">
            The tools behind the work
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/80 md:text-xl">
            I work across design-minded frontend development, motion, and the
            tools that help bring polished digital experiences to life.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl border border-brand-sand/30 bg-white/30 p-7 backdrop-blur-sm md:p-8"
            >
              <h3 className="font-['the-seasons'] text-2xl tracking-[0.03em] text-brand-terracotta md:text-3xl">
                {group.title}
              </h3>

              <div className="mt-6 h-px w-12 bg-brand-sand/70" />

              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-base leading-relaxed text-black/80 md:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}