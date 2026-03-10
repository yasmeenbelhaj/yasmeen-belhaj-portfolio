export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-24 bg-brand-black text-white"
    >
      {/* divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-brand-sand/30"></div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* left */}
          <div className="space-y-1 text-sm text-white/80">
            <p>© {new Date().getFullYear()} Yasmeen Belhaj</p>
            <p className="text-white/40">
              Creative Technologist
            </p>
          </div>

          {/* right */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/yasmeenbelhaj"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/60
                transition-colors duration-200
                hover:text-brand-gold
              "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/yasmeenbelhaj"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/60
                transition-colors duration-200
                hover:text-brand-gold
              "
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}