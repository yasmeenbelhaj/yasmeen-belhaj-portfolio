export default function Footer() {
  return (
    <footer className="mt-24 bg-black text-white border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Yasmeen Belhaj</p>

        <div className="flex gap-4">
          <a
            className="text-white/70 hover:text-white"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-white/70 hover:text-white"
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