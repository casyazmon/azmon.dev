import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import { Projects } from '@/components/Projects'
import Sidebar from '@/components/Sidebar'
import Services from '@/components/Services'
import React from 'react'
import Blog from '@/components/Blog'




const HomePage = () => {
  return (

    <div className="flex flex-col sm:flex-row">
  <Sidebar />
  <main className="flex-1 sm:ml-[90px]">
    {/* Content Blocks */}
    <Hero />
    <Services />
    <Experience/>
    <Projects />
    <Blog />
    <Contact />
    {/* Footer */}
  </main>
</div>

    
  )
}

export default HomePage