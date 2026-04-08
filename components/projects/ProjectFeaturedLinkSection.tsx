"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import type { ProjectFeature } from "../../content/projects";

type ProjectFeaturedLinkSectionProps = {
  feature: ProjectFeature;
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

export default function ProjectFeaturedLinkSection({
  feature,
  projectTitle,
}: ProjectFeaturedLinkSectionProps) {
  return (
    <section className="mt-28">
      <div className="max-w-3xl">
        {feature.eyebrow ? (
          <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/90">
            {feature.eyebrow}
          </p>
        ) : null}

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-cream/75 md:text-[1.03rem] md:leading-[1.8]">
          {feature.description}
        </p>
      </div>

      <motion.a
        href={feature.href}
        target="_blank"
        rel="noreferrer"
        className="group mt-10 block w-full overflow-hidden rounded-[1.75rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={mediaReveal}
      >
        <div className="relative">
          <img
            src={feature.image}
            alt={feature.imageAlt ?? feature.overlayTitle ?? projectTitle}
            className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-[500px] lg:h-[580px]"
          />

          <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center md:px-10">
            <div className="max-w-4xl">
              {feature.overlayTitle ? (
                <h2 className="font-['the-seasons'] font-semibold text-[1.4rem] leading-tight tracking-wide text-white sm:text-3xl md:text-5xl lg:text-6xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                  {feature.overlayTitle}
                </h2>
              ) : null}

              {feature.overlaySubtitle ? (
                <p className="mt-2 font-['the-seasons'] font-semibold text-[1.2rem] leading-tight tracking-wider text-white sm:text-2xl md:mt-4 md:text-4xl lg:text-5xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                  {feature.overlaySubtitle}
                </p>
              ) : null}

              {feature.ctaLabel ? (
                <div className="mt-12 flex flex-col items-center gap-3 text-[0.8rem] tracking-wide text-white sm:text-lg md:mt-16 md:gap-5 md:text-2xl lg:text-3xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                  <span>{feature.ctaLabel}</span>
                  <FiArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </div>
              ) : null}
            </div>
          </div>

          {feature.note ? (
            <p className="absolute bottom-6 right-6 text-xs text-white/85 md:bottom-8 md:right-8 md:text-sm">
              {feature.note}
            </p>
          ) : null}
        </div>
      </motion.a>
    </section>
  );
}