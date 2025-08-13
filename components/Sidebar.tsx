'use client'
import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
    <>
      {/* Toggle Button (Mobile Only) */}
      <div className="fixed top-4 left-4 z-[1001] sm:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md bg-gray-800 text-white"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-[999] sm:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[80vw] sm:w-[90px] bg-white border-r border-gray-300 z-[1002]
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:flex
        flex-col justify-between items-center pt-6 pb-6`}
      >
        {/* Close button (mobile only) */}
        <button
          className="absolute top-4 right-4 sm:hidden text-gray-500 text-2xl"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Logo */}
        <a href="/" className="mb-6 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="#555" strokeWidth="2" />
            <text
              x="16"
              y="21"
              textAnchor="middle"
              fontSize="14"
              fill="#555"
              fontFamily="Arial"
              fontWeight="bold"
            >
              AZ
            </text>
          </svg>
        </a>

        {/* Navigation Links */}
        {/* <nav className="flex flex-col items-center gap-6">
          <a href="#experience" className="text-gray-800 hover:text-black transition-colors">
            Experience
          </a>
          <a href="#services" className="text-gray-800 hover:text-black transition-colors">
            Services
          </a>
          <a href="#projects" className="text-gray-800 hover:text-black transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-800 hover:text-black transition-colors">
            Contact
          </a>
          <a href="#blog" className="text-gray-800 hover:text-black transition-colors">
            Blog
          </a>
          <a href="#about" className="text-gray-800 hover:text-black transition-colors">
            About
          </a>
        </nav> */}

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-5">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
            <SiX size={20} className="text-black hover:text-gray-700 transition" />
          </a>
          <a href="https://github.com/casyazmon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} className="text-black hover:text-gray-600 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} className="text-black hover:text-gray-700 transition" />
          </a>
          <a href="https://linkedin.com/in/akap-azmon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} className="text-black hover:text-gray-700 transition" />
          </a>
          </div>
        </div>
    </>
  )
}

export default Sidebar
