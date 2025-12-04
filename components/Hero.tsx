import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className="relative overflow-hidden bg-stone-50 dark:bg-stone-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-stone-100/50 to-transparent dark:from-stone-900/50" />

      <div className="container flex flex-col-reverse lg:flex-row justify-between items-center mx-auto px-6 py-20 lg:py-32 gap-12 lg:gap-20">

        {/* Left Content (formerly right in code structure, but visually left usually? The original code had them swapped in flex-col vs lg:flex-row. Let's keep the structure but refine styles) */}
        {/* Actually, looking at the original code:
            div 1: "Name: Akap Azmon" (hidden lg:flex) -> This seems to be a sidebar-ish info block?
            div 2: "FullStack Software Developer" -> Main hero text.
            
            The original code had `flex-col` for mobile and `lg:flex-row`.
            Let's stick to a clean layout.
        */}

        <div className="hidden lg:flex flex-col items-start space-y-6 text-stone-600 dark:text-stone-400">
          <div className="border-b border-stone-200 dark:border-stone-800 pb-4 mb-2 w-full">
            <h2 className="text-lg font-medium text-stone-900 dark:text-stone-100">Akap Azmon</h2>
            <p className="text-sm">Software Engineer</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-stone-400 dark:text-stone-500">Specialized In</span>
            <p className="text-base font-light">Android (Java & Kotlin)</p>
            <p className="text-base font-light">JavaScript (React, Next.js)</p>
            <p className="text-base font-light">Scalable Backend Systems</p>
          </div>
        </div>

        {/* Main Hero Text */}
        <div className="flex flex-col max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-stone-900 dark:text-stone-100 tracking-tight">
            FullStack <br />
            <span className="font-semibold">Software Developer.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 mb-10 leading-relaxed font-light max-w-xl">
            I’m a self-driven software developer with over five years of experience. I’ve taught computer science,
            built real-time medical platforms, and contributed to scalable web systems. I value clear code, user-first
            design, and meaningful impact.
          </p>

          <button
            type="button"
            className="group flex items-center text-base md:text-lg font-medium px-8 py-4 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-full self-start hover:bg-stone-800 dark:hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            See My Work
            <span className="ml-3 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </button>
        </div>

      </div>
    </main>
  )
}

export default Hero
