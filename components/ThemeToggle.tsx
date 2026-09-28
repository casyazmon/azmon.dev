"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:text-ink"
      aria-label="Toggle color theme"
    >
      <Sun className="h-4 w-4 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
    </button>
  );
};

export default ThemeToggle;
