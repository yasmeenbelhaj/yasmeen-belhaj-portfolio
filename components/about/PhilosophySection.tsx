"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="bg-brand-cream px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-brand-olive">
            Philosophy
          </p>

          <h2 className="font-['the-seasons'] text-4xl tracking-[0.04em] text-brand-black sm:text-5xl md:text-6xl">
            How I approach
            <br />
            design and development
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <p className="max-w-2xl text-lg leading-relaxed text-black/80 md:text-xl">
            I’m interested in building interfaces that feel composed, intuitive,
            and visually deliberate. The strongest digital experiences don’t
            rely on excess — they guide attention clearly and make interaction
            feel natural.
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-black/80 md:text-xl">
            My work sits between design sensitivity and technical execution. I
            care about typography, spacing, pacing, and motion, but I also care
            just as much about structure, maintainability, and performance.
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-black/80 md:text-xl">
            For me, motion should support meaning, not distract from it.
            Performance should be part of the design, not an afterthought. Every
            decision should help create something that feels calm, polished, and
            considered.
          </p>

          <div className="pt-2">
            <div className="h-px w-20 bg-brand-sand" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}