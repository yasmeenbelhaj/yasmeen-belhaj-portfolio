import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../content/projects";
import { techIcons } from "../lib/techIcons";
import { MotionDiv } from "./Motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <MotionDiv
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: smoothEase }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-brand-sand/30 bg-brand-cream/[0.04] p-7 text-brand-cream transition-[border-color,background-color,box-shadow] duration-300 hover:border-brand-gold/45 hover:bg-brand-cream/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-gold/10 via-brand-gold/[0.04] to-transparent" />
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-gold/[0.08] blur-3xl" />
      </div>

      <Link href={`/projects/${project.slug}`} className="relative block h-full">
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-[85%]">
              <h3 className="font-['the-seasons'] text-3xl font-bold tracking-[0.04em] text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-brand-cream/68">
                {project.tagline}
              </p>
            </div>

            <span className="shrink-0 pt-1 text-[11px] uppercase tracking-[0.18em] text-brand-sand/75">
              {project.year}
            </span>
          </div>

          <div className="mt-6 h-px w-full bg-brand-sand/15 transition-colors duration-300 group-hover:bg-brand-gold/20" />

          <div className="mt-6 flex flex-wrap gap-3">
            {project.stack.slice(0, 4).map((item) => {
              const Icon = techIcons[item];

              return (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-sand/30 bg-brand-cream/[0.05] px-4 py-2 text-sm text-brand-cream/85 transition-colors duration-200 group-hover:border-brand-sand/40"
                >
                  {Icon ? (
                    <Icon
                      className="h-[15px] w-[15px] shrink-0 text-brand-sand/80"
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sand/75"
                      aria-hidden="true"
                    />
                  )}

                  <span>{item}</span>
                </span>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.22em] text-brand-sand/70">
              Case Study
            </span>

            <span className="group/arrow inline-flex items-center gap-1 text-sm text-brand-cream/88 transition-colors duration-200">
              <span>View project</span>
              <FiArrowUpRight
                className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover/arrow:-translate-y-[1px] group-hover/arrow:translate-x-[1px]"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}