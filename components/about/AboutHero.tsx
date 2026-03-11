"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-brand-cream px-6 pb-16 pt-28 sm:pt-32 md:px-10 md:pb-20 md:pt-36 lg:px-16 lg:pb-24 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:grid-cols-[1fr_1fr] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-brand-olive md:mb-6">
              About
            </p>

            <h1 className="font-['the-seasons'] text-[clamp(3.5rem,6.5vw,6rem)] leading-[0.92] tracking-[0.02em] text-brand-black">
              Building digital experiences that feel clear, thoughtful, and
              alive.
            </h1>

            <div className="mt-8 h-px w-20 bg-brand-sand md:mt-10 md:w-24" />

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/80 sm:text-xl md:mt-10 md:text-2xl">
              I’m a creative developer focused on crafting elegant interfaces
              with strong visual rhythm, purposeful motion, and a deep respect
              for performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-brand-rust/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-brand-sand/35 bg-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/about-portrait.jpg"
                alt="Portrait of Yasmeen Belhaj"
                width={900}
                height={1200}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}