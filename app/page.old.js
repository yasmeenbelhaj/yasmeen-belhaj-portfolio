"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          Yasmeen Belhaj
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-neutral-400 max-w-xl"
        >
          Creative Technologist working across web development and 
          real-time interactive systems. Focused on AR, immersive media, 
          and human-centred digital experiences.
        </motion.p>

        <div className="mt-8 flex gap-6">
          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition"
          >
            View Projects
          </Link>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="px-6 py-3 border border-neutral-700 rounded-full text-sm hover:border-white transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="max-w-5xl mx-auto mt-24 grid md:grid-cols-2 gap-12">
        <div className="bg-neutral-900 p-6 rounded-2xl hover:bg-neutral-800 transition">
          <h3 className="text-xl font-medium">Project One</h3>
          <p className="mt-3 text-neutral-400 text-sm">
            Brief description of the project. Interactive AR experience.
          </p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl hover:bg-neutral-800 transition">
          <h3 className="text-xl font-medium">Project Two</h3>
          <p className="mt-3 text-neutral-400 text-sm">
            Real-time immersive system built with Unity.
          </p>
        </div>
      </section>

    </main>
  );
}