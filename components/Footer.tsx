import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 border-t border-stone-200 dark:border-stone-800 text-center text-sm text-stone-600 dark:text-stone-400'>
      <p>
        &copy; {new Date().getFullYear()} Akap Azmon. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer