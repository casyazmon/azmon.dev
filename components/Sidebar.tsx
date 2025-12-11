'use client'
import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { SiX } from 'react-icons/si'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ESC key closes sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="hidden sm:block">
      {/* Toggle Button (Mobile Only) */}
      <div className="fixed top-4 left-4 z-[1001] sm:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md bg-stone-800 text-stone-50"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[999] sm:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[80vw] sm:w-[90px] bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 z-[1002]
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:flex
        flex-col justify-between items-center pt-8 pb-8`}
      >
        {/* Close button (mobile only) */}
        <button
          className="absolute top-4 right-4 sm:hidden text-stone-500 text-2xl"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center gap-6 mb-10">
          {/* Placeholder for Logo */}
          <div className="text-4xl font-bold text-stone-900 dark:text-stone-100">A</div>
        </div>

        <a href="mailto:akap@azmon.dev" className="mb-6 flex items-center justify-center group">
          <p className="[writing-mode:vertical-rl] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-sm">
            akap@azmon.dev
          </p>
        </a>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-6">
          <a href="https://linkedin.com/in/akap-azmon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
            <SiX size={20} className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" />
          </a>
          <a href="https://github.com/casyazmon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaTiktok size={20} className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
