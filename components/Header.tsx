"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/content";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

const Header = ({ showWriting }: { showWriting: boolean }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="Akap Azmon, home">
          <span className="font-serif text-2xl leading-none">Akap Azmon</span>
          <span className="hidden font-mono text-[11px] text-faint transition-colors group-hover:text-accent sm:inline">
            azmon.dev
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center md:flex">
            {links.filter((link) => showWriting || link.href !== "/writing").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors hover:border-ink"
          >
            Résumé
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
