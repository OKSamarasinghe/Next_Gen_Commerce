import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Master <span className="gradient-text">Commerce</span> & 
                <span className="gradient-text"> Business Studies</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Excel in O/L Commerce and A/L Business Studies with personalized online classes 
                conducted by experienced tutor <span className="font-semibold">Dinunima Samandi</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#classes" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center"
                >
                  View Classes
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 text-center"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">DS</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dinunima Samandi</h3>
                <p className="text-blue-600 font-semibold mb-4">BA (Hons) Professional Accounting (UG)</p>
                <div className="space-y-2 text-gray-600">
                  <p>✓ O/L Commerce Expert</p>
                  <p>✓ A/L Business Studies Specialist</p>
                  <p>✓ Individual & Group Classes</p>
                  <p>✓ Sinhala Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero