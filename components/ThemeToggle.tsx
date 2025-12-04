'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";


const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();


    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 border border-stone-200 dark:border-stone-700"
            aria-label="Toggle theme"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-stone-800 dark:text-stone-200" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-stone-800 dark:text-stone-200" style={{ top: '0.5rem', left: '0.5rem' }} />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}

export default ThemeToggle