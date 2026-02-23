export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="font-['the-seasons'] font-bold text-5xl tracking-wide">Contact</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          For roles, collaborations, or questions — email is best.
        </p>
      </header>

      <section className="mt-10 max-w-2xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Email</p>
          <a
            className="mt-2 inline-block text-base font-medium hover:underline"
            href="mailto:YOUR_EMAIL_HERE"
          >
            YOUR_EMAIL_HERE
          </a>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full border border-zinc-200 px-4 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
            <a
              className="rounded-full border border-zinc-200 px-4 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}