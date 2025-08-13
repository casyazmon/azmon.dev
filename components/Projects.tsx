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
    <section id="projects" className=" bg-white pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold text-black mb-16">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-sm  hover:shadow-md transition duration-300 overflow-hidden"
            >
              <img
                src={project.image ?? "/images/default.png"}
                width={400}
                height={400}
                alt={project.title}
                className="w-full h-60 object-cover mb-4"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                <div className="text-sm text-gray-500 mb-2">{project.stack}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
