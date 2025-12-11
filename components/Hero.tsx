"use client"
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className="relative overflow-hidden bg-stone-50 dark:bg-stone-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-stone-100/50 to-transparent dark:from-stone-900/50" />

      <div className="container flex flex-col-reverse lg:flex-row justify-center items-center mx-auto px-6 pt-20 pb-5 lg:py-32 gap-12 lg:gap-20">

        {/* Image Section */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/5] lg:w-2/5 flex-shrink-0">
          <Image
            src="/azmon akap.png"
            alt="Headshot"
            width={500}
            height={500}
            className="object-cover rounded-full shadow-xl"
          />
        </div>

        {/* Main Hero Text */}
        <div className="flex flex-col max-w-2xl lg:w-3/5"> {/* Allow text to take remaining space */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-stone-900 dark:text-stone-100 tracking-tight">
            FullStack <br />
            <span className="font-semibold">Software Developer.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 mb-10 leading-relaxed font-light max-w-xl">
            I’m a self-driven software developer with over five years of experience. I’ve taught computer science,
            built real-time medical platforms, and contributed to scalable web systems. I value clear code, user-first
            design, and meaningful impact.
          </p>

          {/* Download resume link */}
          <button
            type="button"
            className=" font-medium px-8 py-4 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-full self-start hover:bg-stone-800 dark:hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer "
            onClick={() => window.open('/akap azmon.pdf', '_blank')}
          >
            Download Resume
          </button>

        </div>

      </div>
    </main>
  )
}

export default Hero
