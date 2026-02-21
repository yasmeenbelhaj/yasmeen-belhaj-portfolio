import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../content/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Selected work across web development, real-time systems, and AR/XR.
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}