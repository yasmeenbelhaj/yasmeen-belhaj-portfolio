"use client";

import { useEffect, useState } from "react";
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

const bodyTextClass =
  "text-[1.05rem] leading-[1.7] text-brand-cream/80 md:text-[1.18rem] lg:text-[1.28rem]";
  
export default function ProjectShowcaseSection({
  showcase,
  projectTitle,
}: ProjectShowcaseSectionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (showcase.type !== "video" || !showcase.embedUrl) return null;

  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={mediaReveal}
      >
        <div className="aspect-video w-full overflow-hidden rounded-[1.25rem] bg-brand-cream/[0.03]">
          {isMounted ? (
            <iframe
              src={showcase.embedUrl}
              title={showcase.title ?? projectTitle}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : null}
        </div>
      </motion.div>

      {showcase.caption ? (
        <div className="mt-6 max-w-3xl">
          <p className={bodyTextClass}>{showcase.caption}</p>
        </div>
      ) : null}
    </section>
  );
}