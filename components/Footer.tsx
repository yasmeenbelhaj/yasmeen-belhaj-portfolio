export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200/70 py-10 dark:border-zinc-800/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Yasmeen Belhaj</p>

        <div className="flex gap-4">
          <a
            className="hover:text-zinc-950 dark:hover:text-white"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-zinc-950 dark:hover:text-white"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}