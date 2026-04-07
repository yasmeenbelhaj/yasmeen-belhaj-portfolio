import { notFound } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

import { projects } from "../../../content/projects";
import { techIcons } from "../../../lib/techIcons";
import ProjectTriptychSection from "../../../components/projects/ProjectTriptychSection";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-28 md:pb-32">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/90">
            {project.year}
          </p>

          <h1 className="mt-4 font-['the-seasons'] text-5xl font-bold tracking-wide text-white md:text-6xl">
            {project.title}
          </h1>

          <div className="mt-6 h-[2px] w-16 bg-brand-terracotta/80" />

          {project.meta && (
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-brand-sand/90">
              {project.meta}
            </p>
          )}

          <p className="mt-8 text-lg leading-relaxed text-brand-cream/80 md:text-[1.2rem] lg:text-lg">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((item) => {
              const Icon = techIcons[item];

              return (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-sand/30 bg-brand-cream/[0.05] px-4 py-2 text-sm text-brand-cream/85"
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
        </header>

        <section className="mt-20 max-w-3xl md:mt-24">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/90">
            Overview
          </p>

          <div className="mt-5 space-y-5">
            <p className="text-base leading-relaxed text-brand-cream/80 md:text-[1.05rem] md:leading-[1.8] lg:text-base lg:leading-relaxed">
              {project.overview}
            </p>
          </div>
        </section>

        {project.type === "triptych" && project.triptych?.length ? (
          <ProjectTriptychSection project={project} />
        ) : null}

        {project.buildNotes?.length ? (
          <section className="mt-24 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/90">
              Build & Strategy
            </p>

            <div className="mt-5 space-y-5">
              {project.buildNotes.map((note) => (
                <p
                  key={note}
                  className="text-base leading-relaxed text-brand-cream/80 md:text-[1.05rem] md:leading-[1.8] lg:text-base lg:leading-relaxed"
                >
                  {note}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        {project.links?.length ? (
          <section className="mt-20 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/90">
              Links
            </p>

            <ul className="mt-6 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-brand-sand/35 bg-brand-cream/[0.05] px-5 py-2.5 text-sm text-brand-cream/80 transition-colors duration-200 hover:border-brand-gold/60 hover:bg-brand-cream/[0.1]"
                  >
                    {link.label}

                    <FiArrowUpRight
                      className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}