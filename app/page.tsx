"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import P5Background from "../components/P5Background";
import ProjectCard from "../components/ProjectCard";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import { projects } from "../content/projects";

export default function HomePage() {
  const heroSceneRef = useRef<HTMLDivElement | null>(null);
  const projectsTopRef = useRef<HTMLElement | null>(null);

  const [skipIntro, setSkipIntro] = useState(false);
  const [forceProjectsTop, setForceProjectsTop] = useState(false);
  const [sketchKey, setSketchKey] = useState(0);

  useLayoutEffect(() => {
    if (window.location.hash === "#projects") {
      setSkipIntro(true);

      requestAnimationFrame(() => {
        projectsTopRef.current?.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      setForceProjectsTop(true);

      requestAnimationFrame(() => {
        projectsTopRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        requestAnimationFrame(() => {
          projectsTopRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          window.setTimeout(() => setForceProjectsTop(false), 500);
        });
      });
    };

    window.addEventListener("scroll-to-projects", handler);
    return () => window.removeEventListener("scroll-to-projects", handler);
  }, []);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroSceneRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: projectsTopProgress } = useScroll({
    target: projectsTopRef,
    offset: ["start end", "start start"],
  });

  const heroColorFade = useTransform(heroProgress, [0, 0.36], [0, 1]);
  const heroOpacity = useTransform(projectsTopProgress, [0.999, 1], [1, 0]);
  const projectsY = useTransform(heroProgress, [0, 0.45], [140, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.4], [1, 1.75]);
  const restartButtonOpacity = useTransform(projectsY, [140, 110], [1, 0]);
  const scrollIndicatorOpacity = useTransform(projectsY, [140, 110], [1, 0]);

  return (
    <div className="relative bg-brand-black">
      <div className="relative">
        <div ref={heroSceneRef} className="relative min-h-[180svh]">
          <motion.section
            style={{ opacity: heroOpacity }}
            className="fixed top-0 left-0 h-[100svh] w-full overflow-hidden bg-brand-cream pointer-events-none"
          >
            <div className="absolute inset-0 z-0 pointer-events-auto">
              <P5Background key={sketchKey} />
            </div>

            <motion.div
              style={{ opacity: heroColorFade }}
              className="absolute inset-0 z-10 bg-brand-rust pointer-events-none"
            />

            <div className="absolute inset-0 z-20 flex items-center justify-center px-6 pointer-events-none">
              <motion.div style={{ scale: heroScale }} className="text-center">
                <h1 className="font-['the-seasons'] font-bold text-6xl tracking-[0.08em] text-brand-black sm:text-6xl lg:text-7xl">
                  YASMEEN <br className="sm:hidden" />
                  BELHAJ
                </h1>

                <p className="mt-5 text-base tracking-[0.08em] text-brand-black/70 sm:text-lg">
                  Software Engineer | Front-End & Creative Technology
                </p>
              </motion.div>
            </div>

            <motion.div
              style={{ opacity: scrollIndicatorOpacity }}
              className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 pointer-events-none sm:bottom-16 lg:bottom-20"
              aria-hidden="true"
            >
              <div className="flex flex-col items-center rounded-full bg-brand-cream/85 px-5 py-3 backdrop-blur-sm">
                <span className="text-[10px] uppercase tracking-[0.24em] text-brand-black/70">
                  Scroll
                </span>

                <div className="mt-2 h-10 w-px overflow-hidden bg-brand-black/15">
                  <motion.div
                    className="w-px bg-brand-black/70"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ height: "60%" }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.button
            style={{ opacity: restartButtonOpacity }}
            type="button"
            onClick={() => setSketchKey((prev) => prev + 1)}
            className="fixed top-24 right-6 z-50 rounded-full border border-brand-sand/40 bg-brand-cream/80 px-4 py-2 text-xs tracking-wider text-brand-black backdrop-blur-sm shadow-md transition-colors duration-200 hover:bg-brand-rust hover:text-brand-cream"
            aria-label="Clear Sketch"
          >
            Clear Sketch
          </motion.button>

          <motion.section
            style={{ y: skipIntro || forceProjectsTop ? 0 : projectsY }}
            className="relative z-10 pt-[100svh]"
          >
            <section
  id="projects"
  ref={projectsTopRef}
  className="min-h-[100svh] rounded-t-[2rem] bg-brand-black text-brand-cream"
>
  <div className="mx-auto max-w-6xl px-6 py-24">
    <header className="max-w-3xl">
      <h2 className="font-['the-seasons'] text-5xl font-bold tracking-wide text-white">
        Projects
      </h2>

      <div className="mt-6 h-[2px] w-16 bg-brand-terracotta/80" />

      <p className="mt-6 text-xs uppercase tracking-[0.22em] text-brand-sand/90">
        Front-End Development • Creative Technology • Interactive Systems
      </p>

      <p className="mt-8 text-base leading-relaxed text-brand-cream/80">
        Selected work spanning front-end engineering, motion-led interfaces,
        interactive systems, and creative technology.
      </p>
    </header>

    <div className="mt-14 grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  </div>
</section>
          </motion.section>
        </div>

        <div className="relative z-10">
          <AboutSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}