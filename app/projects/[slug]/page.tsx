import { notFound } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

import { projects } from "../../../content/projects";
import { techIcons } from "../../../lib/techIcons";
import ProjectTriptychSection from "../../../components/projects/ProjectTriptychSection";
import ProjectShowcaseSection from "../../../components/projects/ProjectShowcaseSection";
import ProjectFeaturedLinkSection from "../../../components/projects/ProjectFeaturedLinkSection";

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

          <h1 className="mt-4 font-['the-seasons'] text-5xl font-bold tracking-wide text-white leading-[1.1] md:text-6xl md:leading-[1.25]">
            {project.title}
          </h1>

          <div className="mt-6 h-[2px] w-16 bg-brand-terracotta/80" />

          <p className="mt-6 max-w-2xl text-xl italic leading-relaxed text-brand-cream/85 md:text-2xl md:leading-[1.6]">
            {project.tagline}
          </p>
          
          {project.client ? (
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.18em] text-brand-sand/90">
                {project.client.label ?? "Client"}:
              </span>

              {project.client.logo ? (
                project.client.url ? (
                  <a
                    href={project.client.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center opacity-85 transition-opacity duration-300 hover:opacity-100"
                  >
                    <div className="inline-flex h-12 items-center overflow-hidden rounded-md bg-brand-cream/[0.05]">
                      <img
                        src={project.client.logo}
                        alt={project.client.name}
                        className="h-full w-auto object-contain grayscale"
                      />
                    </div>
                  </a>
                ) : (
                  <div className="inline-flex items-center opacity-85">
                    <div className="inline-flex h-12 items-center overflow-hidden rounded-md bg-brand-cream/[0.05]">
                      <img
                        src={project.client.logo}
                        alt={project.client.name}
                        className="h-full w-auto object-contain grayscale"
                      />
                    </div>
                  </div>
                )
              ) : project.client.url ? (
                <a
                  href={project.client.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-brand-cream/85 transition-colors duration-200 hover:text-white"
                >
                  {project.client.name}
                  <FiArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                </a>
              ) : (
                <span className="text-sm text-brand-cream/85">
                  {project.client.name}
                </span>
              )}
            </div>
          ) : null}
          
          {project.meta && (
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-brand-sand/90">
              {project.meta}
            </p>
          )}

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
                      className="h-[15px] w-[15px] text-brand-sand"
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-brand-sand/75"
                      aria-hidden="true"
                    />
                  )}

                  <span>{item}</span>
                </span>
              );
            })}
          </div>
        </header>

        <div className="mt-28 md:mt-32">
          {project.showcase ? (
            <ProjectShowcaseSection
              showcase={project.showcase}
              projectTitle={project.title}
            />
          ) : null}
        </div>

        {project.featuredLink ? (
          <ProjectFeaturedLinkSection
            feature={project.featuredLink}
            projectTitle={project.title}
          />
        ) : null}

        {project.type === "triptych" && project.triptych?.length ? (
          <ProjectTriptychSection project={project} />
        ) : null}

        <section className="mt-20 md:mt-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/90">
              Overview
            </p>

            <p className="mt-5 text-base leading-relaxed text-brand-cream/80 md:text-[1.05rem] md:leading-[1.8]">
              {project.overview}
            </p>
          </div>
        </section>

        {project.buildNotes?.length ? (
          <section className="mt-20 md:mt-24">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/90">
                Build & Strategy
              </p>

              <div className="mt-5 space-y-5">
                {project.buildNotes.map((note) => (
                  <p
                    key={note}
                    className="text-base leading-relaxed text-brand-cream/80 md:text-[1.05rem] md:leading-[1.8]"
                  >
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {project.reflection && (
          <section className="mt-20 md:mt-24">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/90">
                Reflection
              </p>

              <p className="mt-5 text-base leading-relaxed text-brand-cream/80 md:text-[1.05rem] md:leading-[1.8]">
                {project.reflection}
              </p>
            </div>
          </section>
        )}

        {project.links?.length ? (
          <section className="mt-20 md:mt-24">
            <div className="max-w-4xl">
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
                      <FiArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}