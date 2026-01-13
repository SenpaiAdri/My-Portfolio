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

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-neutral-800 dark:text-neutral-200" />
      <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neutral-800 dark:text-neutral-200" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
