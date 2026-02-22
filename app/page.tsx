"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import P5Background from "../components/P5Background";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../content/projects";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const projectsTopRef = useRef<HTMLElement | null>(null);

  // A) Drives hero overlay fade + projects slide (your original behavior)
  const { scrollYProgress: heroProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // B) Drives ONLY the instant hero cut-off when Projects hits top
  const { scrollYProgress: projectsTopProgress } = useScroll({
    target: projectsTopRef,
    offset: ["start end", "start start"],
  });

  // Burnt overlay fades in early (back to normal)
  const heroColorFade = useTransform(heroProgress, [0, 0.36], [0, 1]);

  // HERO FULL CUT-OFF (instant switch) at Projects reaching top
  const heroOpacity = useTransform(projectsTopProgress, [0.999, 1], [1, 0]);

  // Projects slide up (no fade) (keep as-is for now)
  const projectsY = useTransform(heroProgress, [0, 0.45], [140, 0]);

  return (
    <div className="relative">
      {/* SCROLL REGION (defines overlay + slide timing) */}
      <div ref={scrollRef} className="relative h-[180svh]">
        {/* FIXED HERO */}
        <motion.section
          style={{ opacity: heroOpacity }}
          className="
            fixed top-0 left-0 w-full
            h-[88svh] sm:h-[90svh] lg:h-[92svh]
            z-0 overflow-hidden pointer-events-none
            bg-white
          "
        >
          <div className="absolute inset-0">
            <P5Background />
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
            <div className="text-center">
              <h1 className="font-['the-seasons'] font-bold text-7xl text-black tracking-wider">
                YASMEEN BELHAJ
              </h1>
              <p className="mt-4 text-base text-black/80 sm:text-lg">
                Creative Technologist | Web & Real-Time Systems
              </p>
            </div>
          </div>

          <motion.div
            style={{ opacity: heroColorFade }}
            className="absolute inset-0 z-20 bg-[#8C3B1E]"
          />
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          style={{ y: projectsY }}
          className="relative z-10 pt-[88svh] sm:pt-[90svh] lg:pt-[92svh]"
        >
          {/* Put the ref on the ACTUAL black section that visually matters */}
          <section
            ref={projectsTopRef}
            className="min-h-[100svh]  bg-black  text-white rounded-t-3xl"
          >
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
        </motion.section>
      </div>
    </div>
  );
}