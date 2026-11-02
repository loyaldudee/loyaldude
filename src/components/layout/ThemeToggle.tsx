"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";
const getServerSnapshot = (): Theme => "light";

/** Light/dark switch. The initial theme is set by an inline script in layout.tsx (no flash). */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Follow the OS setting live, until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {}
      document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label="Dark theme"
      suppressHydrationWarning
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-terra hover:text-terra-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra ${className}`}
    >
      <Moon size={16} aria-hidden="true" className="dark:hidden" />
      <Sun size={16} aria-hidden="true" className="hidden dark:block" />
    </button>
  );
}
