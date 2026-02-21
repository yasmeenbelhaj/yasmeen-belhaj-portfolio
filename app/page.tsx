"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import P5Background from "../components/P5Background";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../content/projects";

export default function HomePage() {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end start"],
  });

  // Subtle scale on hero while scrolling
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.98]);

  // Burnt overlay fades in quickly (full opacity early)
  const heroColorFade = useTransform(scrollYProgress, [0, 0.18], [0, 1]);

  // Projects slide up to overlap the hero (no opacity animation)
  const projectsY = useTransform(scrollYProgress, [0, 0.45], [140, 0]);

  return (
    <div className="relative">
      {/* FIXED HERO (pinned to initial viewport) */}
      <motion.section
        style={{ scale: heroScale }}
        className="fixed inset-0 z-0 h-[100svh] w-full overflow-hidden pointer-events-none"
      >
        {/* p5 background */}
        <div className="absolute inset-0 z-0">
          <P5Background />
        </div>

        {/* Name UNDER the burnt overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Yasmeen Belhaj
            </h1>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Creative Technologist — web, real-time systems, AR/XR
            </p>
          </div>
        </div>

        {/* Burnt overlay ABOVE the name */}
        <motion.div
          style={{ opacity: heroColorFade }}
          className="absolute inset-0 z-20 bg-[#8C3B1E]"
        />
      </motion.section>

      {/* SCROLL REGION */}
      <div ref={scrollAreaRef} className="relative z-10 h-[200svh]">
        {/* Projects panel moving up over the fixed hero */}
        <motion.section style={{ y: projectsY }} className="relative">
          {/* Start below the fold, then slide upward */}
          <div className="pt-[85svh]">
            <section className="min-h-[100svh] bg-black text-white">
              <div className="mx-auto max-w-5xl px-6 py-16">
                <header className="max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-tight">
                    Projects
                  </h2>
                  <p className="mt-3 text-white/70">
                    Selected work across web development, real-time systems, and
                    AR/XR.
                  </p>
                </header>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </motion.section>
      </div>
    </div>
  );
}