import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../content/projects";
import { MotionDiv } from "./Motion";

/* Motion Token */
const smoothEase = [0.22, 1, 0.36, 1] as const;

/* Typography Tokens */
const cardLabelClass =
  "text-[0.78rem] uppercase tracking-[0.18em] text-brand-sand/80 md:text-[0.82rem] lg:text-[0.86rem]";

const secondaryTextClass =
  "text-[1rem] leading-[1.65] text-brand-cream/80 md:text-[1.08rem] lg:text-[1.14rem]";

function ProjectCardVisual({ project }: { project: Project }) {
  if (project.slug === "william-champions-grotto") {
    return (
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem] border border-brand-sand/20 bg-brand-black">
        <Image
          src="/images/grotto.jpg"
          alt="William Champion's Grotto"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/25" />
      </div>
    );
  }

  if (project.slug === "visualising-truth") {
    return (
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem] border border-brand-sand/20 bg-brand-black">
        <Image
          src="/images/visualising_truth_card.png"
          alt="Visualising Truth spatial reconstruction interface"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/15" />
      </div>
    );
  }

  if (project.slug === "palestine-lit-by-loss") {
    return (
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem] border border-brand-sand/20 bg-brand-black">
        <Image
          src="/images/palestine_lit_by_loss.png"
          alt="Palestine: Lit by Loss AR candlelight vigil"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/15" />
      </div>
    );
  }

  if (project.slug === "generative-drawing-triptych") {
    return (
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem] border border-brand-sand/20 bg-brand-black">
        <Image
          src="/images/triptych_card.png"
          alt="Generative Drawing Triptych panels"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
    );
  }

  return (
    <div className="grid aspect-[5/4] grid-cols-3 overflow-hidden rounded-[1.25rem] border border-brand-sand/20 bg-brand-black">
      <div className="relative bg-[#d9e7f2]">
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[#6d7f82]" />
        <div className="absolute left-[18%] bottom-[30%] h-[30%] w-[42%] rotate-45 bg-brand-cream" />
        <div className="absolute right-[16%] bottom-[34%] h-[24%] w-[34%] rotate-45 bg-white" />
      </div>
      <div className="relative bg-[#101828]">
        <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[#222]" />
        <div className="absolute bottom-[24%] left-[14%] h-[46%] w-[18%] bg-brand-rust" />
        <div className="absolute bottom-[24%] left-[40%] h-[62%] w-[20%] bg-brand-sand" />
        <div className="absolute bottom-[24%] right-[12%] h-[38%] w-[20%] bg-brand-gold" />
      </div>
      <div className="relative bg-[#24352c]">
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-[#5d6b48]" />
        <div className="absolute bottom-[30%] left-[28%] h-[22%] w-[42%] bg-brand-rust" />
        <div className="absolute bottom-[52%] left-[25%] h-[22%] w-[48%] rotate-45 bg-brand-sand" />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    /* Project Card */
    <MotionDiv
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: smoothEase }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-sand/30 bg-brand-cream/[0.04] p-5 text-brand-cream transition-[border-color,background-color,box-shadow] duration-300 hover:border-brand-gold/45 hover:bg-brand-cream/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6"
    >
      {/* Ambient Background Effects */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-gold/10 via-brand-gold/[0.04] to-transparent" />
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-gold/[0.08] blur-3xl" />
      </div>

      {/* Card Link Wrapper */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative flex h-full flex-col"
      >
        <div className="flex h-full flex-col">
          {/* Visual Preview */}
          <ProjectCardVisual project={project} />

          {/* Content */}
          <div className="mt-5 flex flex-1 flex-col">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-[85%]">
              
              {/* Project Title */}
              <h3 className="font-['the-seasons'] text-3xl font-bold leading-[1.28] tracking-[0.03em] text-white">
                {project.title}
              </h3>
            </div>

            {/* Project Year */}
            <span className="shrink-0 pt-1">
              <span className={cardLabelClass}>{project.year}</span>
            </span>
          </div>

          {/* Divider */}
          <div className="mt-5 h-px w-full bg-brand-sand/15 transition-colors duration-300 group-hover:bg-brand-gold/20" />

          {/* Project Tagline */}
          <p className={`mt-5 ${secondaryTextClass}`}>
            {project.tagline}
          </p>

          {/* Footer / CTA Row */}
          <div className="mt-auto flex items-center justify-between pt-6">
            
            {/* Project Type */}
            <span className={`${cardLabelClass} max-w-[60%] leading-[1.4]`}>
              {project.type}
            </span>

            {/* View Project CTA */}
            <span className="group/arrow inline-flex items-center gap-1.5 text-[0.82rem] text-brand-cream/80 transition-colors duration-200 md:text-[0.86rem] lg:text-[0.9rem]">
              <span>View project</span>
              <FiArrowUpRight
                className="h-3 w-3 transition-transform duration-200 group-hover/arrow:-translate-y-[1px] group-hover/arrow:translate-x-[1px]"
                aria-hidden="true"
              />
            </span>
          </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}
