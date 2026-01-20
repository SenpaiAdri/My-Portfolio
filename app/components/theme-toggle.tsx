"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme, mounted } = useTheme();

  const toggleTheme = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const newTheme = resolvedTheme === "dark" ? "light" : "dark";

      // Check if View Transitions API is supported
      if (
        !document.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setTheme(newTheme);
        return;
      }

      const x = e.clientX;
      const y = e.clientY;

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        setTheme(newTheme);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath: clipPath,
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [resolvedTheme, setTheme]
  );

  if (!mounted) {
    return (
      <div
        className={cn("rounded-full p-2 w-8 h-8 md:w-10 md:h-10", className)}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group relative overflow-hidden rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
        className
      )}
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {isDark ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
        )}
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
        {isDark ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
        )}
      </span>
    </button>
  );
}
