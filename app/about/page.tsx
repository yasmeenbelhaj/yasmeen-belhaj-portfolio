export default function AboutPage() {
  const palette = [
    { name: "CREAM", hex: "#F4EBDD", bgClass: "bg-brand-cream", textClass: "text-black" },
    { name: "SAND", hex: "#AE9377", bgClass: "bg-brand-sand", textClass: "text-white" },
    { name: "OLIVE", hex: "#6A5C43", bgClass: "bg-brand-olive", textClass: "text-white" },
    { name: "GOLD", hex: "#C19862", bgClass: "bg-brand-gold", textClass: "text-white" },
    { name: "TERRACOTTA", hex: "#8E4829", bgClass: "bg-brand-terracotta", textClass: "text-white" },
    { name: "RUST", hex: "#471D14", bgClass: "bg-brand-rust", textClass: "text-white" },
    { name: "BLACK", hex: "#000000", bgClass: "bg-black", textClass: "text-white" },
  ];

  return (
    <main className="mx-auto min-h-screen max-w-5xl bg-brand-cream px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="font-['the-seasons'] text-5xl font-bold tracking-wide text-black">
          About
        </h1>
        <p className="mt-3 text-brand-sand">
          Creative Technologist working across web development and interactive,
          real-time AR/XR experiences.
        </p>
      </header>

      <section className="mt-10 max-w-2xl space-y-4 leading-relaxed text-black">
        <p>
          I build responsive interfaces and real-time systems through structured
          implementation and creative coding.
        </p>
        <p>
          Particularly interested in applying technical systems within socially
          meaningful and human-centred contexts.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-['the-seasons'] text-3xl text-black">
          Palette Preview
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {palette.map((color) => (
            <div
              key={color.name}
              className={`${color.bgClass} ${color.textClass} min-h-[220px] p-8`}
            >
              <div className="flex h-full flex-col justify-between">
                <h3 className="font-['the-seasons'] text-4xl leading-none">
                  {color.name}
                </h3>

                <div>
                  <p className="text-2xl leading-none">HEX</p>
                  <p className="mt-2 text-2xl leading-none">
                    {color.hex.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}