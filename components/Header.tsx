"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="py-4 border-b border-border bg-background">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/*logo*/}
        <Link href="/" className="flex items-center font-mono text-xl text-foreground">
          <span className="text-secondary">$</span> azmon.dev
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-foreground border-border"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="space-x-6 font-mono text-sm">
            <Link href="/" className="text-secondary hover:text-foreground transition-colors">home</Link>
            <Link href="#about" className="text-secondary hover:text-foreground transition-colors">about</Link>
            <Link href="#experience" className="text-secondary hover:text-foreground transition-colors">experience</Link>
            <Link href="#projects" className="text-secondary hover:text-foreground transition-colors">projects</Link>
            <Link href="/blog" className="text-secondary hover:text-foreground transition-colors">stories</Link>
            <Link href="#contact" className="text-secondary hover:text-foreground transition-colors">contact</Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile nav - Slide from left */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col px-6 justify-center pt-8">
          {/* Logo */}
          <div className="font-mono text-xl text-foreground mb-8">
            <span className="text-secondary">$</span> azmon.dev
          </div>
          <nav className="flex flex-col space-y-4 font-mono">
            <Link href="/" className="text-secondary hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>home</Link>
            <Link href="#about" className="text-secondary hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>about</Link>
            <Link href="#experience" className="text-secondary hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>experience</Link>
            <Link href="#projects" className="text-secondary hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>projects</Link>
            <Link href="/blog" className="text-secondary hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>stories</Link>
            <Link href="#contact" className="text-secondary hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>contact</Link>
          </nav>
          <div className="mt-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default Header