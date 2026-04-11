"use client";

import { motion } from "framer-motion";

/* Props */
type TriptychSketchRowProps = {
  index: number;
  title: string;
  description: string;
  interactionHint?: string[];
  children: React.ReactNode;
};

/* Motion Tokens */
const smoothEase = [0.22, 1, 0.36, 1] as const;

/* Container Animation */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

/* Content Reveal */
const itemReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

/* Sketch Reveal */
const sketchReveal = {
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
  
export default function TriptychSketchRow({
  index,
  title,
  description,
  interactionHint,
  children,
}: TriptychSketchRowProps) {
  /* Sketch Number */
  const number = String(index + 1).padStart(2, "0");

  return (
    /* Triptych Row */
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}
      className="grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start lg:gap-16"
    >
      {/* Content Column */}
      <div className="max-w-md lg:mt-6 lg:max-w-lg">
        
        {/* Row Number */}
        <motion.p
          variants={itemReveal}
          className="font-['the-seasons'] text-[5.5rem] leading-[0.85] tracking-[-0.04em] text-brand-sand/90 sm:text-[7rem] md:text-[8.5rem] lg:mt-4 lg:text-[10rem] xl:text-[11rem]"
        >
          {number}
        </motion.p>

        {/* Row Title */}
        <motion.h2
          variants={itemReveal}
          className="mt-4 font-['the-seasons'] text-3xl font-bold leading-none tracking-[0.03em] text-white md:text-4xl"
        >
          {title}
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={itemReveal}
          className="mt-6 h-[2px] w-12 bg-brand-terracotta/80"
        />

        {/* Description */}
        <motion.p variants={itemReveal} className={`mt-7 ${bodyTextClass}`}>
          {description}
        </motion.p>

        {interactionHint ? (
          /* Desktop Interactions */
          <motion.div variants={itemReveal} className="mt-10 hidden lg:block">
            <p className={uiLabelClass}>Interactions</p>

            {/* Interaction List */}
            <ul className={`mt-5 space-y-2 ${bodyTextClass}`}>
              {interactionHint.map((hint, hintIndex) => (
                <motion.li
                  key={`desktop-${hint}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.18 + hintIndex * 0.06,
                    ease: smoothEase,
                  }}
                >
                  {hint}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </div>

      {/* Sketch Column */}
      <motion.div
        variants={sketchReveal}
        className="flex w-full min-w-0 flex-col items-center lg:items-end lg:pt-2"
      >
        {/* Sketch Frame */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.28, ease: smoothEase }}
          className="w-fit min-w-0 max-w-full"
        >
          {/* Sketch Container */}
          <div className="mx-auto w-fit min-w-0 max-w-full overflow-hidden rounded-[1.25rem] border border-brand-sand/15 bg-brand-black/40">
            {children}
          </div>
        </motion.div>

        {interactionHint ? (
          /* Mobile Interactions */
          <motion.div variants={itemReveal} className="mt-8 w-full lg:hidden">
            <p className={uiLabelClass}>Interactions</p>

            {/* Interaction List */}
            <ul className="mt-5 space-y-1.5 text-[1.05rem] leading-[1.6] text-brand-cream/80 md:text-[1.18rem] lg:text-[1.28rem]">
              {interactionHint.map((hint, hintIndex) => (
                <motion.li
                  key={`mobile-${hint}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.18 + hintIndex * 0.06,
                    ease: smoothEase,
                  }}
                >
                  {hint}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </motion.div>
    </motion.article>
  );
}