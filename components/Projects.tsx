"use client";
import React from 'react'
import { motion } from "framer-motion";
import TerminalWindow from './TerminalWindow';

interface Project {
  title: string,
  description: string,
  stack: string,
  link: string,
  apiType?: string,
  architecture?: string
}

export const Projects = () => {

  const projects: Project[] = [
    {
      title: "E-Commerce API",
      description:
        "A Java Spring Boot API supporting cart, checkout, and user management with JWT-based auth and Swagger docs.",
      stack: "Java · Spring Boot · MySQL · JWT",
      link: "https://github.com/your-username/ecommerce-api",
      apiType: "REST API",
      architecture: "Monolithic"
    },
    {
      title: "Habit Tracker",
      description:
        "Android app for daily habit tracking with offline mode and Firebase Cloud Sync.",
      stack: "Kotlin · Jetpack Compose · Firebase · Firestore",
      link: "https://github.com/your-username/habit-tracker",
      apiType: "Mobile App",
      architecture: "Client-Server"
    },
    {
      title: "Learning Management System",
      description:
        "A full-stack LMS with user roles, course management, and real-time chat using Wordpress and React.",
      stack: "Wordpress · React · Tailwind CSS · Vite",
      link: "https://github.com/your-username/portfolio",
      apiType: "Full-Stack",
      architecture: "CMS-based"
    },
    {
      title: "Portfolio Website",
      description:
        "Personal site built with React.js and Tailwind CSS to showcase skills, services, and projects.",
      stack: "React · Tailwind CSS · Vite",
      link: "https://github.com/your-username/portfolio",
      apiType: "Static Site",
      architecture: "JAMstack"
    },
  ];


  return (
    <section id="projects" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight font-mono">
          <span className="text-secondary">$</span> ls projects/
        </h2>
        <p className="text-secondary mb-16 font-mono text-sm">
          // Backend systems, APIs, and applications
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <TerminalWindow title={project.title}>
                {/* Project description */}
                <p className="text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Backend metadata */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.apiType && (
                    <span className="px-3 py-1 bg-surface border border-border text-xs font-mono text-foreground">
                      {project.apiType}
                    </span>
                  )}
                  {project.architecture && (
                    <span className="px-3 py-1 bg-surface border border-border text-xs font-mono text-secondary">
                      {project.architecture}
                    </span>
                  )}
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-secondary mb-2">Stack:</div>
                  <div className="font-mono text-sm text-foreground">{project.stack}</div>
                </div>

                {/* View code link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-accent transition-colors duration-300 border-b border-foreground hover:border-accent"
                >
                  <span>$ view_code</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

