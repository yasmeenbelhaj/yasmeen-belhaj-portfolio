import { notFound } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

import { projects } from "../../../content/projects";
import { techIcons } from "../../../lib/techIcons";
import ProjectTriptychSection from "../../../components/projects/ProjectTriptychSection";
import ProjectShowcaseSection from "../../../components/projects/ProjectShowcaseSection";
import ProjectFeaturedLinkSection from "../../../components/projects/ProjectFeaturedLinkSection";

const sectionSpacing = "mt-20 md:mt-24";

const uiLabelClass =
  "text-[0.9rem] uppercase tracking-[0.18em] text-brand-sand/90 md:text-[0.95rem] lg:text-[1rem]";

const uiTextClass =
  "text-[0.95rem] text-brand-cream/85 md:text-[1rem] lg:text-[1.05rem]";

const bodyTextClass =
  "text-[1.05rem] leading-[1.7] text-brand-cream/80 md:text-[1.18rem] lg:text-[1.28rem]";
  
const pillTextClass =
  "text-[0.9rem] text-brand-cream/85 md:text-[0.95rem] lg:text-[1rem]";

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
          <p className={uiLabelClass}>{project.year}</p>

          <h1 className="mt-4 font-['the-seasons'] text-5xl font-bold leading-[1.1] tracking-wide text-white md:text-6xl md:leading-[1.18]">
            {project.title}
          </h1>

          <div className="mt-6 h-[2px] w-16 bg-brand-terracotta/80" />

          <p className="mt-6 max-w-2xl text-[1.15rem] italic leading-[1.55] text-brand-cream/85 md:text-[1.35rem] lg:text-[1.55rem]">
            {project.tagline}
          </p>

          {project.client || project.meta ? (
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              {project.client && (
                <div className="flex items-center gap-2.5">
                  <span className={uiLabelClass}>
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
                      className={`inline-flex items-center gap-2 transition-colors duration-200 hover:text-white ${uiTextClass}`}
                    >
                      {project.client.name}
                      <FiArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  ) : (
                    <span className={uiTextClass}>
                      {project.client.name}
                    </span>
                  )}
                </div>
              )}

              {project.meta && (
                <span className={uiLabelClass}>{project.meta}</span>
              )}
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((item) => {
              const Icon = techIcons[item];

              return (
                <span
                  key={item}
                  className={`inline-flex items-center gap-[0.45rem] rounded-full border border-brand-sand/30 bg-brand-cream/[0.05] px-4 py-2 ${pillTextClass}`}
                >
                  {Icon ? (
                    <Icon
                      className="h-[16px] w-[16px] text-brand-sand translate-y-[-0.5px] md:h-[17px] md:w-[17px] lg:h-[18px] lg:w-[18px]"
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

        <div className={sectionSpacing}>
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

        {project.layout === "triptych" && project.triptych?.length ? (
          <ProjectTriptychSection project={project} />
        ) : null}

        <section className={sectionSpacing}>
          <div className="max-w-3xl">
            <p className={uiLabelClass}>Overview</p>

            <p className={`mt-5 ${bodyTextClass}`}>
              {project.overview}
            </p>
          </div>
        </section>

        {project.buildNotes?.length ? (
          <section className={sectionSpacing}>
            <div className="max-w-3xl">
              <p className={uiLabelClass}>Build & Strategy</p>

              <div className="mt-5 space-y-5">
                {project.buildNotes.map((note) => (
                  <p key={note} className={bodyTextClass}>
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {project.reflection ? (
          <section className={sectionSpacing}>
            <div className="max-w-3xl">
              <p className={uiLabelClass}>Reflection</p>

              <p className={`mt-5 ${bodyTextClass}`}>
                {project.reflection}
              </p>
            </div>
          </section>
        ) : null}

        {project.links?.length ? (
          <section className={sectionSpacing}>
            <div className="max-w-4xl">
              <p className={uiLabelClass}>Links</p>

              <ul className="mt-6 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-full border border-brand-sand/35 bg-brand-cream/[0.05] px-5 py-2.5 transition-colors duration-200 hover:border-brand-gold/60 hover:bg-brand-cream/[0.1] ${uiTextClass}`}
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