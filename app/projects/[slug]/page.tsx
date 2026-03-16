import { notFound } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

import { projects } from "../../../content/projects";
import { techIcons } from "../../../lib/techIcons";

import SnowyMountainsEmbed from "../../../components/projects/generative-drawing-triptych/SnowyMountainsEmbed";
import CitySkylineEmbed from "../../../components/projects/generative-drawing-triptych/CitySkylineEmbed";
import ForestCabinEmbed from "../../../components/projects/generative-drawing-triptych/ForestCabinEmbed";

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

  const sketchMap: Record<string, React.ReactNode> = {
    "snowy-mountains": <SnowyMountainsEmbed />,
    "city-skyline": <CitySkylineEmbed />,
    "forest-cabin": <ForestCabinEmbed />,
  };

  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/70">
            {project.year}
          </p>

          <h1 className="mt-4 font-['the-seasons'] text-5xl font-bold tracking-wide text-white md:text-6xl">
            {project.title}
          </h1>

          <div className="mt-6 h-[2px] w-16 bg-brand-terracotta/80" />

          {project.meta && (
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-brand-sand/75">
              {project.meta}
            </p>
          )}

          <p className="mt-8 text-lg leading-relaxed text-brand-cream/82">
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

        <section className="mt-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/70">
            Overview
          </p>

          <p className="mt-5 text-base leading-relaxed text-brand-cream/80 md:text-lg">
            {project.intro}
          </p>

          <p className="mt-5 text-base leading-relaxed text-brand-cream/72">
            {project.overview}
          </p>
        </section>

        {project.triptych?.length ? (
          <section className="mt-20">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/70">
                Triptych
              </p>

              <p className="mt-5 text-base leading-relaxed text-brand-cream/72">
                The three sketches are presented together to preserve the
                project as a cohesive series.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {project.triptych.map((sketch) => (
                <div key={sketch.slug} className="flex justify-center">
                  <article className="group max-w-full min-w-0 rounded-[1.75rem] border border-brand-sand/25 bg-brand-cream/[0.04] px-4 py-4 sm:px-5 sm:py-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-brand-gold/45 hover:bg-brand-cream/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                    <div className="mx-auto w-fit max-w-full">
                      <div className="mx-auto w-fit max-w-full overflow-hidden rounded-[1.25rem] border border-brand-sand/15 bg-brand-black/40">
                        {sketchMap[sketch.slug]}
                      </div>

                      <div className="mt-4 min-w-0 sm:mt-5">
                        <h2 className="max-w-[26rem] font-['the-seasons'] text-3xl font-bold leading-none tracking-[0.03em] text-white">
                          {sketch.title}
                        </h2>

                        <p className="mt-3 max-w-[26rem] text-sm leading-6 text-brand-cream/72">
                          {sketch.description}
                        </p>

                        {sketch.interactionHint && (
                          <ul className="mt-4 max-w-[26rem] space-y-1 text-xs uppercase tracking-[0.18em] text-brand-gold/80">
                            {sketch.interactionHint.map((hint) => (
                              <li key={hint}>{hint}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {project.buildNotes?.length ? (
          <section className="mt-20 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/70">
              Build & Techniques
            </p>

            <div className="mt-8 grid gap-5">
              {project.buildNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[1.4rem] border border-brand-sand/20 bg-brand-cream/[0.03] px-5 py-4"
                >
                  <p className="text-base leading-relaxed text-brand-cream/78">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {project.reflection?.length ? (
          <section className="mt-20 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/70">
              Reflection
            </p>

            <div className="mt-8 grid gap-5">
              {project.reflection.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-brand-sand/20 bg-brand-cream/[0.03] px-5 py-4"
                >
                  <p className="text-base leading-relaxed text-brand-cream/78">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {project.links?.length ? (
          <section className="mt-20 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-sand/70">
              Links
            </p>

            <ul className="mt-6 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-brand-sand/35 bg-brand-cream/[0.05] px-5 py-2.5 text-sm text-brand-cream transition-colors duration-200 hover:border-brand-gold/60 hover:bg-brand-cream/[0.1]"
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