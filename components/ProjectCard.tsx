import Link from "next/link";
import type { Project } from "../content/projects";
import { MotionDiv } from "./Motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <MotionDiv
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:bg-white/10"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.tagline}
            </p>
          </div>

          <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
            {project.year}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 text-sm font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">
          View project →
        </div>
      </Link>
    </MotionDiv>
  );
}