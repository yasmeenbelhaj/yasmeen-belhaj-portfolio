"use client";

import { motion } from "framer-motion";

export default function JourneySection() {
  return (
    <section className="bg-brand-cream px-6 py-20 text-brand-black md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-brand-olive">
            Background
          </p>

          <h2 className="font-['the-seasons'] text-4xl tracking-[0.04em] text-brand-black sm:text-5xl md:text-6xl">
            The path behind the work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 space-y-8 md:mt-12"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-black/80 md:text-xl">
            My interest in digital work comes from the space between visual
            design and technical execution. I’ve always been drawn to projects
            where the details matter — the pacing of a page, the balance of a
            layout, and the small interactions that shape how something feels.
          </p>

          <p className="max-w-3xl text-lg leading-relaxed text-black/80 md:text-xl">
            Over time, that interest has grown into a practice centered on
            building thoughtful interfaces with modern frontend tools. I enjoy
            turning ideas into experiences that feel polished, responsive, and
            intentional across devices.
          </p>

          <p className="max-w-3xl text-lg leading-relaxed text-black/80 md:text-xl">
            What keeps me engaged is the combination of creativity and
            structure. I like work that asks for both taste and precision —
            where design decisions, motion, and code all come together to create
            something coherent.
          </p>

          <div className="pt-2">
            <div className="h-px w-20 bg-brand-sand" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}