import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section
      id="services"
      className="bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 py-10"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-12 tracking-tight">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {/* Card 1 */}
          <div className="group hover:shadow-md transition-all duration-500 flex flex-col h-full justify-center px-8 py-10 bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800">
            <h3 className="text-2xl font-light mb-4 tracking-wide text-stone-900 dark:text-stone-100">Digital<br /> Craftsmanship</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              Building fluid, responsive applications that live on the web and in your pocket. From pixel-perfect UIs to robust logic, I create experiences that feel natural.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group hover:shadow-md transition-all duration-500 flex flex-col h-full justify-center px-8 py-10 bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800">
            <h3 className="text-2xl font-light mb-4 tracking-wide text-stone-900 dark:text-stone-100">System<br /> Architecture</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              Designing the invisible backbone of your product. Secure, scalable APIs and microservices that handle the heavy lifting with grace and speed.
            </p>
          </div>

          {/* Image Card */}
          <div className="flex flex-col h-full rounded-2xl overflow-hidden relative group">
            <Image
              src="/kasina.png"
              alt="Akap Azmon"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Card 3 */}
          <div className="group hover:shadow-md transition-all duration-500 flex flex-col h-full justify-center px-8 py-10 bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800">
            <h3 className="text-2xl font-light mb-4 tracking-wide text-stone-900 dark:text-stone-100">Holistic<br /> Solutions</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              Bridging the gap between form and function. I deliver complete, end-to-end solutions where every layer communicates perfectly.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services