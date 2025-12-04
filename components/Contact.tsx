import { Mail, PhoneForwarded } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section className="bg-stone-100 dark:bg-stone-900 py-24 px-6" id="contact">
      <div className="container mx-auto flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 dark:text-stone-100 mb-6 tracking-tight">
            Have a project idea? <br className="hidden md:block" /> Let’s work together
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-lg font-light leading-relaxed max-w-lg">
            I’m currently open to new opportunities and actively looking for a role where I can apply my expertise in software development.
            If you’re looking for a passionate developer who thrives on solving complex problems and delivering innovative solutions,
            feel free to get in touch!
          </p>
        </div>

        {/* Right Side - Cards */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="flex items-start gap-4 bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-stone-200 dark:border-stone-700">
            <div className="p-3 bg-stone-100 dark:bg-stone-700 rounded-full">
              <Mail className="w-6 h-6 text-stone-800 dark:text-stone-200" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">Chat with me</h3>
              <p className="text-stone-600 dark:text-stone-400 mt-1">
                <a href="mailto:akap@azmon.dev" className="text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 underline decoration-stone-400 underline-offset-4 transition-colors">
                  akap@azmon.dev
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-stone-200 dark:border-stone-700">
            <div className="p-3 bg-stone-100 dark:bg-stone-700 rounded-full">
              <PhoneForwarded className="w-6 h-6 text-stone-800 dark:text-stone-200" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">Call me</h3>
              <p className="text-stone-600 dark:text-stone-400 mt-1">
                <a href="tel:+15062698812" className="text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 underline decoration-stone-400 underline-offset-4 transition-colors">
                  +1 (506) 269-8812
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
