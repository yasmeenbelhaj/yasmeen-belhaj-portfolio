"use client";

import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const handleProjectsClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/#projects") {
      // If we're already on the homepage, don't navigate—just scroll reliably
      if (window.location.pathname === "/") {
        e.preventDefault();

        // Tell the homepage to handle the scroll (so it can freeze motion transforms)
        window.dispatchEvent(new Event("scroll-to-projects"));

        // Keep URL in sync without stacking history entries
        window.history.replaceState(null, "", "/#projects");
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-medium tracking-tight">
          Yasmeen Belhaj
        </Link>

        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={(e) => handleProjectsClick(e, l.href)}
                className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}