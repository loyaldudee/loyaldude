"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Pill from "@/components/ui/Pill";
import { navLinks, site } from "@/data/site";

const linkClass =
  "font-mono text-[11px] uppercase tracking-[0.2em] text-ink/80 transition-colors hover:text-terra-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terra";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terra"
        >
          <Logo />
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <Pill href={site.resumeUrl} download={site.resumeFilename} className="!px-4 !py-2">
            Resume
          </Pill>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 rounded-full p-2 text-ink focus-visible:outline-2 focus-visible:outline-terra md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-cream px-6 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`${linkClass} block py-4`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Pill href={site.resumeUrl} download={site.resumeFilename} className="mt-5 w-full">
            Resume
          </Pill>
        </nav>
      ) : null}
    </header>
  );
}
