import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">About Your Tutor</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get to know the experienced educator who will guide you to academic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Dinunima Samandi</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 sm:mr-4 mt-1.5 flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-700">BA (Hons) Professional Accounting (UG)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 sm:mr-4 mt-1.5 flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-700">Specialized in Commerce & Business Studies</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3 sm:mr-4 mt-1.5 flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-700">Expert in Sinhala Medium Teaching</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-3 sm:mr-4 mt-1.5 flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-700">Years of Online Teaching Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg sm:text-xl font-semibold mb-3">Teaching Philosophy</h4>
              <p className="text-sm sm:text-base leading-relaxed">
                I believe every student has the potential to excel. My personalized approach 
                ensures each student receives the attention and guidance they need to succeed 
                in their academic journey.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h4 className="text-lg sm:text-xl font-semibold mb-3">Why Choose Me?</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proven track record of student success</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Interactive and engaging teaching methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Flexible scheduling for individual needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comprehensive study materials provided</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About