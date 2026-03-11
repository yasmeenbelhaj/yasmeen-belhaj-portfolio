"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Clarity",
    statement:
      "Good interfaces should feel intuitive before they feel impressive.",
    body: "I care about hierarchy, spacing, typography, and pacing so each interaction feels easy to follow.",
  },
  {
    number: "02",
    title: "Motion with purpose",
    statement:
      "Animation should reveal structure, guide attention, and add rhythm.",
    body: "I use motion to support the experience, not compete with it.",
  },
  {
    number: "03",
    title: "Performance as design",
    statement:
      "Responsiveness shapes how a product feels, not just how it scores.",
    body: "Fast, considered experiences are part of the design from the beginning.",
  },
];

export default function SignatureSection() {
  return (
    <section className="bg-brand-black px-6 py-20 text-white md:px-10 md:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-brand-sand">
            What Shapes My Work
          </p>

          <h2 className="font-['the-seasons'] text-4xl tracking-[0.04em] text-white sm:text-5xl md:text-6xl">
            What I Care About
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/72 md:text-lg">
            The details I return to most often when shaping an interface,
            refining an interaction, or deciding what deserves attention.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-brand-sand/20 pt-6 md:pt-8"
            >
              <div className="mb-3 flex items-baseline gap-4">
                <span className="text-xs uppercase tracking-[0.3em] text-brand-terracotta">
                  {item.number}
                </span>

                <h3 className="font-['the-seasons'] text-2xl tracking-[0.03em] text-white md:text-3xl">
                  {item.title}
                </h3>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-white md:text-xl">
                {item.statement}
              </p>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
                {item.body}
              </p>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4 text-base italic leading-relaxed text-brand-sand/90 md:text-lg"
          >
            Good digital experiences feel clear, calm, and considered.
          </motion.p>
        </div>
      </div>
    </section>
  );
}