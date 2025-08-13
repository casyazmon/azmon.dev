import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className=" ">
      <div className="container flex justify-between mx-auto px-4 py-10 lg:py-20 gap-8 lg:gap-16">
        <div className="hidden lg:flex flex-col mb-8 lg:mb-0">
        <h1 className="border-b border-gray-200 text-lg md:text-xl font-bold">Name: Akap Azmon</h1>
        <span className="text-xl md:text-2xl font-bold font-sans mt-2">Specialized In</span>
        <p className="text-base md:text-lg">Android (Java & Kotlin) </p>
        <p className="text-base md:text-lg">JavaScript (React, Next.js) & TypeScript</p>
        <p className="text-base md:text-lg">Scalable backend systems.</p>
      </div>
        


      {/* Right Image Section */}
      <div className="flex flex-col max-w-full lg:max-w-2xl">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-3 leading-tight">
          FullStack <br /> Software Developer.
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-10 leading-relaxed">
          I’m a self-driven software developer with over five years of experience. I’ve taught computer science, 
          built real-time medical platforms, and contributed to scalable web systems. I value clear code, user-first 
          design, and meaningful impact—and I thrive in remote, collaborative environments."
        </p>
        <button
          type="button"
          className="flex items-center text-base md:text-lg font-medium px-6 md:px-8 py-3 md:py-4 border-2 border-black rounded-full self-start hover:bg-black hover:text-white transition-colors duration-300"
        >
          SEE MY WORKS
          <span className="ml-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
            &rarr;
          </span>
        </button>
        
        {/* Social Links */}
        {/* <div className="mt-10 md:mt-20 flex flex-wrap space-x-4 text-base md:text-xl font-medium text-gray-800">
          <a href="#" className="hover:underline">LinkedIn</a>
          <span>/</span>
          <a href="#" className="hover:underline">Nostr</a>
          <span>/</span>
          <a href="#" className="hover:underline">GitHub</a>
        </div> */}
      </div>

      </div>
      {/* Left Content */}
      
    </main>
  )
}

export default Hero
