import { FiArrowUpRight } from "react-icons/fi";

/* Typography Tokens */
const secondaryTextClass =
  "text-[1rem] leading-[1.65] text-white/80 md:text-[1.08rem] lg:text-[1.14rem]";

const cardLabelClass =
  "text-[0.78rem] uppercase tracking-[0.18em] text-white/45 md:text-[0.82rem] lg:text-[0.86rem]";

const footerLinkClass =
  "group inline-flex items-center gap-1.5 text-[0.82rem] uppercase tracking-[0.18em] text-white/70 transition-colors duration-200 hover:text-brand-sand md:text-[0.86rem] lg:text-[0.9rem]";

export default function Footer() {
  return (
    /* Footer */
    <footer id="footer" className="mt-28 bg-brand-black text-white">
      
      {/* Top Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-brand-sand/30" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        
        {/* Footer Content */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          
          {/* Footer Meta */}
          <div className="space-y-2">
            <p className={secondaryTextClass}>
              © {new Date().getFullYear()} Yasmeen Belhaj
            </p>

            <p className={cardLabelClass}>
              Software Engineer | Front-End & Creative Technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yasmeenbelhaj"
              target="_blank"
              rel="noreferrer"
              className={footerLinkClass}
            >
              LinkedIn
              <FiArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yasmeenbelhaj"
              target="_blank"
              rel="noreferrer"
              className={footerLinkClass}
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