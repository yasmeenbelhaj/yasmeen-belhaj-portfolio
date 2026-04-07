"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-brand-cream text-brand-black">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-['the-seasons'] font-bold text-5xl tracking-wide">
            About
          </h2>

          <div className="mt-6 h-[2px] w-16 bg-brand-terracotta/80" />

          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-brand-olive/80">
            Creative Technology • Interactive Systems • Web Dev
          </p>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-black/75">
            <p>
              I’m a front-end-focused software engineer working across web
              development, interactive systems, and creative technology.
            </p>

            <p>
              My work combines responsive front-end development, motion, and
              creative coding to build expressive digital experiences and
              thoughtful interfaces.
            </p>

            <p>
              I’m particularly interested in interactive systems and real-time
              experiences, including AR/XR and creative technology projects.
            </p>

            <p>
              I enjoy translating ideas into structured technical systems that
              are visually considered, performant, and centred around thoughtful
              user experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
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