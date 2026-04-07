"use client";

import { motion } from "framer-motion";

type TriptychSketchRowProps = {
  index: number;
  title: string;
  description: string;
  interactionHint?: string[];
  children: React.ReactNode;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

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

export default function TriptychSketchRow({
  index,
  title,
  description,
  interactionHint,
  children,
}: TriptychSketchRowProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}
      className="grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start lg:gap-16"
    >
      <div className="max-w-md lg:mt-6 lg:max-w-lg">
        <motion.p
          variants={itemReveal}
          className="font-['the-seasons'] text-[5.5rem] leading-[0.85] tracking-[-0.04em] text-brand-sand/90 sm:text-[7rem] md:text-[8.5rem] lg:mt-4 lg:text-[10rem] xl:text-[11rem]"
        >
          {number}
        </motion.p>

        <motion.h2
          variants={itemReveal}
          className="mt-4 font-['the-seasons'] text-3xl font-bold leading-none tracking-[0.03em] text-white md:text-4xl"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={itemReveal}
          className="mt-6 h-[2px] w-12 bg-brand-terracotta/80"
        />

        <motion.p
          variants={itemReveal}
          className="mt-7 text-base leading-relaxed text-brand-cream/80 md:text-[1.05rem] md:leading-[1.85] lg:text-base lg:leading-relaxed"
        >
          {description}
        </motion.p>

        {interactionHint && (
          <motion.div variants={itemReveal} className="mt-10 hidden lg:block">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand-sand/90">
              Interactions
            </p>

            <ul className="mt-5 space-y-2 text-base leading-relaxed text-brand-cream/80 md:text-[0.98rem] md:leading-[1.8] lg:text-sm lg:leading-relaxed">
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
        )}
      </div>

      <motion.div
        variants={sketchReveal}
        className="flex w-full min-w-0 flex-col items-center lg:items-end lg:pt-2"
      >
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.28, ease: smoothEase }}
          className="w-fit min-w-0 max-w-full"
        >
          <div className="mx-auto w-fit min-w-0 max-w-full overflow-hidden rounded-[1.25rem] border border-brand-sand/15 bg-brand-black/40">
            {children}
          </div>
        </motion.div>

        {interactionHint && (
          <motion.div variants={itemReveal} className="mt-8 w-full lg:hidden">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand-sand/90">
              Interactions
            </p>

            <ul className="mt-5 space-y-2 text-base leading-relaxed text-brand-cream/80 md:text-[0.98rem] md:leading-[1.8] lg:text-sm lg:leading-relaxed">
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
        )}
      </motion.div>
    </motion.article>
  );
}