"use client";
import React from 'react'
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import Image from 'next/image';

interface Project {
  title: string,
  image?: string,
  description: string,
  stack: string,
  link: string
}

export const Projects = () => {

  const projects: Project[] = [
    {
      title: "🛒 E-Commerce API",
      image: "https://i.pinimg.com/736x/26/c3/42/26c34247d8babb8318cf0d3dbbb09d98.jpg",
      description:
        "A Java Spring Boot API supporting cart, checkout, and user management with JWT-based auth and Swagger docs.",
      stack: "Java · Spring Boot · MySQL · JWT",
      link: "https://github.com/your-username/ecommerce-api",
    },
    {
      title: "📱 Habit Tracker (Android)",
      image: "https://i.pinimg.com/736x/d8/dd/4b/d8dd4bb6bbbabb7da2f884bca7ec0b48.jpg",
      description:
        "Android app for daily habit tracking with offline mode and Firebase Cloud Sync.",
      stack: "Kotlin · Jetpack Compose · Firebase Auth · Firestore",
      link: "https://github.com/your-username/habit-tracker",
    },
    {
      title: "Learning Management System",
      image: "https://i.pinimg.com/736x/38/fd/19/38fd19aa633fe86ae0e1a6b77c03c581.jpg",
      description:
        "A full-stack LMS with user roles, course management, and real-time chat using Wordpress and React.",
      stack: "Wordpress, React · Tailwind CSS · Vite",
      link: "https://github.com/your-username/portfolio",
    },


    {
      title: "🌐 Portfolio Website",
      image: "https://i.pinimg.com/736x/60/d5/44/60d544bbb24cb7e2a80f0e4b9a6f1fd5.jpg",
      description:
        "Personal site built with React.js and Tailwind CSS to showcase my skills, services, and projects.",
      stack: "React · Tailwind CSS · Vite",
      link: "https://github.com/your-username/portfolio",
    },

  ];


  return (
    <section id="projects" className="bg-stone-50 dark:bg-stone-950 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-stone-900 dark:text-stone-100 mb-16 tracking-tight text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image ?? "/images/default.png"}
                  width={400}
                  height={400}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 mb-3">{project.title}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 flex-grow leading-relaxed">{project.description}</p>
                <div className="text-xs font-medium text-stone-500 dark:text-stone-500 mb-4 uppercase tracking-wide">{project.stack}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 text-sm font-medium inline-flex items-center gap-2 mt-auto"
                >
                  View on GitHub
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
