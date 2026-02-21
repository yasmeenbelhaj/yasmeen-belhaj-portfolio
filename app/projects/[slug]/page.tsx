import { notFound } from "next/navigation";
import { projects } from "../../../content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
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
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-3xl">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.year}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
        <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
          {project.overview}
        </p>
      </section>

      <section className="mt-10 grid gap-8 max-w-3xl">
        {project.sections.map((s) => (
          <div key={s.heading}>
            <h3 className="text-base font-semibold tracking-tight">{s.heading}</h3>
            <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
              {s.body}
            </p>
          </div>
        ))}
      </section>

      {project.links?.length ? (
        <section className="mt-12 max-w-3xl">
          <h2 className="text-lg font-semibold tracking-tight">Links</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                >
                  {l.label} →
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}