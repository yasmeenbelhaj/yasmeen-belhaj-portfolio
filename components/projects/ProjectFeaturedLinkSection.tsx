"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import type { ProjectFeature } from "../../content/projects";

/* Props */
type ProjectFeaturedLinkSectionProps = {
  feature: ProjectFeature;
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

/* Typography Tokens */
const uiLabelClass =
  "text-[0.9rem] uppercase tracking-[0.18em] text-brand-sand/90 md:text-[0.95rem] lg:text-[1rem]";

const bodyTextClass =
  "text-[1.05rem] leading-[1.7] text-brand-cream/80 md:text-[1.18rem] lg:text-[1.28rem]";
  
export default function ProjectFeaturedLinkSection({
  feature,
  projectTitle,
}: ProjectFeaturedLinkSectionProps) {
  return (
    /* Featured Link Section */
    <section className="mt-20 md:mt-24">
      
      {/* Intro */}
      <div className="max-w-3xl">
        {feature.eyebrow ? (
          /* Eyebrow */
          <p className={uiLabelClass}>{feature.eyebrow}</p>
        ) : null}

        {/* Description */}
        <p className={`mt-5 ${bodyTextClass}`}>
          {feature.description}
        </p>
      </div>

      {/* Featured Link */}
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
          
          {/* Background Image */}
          <img
            src={feature.image}
            alt={feature.imageAlt ?? feature.overlayTitle ?? projectTitle}
            className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-[500px] lg:h-[580px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/50" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center md:px-10">
            <div className="max-w-4xl">
              
              {/* Overlay Title */}
              {feature.overlayTitle ? (
                <h2 className="font-['the-seasons'] text-[1.4rem] font-semibold leading-tight tracking-wide text-white sm:text-3xl md:text-5xl lg:text-6xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                  {feature.overlayTitle}
                </h2>
              ) : null}

              {/* Overlay Subtitle */}
              {feature.overlaySubtitle ? (
                <p className="mt-3 font-['the-seasons'] text-[1.2rem] font-semibold leading-tight tracking-[0.03em] text-white sm:text-2xl md:mt-4 md:text-4xl lg:text-5xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                  {feature.overlaySubtitle}
                </p>
              ) : null}

              {/* CTA */}
              {feature.ctaLabel ? (
                <div className="mt-12 flex flex-col items-center gap-3 text-[0.95rem] tracking-[0.04em] text-white sm:text-lg md:mt-16 md:gap-5 md:text-2xl lg:text-3xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                  <span>{feature.ctaLabel}</span>
                  <FiArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </div>
              ) : null}
            </div>
          </div>

          {/* Note */}
          {feature.note ? (
            <p className="absolute right-6 bottom-6 text-[0.9rem] text-white md:right-8 md:bottom-8 md:text-[0.95rem] lg:text-[1rem]">
              {feature.note}
            </p>
          ) : null}
        </div>
      </motion.a>
    </section>
  );
}