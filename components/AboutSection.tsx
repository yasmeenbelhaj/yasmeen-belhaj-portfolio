"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-brand-cream text-brand-black">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['the-seasons'] font-bold text-5xl tracking-wide">
            About
          </h2>

          <div className="mt-6 h-[2px] w-16 bg-brand-terracotta/60" />

          <div className="mt-8 space-y-6 text-base text-brand-black/75 leading-relaxed">
            <p>
              I’m a frontend-focused software engineer interested in thoughtful
              interfaces, motion, and the systems behind modern web experiences.
            </p>

            <p>
              My work sits between frontend engineering and creative technology,
              with a focus on building expressive digital experiences.
            </p>

            <p>
              I enjoy combining code, design sensitivity, and interaction to
              build interfaces that feel considered and engaging.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-[2rem] border border-brand-sand/50 bg-brand-sand/10 shadow-lg">
            <Image
              src="/images/about-portrait.jpg"
              alt="Portrait of Yasmeen Belhaj"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}