"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [hash, setHash] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  /* ------------------------------
     Keep hash synced (safe methods only)
     ------------------------------ */

  // Sync hash on route changes (works for normal navigations)
  React.useEffect(() => {
    setHash(window.location.hash || "");
    setMobileOpen(false); // close drawer on route change
  }, [pathname]);

  // Sync hash on real hash changes and back/forward
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

  // Close on Escape
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when drawer is open
  React.useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  /* ------------------------------
     Click handlers
     ------------------------------ */

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // If clicking Home while already on "/" but currently at "/#projects",
    // Next may clear the hash without firing hashchange — so we do it ourselves.
    if (href === "/" && window.location.pathname === "/" && window.location.hash) {
      e.preventDefault();
      setMobileOpen(false);

      window.history.replaceState(null, "", "/");
      setHash("");

      // Optional: feels nice since "Home" implies top
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Your custom Projects behavior (freeze transforms handled by homepage)
    if (href === "/#projects" && window.location.pathname === "/") {
      e.preventDefault();
      setMobileOpen(false);

      window.dispatchEvent(new Event("scroll-to-projects"));
      window.history.replaceState(null, "", "/#projects");
      setHash("#projects");
      return;
    }

    // Normal navigation: just close the drawer
    setMobileOpen(false);
  };

  /* ------------------------------
     Active link logic
     ------------------------------ */

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && hash !== "#projects";
    if (href === "/#projects") return pathname === "/" && hash === "#projects";
    return pathname === href;
  };

  const desktopLinkClass = (active: boolean) =>
    [
      "relative inline-block text-white/85 transition-colors duration-200 hover:text-white",
      "after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 after:content-['']",
      "hover:after:scale-x-100",
      active ? "text-white after:scale-x-100 after:bg-[#8C3B1E]" : "",
    ].join(" ");

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="text-sm font-medium tracking-wide text-white"
        >
          Yasmeen Belhaj
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-sm sm:flex">
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

        {/* Mobile button */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 transition"
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
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="sm:hidden fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              id="mobile-drawer"
              className="sm:hidden fixed right-0 top-0 z-50 h-dvh w-[84%] max-w-sm border-l border-white/10 bg-black"
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
                    className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 transition"
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
                  {links.map((l) => {
                    const active = isActive(l.href);

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
                          onClick={(e) => handleNavClick(e, l.href)}
                          className={[
                            "font-['the-seasons'] text-2xl font-medium tracking-wider text-white/90 hover:text-white",
                            "relative inline-block",
                            "after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 after:content-['']",
                            "hover:after:scale-x-100",
                            active
                              ? "text-white after:scale-x-100 after:bg-[#8C3B1E]"
                              : "",
                          ].join(" ")}
                        >
                          {l.label}
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