"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

const mobileLinks = [
  ...links,
  { href: "/yasmeen_belhaj-cv.pdf", label: "CV", external: true },
];

export default function Nav() {
  const pathname = usePathname();
  const [hash, setHash] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setHash(window.location.hash || "");
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "");
    updateHash();

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, []);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    if (!mobileOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const scrollToSection = (targetHash: string) => {
    if (targetHash === "#projects") {
      window.dispatchEvent(new Event("scroll-to-projects"));
      window.history.replaceState(null, "", `/${targetHash}`);
      setHash(targetHash);
      return;
    }

    const id = targetHash.replace("#", "");
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `/${targetHash}`);
    setHash(targetHash);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/" && window.location.pathname === "/") {
      e.preventDefault();
      setMobileOpen(false);

      window.history.replaceState(null, "", "/");
      setHash("");

      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      setMobileOpen(false);

      const targetHash = href.replace("/", "");
      scrollToSection(targetHash);
      return;
    }

    setMobileOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && hash === "";
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.replace("/", "");
    }
    return pathname === href;
  };

  // Desktop typography refinement
  const desktopLinkClass = (active: boolean) =>
    [
      "relative inline-block text-[0.78rem] md:text-[0.82rem] lg:text-[0.86rem] uppercase tracking-[0.18em]",
      "text-white/85 transition-colors duration-200 hover:text-white",
      "after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-sand after:transition-transform after:duration-200 after:content-['']",
      "hover:after:scale-x-100",
      active ? "text-white after:scale-x-100" : "",
    ].join(" ");

  return (
    <header className="relative z-50 w-full border-b border-brand-sand/30 bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* ✨ UPDATED NAME (editorial wordmark) */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="font-['the-seasons'] text-[1.1rem] md:text-[1.2rem] font-bold leading-[1.1] tracking-[0.1em] text-white"
        >
          Yasmeen Belhaj
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <ul className="flex items-center gap-6">
            {links.map((l) => {
              const active = isActive(l.href);

              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className={desktopLinkClass(active)}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CV Button */}
          <Link
            href="/yasmeen_belhaj-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-sand/40 px-4 py-1.5 text-[0.82rem] md:text-[0.86rem] lg:text-[0.9rem] tracking-[0.18em] text-white/90 transition hover:border-brand-gold/60 hover:text-white"
          >
            <span className="uppercase">CV</span>
            <FiArrowUpRight className="h-3.5 w-3.5 opacity-80 transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
          </Link>
        </div>

        {/* MOBILE BUTTON — unchanged */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white/90 transition hover:bg-white/10 hover:text-white sm:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="relative block h-5 w-6">
            <span
              className={[
                "absolute left-0 top-[2px] h-[2px] w-6 bg-current transition-transform duration-200",
                mobileOpen ? "translate-y-[8px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[9px] h-[2px] w-6 bg-current transition-opacity duration-200",
                mobileOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[16px] h-[2px] w-6 bg-current transition-transform duration-200",
                mobileOpen ? "-translate-y-[6px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </nav>

      {/* MOBILE DRAWER — unchanged */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-black/60 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              id="mobile-drawer"
              className="fixed right-0 top-0 z-50 h-dvh w-[84%] max-w-sm border-l border-white/10 bg-black sm:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.22 }}
            >
              {/* unchanged */}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}