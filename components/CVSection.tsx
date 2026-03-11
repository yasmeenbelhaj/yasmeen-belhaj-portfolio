"use client";

import { motion } from "framer-motion";

export default function CVSection() {
  return (
    <section id="cv" className="bg-brand-cream text-brand-black">
      <div className="mx-auto max-w-4xl px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-brand-sand/50 bg-white/40 px-10 py-14 text-center backdrop-blur-sm"
        >
          <h2 className="font-['the-seasons'] font-bold text-5xl tracking-wide">
            CV
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-brand-black/75">
            A concise summary of my background, technical skills,
            and project experience.
          </p>

          <a
            href="/cv.pdf"
            download
            className="mt-10 inline-flex items-center rounded-full border border-brand-black px-8 py-3 text-sm tracking-wider transition hover:bg-brand-gold hover:border-brand-gold hover:text-black"
          >
            Download CV
          </a>

        </motion.div>

      </div>
    </section>
  );
}