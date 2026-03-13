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
    if (href.startsWith("/#"))
      return pathname === "/" && hash === href.replace("/", "");
    return pathname === href;
  };

  const desktopLinkClass = (active: boolean) =>
    [
      "relative inline-block text-white/85 transition-colors duration-200 hover:text-white",
      "after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-sand after:transition-transform after:duration-200 after:content-['']",
      "hover:after:scale-x-100",
      active ? "text-white after:scale-x-100" : "",
    ].join(" ");

  return (
    <header className="relative z-50 w-full border-b border-brand-sand/30 bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="text-sm font-medium tracking-wide text-white"
        >
          Yasmeen Belhaj
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 sm:flex">
          <ul className="flex items-center gap-6 text-sm">
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

          {/* CV button */}
          <Link
            href="/yasmeen_belhaj-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-sand/40 px-4 py-1.5 text-xs tracking-wider text-white/90 transition hover:border-brand-gold/60 hover:text-white"
          >
            CV
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
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

      {/* Mobile drawer */}
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
              <div className="flex h-full flex-col px-6 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-white/60">
                    MENU
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-lg leading-none">✕</span>
                  </button>
                </div>

                <motion.ul
                  className="mt-10 flex flex-col gap-6"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06 } },
                  }}
                >
                  {mobileLinks.map((l) => {
                    const active = !("external" in l) && isActive(l.href);

                    return (
                      <motion.li
                        key={l.href}
                        variants={{
                          hidden: { opacity: 0, x: 10 },
                          show: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.18 }}
                      >
                        <Link
                          href={l.href}
                          target={"external" in l && l.external ? "_blank" : undefined}
                          rel={"external" in l && l.external ? "noreferrer" : undefined}
                          onClick={(e) => {
                            if ("external" in l && l.external) {
                              setMobileOpen(false);
                              return;
                            }
                            handleNavClick(e, l.href);
                          }}
                          className={[
                            "relative inline-block font-['the-seasons'] text-2xl font-medium tracking-wider text-white/90 hover:text-white",
                            "after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-sand after:transition-transform after:duration-200 after:content-['']",
                            "hover:after:scale-x-100",
                            active ? "text-white after:scale-x-100" : "",
                          ].join(" ")}
                        >
                          <span className="flex items-center gap-2">
                            {l.label}
                            {"external" in l && l.external && (
                              <FiArrowUpRight className="h-4 w-4" />
                            )}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                <div className="mt-auto pb-8 pt-10 text-xs text-white/50">
                  © {new Date().getFullYear()} Yasmeen Belhaj
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}