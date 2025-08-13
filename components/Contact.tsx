import { Mail, PhoneForwarded } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4" id="contact">
      <div className="container mx-auto flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Have a project idea? <br className="hidden md:block" /> Let’s work together
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
            I’m currently open to new opportunities and actively looking for a role where I can apply my expertise in software development.
            If you’re looking for a passionate developer who thrives on solving complex problems and delivering innovative solutions,
            feel free to get in touch!
          </p>
        </div>

        {/* Right Side - Cards */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
            <Mail className="w-6 h-6 text-gray-800 dark:text-gray-200 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chat with me</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="mailto:akap@azmon.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
                  akap@azmon.dev
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
            <PhoneForwarded className="w-6 h-6 text-gray-800 dark:text-gray-200 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call me</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="tel:+15062698812" className="text-blue-600 dark:text-blue-400 hover:underline">
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
