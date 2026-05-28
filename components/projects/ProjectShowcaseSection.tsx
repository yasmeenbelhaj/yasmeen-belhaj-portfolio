"use client";

import { motion } from "framer-motion";
import type { ProjectShowcase } from "../../content/projects";

/* Props */
type ProjectShowcaseSectionProps = {
  showcase: ProjectShowcase;
  projectTitle: string;
};

/* Motion Token */
const smoothEase = [0.22, 1, 0.36, 1] as const;

/* Media Reveal */
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

/* Typography Token */
const bodyTextClass =
  "text-[1.05rem] leading-[1.7] text-brand-cream/80 md:text-[1.18rem] lg:text-[1.28rem]";
  
export default function ProjectShowcaseSection({
  showcase,
  projectTitle,
}: ProjectShowcaseSectionProps) {
  const isPortrait = showcase.orientation === "portrait";

  /* Conditional Render */
  if (showcase.type !== "video" || !showcase.embedUrl) return null;

  return (
    /* Showcase Section */
    <section>
      {/* Showcase Media */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={mediaReveal}
      >
        {/* Video Frame */}
        <div
          className={
            isPortrait
              ? "mx-auto aspect-[9/16] max-h-[78vh] w-full max-w-sm overflow-hidden rounded-[1.25rem] bg-brand-cream/[0.03]"
              : "aspect-video w-full overflow-hidden rounded-[1.25rem] bg-brand-cream/[0.03]"
          }
        >
          {/* Embedded Video */}
          <iframe
            src={showcase.embedUrl}
            title={showcase.title ?? projectTitle}
            className={isPortrait ? "h-full w-full scale-[1.02]" : "h-full w-full"}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </motion.div>

      {showcase.caption ? (
        /* Showcase Caption */
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <p className={bodyTextClass}>{showcase.caption}</p>
        </div>
      ) : null}
    </section>
  );
}
