import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Classes />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default App