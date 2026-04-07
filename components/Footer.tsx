import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="footer" className="mt-28 bg-brand-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-brand-sand/30" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm text-white/80">
            <p>© {new Date().getFullYear()} Yasmeen Belhaj</p>
            <p className="text-white/40">
              Software Engineer | Front-End & Creative Technology
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/yasmeenbelhaj"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-white/60 transition-colors duration-200 hover:text-brand-sand"
            >
              LinkedIn
              <FiArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
            </a>

            <a
              href="https://github.com/yasmeenbelhaj"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-white/60 transition-colors duration-200 hover:text-brand-sand"
            >
              GitHub
              <FiArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}