import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm'>
        <p>
            &copy; {new Date().getFullYear()} Akap Azmon. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer