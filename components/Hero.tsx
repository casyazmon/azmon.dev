"use client"
import React, { useEffect, useState } from 'react'
import GridBackground from './GridBackground'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Software Engineer'

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <main className="relative overflow-hidden bg-background">
      {/* Grid background */}
      <GridBackground pulse />

      <div className="container mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">

          {/* Terminal prompt */}
          <div className="mb-8 font-mono text-sm md:text-base text-secondary">
            <span className="text-accent">$</span> software_engineer.init()
          </div>

          {/* Main heading with typing effect */}
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-light mb-6 leading-tight text-foreground tracking-tight">
            <span className="font-mono">{typedText}</span>
            <span className="terminal-cursor" />
          </h1>

          {/* Code comment style subtitle */}
          <div className="font-mono text-lg md:text-xl text-secondary mb-8">
            <span className="text-accent">//</span> Building scalable systems, APIs, and infrastructure
          </div>

          {/* Identity block */}
          <div className="bg-surface border border-border rounded-lg p-6 md:p-8 mb-10 font-mono text-sm md:text-base max-w-2xl">
            <div className="space-y-2 text-foreground">
              <div>
                <span className="text-secondary">const</span> developer = &#123;
              </div>
              <div className="pl-4">
                <span className="text-secondary">name:</span> <span className="text-accent">"Akap Azmon"</span>,
              </div>
              <div className="pl-4">
                <span className="text-secondary">role:</span> <span className="text-accent">"Software Engineer (Backend / Full-Stack)"</span>,
              </div>
              <div className="pl-4">
                <span className="text-secondary">experience:</span> <span className="text-accent">"6+ years"</span>,
              </div>
              <div className="pl-4">
                <span className="text-secondary">focus:</span> [<span className="text-accent">"Microservices"</span>, <span className="text-accent">"APIs"</span>, <span className="text-accent">"Cloud"</span>],
              </div>
              <div className="pl-4">
                <span className="text-secondary">available:</span> <span className="text-green-500">true</span>
              </div>
              <div>&#125;;</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-2xl font-light">
            Experienced full stack developer with 6+ years building scalable cloud-based microservices and web
            applications. Proficient in Java, Spring Boot, Kotlin, React.js, and PostgreSQL.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="group font-medium px-8 py-4 bg-foreground text-background hover:bg-accent transition-all duration-300 border border-foreground hover:border-accent font-mono text-sm md:text-base inline-flex items-center gap-2"
            onClick={() => window.open('/akap azmon.pdf', '_blank')}
          >
            <span>$ download_resume</span>
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>

        </div>
      </div>
    </main>
  )
}

export default Hero

