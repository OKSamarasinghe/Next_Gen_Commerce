import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-blue-600 shadow-lg fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
              <img 
                src="/next_gen_comlogo.png" 
                alt="Next Gen Commerce Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
              />
              <span className="hidden sm:inline">Next Gen Commerce</span>
              <span className="sm:hidden">NGC</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#home" className="text-white hover:text-blue-200 transition duration-300 font-medium">Home</a>
            <a href="#about" className="text-white hover:text-blue-200 transition duration-300 font-medium">About</a>
            <a href="#classes" className="text-white hover:text-blue-200 transition duration-300 font-medium">Classes</a>
            <a href="#features" className="text-white hover:text-blue-200 transition duration-300 font-medium">Features</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition duration-300 font-medium">Contact</a>
          </nav>

          <a href="#contact" className="hidden md:block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-md hover:shadow-lg">
            Enroll Now
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-white hover:text-blue-200 px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-white hover:text-blue-200 px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>About</a>
              <a href="#classes" className="text-white hover:text-blue-200 px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Classes</a>
              <a href="#features" className="text-white hover:text-blue-200 px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#contact" className="text-white hover:text-blue-200 px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Contact</a>
              <a href="#contact" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 text-center" onClick={() => setIsOpen(false)}>
                Enroll Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header