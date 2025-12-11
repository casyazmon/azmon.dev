"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="py-4 border-b border-stone-200 dark:border-stone-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/*logo*/}
        <Link href="/" className="flex items-center">
          <Image src="/akap azmon.png" alt="Logo" width={110} height={110} />
        </Link>
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
      {/* Mobile nav - Slide from left */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-stone-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col px-6 justify-center pt-8"> {/* Added padding to the top for better spacing */}
          {/* Logo */}
          <Image src="/akap azmon.png" alt="Logo" width={110} height={110} className="mb-8" />
          <nav className="flex flex-col space-y-4"> {/* Increased space-y for better touch targets */}
            <Link href="/" className="hover:underline text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#services" className="hover:underline text-lg" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="#experience" className="hover:underline text-lg" onClick={() => setMenuOpen(false)}>Experiences</Link>
            <Link href="#projects" className="hover:underline text-lg" onClick={() => setMenuOpen(false)}>Project</Link>
            <Link href="/blog" className="hover:underline text-lg" onClick={() => setMenuOpen(false)}>Blog & News</Link>
            <Link href="#contact" className="hover:underline text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
          <div className="mt-8"> {/* Increased margin-top */}
            <ThemeToggle />
          </div>
          <div className="mt-8"> {/* Increased margin-top */}
            <Link href="/resume.pdf" target="_blank" className="text-sm border border-stone-400 dark:border-stone-600 rounded-full px-4 py-2"
            >
              Download Resume


            </Link>
          </div>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default Header