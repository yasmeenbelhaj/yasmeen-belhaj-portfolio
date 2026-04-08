"use client";

import { motion } from "framer-motion";
import type { ProjectShowcase } from "../../content/projects";

type ProjectShowcaseSectionProps = {
  showcase: ProjectShowcase;
  projectTitle: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const mediaReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: smoothEase,
    },
  },
};

export default function ProjectShowcaseSection({
  showcase,
  projectTitle,
}: ProjectShowcaseSectionProps) {
  if (showcase.type !== "video" || !showcase.embedUrl) return null;

  return (
    <section className="mt-24">
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={mediaReveal}
      >
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            src={showcase.embedUrl}
            title={showcase.title ?? projectTitle}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>

      {showcase.caption ? (
        <div className="mt-6 max-w-3xl">
          <p className="text-base leading-relaxed text-brand-cream/80 md:text-[1.03rem] md:leading-[1.8]">
            {showcase.caption}
          </p>
        </div>
      ) : null}
    </section>
  );
}