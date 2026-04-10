"use client";

import { motion, type Variants } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const sectionIntro: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const contentContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "yasmeen.belhaj@gmail.com",
    href: "mailto:yasmeen.belhaj@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/yasmeenbelhaj",
    href: "https://github.com/yasmeenbelhaj",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yasmeenbelhaj",
    href: "https://www.linkedin.com/in/yasmeenbelhaj",
    icon: FaLinkedinIn,
    external: true,
  },
];

const bodyTextClass =
  "text-[1.05rem] leading-[1.7] text-black/75 md:text-[1.18rem] lg:text-[1.28rem]";

const secondaryTextClass =
  "text-[1rem] leading-[1.65] md:text-[1.08rem] lg:text-[1.14rem]";

const cardLabelClass =
  "text-[0.78rem] uppercase tracking-[0.18em] text-brand-olive/75 md:text-[0.82rem] lg:text-[0.86rem]";

const buttonTextClass =
  "text-[0.9rem] md:text-[0.95rem] lg:text-[1rem]";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-brand-cream text-brand-rust"
    >
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-28 md:pb-32">
        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[52rem]"
        >
          <h2 className="font-['the-seasons'] text-5xl font-bold leading-[1.1] tracking-wide text-black md:leading-[1.18]">
            Contact
          </h2>

          <div className="mt-6 h-[2px] w-20 bg-brand-terracotta/80" />

          <p className={`mt-8 max-w-[46rem] ${bodyTextClass}`}>
            I’m currently seeking graduate and early-career opportunities in
            software engineering, front-end development, and creative
            technology. For roles, collaborations, or conversation, feel free
            to get&nbsp;in&nbsp;touch.
          </p>
        </motion.div>

        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10"
        >
          <motion.div variants={itemReveal} className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group block rounded-[1.5rem] border border-brand-sand/35 bg-white/30 px-5 py-5 transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-[2px] hover:border-brand-gold/55 hover:bg-white/45 hover:shadow-[0_16px_40px_rgba(71,29,20,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-sand/35 bg-brand-cream/60 text-brand-terracotta">
                        <Icon className="h-[17px] w-[17px]" />
                      </div>

                      <div>
                        <p className={cardLabelClass}>{item.label}</p>
                        <p
                          className={`${secondaryTextClass} mt-2 text-brand-rust/85`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <FiArrowUpRight className="mt-1 h-[18px] w-[18px] shrink-0 text-brand-olive/70 transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-brand-terracotta" />
                  </div>
                </a>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemReveal}
            className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-brand-sand/40 bg-brand-rust px-6 py-8 text-center text-brand-cream sm:px-7 sm:py-9 lg:px-8 lg:py-10"
          >
            <h3 className="font-['the-seasons'] text-[2.15rem] font-bold leading-[1.18] tracking-[0.03em] text-white">
              CV
            </h3>

            <p
              className={`mt-4 max-w-[22rem] ${secondaryTextClass} text-brand-cream/80`}
            >
              A concise overview of my background, technical experience, and
              selected work.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/yasmeen_belhaj-cv.pdf"
                download
                className={`inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-5 py-3 text-brand-cream/80 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-[1px] hover:border-brand-gold/70 hover:bg-brand-gold/[0.14] ${buttonTextClass}`}
              >
                <FiDownload className="h-[16px] w-[16px]" />
                <span>Download CV</span>
              </a>

              <a
                href="/yasmeen_belhaj-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className={`group inline-flex items-center gap-2 text-brand-sand transition-colors duration-300 hover:text-brand-cream/80 ${buttonTextClass}`}
              >
                <span>View in browser</span>
                <FiArrowUpRight className="h-[15px] w-[15px] opacity-80 transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}