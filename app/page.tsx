import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import { Projects } from '@/components/Projects'
import SystemStatus from '@/components/SystemStatus'
import Blog from '@/components/Blog'
import { getAllPosts } from '@/lib/posts'
import React from 'react'




const HomePage = () => {
  // Fetch posts on the server
  const posts = getAllPosts() as any[];

  return (

    <div className="flex flex-col sm:flex-row">
      <main className="flex-1 sm:ml-[90px]">
        {/* Content Blocks */}
        <Hero />
        <SystemStatus />
        <About />
        <Experience />
        <Projects />
        <Blog posts={posts} />
        <Contact />
      </main>
    </div>


  )
}

export default HomePage