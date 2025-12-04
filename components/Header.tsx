"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="py-4 border-b border-stone-200 dark:border-stone-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-4xl font-bold">A~Z</h1>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-stone-700 dark:text-stone-200 border-stone-400 dark:border-stone-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="#services" id='' className="hover:underline">Services</Link>
            <Link href="#experience" id='' className="hover:underline">Experiences</Link>
            <Link href="#projects" id='' className="hover:underline">Project</Link>
            <Link href="/blog" id='' className="hover:underline">Blog & News</Link>

            <Link href="#contact" className="hover:underline">Contact</Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/project" className="hover:underline" onClick={() => setMenuOpen(false)}>Project</Link>
            <Link href="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header