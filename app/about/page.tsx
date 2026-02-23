export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="font-['the-seasons'] font-bold text-5xl tracking-wide">About</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Creative Technologist working across web development and interactive,
          real-time AR/XR experiences.
        </p>
      </header>

      <section className="mt-10 max-w-2xl space-y-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          I build responsive interfaces and real-time systems through structured
          implementation and creative coding.
        </p>
        <p>
          Particularly interested in applying technical systems within socially
          meaningful and human-centred contexts.
        </p>
      </section>
    </main>
  );
}