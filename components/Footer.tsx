import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 border-t border-border text-center text-sm text-secondary bg-background font-mono'>
      <p>
        © {new Date().getFullYear()} azmon.dev <span className="text-accent">// All rights reserved</span>
      </p>
    </footer>
  )
}

export default Footer