"use client";

import { Button } from "@/components/ui/button";
import { controlButtonClass } from "./control-button";

/**
 * Stateless by design: the Sun/Moon swap is driven by the `dark` class on
 * <html> via CSS, and the blocking script in the root layout sets that class
 * before paint. So there is nothing to hydrate, no mount guard, and no
 * placeholder flash — the click handler just reads the DOM.
 */
export default function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Private mode or blocked storage: the theme still flips for this page.
    }
  };

  return (
    <Button
      variant="outline"
      onClick={toggle}
      className={`relative ${controlButtonClass}`}
      aria-label={label}
    >
      <svg
        className="h-4 w-4 scale-100 rotate-0 transition-transform duration-200 motion-reduce:transition-none dark:scale-0 dark:-rotate-90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <svg
        className="absolute h-4 w-4 scale-0 rotate-90 transition-transform duration-200 motion-reduce:transition-none dark:scale-100 dark:rotate-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </Button>
  );
}
