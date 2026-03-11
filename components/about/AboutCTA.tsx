"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="bg-brand-rust px-6 py-20 text-white md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-brand-sand">
            Get In Touch
          </p>

          <h2 className="font-['the-seasons'] text-4xl tracking-[0.04em] sm:text-5xl md:text-6xl">
            Interested in working together?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            If you’re building something thoughtful and need a developer who
            cares about design, motion, and detail, I’d love to hear about it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-block rounded-full border border-brand-sand/60 px-8 py-3 text-base font-medium tracking-wide text-white transition-all duration-300 hover:bg-brand-sand hover:text-brand-black"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}