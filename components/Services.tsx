import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-0 m-0">
      <div className=" container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 align-middle gap-2">
          <div className="hover:shadow-lg transition-shadow duration-300 flex  flex-col h-full align-middle justify-center px-4 gap-3 py-6">
            <h3 className="text-xl font-semibold">Mobile & Web<br/> Development</h3>
            <p className="text-gray-600 ">Build sleek, scalable Android apps using Kotlin or Java. From Firebase auth to custom UI, I bring apps to life across devices with performance and polish.</p>
          </div>
          
          <div className="hover:shadow-lg transition-shadow duration-300 flex  flex-col h-full align-middle justify-center px-4 gap-3 py-6">
            <h3 className="text-xl font-semibold">Backend API<br/> Development</h3>
            <p className="text-gray-600 ">Design secure, RESTful APIs and backend systems with Spring Boot or Node.js. From auth and database layers to container-ready microservices—I build scalable foundations.</p>
          </div>

          <div className=" hover:shadow-lg transition-shadow duration-300 flex flex-col h-full mx-3.5">
            <Image
              src="/kasina.png"
              alt="Akap Azmon"
              width={400}
              height={400}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="hover:shadow-lg transition-shadow duration-300 flex  flex-col h-full align-middle justify-center px-4 gap-3">
            <h3 className="text-xl font-semibold">Full-Stack<br/> Web Development</h3>
            <p className="text-gray-600">Deliver fast, responsive web apps using React.js, Next.js, and Tailwind. Whether SSR, CMS integration, or full-stack e-commerce—I’ve got your stack covered.</p>
          </div>
        </div>
      </div>
      
        
    </section>

  )
}

export default Services