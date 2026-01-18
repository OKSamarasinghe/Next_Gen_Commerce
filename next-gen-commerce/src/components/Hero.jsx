import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                Master <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Commerce</span> & 
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Business Studies</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Excel in O/L Commerce and A/L Business Studies with personalized online classes 
                conducted by experienced tutor <span className="font-semibold text-blue-600">Dinunima Samandi</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#classes" 
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Classes
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 text-center"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition duration-300 max-w-md mx-auto">
              <div className="text-center">
<div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 shadow-lg overflow-hidden border-4 border-blue-500">
  <img 
    src="/teacher.jpg" 
    alt="Dinunima Samandi - Commerce Teacher" 
    className="w-full h-full object-cover"
  />
</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Dinunima Samandi</h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm sm:text-base">BA (Hons) Professional Accounting (UG)</p>
                <div className="space-y-2 text-sm sm:text-base text-gray-600">
                  <p className="flex items-center justify-center"><span className="mr-2">✓</span> O/L Commerce Expert</p>
                  <p className="flex items-center justify-center"><span className="mr-2">✓</span> A/L Business Studies Specialist</p>
                  <p className="flex items-center justify-center"><span className="mr-2">✓</span> Individual & Group Classes</p>
                  <p className="flex items-center justify-center"><span className="mr-2">✓</span> Sinhala Medium</p>
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